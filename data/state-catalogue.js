/**
 * Справочник характеристик, отношений, статусов, достижений, финалов и вспомогательных условий.
 * Ключи state-XXXX созданы внутри проекта и связывают записи между файлами.
 */
"use strict";
globalThis.PLANNER_ENTITIES = {
  "state-0020": {
    "kind": "entity",
    "label": "Духовный Конклав",
    "order": 6,
    "key": "state-0020"
  },
  "state-0019": {
    "kind": "entity",
    "label": "Орденский Устав",
    "order": 6,
    "key": "state-0019"
  },
  "state-0271": {
    "kind": "entity",
    "label": "Дворянская Ассамблея",
    "order": 4,
    "key": "state-0271"
  },
  "state-0173": {
    "kind": "entity",
    "label": "Дворянские наставники",
    "order": 4,
    "key": "state-0173"
  },
  "state-0299": {
    "kind": "entity",
    "label": "Комитет помощи неимущим",
    "order": 3,
    "key": "state-0299"
  },
  "state-0092": {
    "kind": "entity",
    "label": "Имперские подаяния",
    "order": 3,
    "key": "state-0092"
  },
  "state-0222": {
    "kind": "entity",
    "label": "Коллегия Права",
    "order": 5,
    "key": "state-0222"
  },
  "state-0001": {
    "kind": "entity",
    "label": "Защитники в судах",
    "order": 5,
    "key": "state-0001"
  },
  "state-0016": {
    "kind": "entity",
    "label": "Опись ресурсов",
    "order": 3,
    "key": "state-0016"
  },
  "state-0149": {
    "kind": "entity",
    "label": "Дружба с вассалами",
    "order": 3,
    "key": "state-0149"
  },
  "state-0162": {
    "kind": "entity",
    "label": "Талантливые офицеры",
    "order": 3,
    "key": "state-0162"
  },
  "state-0167": {
    "kind": "entity",
    "label": "Усовершенствование крепостей",
    "order": 3,
    "key": "state-0167"
  },
  "state-0338": {
    "kind": "entity",
    "label": "Общество наук и искусств",
    "order": 1,
    "key": "state-0338"
  },
  "state-0108": {
    "kind": "entity",
    "label": "Прогресс в массы",
    "order": 1,
    "key": "state-0108"
  },
  "state-0164": {
    "kind": "entity",
    "label": "Лучшие учителя",
    "order": 1,
    "key": "state-0164"
  },
  "state-0037": {
    "kind": "entity",
    "label": "Личная библиотека",
    "order": 1,
    "key": "state-0037"
  },
  "state-0336": {
    "kind": "entity",
    "label": "Диспуты и дебаты",
    "order": 1,
    "key": "state-0336"
  },
  "state-0349": {
    "kind": "entity",
    "label": "Научный трактат",
    "order": 1,
    "key": "state-0349"
  },
  "state-0183": {
    "kind": "entity",
    "label": "Генеалогическое древо",
    "order": 2,
    "key": "state-0183"
  },
  "state-0233": {
    "kind": "entity",
    "label": "Реставрация крипты",
    "order": 2,
    "key": "state-0233"
  },
  "state-0292": {
    "kind": "entity",
    "label": "Праздник Темпестов",
    "order": 2,
    "key": "state-0292"
  },
  "state-0022": {
    "kind": "entity",
    "label": "Жизнеописание императоров",
    "order": 2,
    "key": "state-0022"
  },
  "state-0238": {
    "kind": "entity",
    "label": "Лига Канонов",
    "order": 2,
    "key": "state-0238"
  },
  "state-0350": {
    "kind": "entity",
    "label": "Экзамены на дворянство",
    "order": 2,
    "key": "state-0350"
  },
  "state-0325": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0325"
  },
  "state-0083": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0083"
  },
  "state-0058": {
    "kind": "parameter",
    "label": "Управление",
    "group": "group-3",
    "order": 0,
    "default": 1,
    "min": 0,
    "max": 20,
    "key": "state-0058"
  },
  "state-0116": {
    "kind": "status",
    "label": "Адмирал",
    "key": "state-0116"
  },
  "state-0086": {
    "kind": "status",
    "label": "Недоволен Кредо",
    "key": "state-0086"
  },
  "state-0228": {
    "kind": "status",
    "label": "Недоволен Кредо",
    "key": "state-0228"
  },
  "state-0285": {
    "kind": "character",
    "label": "Агата",
    "group": "group-4",
    "default": 0,
    "category": "category-1",
    "categoryLabel": "Романтика",
    "categoryOrder": 2,
    "key": "state-0285"
  },
  "state-0136": {
    "kind": "status",
    "label": "Отчуждение",
    "key": "state-0136"
  },
  "state-0319": {
    "kind": "status",
    "label": "Отчуждение",
    "key": "state-0319"
  },
  "state-0072": {
    "kind": "status",
    "label": "Разбитые надежды",
    "key": "state-0072"
  },
  "state-0191": {
    "kind": "status",
    "label": "Разбитые надежды",
    "key": "state-0191"
  },
  "state-0152": {
    "kind": "status",
    "label": "Разбитые надежды",
    "key": "state-0152"
  },
  "state-0229": {
    "kind": "status",
    "label": "Отчуждение",
    "key": "state-0229"
  },
  "state-0190": {
    "kind": "status",
    "label": "Союзник",
    "key": "state-0190"
  },
  "state-0122": {
    "kind": "status",
    "label": "Союзник",
    "key": "state-0122"
  },
  "state-0029": {
    "kind": "status",
    "label": "Союзник",
    "key": "state-0029"
  },
  "state-0340": {
    "kind": "bilateral",
    "label": "Воля / Кровь",
    "group": "group-1",
    "order": 2,
    "default": 5,
    "min": 0,
    "max": 10,
    "sides": {
      "0": "Воля",
      "1": "Кровь"
    },
    "key": "state-0340"
  },
  "state-0177": {
    "kind": "status",
    "label": "Осажден",
    "key": "state-0177"
  },
  "state-0262": {
    "kind": "status",
    "label": "Арест",
    "key": "state-0262"
  },
  "state-0174": {
    "kind": "status",
    "label": "Арест",
    "key": "state-0174"
  },
  "state-0313": {
    "kind": "status",
    "label": "Ссылка",
    "key": "state-0313"
  },
  "state-0051": {
    "kind": "status",
    "label": "Заточение",
    "key": "state-0051"
  },
  "state-0240": {
    "kind": "bilateral",
    "label": "Прогресс / Традиции",
    "group": "group-6",
    "order": 1,
    "default": 4,
    "min": -10,
    "max": 10,
    "sides": {
      "0": "Прогресс",
      "1": "Традиции"
    },
    "key": "state-0240"
  },
  "state-0065": {
    "kind": "status",
    "label": "Влечение",
    "key": "state-0065"
  },
  "state-0365": {
    "kind": "status",
    "label": "Сюжетный итог 1",
    "key": "state-0365"
  },
  "state-0247": {
    "kind": "status",
    "label": "Мститель",
    "key": "state-0247"
  },
  "state-0168": {
    "kind": "status",
    "label": "Возлюбленная",
    "key": "state-0168"
  },
  "state-0356": {
    "kind": "character",
    "label": "Бернар",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0356"
  },
  "state-0199": {
    "kind": "estate",
    "label": "Простое сословие",
    "group": "group-8",
    "order": 6,
    "defaultPower": 19,
    "defaultLoyalty": 10,
    "min": 0,
    "max": 20,
    "powerComponents": [
      {
        "parameter": "state-0240",
        "side": 0
      },
      {
        "parameter": "state-0251",
        "side": 0
      }
    ],
    "creedChanges": [
      {
        "article": "state-0246",
        "values": {
          "1": -1,
          "2": 0,
          "3": 2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0115",
        "values": {
          "1": -1,
          "2": 0,
          "3": 1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0287",
        "values": {
          "1": -2,
          "2": 0,
          "3": 3,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0354",
        "values": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0267",
        "values": {
          "1": 0,
          "2": -1,
          "3": -1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0200",
        "values": {
          "1": -2,
          "2": -1,
          "3": 3,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      }
    ],
    "key": "state-0199"
  },
  "state-0128": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0128"
  },
  "state-0345": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0345"
  },
  "state-0012": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0012"
  },
  "state-0314": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0314"
  },
  "state-0269": {
    "kind": "status",
    "label": "Разрыв помолвки",
    "key": "state-0269"
  },
  "state-0165": {
    "kind": "status",
    "label": "Сюжетный итог 2",
    "key": "state-0165"
  },
  "state-0346": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0346"
  },
  "state-0274": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0274"
  },
  "state-0372": {
    "kind": "character",
    "label": "Камилла Монрог",
    "group": "group-4",
    "default": 0,
    "category": "category-1",
    "categoryLabel": "Романтика",
    "categoryOrder": 2,
    "key": "state-0372"
  },
  "state-0147": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0147"
  },
  "state-0320": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0320"
  },
  "state-0351": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0351"
  },
  "state-0145": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0145"
  },
  "state-0109": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0109"
  },
  "state-0353": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0353"
  },
  "state-0150": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0150"
  },
  "state-0278": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0278"
  },
  "state-0348": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0348"
  },
  "state-0316": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0316"
  },
  "state-0337": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0337"
  },
  "state-0060": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0060"
  },
  "state-0231": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0231"
  },
  "state-0014": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0014"
  },
  "state-0107": {
    "kind": "objective",
    "label": "Абсолют Элитаризма",
    "key": "state-0107"
  },
  "state-0090": {
    "kind": "objective",
    "label": "Абсолют Равенства",
    "key": "state-0090"
  },
  "state-0289": {
    "kind": "objective",
    "label": "Абсолют Права",
    "key": "state-0289"
  },
  "state-0103": {
    "kind": "objective",
    "label": "Абсолют Догмы",
    "key": "state-0103"
  },
  "state-0081": {
    "kind": "objective",
    "label": "Абсолют Прогресса",
    "key": "state-0081"
  },
  "state-0198": {
    "kind": "objective",
    "label": "Абсолют Традиций",
    "key": "state-0198"
  },
  "state-0196": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0196",
    "auxiliary": true
  },
  "state-0284": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0284",
    "auxiliary": true
  },
  "state-0261": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0261",
    "auxiliary": true
  },
  "state-0030": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0030",
    "auxiliary": true
  },
  "state-0347": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0347",
    "auxiliary": true
  },
  "state-0031": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0031",
    "auxiliary": true
  },
  "state-0170": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0170",
    "auxiliary": true
  },
  "state-0236": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0236",
    "auxiliary": true
  },
  "state-0368": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0368",
    "auxiliary": true
  },
  "state-0264": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0264",
    "auxiliary": true
  },
  "state-0009": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0009",
    "auxiliary": true
  },
  "state-0156": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0156",
    "auxiliary": true
  },
  "state-0011": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0011",
    "auxiliary": true
  },
  "state-0041": {
    "kind": "objective",
    "label": "Крепкая связь",
    "key": "state-0041"
  },
  "state-0007": {
    "kind": "objective",
    "label": "Достойный ученик",
    "key": "state-0007"
  },
  "state-0311": {
    "kind": "objective",
    "label": "Сохранить себя",
    "key": "state-0311"
  },
  "state-0023": {
    "kind": "objective",
    "label": "Патер фамилиас",
    "key": "state-0023"
  },
  "state-0290": {
    "kind": "objective",
    "label": "Надежда аркнов",
    "key": "state-0290"
  },
  "state-0206": {
    "kind": "objective",
    "label": "Надежда людей",
    "key": "state-0206"
  },
  "state-0275": {
    "kind": "objective",
    "label": "Орден Малой Ветви",
    "key": "state-0275"
  },
  "state-0322": {
    "kind": "objective",
    "label": "Любовь народа",
    "key": "state-0322"
  },
  "state-0096": {
    "kind": "objective",
    "label": "Клятва",
    "key": "state-0096"
  },
  "state-0113": {
    "kind": "objective",
    "label": "Экспедиционный флот",
    "key": "state-0113"
  },
  "state-0033": {
    "kind": "objective",
    "label": "Паломничество",
    "key": "state-0033"
  },
  "state-0131": {
    "kind": "objective",
    "label": "Любовь Старшего",
    "key": "state-0131"
  },
  "state-0342": {
    "kind": "objective",
    "label": "Забвение",
    "key": "state-0342"
  },
  "state-0232": {
    "kind": "objective",
    "label": "Наместник",
    "key": "state-0232"
  },
  "state-0166": {
    "kind": "objective",
    "label": "Права людей",
    "key": "state-0166"
  },
  "state-0334": {
    "kind": "objective",
    "label": "Аркнийские привилегии",
    "key": "state-0334"
  },
  "state-0288": {
    "kind": "objective",
    "label": "Закон Младшего",
    "key": "state-0288"
  },
  "state-0317": {
    "kind": "objective",
    "label": "Развал Совета",
    "key": "state-0317"
  },
  "state-0307": {
    "kind": "objective",
    "label": "Крушение Новой Веры",
    "key": "state-0307"
  },
  "state-0270": {
    "kind": "objective",
    "label": "Кредо Джериана",
    "key": "state-0270"
  },
  "state-0327": {
    "kind": "objective",
    "label": "Кредо Монрога",
    "key": "state-0327"
  },
  "state-0093": {
    "kind": "objective",
    "label": "Пустое кресло",
    "key": "state-0093"
  },
  "state-0303": {
    "kind": "objective",
    "label": "Диктатура Монрога",
    "key": "state-0303"
  },
  "state-0207": {
    "kind": "objective",
    "label": "Предстоятель",
    "key": "state-0207"
  },
  "state-0366": {
    "kind": "objective",
    "label": "Признание Новой Веры",
    "key": "state-0366"
  },
  "state-0282": {
    "kind": "objective",
    "label": "Глас Божий",
    "key": "state-0282"
  },
  "state-0061": {
    "kind": "objective",
    "label": "Богоборец",
    "key": "state-0061"
  },
  "state-0040": {
    "kind": "objective",
    "label": "Тирания людей",
    "key": "state-0040"
  },
  "state-0204": {
    "kind": "objective",
    "label": "Тирания аркнов",
    "key": "state-0204"
  },
  "state-0158": {
    "kind": "objective",
    "label": "Тирания Темпестов",
    "key": "state-0158"
  },
  "state-0242": {
    "kind": "objective",
    "label": "Любимый ученик",
    "key": "state-0242"
  },
  "state-0361": {
    "kind": "objective",
    "label": "Лишенный союзников",
    "key": "state-0361"
  },
  "state-0032": {
    "kind": "objective",
    "label": "Придите и узрите",
    "key": "state-0032"
  },
  "state-0075": {
    "kind": "objective",
    "label": "Разгром Восстания",
    "key": "state-0075"
  },
  "state-0008": {
    "kind": "objective",
    "label": "Отверженный",
    "key": "state-0008"
  },
  "state-0151": {
    "kind": "objective",
    "label": "Миротворец",
    "key": "state-0151"
  },
  "state-0078": {
    "kind": "objective",
    "label": "Отступление",
    "key": "state-0078"
  },
  "state-0212": {
    "kind": "objective",
    "label": "Слуга Крови",
    "key": "state-0212"
  },
  "state-0067": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0067",
    "auxiliary": true
  },
  "state-0181": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0181",
    "auxiliary": true
  },
  "state-0133": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0133",
    "auxiliary": true
  },
  "state-0144": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0144",
    "auxiliary": true
  },
  "state-0237": {
    "kind": "status",
    "label": "Избранница",
    "key": "state-0237"
  },
  "state-0273": {
    "kind": "status",
    "label": "Союзник",
    "key": "state-0273"
  },
  "state-0146": {
    "kind": "status",
    "label": "Спутница",
    "key": "state-0146"
  },
  "state-0046": {
    "kind": "status",
    "label": "Заточение",
    "key": "state-0046"
  },
  "state-0097": {
    "kind": "status",
    "label": "Связь",
    "key": "state-0097"
  },
  "state-0125": {
    "kind": "status",
    "label": "Духовник",
    "key": "state-0125"
  },
  "state-0124": {
    "kind": "status",
    "label": "Духовник ",
    "key": "state-0124"
  },
  "state-0054": {
    "kind": "status",
    "label": "Смятение",
    "key": "state-0054"
  },
  "state-0139": {
    "kind": "status",
    "label": "Смятение",
    "key": "state-0139"
  },
  "state-0056": {
    "kind": "status",
    "label": "Заговор",
    "key": "state-0056"
  },
  "state-0073": {
    "kind": "status",
    "label": "Заговор",
    "key": "state-0073"
  },
  "state-0221": {
    "kind": "parameter",
    "label": "Покорность Совета",
    "group": "group-5",
    "order": 6,
    "default": 5,
    "min": 0,
    "max": 10,
    "key": "state-0221"
  },
  "state-0148": {
    "kind": "status",
    "label": "Осужден",
    "key": "state-0148"
  },
  "state-0155": {
    "kind": "status",
    "label": "Осужден",
    "key": "state-0155"
  },
  "state-0026": {
    "kind": "status",
    "label": "Придворный",
    "key": "state-0026"
  },
  "state-0324": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0324"
  },
  "state-0256": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0256"
  },
  "state-0184": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0184"
  },
  "state-0277": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0277"
  },
  "state-0105": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0105"
  },
  "state-0194": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0194"
  },
  "state-0117": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0117"
  },
  "state-0069": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0069"
  },
  "state-0132": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0132"
  },
  "state-0265": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0265"
  },
  "state-0039": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0039"
  },
  "state-0084": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0084"
  },
  "state-0094": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0094"
  },
  "state-0243": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0243"
  },
  "state-0087": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0087"
  },
  "state-0035": {
    "kind": "status",
    "label": "Мертв",
    "key": "state-0035"
  },
  "state-0179": {
    "kind": "status",
    "label": "Мертва",
    "key": "state-0179"
  },
  "state-0255": {
    "kind": "estate",
    "label": "Достойные аркны",
    "group": "group-8",
    "order": 2,
    "defaultPower": 13,
    "defaultLoyalty": 12,
    "min": 0,
    "max": 20,
    "powerComponents": [
      {
        "parameter": "state-0357",
        "side": 0
      },
      {
        "parameter": "state-0251",
        "side": 1
      }
    ],
    "creedChanges": [
      {
        "article": "state-0246",
        "values": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0115",
        "values": {
          "1": 1,
          "2": 2,
          "3": -1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0287",
        "values": {
          "1": 0,
          "2": 0,
          "3": -2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0354",
        "values": {
          "1": 0,
          "2": 1,
          "3": 1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0267",
        "values": {
          "1": 0,
          "2": 1,
          "3": 1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0200",
        "values": {
          "1": 2,
          "2": 2,
          "3": -2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      }
    ],
    "key": "state-0255"
  },
  "state-0321": {
    "kind": "status",
    "label": "Разжалован",
    "key": "state-0321"
  },
  "state-0047": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0047"
  },
  "state-0239": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0239"
  },
  "state-0208": {
    "kind": "character",
    "label": "Дион Темпест",
    "group": "group-4",
    "default": 0,
    "category": "category-3",
    "categoryLabel": "Предки",
    "categoryOrder": 3,
    "key": "state-0208"
  },
  "state-0123": {
    "kind": "parameter",
    "label": "Дипломатия",
    "group": "group-3",
    "order": 0,
    "default": 1,
    "min": 0,
    "max": 20,
    "key": "state-0123"
  },
  "state-0163": {
    "kind": "status",
    "label": "Недоволен Кредо",
    "key": "state-0163"
  },
  "state-0235": {
    "kind": "status",
    "label": "Исчез",
    "key": "state-0235"
  },
  "state-0010": {
    "kind": "status",
    "label": "Разочарование",
    "key": "state-0010"
  },
  "state-0248": {
    "kind": "status",
    "label": "Лишен дворянства",
    "key": "state-0248"
  },
  "state-0254": {
    "kind": "status",
    "label": "Лишена дворянства",
    "key": "state-0254"
  },
  "state-0129": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0129"
  },
  "state-0042": {
    "kind": "status",
    "label": "Герцог Гермии",
    "key": "state-0042"
  },
  "state-0214": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0214"
  },
  "state-0283": {
    "kind": "status",
    "label": "Хозяйка",
    "key": "state-0283"
  },
  "state-0252": {
    "kind": "character",
    "label": "Эгерий Монрог",
    "group": "group-5",
    "default": 0,
    "category": "category-4",
    "categoryLabel": "Совет",
    "categoryOrder": 99,
    "key": "state-0252"
  },
  "state-0225": {
    "kind": "character",
    "label": "Гюнтер эль Круа",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0225"
  },
  "state-0005": {
    "kind": "character",
    "label": "Эмиль",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0005"
  },
  "state-0213": {
    "kind": "status",
    "label": "Императрица",
    "key": "state-0213"
  },
  "state-0266": {
    "kind": "status",
    "label": "Попытка к бегству",
    "key": "state-0266"
  },
  "state-0140": {
    "kind": "status",
    "label": "Казнен",
    "key": "state-0140"
  },
  "state-0302": {
    "kind": "status",
    "label": "Отчуждение",
    "key": "state-0302"
  },
  "state-0339": {
    "kind": "status",
    "label": "Ссылка",
    "key": "state-0339"
  },
  "state-0205": {
    "kind": "status",
    "label": "Изгнание",
    "key": "state-0205"
  },
  "state-0192": {
    "kind": "status",
    "label": "Ссылка",
    "key": "state-0192"
  },
  "state-0241": {
    "kind": "status",
    "label": "Урок свободы",
    "key": "state-0241"
  },
  "state-0294": {
    "kind": "character",
    "label": "Фердинанд эль Бер",
    "group": "group-4",
    "default": 2,
    "category": "category-5",
    "categoryLabel": "Семья",
    "categoryOrder": 1,
    "key": "state-0294"
  },
  "state-0267": {
    "kind": "article",
    "label": "О Доме Темпест",
    "group": "group-7",
    "order": 5,
    "values": {
      "0": "Решение еще не принято.",
      "1": "Наследуемая власть Темпестов",
      "2": "Великий дом Темпест",
      "3": "Отречение Темпестов"
    },
    "key": "state-0267"
  },
  "state-0200": {
    "kind": "article",
    "label": "О Великом Кворуме",
    "group": "group-7",
    "order": 6,
    "values": {
      "0": "Решение не принято.",
      "1": "Аркнийский Кворум",
      "2": "Дворянский Кворум",
      "3": "Всеобщий Кворум"
    },
    "key": "state-0200"
  },
  "state-0193": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0193"
  },
  "state-0246": {
    "kind": "article",
    "label": "О вере",
    "group": "group-7",
    "order": 1,
    "values": {
      "0": "Решение еще не принято.",
      "1": "Догмат Старой Веры",
      "2": "Равенство двух Церквей",
      "3": "Свобода вероисповедания"
    },
    "key": "state-0246"
  },
  "state-0064": {
    "kind": "character",
    "label": "Флавий Темпест",
    "group": "group-4",
    "default": 1,
    "category": "category-5",
    "categoryLabel": "Семья",
    "categoryOrder": 1,
    "key": "state-0064"
  },
  "state-0077": {
    "kind": "status",
    "label": "Либертен",
    "key": "state-0077"
  },
  "state-0331": {
    "kind": "status",
    "label": "Либертен",
    "key": "state-0331"
  },
  "state-0296": {
    "kind": "status",
    "label": "Прощен",
    "key": "state-0296"
  },
  "state-0344": {
    "kind": "status",
    "label": "Прощена",
    "key": "state-0344"
  },
  "state-0357": {
    "kind": "bilateral",
    "label": "Право / Догма",
    "group": "group-6",
    "order": 3,
    "default": 4,
    "min": -10,
    "max": 10,
    "sides": {
      "0": "Право",
      "1": "Догма"
    },
    "key": "state-0357"
  },
  "state-0354": {
    "kind": "article",
    "label": "О форме правления",
    "group": "group-7",
    "order": 4,
    "values": {
      "0": "Решение еще не принято.",
      "1": "Абсолютная монархия",
      "2": "Ограниченная монархия",
      "3": "Республика"
    },
    "key": "state-0354"
  },
  "state-0210": {
    "kind": "status",
    "label": "Свободен",
    "key": "state-0210"
  },
  "state-0215": {
    "kind": "status",
    "label": "Свободна",
    "key": "state-0215"
  },
  "state-0328": {
    "kind": "status",
    "label": "Привязанность",
    "key": "state-0328"
  },
  "state-0186": {
    "kind": "status",
    "label": "Полководец",
    "key": "state-0186"
  },
  "state-0137": {
    "kind": "character",
    "label": "Герт Аркрайт",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0137"
  },
  "state-0298": {
    "kind": "character",
    "label": "Гней Метелл",
    "group": "group-5",
    "default": 1,
    "category": "category-4",
    "categoryLabel": "Совет",
    "categoryOrder": 99,
    "key": "state-0298"
  },
  "state-0052": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0052"
  },
  "state-0272": {
    "kind": "status",
    "label": "Наместник",
    "key": "state-0272"
  },
  "state-0250": {
    "kind": "status",
    "label": "Благодарность",
    "key": "state-0250"
  },
  "state-0169": {
    "kind": "status",
    "label": "Благодарность",
    "key": "state-0169"
  },
  "state-0306": {
    "kind": "status",
    "label": "Благодарность",
    "key": "state-0306"
  },
  "state-0245": {
    "kind": "estate",
    "label": "Великие дома",
    "group": "group-8",
    "order": 1,
    "defaultPower": 16,
    "defaultLoyalty": 12,
    "min": 0,
    "max": 20,
    "powerComponents": [
      {
        "parameter": "state-0240",
        "side": 1
      },
      {
        "parameter": "state-0251",
        "side": 1
      }
    ],
    "creedChanges": [
      {
        "article": "state-0246",
        "values": {
          "1": 1,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0115",
        "values": {
          "1": 2,
          "2": 0,
          "3": -2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0287",
        "values": {
          "1": 3,
          "2": -1,
          "3": -3,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0354",
        "values": {
          "1": -1,
          "2": 2,
          "3": 0,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0267",
        "values": {
          "1": -1,
          "2": 1,
          "3": 2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0200",
        "values": {
          "1": 2,
          "2": -1,
          "3": -2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      }
    ],
    "key": "state-0245"
  },
  "state-0280": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0280"
  },
  "state-0004": {
    "kind": "status",
    "label": "Опека",
    "key": "state-0004"
  },
  "state-0082": {
    "kind": "status",
    "label": "Опека",
    "key": "state-0082"
  },
  "state-0172": {
    "kind": "character",
    "label": "Гай Темпест",
    "group": "group-4",
    "default": 2,
    "category": "category-5",
    "categoryLabel": "Семья",
    "categoryOrder": 1,
    "key": "state-0172"
  },
  "state-0309": {
    "kind": "status",
    "label": "Счастье",
    "key": "state-0309"
  },
  "state-0333": {
    "kind": "status",
    "label": "Мать",
    "key": "state-0333"
  },
  "state-0063": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0063"
  },
  "state-0187": {
    "kind": "status",
    "label": "Аркнийский герой",
    "key": "state-0187"
  },
  "state-0120": {
    "kind": "estate",
    "label": "Дворянство людей",
    "group": "group-8",
    "order": 5,
    "defaultPower": 17,
    "defaultLoyalty": 10,
    "min": 0,
    "max": 20,
    "powerComponents": [
      {
        "parameter": "state-0240",
        "side": 0
      },
      {
        "parameter": "state-0357",
        "side": 0
      }
    ],
    "creedChanges": [
      {
        "article": "state-0246",
        "values": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0115",
        "values": {
          "1": -1,
          "2": 0,
          "3": 2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0287",
        "values": {
          "1": -3,
          "2": 1,
          "3": 0,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0354",
        "values": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0267",
        "values": {
          "1": 0,
          "2": 0,
          "3": -1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0200",
        "values": {
          "1": -2,
          "2": 2,
          "3": -1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      }
    ],
    "key": "state-0120"
  },
  "state-0074": {
    "kind": "bilateral",
    "label": "Разум / Страсть",
    "group": "group-1",
    "order": 1,
    "default": 5,
    "min": 0,
    "max": 10,
    "sides": {
      "0": "Разум",
      "1": "Страсть"
    },
    "key": "state-0074"
  },
  "state-0332": {
    "kind": "status",
    "label": "Неведение",
    "key": "state-0332"
  },
  "state-0180": {
    "kind": "status",
    "label": "Неведение",
    "key": "state-0180"
  },
  "state-0253": {
    "kind": "status",
    "label": "Осужден Инквизицией",
    "key": "state-0253"
  },
  "state-0175": {
    "kind": "parameter",
    "label": "Мятежность",
    "group": "group-6",
    "order": 4,
    "default": 1,
    "min": 0,
    "max": 10,
    "key": "state-0175"
  },
  "state-0098": {
    "kind": "character",
    "label": "Юлия Темпест",
    "group": "group-4",
    "default": 0,
    "category": "category-3",
    "categoryLabel": "Предки",
    "categoryOrder": 3,
    "key": "state-0098"
  },
  "state-0352": {
    "kind": "character",
    "label": "Младший",
    "group": "group-4",
    "default": 0,
    "category": "category-3",
    "categoryLabel": "Предки",
    "categoryOrder": 3,
    "key": "state-0352"
  },
  "state-0176": {
    "kind": "character",
    "label": "Юний Диамант",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0176"
  },
  "state-0048": {
    "kind": "status",
    "label": "Оправдан",
    "key": "state-0048"
  },
  "state-0089": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0089"
  },
  "state-0036": {
    "kind": "character",
    "label": "Корнелий Темпест",
    "group": "group-4",
    "default": 1,
    "category": "category-5",
    "categoryLabel": "Семья",
    "categoryOrder": 1,
    "key": "state-0036"
  },
  "state-0367": {
    "kind": "status",
    "label": "Лидер людей",
    "key": "state-0367"
  },
  "state-0211": {
    "kind": "status",
    "label": "Легат",
    "key": "state-0211"
  },
  "state-0099": {
    "kind": "status",
    "label": "Урок свободы",
    "key": "state-0099"
  },
  "state-0091": {
    "kind": "status",
    "label": "Любовь",
    "key": "state-0091"
  },
  "state-0217": {
    "kind": "character",
    "label": "Луций Диамант",
    "group": "group-5",
    "default": 0,
    "category": "category-4",
    "categoryLabel": "Совет",
    "categoryOrder": 99,
    "key": "state-0217"
  },
  "state-0291": {
    "kind": "character",
    "label": "Лукреция Оргриф",
    "group": "group-4",
    "default": 0,
    "category": "category-1",
    "categoryLabel": "Романтика",
    "categoryOrder": 2,
    "key": "state-0291"
  },
  "state-0257": {
    "kind": "character",
    "label": "Патриарх Лука",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0257"
  },
  "state-0220": {
    "kind": "status",
    "label": "Маг",
    "key": "state-0220"
  },
  "state-0112": {
    "kind": "character",
    "label": "Марций Миланид",
    "group": "group-5",
    "default": 0,
    "category": "category-4",
    "categoryLabel": "Совет",
    "categoryOrder": 99,
    "key": "state-0112"
  },
  "state-0224": {
    "kind": "character",
    "label": "Марта",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0224"
  },
  "state-0341": {
    "kind": "status",
    "label": "Магистр",
    "key": "state-0341"
  },
  "state-0044": {
    "kind": "status",
    "label": "Наставница",
    "key": "state-0044"
  },
  "state-0216": {
    "kind": "status",
    "label": "Чудовище",
    "key": "state-0216"
  },
  "state-0003": {
    "kind": "estate",
    "label": "Клир нововеров",
    "group": "group-8",
    "order": 4,
    "defaultPower": 12,
    "defaultLoyalty": 11,
    "min": 0,
    "max": 20,
    "powerComponents": [
      {
        "parameter": "state-0251",
        "side": 0
      },
      {
        "parameter": "state-0357",
        "side": 1
      }
    ],
    "creedChanges": [
      {
        "article": "state-0246",
        "values": {
          "1": -2,
          "2": 3,
          "3": -1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0115",
        "values": {
          "1": 0,
          "2": 0,
          "3": 1,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0287",
        "values": {
          "1": -1,
          "2": 0,
          "3": 2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0354",
        "values": {
          "1": 0,
          "2": 0,
          "3": 2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0267",
        "values": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0200",
        "values": {
          "1": -2,
          "2": 0,
          "3": 2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      }
    ],
    "key": "state-0003"
  },
  "state-0034": {
    "kind": "status",
    "label": "Дворянин мантии",
    "key": "state-0034"
  },
  "state-0161": {
    "kind": "status",
    "label": "Фаворит",
    "key": "state-0161"
  },
  "state-0258": {
    "kind": "status",
    "label": "Забвение",
    "key": "state-0258"
  },
  "state-0106": {
    "kind": "status",
    "label": "Забвение",
    "key": "state-0106"
  },
  "state-0182": {
    "kind": "status",
    "label": "Забвение",
    "key": "state-0182"
  },
  "state-0276": {
    "kind": "status",
    "label": "Забвение",
    "key": "state-0276"
  },
  "state-0219": {
    "kind": "status",
    "label": "Оскорблен",
    "key": "state-0219"
  },
  "state-0218": {
    "kind": "estate",
    "label": "Клир староверов",
    "group": "group-8",
    "order": 3,
    "defaultPower": 15,
    "defaultLoyalty": 12,
    "min": 0,
    "max": 20,
    "powerComponents": [
      {
        "parameter": "state-0357",
        "side": 1
      },
      {
        "parameter": "state-0240",
        "side": 1
      }
    ],
    "creedChanges": [
      {
        "article": "state-0246",
        "values": {
          "1": 3,
          "2": -2,
          "3": -3,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0115",
        "values": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0287",
        "values": {
          "1": 0,
          "2": 1,
          "3": -2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0354",
        "values": {
          "1": 2,
          "2": -1,
          "3": -2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0267",
        "values": {
          "1": 1,
          "2": -1,
          "3": -2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      },
      {
        "article": "state-0200",
        "values": {
          "1": 0,
          "2": 0,
          "3": -2,
          "4": 0,
          "5": 0,
          "6": 0,
          "7": 0,
          "8": 0,
          "9": 0,
          "10": 0
        }
      }
    ],
    "key": "state-0218"
  },
  "state-0359": {
    "kind": "character",
    "label": "Старший",
    "group": "group-4",
    "default": 0,
    "category": "category-3",
    "categoryLabel": "Предки",
    "categoryOrder": 3,
    "key": "state-0359"
  },
  "state-0053": {
    "kind": "status",
    "label": "Отверженный",
    "key": "state-0053"
  },
  "state-0070": {
    "kind": "character",
    "label": "Овидий Лукулл",
    "group": "group-5",
    "default": 0,
    "category": "category-4",
    "categoryLabel": "Совет",
    "categoryOrder": 99,
    "key": "state-0070"
  },
  "state-0138": {
    "kind": "status",
    "label": "Часть Реки",
    "key": "state-0138"
  },
  "state-0230": {
    "kind": "bilateral",
    "label": "Любовь / Закон",
    "group": "group-1",
    "order": 3,
    "default": 5,
    "min": 0,
    "max": 10,
    "sides": {
      "0": "Любовь",
      "1": "Закон"
    },
    "key": "state-0230"
  },
  "state-0360": {
    "kind": "ending",
    "label": "Финал: Забвение",
    "order": 0,
    "key": "state-0360"
  },
  "state-0055": {
    "kind": "ending",
    "label": "Финал: Империя Старшего",
    "order": 0,
    "key": "state-0055"
  },
  "state-0059": {
    "kind": "ending",
    "label": "Финал: Истинный Император",
    "order": 0,
    "key": "state-0059"
  },
  "state-0286": {
    "kind": "ending",
    "label": "Финал: Крах",
    "order": 0,
    "key": "state-0286"
  },
  "state-0268": {
    "kind": "ending",
    "label": "Финал: Дом",
    "order": 0,
    "key": "state-0268"
  },
  "state-0195": {
    "kind": "ending",
    "label": "Финал: Пустота",
    "order": 0,
    "key": "state-0195"
  },
  "state-0335": {
    "kind": "ending",
    "label": "Финал: Наконечник копья",
    "order": 0,
    "key": "state-0335"
  },
  "state-0371": {
    "kind": "ending",
    "label": "Финал: Пустота",
    "order": 0,
    "key": "state-0371"
  },
  "state-0028": {
    "kind": "ending",
    "label": "Финал: Подножье",
    "order": 0,
    "key": "state-0028"
  },
  "state-0171": {
    "kind": "ending",
    "label": "Финал: Вершина",
    "order": 0,
    "key": "state-0171"
  },
  "state-0263": {
    "kind": "ending",
    "label": "Финал: К новым берегам",
    "order": 0,
    "key": "state-0263"
  },
  "state-0185": {
    "kind": "ending",
    "label": "Финал: Истинный Темпест ",
    "order": 0,
    "key": "state-0185"
  },
  "state-0358": {
    "kind": "status",
    "label": "Власть",
    "key": "state-0358"
  },
  "state-0102": {
    "kind": "status",
    "label": "Власть в Совете",
    "key": "state-0102"
  },
  "state-0355": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0355"
  },
  "state-0043": {
    "kind": "status",
    "label": "Могущество",
    "key": "state-0043"
  },
  "state-0251": {
    "kind": "bilateral",
    "label": "Равенство / Элитаризм",
    "group": "group-6",
    "order": 2,
    "default": 4,
    "min": -10,
    "max": 10,
    "sides": {
      "0": "Равенство",
      "1": "Элитаризм"
    },
    "key": "state-0251"
  },
  "state-0027": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0027"
  },
  "state-0143": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0143"
  },
  "state-0118": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0118"
  },
  "state-0330": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0330"
  },
  "state-0013": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0013"
  },
  "state-0369": {
    "kind": "status",
    "label": "Пророк",
    "key": "state-0369"
  },
  "state-0305": {
    "kind": "status",
    "label": "Распутница",
    "key": "state-0305"
  },
  "state-0227": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0227"
  },
  "state-0066": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0066"
  },
  "state-0373": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0373"
  },
  "state-0002": {
    "kind": "status",
    "label": "Освобожден",
    "key": "state-0002"
  },
  "state-0114": {
    "kind": "status",
    "label": "Отставка",
    "key": "state-0114"
  },
  "state-0281": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0281"
  },
  "state-0259": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0259"
  },
  "state-0310": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0310"
  },
  "state-0318": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0318"
  },
  "state-0300": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0300"
  },
  "state-0323": {
    "kind": "status",
    "label": "Изгнание",
    "key": "state-0323"
  },
  "state-0223": {
    "kind": "status",
    "label": "Разрыв",
    "key": "state-0223"
  },
  "state-0049": {
    "kind": "parameter",
    "label": "Рассудок",
    "group": "group-2",
    "order": 0,
    "default": 5,
    "min": 0,
    "max": 5,
    "key": "state-0049"
  },
  "state-0017": {
    "kind": "status",
    "label": "Спасен",
    "key": "state-0017"
  },
  "state-0121": {
    "kind": "status",
    "label": "Спасена",
    "key": "state-0121"
  },
  "state-0062": {
    "kind": "parameter",
    "label": "Науки",
    "group": "group-3",
    "order": 0,
    "default": 1,
    "min": 0,
    "max": 20,
    "key": "state-0062"
  },
  "state-0115": {
    "kind": "article",
    "label": "О правах аркнов",
    "group": "group-7",
    "order": 2,
    "values": {
      "0": "Решение еще не принято.",
      "1": "Неподсудность аркнов",
      "2": "Аркнийские привилегии",
      "3": "Равенство перед законом"
    },
    "key": "state-0115"
  },
  "state-0111": {
    "kind": "character",
    "label": "Элий Сеян",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0111"
  },
  "state-0203": {
    "kind": "ending",
    "label": "Финал: Утверждение Диктатуры",
    "order": 0,
    "key": "state-0203"
  },
  "state-0024": {
    "kind": "ending",
    "label": "Финал: Отречение",
    "order": 0,
    "key": "state-0024"
  },
  "state-0088": {
    "kind": "ending",
    "label": "Финал: Утверждение Кредо",
    "order": 0,
    "key": "state-0088"
  },
  "state-0297": {
    "kind": "ending",
    "label": "Финал: Узурпатор",
    "order": 0,
    "key": "state-0297"
  },
  "state-0127": {
    "kind": "ending",
    "label": "Финал: Утверждение Протектората",
    "order": 0,
    "key": "state-0127"
  },
  "state-0021": {
    "kind": "status",
    "label": "Приговорен тобой",
    "key": "state-0021"
  },
  "state-0244": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0244"
  },
  "state-0057": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0057"
  },
  "state-0045": {
    "kind": "character",
    "label": "Сервилия Темпест",
    "group": "group-4",
    "default": 2,
    "category": "category-5",
    "categoryLabel": "Семья",
    "categoryOrder": 1,
    "key": "state-0045"
  },
  "state-0260": {
    "kind": "status",
    "label": "Позор",
    "key": "state-0260"
  },
  "state-0343": {
    "kind": "status",
    "label": "Раба Крови",
    "key": "state-0343"
  },
  "state-0301": {
    "kind": "status",
    "label": "Родственная душа",
    "key": "state-0301"
  },
  "state-0104": {
    "kind": "status",
    "label": "Любовница",
    "key": "state-0104"
  },
  "state-0095": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0095"
  },
  "state-0279": {
    "kind": "character",
    "label": "Стюарт Кондорсе",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0279"
  },
  "state-0312": {
    "kind": "status",
    "label": "Во главе Легиона",
    "key": "state-0312"
  },
  "state-0142": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0142",
    "auxiliary": true
  },
  "state-0119": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0119",
    "auxiliary": true
  },
  "state-0134": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0134",
    "auxiliary": true
  },
  "state-0226": {
    "kind": "parameter",
    "label": "Наследие Темпестов",
    "group": "group-2",
    "order": 0,
    "default": 0,
    "min": 0,
    "max": 30,
    "key": "state-0226"
  },
  "state-0157": {
    "kind": "parameter",
    "label": "Сила Темпестов",
    "group": "group-8",
    "order": 5,
    "default": 15,
    "min": 0,
    "max": 30,
    "key": "state-0157",
    "role": "tempest-power"
  },
  "state-0100": {
    "kind": "status",
    "label": "Темпест",
    "key": "state-0100"
  },
  "state-0076": {
    "kind": "status",
    "label": "Голос Крови",
    "key": "state-0076"
  },
  "state-0364": {
    "kind": "character",
    "label": "Теренций Оргриф",
    "group": "group-5",
    "default": 1,
    "category": "category-4",
    "categoryLabel": "Совет",
    "categoryOrder": 99,
    "key": "state-0364"
  },
  "state-0101": {
    "kind": "status",
    "label": "Помолвка",
    "key": "state-0101"
  },
  "state-0287": {
    "kind": "article",
    "label": "О правах людей",
    "group": "group-7",
    "order": 3,
    "values": {
      "0": "Решение еще не принято.",
      "1": "Запрет людского дворянства",
      "2": "Сохранение людского дворянства",
      "3": "Право на власть всех сословий"
    },
    "key": "state-0287"
  },
  "state-0080": {
    "kind": "character",
    "label": "Тарквиний Миланид",
    "group": "group-4",
    "default": 0,
    "category": "category-2",
    "categoryLabel": "Фигуры",
    "categoryOrder": 4,
    "key": "state-0080"
  },
  "state-0234": {
    "kind": "status",
    "label": "Сломлен",
    "key": "state-0234"
  },
  "state-0025": {
    "kind": "status",
    "label": "Сломлена",
    "key": "state-0025"
  },
  "state-0293": {
    "kind": "parameter",
    "label": "Баланс сил",
    "group": "group-8",
    "order": 0,
    "default": 0,
    "min": 0,
    "max": 99,
    "key": "state-0293",
    "role": "estate-balance-after-creed"
  },
  "state-0130": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0130"
  },
  "state-0159": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0159"
  },
  "state-0154": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0154",
    "auxiliary": true
  },
  "state-0079": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0079",
    "auxiliary": true
  },
  "state-0370": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0370",
    "auxiliary": true
  },
  "state-0018": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0018",
    "auxiliary": true
  },
  "state-0189": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0189",
    "auxiliary": true
  },
  "state-0209": {
    "kind": "objective",
    "label": "Вспомогательное условие",
    "key": "state-0209",
    "auxiliary": true
  },
  "state-0326": {
    "kind": "status",
    "label": "Неприкасаемый",
    "key": "state-0326"
  },
  "state-0201": {
    "kind": "status",
    "label": "Неприкасаемая",
    "key": "state-0201"
  },
  "state-0085": {
    "kind": "character",
    "label": "Уттер Темпест",
    "group": "group-4",
    "default": 2,
    "category": "category-5",
    "categoryLabel": "Семья",
    "categoryOrder": 1,
    "key": "state-0085"
  },
  "state-0038": {
    "kind": "statusGroup",
    "label": "Сюжетная ветка",
    "key": "state-0038"
  },
  "state-0188": {
    "kind": "status",
    "label": "Наместник",
    "key": "state-0188"
  },
  "state-0329": {
    "kind": "status",
    "label": "Жена",
    "key": "state-0329"
  },
  "state-0050": {
    "kind": "status",
    "label": "Слово Новой Веры",
    "key": "state-0050"
  },
  "state-0015": {
    "kind": "status",
    "label": "Слово Старой Веры",
    "key": "state-0015"
  }
};
