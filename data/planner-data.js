/**
 * Собирает раздельные файлы данных в один объект для приложения.
 * Сетевых запросов и динамической загрузки здесь нет.
 */
"use strict";

(() => {
  const chapters = globalThis.PLANNER_CHAPTERS;
  const choiceSystems = globalThis.PLANNER_CHOICE_SYSTEMS;
  const entities = globalThis.PLANNER_ENTITIES;
  const metadata = globalThis.PLANNER_METADATA;

  if (!Array.isArray(chapters) || !choiceSystems || !entities || !metadata) {
    throw new Error("Не удалось загрузить локальные данные планировщика");
  }

  globalThis.PLANNER_PAYLOAD = {
    app: {
      version: "0.9.3-beta"
    },
    planner: {
      schemaVersion: 5,
      choiceSystems,
      chapters
    },
    metadata: {
      entities,
      ...metadata
    }
  };
})();
