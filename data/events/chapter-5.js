/**
 * События главы 5: выборы, условия и наблюдаемые последствия.
 * Записи расположены в порядке прохождения.
 */
"use strict";
globalThis.PLANNER_CHAPTERS ??= [];
globalThis.PLANNER_CHAPTERS.push({
  "number": 5,
  "id": "chapter-5",
  "title": "Глава V. Тысячелетний Сенат",
  "scenes": [
    {
      "id": "scene-5-1",
      "title": "Исчезновение Диаманта",
      "type": "hidden-text",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0061"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0133"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "status",
          "character": {
            "key": "state-0176"
          },
          "statusGroup": {
            "key": "state-0227"
          },
          "status": {
            "key": "state-0235"
          }
        }
      ]
    },
    {
      "id": "scene-5-2",
      "occurrenceKey": "sanity-crack",
      "title": "Трещина",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0049"
            },
            "operator": "=",
            "value": 4
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Кровь",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Воля",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Одиночество",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-3",
      "occurrenceKey": "sanity-fracture",
      "title": "Надлом",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0049"
            },
            "operator": "=",
            "value": 3
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Воля",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0340"
                  },
                  "side": 0,
                  "operator": ">=",
                  "value": 6
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": -2
            }
          ]
        },
        {
          "number": 2,
          "text": "Кровь",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0340"
                  },
                  "side": 1,
                  "operator": ">=",
                  "value": 5
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": -2
            }
          ]
        },
        {
          "number": 3,
          "text": "Разум",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0074"
                  },
                  "side": 0,
                  "operator": ">=",
                  "value": 6
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": -2
            }
          ]
        },
        {
          "number": 4,
          "text": "Страсть",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0074"
                  },
                  "side": 1,
                  "operator": ">=",
                  "value": 6
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": -2
            }
          ]
        },
        {
          "number": 5,
          "text": "Любовь",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0230"
                  },
                  "side": 0,
                  "operator": ">=",
                  "value": 6
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": -2
            }
          ]
        },
        {
          "number": 6,
          "text": "Закон",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0230"
                  },
                  "side": 1,
                  "operator": ">=",
                  "value": 6
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": -2
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-4",
      "occurrenceKey": "sanity-collapse",
      "title": "Распад",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0049"
            },
            "operator": "=",
            "value": 2
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Воля",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0340"
                  },
                  "side": 0,
                  "operator": ">=",
                  "value": 5
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 2
            }
          ]
        },
        {
          "number": 2,
          "text": "Кровь",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0340"
                  },
                  "side": 1,
                  "operator": ">=",
                  "value": 5
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 2
            }
          ]
        },
        {
          "number": 3,
          "text": "Разум",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0074"
                  },
                  "side": 0,
                  "operator": ">=",
                  "value": 5
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 2
            }
          ]
        },
        {
          "number": 4,
          "text": "Страсть",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0074"
                  },
                  "side": 1,
                  "operator": ">=",
                  "value": 5
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 2
            }
          ]
        },
        {
          "number": 5,
          "text": "Любовь",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0230"
                  },
                  "side": 0,
                  "operator": ">=",
                  "value": 5
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 2
            }
          ]
        },
        {
          "number": 6,
          "text": "Закон",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0230"
                  },
                  "side": 1,
                  "operator": ">=",
                  "value": 5
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 2
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-5",
      "occurrenceKey": "sanity-shards",
      "title": "Осколки",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0049"
            },
            "operator": "=",
            "value": 1
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Воля",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 3
            }
          ]
        },
        {
          "number": 2,
          "text": "Кровь",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 3
            }
          ]
        },
        {
          "number": 3,
          "text": "Разум",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 3
            }
          ]
        },
        {
          "number": 4,
          "text": "Страсть",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 3
            }
          ]
        },
        {
          "number": 5,
          "text": "Любовь",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 3
            }
          ]
        },
        {
          "number": 6,
          "text": "Закон",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 3
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-6",
      "occurrenceKey": "sanity-void",
      "title": "Пустота",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0049"
            },
            "operator": "=",
            "value": 0
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Раскаиваюсь",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0371"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Не раскаиваюсь",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0371"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-7",
      "title": "Трещины на стекле",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "operator": ">=",
            "value": 5
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0196"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "status",
              "character": {
                "key": "state-0112"
              },
              "statusGroup": {
                "key": "state-0316"
              },
              "status": {
                "key": "state-0069"
              }
            }
          ],
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0093"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": -1
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-8",
      "occurrenceKey": "insurrection-cracks-in-glass",
      "title": "Трещины на стекле",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "operator": ">=",
            "value": 5
          },
          {
            "type": "status",
            "character": {
              "key": "state-0112"
            },
            "statusGroup": {
              "key": "state-0316"
            },
            "status": {
              "key": "state-0069"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Наказать Ангелий",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0196"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Простить Ангелий",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0196"
              },
              "unlocked": true
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
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
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-9",
      "occurrenceKey": "insurrection-givers-hand",
      "title": "Рука дающего",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "operator": ">=",
            "value": 8
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Погасить мятеж",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Собрать войска",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 3
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-10",
      "occurrenceKey": "insurrection-no-dawn",
      "title": "Рассвета не будет",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0175"
            },
            "operator": "=",
            "value": 10
          }
        ]
      },
      "settings": {
        "showRewardsAsEndingPopup": true
      },
      "effects": [
        {
          "type": "ending",
          "ending": {
            "key": "state-0286"
          },
          "unlocked": true
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-11",
      "occurrenceKey": "empire-dogma-flourishing",
      "title": "Расцвет Догмы",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "operator": ">=",
            "value": 5
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Забрать земли у дворян-людей",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Забрать земли у Достойных аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Отдать земли Темпестов",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 10
                      }
                    ]
                  }
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Отвергнуть просьбу",
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
                "key": "state-0003"
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
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-12",
      "occurrenceKey": "empire-dogma-triumph",
      "title": "Торжество Догмы",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "operator": ">=",
            "value": 8
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Инквизицию",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
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
              "value": 3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
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
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать Инквизиторам",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Ограничить власть Инквизиции",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-13",
      "occurrenceKey": "empire-dogma-absolute",
      "title": "Абсолют Догмы",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0103"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0230"
          },
          "side": 1,
          "value": 2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
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
            "key": "state-0120"
          },
          "estateParameter": 2,
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0255"
          },
          "estateParameter": 2,
          "value": -3
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-14",
      "occurrenceKey": "empire-elitism-flourishing",
      "title": "Расцвет Элитаризма",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 1,
            "operator": ">=",
            "value": 5
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Выбрать Великие дома",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Выбрать Достойных аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Создать коллегию",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 10
                      }
                    ]
                  }
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Сохранить запрет дуэлей",
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
                "key": "state-0245"
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
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
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
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-15",
      "occurrenceKey": "empire-elitism-triumph",
      "title": "Торжество Элитаризма",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 1,
            "operator": ">=",
            "value": 8
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Достойных аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
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
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 3
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
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать Достойным аркнам",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
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
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Ограничить влияние Судов Чести",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
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
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-16",
      "occurrenceKey": "empire-elitism-absolute",
      "title": "Абсолют Элитаризма",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 1,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0107"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0074"
          },
          "side": 1,
          "value": 2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
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
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0003"
          },
          "estateParameter": 2,
          "value": -3
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-17",
      "occurrenceKey": "empire-dogma-crisis",
      "title": "Кризис Догмы",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "operator": ">=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Удовлетворить прошение",
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать патриархам",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
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
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Усилить влияние Префектуры",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 5
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
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
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-18",
      "occurrenceKey": "empire-law-flourishing",
      "title": "Расцвет Права",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "operator": ">=",
            "value": 5
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Опереться на Новую Веру",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Опереться на Старую Веру",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Создать единый «Кодекс Греха»",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 10
                      }
                    ]
                  }
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Ограничить власть Префектуры",
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
                "key": "state-0255"
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
              "value": -2
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
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-19",
      "occurrenceKey": "empire-law-triumph",
      "title": "Торжество Права",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "operator": ">=",
            "value": 8
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Обещать амнистию",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 3
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
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать в прошении об амнистии",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Защитить Церковь",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
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
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 2
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-20",
      "occurrenceKey": "empire-law-absolute",
      "title": "Абсолют Права",
      "type": "scene-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0327"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0289"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0340"
          },
          "side": 0,
          "value": 2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
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
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": -3
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-21",
      "occurrenceKey": "empire-tradition-crisis",
      "title": "Кризис Традиций",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "operator": ">=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Запретить исследования",
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
          "number": 2,
          "text": "Не мешать ученым",
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
          "number": 3,
          "text": "Поддержать Университет",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 5
                      }
                    ]
                  }
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-22",
      "occurrenceKey": "empire-progress-flourishing",
      "title": "Расцвет Прогресса",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "operator": ">=",
            "value": 5
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отменить курс теологии",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
          "number": 2,
          "text": "Отменить курс аркнийской истории",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
          "number": 3,
          "text": "Сделать курсы факультативными",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 10
                      }
                    ]
                  }
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
          "number": 4,
          "text": "Отказать в прошении",
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
                "key": "state-0120"
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
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-23",
      "occurrenceKey": "empire-progress-triumph",
      "title": "Торжество Прогресса",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "operator": ">=",
            "value": 8
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Университет",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 3
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
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать Университету",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -3
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Прислушаться к Луцию Диаманту",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": -3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-24",
      "occurrenceKey": "empire-progress-absolute",
      "title": "Абсолют Прогресса",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0081"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0074"
          },
          "side": 0,
          "value": 2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
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
            "key": "state-0245"
          },
          "estateParameter": 2,
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": -3
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-25",
      "occurrenceKey": "empire-elitism-crisis",
      "title": "Кризис Элитаризма",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "operator": ">=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Ограничить Малые кворумы",
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать Гаю",
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Снять все ограничения",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 5
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
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
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-26",
      "occurrenceKey": "empire-equality-flourishing",
      "title": "Расцвет Равенства",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "operator": ">=",
            "value": 5
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Снять трибуна от Великих домов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Снять трибуна от Достойных аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Ограничить права обоих трибунов",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 10
                      }
                    ]
                  }
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
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Урезать права Малых кворумов",
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
                "key": "state-0199"
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
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-27",
      "occurrenceKey": "empire-equality-triumph",
      "title": "Торжество Равенства",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "operator": ">=",
            "value": 8
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать нововеров",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
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
                "key": "state-0255"
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
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать нововерам",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Отменить новый налог",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-28",
      "occurrenceKey": "empire-equality-absolute",
      "title": "Абсолют Равенства",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0090"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0230"
          },
          "side": 0,
          "value": 2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
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
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0255"
          },
          "estateParameter": 2,
          "value": -3
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-29",
      "occurrenceKey": "empire-tradition-flourishing",
      "title": "Расцвет Традиций",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 1,
            "operator": ">=",
            "value": 5
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Изъять реликвии Университета",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
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
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
          "number": 2,
          "text": "Изъять реликвии из частных коллекций",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
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
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
          "number": 3,
          "text": "Учредить Императорский Музей",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 10
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
          "number": 4,
          "text": "Расширить права Университета",
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
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
                "key": "state-0245"
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
              "value": -2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-30",
      "occurrenceKey": "empire-tradition-triumph",
      "title": "Торжество Традиций",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 1,
            "operator": ">=",
            "value": 8
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Благословить Великое Возвращение",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
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
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 3
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
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать Тарквинию",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
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
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Остановить Паноптикум",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
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
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-31",
      "occurrenceKey": "empire-tradition-absolute",
      "title": "Абсолют Традиций",
      "type": "scene-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 1,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0198"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0340"
          },
          "side": 1,
          "value": 2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
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
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0199"
          },
          "estateParameter": 2,
          "value": -3
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-32",
      "occurrenceKey": "loyalty-commoners-wrath",
      "title": "Гнев простого сословия",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0284"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Осудить мещан по закону",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0284"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Помиловать мещан",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0284"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Найти компромисс",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0172"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0172"
                          },
                          "statusGroup": {
                            "key": "state-0095"
                          },
                          "status": {
                            "key": "state-0229"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0284"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-33",
      "occurrenceKey": "loyalty-commoners-revolt",
      "title": "Мятеж простого сословия",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0112"
            },
            "statusGroup": {
              "key": "state-0316"
            },
            "status": {
              "key": "state-0069"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Решить проблему тихо",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0199"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 19
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0236"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Решить проблему силой",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0199"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 24
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0236"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Не вмешиваться",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0236"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-34",
      "occurrenceKey": "loyalty-worthy-arkns-wrath",
      "title": "Гнев Достойных аркнов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0030"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать ректора",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0030"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Защитить честь Достойных аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0030"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Найти компромисс",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0036"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0260"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0046"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0138"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0053"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0258"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0030"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-35",
      "occurrenceKey": "loyalty-worthy-arkns-revolt",
      "title": "Мятеж Достойных аркнов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Решить проблему тихо",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0255"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 13
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0264"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Решить проблему силой",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0255"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 18
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0264"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Не вмешиваться",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0264"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-36",
      "occurrenceKey": "loyalty-great-houses-wrath",
      "title": "Гнев Великих домов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0261"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Казнить аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -3
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0261"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Помиловать аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0261"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Найти компромисс",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0045"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0045"
                          },
                          "statusGroup": {
                            "key": "state-0330"
                          },
                          "status": {
                            "key": "state-0192"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0045"
                          },
                          "statusGroup": {
                            "key": "state-0330"
                          },
                          "status": {
                            "key": "state-0276"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0261"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-37",
      "occurrenceKey": "loyalty-great-houses-revolt",
      "title": "Мятеж Великих домов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Решить проблему тихо",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0245"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 16
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0368"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Решить проблему силой",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0245"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 21
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0368"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Не вмешиваться",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0368"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-38",
      "occurrenceKey": "loyalty-human-nobility-wrath",
      "title": "Гнев людского дворянства",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0347"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отдать судей их сюзеренам",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0347"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Оправдать судей",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0347"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Защитить судей иначе",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0294"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0294"
                          },
                          "statusGroup": {
                            "key": "state-0027"
                          },
                          "status": {
                            "key": "state-0072"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0294"
                          },
                          "statusGroup": {
                            "key": "state-0027"
                          },
                          "status": {
                            "key": "state-0266"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0294"
                          },
                          "statusGroup": {
                            "key": "state-0027"
                          },
                          "status": {
                            "key": "state-0106"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0294"
                          },
                          "statusGroup": {
                            "key": "state-0027"
                          },
                          "status": {
                            "key": "state-0100"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0347"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-39",
      "occurrenceKey": "loyalty-old-faith-wrath",
      "title": "Гнев Старой Веры",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0170"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Разрешить чтение Писания",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0170"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Закрыть школы",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0170"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Заменить учебники",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0062"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0064"
                          },
                          "operator": ">=",
                          "value": 2
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0170"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-40",
      "occurrenceKey": "loyalty-old-faith-revolt",
      "title": "Мятеж Старой Веры",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Решить проблему тихо",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0218"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0011"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Решить проблему силой",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0218"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0011"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Не вмешиваться",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0011"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-41",
      "occurrenceKey": "loyalty-human-nobility-revolt",
      "title": "Мятеж людского дворянства",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Решить проблему тихо",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0120"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 17
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0009"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Решить проблему силой",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0120"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 22
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0009"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Не вмешиваться",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0009"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-42",
      "occurrenceKey": "loyalty-new-faith-wrath",
      "title": "Гнев Новой Веры",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0031"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Казнить",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0031"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Помиловать",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0031"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Переубедить",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0062"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0085"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0085"
                          },
                          "statusGroup": {
                            "key": "state-0013"
                          },
                          "status": {
                            "key": "state-0152"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0085"
                          },
                          "statusGroup": {
                            "key": "state-0013"
                          },
                          "status": {
                            "key": "state-0243"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0085"
                          },
                          "statusGroup": {
                            "key": "state-0063"
                          },
                          "status": {
                            "key": "state-0010"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0031"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-43",
      "occurrenceKey": "loyalty-new-faith-revolt",
      "title": "Мятеж Новой Веры",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Решить проблему тихо",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0003"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 12
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0156"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Решить проблему силой",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0003"
                        },
                        "estateParameter": 1,
                        "operator": "<=",
                        "value": 17
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0156"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Не вмешиваться",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0156"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-44",
      "occurrenceKey": "loyalty-commoners-wrath-late",
      "title": "Гнев простого сословия",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0284"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Осудить мещан по закону",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0284"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Помиловать мещан",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0284"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Найти компромисс",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0172"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0172"
                          },
                          "statusGroup": {
                            "key": "state-0095"
                          },
                          "status": {
                            "key": "state-0229"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0284"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-45",
      "occurrenceKey": "loyalty-worthy-arkns-wrath-late",
      "title": "Гнев Достойных аркнов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0030"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать ученых",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0030"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Защитить честь Достойных аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0030"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Найти компромисс",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0036"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0260"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0046"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0138"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0053"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0258"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0030"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-46",
      "occurrenceKey": "loyalty-great-houses-wrath-late",
      "title": "Гнев Великих домов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0261"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Казнить",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "flag",
              "objective": {
                "key": "state-0261"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Помиловать",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0261"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Найти компромисс",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0045"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0045"
                          },
                          "statusGroup": {
                            "key": "state-0330"
                          },
                          "status": {
                            "key": "state-0192"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0045"
                          },
                          "statusGroup": {
                            "key": "state-0330"
                          },
                          "status": {
                            "key": "state-0276"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0261"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-47",
      "occurrenceKey": "loyalty-new-faith-wrath-late",
      "title": "Гнев Новой Веры",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0031"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Казнить",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0031"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Помиловать",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0031"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Переубедить",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0062"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0085"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0085"
                          },
                          "statusGroup": {
                            "key": "state-0013"
                          },
                          "status": {
                            "key": "state-0152"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0085"
                          },
                          "statusGroup": {
                            "key": "state-0013"
                          },
                          "status": {
                            "key": "state-0243"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0085"
                          },
                          "statusGroup": {
                            "key": "state-0063"
                          },
                          "status": {
                            "key": "state-0010"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0031"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-48",
      "occurrenceKey": "loyalty-human-nobility-wrath-late",
      "title": "Гнев людского дворянства",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0347"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отдать судей их сюзеренам",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0347"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Оправдать судей",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0347"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Защитить судей иначе",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0294"
                          },
                          "operator": ">=",
                          "value": 2
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0294"
                          },
                          "statusGroup": {
                            "key": "state-0027"
                          },
                          "status": {
                            "key": "state-0072"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0294"
                          },
                          "statusGroup": {
                            "key": "state-0027"
                          },
                          "status": {
                            "key": "state-0266"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0294"
                          },
                          "statusGroup": {
                            "key": "state-0027"
                          },
                          "status": {
                            "key": "state-0106"
                          },
                          "not": true
                        },
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0294"
                          },
                          "statusGroup": {
                            "key": "state-0027"
                          },
                          "status": {
                            "key": "state-0100"
                          },
                          "not": true
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0347"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-49",
      "occurrenceKey": "loyalty-old-faith-wrath-late",
      "title": "Гнев Старой Веры",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 6
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0170"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0134"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Разрешить чтение Писания",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0170"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Закрыть школы",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0170"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Заменить учебники",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 10
                      }
                    ]
                  }
                }
              ],
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0062"
                          },
                          "operator": ">=",
                          "value": 10
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0064"
                          },
                          "operator": ">=",
                          "value": 2
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0170"
              },
              "unlocked": true
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-50",
      "title": "Абсолют Догмы",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            }
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0103"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0103"
          },
          "unlocked": true
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 2
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
          "type": "faction",
          "estate": {
            "key": "state-0255"
          },
          "estateParameter": 2,
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0003"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-51",
      "title": "Абсолют Элитаризма",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            }
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 1,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0107"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0107"
          },
          "unlocked": true
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 2
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
          "type": "faction",
          "estate": {
            "key": "state-0003"
          },
          "estateParameter": 2,
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0245"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-52",
      "title": "Абсолют Права",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            }
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0289"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0093"
              }
            }
          ],
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0327"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0289"
          },
          "unlocked": true
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 2
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
          "type": "faction",
          "estate": {
            "key": "state-0003"
          },
          "estateParameter": 2,
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0255"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-53",
      "title": "Абсолют Прогресса",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            }
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0081"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0081"
          },
          "unlocked": true
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 2
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
          "type": "faction",
          "estate": {
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0120"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-54",
      "title": "Абсолют Равенства",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            }
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0090"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0090"
          },
          "unlocked": true
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 2
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
          "type": "faction",
          "estate": {
            "key": "state-0255"
          },
          "estateParameter": 2,
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0199"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-55",
      "title": "Абсолют Традиций",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0093"
            }
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 1,
            "operator": ">=",
            "value": 10
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0198"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0142"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0198"
          },
          "unlocked": true
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 2
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
          "type": "faction",
          "estate": {
            "key": "state-0199"
          },
          "estateParameter": 2,
          "value": -3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-56",
      "title": "Мятеж простого сословия",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0199"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0236"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0093"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0112"
              },
              "statusGroup": {
                "key": "state-0316"
              },
              "status": {
                "key": "state-0069"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0003"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-57",
      "title": "Мятеж Достойных аркнов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0255"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0264"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0093"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0112"
              },
              "statusGroup": {
                "key": "state-0316"
              },
              "status": {
                "key": "state-0069"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0120"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-58",
      "title": "Мятеж Великих домов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0245"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0368"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0093"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0112"
              },
              "statusGroup": {
                "key": "state-0316"
              },
              "status": {
                "key": "state-0069"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0255"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-59",
      "title": "Мятеж людского дворянства",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0120"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0009"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0093"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0112"
              },
              "statusGroup": {
                "key": "state-0316"
              },
              "status": {
                "key": "state-0069"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0199"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-60",
      "title": "Мятеж нововеров",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0003"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0156"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0093"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0112"
              },
              "statusGroup": {
                "key": "state-0316"
              },
              "status": {
                "key": "state-0069"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-61",
      "title": "Мятеж клира староверов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "faction",
            "estate": {
              "key": "state-0218"
            },
            "estateParameter": 2,
            "operator": "<=",
            "value": 0
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0011"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0119"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0093"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0112"
              },
              "statusGroup": {
                "key": "state-0316"
              },
              "status": {
                "key": "state-0069"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 3
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": -2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-62",
      "title": "Искусство наводить мосты",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0209"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Гая",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0157"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0172"
                        },
                        "statusGroup": {
                          "key": "state-0118"
                        },
                        "status": {
                          "key": "state-0312"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 3
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать Тарквиния",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0251"
                          },
                          "side": 1,
                          "operator": ">=",
                          "value": 5
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0172"
              },
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Примирить стороны",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0198"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
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
          "number": 4,
          "text": "Передать право городам",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 5,
          "text": "Покинуть Магру",
          "effects": [
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-63",
      "title": "Мятежный легион",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0154"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отстранить наместника",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Распустить легион",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0240"
                          },
                          "side": 0,
                          "operator": ">=",
                          "value": 5
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Примирить стороны",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0289"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 4,
          "text": "Привести к покорности",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 5,
          "text": "Покинуть Фиону",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-64",
      "title": "Четвертый Церковный Собор",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0079"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Запретить Собор",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0357"
                          },
                          "side": 1,
                          "operator": ">=",
                          "value": 5
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0062"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0176"
                          },
                          "statusGroup": {
                            "key": "state-0244"
                          },
                          "status": {
                            "key": "state-0050"
                          }
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 3
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Разрешить Собор",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0062"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0366"
                          },
                          "not": true
                        }
                      ]
                    },
                    "not": true
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Возглавить Собор",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0090"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0230"
                        },
                        "side": 1,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 4,
          "text": "Задержать Луку",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0366"
                        },
                        "not": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0230"
                        },
                        "side": 1,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0257"
              },
              "statusGroup": {
                "key": "state-0348"
              },
              "status": {
                "key": "state-0313"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 5,
          "text": "Покинуть Долину Цветов",
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-65",
      "title": "Ближе к земле",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0189"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Выделить аркнам войска",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0240"
                          },
                          "side": 1,
                          "operator": ">=",
                          "value": 5
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
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
              "value": 3
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Заступиться за крестьян",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Облегчить труд крестьян",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0081"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 4,
          "text": "Увести крестьян",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 5,
          "text": "Покинуть Монию",
          "effects": [
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
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-66",
      "title": "Город у подножья",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0370"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Разрешить маркианство",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0357"
                          },
                          "side": 0,
                          "operator": ">=",
                          "value": 5
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 3
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Запретить маркианство",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Привести к покаянию",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0103"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 4,
          "text": "Сжечь Басель",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0230"
                        },
                        "side": 1,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 5,
          "text": "Покинуть Басель",
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-67",
      "title": "Расколотая провинция",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0018"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Распустить совет",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0307"
                        },
                        "not": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0366"
                          }
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0251"
                          },
                          "side": 0,
                          "operator": ">=",
                          "value": 5
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
              "value": 3
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Защитить города",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0157"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0307"
                          },
                          "not": true
                        }
                      ]
                    },
                    "not": true
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Разделить провинцию",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0107"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 4,
          "text": "Утвердить власть Темпестов",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "article",
                          "article": {
                            "key": "state-0354"
                          },
                          "value": 3,
                          "not": true
                        }
                      ]
                    }
                  },
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "article",
                          "article": {
                            "key": "state-0267"
                          },
                          "value": 3,
                          "not": true
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0270"
                    },
                    "not": true
                  },
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0327"
                    },
                    "not": true
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "faction",
                          "estate": {
                            "key": "state-0255"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 18
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 20
                        }
                      ]
                    }
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "faction",
                          "estate": {
                            "key": "state-0003"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 18
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 20
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 5,
          "text": "Покинуть Астинию",
          "effects": [
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
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-5-68",
      "title": "Потускневший алмаз",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0327"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": -1
        }
      ]
    },
    {
      "id": "scene-5-69",
      "title": "Превосходство чести",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0270"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": -2
        }
      ]
    },
    {
      "id": "scene-5-70",
      "title": "Во мраке",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0303"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отказаться от борьбы",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0195"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать Гая",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-71",
      "title": "Бессилие",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0317"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -2
        }
      ]
    },
    {
      "id": "scene-5-72",
      "title": "Вьюга",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
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
            "key": "state-0255"
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
          "value": -2
        }
      ]
    },
    {
      "id": "scene-5-73",
      "title": "Вьюга",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
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
            "key": "state-0199"
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
          "value": -2
        }
      ]
    },
    {
      "id": "scene-5-74",
      "title": "Драконы",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0158"
            }
          }
        ]
      },
      "effects": [
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
            "key": "state-0255"
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
          "value": -2
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0199"
          },
          "estateParameter": 2,
          "value": -2
        }
      ]
    },
    {
      "id": "scene-5-76",
      "title": "Любовь народа",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Валерия",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0357"
                        },
                        "side": 0,
                        "operator": "<=",
                        "value": 7
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Покинуть Аахен",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Наказать чиновников",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 10
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 4,
          "text": "Провести расследование",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0175"
                        },
                        "operator": "<=",
                        "value": 5
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-77",
      "title": "Исчезновение Аркрайта",
      "type": "hidden-text",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0137"
            },
            "statusGroup": {
              "key": "state-0109"
            },
            "status": {
              "key": "state-0190"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "status",
          "character": {
            "key": "state-0137"
          },
          "statusGroup": {
            "key": "state-0109"
          },
          "status": {
            "key": "state-0194"
          }
        }
      ]
    },
    {
      "id": "scene-5-78",
      "title": "Не ведая жалости",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Клавдия",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 10
            }
          ]
        },
        {
          "number": 2,
          "text": "Отринуть Клавдия",
          "effects": [
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
          "number": 3,
          "text": "Защитить Марка",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
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
                "key": "state-0226"
              },
              "value": -5
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-79",
      "title": "Выбор странствия",
      "type": "journey",
      "choiceSystem": "journeys"
    },
    {
      "id": "scene-5-81",
      "title": "Обреченные",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0285"
            },
            "statusGroup": {
              "key": "state-0281"
            },
            "status": {
              "key": "state-0168"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Расстаться с Агатой",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0061"
                        }
                      }
                    ]
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0285"
              },
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0346"
              }
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Остаться с Агатой",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0285"
              },
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0044"
              }
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "status",
              "character": {
                "key": "state-0364"
              },
              "statusGroup": {
                "key": "state-0129"
              },
              "status": {
                "key": "state-0136"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Сбежать с Агатой",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0268"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-82",
      "title": "Супружеский долг",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0291"
            },
            "statusGroup": {
              "key": "state-0310"
            },
            "status": {
              "key": "state-0329"
            }
          }
        ],
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0204"
              }
            }
          ],
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0040"
              }
            }
          ],
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0158"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Уничтожить союзников",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0089"
              },
              "status": {
                "key": "state-0365"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0361"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
            }
          ]
        },
        {
          "number": 2,
          "text": "Отомстить союзникам",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  },
                  "not": true
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0089"
              },
              "status": {
                "key": "state-0365"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0361"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
            }
          ]
        },
        {
          "number": 3,
          "text": "Примириться",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": -3,
              "statusGroup": {
                "key": "state-0089"
              },
              "status": {
                "key": "state-0319"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-83",
      "title": "Супружеский долг",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0291"
            },
            "statusGroup": {
              "key": "state-0310"
            },
            "status": {
              "key": "state-0329"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0158"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Наказать виновных",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0089"
              },
              "status": {
                "key": "state-0365"
              }
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Уничтожить Малый кворум",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  },
                  "not": true
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0089"
              },
              "status": {
                "key": "state-0365"
              }
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
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
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Отказаться от мести",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": -3,
              "statusGroup": {
                "key": "state-0089"
              },
              "status": {
                "key": "state-0319"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-84",
      "title": "Стоны и крики",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0372"
            },
            "statusGroup": {
              "key": "state-0259"
            },
            "status": {
              "key": "state-0146"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Истязать пленников",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Остановить пытки",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Порвать с Камиллой",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": -3,
              "statusGroup": {
                "key": "state-0259"
              },
              "status": {
                "key": "state-0274"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-85",
      "title": "Выбор странствия",
      "type": "journey",
      "choiceSystem": "journeys"
    },
    {
      "id": "scene-5-86",
      "title": "Ружья Элирии",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Подавить восстание силой",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0240"
                          },
                          "side": 0,
                          "operator": "<=",
                          "value": 7
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0157"
                          },
                          "operator": ">=",
                          "value": 20
                        }
                      ]
                    }
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
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
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0133"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Договориться с мятежниками",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0289"
                          }
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 1
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0133"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Покинуть город",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
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
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0133"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 4,
          "text": "Завербовать каторжников",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0123"
                          },
                          "operator": ">=",
                          "value": 20
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "faction",
                          "estate": {
                            "key": "state-0199"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 18
                        }
                      ]
                    }
                  }
                ]
              ]
            },
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "faction",
                        "estate": {
                          "key": "state-0199"
                        },
                        "estateParameter": 2,
                        "operator": ">=",
                        "value": 7
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 3
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0133"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-87",
      "title": "И сказал Младший",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0061"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0285"
              },
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0044"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Время",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Любовь",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Младший",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0028"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 4,
          "text": "Старший",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0285"
                        },
                        "statusGroup": {
                          "key": "state-0281"
                        },
                        "status": {
                          "key": "state-0044"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0352"
              },
              "statusGroup": {
                "key": "state-0278"
              },
              "status": {
                "key": "state-0054"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 5,
          "text": "Ты сам",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 6,
          "text": "Промолчать",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0352"
              },
              "statusGroup": {
                "key": "state-0278"
              },
              "status": {
                "key": "state-0332"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-88",
      "title": "Отцеубийца",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0208"
            },
            "statusGroup": {
              "key": "state-0320"
            },
            "status": {
              "key": "state-0097"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Принять Юлию",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0098"
              },
              "statusGroup": {
                "key": "state-0150"
              },
              "status": {
                "key": "state-0241"
              }
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 10
            }
          ]
        },
        {
          "number": 2,
          "text": "Отвергнуть Юлию",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Уничтожить Юлию",
          "effects": [
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
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-89",
      "title": "Долг Предстоятеля",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0061"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0364"
            },
            "statusGroup": {
              "key": "state-0129"
            },
            "status": {
              "key": "state-0136"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Убить Метелла",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0085"
              },
              "value": -3,
              "statusGroup": {
                "key": "state-0013"
              },
              "status": {
                "key": "state-0152"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0298"
              },
              "statusGroup": {
                "key": "state-0353"
              },
              "status": {
                "key": "state-0117"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Защитить Метелла",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Отвергнуть Оргрифа",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0364"
              },
              "statusGroup": {
                "key": "state-0129"
              },
              "status": {
                "key": "state-0314"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-90",
      "title": "Выбор странствия",
      "type": "journey",
      "choiceSystem": "journeys"
    },
    {
      "id": "scene-5-92",
      "title": "Цвет нации",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Встретиться с мятежниками",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0251"
                        },
                        "side": 1,
                        "operator": "<=",
                        "value": 7
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0340"
                        },
                        "side": 0,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
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
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0070"
              },
              "statusGroup": {
                "key": "state-0060"
              },
              "status": {
                "key": "state-0148"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 2,
          "text": "Организовать штурм",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0240"
                        },
                        "side": 1,
                        "operator": "<=",
                        "value": 7
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0058"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0064"
                          },
                          "statusGroup": {
                            "key": "state-0143"
                          },
                          "status": {
                            "key": "state-0220"
                          }
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Разрешить штурм",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 4,
          "text": "Выдать Лукулла",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
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
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0070"
              },
              "statusGroup": {
                "key": "state-0060"
              },
              "status": {
                "key": "state-0132"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-93",
      "title": "Право сильного",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0361"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Подписать приговор",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0279"
              },
              "statusGroup": {
                "key": "state-0014"
              },
              "status": {
                "key": "state-0039"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 4
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
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -4
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 3
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Отправить Кондорсе в ссылку",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0279"
              },
              "statusGroup": {
                "key": "state-0014"
              },
              "status": {
                "key": "state-0339"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Защитить Кондорсе",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0340"
                        },
                        "side": 0,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-94",
      "title": "Оковы веры",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0361"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Казнить магистров",
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 4
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
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -4
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 3
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Поменять магистров",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Защитить инквизиторов",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0340"
                        },
                        "side": 0,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-95",
      "title": "Семейные ценности",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0158"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0361"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Убить Монрога",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0252"
              },
              "statusGroup": {
                "key": "state-0351"
              },
              "status": {
                "key": "state-0277"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Захватить Монию",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 15
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0252"
              },
              "statusGroup": {
                "key": "state-0351"
              },
              "status": {
                "key": "state-0177"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -4
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Арестовать Сервилию",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0340"
                        },
                        "side": 0,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": -3,
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0192"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0361"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -20
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -4
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-96",
      "title": "Искра жизни",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0061"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0364"
            },
            "statusGroup": {
              "key": "state-0129"
            },
            "status": {
              "key": "state-0314"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0364"
            },
            "statusGroup": {
              "key": "state-0129"
            },
            "status": {
              "key": "state-0136"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Обнять отца",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0085"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Покинуть отца",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0085"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0345"
              },
              "status": {
                "key": "state-0128"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Обвинить отца",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0062"
                          },
                          "operator": ">=",
                          "value": 15
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0288"
                          }
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0085"
              },
              "value": -3,
              "statusGroup": {
                "key": "state-0345"
              },
              "status": {
                "key": "state-0128"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-97",
      "title": "И сказал Старший",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0061"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0285"
              },
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0044"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Империя",
          "effects": [
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
          "number": 2,
          "text": "Близкие",
          "effects": [
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
          "number": 3,
          "text": "Страждущие",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Младший",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0285"
                        },
                        "statusGroup": {
                          "key": "state-0281"
                        },
                        "status": {
                          "key": "state-0044"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0359"
              },
              "statusGroup": {
                "key": "state-0337"
              },
              "status": {
                "key": "state-0139"
              }
            }
          ]
        },
        {
          "number": 5,
          "text": "Ты сам",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0171"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 6,
          "text": "Промолчать",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0359"
              },
              "statusGroup": {
                "key": "state-0337"
              },
              "status": {
                "key": "state-0180"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-98",
      "title": "Выбор странствия",
      "type": "journey",
      "choiceSystem": "journeys"
    },
    {
      "id": "scene-5-99",
      "title": "Славная охота",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0064"
            },
            "operator": ">=",
            "value": 2
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Остановить Флавия",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0064"
                          },
                          "operator": ">=",
                          "value": 4
                        }
                      ]
                    },
                    "not": true
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0230"
                          },
                          "side": 1,
                          "operator": ">=",
                          "value": 8
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0182"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
            }
          ]
        },
        {
          "number": 2,
          "text": "Присоединиться к охоте",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0064"
                          },
                          "operator": ">=",
                          "value": 4
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0074"
                          },
                          "side": 1,
                          "operator": ">=",
                          "value": 8
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0216"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
            }
          ]
        },
        {
          "number": 3,
          "text": "Смолчать",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0216"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
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
        }
      ]
    },
    {
      "id": "scene-5-100",
      "title": "Надежда",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0285"
            },
            "statusGroup": {
              "key": "state-0281"
            },
            "status": {
              "key": "state-0044"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Удержать Агату",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0285"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0237"
              }
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Отпустить Агату",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0285"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0369"
              }
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-102",
      "title": "Искра во тьме",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Пойти на уступки",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0175"
                        },
                        "operator": "<=",
                        "value": 2
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0151"
              },
              "unlocked": true
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 4
            }
          ]
        },
        {
          "number": 2,
          "text": "Казнить лидеров мятежа",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0175"
                        },
                        "operator": "<=",
                        "value": 7
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0144"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 3,
          "text": "Судить лидеров мятежа",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0175"
                        },
                        "operator": "<=",
                        "value": 7
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0181"
              },
              "unlocked": true
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
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
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 4,
          "text": "Уничтожить всех",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "stat",
                          "parameter": {
                            "key": "state-0157"
                          },
                          "operator": ">=",
                          "value": 20
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0204"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0361"
                          }
                        }
                      ]
                    },
                    "not": true
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0040"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0361"
                          }
                        }
                      ]
                    },
                    "not": true
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0158"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0361"
                          }
                        }
                      ]
                    },
                    "not": true
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "axis",
                    "bilateralParameter": {
                      "key": "state-0340"
                    },
                    "side": 0,
                    "operator": ">=",
                    "value": 8
                  }
                ],
                [
                  {
                    "type": "axis",
                    "bilateralParameter": {
                      "key": "state-0340"
                    },
                    "side": 1,
                    "operator": ">=",
                    "value": 8
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0067"
              },
              "unlocked": true
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 1
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
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        },
        {
          "number": 5,
          "text": "Признать поражение",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0175"
                        },
                        "operator": "<=",
                        "value": 2
                      }
                    ]
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0078"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
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
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -3
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": false
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-103",
      "title": "Сладость возмездия",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0144"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0075"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0240"
          },
          "side": 1,
          "value": 2
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": false
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -4
        }
      ]
    },
    {
      "id": "scene-5-104",
      "title": "Поступь справедливости",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0181"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0075"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0357"
          },
          "side": 0,
          "value": 2
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": false
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": -2
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -4
        }
      ]
    },
    {
      "id": "scene-5-105",
      "title": "Опьянение кровью",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0067"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0075"
          },
          "unlocked": true
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0074"
          },
          "side": 1,
          "value": 1
        },
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0251"
          },
          "side": 1,
          "value": 2
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0134"
          },
          "unlocked": false
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0157"
          },
          "value": -8
        },
        {
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": -1
        }
      ]
    },
    {
      "id": "scene-5-107",
      "title": "Жизнь за жизнь",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0291"
            },
            "statusGroup": {
              "key": "state-0310"
            },
            "status": {
              "key": "state-0329"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0291"
            },
            "statusGroup": {
              "key": "state-0089"
            },
            "status": {
              "key": "state-0319"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Сохранить ребенка",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0291"
              },
              "statusGroup": {
                "key": "state-0310"
              },
              "status": {
                "key": "state-0333"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Избавиться от ребенка",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0291"
              },
              "statusGroup": {
                "key": "state-0310"
              },
              "status": {
                "key": "state-0213"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 15
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-108",
      "title": "Благие намерения",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0040"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0361"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Подписать приговор",
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -4
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
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
          "number": 2,
          "text": "Защитить священников",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
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
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Разорвать союз",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0225"
              },
              "statusGroup": {
                "key": "state-0145"
              },
              "status": {
                "key": "state-0262"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0361"
              },
              "unlocked": true
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -4
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-109",
      "title": "Враги народа",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0204"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0361"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Казнить Марция",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0112"
              },
              "statusGroup": {
                "key": "state-0316"
              },
              "status": {
                "key": "state-0069"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Защитить Марция",
          "requirements": [
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Разорвать союз",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0231"
              },
              "status": {
                "key": "state-0155"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0361"
              },
              "unlocked": true
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
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-110",
      "title": "Казнь Сеяна",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "status",
              "character": {
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0231"
              },
              "status": {
                "key": "state-0155"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0231"
              },
              "status": {
                "key": "state-0051"
              }
            }
          ],
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0361"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0204"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "status",
          "character": {
            "key": "state-0111"
          },
          "statusGroup": {
            "key": "state-0231"
          },
          "status": {
            "key": "state-0265"
          }
        }
      ]
    },
    {
      "id": "scene-5-111",
      "title": "Казнь эль Круа",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "status",
              "character": {
                "key": "state-0225"
              },
              "statusGroup": {
                "key": "state-0145"
              },
              "status": {
                "key": "state-0262"
              }
            }
          ],
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0361"
              }
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0040"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "status",
          "character": {
            "key": "state-0225"
          },
          "statusGroup": {
            "key": "state-0145"
          },
          "status": {
            "key": "state-0105"
          }
        }
      ]
    },
    {
      "id": "scene-5-112",
      "title": "Цена чести",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0005"
            },
            "statusGroup": {
              "key": "state-0047"
            },
            "status": {
              "key": "state-0210"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0224"
            },
            "statusGroup": {
              "key": "state-0239"
            },
            "status": {
              "key": "state-0215"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Остановить дуэль",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0005"
              },
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0296"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0224"
              },
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0344"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Лишить Эмиля дворянства",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0005"
              },
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0248"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0224"
              },
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0254"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Покинуть пустырь",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0005"
              },
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0247"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-113",
      "title": "Детские ошибки",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0005"
            },
            "statusGroup": {
              "key": "state-0047"
            },
            "status": {
              "key": "state-0077"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0224"
            },
            "statusGroup": {
              "key": "state-0239"
            },
            "status": {
              "key": "state-0331"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Оставить Эмиля",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0005"
              },
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0035"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Защитить Эмиля и Марту",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0005"
              },
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0326"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0224"
              },
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0201"
              }
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
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -2
            }
          ]
        },
        {
          "number": 3,
          "text": "Убить Эмиля и Марту",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0230"
                        },
                        "side": 1,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0005"
              },
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0035"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0224"
              },
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0179"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-114",
      "title": "Лопнувшая струна",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0064"
            },
            "operator": "<=",
            "value": 1
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Предложить духовное служение",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0064"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0026"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
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
          "number": 2,
          "text": "Предложить роль при дворе",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0064"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0026"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
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
          "number": 3,
          "text": "Предложить место в кворуме",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0064"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                }
              ]
            },
            {
              "unlock": {
                "cost": 5,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0026"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
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
          "number": 4,
          "text": "Освободить дар",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0216"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0052"
              },
              "status": {
                "key": "state-0272"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -3
            }
          ]
        },
        {
          "number": 5,
          "text": "Оставить Флавия",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0064"
              },
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0182"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-115",
      "title": "Наместник Константы",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0036"
            },
            "statusGroup": {
              "key": "state-0193"
            },
            "status": {
              "key": "state-0188"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Принять Корнелия",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0270"
                        }
                      },
                      {
                        "type": "article",
                        "article": {
                          "key": "state-0287"
                        },
                        "value": 1,
                        "not": true
                      },
                      {
                        "type": "article",
                        "article": {
                          "key": "state-0354"
                        },
                        "value": 1,
                        "not": true
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0036"
              },
              "statusGroup": {
                "key": "state-0193"
              },
              "status": {
                "key": "state-0186"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 3
            }
          ]
        },
        {
          "number": 2,
          "text": "Пригласить в Совет",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0270"
                        }
                      },
                      {
                        "type": "article",
                        "article": {
                          "key": "state-0287"
                        },
                        "value": 1,
                        "not": true
                      },
                      {
                        "type": "article",
                        "article": {
                          "key": "state-0354"
                        },
                        "value": 1,
                        "not": true
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0240"
                        },
                        "side": 0,
                        "operator": ">=",
                        "value": 1
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
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0036"
              },
              "statusGroup": {
                "key": "state-0193"
              },
              "status": {
                "key": "state-0029"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Пропустить войска",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0036"
              },
              "statusGroup": {
                "key": "state-0193"
              },
              "status": {
                "key": "state-0367"
              }
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
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Убить Корнелия",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ],
              "anyOf": [
                [
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0270"
                    },
                    "not": true
                  }
                ],
                [
                  {
                    "type": "article",
                    "article": {
                      "key": "state-0287"
                    },
                    "value": 1
                  }
                ],
                [
                  {
                    "type": "article",
                    "article": {
                      "key": "state-0354"
                    },
                    "value": 1
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0096"
                        }
                      }
                    ]
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0036"
              },
              "statusGroup": {
                "key": "state-0094"
              },
              "status": {
                "key": "state-0084"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0036"
              },
              "statusGroup": {
                "key": "state-0193"
              },
              "status": {
                "key": "state-0258"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-116",
      "title": "Семейные узы",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Собрать всю семью",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0158"
                        }
                      }
                    ]
                  },
                  "not": true
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0085"
                        },
                        "statusGroup": {
                          "key": "state-0345"
                        },
                        "status": {
                          "key": "state-0128"
                        }
                      }
                    ]
                  },
                  "not": true
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0045"
                        },
                        "statusGroup": {
                          "key": "state-0330"
                        },
                        "status": {
                          "key": "state-0192"
                        }
                      }
                    ]
                  },
                  "not": true
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0172"
                        },
                        "statusGroup": {
                          "key": "state-0095"
                        },
                        "status": {
                          "key": "state-0229"
                        }
                      }
                    ]
                  },
                  "not": true
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0064"
                        },
                        "statusGroup": {
                          "key": "state-0143"
                        },
                        "status": {
                          "key": "state-0182"
                        }
                      }
                    ]
                  },
                  "not": true
                },
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0040"
                  },
                  "not": true
                },
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0204"
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 3
            }
          ]
        },
        {
          "number": 2,
          "text": "Собрать только близких",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "flag",
                        "objective": {
                          "key": "state-0158"
                        }
                      }
                    ]
                  },
                  "not": true
                },
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0040"
                  },
                  "not": true
                },
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0204"
                  },
                  "not": true
                }
              ],
              "anyOf": [
                [
                  {
                    "type": "status",
                    "character": {
                      "key": "state-0036"
                    },
                    "statusGroup": {
                      "key": "state-0193"
                    },
                    "status": {
                      "key": "state-0029"
                    }
                  }
                ],
                [
                  {
                    "type": "status",
                    "character": {
                      "key": "state-0036"
                    },
                    "statusGroup": {
                      "key": "state-0193"
                    },
                    "status": {
                      "key": "state-0186"
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0085"
                          },
                          "operator": ">=",
                          "value": 4
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0045"
                          },
                          "operator": ">=",
                          "value": 4
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Вернуться к делам",
          "effects": [
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
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Пойти в крипту",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
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
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0158"
                          }
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 10
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-117",
      "title": "Разрыв",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0372"
            },
            "statusGroup": {
              "key": "state-0259"
            },
            "status": {
              "key": "state-0146"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Принять удар",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0340"
                        },
                        "side": 0,
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0372"
              },
              "statusGroup": {
                "key": "state-0259"
              },
              "status": {
                "key": "state-0099"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -10
            }
          ]
        },
        {
          "number": 2,
          "text": "Принять силу Крови",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0372"
              },
              "statusGroup": {
                "key": "state-0259"
              },
              "status": {
                "key": "state-0343"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-118",
      "title": "Торжество мертвых",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0158"
            }
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0361"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0045"
            },
            "statusGroup": {
              "key": "state-0330"
            },
            "status": {
              "key": "state-0192"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Присоединиться",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0372"
                        },
                        "statusGroup": {
                          "key": "state-0259"
                        },
                        "status": {
                          "key": "state-0099"
                        }
                      }
                    ]
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0045"
              },
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0358"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 10
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -4
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -4
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Уничтожить Орден",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0157"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0361"
              },
              "unlocked": true
            },
            {
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": -3,
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0192"
              }
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 4
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -20
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0134"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -4
            }
          ]
        },
        {
          "number": 3,
          "text": "Восстать",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0360"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-119",
      "title": "Вердикт",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0061"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0285"
              },
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0369"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0285"
              },
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0237"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Проклясть Богов",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0028"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Спасти грешников",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0028"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Признать вину",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0028"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 4,
          "text": "Призвать Богов",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "anyOf": [
                [
                  {
                    "type": "status",
                    "character": {
                      "key": "state-0359"
                    },
                    "statusGroup": {
                      "key": "state-0337"
                    },
                    "status": {
                      "key": "state-0180"
                    }
                  }
                ],
                [
                  {
                    "type": "status",
                    "character": {
                      "key": "state-0359"
                    },
                    "statusGroup": {
                      "key": "state-0337"
                    },
                    "status": {
                      "key": "state-0139"
                    }
                  }
                ]
              ]
            },
            {
              "unlock": {
                "locked": true
              },
              "anyOf": [
                [
                  {
                    "type": "status",
                    "character": {
                      "key": "state-0352"
                    },
                    "statusGroup": {
                      "key": "state-0278"
                    },
                    "status": {
                      "key": "state-0332"
                    }
                  }
                ],
                [
                  {
                    "type": "status",
                    "character": {
                      "key": "state-0352"
                    },
                    "statusGroup": {
                      "key": "state-0278"
                    },
                    "status": {
                      "key": "state-0054"
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0032"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 5,
          "text": "Проповедовать о любви",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0359"
                        },
                        "statusGroup": {
                          "key": "state-0337"
                        },
                        "status": {
                          "key": "state-0139"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0352"
                        },
                        "statusGroup": {
                          "key": "state-0278"
                        },
                        "status": {
                          "key": "state-0054"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0285"
                        },
                        "statusGroup": {
                          "key": "state-0281"
                        },
                        "status": {
                          "key": "state-0369"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0242"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 6,
          "text": "Промолчать",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0028"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-120",
      "title": "Клятва Крови",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Маску",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0045"
                        },
                        "statusGroup": {
                          "key": "state-0330"
                        },
                        "status": {
                          "key": "state-0358"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0335"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Принести клятву",
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0212"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 30
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0119"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Сохранить свободу",
          "requirements": [
            {
              "unlock": {
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0340"
                          },
                          "side": 0,
                          "operator": ">=",
                          "value": 8
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0074"
                          },
                          "side": 0,
                          "operator": ">=",
                          "value": 8
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "axis",
                          "bilateralParameter": {
                            "key": "state-0230"
                          },
                          "side": 0,
                          "operator": ">=",
                          "value": 8
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0119"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 4,
          "text": "Разорвать связь",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0045"
                        },
                        "statusGroup": {
                          "key": "state-0330"
                        },
                        "status": {
                          "key": "state-0358"
                        }
                      }
                    ]
                  },
                  "not": true
                }
              ],
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0098"
                          },
                          "statusGroup": {
                            "key": "state-0150"
                          },
                          "status": {
                            "key": "state-0241"
                          }
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0311"
                          }
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0372"
                          },
                          "statusGroup": {
                            "key": "state-0259"
                          },
                          "status": {
                            "key": "state-0099"
                          }
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0008"
              },
              "unlocked": true
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -30
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0119"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 5,
          "text": "Погибнуть",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0360"
              },
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-121",
      "title": "Мистерия Единения",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0061"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0364"
            },
            "statusGroup": {
              "key": "state-0129"
            },
            "status": {
              "key": "state-0314"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0364"
            },
            "statusGroup": {
              "key": "state-0129"
            },
            "status": {
              "key": "state-0136"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Провести Мистерию",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0085"
                        },
                        "statusGroup": {
                          "key": "state-0013"
                        },
                        "status": {
                          "key": "state-0309"
                        },
                        "not": true
                      },
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0085"
                        },
                        "operator": "<=",
                        "value": -2
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0059"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Самому пройти Мистерию",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "anyOf": [
                [
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0311"
                    },
                    "not": true
                  }
                ],
                [
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0212"
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0185"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Убить Уттера",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0096"
                  },
                  "not": true
                },
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0207"
                  }
                },
                {
                  "type": "status",
                  "character": {
                    "key": "state-0098"
                  },
                  "statusGroup": {
                    "key": "state-0150"
                  },
                  "status": {
                    "key": "state-0241"
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0085"
              },
              "statusGroup": {
                "key": "state-0013"
              },
              "status": {
                "key": "state-0243"
              }
            }
          ]
        },
        {
          "number": 4,
          "text": "Увести Уттера",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0364"
              },
              "statusGroup": {
                "key": "state-0129"
              },
              "status": {
                "key": "state-0314"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-122",
      "title": "Манифест",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0270"
              }
            }
          ],
          [
            {
              "type": "flag",
              "objective": {
                "key": "state-0327"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Обратиться к священникам",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Обратиться к людям",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Обратиться к аркнам",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
                "parameter": {
                  "key": "state-0226"
                }
              },
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 20
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Обратиться ко всем подданным",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0036"
                          },
                          "statusGroup": {
                            "key": "state-0193"
                          },
                          "status": {
                            "key": "state-0029"
                          }
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0327"
                          }
                        }
                      ]
                    }
                  }
                ],
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "flag",
                          "objective": {
                            "key": "state-0322"
                          }
                        }
                      ]
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        },
        {
          "number": 5,
          "text": "Обратиться к вассалам",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 3
            }
          ]
        },
        {
          "number": 6,
          "text": "Выбросить манифест",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-5-123",
      "title": "В Сенате",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Представить Кредо",
          "settings": {
            "applyCreedLoyalty": true
          },
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0212"
                  },
                  "not": true
                }
              ],
              "anyOf": [
                [
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0270"
                    }
                  }
                ],
                [
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0327"
                    }
                  }
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0088"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Провозгласить Диктатуру",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0204"
                  }
                },
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0361"
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0203"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 5
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -10
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
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Провозгласить Протекторат",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0040"
                  }
                },
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0361"
                  },
                  "not": true
                },
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0212"
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0127"
              },
              "unlocked": true
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 5
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -10
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
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -3
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Распустить Сенат",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0286"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 5,
          "text": "Передать власть Сенату",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0212"
                  },
                  "not": true
                },
                {
                  "type": "axis",
                  "bilateralParameter": {
                    "key": "state-0340"
                  },
                  "side": 1,
                  "operator": "<=",
                  "value": 7
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
              "type": "ending",
              "ending": {
                "key": "state-0024"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 6,
          "text": "Провозгласить себя Императором",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "status",
                  "character": {
                    "key": "state-0085"
                  },
                  "statusGroup": {
                    "key": "state-0013"
                  },
                  "status": {
                    "key": "state-0243"
                  }
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0297"
              },
              "unlocked": true
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
                "key": "state-0199"
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
              "value": -2
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
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -2
            }
          ]
        }
      ]
    }
  ]
});
