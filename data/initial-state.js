/**
 * Начальные значения и правила отображения состояния прохождения.
 */
"use strict";
globalThis.PLANNER_METADATA = {
  "defaults": {
    "parameters": {
      "state-0058": 1,
      "state-0221": 5,
      "state-0123": 1,
      "state-0175": 1,
      "state-0049": 5,
      "state-0062": 1,
      "state-0226": 0,
      "state-0157": 15,
      "state-0293": 0
    },
    "bilateral": {
      "state-0340": 5,
      "state-0240": 4,
      "state-0357": 4,
      "state-0074": 5,
      "state-0230": 5,
      "state-0251": 4
    },
    "relations": {
      "state-0285": 0,
      "state-0356": 0,
      "state-0372": 0,
      "state-0208": 0,
      "state-0252": 0,
      "state-0225": 0,
      "state-0005": 0,
      "state-0294": 2,
      "state-0064": 1,
      "state-0137": 0,
      "state-0298": 1,
      "state-0172": 2,
      "state-0098": 0,
      "state-0352": 0,
      "state-0176": 0,
      "state-0036": 1,
      "state-0217": 0,
      "state-0291": 0,
      "state-0257": 0,
      "state-0112": 0,
      "state-0224": 0,
      "state-0359": 0,
      "state-0070": 0,
      "state-0111": 0,
      "state-0045": 2,
      "state-0279": 0,
      "state-0364": 1,
      "state-0080": 0,
      "state-0085": 2
    },
    "estates": {
      "state-0199": 10,
      "state-0255": 12,
      "state-0245": 12,
      "state-0120": 10,
      "state-0003": 11,
      "state-0218": 12
    },
    "objectives": {
      "state-0107": false,
      "state-0090": false,
      "state-0289": false,
      "state-0103": false,
      "state-0081": false,
      "state-0198": false,
      "state-0196": false,
      "state-0284": false,
      "state-0261": false,
      "state-0030": false,
      "state-0347": false,
      "state-0031": false,
      "state-0170": false,
      "state-0236": false,
      "state-0368": false,
      "state-0264": false,
      "state-0009": false,
      "state-0156": false,
      "state-0011": false,
      "state-0041": false,
      "state-0007": false,
      "state-0311": false,
      "state-0023": false,
      "state-0290": false,
      "state-0206": false,
      "state-0275": false,
      "state-0322": false,
      "state-0096": false,
      "state-0113": false,
      "state-0033": false,
      "state-0131": false,
      "state-0342": false,
      "state-0232": false,
      "state-0166": false,
      "state-0334": false,
      "state-0288": false,
      "state-0317": false,
      "state-0307": false,
      "state-0270": false,
      "state-0327": false,
      "state-0093": false,
      "state-0303": false,
      "state-0207": false,
      "state-0366": false,
      "state-0282": false,
      "state-0061": false,
      "state-0040": false,
      "state-0204": false,
      "state-0158": false,
      "state-0242": false,
      "state-0361": false,
      "state-0032": false,
      "state-0075": false,
      "state-0008": false,
      "state-0151": false,
      "state-0078": false,
      "state-0212": false,
      "state-0067": false,
      "state-0181": false,
      "state-0133": false,
      "state-0144": false,
      "state-0142": false,
      "state-0119": false,
      "state-0134": false,
      "state-0154": false,
      "state-0079": false,
      "state-0370": false,
      "state-0018": false,
      "state-0189": false,
      "state-0209": false
    },
    "endings": {
      "state-0360": false,
      "state-0055": false,
      "state-0059": false,
      "state-0286": false,
      "state-0268": false,
      "state-0195": false,
      "state-0335": false,
      "state-0371": false,
      "state-0028": false,
      "state-0171": false,
      "state-0263": false,
      "state-0185": false,
      "state-0203": false,
      "state-0024": false,
      "state-0088": false,
      "state-0297": false,
      "state-0127": false
    },
    "articles": {
      "state-0267": 0,
      "state-0200": 0,
      "state-0246": 0,
      "state-0354": 0,
      "state-0115": 0,
      "state-0287": 0
    },
    "statuses": {
      "state-0285": {},
      "state-0356": {},
      "state-0372": {},
      "state-0208": {},
      "state-0252": {},
      "state-0225": {},
      "state-0005": {},
      "state-0294": {},
      "state-0064": {},
      "state-0137": {},
      "state-0298": {},
      "state-0172": {},
      "state-0098": {},
      "state-0352": {},
      "state-0176": {},
      "state-0036": {},
      "state-0217": {},
      "state-0291": {},
      "state-0257": {},
      "state-0112": {},
      "state-0224": {},
      "state-0359": {},
      "state-0070": {},
      "state-0111": {},
      "state-0045": {},
      "state-0279": {},
      "state-0364": {},
      "state-0080": {},
      "state-0085": {}
    }
  },
  "relationRange": {
    "min": -2,
    "max": 5
  },
  "groups": {
    "group-1": {
      "label": "Характер",
      "order": 1
    },
    "group-2": {
      "label": "Личные ресурсы",
      "order": 2
    },
    "group-3": {
      "label": "Навыки",
      "order": 3
    },
    "group-4": {
      "label": "Отношения",
      "order": 4
    },
    "group-5": {
      "label": "Совет",
      "order": 5
    },
    "group-6": {
      "label": "Политика",
      "order": 6
    },
    "group-7": {
      "label": "Кредо",
      "order": 7
    },
    "group-8": {
      "label": "Сословия",
      "order": 8
    }
  },
  "estateAllegianceRanges": {
    "0": {
      "label": "Нейтралитет",
      "min": 7,
      "max": 16
    },
    "1": {
      "label": "Союзники",
      "min": 17,
      "max": 20
    },
    "2": {
      "label": "Враги",
      "min": 0,
      "max": 6
    }
  },
  "estateParameters": {
    "1": "Влияние",
    "2": "Лояльность"
  },
  "schema": "planner-v1"
};
