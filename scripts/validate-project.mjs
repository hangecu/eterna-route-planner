/**
 * Проверка структуры публичного проекта без сторонних зависимостей.
 * Запуск из корня проекта: node scripts/validate-project.mjs
 */

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataFiles = [
  "data/choice-systems.js",
  ...Array.from({ length: 5 }, (_, index) => `data/events/chapter-${index + 1}.js`),
  "data/state-catalogue.js",
  "data/initial-state.js",
  "data/planner-data.js"
];
const localeFiles = ["locales/ui.js", "locales/en.js"];
const applicationFiles = ["index.html", "assets/styles.css", "js/i18n.js", "js/route-file.js", "js/app.js", ...localeFiles, ...dataFiles];
const errors = [];
const ignoredTopLevelDirectories = new Set([".git", "node_modules", "dist", "release"]);

function listFiles(directory, prefix = "") {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const relativePath = path.posix.join(prefix, entry.name);
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory() && !prefix && (ignoredTopLevelDirectories.has(entry.name) || entry.name.startsWith(".tmp"))) {
      return [];
    }
    return entry.isDirectory() ? listFiles(absolutePath, relativePath) : [relativePath];
  });
}

function fail(message) {
  errors.push(message);
}

function read(relativePath) {
  const absolutePath = path.join(projectRoot, relativePath);
  if (!fs.existsSync(absolutePath)) {
    fail(`Отсутствует файл: ${relativePath}`);
    return "";
  }
  return fs.readFileSync(absolutePath, "utf8");
}

const projectFiles = listFiles(projectRoot);
const projectFileSet = new Set(projectFiles);

// В публичном приложении не должно быть сетевого API или внешних ресурсов.
// Исключение — две явно разрешённые страницы добровольной поддержки, открываемые только по клику.
const allowedExternalUrls = new Set([
  "https://web.tribute.tg/d/Ps8",
  "https://web.tribute.tg/d/Ptb"
]);
const foundExternalUrls = new Set();
const externalUrlPattern = /https?:\/\/[^\s"'<>`)]+/gi;
const networkPatterns = [
  [/\bfetch\s*\(/, "fetch"],
  [/\bXMLHttpRequest\b/, "XMLHttpRequest"],
  [/\bWebSocket\b/, "WebSocket"],
  [/\bsendBeacon\b/, "sendBeacon"],
  [/\bdocument\.cookie\b/, "cookie"]
];

const dangerousCodePatterns = [
  [/\beval\s*\(/, "eval"],
  [/\bnew\s+Function\s*\(/, "new Function"],
  [/\bimport\s*\(/, "динамический import"]
];

for (const relativePath of applicationFiles) {
  const source = read(relativePath);
  for (const url of source.match(externalUrlPattern) || []) {
    foundExternalUrls.add(url);
    if (!allowedExternalUrls.has(url)) fail(`${relativePath}: найден неразрешённый внешний URL (${url})`);
  }
  for (const [pattern, label] of networkPatterns) {
    if (pattern.test(source)) fail(`${relativePath}: найдено сетевое обращение (${label})`);
  }
  for (const [pattern, label] of dangerousCodePatterns) {
    if (pattern.test(source)) fail(`${relativePath}: найдено динамическое выполнение кода (${label})`);
  }
}
for (const url of allowedExternalUrls) {
  if (!foundExternalUrls.has(url)) fail(`Отсутствует разрешённая ссылка поддержки: ${url}`);
}

const html = read("index.html");
if (!html.includes("connect-src 'none'")) fail("В index.html отсутствует запрет сетевых подключений CSP");
if (/<script(?![^>]*\bsrc=)[^>]*>/i.test(html)) fail("В index.html найден встроенный исполняемый script");
const supportLink = html.match(/<a\b[^>]*\bid="supportLink"[^>]*>/i)?.[0] || "";
if (!supportLink) fail("В index.html отсутствует ссылка поддержки");
if (!/\btarget="_blank"/i.test(supportLink) || !/\brel="[^"]*noopener[^"]*noreferrer[^"]*"/i.test(supportLink)) {
  fail("Ссылка поддержки должна безопасно открываться в новой вкладке");
}
if (!/<input\b[^>]*\bid="timelineSlider"[^>]*\btype="range"/i.test(html) && !/<input\b[^>]*\btype="range"[^>]*\bid="timelineSlider"/i.test(html)) {
  fail("В index.html отсутствует нижний ползунок маршрута");
}
for (const id of ["timelineSliderMarkers", "timelineCurrentMarker", "timelineSliderTooltip", "searchModeBar", "clearSearchButton", "currentChoiceHeaderButton", "headerToggleButton", "headerExpandButton", "technicalInfoDetails"]) {
  if (!new RegExp(`\\bid="${id}"`).test(html)) fail(`В index.html отсутствует элемент интерфейса ${id}`);
}
if (/timeline-(?:phase-overlay|center-line)/.test(html)) {
  fail("В index.html остались прежние неподвижные обозначения текущей сцены");
}
if (/\bid="(?:routeInfoButton|routeInfoPanel|attributeContext)"/.test(html)) {
  fail("В index.html остались удалённые элементы прежней шапки");
}
const currentChoiceButton = html.match(/<button\b[^>]*\bid="currentChoiceButton"[^>]*>/i)?.[0] || "";
const currentChoiceHeaderButton = html.match(/<button\b[^>]*\bid="currentChoiceHeaderButton"[^>]*>/i)?.[0] || "";
if (!/\baria-keyshortcuts="Home"/i.test(currentChoiceButton) || !/\baria-keyshortcuts="Home"/i.test(currentChoiceHeaderButton)) {
  fail("Для перехода к текущему выбору не указан хоткей Home");
}
const styles = read("assets/styles.css");
if (!/@media\s*\(prefers-reduced-motion:\s*reduce\)/i.test(styles)) {
  fail("В стилях не учтён системный режим уменьшенной анимации");
}
const appSource = read("js/app.js");
for (const marker of ["timeline.position", "search.active", "sceneTypeBadge", "chapterLanguageSelect", "romanNumeral", "updateCurrentNavigationVisibility", "routeUncalculatedBefore", "conditionRequirementText", "routeGap.hint"]) {
  if (!appSource.includes(marker)) fail(`js/app.js: отсутствует поддержка ${marker}`);
}
for (const marker of ["timeline-chapter-segment", "timeline-chapter-label", "scene-card.timeline-current::after", "header-current-button", "contextual-visible", "choice-card.uncalculated", "route-gap-notice", "logic-group.unknown", "scene-card.unavailable:focus-within", "scene-card.unavailable .route-gap-notice"]) {
  if (!styles.includes(marker)) fail(`assets/styles.css: отсутствует оформление ${marker}`);
}
for (const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  const target = match[1];
  if (/^(?:https?:|data:|#)/i.test(target)) continue;
  const exactTarget = path.posix.normalize(decodeURIComponent(target.split(/[?#]/, 1)[0]).replaceAll("\\", "/"));
  if (!projectFileSet.has(exactTarget)) fail(`index.html: отсутствует локальный ресурс с точным регистром ${target}`);
}

const routeFileContext = vm.createContext({});
try {
  vm.runInContext(read("js/route-file.js"), routeFileContext, { filename: "js/route-file.js" });
  const routeFiles = routeFileContext.ETERNA_ROUTE_FILES;
  const sample = [{ scene: "scene-example", choice: "2" }];
  const serialized = routeFiles?.serialize(sample);
  const parsed = routeFiles?.parse(serialized);
  if (JSON.stringify(parsed) !== JSON.stringify(sample)) fail("Формат маршрута не проходит проверку записи и чтения");
  const publicKeys = Object.keys(JSON.parse(serialized || "{}")).sort();
  if (JSON.stringify(publicKeys) !== JSON.stringify(["choices", "format", "version"])) {
    fail("Файл маршрута содержит поля помимо формата, версии и выбранных решений");
  }
} catch (error) {
  fail(`js/route-file.js: ошибка формата маршрута — ${error.message}`);
}

const allowedExtensions = new Set([
  "", ".css", ".html", ".js", ".md", ".mjs", ".png", ".txt", ".yml", ".yaml"
]);
const privateSourcePhrases = [
  ["generated from", "the game localization"].join(" "),
  ["game localization", "supplied by"].join(" ")
];
const serviceMarkers = ["TO" + "DO", "FIX" + "ME", "CHANGE" + "ME"];
const prohibitedPublicationPatterns = [
  [/[A-Z]:\\Users\\|file:\/\/[A-Z]:\/Users\//i, "локальный путь пользователя"],
  [/\/(?:home|Users)\/[^/\s]+\//, "локальный путь пользователя"],
  [/-----BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY-----/, "закрытый ключ"],
  [/\b(?:api[_-]?key|client[_-]?secret|password)\s*[:=]/i, "возможный секрет"],
  [new RegExp(privateSourcePhrases.join("|"), "i"), "описание непубличного источника"],
  [new RegExp(`\\b(?:${serviceMarkers.join("|")})\\b`), "незавершённая служебная пометка"]
];
for (const relativePath of projectFiles) {
  const extension = path.extname(relativePath).toLowerCase();
  if (!allowedExtensions.has(extension)) fail(`Неожиданный тип файла: ${relativePath}`);
  const size = fs.statSync(path.join(projectRoot, relativePath)).size;
  if (size > 1024 * 1024) fail(`Файл превышает 1 МБ и может не отображаться на GitHub: ${relativePath}`);
  if (extension !== ".png") {
    const source = read(relativePath);
    for (const [pattern, label] of prohibitedPublicationPatterns) {
      if (pattern.test(source)) fail(`${relativePath}: найдено ${label}`);
    }
  }
}

for (const relativePath of projectFiles.filter(file => file.endsWith(".png"))) {
  const buffer = fs.readFileSync(path.join(projectRoot, relativePath));
  let offset = 8;
  while (offset + 12 <= buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString("ascii", offset + 4, offset + 8);
    if (["tEXt", "zTXt", "iTXt"].includes(type)) {
      fail(`${relativePath}: найден текстовый блок метаданных PNG (${type})`);
    }
    offset += length + 12;
    if (type === "IEND") break;
  }
}

const expectedEventFiles = new Set(dataFiles.filter(file => file.startsWith("data/events/")));
const actualEventFiles = new Set(listFiles(path.join(projectRoot, "data/events"))
  .map(file => `data/events/${file}`));
for (const relativePath of expectedEventFiles) {
  if (!actualEventFiles.has(relativePath)) fail(`Отсутствует файл событий: ${relativePath}`);
}
for (const relativePath of actualEventFiles) {
  if (!expectedEventFiles.has(relativePath)) fail(`Лишний файл событий: ${relativePath}`);
}

for (const relativePath of projectFiles.filter(file => file.endsWith(".md"))) {
  const source = read(relativePath);
  for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    let target = match[1].trim().replace(/^<|>$/g, "");
    if (/^(?:https?:|mailto:|#)/i.test(target)) continue;
    target = target.split("#", 1)[0];
    if (!target) continue;
    const absoluteTarget = path.resolve(projectRoot, path.dirname(relativePath), decodeURIComponent(target));
    if (!fs.existsSync(absoluteTarget)) fail(`${relativePath}: не найдена цель ссылки ${target}`);
    const exactTarget = path.posix.normalize(path.posix.join(
      path.posix.dirname(relativePath),
      decodeURIComponent(target).replaceAll("\\", "/")
    ));
    if (!projectFileSet.has(exactTarget)) fail(`${relativePath}: регистр пути ссылки не совпадает с файлом ${target}`);
  }
}

function checkPublicStrings(value, location = "data") {
  if (typeof value === "string") {
    if (value.length > 120) fail(`${location}: строка длиннее 120 символов и требует проверки`);
    if (/\r|\n/.test(value)) fail(`${location}: многострочный текст в данных не допускается`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((child, index) => checkPublicStrings(child, `${location}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) checkPublicStrings(child, `${location}.${key}`);
  }
}

// Выполняются только декларативные файлы данных, но не браузерное приложение.
const context = vm.createContext({ console });
for (const relativePath of dataFiles) {
  const source = read(relativePath);
  if (!source) continue;
  try {
    vm.runInContext(source, context, { filename: relativePath });
  } catch (error) {
    fail(`${relativePath}: ошибка JavaScript — ${error.message}`);
  }
}

const payload = context.PLANNER_PAYLOAD;
if (!payload?.planner || !payload?.metadata) {
  fail("data/planner-data.js не собрал PLANNER_PAYLOAD");
} else {
  const chapters = payload.planner.chapters;
  const entities = payload.metadata.entities;
  const appVersion = payload.app?.version;
  const staticVersion = html.match(/\bid="appVersion"[^>]*>([^<]+)</i)?.[1]?.trim();
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(appVersion || "")) {
    fail("Не указана корректная версия приложения");
  }
  if (staticVersion !== appVersion) fail("Версия приложения в сводке не совпадает с данными проекта");
  checkPublicStrings(payload);
  if (!Array.isArray(chapters) || chapters.length !== 5) fail("Ожидалось пять глав с планируемыми событиями");
  if (!entities || typeof entities !== "object") fail("Не загружен справочник состояний");

  const auxiliaryKinds = new Set([
    "eventOccurred",
    "tripSelected",
    "choiceInSpark",
    "eventCompleted",
    "locationInEterna"
  ]);
  for (const [key, record] of Object.entries(entities || {})) {
    if (record.auxiliary) {
      if (record.kind !== "objective") fail(`${key}: вспомогательным может быть только логическое состояние`);
      if (!record.label || record.label === "Вспомогательное условие") {
        fail(`${key}: вспомогательное состояние не имеет понятного названия`);
      }
      if (!auxiliaryKinds.has(record.auxiliaryKind)) {
        fail(`${key}: неизвестный тип вспомогательного состояния`);
      }
    } else if (record.auxiliaryKind) {
      fail(`${key}: тип вспомогательного состояния указан без auxiliary`);
    }
    if (/^Сюжетный итог(?:\s+\d+)?$/u.test(record.label || "")) {
      fail(`${key}: вместо игрового названия состояния оставлена заглушка`);
    }
  }

  const auxiliaryWrites = new Set();
  function collectAuxiliaryWrites(value) {
    if (!value || typeof value !== "object") return;
    if (value.type === "flag" && value.objective?.key && entities?.[value.objective.key]?.auxiliary) {
      auxiliaryWrites.add(value.objective.key);
    }
    for (const child of Object.values(value)) collectAuxiliaryWrites(child);
  }
  collectAuxiliaryWrites(payload.planner);
  for (const [key, record] of Object.entries(entities || {})) {
    if (record.auxiliary && !auxiliaryWrites.has(key)) {
      fail(`${key}: вспомогательное состояние нигде не изменяется и не должно показываться пользователю`);
    }
  }

  const localeContext = vm.createContext({ console });
  for (const relativePath of localeFiles) {
    try {
      vm.runInContext(read(relativePath), localeContext, { filename: relativePath });
    } catch (error) {
      fail(`${relativePath}: ошибка JavaScript — ${error.message}`);
    }
  }
  const locales = localeContext.PLANNER_LOCALES;
  const russianUi = locales?.languages?.ru?.ui;
  const english = locales?.languages?.en;
  const englishUi = english?.ui;
  const englishGame = english?.game;
  if (!russianUi || !englishUi || !englishGame) {
    fail("Не загружены русская и английская локализации");
  } else {
    const russianKeys = Object.keys(russianUi).sort();
    const englishKeys = Object.keys(englishUi).sort();
    if (JSON.stringify(russianKeys) !== JSON.stringify(englishKeys)) {
      fail("Наборы ключей русского и английского интерфейса различаются");
    }
    for (const kind of auxiliaryKinds) {
      for (const value of ["false", "true"]) {
        const key = `condition.auxiliary.${kind}.${value}`;
        if (!russianUi[key] || !englishUi[key]) fail(`Не локализовано отображение ${key}`);
      }
    }
    checkPublicStrings(englishGame, "locales.en.game");
    function checkEnglishText(value, location) {
      if (typeof value === "string" && /[А-Яа-яЁё]/.test(value)) {
        fail(`${location}: в английской локализации остался русский текст`);
      } else if (value && typeof value === "object") {
        for (const [key, child] of Object.entries(value)) checkEnglishText(child, `${location}.${key}`);
      }
    }
    checkEnglishText(english, "locales.en");

    const allowedSceneFields = new Set(["title", "choices"]);
    const translatedSceneIds = new Set(Object.keys(englishGame.scenes || {}));
    for (const chapter of chapters || []) {
      if (!chapter.title) fail(`${chapter.id}: отсутствует название главы`);
      if (!englishGame.metadata?.chapters?.[chapter.id]) fail(`${chapter.id}: нет английского названия главы`);
      for (const scene of chapter.scenes || []) {
        if (scene.type === "transition") continue;
        const localized = englishGame.scenes?.[scene.id];
        if (!localized?.title) fail(`${scene.id}: нет английского названия`);
        for (const field of Object.keys(localized || {})) {
          if (!allowedSceneFields.has(field)) fail(`${scene.id}: локаль пытается изменить поле ${field}`);
        }
        const expectedChoices = new Set((scene.choices || []).map(choice => String(choice.number)));
        const translatedChoices = new Set(Object.keys(localized?.choices || {}));
        if (JSON.stringify([...expectedChoices].sort()) !== JSON.stringify([...translatedChoices].sort())) {
          fail(`${scene.id}: английская локаль содержит неполный набор вариантов`);
        }
        translatedSceneIds.delete(scene.id);
      }
    }
    for (const sceneId of translatedSceneIds) fail(`Английская локаль содержит неизвестное событие ${sceneId}`);

    for (const [systemKey, system] of Object.entries(payload.planner.choiceSystems || {})) {
      const localized = englishGame.choiceSystems?.[systemKey] || {};
      for (const option of system.options || []) {
        if (!localized[option.id]?.text) fail(`${option.id}: нет английского названия варианта`);
        if (option.title && !localized[option.id]?.title) fail(`${option.id}: нет английского названия группы`);
      }
    }

    for (const [key, record] of Object.entries(entities || {})) {
      const synthetic = record.kind === "statusGroup" ||
        key === "state-0311";
      const localized = englishGame.entities?.[key];
      if (!synthetic && !localized?.label) fail(`${key}: нет английского названия состояния`);
      if (/^Story outcome(?:\s+\d+)?$/iu.test(localized?.label || "")) {
        fail(`${key}: в английской локали оставлена заглушка состояния`);
      }
      if (record.categoryLabel && !localized?.categoryLabel) fail(`${key}: нет английского названия категории`);
      if (record.sides) {
        if (!localized?.sides?.["0"] || !localized?.sides?.["1"]) fail(`${key}: не переведены стороны параметра`);
      }
      if (record.values) {
        const expected = Object.keys(record.values).sort();
        const actual = Object.keys(localized?.values || {}).sort();
        if (JSON.stringify(expected) !== JSON.stringify(actual)) fail(`${key}: не переведены значения статьи`);
      }
      for (const field of Object.keys(localized || {})) {
        if (!["label", "categoryLabel", "sides", "values"].includes(field)) {
          fail(`${key}: локаль пытается изменить поле ${field}`);
        }
      }
    }

    for (const key of Object.keys(payload.metadata.groups || {})) {
      if (!englishGame.metadata?.groups?.[key]) fail(`${key}: не переведена группа состояния`);
    }
    for (const key of Object.keys(payload.metadata.estateAllegianceRanges || {})) {
      if (!englishGame.metadata?.estateAllegianceRanges?.[key]) fail(`${key}: не переведён статус сословия`);
    }
    for (const key of Object.keys(payload.metadata.estateParameters || {})) {
      if (!englishGame.metadata?.estateParameters?.[key]) fail(`${key}: не переведён показатель сословия`);
    }
  }

  function effectReferences(effect) {
    switch (effect.type) {
      case "stat": return [effect.parameter];
      case "relation": return [effect.character];
      case "character": return [effect.value ? effect.character : null, effect.status || null].filter(Boolean);
      case "flag": return [effect.objective];
      case "ending": return [effect.ending];
      case "faction": return [effect.estate];
      case "axis": return [effect.bilateralParameter];
      case "article": return [effect.article];
      case "status": return [effect.status];
      default: return [];
    }
  }

  function effectIsAuxiliary(effect) {
    if (effect.type === "ending" || effect.type === "creed-ending") return false;
    return effectReferences(effect).some(reference => entities?.[reference?.key]?.auxiliary);
  }

  function choiceChangesPlan(choice) {
    if ((choice.effects || []).length || choice.settings?.applyCreedLoyalty) return true;
    return (choice.requirements || []).some(group =>
      group.unlock?.parameter && Number(group.unlock.cost) > 0
    );
  }

  const sceneIds = new Set();
  const occurrenceGroups = new Map();
  const onceGroups = new Map();
  const recurringDefinitionGroups = new Map();
  for (const chapter of chapters || []) {
    if (!Array.isArray(chapter.scenes)) {
      fail(`${chapter.id || "неизвестная глава"}: отсутствует массив scenes`);
      continue;
    }
    for (const scene of chapter.scenes) {
      if (!scene.id || !scene.title) fail(`${chapter.id}: событие без id или title`);
      if (sceneIds.has(scene.id)) fail(`Повторяется идентификатор события: ${scene.id}`);
      sceneIds.add(scene.id);

      if (scene.recurring) {
        const { id, occurrenceKey: ignoredOccurrenceKey, ...definition } = scene;
        const signature = JSON.stringify(definition);
        if (!recurringDefinitionGroups.has(signature)) recurringDefinitionGroups.set(signature, []);
        recurringDefinitionGroups.get(signature).push({ chapter, scene });
      }

      if (scene.occurrenceKey !== undefined) {
        if (typeof scene.occurrenceKey !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(scene.occurrenceKey)) {
          fail(`${scene.id}: общий ключ появления должен быть непустой строкой из латинских букв, цифр и дефисов`);
        } else {
          if (!scene.recurring) fail(`${scene.id}: общий ключ появления допустим только для повторно проверяемого события`);
          if (!occurrenceGroups.has(scene.occurrenceKey)) occurrenceGroups.set(scene.occurrenceKey, []);
          occurrenceGroups.get(scene.occurrenceKey).push({ chapter, scene });
        }
      }

      if (scene.onceKey !== undefined) {
        if (typeof scene.onceKey !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(scene.onceKey)) {
          fail(`${scene.id}: ключ однократного события должен быть непустой строкой из латинских букв, цифр и дефисов`);
        } else {
          if (!scene.recurring) fail(`${scene.id}: ключ однократного события допустим только для повторно проверяемой сцены`);
          if (!onceGroups.has(scene.onceKey)) onceGroups.set(scene.onceKey, []);
          onceGroups.get(scene.onceKey).push({ chapter, scene });
        }
      }

      if (scene.locationVariant !== undefined) {
        if (!new Set(["eterna", "journey"]).has(scene.locationVariant)) {
          fail(`${scene.id}: неизвестный вариант местоположения ${scene.locationVariant}`);
        }
        if (!scene.onceKey) fail(`${scene.id}: вариант местоположения указан без общего ключа однократного события`);
      }

      if (scene.showLocationChange !== undefined && typeof scene.showLocationChange !== "boolean") {
        fail(`${scene.id}: настройка показа смены местоположения должна быть логическим значением`);
      }

      const choices = scene.choiceSystem
        ? payload.planner.choiceSystems?.[scene.choiceSystem]?.options || []
        : scene.choices || [];
      const effects = scene.effects || [];
      if (!choices.length && !effects.length) {
        fail(`${scene.id}: запись без выбора и последствий`);
      }
      if (choices.length && !scene.choiceSystem && !choices.some(choiceChangesPlan)) {
        fail(`${scene.id}: варианты не меняют план прохождения`);
      }
      const publicEffects = effects.filter(effect => !effectIsAuxiliary(effect));
      if (!choices.length && effects.length && !publicEffects.length && scene.type !== "transition") {
        fail(`${scene.id}: невидимое автоматическое изменение не обозначено как transition`);
      }
      if (scene.type === "transition" && (choices.length || !effects.length || publicEffects.length)) {
        fail(`${scene.id}: автоматическое изменение должно содержать только последствия`);
      }

      const choiceKeys = new Set();
      for (const choice of scene.choices || []) {
        const key = String(choice.number ?? choice.id ?? "");
        if (!key) fail(`${scene.id}: выбор без number или id`);
        if (choiceKeys.has(key)) fail(`${scene.id}: повторяется выбор ${key}`);
        choiceKeys.add(key);
      }
    }
  }

  for (const occurrences of recurringDefinitionGroups.values()) {
    const chapterIds = new Set(occurrences.map(({ chapter }) => chapter.id));
    if (chapterIds.size < 2) continue;
    const withoutOccurrenceKey = occurrences.filter(({ scene }) => !scene.occurrenceKey);
    if (withoutOccurrenceKey.length) {
      const sceneList = withoutOccurrenceKey.map(({ scene }) => scene.id).join(", ");
      fail(`Повторно подключённое событие не имеет проверенного общего ключа появления: ${sceneList}`);
    }
  }

  for (const [occurrenceKey, occurrences] of occurrenceGroups) {
    if (occurrences.length < 2) {
      fail(`${occurrenceKey}: общий ключ появления указан только у одного события`);
      continue;
    }
    const chapterIds = new Set(occurrences.map(({ chapter }) => chapter.id));
    if (chapterIds.size !== occurrences.length) {
      fail(`${occurrenceKey}: в одной главе повторяется одно и то же общее событие`);
    }
    const definitions = new Set(occurrences.map(({ scene }) => {
      const { id, occurrenceKey: ignoredOccurrenceKey, ...definition } = scene;
      return JSON.stringify(definition);
    }));
    if (definitions.size !== 1) {
      fail(`${occurrenceKey}: копии общего события различаются условиями, вариантами или последствиями`);
    }
  }

  for (const [onceKey, occurrences] of onceGroups) {
    if (occurrences.length < 2) {
      fail(`${onceKey}: ключ однократного события указан только у одной сцены`);
      continue;
    }
    const variants = new Set(occurrences.map(({ scene }) => scene.locationVariant).filter(Boolean));
    if (variants.size === 1) fail(`${onceKey}: общий ключ не связывает разные варианты сцены`);
  }

  const missingReferences = new Set();
  function checkReferences(value) {
    if (!value || typeof value !== "object") return;
    if (!Array.isArray(value) && typeof value.key === "string" && value.key.startsWith("state-")) {
      if (!entities[value.key]) missingReferences.add(value.key);
    }
    for (const child of Object.values(value)) checkReferences(child);
  }
  checkReferences(payload.planner);
  checkReferences(payload.metadata.defaults);
  for (const key of missingReferences) fail(`Нет записи для ссылки ${key}`);

  if (!errors.length) {
    console.log(`OK: ${chapters.length} глав, ${sceneIds.size} событий, ${Object.keys(entities).length} записей состояния.`);
    console.log("OK: структура, ссылки и автономная работа проверены.");
  }
}

if (errors.length) {
  console.error("Проверка не пройдена:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
}
