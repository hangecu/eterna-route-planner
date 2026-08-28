/**
 * Минимальный переносимый формат маршрута.
 * Файл содержит только идентификаторы выбранных событий и вариантов.
 */
"use strict";

(() => {
  const FORMAT = "eterna-route";
  const VERSION = 1;
  const MAX_BYTES = 256 * 1024;
  const MAX_CHOICES = 2048;

  function normalizedChoice(record) {
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      throw new Error("invalid-choice");
    }
    const scene = typeof record.scene === "string" ? record.scene.trim() : "";
    const choice = typeof record.choice === "string" ? record.choice.trim() : "";
    if (!scene || !choice || scene.length > 128 || choice.length > 128) {
      throw new Error("invalid-choice");
    }
    return { scene, choice };
  }

  function normalizeChoices(choices) {
    if (!Array.isArray(choices) || choices.length > MAX_CHOICES) {
      throw new Error("invalid-choices");
    }
    const seen = new Set();
    return choices.map(record => {
      const choice = normalizedChoice(record);
      if (seen.has(choice.scene)) throw new Error("duplicate-scene");
      seen.add(choice.scene);
      return choice;
    });
  }

  function serialize(choices) {
    return JSON.stringify({
      format: FORMAT,
      version: VERSION,
      choices: normalizeChoices(choices)
    }, null, 2) + "\n";
  }

  function parse(source) {
    if (typeof source !== "string") throw new Error("invalid-source");
    const data = JSON.parse(source.replace(/^\uFEFF/, ""));
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("invalid-file");
    if (data.format !== FORMAT || data.version !== VERSION) throw new Error("unsupported-format");
    return normalizeChoices(data.choices);
  }

  globalThis.ETERNA_ROUTE_FILES = Object.freeze({
    format: FORMAT,
    version: VERSION,
    maxBytes: MAX_BYTES,
    serialize,
    parse
  });
})();
