/**
 * Locale selection and the strictly text-only overlay for planner data.
 */
"use strict";

(() => {
  const registry = globalThis.PLANNER_LOCALES;
  const payload = globalThis.PLANNER_PAYLOAD;
  if (!registry?.languages || !payload?.planner || !payload?.metadata) {
    throw new Error("Planner localization could not be initialized");
  }

  const LANGUAGE_KEY = "eterna-route-planner-language";
  const supported = Object.keys(registry.languages);
  const normalizedLocale = value => {
    const requested = String(value || "").trim().toLocaleLowerCase("en");
    return supported.find(code => code.toLocaleLowerCase("en") === requested) ||
      supported.find(code => requested.startsWith(`${code.toLocaleLowerCase("en")}-`)) || "";
  };

  const queryLocale = (() => {
    try {
      return normalizedLocale(new URL(globalThis.location.href).searchParams.get("lang"));
    } catch {
      return "";
    }
  })();
  const storedLocale = (() => {
    try {
      return normalizedLocale(localStorage.getItem(LANGUAGE_KEY));
    } catch {
      return "";
    }
  })();
  const browserLocale = normalizedLocale(globalThis.navigator?.language);
  const locale = queryLocale || storedLocale || browserLocale || registry.base || supported[0];
  const baseUi = registry.languages[registry.base]?.ui || {};
  const selected = registry.languages[locale] || registry.languages[registry.base];
  const selectedUi = selected.ui || {};

  function t(key, variables = {}) {
    const template = selectedUi[key] ?? baseUi[key] ?? key;
    return String(template).replace(/\{([a-zA-Z0-9_]+)\}/g, (match, name) =>
      Object.hasOwn(variables, name) ? String(variables[name]) : match
    );
  }

  function applyGameText() {
    const game = selected.game || {};
    const scenes = game.scenes || {};
    for (const chapter of payload.planner.chapters) {
      const chapterTitle = game.metadata?.chapters?.[chapter.id];
      if (chapterTitle) chapter.title = chapterTitle;
      for (const scene of chapter.scenes) {
        const localized = scenes[scene.id];
        if (localized?.title) scene.title = localized.title;
        for (const choice of scene.choices || []) {
          const text = localized?.choices?.[String(choice.number)];
          if (text) choice.text = text;
        }
        if (scene.type === "transition") scene.title = t("data.automaticChange");
      }
    }

    for (const [systemKey, options] of Object.entries(game.choiceSystems || {})) {
      const system = payload.planner.choiceSystems[systemKey];
      if (!system) continue;
      for (const option of system.options || []) {
        const localized = options[option.id];
        if (localized?.title) option.title = localized.title;
        if (localized?.text) option.text = localized.text;
      }
    }

    for (const [key, localized] of Object.entries(game.entities || {})) {
      const entity = payload.metadata.entities[key];
      if (!entity) continue;
      if (localized.label) entity.label = localized.label;
      if (localized.categoryLabel) entity.categoryLabel = localized.categoryLabel;
      if (localized.sides) entity.sides = { ...entity.sides, ...localized.sides };
      if (localized.values) entity.values = { ...entity.values, ...localized.values };
    }

    for (const [key, label] of Object.entries(game.metadata?.groups || {})) {
      if (payload.metadata.groups[key] && label) payload.metadata.groups[key].label = label;
    }
    for (const [key, label] of Object.entries(game.metadata?.estateAllegianceRanges || {})) {
      if (payload.metadata.estateAllegianceRanges[key] && label) {
        payload.metadata.estateAllegianceRanges[key].label = label;
      }
    }
    for (const [key, label] of Object.entries(game.metadata?.estateParameters || {})) {
      if (label) payload.metadata.estateParameters[key] = label;
    }

    for (const [key, entity] of Object.entries(payload.metadata.entities)) {
      if (entity.auxiliary) entity.label = t("data.auxiliaryCondition");
      if (entity.kind === "statusGroup") entity.label = t("data.storyPath");
      if (key === "state-0365") entity.label = t("data.storyOutcome1");
      if (key === "state-0165") entity.label = t("data.storyOutcome2");
      if (key === "state-0311") entity.label = t("data.preserveYourself");
      if (entity.kind === "bilateral" && entity.sides) {
        entity.label = `${entity.sides["0"]} / ${entity.sides["1"]}`;
      }
    }
  }

  function applyDocumentText() {
    document.documentElement.lang = locale;
    document.title = t("meta.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = t("meta.description");
    for (const element of document.querySelectorAll("[data-i18n]")) {
      element.textContent = t(element.dataset.i18n);
    }
    for (const element of document.querySelectorAll("[data-i18n-placeholder]")) {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    }
    for (const element of document.querySelectorAll("[data-i18n-title]")) {
      element.setAttribute("title", t(element.dataset.i18nTitle));
    }
    for (const element of document.querySelectorAll("[data-i18n-aria-label]")) {
      element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    }

    const languageSelect = document.querySelector("#languageSelect");
    if (languageSelect) {
      languageSelect.setAttribute("aria-label", t("language.label"));
      languageSelect.innerHTML = supported.map(code => {
        const language = registry.languages[code];
        const option = document.createElement("option");
        option.value = code;
        option.textContent = language.name || code;
        option.selected = code === locale;
        return option.outerHTML;
      }).join("");
      languageSelect.value = locale;
      languageSelect.addEventListener("change", () => changeLocale(languageSelect.value));
    }
  }

  function changeLocale(nextLocale) {
    const code = normalizedLocale(nextLocale);
    if (!code || code === locale) return;
    try {
      localStorage.setItem(LANGUAGE_KEY, code);
    } catch {
      // The query parameter still works when localStorage is unavailable.
    }
    const url = new URL(globalThis.location.href);
    url.searchParams.set("lang", code);
    globalThis.location.assign(url.href);
  }

  applyGameText();
  applyDocumentText();

  globalThis.PLANNER_I18N = Object.freeze({
    locale,
    t,
    changeLocale,
    lower(value) {
      return String(value || "").toLocaleLowerCase(locale);
    },
    compare(left, right, options = {}) {
      return String(left).localeCompare(String(right), locale, options);
    }
  });
})();
