/**
 * Логика планировщика: проверка условий, применение последствий,
 * пересчёт маршрута, отображение интерфейса и локальное сохранение.
 * Внешних библиотек и фоновых сетевых запросов нет.
 */
(() => {
  "use strict";

  // Данные загружаются из каталога data/ до запуска приложения.
  const payload = globalThis.PLANNER_PAYLOAD;
  const planner = payload.planner;
  const meta = payload.metadata;
  const I18N = globalThis.PLANNER_I18N;
  const ROUTE_FILES = globalThis.ETERNA_ROUTE_FILES;
  const t = I18N.t;
  const APP_NAME = t("app.name");
  const APP_VERSION = payload.app?.version || "";
  const GAME_NAME = "The Life and Suffering of Prince Jerian";
  const SUPPORT_URLS = Object.freeze({
    ru: "https://web.tribute.tg/d/Ps8",
    en: "https://web.tribute.tg/d/Ptb"
  });
  const STORAGE_KEY = `eterna-route-planner-${meta.schema}`;
  const LOCATION_RECORD = Object.values(meta.entities).find(record => record.auxiliaryKind === "locationInEterna") || null;
  const LOCATION_KEY = LOCATION_RECORD?.key || "";
  const CHAPTER_NAMES = Object.fromEntries(planner.chapters.map(chapter => [chapter.id, chapter.title]));
  const TYPE_NAMES = Object.fromEntries([
    "scene", "hidden", "text", "hidden-text", "scene-no-choice",
    "hidden-no-choice", "annual-project", "journey"
  ].map(type => [type, t(`scene.type.${type}`)]));
  const QUICK_SCROLL_DURATION = 640;
  const $ = selector => document.querySelector(selector);
  const clone = value => JSON.parse(JSON.stringify(value));
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const sign = value => Number(value) > 0 ? `+${value}` : String(value);
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const referenceKey = reference => reference && reference.key;
  const romanNumeral = value => {
    const digits = [
      [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"],
      [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];
    let number = Math.max(1, Math.floor(Number(value) || 1));
    let result = "";
    for (const [amount, numeral] of digits) {
      while (number >= amount) {
        result += numeral;
        number -= amount;
      }
    }
    return result;
  };

  let saved = { selections: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      saved = { ...saved, ...JSON.parse(raw) };
    }
  } catch (_) {}
  let selections = saved.selections || {};
  let replayResult = null;
  let panelOpen = false;
  let panelMode = "state";
  let activeChapter = 1;
  let conditionBindings = [];
  let collectBindings = false;
  const plainEffectsCache = new WeakMap();
  let armedUnlocks = new Set();
  let routeNoticeTimer = 0;
  let autoScrollFrame = 0;
  let timelineScrollFrame = 0;
  let timelineSliderFrame = 0;
  let updateTimelineScrollbar = () => {};
  let toolsMenuOpen = false;
  let routeInfoOpen = false;
  let headerCollapsed = Boolean(saved.ui?.headerCollapsed);
  let choiceHistoryOpen = false;
  let routeFileOpen = false;
  let choiceHistoryTarget = null;
  const sceneElements = new Map();
  const choiceElements = new Map();
  const sceneToItem = new WeakMap();

  // ── Индекс событий и состояние интерфейса ─────────────────────────────
  const flatScenes = [];
  planner.chapters.forEach(chapter => {
    chapter.scenes.forEach((scene, index) => {
      flatScenes.push({
        chapter,
        scene,
        index,
        flatIndex: flatScenes.length,
        key: `${chapter.number}:${index}:${scene.id}`
      });
    });
  });
  flatScenes.forEach(item => sceneToItem.set(item.scene, item));
  const sceneById = new Map(flatScenes.map(item => [item.scene.id, item]));
  function orderedScenes() {
    return replayResult?.orderedItems || flatScenes;
  }

  function timelineIndex(item) {
    return item ? (replayResult?.orderIndex.get(item.key) ?? item.flatIndex) : flatScenes.length;
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        selections,
        ui: { headerCollapsed }
      }));
    } catch (_) {}
  }

  function entity(reference) {
    const key = referenceKey(reference);
    return key ? meta.entities[key] : null;
  }

  function label(reference) {
    if (!reference) return t("common.unknown");
    const record = entity(reference);
    return record ? record.label : (reference.id || reference.key || t("common.unknown"));
  }

  function bilateralSideLabel(reference, side) {
    const record = entity(reference);
    return (record && record.sides && record.sides[String(side)]) || label(reference);
  }

  // ── Модель состояния прохождения ──────────────────────────────────────
  function initialState() {
    const state = clone(meta.defaults);
    recalculateDerived(state);
    return state;
  }

  function snapshotState(state) {
    const statuses = {};
    for (const [character, groups] of Object.entries(state.statuses || {})) {
      statuses[character] = { ...groups };
    }
    return {
      parameters: { ...state.parameters },
      bilateral: { ...state.bilateral },
      relations: { ...state.relations },
      estates: { ...state.estates },
      objectives: { ...state.objectives },
      endings: { ...state.endings },
      articles: { ...state.articles },
      statuses
    };
  }

  function compare(left, operator, right) {
    switch (operator) {
      case ">": return left > right;
      case "<": return left < right;
      case "=": return left === right;
      case ">=": return left >= right;
      case "<=": return left <= right;
      case "!=": return left !== right;
      default: return false;
    }
  }

  function bilateralValue(state, reference, side) {
    const key = referenceKey(reference);
    const record = entity(reference) || { min: -10, max: 10 };
    const right = state.bilateral[key] ?? record.default ?? 0;
    const average = Math.trunc((record.min + record.max) / 2);
    return Number(side) === 1 ? right : average * 2 - right;
  }

  function estatePower(state, reference) {
    const record = entity(reference);
    if (!record) return 0;
    let result = record.defaultPower || 0;
    for (const component of record.powerComponents || []) {
      const parameter = meta.entities[component.parameter];
      if (!parameter) continue;
      const value = bilateralValue(state, parameter, component.side);
      result += Math.max(0, value);
    }
    return Math.max(0, result);
  }

  function estateValue(state, reference, key) {
    if (Number(key) === 1) return estatePower(state, reference);
    return state.estates[referenceKey(reference)] ?? 0;
  }

  // ── Проверка условий доступности ───────────────────────────────────────
  function evaluateCondition(condition, state, scene, choice) {
    let value = false;
    switch (condition.type) {
      case "always": value = true; break;
      case "stat":
        value = compare(state.parameters[referenceKey(condition.parameter)] ?? 0, condition.operator, condition.value);
        break;
      case "relation":
        value = compare(state.relations[referenceKey(condition.character)] ?? 0, condition.operator, condition.value);
        break;
      case "flag":
        value = Boolean(state.objectives[referenceKey(condition.objective)]);
        if (condition.not) value = !value;
        break;
      case "ending":
        value = Boolean(state.endings[referenceKey(condition.ending)]);
        if (condition.not) value = !value;
        break;
      case "faction":
        value = compare(estateValue(state, condition.estate, condition.estateParameter), condition.operator, condition.value);
        break;
      case "article":
        value = (state.articles[referenceKey(condition.article)] ?? 0) === condition.value;
        if (condition.not) value = !value;
        break;
      case "axis":
        value = compare(bilateralValue(state, condition.bilateralParameter, condition.side), condition.operator, condition.value);
        break;
      case "status": {
        const character = referenceKey(condition.character);
        const group = referenceKey(condition.statusGroup) || "default";
        value = (state.statuses[character] || {})[group] === referenceKey(condition.status);
        if (condition.not) value = !value;
        break;
      }
      case "block": {
        value = evaluateGroup(condition.block, state, scene, choice);
        if (condition.not) value = !value;
        break;
      }
      default: value = false;
    }
    return value;
  }

  function evaluateGroup(group, state, scene, choice) {
    if (!group) return true;
    const direct = (group.conditions || []).every(condition => evaluateCondition(condition, state, scene, choice));
    const alternatives = group.anyOf || [];
    const any = !alternatives.length || alternatives.some(list =>
      list.every(condition => evaluateCondition(condition, state, scene, choice))
    );
    return direct && any;
  }

  function groupAvailability(group, state, scene, choice) {
    if (evaluateGroup(group, state, scene, choice)) {
      return { available: true, satisfied: true, payable: false };
    }
    const unlock = group.unlock || {};
    if (unlock.locked || !unlock.parameter) {
      return { available: false, satisfied: false, payable: false };
    }
    return {
      available: false,
      satisfied: false,
      payable: true,
      parameter: unlock.parameter,
      cost: unlock.cost || 0
    };
  }

  function unlockArmKey(sceneKey, value, parameter) {
    return `${sceneKey}\u0000${String(value)}\u0000${referenceKey(parameter)}`;
  }

  function choiceAvailability(choice, state, scene, context = null) {
    const groups = choice.requirements || [];
    const details = groups.map(group => groupAvailability(group, state, scene, choice));
    const paymentMap = new Map();
    details.forEach((detail, groupIndex) => {
      if (!detail.payable) return;
      const key = referenceKey(detail.parameter);
      if (!paymentMap.has(key)) {
        paymentMap.set(key, { parameter: detail.parameter, cost: 0, groupIndexes: [] });
      }
      const payment = paymentMap.get(key);
      payment.cost += detail.cost;
      payment.groupIndexes.push(groupIndex);
    });
    const requireUnlock = Boolean(context && context.requireUnlock);
    const hardBlocked = details.some(detail => !detail.satisfied && !detail.payable);
    const payments = [...paymentMap.values()].map(payment => {
      const key = referenceKey(payment.parameter);
      const current = state.parameters[key] ?? 0;
      const requested = !requireUnlock || armedUnlocks.has(unlockArmKey(context.sceneKey, context.value, payment.parameter));
      const affordable = current >= payment.cost;
      const canArm = !hardBlocked && affordable;
      return {
        ...payment,
        current,
        affordable,
        armed: requested && canArm,
        canArm
      };
    });
    const paymentByGroup = new Map();
    for (const payment of payments) {
      for (const groupIndex of payment.groupIndexes) paymentByGroup.set(groupIndex, payment);
    }
    details.forEach((detail, index) => {
      if (!detail.payable) return;
      const payment = paymentByGroup.get(index);
      detail.available = payment.canArm && payment.armed;
      detail.affordable = payment.affordable;
      detail.armed = payment.armed;
    });
    return {
      available: details.every(detail => detail.available),
      unlockable: payments.length > 0 && payments.every(payment => payment.canArm),
      hardBlocked,
      payments,
      details
    };
  }

  // ── Применение последствий ─────────────────────────────────────────────
  function applyParameterDelta(state, reference, delta) {
    const key = referenceKey(reference);
    const record = entity(reference) || { min: -999, max: 999 };
    state.parameters[key] = clamp((state.parameters[key] ?? record.default ?? 0) + delta, record.min, record.max);
  }

  function applyEffect(state, effect) {
    let key;
    let record;
    switch (effect.type) {
      case "stat":
        applyParameterDelta(state, effect.parameter, effect.value);
        break;
      case "relation":
        key = referenceKey(effect.character);
        state.relations[key] = clamp(
          (state.relations[key] ?? 0) + effect.value,
          meta.relationRange.min,
          meta.relationRange.max
        );
        break;
      case "character":
        key = referenceKey(effect.character);
        if (effect.value) {
          state.relations[key] = clamp(
            (state.relations[key] ?? 0) + effect.value,
            meta.relationRange.min,
            meta.relationRange.max
          );
        }
        if (effect.status && effect.statusGroup) setStatus(state, effect);
        break;
      case "flag":
        state.objectives[referenceKey(effect.objective)] = Boolean(effect.unlocked);
        break;
      case "ending":
        state.endings[referenceKey(effect.ending)] = Boolean(effect.unlocked);
        break;
      case "article":
        state.articles[referenceKey(effect.article)] = effect.value;
        break;
      case "faction":
        if (Number(effect.estateParameter) === 2) {
          key = referenceKey(effect.estate);
          record = entity(effect.estate) || { min: 0, max: 20 };
          state.estates[key] = clamp((state.estates[key] ?? 0) + effect.value, record.min, record.max);
        }
        break;
      case "axis": {
        key = referenceKey(effect.bilateralParameter);
        record = entity(effect.bilateralParameter) || { min: -10, max: 10 };
        const sideValue = bilateralValue(state, effect.bilateralParameter, effect.side);
        const nextSide = clamp(sideValue + effect.value, record.min, record.max);
        const average = Math.trunc((record.min + record.max) / 2);
        state.bilateral[key] = Number(effect.side) === 1 ? nextSide : average * 2 - nextSide;
        break;
      }
      case "status":
        setStatus(state, effect);
        break;
    }
  }

  function setStatus(state, effect) {
    const character = referenceKey(effect.character);
    const group = referenceKey(effect.statusGroup) || "default";
    if (!state.statuses[character]) state.statuses[character] = {};
    state.statuses[character][group] = referenceKey(effect.status) || null;
  }

  function creedChangeForEstate(state, estate) {
    let change = 0;
    for (const configuration of estate.creedChanges || []) {
      const articleValue = state.articles[configuration.article] ?? 0;
      change += configuration.values[String(articleValue)] || 0;
    }
    return change;
  }

  function applyCreedChanges(state) {
    for (const estate of Object.values(meta.entities).filter(item => item.kind === "estate")) {
      const key = estate.key;
      state.estates[key] = clamp(
        (state.estates[key] ?? estate.defaultLoyalty ?? 0) + creedChangeForEstate(state, estate),
        estate.min,
        estate.max
      );
    }
  }

  function recalculateDerived(state) {
    const estates = Object.values(meta.entities).filter(item => item.kind === "estate");
    const tempest = Object.values(meta.entities).find(item => item.role === "tempest-power");
    const tempestPower = tempest ? (state.parameters[tempest.key] ?? 0) : 0;
    const calculate = afterCreed => {
      let allies = 0;
      let enemies = 0;
      for (const estate of estates) {
        let loyalty = state.estates[estate.key] ?? estate.defaultLoyalty ?? 0;
        if (afterCreed) loyalty += creedChangeForEstate(state, estate);
        loyalty = clamp(loyalty, estate.min, estate.max);
        const power = estatePower(state, estate);
        if (loyalty >= 17) allies += power;
        else if (loyalty <= 6) enemies += power;
      }
      return tempestPower + allies - enemies;
    };
    const target = Object.values(meta.entities).find(item => item.role === "estate-balance-after-creed");
    if (target) state.parameters[target.key] = clamp(calculate(true), target.min, target.max);
  }

  function payAndApply(state, choice, availability) {
    for (const payment of availability.payments) {
      applyParameterDelta(state, payment.parameter, -payment.cost);
    }
    for (const effect of choice.effects || []) applyEffect(state, effect);
    if (choice.settings && choice.settings.applyCreedLoyalty) applyCreedChanges(state);
    recalculateDerived(state);
  }

  function numericToken(kind, reference, extra = "") {
    const key = referenceKey(reference);
    return key ? `${kind}|${key}|${extra}` : null;
  }

  function collectConditionTokens(condition, scene, target, visitedGroups = new Set()) {
    let token = null;
    switch (condition.type) {
      case "stat": token = numericToken("parameter", condition.parameter); break;
      case "relation": token = numericToken("relation", condition.character); break;
      case "faction": token = numericToken("estate", condition.estate, condition.estateParameter); break;
      case "axis": token = numericToken("bilateral", condition.bilateralParameter, condition.side); break;
      case "article": token = numericToken("article", condition.article); break;
      case "block": collectGroupTokens(condition.block, scene, target, visitedGroups); break;
    }
    if (token) target.add(token);
  }

  function collectGroupTokens(group, scene, target, visitedGroups = new Set()) {
    if (!group) return;
    for (const condition of group.conditions || []) collectConditionTokens(condition, scene, target, visitedGroups);
    for (const list of group.anyOf || []) {
      for (const condition of list) collectConditionTokens(condition, scene, target, visitedGroups);
    }
    const unlock = group.unlock || {};
    const payment = numericToken("parameter", unlock.parameter);
    if (payment) target.add(payment);
  }

  function effectPresentationReferences(effect) {
    switch (effect.type) {
      case "stat": return [effect.parameter];
      case "relation": return [effect.character];
      case "character": return [
        effect.value ? effect.character : null,
        effect.status || null
      ].filter(Boolean);
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
    return effectPresentationReferences(effect).some(reference => entity(reference)?.auxiliary);
  }

  function collectEffectTokens(effect, target) {
    let token = null;
    switch (effect.type) {
      case "stat": token = numericToken("parameter", effect.parameter); break;
      case "relation": token = numericToken("relation", effect.character); break;
      case "character": if (effect.value) token = numericToken("relation", effect.character); break;
      case "faction": token = numericToken("estate", effect.estate, effect.estateParameter); break;
      case "axis": token = numericToken("bilateral", effect.bilateralParameter, effect.side); break;
      case "article": token = numericToken("article", effect.article); break;
    }
    if (token) target.add(token);
  }

  function collectChoiceTokens(choice, scene) {
    const result = new Set();
    for (const group of choice.requirements || []) collectGroupTokens(group, scene, result);
    for (const effect of choice.effects || []) collectEffectTokens(effect, result);
    return result;
  }

  function collectSceneTokens(scene) {
    const result = new Set();
    collectGroupTokens(scene.appearance, scene, result);
    for (const effect of scene.effects || []) collectEffectTokens(effect, result);
    let choices = scene.choices || [];
    if (scene.choiceSystem) choices = planner.choiceSystems[scene.choiceSystem].options;
    for (const choice of choices) {
      for (const token of collectChoiceTokens(choice, scene)) result.add(token);
    }
    return result;
  }

  function numericTokenValue(token, state) {
    const [kind, key, extra] = token.split("|");
    const record = meta.entities[key];
    if (!record) return 0;
    if (kind === "parameter") return state.parameters[key] ?? record.default ?? 0;
    if (kind === "relation") return state.relations[key] ?? record.default ?? 0;
    if (kind === "estate") return Number(extra) === 1
      ? estatePower(state, record)
      : (state.estates[key] ?? record.defaultLoyalty ?? 0);
    if (kind === "bilateral") return bilateralValue(state, record, Number(extra));
    if (kind === "article") return state.articles[key] ?? 0;
    return 0;
  }

  function numericTokenLabel(token) {
    const [kind, key, extra] = token.split("|");
    const record = meta.entities[key] || { label: key };
    if (kind === "estate") return `${record.label} · ${meta.estateParameters[extra] || extra}`;
    if (kind === "bilateral") return (record.sides || {})[extra] || t("common.side", { side: extra });
    return record.label;
  }

  function displayedBilateralValue(state, record, side) {
    return Math.max(0, bilateralValue(state, record, side));
  }

  function bilateralPairText(state, record) {
    const sides = record.sides || {};
    return `${sides["0"] || t("common.leftSide")} (${displayedBilateralValue(state, record, 0)}) / ` +
      `${sides["1"] || t("common.rightSide")} (${displayedBilateralValue(state, record, 1)})`;
  }

  function articleValueText(state, record) {
    const value = state.articles[record.key] ?? 0;
    return (record.values || {})[String(value)] || String(value);
  }

  function estateAllegiance(loyalty) {
    for (const [key, range] of Object.entries(meta.estateAllegianceRanges || {})) {
      if (loyalty >= range.min && loyalty <= range.max) {
        return { key, label: range.label };
      }
    }
    return { key: "0", label: meta.estateAllegianceRanges?.["0"]?.label || "" };
  }

  function estateSnapshot(state, record) {
    const loyalty = state.estates[record.key] ?? record.defaultLoyalty ?? 0;
    return {
      power: estatePower(state, record),
      loyalty,
      allegiance: estateAllegiance(loyalty)
    };
  }

  function specialAvailability(option, state, scene, chapterNumber, usedOptions, context = null) {
    const result = choiceAvailability(option, state, scene, context);
    let blocker = "";
    if (option.unlockChapter && chapterNumber < option.unlockChapter) {
      blocker = t("choice.unlockChapter", { chapter: option.unlockChapter });
    } else if (usedOptions.has(option.id)) {
      blocker = t("choice.alreadySelected");
    } else if (option.requiresOption && !usedOptions.has(option.requiresOption.id)) {
      blocker = t("choice.first", { choice: label(option.requiresOption) });
    }
    if (blocker) {
      return {
        ...result,
        available: false,
        unlockable: false,
        structuralBlocked: true,
        reason: blocker,
        payments: result.payments.map(payment => ({ ...payment, armed: false, canArm: false }))
      };
    }
    return {
      ...result,
      reason: result.available ? "" : (result.unlockable ? t("choice.pointsAvailable") : t("choice.conditionsFailed"))
    };
  }

  function isRecurringScene(scene) {
    return scene.recurring === true;
  }

  function sceneOccurrenceKey(scene) {
    return scene.onceKey || scene.occurrenceKey || scene.id;
  }

  function automaticEndingEffects(scene) {
    return (scene.effects || []).filter(effect => effect.type === "ending" && effect.unlocked);
  }

  // ── Полный последовательный пересчёт выбранного маршрута ───────────────
  function replay() {
    let state = initialState();
    const sceneResults = new Map();
    const shownOccurrenceKeys = new Set();
    const usedOptions = new Set();
    const touched = new Set();
    const recurringPlacements = new Map();
    let validSelections = 0;
    let availableScenes = 0;
    let routeComplete = true;
    let currentSceneKey = null;
    let terminalEndingKey = null;

    function makeSceneResult(item, available, appearanceSatisfied, alreadyShown, extra = {}) {
      return {
        available,
        appearanceSatisfied,
        alreadyShown,
        state,
        completeBefore: routeComplete,
        touchedBefore: new Set(touched),
        selectedValid: false,
        optionResults: new Map(),
        usedBefore: new Set(usedOptions),
        ...extra
      };
    }

    function applyAvailableScene(item, result) {
      const { chapter, scene, key } = item;
      const stateBefore = result.state;
      shownOccurrenceKeys.add(sceneOccurrenceKey(scene));

      if (!sceneHasPlanningEffect(scene)) {
        result.presentationOmitted = true;
        return false;
      }
      availableScenes += 1;

      if (scene.effects) {
        state = snapshotState(state);
        for (const effect of scene.effects) {
          applyEffect(state, effect);
          collectEffectTokens(effect, touched);
        }
        recalculateDerived(state);
      }

      const endingEffects = automaticEndingEffects(scene);
      if (endingEffects.length) {
        result.terminalEnding = true;
        result.terminalEndings = endingEffects.map(effect => effect.ending);
        terminalEndingKey = key;
        currentSceneKey = key;
        routeComplete = false;
        return true;
      }

      const selected = selections[key];
      if (scene.choiceSystem) {
        const system = planner.choiceSystems[scene.choiceSystem];
        for (const option of system.options) {
          result.optionResults.set(
            option.id,
            specialAvailability(option, stateBefore, scene, chapter.number, result.usedBefore)
          );
        }
        if (selected != null) {
          const option = system.options.find(candidate => candidate.id === selected);
          const optionResult = option && result.optionResults.get(option.id);
          if (option && optionResult && optionResult.available) {
            state = snapshotState(state);
            payAndApply(state, option, optionResult);
            for (const token of collectChoiceTokens(option, scene)) touched.add(token);
            usedOptions.add(option.id);
            result.selectedValid = true;
            validSelections += 1;
          }
        }
        if (!result.selectedValid) {
          if (routeComplete && currentSceneKey === null) currentSceneKey = key;
          routeComplete = false;
        }
      } else if (scene.choices && selected != null) {
        const choice = scene.choices.find(candidate => String(candidate.number) === String(selected));
        if (choice) {
          const availability = choiceAvailability(choice, stateBefore, scene);
          if (availability.available) {
            state = snapshotState(state);
            payAndApply(state, choice, availability);
            for (const token of collectChoiceTokens(choice, scene)) touched.add(token);
            result.selectedValid = true;
            validSelections += 1;
          }
        }
        if (!result.selectedValid) {
          if (routeComplete && currentSceneKey === null) currentSceneKey = key;
          routeComplete = false;
        }
      } else if (scene.choices && !scene.choices.length) {
        // An empty choices array is presentation data, not a required decision.
      } else if (scene.choices) {
        if (routeComplete && currentSceneKey === null) currentSceneKey = key;
        routeComplete = false;
      }
      return false;
    }

    function processRegularScene(item) {
      const { scene, key } = item;
      const appearanceSatisfied = evaluateGroup(scene.appearance, state, scene, null);
      const alreadyShown = appearanceSatisfied && shownOccurrenceKeys.has(sceneOccurrenceKey(scene));
      const available = appearanceSatisfied && !alreadyShown;
      const result = makeSceneResult(item, available, appearanceSatisfied, alreadyShown);
      sceneResults.set(key, result);
      if (available) return applyAvailableScene(item, result);
      return false;
    }

    function checkRecurringScenes(recurringScenes, causeItem) {
      let placementAnchor = causeItem;
      for (const item of recurringScenes) {
        if (terminalEndingKey) break;
        const { scene, key } = item;
        if (recurringPlacements.has(key)) {
          const previous = sceneResults.get(key);
          if (sceneHasPlanningEffect(scene) && sceneChoices(scene).length && !previous?.selectedValid) break;
          continue;
        }
        const previous = sceneResults.get(key);
        if (previous?.alreadyShown) continue;
        const appearanceSatisfied = evaluateGroup(scene.appearance, state, scene, null);
        const alreadyShown = shownOccurrenceKeys.has(sceneOccurrenceKey(scene));
        const available = appearanceSatisfied && !alreadyShown;
        const result = makeSceneResult(item, available, appearanceSatisfied, alreadyShown);
        sceneResults.set(key, result);
        if (!available) continue;
        recurringPlacements.set(key, placementAnchor ? placementAnchor.key : null);
        const ended = applyAvailableScene(item, result);
        placementAnchor = item;
        if (ended) break;
        if (sceneHasPlanningEffect(scene) && sceneChoices(scene).length && !result.selectedValid) break;
      }
      return placementAnchor;
    }

    chapterLoop: for (const chapter of planner.chapters) {
      const recurringScenes = [];
      let lastTimelineItem = null;
      const chapterItems = flatScenes.filter(item => item.chapter.number === chapter.number);
      for (const item of chapterItems) {
        if (isRecurringScene(item.scene)) {
          recurringScenes.push(item);
          if (!sceneResults.has(item.key)) {
            const appearanceSatisfied = evaluateGroup(item.scene.appearance, state, item.scene, null);
            sceneResults.set(item.key, makeSceneResult(item, false, appearanceSatisfied, shownOccurrenceKeys.has(sceneOccurrenceKey(item.scene)), {
              recurringBlocked: true
            }));
          }
          lastTimelineItem = checkRecurringScenes(recurringScenes, lastTimelineItem);
          if (terminalEndingKey) break chapterLoop;
          continue;
        }
        if (processRegularScene(item)) break chapterLoop;
        lastTimelineItem = item;
        lastTimelineItem = checkRecurringScenes(recurringScenes, lastTimelineItem);
        if (terminalEndingKey) break chapterLoop;
      }
    }

    if (terminalEndingKey) {
      for (const item of flatScenes) {
        if (sceneResults.has(item.key)) continue;
        sceneResults.set(item.key, makeSceneResult(item, false, false, false, {
          blockedByEnding: true,
          terminalEndingKey
        }));
      }
    }

    const orderedItems = [...flatScenes];
    for (const [recurringKey, anchorKey] of recurringPlacements) {
      const fromIndex = orderedItems.findIndex(item => item.key === recurringKey);
      if (fromIndex < 0) continue;
      const [recurringItem] = orderedItems.splice(fromIndex, 1);
      let destination = anchorKey
        ? orderedItems.findIndex(item => item.key === anchorKey) + 1
        : orderedItems.findIndex(item => item.chapter.number === recurringItem.chapter.number);
      if (destination < 0) destination = orderedItems.length;
      orderedItems.splice(destination, 0, recurringItem);
    }
    const orderIndex = new Map(orderedItems.map((item, index) => [item.key, index]));
    return {
      state,
      sceneResults,
      validSelections,
      availableScenes,
      usedOptions,
      touched,
      currentSceneKey,
      routeComplete,
      terminalEndingKey,
      orderedItems,
      orderIndex
    };
  }

  // ── Человекочитаемое представление условий и последствий ──────────────
  function displayOperator(operator) {
    return ({ ">=": "≥", "<=": "≤", "!=": "≠", "=": "=" })[operator] || operator;
  }

  function groupConditionText(group, state, scene, choice, visited) {
    if (!group) return t("condition.unknown");
    const direct = (group.conditions || []).map(condition =>
      conditionText(condition, state, scene, choice, visited)
    );
    const alternatives = (group.anyOf || []).map(list =>
      list.map(condition => conditionText(condition, state, scene, choice, visited)).join(` ${t("common.and")} `)
    );
    const parts = [];
    if (direct.length) parts.push(direct.join(` ${t("common.and")} `));
    if (alternatives.length) parts.push(alternatives.map(text => `(${text})`).join(` ${t("common.or")} `));
    return parts.join(` ${t("common.and")} `) || t("condition.none");
  }

  function conditionText(condition, state, scene, choice, visited = new Set()) {
    const no = condition.not ? t("condition.notPrefix") : "";
    switch (condition.type) {
      case "stat": {
        const current = state.parameters[referenceKey(condition.parameter)] ?? 0;
        return `${label(condition.parameter)} ${displayOperator(condition.operator)} ${condition.value} · ${t("condition.now", { value: current })}`;
      }
      case "relation": {
        const current = state.relations[referenceKey(condition.character)] ?? 0;
        return t("condition.relation", {
          character: label(condition.character), operator: displayOperator(condition.operator),
          value: condition.value, current
        });
      }
      case "flag": {
        const current = Boolean(state.objectives[referenceKey(condition.objective)]);
        const record = entity(condition.objective) || {};
        if (record.auxiliary && record.auxiliaryKind) {
          const stateText = value => t(
            `condition.auxiliary.${record.auxiliaryKind}.${value ? "true" : "false"}`,
            { label: record.label }
          );
          return t("condition.auxiliary", {
            expected: stateText(!condition.not),
            current: stateText(current)
          });
        }
        return t("condition.objective", {
          objective: label(condition.objective), not: no,
          current: current ? t("common.open") : t("common.closed")
        });
      }
      case "ending": {
        const current = Boolean(state.endings[referenceKey(condition.ending)]);
        return t("condition.ending", {
          ending: label(condition.ending), not: no,
          current: current ? t("common.obtained") : t("common.notObtained")
        });
      }
      case "faction": {
        const current = estateValue(state, condition.estate, condition.estateParameter);
        return t("condition.estate", {
          estate: label(condition.estate),
          parameter: meta.estateParameters[String(condition.estateParameter)] || condition.estateParameter,
          operator: displayOperator(condition.operator), value: condition.value, current
        });
      }
      case "article": {
        const record = entity(condition.article) || {};
        const currentValue = state.articles[referenceKey(condition.article)] ?? 0;
        const expected = (record.values || {})[String(condition.value)] || condition.value;
        const current = (record.values || {})[String(currentValue)] || currentValue;
        return t("condition.article", {
          article: label(condition.article), operator: condition.not ? "≠" : "=", expected, current
        });
      }
      case "axis": {
        const current = bilateralValue(state, condition.bilateralParameter, condition.side);
        return `${bilateralSideLabel(condition.bilateralParameter, condition.side)} ${displayOperator(condition.operator)} ${condition.value} · ${t("condition.now", { value: current })}`;
      }
      case "status": {
        const character = referenceKey(condition.character);
        const group = referenceKey(condition.statusGroup) || "default";
        const current = (state.statuses[character] || {})[group];
        return t("condition.status", {
          character: label(condition.character), not: no, status: label(condition.status),
          current: current ? `“${label({ key: current })}”` : t("common.none")
        });
      }
      case "block": {
        const text = groupConditionText(condition.block, state, scene, choice, visited);
        return condition.not ? `${t("common.not")} (${text})` : text;
      }
      case "always": return t("condition.none");
      default: return condition.type;
    }
  }

  function isLocationCondition(condition) {
    return condition?.type === "flag" && referenceKey(condition.objective) === LOCATION_KEY;
  }

  function isLocationEffect(effect) {
    return effect?.type === "flag" && referenceKey(effect.objective) === LOCATION_KEY;
  }

  function locationValue(inEterna) {
    return t(inEterna ? "location.eterna" : "location.journey");
  }

  function effectText(effect) {
    switch (effect.type) {
      case "stat": return `${label(effect.parameter)} ${sign(effect.value)}`;
      case "relation": return t("effect.relation", { character: label(effect.character), value: sign(effect.value) });
      case "character": {
        const parts = [];
        if (effect.value) parts.push(t("effect.relationShort", { value: sign(effect.value) }));
        if (effect.status) {
          parts.push(effect.statusGroup
            ? t("effect.status", { status: label(effect.status) })
            : t("effect.extraStatus", { status: label(effect.status) })
          );
        }
        return `${label(effect.character)}: ${parts.join(", ")}`;
      }
      case "flag": {
        if (isLocationEffect(effect)) {
          return t("effect.location", { location: locationValue(Boolean(effect.unlocked)) });
        }
        return t("effect.flag", {
          objective: label(effect.objective), action: t(effect.unlocked ? "effect.open" : "effect.close")
        });
      }
      case "ending": return t("effect.ending", {
        ending: label(effect.ending), action: t(effect.unlocked ? "effect.obtain" : "effect.remove")
      });
      case "faction": return `${label(effect.estate)} · ${meta.estateParameters[String(effect.estateParameter)] || effect.estateParameter} ${sign(effect.value)}`;
      case "article": {
        const record = entity(effect.article) || {};
        const nextValue = (record.values || {})[String(effect.value)] || t("effect.newDecision");
        return `${label(effect.article)}: ${nextValue}`;
      }
      case "axis": {
        return `${bilateralSideLabel(effect.bilateralParameter, effect.side)} ${sign(effect.value)}`;
      }
      case "status": return t("effect.characterStatus", { character: label(effect.character), status: label(effect.status) });
      default: return effect.type;
    }
  }

  function effectClass(effect) {
    if (typeof effect.value !== "number") return "";
    return effect.value > 0 ? "positive" : (effect.value < 0 ? "negative" : "");
  }

  function conditionLine(condition, state, scene, choice) {
    const passed = evaluateCondition(condition, state, scene, choice);
    let binding = "";
    if (collectBindings) {
      const item = sceneToItem.get(scene);
      const id = conditionBindings.length;
      conditionBindings.push({ id, item, condition, scene, choice });
      binding = ` data-condition-binding="${id}"`;
    }
    return `<div class="condition-line ${passed ? "pass" : "fail"}"${binding}><span>${escapeHtml(conditionText(condition, state, scene, choice))}</span></div>`;
  }

  function conditionHtml(condition, state, scene, choice) {
    if (isLocationCondition(condition)) return "";
    if (condition.type === "block" && !condition.not) {
      const body = groupBodyHtml(condition.block, state, scene, choice);
      return body ? `<div class="condition-block">${body}</div>` : "";
    }
    return conditionLine(condition, state, scene, choice);
  }

  function groupBodyHtml(group, state, scene, choice) {
    if (!group) return "";
    const lines = [];
    const direct = group.conditions || [];
    const directLines = direct.map(condition => conditionHtml(condition, state, scene, choice)).filter(Boolean);
    lines.push(...directLines);
    const alternatives = (group.anyOf || []).map(list => list.map(condition =>
      conditionHtml(condition, state, scene, choice)
    ).join("")).filter(Boolean);
    if (alternatives.length) {
      if (directLines.length) lines.push(`<div class="logic-block-separator" aria-hidden="true"></div>`);
      alternatives.forEach((body, index) => {
        if (index) lines.push(`<div class="logic-or">${escapeHtml(t("common.orLower"))}</div>`);
        lines.push(`<div class="logic-alternative">${body}</div>`);
      });
    }
    return lines.join("");
  }

  function groupHtml(group, state, scene, choice, options = {}) {
    if (!group) return "";
    const body = groupBodyHtml(group, state, scene, choice);
    if (!body) return "";
    const passed = evaluateGroup(group, state, scene, choice);
    const payable = !passed && !group.unlock?.locked && Boolean(group.unlock?.parameter);
    const attributes = options.groupIndex == null ? "" : ` data-requirement-group="${options.groupIndex}"`;
    const status = passed ? t("requirement.done") : (payable ? t("requirement.payable") : t("requirement.failed"));
    return `<div class="logic-group ${passed ? "pass" : (payable ? "payable" : "fail")}"${attributes}>
      <div class="logic-head"><span class="logic-result">${status}</span></div>
      ${body}
    </div>`;
  }

  function requirementsHtml(choice, state, scene) {
    return (choice.requirements || []).map((group, index) =>
      groupHtml(group, state, scene, choice, { groupIndex: index })
    ).join("");
  }

  function statusStateLabel(state, effect) {
    const character = referenceKey(effect.character);
    const group = referenceKey(effect.statusGroup) || "default";
    const status = (state.statuses[character] || {})[group];
    return status ? label({ key: status }) : t("common.none");
  }

  function effectStateParts(effect, state) {
    switch (effect.type) {
      case "stat":
        return [String(state.parameters[referenceKey(effect.parameter)] ?? 0)];
      case "relation":
        return [String(state.relations[referenceKey(effect.character)] ?? 0)];
      case "character": {
        const parts = [];
        if (effect.value) parts.push(t("effect.relationShort", { value: state.relations[referenceKey(effect.character)] ?? 0 }));
        if (effect.status && effect.statusGroup) parts.push(t("effect.status", { status: statusStateLabel(state, effect) }));
        return parts;
      }
      case "flag":
        return isLocationEffect(effect)
          ? [locationValue(Boolean(state.objectives[referenceKey(effect.objective)]))]
          : [state.objectives[referenceKey(effect.objective)] ? t("common.open") : t("common.closed")];
      case "ending":
        return [state.endings[referenceKey(effect.ending)] ? t("common.obtained") : t("common.notObtained")];
      case "faction":
        return [String(estateValue(state, effect.estate, effect.estateParameter))];
      case "article": {
        const record = entity(effect.article) || {};
        const value = state.articles[referenceKey(effect.article)] ?? 0;
        return [String((record.values || {})[String(value)] || value)];
      }
      case "axis":
        return [String(bilateralValue(state, effect.bilateralParameter, effect.side))];
      case "status": return [statusStateLabel(state, effect)];
      default:
        return [];
    }
  }

  function transitionText(effect, before, after) {
    const left = effectStateParts(effect, before);
    const right = effectStateParts(effect, after);
    return left.flatMap((value, index) => {
      const next = right[index] ?? value;
      return value === next ? [] : [`${value} → ${next}`];
    }).join("; ");
  }

  function effectCopyLine(text, transition = "", className = "") {
    const transitionMarkup = transition
      ? ` <span class="effect-transition">(${escapeHtml(transition)})</span>`
      : "";
    const classes = `effect-line${className ? ` ${className}` : ""}`;
    return `<div class="${classes}"><span>${escapeHtml(text)}${transitionMarkup}</span></div>`;
  }

  function characterEffectLines(effect, options = {}) {
    const character = label(effect.character);
    const lines = [];
    if (effect.value) {
      let transition = "";
      if (options.before && options.after) {
        const key = referenceKey(effect.character);
        const before = options.before.relations[key] ?? 0;
        const after = options.after.relations[key] ?? 0;
        if (before !== after) transition = `${before} → ${after}`;
      }
      lines.push(effectCopyLine(
        `${character}: ${t("effect.relationShort", { value: sign(effect.value) })}`,
        transition,
        effectClass(effect)
      ));
    }
    if (effect.status) {
      let transition = "";
      if (effect.statusGroup && options.before && options.after) {
        const before = statusStateLabel(options.before, effect);
        const after = statusStateLabel(options.after, effect);
        if (before !== after) transition = `${before} → ${after}`;
      }
      const status = effect.statusGroup
        ? t("effect.status", { status: label(effect.status) })
        : t("effect.extraStatus", { status: label(effect.status) });
      lines.push(effectCopyLine(`${character}: ${status}`, transition));
    }
    return lines.join("");
  }

  function effectLineHtml(effect, transition = "", options = {}) {
    const customText = options.text || effectText(effect);
    if (options.payment) {
      return effectCopyLine(customText, transition, "negative payment-effect");
    }
    if (effect.type === "character" && effect.value && effect.status) {
      return characterEffectLines(effect, options);
    }
    const record = effect.type === "flag" ? (entity(effect.objective) || {}) : null;
    if (effect.type === "flag" && !record.auxiliary) {
      const kind = t(effect.unlocked ? "effect.achievement" : "effect.achievementClosed");
      return `<div class="effect-line achievement"><span class="achievement-copy">
        <span class="achievement-kind">${escapeHtml(kind)}</span>
        <span class="achievement-title">${escapeHtml(label(effect.objective))}</span>
      </span></div>`;
    }
    return effectCopyLine(customText, transition, effectClass(effect));
  }

  function effectsHtml(effects, context = {}) {
    const detailed = Boolean(context.completeBefore && context.state);
    if (!detailed) {
      const payments = (context.payments || []).map(payment => {
        const effect = { type: "stat", parameter: payment.parameter, value: -payment.cost };
        return effectLineHtml(effect, "", {
          payment: true,
          text: t("requirement.payment", { parameter: label(payment.parameter), value: sign(-payment.cost) })
        });
      }).join("");
      const effectList = effects || [];
      let plain = plainEffectsCache.get(effectList);
      if (plain == null) {
        plain = effectList.filter(effect => !effectIsAuxiliary(effect)).map(effect => effectLineHtml(effect)).join("");
        plainEffectsCache.set(effectList, plain);
      }
      return payments + plain;
    }
    const working = detailed ? snapshotState(context.state) : null;
    const lines = [];
    for (const payment of context.payments || []) {
      const effect = { type: "stat", parameter: payment.parameter, value: -payment.cost };
      const before = detailed ? snapshotState(working) : null;
      if (working) applyEffect(working, effect);
      const transition = detailed ? transitionText(effect, before, working) : "";
      lines.push(effectLineHtml(effect, transition, {
        payment: true,
        text: t("requirement.payment", { parameter: label(payment.parameter), value: sign(-payment.cost) })
      }));
    }
    for (const effect of effects || []) {
      const before = detailed ? snapshotState(working) : null;
      if (working) applyEffect(working, effect);
      const transition = detailed ? transitionText(effect, before, working) : "";
      if (isLocationEffect(effect) && context.showLocationChange === false) continue;
      if (effectIsAuxiliary(effect) && (!isLocationEffect(effect) || !transition)) continue;
      lines.push(effectLineHtml(effect, transition, { before, after: working }));
    }
    if (working) {
      if (context.settings?.applyCreedLoyalty) applyCreedChanges(working);
      recalculateDerived(working);
    }
    return lines.join("");
  }

  function paymentsHtml(availability, item, value, selected = false) {
    if (!availability.payments || !availability.payments.length) return "";
    if (selected) return "";
    return `<div class="unlock-actions">${availability.payments.map(payment => {
      const key = referenceKey(payment.parameter);
      const armed = Boolean(payment.armed);
      let text = t("requirement.pay", { cost: payment.cost, parameter: label(payment.parameter) });
      if (availability.structuralBlocked) text = t("requirement.unavailable", { reason: availability.reason });
      else if (availability.hardBlocked) text = t("requirement.mandatory");
      else if (!payment.affordable) text = t("requirement.notEnough", {
        cost: payment.cost, parameter: label(payment.parameter), current: payment.current
      });
      else if (armed) text = t("requirement.armed", { cost: payment.cost, parameter: label(payment.parameter) });
      return `<button class="unlock-action ${armed ? "armed" : ""}" type="button"
        data-unlock-scene="${escapeHtml(item.key)}" data-unlock-choice="${escapeHtml(value)}" data-unlock-parameter="${escapeHtml(key)}"
        ${payment.canArm ? "" : "disabled"}>${escapeHtml(text)}</button>`;
    }).join("")}<div class="payment-note">${escapeHtml(t("requirement.paymentNote"))}</div></div>`;
  }

  function uiChoiceAvailability(choice, item, result, value) {
    if (item.scene.choiceSystem === "annualProjects") {
      const special = result.optionResults.get(choice.id) ||
        specialAvailability(choice, result.state, item.scene, item.chapter.number, result.usedBefore);
      const requirementsSatisfied = (choice.requirements || []).every(group =>
        evaluateGroup(group, result.state, item.scene, choice)
      );
      return {
        ...special,
        available: special.available && requirementsSatisfied,
        unlockable: false,
        payments: [],
        details: (special.details || []).map(detail => ({
          ...detail,
          available: detail.satisfied,
          payable: false,
          armed: false
        })),
        reason: special.reason || (requirementsSatisfied ? "" : t("choice.conditionsFailed"))
      };
    }
    const selected = String(selections[item.key]) === String(value);
    const context = selected ? null : {
      requireUnlock: true,
      sceneKey: item.key,
      value
    };
    return item.scene.choiceSystem
      ? specialAvailability(choice, result.state, item.scene, item.chapter.number, result.usedBefore, context)
      : choiceAvailability(choice, result.state, item.scene, context);
  }

  function choiceHtml(choice, item, result, optionResult, position) {
    const state = result.state;
    const special = Boolean(item.scene.choiceSystem);
    const value = special ? choice.id : String(choice.number);
    const selected = String(selections[item.key]) === String(value);
    const availability = uiChoiceAvailability(choice, item, result, value);
    const available = result.available && availability.available;
    const invalid = selected && !result.selectedValid && !result.blockedByEnding;
    const requirements = requirementsHtml(choice, state, item.scene);
    const effects = effectsHtml(choice.effects, {
      state: result.state,
      completeBefore: result.completeBefore,
      payments: availability.payments,
      settings: choice.settings,
      showLocationChange: item.scene.showLocationChange
    });
    const number = special ? (choice.order || position + 1) : choice.number;
    const choiceLabel = choice.text || choice.title || choice.id;
    const reason = !available && availability.reason ? availability.reason : "";
    return `
      <article class="choice-card ${available ? "" : "unavailable"} ${availability.unlockable ? "unlockable" : ""} ${selected ? "selected" : ""} ${invalid ? "invalid" : ""}"
        role="button" tabindex="0" data-scene-key="${escapeHtml(item.key)}" data-choice="${escapeHtml(value)}" data-available="${available}">
        <div class="choice-heading">
          <span class="choice-number">${escapeHtml(number)}</span>
          <span class="choice-text">${escapeHtml(choiceLabel)}</span>
          <span class="choice-mark">${selected ? "✓" : ""}</span>
        </div>
        <div class="reason choice-reason">${escapeHtml(reason)}</div>
        ${requirements ? `<div class="section-label">${escapeHtml(t("section.conditions"))}</div>${requirements}` : ""}
        <div class="choice-payment">${paymentsHtml(availability, item, value, selected)}</div>
        <div class="choice-effects">${effects ? `<div class="section-label">${escapeHtml(t("section.effects"))}</div><div class="logic-group">${effects}</div>` : ""}</div>
      </article>`;
  }

  function unavailableSceneReason(item, result) {
    if (result.blockedByEnding) return t("scene.blockedEnding");
    if (result.alreadyShown) return t("scene.alreadyShown");
    if (!isRecurringScene(item.scene)) return t("scene.appearanceFailed");
    if (result.recurringBlocked) return t("scene.recurringBlocked");
    return t("scene.recurringWaiting");
  }

  // ── Карточки событий и выборов ─────────────────────────────────────────
  function sceneHtml(item) {
    const { chapter, scene, key } = item;
    const result = replayResult.sceneResults.get(key);
    const selected = selections[key] != null;
    let choices = scene.choices || [];
    if (scene.choiceSystem) choices = planner.choiceSystems[scene.choiceSystem].options;
    const choicesMarkup = choices.map((choice, index) =>
      choiceHtml(choice, item, result, result.optionResults.get(choice.id), index)
    ).join("");
    const appearance = groupHtml(scene.appearance, result.state, scene, null);
    const effects = effectsHtml(scene.effects, {
      state: result.state,
      completeBefore: result.completeBefore,
      settings: scene.settings,
      showLocationChange: scene.showLocationChange
    });
    let reason = "";
    if (!result.available) {
      reason = unavailableSceneReason(item, result);
    }
    const variants = [];
    if (scene.locationVariant) variants.push(t(`scene.locationVariant.${scene.locationVariant}`));
    if (scene.variant) variants.push(t("scene.variant", { variant: scene.variant }));
    const variant = variants.map(text => `<div class="scene-variant">${escapeHtml(text)}</div>`).join("");
    const typeBadge = sceneTypeBadge(scene);
    return `
      <article class="scene-card ${isRecurringScene(scene) ? "recurring-scene" : ""} ${result.available ? "" : "unavailable"} ${selected ? "has-selection" : ""}" data-scene-id="${escapeHtml(scene.id)}" data-scene-key="${escapeHtml(key)}">
        <div class="scene-topline">
          ${typeBadge ? `<span class="type-badge">${escapeHtml(typeBadge)}</span>` : ""}
          <span class="state-badge ${result.available ? "ok" : "no"}">${escapeHtml(t(result.available ? "scene.available" : "scene.unavailable"))}</span>
        </div>
        <h2 class="scene-id" title="${escapeHtml(scene.id)}">${escapeHtml(sceneName(scene))}</h2>
        ${variant}
        <div class="reason scene-reason">${escapeHtml(reason)}</div>
        ${appearance ? `<div class="section-label">${escapeHtml(t("section.appearance"))}</div>${appearance}` : ""}
        <div class="scene-effects">${effects ? `<div class="section-label">${escapeHtml(t("section.automaticEffects"))}</div><div class="logic-group">${effects}</div>` : ""}</div>
        ${choicesMarkup ? `<div class="section-label">${escapeHtml(t("section.choice"))}</div><div class="choices">${choicesMarkup}</div>${scene.choiceSystem === "annualProjects" ? `<p class="case-choice-empty" hidden>${escapeHtml(t("scene.noAnnualChoices"))}</p>` : ""}` : (!effects ? `<p class="empty-scene">${escapeHtml(t("scene.empty"))}</p>` : "")}
      </article>`;
  }

  function choiceElementKey(sceneKey, value) {
    return `${sceneKey}\u0000${String(value)}`;
  }

  function sceneChoices(scene) {
    return scene.choiceSystem
      ? planner.choiceSystems[scene.choiceSystem].options
      : (scene.choices || []);
  }

  function choiceHasPlanningEffect(choice) {
    if ((choice.effects || []).length) return true;
    if (choice.settings?.applyCreedLoyalty) return true;
    return (choice.requirements || []).some(group => {
      const unlock = group.unlock || {};
      return Boolean(unlock.parameter && Number(unlock.cost) > 0);
    });
  }

  function sceneHasPlanningEffect(scene) {
    if ((scene.effects || []).length) return true;
    // Special systems also change one-use/progression state when an option is selected.
    if (scene.choiceSystem && sceneChoices(scene).length) return true;
    return sceneChoices(scene).some(choiceHasPlanningEffect);
  }

  function sceneShouldBeDisplayed(scene) {
    if (sceneChoices(scene).length) return sceneHasPlanningEffect(scene);
    return (scene.effects || []).some(effect => !effectIsAuxiliary(effect));
  }

  // Массив сохраняет порядок прохождения, необходимый для последовательного расчёта.
  const planningSceneItems = flatScenes.filter(item => sceneShouldBeDisplayed(item.scene));
  const planningSceneKeys = new Set(planningSceneItems.map(item => item.key));

  function sceneName(scene) {
    return scene.title || scene.name || scene.id;
  }

  function sceneTypeBadge(scene) {
    if (["scene", "text", "scene-no-choice"].includes(scene.type)) return "";
    if (["hidden", "hidden-text", "hidden-no-choice"].includes(scene.type)) return TYPE_NAMES.hidden;
    return TYPE_NAMES[scene.type] || scene.type;
  }

  // ── Панели состояния, поиск и навигация ────────────────────────────────
  function setHtml(element, html) {
    if (element && element.dataset.dynamicHtml !== html) {
      element.innerHTML = html;
      element.dataset.dynamicHtml = html;
    }
  }

  function entryKey(token) {
    const [kind, key] = token.split("|");
    return (kind === "bilateral" || kind === "estate") ? `${kind}|${key}` : token;
  }

  function entitySort(left, right) {
    const order = (left.record.order ?? 99) - (right.record.order ?? 99);
    return order || I18N.compare(left.record.label, right.record.label);
  }

  function attributeEntries(tokens, currentTokens) {
    const groups = new Map();
    for (const token of tokens) {
      const [kind, entityKey] = token.split("|");
      const record = meta.entities[entityKey];
      if (!record || !record.group) continue;
      if (!groups.has(record.group)) groups.set(record.group, new Map());
      const entryId = entryKey(token);
      const current = [...currentTokens].some(candidate => entryKey(candidate) === entryId);
      const entries = groups.get(record.group);
      const existing = entries.get(entryId);
      if (existing) existing.current ||= current;
      else entries.set(entryId, { key: entryId, token, kind, record, current });
    }
    return groups;
  }

  function simpleAttributeChip(entry, state) {
    let value = numericTokenValue(entry.token, state);
    let className = "stat-chip";
    if (entry.kind === "article") {
      value = articleValueText(state, entry.record);
      className += " article-chip";
    }
    if (entry.current) className += " current";
    return `<div class="${className}" role="button" tabindex="0" data-attribute-tokens="${escapeHtml(entry.key)}" title="${escapeHtml(t("attribute.historyTitle"))}"><span class="stat-chip-name">${escapeHtml(entry.record.label)}</span><span class="stat-chip-value" title="${escapeHtml(value)}">${escapeHtml(value)}</span></div>`;
  }

  function bilateralAttributeChip(entry, state) {
    const sides = entry.record.sides || {};
    const left = displayedBilateralValue(state, entry.record, 0);
    const right = displayedBilateralValue(state, entry.record, 1);
    return `<div class="stat-chip stat-pair ${entry.current ? "current" : ""}" role="button" tabindex="0" data-attribute-tokens="${escapeHtml(entry.key)}" title="${escapeHtml(t("attribute.historyTitle"))}">
      <span class="stat-pair-value"><span>${escapeHtml(sides["0"] || t("common.leftSide"))}</span> <strong>${left}</strong><span class="stat-pair-divider">/</span><span>${escapeHtml(sides["1"] || t("common.rightSide"))}</span> <strong>${right}</strong></span>
    </div>`;
  }

  function attributeColumnsHtml(cards) {
    const columns = [];
    for (let index = 0; index < cards.length; index += 4) columns.push(cards.slice(index, index + 4));
    return columns.map(column => `<div class="attribute-column" data-attribute-column>${column.join("")}</div>`).join("");
  }

  function relationAttributeItems(entries, state) {
    const subgroups = new Map();
    for (const entry of entries.sort(entitySort)) {
      const category = entry.record.category || "relations";
      if (!subgroups.has(category)) subgroups.set(category, []);
      subgroups.get(category).push(entry);
    }
    return [...subgroups.values()]
      .sort((left, right) => (left[0].record.categoryOrder ?? 99) - (right[0].record.categoryOrder ?? 99))
      .map(items => {
        const columns = [];
        for (let index = 0; index < items.length; index += 4) columns.push(items.slice(index, index + 4));
        return columns.map(column => `<div class="attribute-subgroup" data-attribute-column>
          <span class="attribute-subgroup-title">${escapeHtml(items[0].record.categoryLabel || t("attribute.characters"))}</span>
          <div class="attribute-subgroup-items">${column.map(entry => simpleAttributeChip(entry, state)).join("")}</div>
        </div>`).join("");
      }).join("");
  }

  function estateAttributeItems(state, currentTokens) {
    const estates = Object.values(meta.entities)
      .filter(record => record.kind === "estate")
      .sort((left, right) => (left.order ?? 99) - (right.order ?? 99) || I18N.compare(left.label, right.label));
    const summaries = estates.map(record => ({ record, ...estateSnapshot(state, record) }));
    const allies = summaries.filter(item => item.allegiance.key === "1").reduce((sum, item) => sum + item.power, 0);
    const enemies = summaries.filter(item => item.allegiance.key === "2").reduce((sum, item) => sum + item.power, 0);
    const tempest = Object.values(meta.entities).find(record => record.role === "tempest-power");
    const tempestPower = tempest ? (state.parameters[tempest.key] ?? tempest.default ?? 0) : 0;
    const total = Object.values(meta.entities).find(record => record.role === "estate-balance-after-creed");
    const balance = clamp(tempestPower + allies - enemies, total?.min ?? 0, total?.max ?? 99);
    const groupCurrent = [...currentTokens].some(token => {
      const record = meta.entities[token.split("|")[1]];
      return record && record.kind === "estate";
    });
    const summaryKeys = [
      tempest ? entryKey(numericToken("parameter", { key: tempest.key })) : null,
      ...estates.map(record => `estate|${record.key}`)
    ].filter(Boolean).join(" ");
    const summary = `<div class="stat-chip estate-summary ${groupCurrent ? "current" : ""}" role="button" tabindex="0" data-attribute-tokens="${escapeHtml(summaryKeys)}" title="${escapeHtml(t("attribute.historyTitle"))}">
      <span class="estate-summary-line">${t("attribute.estateSummary", {
        tempest: `<strong>${tempestPower}</strong>`, allies: `<strong>${allies}</strong>`,
        enemies: `<strong>${enemies}</strong>`, balance: `<strong>${balance}</strong>`
      })}</span>
    </div>`;
    const rows = summaries.map(item => {
      const current = [...currentTokens].some(token => token.startsWith(`estate|${item.record.key}|`));
      return `<div class="stat-chip estate-chip ${current ? "current" : ""}" role="button" tabindex="0" data-attribute-tokens="estate|${escapeHtml(item.record.key)}" title="${escapeHtml(t("attribute.historyTitle"))}">
        <span class="stat-chip-name">${escapeHtml(item.record.label)}</span>
        <span class="stat-chip-value">${escapeHtml(t("attribute.estateValues", { power: item.power, loyalty: item.loyalty }))}</span>
        <span class="estate-allegiance">${escapeHtml(item.allegiance.label)}</span>
      </div>`;
    });
    return `<div class="estate-grid">${summary}${rows.join("")}</div>`;
  }

  function attributeGroupHtml(groupId, entryMap, state, currentTokens) {
    const entries = [...entryMap.values()].sort(entitySort);
    const current = entries.some(entry => entry.current);
    const role = entries.some(entry => entry.record.kind === "estate")
      ? "estates"
      : (entries.some(entry => entry.kind === "relation") ? "relations" : "standard");
    let items;
    if (role === "estates") {
      items = estateAttributeItems(state, currentTokens);
    } else if (role === "relations") {
      items = relationAttributeItems(entries, state);
    } else {
      const cards = entries.map(entry => entry.kind === "bilateral"
        ? bilateralAttributeChip(entry, state)
        : simpleAttributeChip(entry, state)
      );
      items = attributeColumnsHtml(cards);
    }
    const group = meta.groups[groupId] || { label: groupId, order: 99 };
    return `<section class="attribute-group ${current ? "current" : ""}" data-attribute-group="${escapeHtml(groupId)}" data-group-role="${role}">
      <span class="attribute-group-title">${escapeHtml(group.label)}</span>
      <div class="attribute-items">${items}</div>
    </section>`;
  }

  function renderAttributeBar() {
    let state = replayResult.state;
    let tokens = new Set(replayResult.touched);
    let currentTokens = new Set();
    let context = t("attribute.routeComplete");
    let detail = t("attribute.finalValues");
    if (replayResult.currentSceneKey) {
      const item = flatScenes.find(candidate => candidate.key === replayResult.currentSceneKey);
      const result = replayResult.sceneResults.get(replayResult.currentSceneKey);
      state = result.state;
      tokens = new Set(result.touchedBefore);
      currentTokens = collectSceneTokens(item.scene);
      for (const token of currentTokens) tokens.add(token);
      context = t("attribute.currentChoice");
      detail = sceneName(item.scene);
    }
    const groups = attributeEntries(tokens, currentTokens);
    const cards = [...groups.entries()]
      .sort((left, right) => (meta.groups[left[0]]?.order ?? 99) - (meta.groups[right[0]]?.order ?? 99))
      .map(([groupId, entries]) => attributeGroupHtml(groupId, entries, state, currentTokens))
      .join("");
    setHtml($("#attributeContext"), `<strong>${escapeHtml(context)}</strong>${escapeHtml(detail)}`);
    setHtml($("#attributeGroups"), cards || `<span class="attribute-empty">${escapeHtml(t("attribute.empty"))}</span>`);
  }

  function updateHiddenScenesButton() {
    const chapter = planner.chapters.find(item => item.number === activeChapter);
    const hiddenTypes = new Set(["hidden", "hidden-text", "hidden-no-choice"]);
    const count = chapter
      ? chapter.scenes.filter(scene => hiddenTypes.has(scene.type) && sceneShouldBeDisplayed(scene)).length
      : 0;
    $("#hiddenScenesButton").textContent = t("tools.hiddenCount", { count });
  }

  function hydrateTimelineElements() {
    sceneElements.clear();
    choiceElements.clear();
    document.querySelectorAll(".scene-card[data-scene-key]").forEach(element => {
      sceneElements.set(element.dataset.sceneKey, element);
    });
    document.querySelectorAll(".choice-card[data-scene-key]").forEach(element => {
      choiceElements.set(choiceElementKey(element.dataset.sceneKey, element.dataset.choice), element);
    });
    document.querySelectorAll("[data-condition-binding]").forEach(element => {
      const binding = conditionBindings[Number(element.dataset.conditionBinding)];
      if (binding) binding.element = element;
    });
  }

  function buildTimeline() {
    replayResult = replay();
    conditionBindings = [];
    collectBindings = true;
    const chapters = planner.chapters.map(chapter => {
      const items = planningSceneItems.filter(item => item.chapter.number === chapter.number);
      const scenes = items.map(item => sceneHtml(item)).join("");
      const firstChapterBrand = chapter.number === 1 ? `
        <span class="chapter-brand-inline"><strong>${escapeHtml(APP_NAME)}</strong><small>${escapeHtml(t("app.tagline", { game: GAME_NAME }))}</small></span>` : "";
      const languageControl = chapter.number === 1 ? `
        <label class="chapter-language-control">
          <span>${escapeHtml(t("language.interface"))}</span>
          <select id="chapterLanguageSelect" data-language-select aria-label="${escapeHtml(t("language.interface"))}"></select>
        </label>` : "";
      return `
        <section class="chapter" id="chapter-${chapter.number}" data-chapter="${chapter.number}">
          <header class="chapter-heading ${chapter.number === 1 ? "first-chapter-heading" : ""}">
            ${firstChapterBrand}
            <span class="chapter-title-row"><span class="chapter-number" aria-hidden="true">${romanNumeral(chapter.number)}</span><strong>${escapeHtml(CHAPTER_NAMES[chapter.id] || chapter.id)}</strong></span>
            ${languageControl}
          </header>
          <div class="chapter-scenes">${scenes}</div>
        </section>`;
    }).join("");
    $("#timeline").innerHTML = chapters;
    const chapterLanguageSelect = $("#chapterLanguageSelect");
    const menuLanguageSelect = $("#languageSelect");
    if (chapterLanguageSelect && menuLanguageSelect) {
      chapterLanguageSelect.innerHTML = menuLanguageSelect.innerHTML;
      chapterLanguageSelect.value = I18N.locale;
      chapterLanguageSelect.addEventListener("change", () => I18N.changeLocale(chapterLanguageSelect.value));
    }
    collectBindings = false;
    hydrateTimelineElements();
    refreshTimeline(0, false);
    requestAnimationFrame(() => scrollToCurrent("auto"));
  }

  function updateRequirementGroups(choiceElement, availability) {
    choiceElement.querySelectorAll("[data-requirement-group]").forEach(groupElement => {
      const index = Number(groupElement.dataset.requirementGroup);
      const detail = availability.details && availability.details[index];
      if (!detail) return;
      const payment = (availability.payments || []).find(item => item.groupIndexes.includes(index));
      const payable = detail.payable && !detail.satisfied;
      const waitingForRequired = payable && (availability.hardBlocked || availability.structuralBlocked);
      groupElement.classList.toggle("pass", detail.satisfied);
      groupElement.classList.toggle("payable", payable && !waitingForRequired);
      groupElement.classList.toggle("fail", !detail.satisfied && (!payable || waitingForRequired));
      const result = groupElement.querySelector(".logic-result");
      if (result) {
        result.textContent = detail.satisfied
          ? t("requirement.done")
          : (waitingForRequired
            ? (availability.structuralBlocked ? t("requirement.notAvailableYet") : t("requirement.mandatoryShort"))
            : (payable ? (payment && payment.armed ? t("requirement.openedForPoints") : t("requirement.payable")) : t("requirement.failed")));
      }
    });
  }

  function refreshTimeline(fromIndex = 0, recalculate = true) {
    if (recalculate) replayResult = replay();
    orderedScenes().forEach((item, index) => {
      const element = sceneElements.get(item.key);
      if (element) element.style.order = String(index);
    });
    const currentItem = replayResult.currentSceneKey
      ? flatScenes.find(item => item.key === replayResult.currentSceneKey)
      : null;
    const currentIndex = timelineIndex(currentItem);
    for (const item of flatScenes) {
      const result = replayResult.sceneResults.get(item.key);
      const sceneElement = sceneElements.get(item.key);
      if (!sceneElement) continue;
      const itemIndex = timelineIndex(item);
      sceneElement.classList.toggle("timeline-past", itemIndex < currentIndex);
      sceneElement.classList.toggle("timeline-current", itemIndex === currentIndex);
      sceneElement.classList.toggle("timeline-future", itemIndex > currentIndex);
      if (itemIndex === currentIndex) sceneElement.setAttribute("aria-current", "step");
      else sceneElement.removeAttribute("aria-current");
      if (item.flatIndex < fromIndex && !isRecurringScene(item.scene)) continue;
      const hasSelection = selections[item.key] != null;
      const automaticEffects = effectsHtml(item.scene.effects, {
        state: result.state,
        completeBefore: result.completeBefore,
        settings: item.scene.settings,
        showLocationChange: item.scene.showLocationChange
      });
      const automaticEffectsSection = automaticEffects
        ? `<div class="section-label">${escapeHtml(t("section.automaticEffects"))}</div><div class="logic-group">${automaticEffects}</div>`
        : "";
      const unavailableReason = result.available ? "" : unavailableSceneReason(item, result);
      const sceneSignature = `${result.available}|${result.alreadyShown}|${hasSelection}|${unavailableReason}|${automaticEffectsSection}`;
      if (sceneElement.dataset.dynamicSignature !== sceneSignature) {
        sceneElement.dataset.dynamicSignature = sceneSignature;
        sceneElement.classList.toggle("unavailable", !result.available);
        sceneElement.classList.toggle("has-selection", hasSelection);
        const badge = sceneElement.querySelector(".state-badge");
        badge.classList.toggle("ok", result.available);
        badge.classList.toggle("no", !result.available);
        badge.textContent = t(result.available ? "scene.available" : "scene.unavailable");
        const sceneReason = sceneElement.querySelector(".scene-reason");
        sceneReason.textContent = unavailableReason;
        setHtml(sceneElement.querySelector(".scene-effects"), automaticEffectsSection);
      }

      let visibleCaseChoices = 0;
      for (const choice of sceneChoices(item.scene)) {
        const value = item.scene.choiceSystem ? choice.id : String(choice.number);
        const choiceElement = choiceElements.get(choiceElementKey(item.key, value));
        if (!choiceElement) continue;
        const availability = uiChoiceAvailability(choice, item, result, value);
        const available = result.available && availability.available;
        const hideForCase = item.scene.choiceSystem === "annualProjects" && !available;
        choiceElement.hidden = hideForCase;
        if (item.scene.choiceSystem === "annualProjects" && !hideForCase) visibleCaseChoices += 1;
        const selected = String(selections[item.key]) === String(value);
        const invalid = selected && !result.selectedValid && !result.blockedByEnding;
        const reason = available ? "" : (
          !result.available
            ? t("scene.notAvailable")
            : (availability.reason || (availability.unlockable ? t("scene.unlockHint") : t("choice.conditionsFailed")))
        );
        const payment = paymentsHtml(availability, item, value, selected);
        const effects = effectsHtml(choice.effects, {
          state: result.state,
          completeBefore: result.completeBefore,
          payments: availability.payments,
          settings: choice.settings,
          showLocationChange: item.scene.showLocationChange
        });
        const effectsSection = effects
          ? `<div class="section-label">${escapeHtml(t("section.effects"))}</div><div class="logic-group">${effects}</div>`
          : "";
        const groupSignature = (availability.details || []).map((detail, index) => {
          const groupPayment = (availability.payments || []).find(candidate => candidate.groupIndexes.includes(index));
          return `${detail.satisfied ? 1 : 0}${detail.payable ? 1 : 0}${groupPayment?.armed ? 1 : 0}`;
        }).join("");
        const choiceSignature = `${available}|${availability.unlockable}|${availability.hardBlocked}|${availability.structuralBlocked}|${groupSignature}|${selected}|${invalid}|${reason}|${payment}|${effectsSection}`;
        if (choiceElement.dataset.dynamicSignature !== choiceSignature) {
          choiceElement.dataset.dynamicSignature = choiceSignature;
          choiceElement.dataset.available = String(available);
          choiceElement.classList.toggle("unavailable", !available);
          choiceElement.classList.toggle("unlockable", !available && availability.unlockable);
          choiceElement.classList.toggle("selected", selected);
          choiceElement.classList.toggle("invalid", invalid);
          choiceElement.querySelector(".choice-mark").textContent = selected ? "✓" : "";
          choiceElement.querySelector(".choice-reason").textContent = reason;
          setHtml(choiceElement.querySelector(".choice-payment"), payment);
          setHtml(choiceElement.querySelector(".choice-effects"), effectsSection);
          updateRequirementGroups(choiceElement, availability);
        }
      }
      const caseEmpty = sceneElement.querySelector(".case-choice-empty");
      if (caseEmpty) caseEmpty.hidden = visibleCaseChoices > 0;
    }

    for (const binding of conditionBindings) {
      if (!binding.item || (binding.item.flatIndex < fromIndex && !isRecurringScene(binding.item.scene)) || !binding.element) continue;
      const result = replayResult.sceneResults.get(binding.item.key);
      const passed = binding.list
        ? binding.list.every(condition => evaluateCondition(condition, result.state, binding.scene, binding.choice))
        : evaluateCondition(binding.condition, result.state, binding.scene, binding.choice);
      const text = binding.list
        ? `${binding.listIndex + 1}. ${binding.list.map(condition => conditionText(condition, result.state, binding.scene, binding.choice)).join(` ${t("common.and")} `)}`
        : conditionText(binding.condition, result.state, binding.scene, binding.choice);
      if (binding.lastText !== text) {
        binding.lastText = text;
        const copy = binding.element.querySelector("span");
        if (copy) copy.textContent = text;
      }
      if (binding.lastPassed !== passed) {
        binding.lastPassed = passed;
        binding.element.classList.toggle("pass", passed);
        binding.element.classList.toggle("fail", !passed);
      }
    }

    const totalSelected = Object.keys(selections).filter(key =>
      planningSceneKeys.has(key) && !replayResult.sceneResults.get(key)?.blockedByEnding
    ).length;
    $("#summary").innerHTML = t("summary.text", {
      valid: replayResult.validSelections, selected: totalSelected,
      available: replayResult.availableScenes, total: planningSceneItems.length
    });
    $("#appVersion").textContent = APP_VERSION;
    $("#currentChoiceButton").classList.toggle("visible", Boolean(replayResult.currentSceneKey));
    renderAttributeBar();
    updateHiddenScenesButton();
    if (panelOpen) renderPanel(panelMode);
    requestAnimationFrame(updateTimelineScrollbar);
  }

  function changedStateRows() {
    const current = replayResult.state;
    const start = initialState();
    const rows = [];
    const numeric = [
      ["parameters", t("state.parameters")], ["bilateral", t("state.bilateral")],
      ["relations", t("state.relations")], ["estates", t("state.estates")], ["articles", t("state.articles")]
    ];
    for (const [category, section] of numeric) {
      for (const [key, value] of Object.entries(current[category] || {})) {
        if (value !== (start[category] || {})[key]) {
          rows.push({ section, name: (meta.entities[key] || {}).label || key, value });
        }
      }
    }
    for (const [category, section] of [["objectives", t("state.objectives")], ["endings", t("state.endings")]]) {
      for (const [key, value] of Object.entries(current[category] || {})) {
        const record = meta.entities[key] || {};
        if (value && !record.auxiliary) rows.push({ section, name: record.label || key, value: t("common.yes") });
      }
    }
    for (const [character, groups] of Object.entries(current.statuses || {})) {
      for (const status of Object.values(groups || {})) {
        if (status) rows.push({ section: t("state.characterStatuses"), name: (meta.entities[character] || {}).label || character, value: (meta.entities[status] || {}).label || status });
      }
    }
    return rows;
  }

  function renderStatePanel() {
    const grouped = new Map();
    for (const row of changedStateRows()) {
      if (!grouped.has(row.section)) grouped.set(row.section, []);
      grouped.get(row.section).push(row);
    }
    const current = grouped.size ? [...grouped.entries()].map(([heading, rows]) => `
      <section class="state-section"><h3>${escapeHtml(heading)}</h3><div class="state-grid">
        ${rows.map(row => `<div class="state-row"><span>${escapeHtml(row.name)}</span><span class="state-value">${escapeHtml(row.value)}</span></div>`).join("")}
      </div></section>`).join("") : `<p class="panel-note">${escapeHtml(t("state.noChanges"))}</p>`;
    $("#panelBody").innerHTML = `
      <p class="panel-note">${escapeHtml(t("state.calculationNote"))}</p>
      <section class="state-section"><h3>${escapeHtml(t("state.routeChanges"))}</h3>${current}</section>
    `;
  }

  function renderHiddenScenesPanel() {
    const hiddenTypes = new Set(["hidden", "hidden-text", "hidden-no-choice"]);
    const items = flatScenes.filter(item =>
      item.chapter.number === activeChapter && hiddenTypes.has(item.scene.type) && sceneShouldBeDisplayed(item.scene)
    );
    const chapter = planner.chapters.find(item => item.number === activeChapter);
    const rows = items.map(item => {
      const result = replayResult.sceneResults.get(item.key);
      const conditions = groupHtml(item.scene.appearance, result.state, item.scene, null);
      const recurringNote = isRecurringScene(item.scene)
        ? `<div class="reason">${escapeHtml(result.available ? t("scene.recurring") : unavailableSceneReason(item, result))}</div>`
        : "";
      return `<article class="hidden-scene-item ${result.available ? "available" : ""}">
        <div class="hidden-scene-head">
          <span class="hidden-scene-name" title="${escapeHtml(item.scene.id)}">${escapeHtml(sceneName(item.scene))}</span>
          <span class="hidden-scene-status">${escapeHtml(t(result.available ? "scene.available" : "scene.unavailable"))}</span>
        </div>
        ${recurringNote}
        ${conditions || `<div class="reason">${escapeHtml(t("hidden.noExtraConditions"))}</div>`}
        <button class="goto-scene" type="button" data-goto-scene="${escapeHtml(item.key)}">${escapeHtml(t("hidden.showTimeline"))}</button>
      </article>`;
    }).join("");
    $("#panelBody").innerHTML = `
      <p class="panel-note">${escapeHtml(t("hidden.chapterNote", { chapter: CHAPTER_NAMES[chapter.id] || chapter.id }))}</p>
      <div class="hidden-scene-list">${rows || `<p class="panel-note">${escapeHtml(t("hidden.none"))}</p>`}</div>`;
  }

  function renderPanel(mode = panelMode) {
    collectBindings = false;
    $("#panelTitle").textContent = mode === "hidden"
      ? t("hidden.panelTitle", { chapter: activeChapter })
      : t("panel.stateTitle");
    if (mode === "hidden") renderHiddenScenesPanel();
    else renderStatePanel();
  }

  function openPanel(open, mode = panelMode) {
    if (open && choiceHistoryOpen) setChoiceHistoryOpen(false);
    if (open && routeFileOpen) setRouteFileOpen(false);
    panelOpen = open;
    panelMode = mode;
    $("#statePanel").classList.toggle("open", open);
    $("#backdrop").classList.toggle("open", open);
    $("#statePanel").setAttribute("aria-hidden", String(!open));
    if (open) renderPanel(mode);
  }

  function choiceForValue(item, value) {
    return sceneChoices(item.scene).find(choice => String(item.scene.choiceSystem ? choice.id : choice.number) === String(value));
  }

  function routeMemoEntries() {
    const entries = [];
    for (const item of orderedScenes()) {
      if (!planningSceneKeys.has(item.key)) continue;
      if (selections[item.key] == null) continue;
      const result = replayResult.sceneResults.get(item.key);
      const choice = choiceForValue(item, selections[item.key]);
      if (!result?.selectedValid || !choice) continue;
      entries.push({
        item,
        sceneName: sceneName(item.scene),
        choiceName: choice.text || choice.title || choice.id
      });
    }
    return entries;
  }

  function buildRouteMemo(entries = routeMemoEntries()) {
    const lines = [
      t("export.heading", { app: APP_NAME, game: GAME_NAME }),
      t("export.count", { count: entries.length }),
      ""
    ];
    let chapterNumber = null;
    entries.forEach((entry, index) => {
      if (entry.item.chapter.number !== chapterNumber) {
        if (chapterNumber !== null) lines.push("");
        chapterNumber = entry.item.chapter.number;
        lines.push(`${CHAPTER_NAMES[entry.item.chapter.id] || entry.item.chapter.id}`);
      }
      lines.push(`${index + 1}. ${entry.sceneName} — «${entry.choiceName}»`);
    });
    return lines.join("\r\n") + "\r\n";
  }

  function downloadLocalFile(parts, filename, type) {
    const blob = new Blob(parts, { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function setRouteFileStatus(key = "", values = {}) {
    $("#routeFileStatus").textContent = key ? t(key, values) : "";
  }

  function renderRouteFileDialog() {
    const count = routeMemoEntries().length;
    $("#routeFileSummary").textContent = t("routeFile.summary", { count });
    $("#exportRouteFileButton").disabled = count === 0;
    $("#exportMemoButton").disabled = count === 0;
    setRouteFileStatus();
  }

  function setRouteFileOpen(open) {
    routeFileOpen = Boolean(open);
    $("#routeFileDialog").classList.toggle("open", routeFileOpen);
    $("#routeFileBackdrop").classList.toggle("open", routeFileOpen);
    $("#routeFileDialog").setAttribute("aria-hidden", String(!routeFileOpen));
    if (!routeFileOpen) {
      $("#routeFileInput").value = "";
      return;
    }
    if (panelOpen) openPanel(false);
    if (choiceHistoryOpen) setChoiceHistoryOpen(false);
    openToolsMenu(false);
    openRouteInfo(false);
    renderRouteFileDialog();
    requestAnimationFrame(() => {
      const firstAction = $("#exportRouteFileButton").disabled
        ? $("#importRouteFileButton")
        : $("#exportRouteFileButton");
      firstAction.focus();
    });
  }

  function routeFileChoices() {
    return routeMemoEntries().map(entry => ({
      scene: entry.item.scene.id,
      choice: String(selections[entry.item.key])
    }));
  }

  function exportRouteFile() {
    const choices = routeFileChoices();
    if (!choices.length) {
      setRouteFileStatus("export.empty");
      return;
    }
    downloadLocalFile(
      [ROUTE_FILES.serialize(choices)],
      "eterna-route.json",
      "application/json;charset=utf-8"
    );
    setRouteFileStatus("routeFile.exported", { count: choices.length });
  }

  function removeInvalidImportedSelections() {
    let removed = 0;
    for (let guard = 0; guard < flatScenes.length; guard += 1) {
      replayResult = replay();
      const invalid = flatScenes.find(item =>
        selections[item.key] != null && !replayResult.sceneResults.get(item.key)?.selectedValid
      );
      if (!invalid) break;
      delete selections[invalid.key];
      removed += 1;
    }
    replayResult = replay();
    return removed;
  }

  async function importRouteFile(file) {
    if (!file) return;
    if (file.size > ROUTE_FILES.maxBytes) {
      setRouteFileStatus("routeFile.tooLarge");
      return;
    }

    let records;
    try {
      records = ROUTE_FILES.parse(await file.text());
    } catch (_) {
      setRouteFileStatus("routeFile.invalid");
      return;
    }
    if (!records.length) {
      setRouteFileStatus("routeFile.noCompatible");
      return;
    }

    const imported = {};
    let skipped = 0;
    for (const record of records) {
      const item = sceneById.get(record.scene);
      if (!item || !planningSceneKeys.has(item.key) || !choiceForValue(item, record.choice)) {
        skipped += 1;
        continue;
      }
      imported[item.key] = record.choice;
    }
    const accepted = Object.keys(imported).length;
    if (!accepted) {
      setRouteFileStatus("routeFile.noCompatible");
      return;
    }
    if (!confirm(t("routeFile.importConfirm", { count: accepted }))) return;

    const previousSelections = selections;
    const previousArmedUnlocks = armedUnlocks;
    selections = imported;
    armedUnlocks = new Set();
    skipped += removeInvalidImportedSelections();
    const loaded = Object.keys(selections).length;
    if (!loaded) {
      selections = previousSelections;
      armedUnlocks = previousArmedUnlocks;
      replayResult = replay();
      refreshTimeline(0, false);
      setRouteFileStatus("routeFile.noCompatible");
      return;
    }

    save();
    refreshTimeline(0, false);
    setRouteFileOpen(false);
    showRouteNotice(t("routeFile.imported", { loaded, skipped }));
  }

  // ── Читаемая памятка только с выбранными решениями ─────────────────────
  function exportRouteMemo() {
    const entries = routeMemoEntries();
    if (!entries.length) {
      setRouteFileStatus("export.empty");
      return;
    }
    downloadLocalFile(
      ["\ufeff", buildRouteMemo(entries)],
      "eterna-route-plan.txt",
      "text/plain;charset=utf-8"
    );
    setRouteFileStatus("export.saved", { count: entries.length });
  }

  function targetRequirementTokens(item, choice) {
    const tokens = new Set();
    collectGroupTokens(item.scene.appearance, item.scene, tokens);
    for (const group of choice.requirements || []) collectGroupTokens(group, item.scene, tokens);
    return tokens;
  }

  function choiceInfluenceTokens(choice) {
    const tokens = new Set();
    for (const effect of choice.effects || []) collectEffectTokens(effect, tokens);
    for (const group of choice.requirements || []) {
      const payment = numericToken("parameter", group.unlock?.parameter);
      if (payment) tokens.add(payment);
    }
    return tokens;
  }

  function tokensIntersect(tokens, keys) {
    return [...tokens].some(token => keys.has(entryKey(token)));
  }

  function relevantHistoryItems(beforeIndex, targetKeys) {
    return orderedScenes().filter(item => {
      if (timelineIndex(item) >= beforeIndex || selections[item.key] == null) return false;
      const result = replayResult.sceneResults.get(item.key);
      const choices = sceneChoices(item.scene);
      if (!result?.available || !result.selectedValid || choices.length < 2) return false;
      return choices.some(choice => tokensIntersect(choiceInfluenceTokens(choice), targetKeys));
    });
  }

  function continuousChoiceBoundary() {
    if (!replayResult.currentSceneKey) return flatScenes.length;
    const current = flatScenes.find(item => item.key === replayResult.currentSceneKey);
    return timelineIndex(current);
  }

  function historyImpactText(choice, targetKeys, availability, selected = false) {
    const parts = [];
    for (const effect of choice.effects || []) {
      const tokens = new Set();
      collectEffectTokens(effect, tokens);
      if (tokensIntersect(tokens, targetKeys)) parts.push(effectText(effect));
    }
    for (const payment of availability?.payments || []) {
      if (!payment.armed || !payment.cost) continue;
      const after = payment.current - payment.cost;
      const prefix = t(selected ? "history.spent" : "history.cost");
      parts.push(`${prefix}: ${label(payment.parameter)} ${sign(-payment.cost)} (${payment.current} → ${after})`);
    }
    return [...new Set(parts)].join(" · ");
  }

  function historyChoiceAvailable(item, choice, result) {
    if (!result?.available) return { available: false, reason: t("scene.notAvailable") };
    if (item.scene.choiceSystem) {
      return result.optionResults.get(choice.id) ||
        specialAvailability(choice, result.state, item.scene, item.chapter.number, result.usedBefore);
    }
    return choiceAvailability(choice, result.state, item.scene);
  }

  function historySceneHtml(item, targetKeys) {
    const result = replayResult.sceneResults.get(item.key);
    const selected = selections[item.key];
    const choices = sceneChoices(item.scene).map((choice, index) => {
      const value = item.scene.choiceSystem ? choice.id : String(choice.number);
      const isSelected = String(selected) === String(value);
      const availability = historyChoiceAvailable(item, choice, result);
      const available = Boolean(availability.available);
      const impact = historyImpactText(choice, targetKeys, availability, isSelected);
      const number = item.scene.choiceSystem ? (choice.order || index + 1) : choice.number;
      const name = choice.text || choice.title || choice.id;
      const reason = available ? "" : (availability.reason || t("choice.conditionsFailed"));
      return `<button class="choice-history-option ${isSelected ? "selected" : ""}" type="button"
        data-history-scene="${escapeHtml(item.key)}" data-history-choice="${escapeHtml(value)}"
        ${available && !isSelected ? "" : "disabled"} title="${escapeHtml(reason)}">
        <span class="choice-history-option-number">${escapeHtml(number)}</span>
        <span class="choice-history-option-copy">
          <span class="choice-history-option-name">${escapeHtml(name)}</span>
          <span class="choice-history-impact ${impact ? "" : "neutral"}">${escapeHtml(impact || t("history.noImpact"))}</span>
        </span>
        <span class="choice-history-option-mark">${isSelected ? "✓" : ""}</span>
      </button>`;
    }).join("");
    return `<article class="choice-history-scene" data-history-index="${timelineIndex(item)}">
      <div class="choice-history-scene-head" role="button" tabindex="0" data-history-goto-scene="${escapeHtml(item.key)}" title="${escapeHtml(t("history.showMain"))}">
        <span class="choice-history-order">${escapeHtml(t("history.order", { chapter: item.chapter.number }))}</span>
        <span class="choice-history-scene-name" title="${escapeHtml(item.scene.id)}">${escapeHtml(sceneName(item.scene))}</span>
      </div>
      <div class="choice-history-options">${choices}</div>
    </article>`;
  }

  function renderHistoryTrack(historyItems, targetKeys, scrollToLatest, emptyText) {
    const track = $("#choiceHistoryTrack");
    const previousScroll = track.scrollLeft;
    track.innerHTML = historyItems.length
      ? historyItems.map(item => historySceneHtml(item, targetKeys)).join("")
      : `<p class="choice-history-empty">${escapeHtml(emptyText)}</p>`;
    requestAnimationFrame(() => {
      track.scrollLeft = scrollToLatest ? track.scrollWidth : Math.min(previousScroll, Math.max(0, track.scrollWidth - track.clientWidth));
    });
  }

  function renderAttributeChoiceHistory(scrollToLatest = false) {
    const targetKeys = new Set(choiceHistoryTarget.keys || []);
    const boundary = continuousChoiceBoundary();
    const historyItems = relevantHistoryItems(boundary, targetKeys);
    $("#choiceHistoryTitle").textContent = t("history.attributeTitle");
    $("#choiceHistoryTarget").textContent = choiceHistoryTarget.label || t("history.attribute");
    $("#choiceHistoryStatus").innerHTML = `
      <div class="choice-history-status-copy">
        <span class="choice-history-state available">${escapeHtml(t("history.contiguous"))}</span>
        <span class="choice-history-traits">${escapeHtml(t("history.affects", { attribute: choiceHistoryTarget.label || t("history.attributeObject") }))}</span>
        <div class="choice-history-condition">${escapeHtml(t("history.gapNote"))}</div>
      </div>`;
    renderHistoryTrack(
      historyItems,
      targetKeys,
      scrollToLatest,
      t("history.noAttributeChoices")
    );
  }

  function renderChoiceHistory(scrollToLatest = false) {
    if (!choiceHistoryTarget) return;
    if (choiceHistoryTarget.mode === "attribute") {
      renderAttributeChoiceHistory(scrollToLatest);
      return;
    }
    const targetItem = flatScenes.find(item => item.key === choiceHistoryTarget.itemKey);
    const targetChoice = targetItem && choiceForValue(targetItem, choiceHistoryTarget.value);
    if (!targetItem || !targetChoice) {
      setChoiceHistoryOpen(false);
      return;
    }
    const result = replayResult.sceneResults.get(targetItem.key);
    const availability = uiChoiceAvailability(targetChoice, targetItem, result, choiceHistoryTarget.value);
    const available = Boolean(result?.available && availability.available);
    const tokens = targetRequirementTokens(targetItem, targetChoice);
    const targetKeys = new Set([...tokens].map(entryKey));
    const tokenLabels = [...new Set([...tokens].map(numericTokenLabel))];
    const historyItems = relevantHistoryItems(timelineIndex(targetItem), targetKeys);
    const targetName = targetChoice.text || targetChoice.title || targetChoice.id;
    $("#choiceHistoryTitle").textContent = t("history.editTitle");
    $("#choiceHistoryTarget").textContent = `${sceneName(targetItem.scene)} · ${targetName}`;
    const requirements =
      groupHtml(targetItem.scene.appearance, result.state, targetItem.scene, null) +
      requirementsHtml(targetChoice, result.state, targetItem.scene);
    $("#choiceHistoryStatus").innerHTML = `
      <div class="choice-history-status-copy">
        <span class="choice-history-state ${available ? "available" : ""}">${escapeHtml(t(available ? "history.available" : "history.unavailable"))}</span>
        <span class="choice-history-traits">${escapeHtml(tokenLabels.length ? t("history.searchAffects", { attributes: tokenLabels.join(", ") }) : t("history.noNumeric"))}</span>
        <div class="choice-history-condition">${requirements}</div>
      </div>
      ${available ? `<button type="button" data-history-goto-target>${escapeHtml(t("history.goToChoice"))}</button>` : ""}`;
    renderHistoryTrack(
      historyItems,
      targetKeys,
      scrollToLatest,
      t("history.noChoices")
    );
  }

  function setChoiceHistoryOpen(open, target = null) {
    choiceHistoryOpen = open;
    if (target) choiceHistoryTarget = target;
    $("#choiceHistoryDialog").classList.toggle("open", open);
    $("#choiceHistoryBackdrop").classList.toggle("open", open);
    $("#choiceHistoryDialog").setAttribute("aria-hidden", String(!open));
    if (!open) {
      choiceHistoryTarget = null;
      return;
    }
    if (panelOpen) openPanel(false);
    if (routeFileOpen) setRouteFileOpen(false);
    openToolsMenu(false);
    openRouteInfo(false);
    renderChoiceHistory(true);
    requestAnimationFrame(() => $("#closeChoiceHistory").focus());
  }

  function openChoiceHistoryForElement(element) {
    const item = flatScenes.find(candidate => candidate.key === element.dataset.sceneKey);
    const choice = item && choiceForValue(item, element.dataset.choice);
    if (!item || !choice) return;
    setChoiceHistoryOpen(true, { mode: "choice", itemKey: item.key, value: element.dataset.choice });
  }

  function openAttributeHistoryForElement(element) {
    const keys = (element.dataset.attributeTokens || "").split(/\s+/).filter(Boolean);
    if (!keys.length) return;
    const label = element.textContent.trim().replace(/\s+/g, " ");
    setChoiceHistoryOpen(true, { mode: "attribute", keys, label });
  }

  function changeHistoryChoice(button) {
    if (button.disabled) return;
    const item = flatScenes.find(candidate => candidate.key === button.dataset.historyScene);
    if (!item || String(selections[item.key]) === String(button.dataset.historyChoice)) return;
    selections[item.key] = button.dataset.historyChoice;
    replayResult = replay();
    const removed = pruneInvalidSelections(item);
    if (removed.length) replayResult = replay();
    save();
    refreshTimeline(item.flatIndex, false);
    showPrunedSelections(removed.length);
    renderChoiceHistory(false);
  }

  function gotoHistoryScene(sceneKey) {
    const item = flatScenes.find(candidate => candidate.key === sceneKey);
    if ($("#search").value) {
      $("#search").value = "";
      applySearch();
    }
    setChoiceHistoryOpen(false);
    scrollToItem(item, "smooth");
  }

  function pruneInvalidSelections(afterItem) {
    const removed = [];
    const afterIndex = timelineIndex(afterItem);
    for (const item of orderedScenes()) {
      if (!planningSceneKeys.has(item.key)) continue;
      if (selections[item.key] == null) continue;
      if (!isRecurringScene(item.scene) && timelineIndex(item) <= afterIndex) continue;
      const result = replayResult.sceneResults.get(item.key);
      if (result?.blockedByEnding) continue;
      if (!result || !result.available || !result.selectedValid) {
        removed.push(item.key);
        delete selections[item.key];
      }
    }
    return removed;
  }

  function hasAvailableDecision(item, result) {
    if (item.scene.choiceSystem) {
      return [...result.optionResults.values()].some(option => option.available);
    }
    return (item.scene.choices || []).some(choice =>
      choiceAvailability(choice, result.state, item.scene).available
    );
  }

  function nextAttentionItem(afterIndex) {
    let blocked = null;
    for (const item of orderedScenes()) {
      if (timelineIndex(item) <= afterIndex) continue;
      if (!planningSceneKeys.has(item.key)) continue;
      const result = replayResult.sceneResults.get(item.key);
      if (!result || !result.available || !sceneChoices(item.scene).length) continue;
      if (selections[item.key] != null && result.selectedValid) continue;
      if (hasAvailableDecision(item, result)) return item;
      if (!blocked) blocked = item;
    }
    return blocked;
  }

  function showRouteNotice(message) {
    clearTimeout(routeNoticeTimer);
    $("#routeNotice").textContent = message;
    routeNoticeTimer = setTimeout(() => {
      $("#routeNotice").textContent = "";
      routeNoticeTimer = 0;
    }, 4000);
  }

  function showPrunedSelections(count) {
    if (!count) return;
    const plural = new Intl.PluralRules(I18N.locale).select(count);
    const word = t(`reset.choice.${plural === "one" ? "one" : (plural === "few" ? "few" : "many")}`);
    showRouteNotice(t("reset.after", { count, word }));
  }

  function cancelTimelineScrollAnimation() {
    if (timelineScrollFrame) cancelAnimationFrame(timelineScrollFrame);
    timelineScrollFrame = 0;
  }

  function smoothScrollProgress(progress) {
    return progress * progress * progress * (progress * (progress * 6 - 15) + 10);
  }

  function scrollToItem(targetItem, behavior = "auto") {
    const card = targetItem && sceneElements.get(targetItem.key);
    const viewport = $("#timelineViewport");
    if (!card || card.classList.contains("search-hidden") || card.closest(".chapter")?.hidden) return null;
    if (behavior !== "auto" && matchMedia("(prefers-reduced-motion: reduce)").matches) behavior = "auto";
    const viewportRect = viewport.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const desired = clamp(
      viewport.scrollLeft + cardRect.left - viewportRect.left + cardRect.width / 2 - viewport.clientWidth / 2,
      0,
      Math.max(0, viewport.scrollWidth - viewport.clientWidth)
    );
    cancelTimelineScrollAnimation();
    if (behavior === "quick") {
      const start = viewport.scrollLeft;
      const distance = desired - start;
      const duration = QUICK_SCROLL_DURATION;
      const startedAt = performance.now();
      const step = now => {
        const progress = clamp((now - startedAt) / duration, 0, 1);
        const eased = smoothScrollProgress(progress);
        viewport.scrollLeft = start + distance * eased;
        if (progress < 1) timelineScrollFrame = requestAnimationFrame(step);
        else timelineScrollFrame = 0;
      };
      timelineScrollFrame = requestAnimationFrame(step);
    } else {
      viewport.scrollTo({ left: desired, top: viewport.scrollTop, behavior });
    }
    return desired;
  }

  function scrollToCurrent(behavior = "smooth") {
    if (!replayResult.currentSceneKey) return null;
    const item = flatScenes.find(candidate => candidate.key === replayResult.currentSceneKey);
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const usedBehavior = reducedMotion ? "auto" : behavior;
    return scrollToItem(item, usedBehavior);
  }

  function visibleTimelineItems() {
    return planningSceneItems.filter(item => {
      const card = sceneElements.get(item.key);
      return card && !card.classList.contains("search-hidden") && !card.closest(".chapter")?.hidden;
    });
  }

  function timelinePositionLabel(item) {
    if (!item) return t("timeline.scrollbar");
    return t("timeline.position", {
      chapter: CHAPTER_NAMES[item.chapter.id] || item.chapter.id,
      scene: sceneName(item.scene)
    });
  }

  function scheduleAutoScroll(targetItem) {
    if (autoScrollFrame) cancelAnimationFrame(autoScrollFrame);
    autoScrollFrame = 0;
    if (!targetItem || $("#search").value.trim()) return;
    autoScrollFrame = requestAnimationFrame(() => {
      autoScrollFrame = 0;
      const viewport = $("#timelineViewport");
      const card = sceneElements.get(targetItem.key);
      if (!card) return;
      const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior = reducedMotion ? "auto" : "quick";
      scrollToItem(targetItem, behavior);
    });
  }

  function choose(element) {
    if (element.dataset.available !== "true") return;
    const key = element.dataset.sceneKey;
    const value = element.dataset.choice;
    const deselecting = String(selections[key]) === String(value);
    const item = flatScenes.find(candidate => candidate.key === key);
    const wasCurrent = replayResult.currentSceneKey === key;
    const wasSelected = selections[key] != null;
    if (deselecting) delete selections[key];
    else selections[key] = value;
    replayResult = replay();
    let removed = [];
    if (item) {
      removed = pruneInvalidSelections(item);
      if (removed.length) replayResult = replay();
    }
    save();
    refreshTimeline(item ? item.flatIndex : 0, false);
    showPrunedSelections(removed.length);
    const shouldAdvance = !deselecting && wasCurrent && !wasSelected;
    const targetItem = shouldAdvance && replayResult.currentSceneKey
      ? flatScenes.find(candidate => candidate.key === replayResult.currentSceneKey)
      : null;
    scheduleAutoScroll(targetItem);
  }

  function toggleUnlock(button) {
    const sceneKey = button.dataset.unlockScene;
    const value = button.dataset.unlockChoice;
    const parameterKey = button.dataset.unlockParameter;
    const item = flatScenes.find(candidate => candidate.key === sceneKey);
    if (!item || button.disabled) return;
    const armKey = unlockArmKey(sceneKey, value, { key: parameterKey });
    if (armedUnlocks.has(armKey)) armedUnlocks.delete(armKey);
    else armedUnlocks.add(armKey);
    refreshTimeline(item.flatIndex, false);
  }

  function applySearch() {
    const rawQuery = $("#search").value.trim();
    const query = I18N.lower(rawQuery);
    let visible = 0;
    document.querySelectorAll(".scene-card").forEach(card => {
      const haystack = I18N.lower(`${card.textContent} ${card.dataset.sceneId || ""}`);
      const matches = !query || haystack.includes(query);
      card.classList.toggle("search-hidden", !matches);
      if (matches) visible += 1;
    });
    document.querySelectorAll(".chapter").forEach(chapter => {
      chapter.hidden = !chapter.querySelector(".scene-card:not(.search-hidden)");
    });
    $("#searchSummary").textContent = query ? t("search.found", { count: visible }) : "";
    $("#searchModeBar").hidden = !query;
    $("#searchModeText").textContent = query ? t("search.active", { query: rawQuery }) : "";
    $("#searchModeCount").textContent = query ? t("search.found", { count: visible }) : "";
    $(".timeline-shell").classList.toggle("search-active", Boolean(query));
    requestAnimationFrame(updateTimelineScrollbar);
  }

  function clearSearch() {
    if (!$("#search").value) return;
    $("#search").value = "";
    applySearch();
  }

  function goToCurrentChoice() {
    clearSearch();
    openToolsMenu(false);
    openRouteInfo(false);
    scrollToCurrent("smooth");
  }

  function openToolsMenu(open) {
    if (open && routeInfoOpen) openRouteInfo(false);
    toolsMenuOpen = open;
    $("#toolsMenu").classList.toggle("open", open);
    $("#toolsMenu").setAttribute("aria-hidden", String(!open));
    $("#toolsMenuButton").setAttribute("aria-expanded", String(open));
    if (open) requestAnimationFrame(() => $("#search").focus());
  }

  function openRouteInfo(open) {
    if (open && toolsMenuOpen) openToolsMenu(false);
    routeInfoOpen = open;
    $("#routeInfoPanel").classList.toggle("open", open);
    $("#routeInfoPanel").setAttribute("aria-hidden", String(!open));
    $("#routeInfoButton").setAttribute("aria-expanded", String(open));
  }

  function setHeaderCollapsed(collapsed, persist = true) {
    headerCollapsed = Boolean(collapsed);
    if (headerCollapsed) {
      openToolsMenu(false);
      openRouteInfo(false);
    }
    $("#attributeBar").classList.toggle("collapsed", headerCollapsed);
    const collapseButton = $("#headerToggleButton");
    const expandButton = $("#headerExpandButton");
    collapseButton.setAttribute("aria-expanded", String(!headerCollapsed));
    expandButton.setAttribute("aria-expanded", String(!headerCollapsed));
    if (persist) save();
  }

  // ── Обработчики пользовательского интерфейса ──────────────────────────
  function initializeControls() {
    setHeaderCollapsed(headerCollapsed, false);
    const supportLink = $("#supportLink");
    supportLink.href = SUPPORT_URLS[I18N.locale] || SUPPORT_URLS.ru;
    supportLink.addEventListener("click", () => openToolsMenu(false));
    $("#chapterJump").innerHTML = `<option value="">${escapeHtml(t("tools.chapterPlaceholder"))}</option>` + planner.chapters.map(chapter =>
      `<option value="${chapter.number}">${escapeHtml(CHAPTER_NAMES[chapter.id] || chapter.id)}</option>`
    ).join("");
    $("#chapterJump").addEventListener("change", event => {
      const target = document.getElementById(`chapter-${event.target.value}`);
      const behavior = matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      if (target) target.scrollIntoView({ behavior, inline: "start", block: "start" });
      event.target.value = "";
      openToolsMenu(false);
    });
    $("#search").addEventListener("input", applySearch);
    $("#clearSearchButton").addEventListener("click", clearSearch);
    $("#toolsMenuButton").addEventListener("click", () => openToolsMenu(!toolsMenuOpen));
    $("#routeInfoButton").addEventListener("click", () => openRouteInfo(!routeInfoOpen));
    $("#headerToggleButton").addEventListener("click", () => setHeaderCollapsed(true));
    $("#headerExpandButton").addEventListener("click", () => setHeaderCollapsed(false));
    $("#hiddenScenesButton").addEventListener("click", () => {
      openToolsMenu(false);
      openPanel(true, "hidden");
    });
    $("#stateButton").addEventListener("click", () => {
      openToolsMenu(false);
      openPanel(true, "state");
    });
    $("#routeFileButton").addEventListener("click", () => setRouteFileOpen(true));
    $("#closeRouteFile").addEventListener("click", () => setRouteFileOpen(false));
    $("#routeFileBackdrop").addEventListener("click", () => setRouteFileOpen(false));
    $("#exportRouteFileButton").addEventListener("click", exportRouteFile);
    $("#importRouteFileButton").addEventListener("click", () => $("#routeFileInput").click());
    $("#exportMemoButton").addEventListener("click", exportRouteMemo);
    $("#routeFileInput").addEventListener("change", event => {
      const file = event.target.files?.[0];
      event.target.value = "";
      if (file) void importRouteFile(file);
    });
    $("#currentChoiceButton").addEventListener("click", goToCurrentChoice);
    $("#closePanel").addEventListener("click", () => openPanel(false));
    $("#backdrop").addEventListener("click", () => openPanel(false));
    $("#closeChoiceHistory").addEventListener("click", () => setChoiceHistoryOpen(false));
    $("#choiceHistoryBackdrop").addEventListener("click", () => setChoiceHistoryOpen(false));
    $("#choiceHistoryTrack").addEventListener("click", event => {
      const option = event.target.closest("[data-history-choice]");
      if (option) {
        changeHistoryChoice(option);
        return;
      }
      const scene = event.target.closest("[data-history-goto-scene]");
      if (scene) gotoHistoryScene(scene.dataset.historyGotoScene);
    });
    $("#choiceHistoryTrack").addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-history-goto-scene]")) {
        event.preventDefault();
        gotoHistoryScene(event.target.dataset.historyGotoScene);
      }
    });
    $("#choiceHistoryStatus").addEventListener("click", event => {
      if (!event.target.closest("[data-history-goto-target]") || !choiceHistoryTarget) return;
      const target = flatScenes.find(item => item.key === choiceHistoryTarget.itemKey);
      if ($("#search").value) {
        $("#search").value = "";
        applySearch();
      }
      setChoiceHistoryOpen(false);
      scrollToItem(target, "smooth");
    });
    $("#resetButton").addEventListener("click", () => {
      if (!Object.keys(selections).length || confirm(t("reset.confirm"))) {
        selections = {};
        armedUnlocks.clear();
        save();
        refreshTimeline(0);
        openToolsMenu(false);
        setChoiceHistoryOpen(false);
      }
    });
    $("#attributeGroups").addEventListener("click", event => {
      const attribute = event.target.closest("[data-attribute-tokens]");
      if (attribute) openAttributeHistoryForElement(attribute);
    });
    $("#attributeGroups").addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-attribute-tokens]")) {
        event.preventDefault();
        openAttributeHistoryForElement(event.target);
      }
    });
    $("#timeline").addEventListener("click", event => {
      const unlock = event.target.closest(".unlock-action");
      if (unlock) {
        event.stopPropagation();
        toggleUnlock(unlock);
        return;
      }
      const choice = event.target.closest(".choice-card");
      if (choice) {
        if (choice.dataset.available === "true") choose(choice);
        else openChoiceHistoryForElement(choice);
      }
    });
    $("#timeline").addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches(".choice-card")) {
        event.preventDefault();
        if (event.target.dataset.available === "true") choose(event.target);
        else openChoiceHistoryForElement(event.target);
      }
    });
    $("#panelBody").addEventListener("click", event => {
      const goto = event.target.closest("[data-goto-scene]");
      if (goto) {
        const target = sceneElements.get(goto.dataset.gotoScene);
        openPanel(false);
        const behavior = matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        if (target) target.scrollIntoView({ behavior, inline: "center", block: "start" });
      }
    });
    $("#timelineViewport").addEventListener("wheel", event => {
      cancelTimelineScrollAnimation();
      if (event.shiftKey && Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        event.currentTarget.scrollLeft += event.deltaY;
      }
    }, { passive: false });
    const timelineViewport = $("#timelineViewport");
    const timelineSlider = $("#timelineSlider");
    const timelineScrollbar = $("#timelineScrollbar");
    const timelineSliderMarkers = $("#timelineSliderMarkers");
    const timelineCurrentMarker = $("#timelineCurrentMarker");
    const timelineSliderTooltip = $("#timelineSliderTooltip");
    let sliderItemPositions = [];
    let sliderLayoutMaximum = -1;

    const scrollPositionForCard = card => {
      const viewportRect = timelineViewport.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      return clamp(
        timelineViewport.scrollLeft + cardRect.left - viewportRect.left + cardRect.width / 2 - timelineViewport.clientWidth / 2,
        0,
        Math.max(0, timelineViewport.scrollWidth - timelineViewport.clientWidth)
      );
    };

    const itemNearestScrollPosition = scrollLeft => {
      let nearest = null;
      let nearestDistance = Infinity;
      for (const entry of sliderItemPositions) {
        const distance = Math.abs(entry.position - scrollLeft);
        if (distance < nearestDistance) {
          nearest = entry.item;
          nearestDistance = distance;
        }
      }
      return nearest;
    };

    const updateSliderDescription = (scrollLeft, maximum) => {
      const item = itemNearestScrollPosition(scrollLeft);
      const description = timelinePositionLabel(item);
      const progress = maximum > 0 ? clamp(scrollLeft / maximum, 0, 1) * 100 : 0;
      timelineSlider.setAttribute("aria-valuetext", description);
      timelineSliderTooltip.textContent = description;
      timelineScrollbar.style.setProperty("--timeline-tooltip-position", `${progress}%`);
    };

    const rebuildSliderLayout = maximum => {
      sliderItemPositions = visibleTimelineItems().map(item => ({
        item,
        position: scrollPositionForCard(sceneElements.get(item.key))
      }));
      sliderLayoutMaximum = maximum;
      const visibleChapters = [...document.querySelectorAll(".chapter:not([hidden])")];
      const chapterRanges = visibleChapters.map(chapter => {
        const heading = chapter.querySelector(".chapter-heading");
        const scrollPosition = heading ? scrollPositionForCard(heading) : 0;
        return {
          number: Number(chapter.dataset.chapter),
          position: maximum > 0 ? clamp(scrollPosition / maximum, 0, 1) * 100 : 0
        };
      });
      timelineSliderMarkers.innerHTML = chapterRanges.map((chapter, index) => {
        const end = chapterRanges[index + 1]?.position ?? 100;
        const width = Math.max(0, end - chapter.position);
        const lastClass = index === chapterRanges.length - 1 ? " is-last" : "";
        return `<span class="timeline-chapter-segment${lastClass}" style="left:${chapter.position}%;width:${width}%"><span class="timeline-chapter-label">${romanNumeral(chapter.number)}</span></span><span class="timeline-chapter-marker" style="left:${chapter.position}%"></span>`;
      }).join("");

      const currentItem = replayResult?.currentSceneKey
        ? flatScenes.find(item => item.key === replayResult.currentSceneKey)
        : null;
      const currentCard = currentItem && sceneElements.get(currentItem.key);
      const currentVisible = currentCard && !currentCard.classList.contains("search-hidden") && !currentCard.closest(".chapter")?.hidden;
      timelineCurrentMarker.hidden = !currentVisible;
      if (currentVisible) {
        const position = maximum > 0 ? clamp(scrollPositionForCard(currentCard) / maximum, 0, 1) * 100 : 0;
        timelineCurrentMarker.style.setProperty("--timeline-current-position", `${position}%`);
      }
    };

    const updateTimelineSlider = (refreshLayout = false) => {
      const maximum = Math.max(0, timelineViewport.scrollWidth - timelineViewport.clientWidth);
      timelineSlider.max = String(Math.ceil(maximum));
      timelineSlider.value = String(clamp(Math.round(timelineViewport.scrollLeft), 0, Math.ceil(maximum)));
      const progress = maximum > 0 ? clamp(timelineViewport.scrollLeft / maximum, 0, 1) * 100 : 0;
      timelineSlider.style.setProperty("--timeline-progress", `${progress}%`);
      timelineScrollbar.hidden = maximum < 2;
      if (refreshLayout || Math.abs(sliderLayoutMaximum - maximum) > 1 || !sliderItemPositions.length) {
        rebuildSliderLayout(maximum);
      }
      updateSliderDescription(timelineViewport.scrollLeft, maximum);
    };
    updateTimelineScrollbar = () => updateTimelineSlider(true);
    timelineSlider.addEventListener("input", () => {
      cancelTimelineScrollAnimation();
      timelineViewport.scrollLeft = Number(timelineSlider.value);
      timelineScrollbar.classList.add("interacting");
      updateSliderDescription(Number(timelineSlider.value), Number(timelineSlider.max));
    });
    timelineSlider.addEventListener("change", () => timelineScrollbar.classList.remove("interacting"));
    timelineSlider.addEventListener("blur", () => timelineScrollbar.classList.remove("interacting"));
    timelineSlider.addEventListener("keydown", event => {
      const direction = ["ArrowRight", "ArrowDown"].includes(event.key)
        ? 1
        : (["ArrowLeft", "ArrowUp"].includes(event.key) ? -1 : 0);
      const chapterDirection = event.key === "PageDown" ? 1 : (event.key === "PageUp" ? -1 : 0);
      if (!direction && !chapterDirection) return;
      const items = visibleTimelineItems();
      if (!items.length) return;
      event.preventDefault();
      cancelTimelineScrollAnimation();
      const currentItem = itemNearestScrollPosition(timelineViewport.scrollLeft) || items[0];
      let target = currentItem;
      if (direction) {
        const index = items.indexOf(currentItem);
        target = items[clamp(index + direction, 0, items.length - 1)];
      } else {
        const chapters = [...new Set(items.map(item => item.chapter.number))];
        const chapterIndex = chapters.indexOf(currentItem.chapter.number);
        const targetChapter = chapters[clamp(chapterIndex + chapterDirection, 0, chapters.length - 1)];
        target = items.find(item => item.chapter.number === targetChapter) || currentItem;
      }
      const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      scrollToItem(target, reducedMotion ? "auto" : "smooth");
      timelineScrollbar.classList.add("interacting");
    });
    const timelineResizeObserver = globalThis.ResizeObserver
      ? new ResizeObserver(() => updateTimelineSlider(true))
      : null;
    if (timelineResizeObserver) {
      timelineResizeObserver.observe(timelineViewport);
      timelineResizeObserver.observe($("#timeline"));
    } else {
      globalThis.addEventListener("resize", () => updateTimelineSlider(true));
    }
    requestAnimationFrame(() => updateTimelineSlider(true));
    $("#timelineViewport").addEventListener("pointerdown", cancelTimelineScrollAnimation, { passive: true });
    let scrollFrame = 0;
    $("#timelineViewport").addEventListener("scroll", () => {
      if (!timelineSliderFrame) {
        timelineSliderFrame = requestAnimationFrame(() => {
          timelineSliderFrame = 0;
          updateTimelineSlider();
        });
      }
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const viewportLeft = $("#timelineViewport").getBoundingClientRect().left + 90;
        let detected = 1;
        document.querySelectorAll(".chapter:not([hidden])").forEach(chapter => {
          if (chapter.getBoundingClientRect().left <= viewportLeft) {
            detected = Number(chapter.dataset.chapter);
          }
        });
        if (detected !== activeChapter) {
          activeChapter = detected;
          updateHiddenScenesButton();
          if (panelOpen && panelMode === "hidden") renderPanel("hidden");
        }
      });
    }, { passive: true });
    document.addEventListener("keydown", event => {
      const target = event.target;
      const editingText = target instanceof HTMLElement && (
        target.matches("input, textarea, select") || target.isContentEditable
      );
      const overlayOpen = routeFileOpen || choiceHistoryOpen || panelOpen;
      if (event.key === "Home" && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey && !editingText && !overlayOpen) {
        event.preventDefault();
        goToCurrentChoice();
      } else if (event.key === "Escape" && routeFileOpen) setRouteFileOpen(false);
      else if (event.key === "Escape" && choiceHistoryOpen) setChoiceHistoryOpen(false);
      else if (event.key === "Escape" && toolsMenuOpen) openToolsMenu(false);
      else if (event.key === "Escape" && routeInfoOpen) openRouteInfo(false);
      else if (event.key === "Escape" && panelOpen) openPanel(false);
    });
    document.addEventListener("click", event => {
      if (toolsMenuOpen && !event.target.closest(".tools-menu-wrap")) openToolsMenu(false);
      if (routeInfoOpen && !event.target.closest(".route-info-wrap")) openRouteInfo(false);
    });
  }

  initializeControls();
  buildTimeline();
})();
