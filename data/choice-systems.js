/**
 * Повторяемые наборы решений: ежегодные дела и поездки.
 * Это декларативные данные, а не логика расчёта.
 */
"use strict";
globalThis.PLANNER_CHOICE_SYSTEMS = {
  "annualProjects": {
    "selectionLimit": 1,
    "singleUseOptions": true,
    "options": [
      {
        "id": "annual-option-1",
        "order": 1,
        "step": 1,
        "totalSteps": 3,
        "title": "Прогресс",
        "text": "Общество наук и искусств",
        "unlockChapter": 3,
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-2",
        "order": 1,
        "step": 2,
        "totalSteps": 3,
        "title": "Прогресс",
        "text": "Прогресс в массы",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-1",
          "key": "state-0338"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0062"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0074"
                },
                "side": 1,
                "operator": "<=",
                "value": 7
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "value": 2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "value": -2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-3",
        "order": 1,
        "step": 3,
        "totalSteps": 3,
        "title": "Прогресс",
        "text": "Забыть прошлое",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-2",
          "key": "state-0108"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0062"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0074"
                },
                "side": 0,
                "operator": ">=",
                "value": 8
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0240"
                },
                "side": 0,
                "operator": ">=",
                "value": 1
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "value": 3
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "value": -3
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-4",
        "order": 2,
        "step": 1,
        "totalSteps": 3,
        "title": "Традиция",
        "text": "Лига Канонов",
        "unlockChapter": 3,
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 1,
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-5",
        "order": 2,
        "step": 2,
        "totalSteps": 3,
        "title": "Традиция",
        "text": "Экзамены на дворянство",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-4",
          "key": "state-0238"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0123"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0340"
                },
                "side": 0,
                "operator": "<=",
                "value": 7
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 1,
            "value": 2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "value": -2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-6",
        "order": 2,
        "step": 3,
        "totalSteps": 3,
        "title": "Традиция",
        "text": "Реформа языка",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-5",
          "key": "state-0350"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0123"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0340"
                },
                "side": 1,
                "operator": ">=",
                "value": 8
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0240"
                },
                "side": 1,
                "operator": ">=",
                "value": 1
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 1,
            "value": 3
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "value": -3
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-7",
        "order": 3,
        "step": 1,
        "totalSteps": 3,
        "title": "Равенство",
        "text": "Комитет помощи неимущим",
        "unlockChapter": 3,
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-8",
        "order": 3,
        "step": 2,
        "totalSteps": 3,
        "title": "Равенство",
        "text": "Имперские подаяния",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-7",
          "key": "state-0299"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0058"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0230"
                },
                "side": 1,
                "operator": "<=",
                "value": 7
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "value": 2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "value": -2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-9",
        "order": 3,
        "step": 3,
        "totalSteps": 3,
        "title": "Равенство",
        "text": "Принудительные пожертвования",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-8",
          "key": "state-0092"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0058"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0230"
                },
                "side": 0,
                "operator": ">=",
                "value": 8
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0251"
                },
                "side": 0,
                "operator": ">=",
                "value": 1
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "value": 3
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "value": -3
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-10",
        "order": 4,
        "step": 1,
        "totalSteps": 3,
        "title": "Элитаризм",
        "text": "Дворянская Ассамблея",
        "unlockChapter": 3,
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 1,
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-11",
        "order": 4,
        "step": 2,
        "totalSteps": 3,
        "title": "Элитаризм",
        "text": "Дворянские наставники",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-10",
          "key": "state-0271"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0123"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0074"
                },
                "side": 0,
                "operator": "<=",
                "value": 7
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 1,
            "value": 2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "value": -2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-12",
        "order": 4,
        "step": 3,
        "totalSteps": 3,
        "title": "Элитаризм",
        "text": "Сословная иерархия",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-11",
          "key": "state-0173"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0123"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0074"
                },
                "side": 1,
                "operator": ">=",
                "value": 8
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0251"
                },
                "side": 1,
                "operator": ">=",
                "value": 1
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 1,
            "value": 3
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "value": -3
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-13",
        "order": 5,
        "step": 1,
        "totalSteps": 3,
        "title": "Право",
        "text": "Коллегия Права",
        "unlockChapter": 3,
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-14",
        "order": 5,
        "step": 2,
        "totalSteps": 3,
        "title": "Право",
        "text": "Защитники в судах",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-13",
          "key": "state-0222"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0058"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0340"
                },
                "side": 1,
                "operator": "<=",
                "value": 7
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "value": 2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "value": -2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-15",
        "order": 5,
        "step": 3,
        "totalSteps": 3,
        "title": "Право",
        "text": "Защита свободы слова",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-14",
          "key": "state-0001"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0058"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0340"
                },
                "side": 0,
                "operator": ">=",
                "value": 8
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0357"
                },
                "side": 0,
                "operator": ">=",
                "value": 1
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "value": 3
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "value": -3
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-16",
        "order": 6,
        "step": 1,
        "totalSteps": 3,
        "title": "Догма",
        "text": "Духовный Конклав",
        "unlockChapter": 3,
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-17",
        "order": 6,
        "step": 2,
        "totalSteps": 3,
        "title": "Догма",
        "text": "Орденский Устав",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-16",
          "key": "state-0020"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0062"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0230"
                },
                "side": 0,
                "operator": "<=",
                "value": 7
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "value": 2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "value": -2
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-18",
        "order": 6,
        "step": 3,
        "totalSteps": 3,
        "title": "Догма",
        "text": "Монашеский надзор",
        "unlockChapter": 3,
        "requiresOption": {
          "id": "annual-option-17",
          "key": "state-0019"
        },
        "requirements": [
          {
            "unlock": {
              "locked": true
            },
            "conditions": [
              {
                "type": "stat",
                "parameter": {
                  "key": "state-0062"
                },
                "operator": ">=",
                "value": 5
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0230"
                },
                "side": 1,
                "operator": ">=",
                "value": 8
              },
              {
                "type": "axis",
                "bilateralParameter": {
                  "key": "state-0357"
                },
                "side": 1,
                "operator": ">=",
                "value": 1
              }
            ]
          }
        ],
        "effects": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "value": 3
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "value": -3
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "value": 1
          },
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-19",
        "order": 1,
        "step": 1,
        "totalSteps": 5,
        "title": "Навыки",
        "text": "Лучшие учителя",
        "unlockChapter": 1,
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0123"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0058"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0062"
            },
            "value": 1
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0074"
            },
            "side": 0,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-20",
        "order": 1,
        "step": 2,
        "totalSteps": 5,
        "title": "Навыки",
        "text": "Личная библиотека",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-19",
          "key": "state-0164"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0123"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0058"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0062"
            },
            "value": 1
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0074"
            },
            "side": 0,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-21",
        "order": 1,
        "step": 3,
        "totalSteps": 5,
        "title": "Навыки",
        "text": "Диспуты и дебаты",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-20",
          "key": "state-0037"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0123"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0058"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0062"
            },
            "value": 1
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0074"
            },
            "side": 0,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-22",
        "order": 1,
        "step": 4,
        "totalSteps": 5,
        "title": "Навыки",
        "text": "Научный трактат",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-21",
          "key": "state-0336"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0123"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0058"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0062"
            },
            "value": 1
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0074"
            },
            "side": 0,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-23",
        "order": 1,
        "step": 5,
        "totalSteps": 5,
        "title": "Навыки",
        "text": "Учебная практика",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-22",
          "key": "state-0349"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0123"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0058"
            },
            "value": 1
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0062"
            },
            "value": 1
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0074"
            },
            "side": 0,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-24",
        "order": 2,
        "step": 1,
        "totalSteps": 5,
        "title": "Наследие",
        "text": "Генеалогическое древо",
        "unlockChapter": 1,
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0226"
            },
            "value": 10
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0340"
            },
            "side": 1,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-25",
        "order": 2,
        "step": 2,
        "totalSteps": 5,
        "title": "Наследие",
        "text": "Реставрация крипты",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-24",
          "key": "state-0183"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0226"
            },
            "value": 10
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0340"
            },
            "side": 1,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-26",
        "order": 2,
        "step": 3,
        "totalSteps": 5,
        "title": "Наследие",
        "text": "Праздник Темпестов",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-25",
          "key": "state-0233"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0226"
            },
            "value": 10
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0340"
            },
            "side": 1,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-27",
        "order": 2,
        "step": 4,
        "totalSteps": 5,
        "title": "Наследие",
        "text": "Жизнеописание императоров",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-26",
          "key": "state-0292"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0226"
            },
            "value": 10
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0340"
            },
            "side": 1,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-28",
        "order": 2,
        "step": 5,
        "totalSteps": 5,
        "title": "Наследие",
        "text": "Прославление Предстоятелей",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-27",
          "key": "state-0022"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0226"
            },
            "value": 10
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0340"
            },
            "side": 1,
            "value": 1
          }
        ]
      },
      {
        "id": "annual-option-29",
        "order": 3,
        "step": 1,
        "totalSteps": 5,
        "title": "Сила Темпестов",
        "text": "Опись ресурсов",
        "unlockChapter": 1,
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0157"
            },
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-30",
        "order": 3,
        "step": 2,
        "totalSteps": 5,
        "title": "Сила Темпестов",
        "text": "Дружба с вассалами",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-29",
          "key": "state-0016"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0157"
            },
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-31",
        "order": 3,
        "step": 3,
        "totalSteps": 5,
        "title": "Сила Темпестов",
        "text": "Талантливые офицеры",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-30",
          "key": "state-0149"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0157"
            },
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-32",
        "order": 3,
        "step": 4,
        "totalSteps": 5,
        "title": "Сила Темпестов",
        "text": "Усовершенствование крепостей",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-31",
          "key": "state-0162"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0157"
            },
            "value": 2
          }
        ]
      },
      {
        "id": "annual-option-33",
        "order": 3,
        "step": 5,
        "totalSteps": 5,
        "title": "Сила Темпестов",
        "text": "Реформа ополчения",
        "unlockChapter": 1,
        "requiresOption": {
          "id": "annual-option-32",
          "key": "state-0167"
        },
        "effects": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0157"
            },
            "value": 2
          }
        ]
      }
    ]
  },
  "journeys": {
    "selectionLimit": 1,
    "singleUseOptions": true,
    "options": [
      {
        "order": 1,
        "text": "Магра",
        "effects": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0209"
            },
            "unlocked": true
          }
        ],
        "id": "journey-option-1"
      },
      {
        "order": 2,
        "text": "Долина Цветов",
        "effects": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0079"
            },
            "unlocked": true
          }
        ],
        "id": "journey-option-2"
      },
      {
        "order": 3,
        "text": "Фиона",
        "effects": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0154"
            },
            "unlocked": true
          }
        ],
        "id": "journey-option-3"
      },
      {
        "order": 4,
        "text": "Мония",
        "effects": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0189"
            },
            "unlocked": true
          }
        ],
        "id": "journey-option-4"
      },
      {
        "order": 5,
        "text": "Константа",
        "effects": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0370"
            },
            "unlocked": true
          }
        ],
        "id": "journey-option-5"
      },
      {
        "order": 6,
        "text": "Астиния",
        "effects": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0018"
            },
            "unlocked": true
          }
        ],
        "id": "journey-option-6"
      }
    ]
  }
};
