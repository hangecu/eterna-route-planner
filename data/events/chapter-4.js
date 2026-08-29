/**
 * События главы 4: выборы, условия и наблюдаемые последствия.
 * Записи расположены в порядке прохождения.
 */
"use strict";
globalThis.PLANNER_CHAPTERS ??= [];
globalThis.PLANNER_CHAPTERS.push({
  "number": 4,
  "id": "chapter-4",
  "title": "Глава IV. Кредо",
  "scenes": [
    {
      "id": "scene-4-1",
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
      "id": "scene-4-2",
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
      "id": "scene-4-3",
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
      "id": "scene-4-4",
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
      "id": "scene-4-5",
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
      "id": "scene-4-6",
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
      "id": "scene-4-7",
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
      "id": "scene-4-8",
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
      "id": "scene-4-9",
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
      "id": "scene-4-10",
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
      "id": "scene-4-11",
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
      "id": "scene-4-12",
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
      "id": "scene-4-13",
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
      "id": "scene-4-14",
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
      "id": "scene-4-15",
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
      "id": "scene-4-16",
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
      "id": "scene-4-17",
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
      "id": "scene-4-18",
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
      "id": "scene-4-19",
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
      "id": "scene-4-20",
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
      "id": "scene-4-21",
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
      "id": "scene-4-22",
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
      "id": "scene-4-23",
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
      "id": "scene-4-24",
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
      "id": "scene-4-25",
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
      "id": "scene-4-26",
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
      "id": "scene-4-27",
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
      "id": "scene-4-28",
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
      "id": "scene-4-29",
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
      "id": "scene-4-30",
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
      "id": "scene-4-31",
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
      "id": "scene-4-32",
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
      "id": "scene-4-33",
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
      "id": "scene-4-34",
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
      "id": "scene-4-35",
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
      "id": "scene-4-36",
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
      "id": "scene-4-37",
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
      "id": "scene-4-38",
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
      "id": "scene-4-39",
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
      "id": "scene-4-40",
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
      "id": "scene-4-41",
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
      "id": "scene-4-42",
      "title": "Безвластие",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": "<=",
            "value": 0
          }
        ]
      },
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
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-4-43",
      "title": "Раскол в Совете",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": "<=",
            "value": 2
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Диаманта",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Усмирить советников",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Объединить Совет",
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-4-44",
      "title": "Вертикаль власти",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": ">=",
            "value": 8
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Монрога",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
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
        },
        {
          "number": 2,
          "text": "Внести раскол в Совет",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Реформировать Совет",
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
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            }
          ]
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-4-45",
      "title": "Конец борьбы",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": ">=",
            "value": 10
          }
        ]
      },
      "effects": [
        {
          "type": "status",
          "character": {
            "key": "state-0252"
          },
          "statusGroup": {
            "key": "state-0355"
          },
          "status": {
            "key": "state-0102"
          }
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
          "type": "faction",
          "estate": {
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": 2
        }
      ],
      "recurring": true
    },
    {
      "id": "scene-4-46",
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
      "id": "scene-4-47",
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
      "id": "scene-4-48",
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
      "id": "scene-4-49",
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
      "id": "scene-4-50",
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
      "id": "scene-4-51",
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
      "id": "scene-4-52",
      "title": "Прощание с Гаем",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Отправить легион Гермии",
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
                          "key": "state-0080"
                        },
                        "statusGroup": {
                          "key": "state-0214"
                        },
                        "status": {
                          "key": "state-0042"
                        }
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
                "key": "state-0172"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0118"
              },
              "status": {
                "key": "state-0312"
              }
            },
            {
              "type": "character",
              "character": {
                "key": "state-0070"
              },
              "value": -1
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
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отказать Гаю",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0172"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Надавить на Совет",
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
              "type": "character",
              "character": {
                "key": "state-0172"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0118"
              },
              "status": {
                "key": "state-0312"
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
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-53",
      "title": "Обвинение Юния Диаманта",
      "type": "text",
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
            "key": "state-0175"
          },
          "value": 1
        }
      ]
    },
    {
      "id": "scene-4-54",
      "title": "Братоубийство",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Аппия",
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
                "key": "state-0230"
              },
              "side": 1,
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
          "text": "Отвергнуть Аппия",
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
          "text": "Защитить Диона",
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
                "key": "state-0208"
              },
              "statusGroup": {
                "key": "state-0320"
              },
              "status": {
                "key": "state-0250"
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
      "id": "scene-4-55",
      "title": "Аркнийское единство",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Монрога",
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
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать Оргрифа",
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
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Поддержать Диаманта",
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
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-56",
      "title": "Золотая клетка",
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
              "key": "state-0346"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отпустить Агату",
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
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0285"
              },
              "value": 1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Уничтожить Агату",
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
              "type": "character",
              "character": {
                "key": "state-0285"
              },
              "value": -3,
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0346"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-57",
      "title": "Права и привилегии",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            },
            "not": true
          },
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Принять дары",
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0334"
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
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Принять дары и подавить возмущения",
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
                      "key": "state-0036"
                    },
                    "statusGroup": {
                      "key": "state-0193"
                    },
                    "status": {
                      "key": "state-0046"
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
                      "key": "state-0260"
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
                "key": "state-0334"
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
              "value": 2
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
          "text": "Наказать аркнов",
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0166"
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
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Переложить ответственность",
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
                          "key": "state-0252"
                        },
                        "statusGroup": {
                          "key": "state-0351"
                        },
                        "status": {
                          "key": "state-0273"
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
                "key": "state-0166"
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
                "key": "state-0357"
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
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-58",
      "title": "Негласный комитет",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Заключить союз",
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
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Предложить компромисс",
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
                "key": "state-0190"
              }
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
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Отказать Аркрайту",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Арестовать Аркрайта",
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
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0109"
              },
              "status": {
                "key": "state-0174"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": -2
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
                "key": "state-0251"
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-59",
      "title": "Преторианская гвардия",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Возглавить гвардию лично",
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
                          "type": "status",
                          "character": {
                            "key": "state-0252"
                          },
                          "statusGroup": {
                            "key": "state-0351"
                          },
                          "status": {
                            "key": "state-0273"
                          }
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
                          "key": "state-0340"
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
                "key": "state-0252"
              },
              "statusGroup": {
                "key": "state-0280"
              },
              "status": {
                "key": "state-0169"
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
                "key": "state-0251"
              },
              "side": 1,
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
          "number": 2,
          "text": "Дать согласие",
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0280"
              },
              "status": {
                "key": "state-0169"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Отказать",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Обвинить Монрога",
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
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
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
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-60",
      "title": "Тверже алмаза",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Примирить дуэлянтов",
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
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": 1
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать Лукулла",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0070"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0217"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Поддержать Диаманта",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0070"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0217"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Не вмешиваться",
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
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-61",
      "title": "Отсеченная ветвь",
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
              "key": "state-0250"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Принять Диона",
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
                "key": "state-0226"
              },
              "value": 10
            }
          ]
        },
        {
          "number": 2,
          "text": "Отринуть Диона",
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
          "text": "Уничтожить отверженных",
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
              "value": -5
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-63",
      "title": "Ночь предков",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять маску Эрика Святого",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0291"
              },
              "value": 1
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
          "number": 2,
          "text": "Принять маску Джериана Первого",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0291"
              },
              "value": 1
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
          "text": "Пренебречь традицией",
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
              "type": "character",
              "character": {
                "key": "state-0291"
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-64",
      "title": "Слово Понтифика",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Юния",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
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
              "value": -3
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
          "number": 2,
          "text": "Согласиться с Оргрифом",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0057"
              },
              "status": {
                "key": "state-0015"
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
              "value": -3
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
        }
      ]
    },
    {
      "id": "scene-4-66",
      "title": "Статья «О вероисповедании»",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Догмат Старой Веры",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0246"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Равенство двух Церквей",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0070"
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
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0070"
                          },
                          "operator": ">=",
                          "value": 2
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
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0246"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Свобода вероисповедания",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0217"
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
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0217"
                          },
                          "operator": ">=",
                          "value": 2
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
                          "type": "relation",
                          "character": {
                            "key": "state-0298"
                          },
                          "operator": ">=",
                          "value": 1
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
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0246"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0246"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-67",
      "title": "Выбор проекта",
      "type": "annual-project",
      "choiceSystem": "annualProjects"
    },
    {
      "id": "scene-4-68",
      "title": "Панихида",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
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
                "key": "state-0046"
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
                "key": "state-0260"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отнести в крипту",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0064"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
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
              }
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
            }
          ]
        },
        {
          "number": 2,
          "text": "Оставить себе",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0036"
                        },
                        "operator": ">=",
                        "value": 3
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
                "key": "state-0226"
              },
              "value": 5
            },
            {
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": 1,
              "status": {
                "key": "state-0138"
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
                "key": "state-0053"
              }
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Разбить",
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
                            "key": "state-0074"
                          },
                          "side": 1,
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
                          "type": "relation",
                          "character": {
                            "key": "state-0064"
                          },
                          "operator": ">=",
                          "value": 3
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
                          "operator": "<=",
                          "value": -1
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
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0064"
              },
              "value": 1,
              "status": {
                "key": "state-0138"
              }
            },
            {
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": -1,
              "status": {
                "key": "state-0138"
              }
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-69",
      "title": "Сделка",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0137"
            },
            "statusGroup": {
              "key": "state-0109"
            },
            "status": {
              "key": "state-0174"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Дать слово",
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
                "key": "state-0190"
              }
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
          "number": 2,
          "text": "Начать реформы",
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Покинуть прием",
          "effects": [
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
          "text": "Задержать Аркрайта",
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
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0109"
              },
              "status": {
                "key": "state-0174"
              }
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
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0217"
              },
              "value": -1,
              "status": {
                "key": "state-0190"
              }
            },
            {
              "type": "character",
              "character": {
                "key": "state-0112"
              },
              "value": 1,
              "status": {
                "key": "state-0190"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-70",
      "title": "Орден Крови",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Принять предложение",
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
                "key": "state-0122"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
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
                "key": "state-0240"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Связать Орден законом",
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
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Запретить Орден",
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
                "key": "state-0323"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Арестовать Сеяна",
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
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0231"
              },
              "status": {
                "key": "state-0051"
              }
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
                "key": "state-0240"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-71",
      "title": "Тени древних богов",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Оргрифа",
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
              "type": "character",
              "character": {
                "key": "state-0364"
              },
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
              "value": 1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать Миланида",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": -1
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
              "value": -1
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Ограничить Церковь",
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
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": -1
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
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-72",
      "title": "Ночная прогулка",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0372"
            },
            "operator": ">=",
            "value": 2
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Раствориться в страстях",
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
                            "key": "state-0372"
                          },
                          "operator": ">=",
                          "value": 3
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
                          "operator": "<=",
                          "value": 7
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
                "key": "state-0074"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0372"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Сломить волю хозяйки",
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
                            "key": "state-0372"
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
                            "key": "state-0340"
                          },
                          "side": 0,
                          "operator": ">=",
                          "value": 6
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
              "side": 0,
              "value": 2
            },
            {
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0159"
              },
              "status": {
                "key": "state-0065"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Запретить салон",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": -1,
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
              "side": 1,
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
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-73",
      "title": "Проповедь",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0364"
            },
            "statusGroup": {
              "key": "state-0057"
            },
            "status": {
              "key": "state-0015"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Надеть маску Младшего",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0129"
              },
              "status": {
                "key": "state-0125"
              }
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
        },
        {
          "number": 2,
          "text": "Отказаться",
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
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-74",
      "title": "Исповедь",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
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
      },
      "choices": [
        {
          "number": 1,
          "text": "Обнять Юния",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 3
            },
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0227"
              },
              "status": {
                "key": "state-0124"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Отвергнуть Юния",
          "effects": [
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
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -2
            },
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0227"
              },
              "status": {
                "key": "state-0223"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-75",
      "title": "Народный Трибун",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Помиловать только людей",
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
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0298"
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
                "key": "state-0251"
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Помиловать аркнов и грешников",
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
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0298"
              },
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
          "number": 3,
          "text": "Помиловать аркнов и смутьянов",
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
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0298"
              },
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
          "number": 4,
          "text": "Помиловать только аркнов",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0298"
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
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-76",
      "title": "Статья «О правах аркнов»",
      "type": "scene",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Неподсудность аркнов",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0115"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0256"
              },
              "status": {
                "key": "state-0228"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Аркнийские привилегии",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0364"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0364"
                          },
                          "operator": ">=",
                          "value": 2
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
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0115"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0256"
              },
              "status": {
                "key": "state-0228"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Равенство перед законом",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0364"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0298"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0364"
                          },
                          "operator": ">=",
                          "value": 2
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
                          "type": "relation",
                          "character": {
                            "key": "state-0298"
                          },
                          "operator": ">=",
                          "value": 2
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
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0115"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0115"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0256"
              },
              "status": {
                "key": "state-0228"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-77",
      "title": "Статья «О правах аркнов»",
      "type": "scene",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Неподсудность аркнов",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0115"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Аркнийские привилегии",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0364"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0364"
                          },
                          "operator": ">=",
                          "value": 2
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
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0115"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0184"
              },
              "status": {
                "key": "state-0086"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Равенство перед законом",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0364"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0298"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0364"
                          },
                          "operator": ">=",
                          "value": 2
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
                          "type": "relation",
                          "character": {
                            "key": "state-0298"
                          },
                          "operator": ">=",
                          "value": 2
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
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0115"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0184"
              },
              "status": {
                "key": "state-0086"
              }
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0115"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-78",
      "title": "Выбор проекта",
      "type": "annual-project",
      "choiceSystem": "annualProjects"
    },
    {
      "id": "scene-4-79",
      "title": "Тучи сгущаются",
      "type": "text",
      "effects": [
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
      "id": "scene-4-80",
      "title": "Мятущийся дух",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Оргрифа",
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
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0064"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать Флавия",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
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
              "type": "relation",
              "character": {
                "key": "state-0064"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
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
          "text": "Уйти",
          "effects": [
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
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-81",
      "title": "Союз двух сердец",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Примаса",
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
                "key": "state-0340"
              },
              "side": 1,
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 10
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0085"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отвернуться от Примаса",
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
          "number": 3,
          "text": "Отвергнуть обоих",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
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
                "key": "state-0226"
              },
              "value": -5
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-82",
      "title": "Жертвуя пешкой",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0275"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Защитить Фердинанда",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0191"
              }
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
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Изгнать Фердинанда",
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
                    "type": "flag",
                    "objective": {
                      "key": "state-0096"
                    }
                  }
                ],
                [
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0023"
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
                "key": "state-0045"
              },
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0043"
              }
            },
            {
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0027"
              },
              "status": {
                "key": "state-0106"
              }
            },
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
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Пожертвовать Фердинандом",
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
                "key": "state-0045"
              },
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0043"
              }
            },
            {
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0027"
              },
              "status": {
                "key": "state-0100"
              }
            },
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
      ]
    },
    {
      "id": "scene-4-83",
      "title": "Внезапный аудит",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Лукрецию",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать Миланида",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Провести ревизию лично",
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
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0112"
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
          "number": 4,
          "text": "Доверить проверку Канцлеру",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0252"
                        },
                        "operator": ">=",
                        "value": 3
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
                "key": "state-0058"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-84",
      "title": "Орден Святых Воителей",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Казнить Бернара",
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
                "key": "state-0356"
              },
              "statusGroup": {
                "key": "state-0147"
              },
              "status": {
                "key": "state-0140"
              }
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
              "value": -4
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Поменять магистра",
          "effects": [
            {
              "type": "status",
              "character": {
                "key": "state-0356"
              },
              "statusGroup": {
                "key": "state-0147"
              },
              "status": {
                "key": "state-0321"
              }
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
                "key": "state-0120"
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
              "value": -2
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
                "key": "state-0157"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Признать Бернара магистром",
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
              "type": "status",
              "character": {
                "key": "state-0356"
              },
              "statusGroup": {
                "key": "state-0147"
              },
              "status": {
                "key": "state-0341"
              }
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
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-85",
      "title": "Опасные связи",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0033"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Сервилию",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0085"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0013"
              },
              "status": {
                "key": "state-0152"
              }
            },
            {
              "type": "character",
              "character": {
                "key": "state-0298"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0353"
              },
              "status": {
                "key": "state-0302"
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
              "type": "faction",
              "estate": {
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Сослать Сервилию",
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
                    "type": "flag",
                    "objective": {
                      "key": "state-0096"
                    }
                  }
                ],
                [
                  {
                    "type": "flag",
                    "objective": {
                      "key": "state-0023"
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
                "key": "state-0085"
              },
              "statusGroup": {
                "key": "state-0013"
              },
              "status": {
                "key": "state-0309"
              }
            },
            {
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0192"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
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
          "text": "Уничтожить Сервилию",
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
                "key": "state-0085"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0013"
              },
              "status": {
                "key": "state-0309"
              }
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
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-86",
      "title": "Ночные визиты",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0285"
            },
            "operator": ">=",
            "value": 2
          },
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
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поцеловать Агату",
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
                            "key": "state-0285"
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
                            "key": "state-0230"
                          },
                          "side": 0,
                          "operator": ">=",
                          "value": 6
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
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
            },
            {
              "type": "character",
              "character": {
                "key": "state-0285"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Обработать язвы Агаты",
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
                            "key": "state-0285"
                          },
                          "operator": ">=",
                          "value": 3
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
                          "operator": "<=",
                          "value": 7
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
                "key": "state-0074"
              },
              "side": 0,
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0285"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Немедленно уйти",
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
              "value": 5
            },
            {
              "type": "character",
              "character": {
                "key": "state-0285"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0346"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-87",
      "title": "Печать Императора",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Соблюсти традицию",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0070"
              },
              "value": -1
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
          "text": "Передать печать Монрогу",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0070"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Забрать печать себе",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0085"
                        },
                        "operator": ">=",
                        "value": 3
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0085"
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
      "id": "scene-4-88",
      "title": "Дворянский Удел",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "status",
              "character": {
                "key": "state-0005"
              },
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0161"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0224"
              },
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0305"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Запретить салон",
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
                "key": "state-0325"
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
                "key": "state-0083"
              }
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
          "text": "Остаться в салоне",
          "effects": [
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Возвысить салон",
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
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0047"
              },
              "status": {
                "key": "state-0077"
              }
            },
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0239"
              },
              "status": {
                "key": "state-0331"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0064"
              },
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
      "id": "scene-4-89",
      "title": "Слово чести",
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
              "key": "state-0066"
            },
            "status": {
              "key": "state-0034"
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
              "key": "state-0283"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Освободить друзей",
          "effects": [
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
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
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
          "text": "Принудить друзей",
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
              "type": "status",
              "character": {
                "key": "state-0005"
              },
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0325"
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
                "key": "state-0083"
              }
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
          "text": "Оставить друзей",
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
                "key": "state-0234"
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
                "key": "state-0025"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
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
              "type": "faction",
              "estate": {
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-90",
      "title": "Статья «О правах людей»",
      "type": "scene",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Запрет людского дворянства",
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
              "type": "article",
              "article": {
                "key": "state-0287"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0256"
              },
              "status": {
                "key": "state-0228"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Сохранение людского дворянства",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0287"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0256"
              },
              "status": {
                "key": "state-0228"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Право на власть всех сословий",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0217"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                },
                {
                  "type": "article",
                  "article": {
                    "key": "state-0246"
                  },
                  "value": 1,
                  "not": true
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
                          "type": "relation",
                          "character": {
                            "key": "state-0217"
                          },
                          "operator": ">=",
                          "value": 2
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
              "type": "article",
              "article": {
                "key": "state-0287"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0287"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0256"
              },
              "status": {
                "key": "state-0228"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-91",
      "title": "Статья «О правах людей»",
      "type": "scene",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Запрет людского дворянства",
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
              "type": "article",
              "article": {
                "key": "state-0287"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Сохранение людского дворянства",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0287"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0184"
              },
              "status": {
                "key": "state-0086"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Право на власть всех сословий",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0217"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                },
                {
                  "type": "article",
                  "article": {
                    "key": "state-0246"
                  },
                  "value": 1,
                  "not": true
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
                          "type": "relation",
                          "character": {
                            "key": "state-0217"
                          },
                          "operator": ">=",
                          "value": 2
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
              "type": "article",
              "article": {
                "key": "state-0287"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0184"
              },
              "status": {
                "key": "state-0086"
              }
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0287"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0184"
              },
              "status": {
                "key": "state-0086"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-92",
      "title": "Выбор проекта",
      "type": "annual-project",
      "choiceSystem": "annualProjects"
    },
    {
      "id": "scene-4-94",
      "title": "Столичный легат",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            }
          },
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
      "choices": [
        {
          "number": 1,
          "text": "Назначить Гюнтера Легатом",
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
              "type": "status",
              "character": {
                "key": "state-0225"
              },
              "statusGroup": {
                "key": "state-0145"
              },
              "status": {
                "key": "state-0211"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
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
                "key": "state-0251"
              },
              "side": 0,
              "value": 1
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
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Вернуть Гюнтеру звание",
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
                "key": "state-0120"
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
              "value": -1
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
          "text": "Отказать в прошении",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
              "value": 1
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
          "number": 4,
          "text": "Разорвать союз с людьми",
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
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0109"
              },
              "status": {
                "key": "state-0174"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0070"
              },
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
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-95",
      "title": "Гидра революции",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отправить Преторианцев",
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
                          "key": "state-0252"
                        },
                        "statusGroup": {
                          "key": "state-0280"
                        },
                        "status": {
                          "key": "state-0169"
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
              "value": -2
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отправить Орден Крови",
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
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0122"
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
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0231"
              },
              "status": {
                "key": "state-0187"
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "value": 2
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
        },
        {
          "number": 3,
          "text": "Пойти на уступки",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Пожертвовать агентами",
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
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
        }
      ]
    },
    {
      "id": "transition-4-1",
      "title": "Автоматическое изменение",
      "type": "transition",
      "effects": [
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
      "id": "scene-4-97",
      "title": "Цена грез",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0113"
            }
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
      },
      "choices": [
        {
          "number": 1,
          "text": "Восстановить верфь в Магре",
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
                "key": "state-0294"
              },
              "statusGroup": {
                "key": "state-0027"
              },
              "status": {
                "key": "state-0116"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0172"
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
                "key": "state-0240"
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
            }
          ]
        },
        {
          "number": 2,
          "text": "Построить верфь в Элирии",
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
                        "type": "flag",
                        "objective": {
                          "key": "state-0096"
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
                "key": "state-0294"
              },
              "statusGroup": {
                "key": "state-0027"
              },
              "status": {
                "key": "state-0116"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": 1
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
              "value": -1
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
          "number": 3,
          "text": "Отказать Фердинанду",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0027"
              },
              "status": {
                "key": "state-0072"
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
              "type": "relation",
              "character": {
                "key": "state-0172"
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-98",
      "title": "Клубок змей",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Защитить Флавия",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -2
            },
            {
              "type": "character",
              "character": {
                "key": "state-0064"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0220"
              }
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
        },
        {
          "number": 2,
          "text": "Уладить конфликт",
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
                          "key": "state-0226"
                        },
                        "operator": ">=",
                        "value": 10
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
                          "operator": "<=",
                          "value": 2
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
                          "operator": "<=",
                          "value": 7
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
                "key": "state-0226"
              },
              "value": -10
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0064"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Наказать Флавия",
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
                          "operator": "<=",
                          "value": 1
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
                ]
              ]
            }
          ],
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0064"
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
            }
          ]
        },
        {
          "number": 4,
          "text": "Довериться Флавию",
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
                      "key": "state-0064"
                    },
                    "statusGroup": {
                      "key": "state-0143"
                    },
                    "status": {
                      "key": "state-0002"
                    }
                  }
                ],
                [
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
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0064"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0143"
              },
              "status": {
                "key": "state-0220"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-99",
      "title": "Песчаная буря",
      "type": "hidden",
      "choices": [
        {
          "number": 1,
          "text": "Защитить Камиллу",
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
                          "key": "state-0274"
                        },
                        "not": true
                      },
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0372"
                        },
                        "operator": ">=",
                        "value": 2
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
              "anyOf": [
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
                            "key": "state-0159"
                          },
                          "status": {
                            "key": "state-0065"
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
              ]
            }
          ],
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0259"
              },
              "status": {
                "key": "state-0104"
              }
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0172"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0095"
              },
              "status": {
                "key": "state-0229"
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
          "text": "Помирить",
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
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0259"
              },
              "status": {
                "key": "state-0274"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0172"
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
          "text": "Не вмешиваться",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0259"
              },
              "status": {
                "key": "state-0274"
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
      "id": "scene-4-100",
      "title": "Гроздья гнева",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            }
          },
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
          },
          {
            "type": "status",
            "character": {
              "key": "state-0137"
            },
            "statusGroup": {
              "key": "state-0256"
            },
            "status": {
              "key": "state-0228"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Арестовать эль Круа",
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
                          "key": "state-0225"
                        },
                        "statusGroup": {
                          "key": "state-0145"
                        },
                        "status": {
                          "key": "state-0211"
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
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0109"
              },
              "status": {
                "key": "state-0174"
              }
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
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
          "text": "Арестовать Аркрайта",
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
                          "key": "state-0225"
                        },
                        "statusGroup": {
                          "key": "state-0145"
                        },
                        "status": {
                          "key": "state-0211"
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
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0109"
              },
              "status": {
                "key": "state-0174"
              }
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
                "key": "state-0251"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Остановить мятеж",
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
                          "key": "state-0225"
                        },
                        "statusGroup": {
                          "key": "state-0145"
                        },
                        "status": {
                          "key": "state-0211"
                        }
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
              "type": "status",
              "character": {
                "key": "state-0137"
              },
              "statusGroup": {
                "key": "state-0109"
              },
              "status": {
                "key": "state-0174"
              }
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
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Принять последствия",
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
                "key": "state-0300"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0225"
              },
              "statusGroup": {
                "key": "state-0145"
              },
              "status": {
                "key": "state-0318"
              }
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
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
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-102",
      "title": "Жатва",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          },
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
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0111"
            },
            "statusGroup": {
              "key": "state-0184"
            },
            "status": {
              "key": "state-0086"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Казнить Сеяна",
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
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0187"
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
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0122"
                        }
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
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "status",
                          "character": {
                            "key": "state-0111"
                          },
                          "statusGroup": {
                            "key": "state-0231"
                          },
                          "status": {
                            "key": "state-0323"
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
            }
          ]
        },
        {
          "number": 2,
          "text": "Уничтожить Орден Крови",
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
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0187"
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
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0323"
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
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Заточить Сеяна",
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
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0187"
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
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0231"
              },
              "status": {
                "key": "state-0051"
              }
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
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-104",
      "title": "Круг Ла-Тари",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Гирра",
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 1,
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
          "text": "Отвергнуть обоих",
          "effects": [
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
          "text": "Принять Ла-Тари",
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
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0074"
              },
              "side": 0,
              "value": 3
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
      "id": "scene-4-105",
      "title": "Трибунал",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Лишить Юния привилегий",
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
                        "type": "status",
                        "character": {
                          "key": "state-0356"
                        },
                        "statusGroup": {
                          "key": "state-0147"
                        },
                        "status": {
                          "key": "state-0341"
                        },
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
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0253"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
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
              "value": -4
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
          "text": "Свидетельствовать против Юния",
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
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0021"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
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
              "value": -6
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
        },
        {
          "number": 3,
          "text": "Отказать обоим",
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
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Помиловать нововеров",
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
                "locked": true
              },
              "conditions": [
                {
                  "type": "status",
                  "character": {
                    "key": "state-0364"
                  },
                  "statusGroup": {
                    "key": "state-0057"
                  },
                  "status": {
                    "key": "state-0015"
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
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0048"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
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
              "type": "faction",
              "estate": {
                "key": "state-0003"
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-106",
      "title": "Муки совести",
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
              "key": "state-0346"
            },
            "not": true
          },
          {
            "type": "relation",
            "character": {
              "key": "state-0285"
            },
            "operator": ">=",
            "value": 2
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Выбрать любовь",
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
                          "type": "status",
                          "character": {
                            "key": "state-0285"
                          },
                          "statusGroup": {
                            "key": "state-0130"
                          },
                          "status": {
                            "key": "state-0306"
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
              "type": "character",
              "character": {
                "key": "state-0285"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0301"
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
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отвергнуть любовь",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0285"
              },
              "value": -1,
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
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-107",
      "title": "Великая Любовь",
      "type": "hidden",
      "appearance": {
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
              "key": "state-0309"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать отца",
          "settings": {
            "showRewardsAsEndingPopup": true
          },
          "effects": [
            {
              "type": "ending",
              "ending": {
                "key": "state-0055"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Помешать отцу",
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
                          "type": "flag",
                          "objective": {
                            "key": "state-0131"
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-108",
      "title": "Статья «О форме правления»",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "article",
            "article": {
              "key": "state-0287"
            },
            "value": 1,
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Абсолютная монархия",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0112"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0070"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0070"
                          },
                          "operator": ">=",
                          "value": 2
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
                          "type": "relation",
                          "character": {
                            "key": "state-0112"
                          },
                          "operator": ">=",
                          "value": 2
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
              "type": "article",
              "article": {
                "key": "state-0354"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0252"
              },
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Ограниченная монархия",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0354"
              },
              "value": 2
            }
          ]
        },
        {
          "number": 3,
          "text": "Республика",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0252"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0252"
                          },
                          "operator": ">=",
                          "value": 2
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
              "type": "article",
              "article": {
                "key": "state-0354"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0354"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-109",
      "title": "Статья «О форме правления»",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "article",
            "article": {
              "key": "state-0287"
            },
            "value": 1
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Абсолютная монархия",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0070"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0112"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0070"
                          },
                          "operator": ">=",
                          "value": 2
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
                          "type": "relation",
                          "character": {
                            "key": "state-0112"
                          },
                          "operator": ">=",
                          "value": 2
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
              "type": "article",
              "article": {
                "key": "state-0354"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0252"
              },
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Ограниченная монархия",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0354"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Республика",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0217"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0217"
                          },
                          "operator": ">=",
                          "value": 2
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
              "type": "article",
              "article": {
                "key": "state-0354"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0354"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-110",
      "title": "Выбор проекта",
      "type": "annual-project",
      "choiceSystem": "annualProjects"
    },
    {
      "id": "scene-4-111",
      "title": "Кровь на пороге",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0225"
            },
            "statusGroup": {
              "key": "state-0145"
            },
            "status": {
              "key": "state-0211"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Казнить Аркрайта",
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
            },
            {
              "type": "status",
              "character": {
                "key": "state-0225"
              },
              "statusGroup": {
                "key": "state-0145"
              },
              "status": {
                "key": "state-0056"
              }
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
          "text": "Порвать с союзниками",
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
                "key": "state-0300"
              }
            },
            {
              "type": "status",
              "character": {
                "key": "state-0225"
              },
              "statusGroup": {
                "key": "state-0145"
              },
              "status": {
                "key": "state-0318"
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Спасти Аркрайта",
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
              "type": "status",
              "character": {
                "key": "state-0225"
              },
              "statusGroup": {
                "key": "state-0145"
              },
              "status": {
                "key": "state-0318"
              }
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
          "number": 4,
          "text": "Арестовать эль Круа",
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
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-112",
      "title": "Без свидетелей",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          },
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
            },
            "not": true
          },
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
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0111"
            },
            "statusGroup": {
              "key": "state-0231"
            },
            "status": {
              "key": "state-0323"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Принять предложение",
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
                "key": "state-0073"
              }
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
          "text": "Прогнать Сеяна",
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
                "key": "state-0012"
              }
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
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Распустить Орден Крови",
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
                        "type": "status",
                        "character": {
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0187"
                        },
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
                        "type": "status",
                        "character": {
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0122"
                        },
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
                "key": "state-0111"
              },
              "statusGroup": {
                "key": "state-0231"
              },
              "status": {
                "key": "state-0323"
              }
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
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Уничтожить Орден Крови",
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
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0187"
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
              "conditions": [
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "status",
                        "character": {
                          "key": "state-0111"
                        },
                        "statusGroup": {
                          "key": "state-0231"
                        },
                        "status": {
                          "key": "state-0122"
                        },
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
                "key": "state-0157"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-113",
      "title": "Откровенный разговор",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Да",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0310"
              },
              "status": {
                "key": "state-0101"
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
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
            }
          ]
        },
        {
          "number": 2,
          "text": "Нет",
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
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0310"
              },
              "status": {
                "key": "state-0269"
              }
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Ты уже дал ответ",
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
                          "key": "state-0291"
                        },
                        "statusGroup": {
                          "key": "state-0310"
                        },
                        "status": {
                          "key": "state-0269"
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
              "type": "relation",
              "character": {
                "key": "state-0291"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-114",
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
      "id": "scene-4-115",
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
      "id": "scene-4-116",
      "title": "Статья «О Доме Темпест»",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
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
      },
      "choices": [
        {
          "number": 1,
          "text": "Наследуемая власть Темпестов",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0070"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0070"
                          },
                          "operator": ">=",
                          "value": 2
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
                        "type": "stat",
                        "parameter": {
                          "key": "state-0221"
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
              "type": "article",
              "article": {
                "key": "state-0267"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Великий дом Темпест",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0267"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Отречение Темпестов",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0070"
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
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0070"
                          },
                          "operator": ">=",
                          "value": 2
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
              "type": "article",
              "article": {
                "key": "state-0267"
              },
              "value": 3
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0267"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-117",
      "title": "Статья «О Великом Кворуме»",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "article",
            "article": {
              "key": "state-0354"
            },
            "value": 3
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Аркнийский Кворум",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0200"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Дворянский Кворум",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "article",
                  "article": {
                    "key": "state-0287"
                  },
                  "value": 1,
                  "not": true
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0112"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0112"
                          },
                          "operator": ">=",
                          "value": 2
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
                        "type": "stat",
                        "parameter": {
                          "key": "state-0221"
                        },
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
              "type": "article",
              "article": {
                "key": "state-0200"
              },
              "value": 2
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0252"
              },
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Всеобщий Кворум",
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
                        "type": "article",
                        "article": {
                          "key": "state-0287"
                        },
                        "value": 3
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0217"
                        },
                        "operator": ">=",
                        "value": 0
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "stat",
                        "parameter": {
                          "key": "state-0221"
                        },
                        "operator": ">=",
                        "value": 8
                      }
                    ]
                  },
                  "not": true
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
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "relation",
                          "character": {
                            "key": "state-0217"
                          },
                          "operator": ">=",
                          "value": 2
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
              "type": "article",
              "article": {
                "key": "state-0200"
              },
              "value": 3
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0298"
              },
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0252"
              },
              "statusGroup": {
                "key": "state-0324"
              },
              "status": {
                "key": "state-0163"
              }
            }
          ]
        },
        {
          "number": 4,
          "text": "Воздержаться",
          "effects": [
            {
              "type": "article",
              "article": {
                "key": "state-0200"
              },
              "value": 1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-118",
      "title": "Попытка к бегству",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0294"
            },
            "statusGroup": {
              "key": "state-0027"
            },
            "status": {
              "key": "state-0116"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Уплыть с Фердинандом",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0085"
                        },
                        "operator": "<=",
                        "value": 3
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0045"
                        },
                        "operator": "<=",
                        "value": 3
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0291"
                        },
                        "operator": "<=",
                        "value": 3
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0372"
                        },
                        "operator": "<=",
                        "value": 3
                      }
                    ]
                  }
                },
                {
                  "type": "block",
                  "block": {
                    "conditions": [
                      {
                        "type": "relation",
                        "character": {
                          "key": "state-0285"
                        },
                        "operator": "<=",
                        "value": 3
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
                "key": "state-0263"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Отпустить Фердинанда",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0027"
              },
              "status": {
                "key": "state-0266"
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
          "number": 3,
          "text": "Сжечь корабли",
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
                "key": "state-0294"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0027"
              },
              "status": {
                "key": "state-0106"
              }
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
        }
      ]
    },
    {
      "id": "scene-4-120",
      "title": "Новый порядок",
      "type": "text",
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
        ],
        "anyOf": [
          [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "operator": ">=",
              "value": 5
            }
          ],
          [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "operator": ">=",
              "value": 5
            }
          ],
          [
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
          "value": -1
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
      "id": "scene-4-121",
      "title": "Торжественная речь",
      "type": "text",
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
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 0,
            "operator": "<=",
            "value": 4
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 0,
            "operator": "<=",
            "value": 4
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 0,
            "operator": "<=",
            "value": 4
          }
        ]
      },
      "effects": [
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
            "key": "state-0003"
          },
          "estateParameter": 2,
          "value": 1
        }
      ]
    },
    {
      "id": "scene-4-122",
      "title": "Безрадостный праздник",
      "type": "text",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0166"
            }
          },
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
            },
            "not": true
          },
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
            },
            "not": true
          }
        ]
      },
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
          "value": -1
        },
        {
          "type": "faction",
          "estate": {
            "key": "state-0003"
          },
          "estateParameter": 2,
          "value": -1
        }
      ]
    },
    {
      "id": "scene-4-123",
      "title": "Надежда аркнов",
      "type": "text",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0111"
            },
            "statusGroup": {
              "key": "state-0231"
            },
            "status": {
              "key": "state-0073"
            },
            "not": true
          },
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
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "operator": ">=",
            "value": 5
          },
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
          "value": -1
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
      "id": "scene-4-124",
      "title": "Чествование наследника",
      "type": "text",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0111"
            },
            "statusGroup": {
              "key": "state-0231"
            },
            "status": {
              "key": "state-0073"
            },
            "not": true
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0240"
            },
            "side": 1,
            "operator": ">=",
            "value": 0
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0357"
            },
            "side": 1,
            "operator": ">=",
            "value": 0
          },
          {
            "type": "axis",
            "bilateralParameter": {
              "key": "state-0251"
            },
            "side": 1,
            "operator": ">=",
            "value": 0
          }
        ],
        "anyOf": [
          [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 1,
              "operator": "<=",
              "value": 4
            }
          ],
          [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "operator": "<=",
              "value": 4
            }
          ],
          [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "operator": "<=",
              "value": 4
            }
          ]
        ]
      },
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
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": 1
        }
      ]
    },
    {
      "id": "scene-4-125",
      "title": "Урок для наследника",
      "type": "text",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0334"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0111"
            },
            "statusGroup": {
              "key": "state-0231"
            },
            "status": {
              "key": "state-0073"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0251"
              },
              "side": 0,
              "operator": ">=",
              "value": 1
            }
          ],
          [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "operator": ">=",
              "value": 1
            }
          ],
          [
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
        ]
      },
      "effects": [
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
            "key": "state-0218"
          },
          "estateParameter": 2,
          "value": -1
        }
      ]
    },
    {
      "id": "scene-4-126",
      "title": "Предчувствие финала",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Кредо должно погибнуть",
          "effects": [
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
          "text": "Кредо – это компромисс",
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
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Кредо – это идеал",
          "effects": [
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
      ]
    },
    {
      "id": "scene-4-127",
      "title": "Острие копья",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
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
              "key": "state-0043"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Принять присягу",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0076"
              }
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
          "number": 2,
          "text": "Отвергнуть Орден",
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
                          "type": "flag",
                          "objective": {
                            "key": "state-0023"
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
                "key": "state-0191"
              }
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
      ]
    },
    {
      "id": "scene-4-128",
      "title": "Признание Новой Веры",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0176"
            },
            "statusGroup": {
              "key": "state-0038"
            },
            "status": {
              "key": "state-0253"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0176"
            },
            "statusGroup": {
              "key": "state-0038"
            },
            "status": {
              "key": "state-0021"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0366"
          },
          "unlocked": true
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
          "value": 3
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
          "value": 1
        },
        {
          "type": "status",
          "character": {
            "key": "state-0176"
          },
          "statusGroup": {
            "key": "state-0038"
          },
          "status": {
            "key": "state-0048"
          }
        }
      ]
    },
    {
      "id": "scene-4-129",
      "title": "Крушение Новой Веры",
      "type": "text",
      "appearance": {
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0356"
            },
            "statusGroup": {
              "key": "state-0147"
            },
            "status": {
              "key": "state-0341"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0253"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0021"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0307"
          },
          "unlocked": true
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
          "value": 3
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
          "side": 1,
          "value": 1
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
      "id": "scene-4-130",
      "title": "Религиозная война",
      "type": "text",
      "appearance": {
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0356"
            },
            "statusGroup": {
              "key": "state-0147"
            },
            "status": {
              "key": "state-0341"
            }
          }
        ],
        "anyOf": [
          [
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0253"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0021"
              }
            }
          ]
        ]
      },
      "effects": [
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
      "id": "scene-4-131",
      "title": "Свадьба",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Жениться на Лукреции",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0291"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0310"
              },
              "status": {
                "key": "state-0329"
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
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Выбрать Агату",
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
                          "key": "state-0291"
                        },
                        "statusGroup": {
                          "key": "state-0310"
                        },
                        "status": {
                          "key": "state-0269"
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
                          "key": "state-0301"
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
              "type": "character",
              "character": {
                "key": "state-0285"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0281"
              },
              "status": {
                "key": "state-0168"
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
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Выбрать Камиллу",
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
                          "key": "state-0291"
                        },
                        "statusGroup": {
                          "key": "state-0310"
                        },
                        "status": {
                          "key": "state-0269"
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
                          "key": "state-0372"
                        },
                        "statusGroup": {
                          "key": "state-0259"
                        },
                        "status": {
                          "key": "state-0104"
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
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0259"
              },
              "status": {
                "key": "state-0146"
              }
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
                "key": "state-0340"
              },
              "side": 0,
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-132",
      "title": "Жертвоприношение",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0176"
            },
            "statusGroup": {
              "key": "state-0227"
            },
            "status": {
              "key": "state-0124"
            }
          },
          {
            "type": "status",
            "character": {
              "key": "state-0176"
            },
            "statusGroup": {
              "key": "state-0038"
            },
            "status": {
              "key": "state-0048"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Проповедовать о Любви",
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
                          "key": "state-0131"
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
                "key": "state-0061"
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
          "number": 2,
          "text": "Бросить вызов Закону",
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
                          "key": "state-0288"
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
                "key": "state-0061"
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
                "key": "state-0003"
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
          "text": "Отказаться",
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
                "key": "state-0223"
              }
            },
            {
              "type": "faction",
              "estate": {
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-133",
      "title": "Воля Богов",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0253"
              }
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0038"
              },
              "status": {
                "key": "state-0021"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Явить Закон Младшего",
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
                          "key": "state-0288"
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
                "key": "state-0282"
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 1,
              "value": 2
            },
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0227"
              },
              "status": {
                "key": "state-0087"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Явить Любовь Старшего",
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
                          "key": "state-0131"
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
                "key": "state-0282"
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0357"
              },
              "side": 0,
              "value": 1
            },
            {
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0227"
              },
              "status": {
                "key": "state-0087"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Пресечь божественную Волю",
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
              "type": "flag",
              "objective": {
                "key": "state-0207"
              },
              "unlocked": true
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0364"
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
              "type": "status",
              "character": {
                "key": "state-0176"
              },
              "statusGroup": {
                "key": "state-0227"
              },
              "status": {
                "key": "state-0087"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-134",
      "title": "Удар",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0176"
            },
            "statusGroup": {
              "key": "state-0227"
            },
            "status": {
              "key": "state-0087"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Переубедить",
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
                "key": "state-0230"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Поставить на место",
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
                "key": "state-0074"
              },
              "side": 1,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Принести извинения",
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
                "key": "state-0217"
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
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-135",
      "title": "Великая жена",
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
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Ослабить Монрога",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -2
            }
          ]
        },
        {
          "number": 2,
          "text": "Укрепить Совет",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": 2
            }
          ]
        },
        {
          "number": 3,
          "text": "Усилить войска Темпестов",
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
          "number": 4,
          "text": "Напомнить о величии Темпестов",
          "effects": [
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
      "id": "scene-4-136",
      "title": "По воле Темпеста",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
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
              "key": "state-0076"
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
            "key": "state-0158"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0093"
          },
          "unlocked": true
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
            "key": "state-0114"
          }
        }
      ]
    },
    {
      "id": "scene-4-137",
      "title": "Диктатор",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0225"
            },
            "statusGroup": {
              "key": "state-0145"
            },
            "status": {
              "key": "state-0056"
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
              "key": "state-0076"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0111"
            },
            "statusGroup": {
              "key": "state-0231"
            },
            "status": {
              "key": "state-0073"
            },
            "not": true
          }
        ],
        "anyOf": [
          [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "operator": ">=",
              "value": 8
            }
          ],
          [
            {
              "type": "status",
              "character": {
                "key": "state-0252"
              },
              "statusGroup": {
                "key": "state-0355"
              },
              "status": {
                "key": "state-0102"
              }
            }
          ]
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0303"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0093"
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
        },
        {
          "type": "article",
          "article": {
            "key": "state-0246"
          },
          "value": 1
        },
        {
          "type": "article",
          "article": {
            "key": "state-0115"
          },
          "value": 1
        },
        {
          "type": "article",
          "article": {
            "key": "state-0287"
          },
          "value": 1
        },
        {
          "type": "article",
          "article": {
            "key": "state-0354"
          },
          "value": 3
        },
        {
          "type": "article",
          "article": {
            "key": "state-0200"
          },
          "value": 1
        }
      ]
    },
    {
      "id": "scene-4-138",
      "title": "Дракон вернулся",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0111"
            },
            "statusGroup": {
              "key": "state-0231"
            },
            "status": {
              "key": "state-0073"
            }
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
              "key": "state-0076"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Узурпировать власть",
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0204"
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
              "value": 2
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
          "text": "Остановить Сеяна",
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
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-139",
      "title": "Развал Совета",
      "type": "hidden-no-choice",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0225"
            },
            "statusGroup": {
              "key": "state-0145"
            },
            "status": {
              "key": "state-0056"
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
              "key": "state-0076"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0111"
            },
            "statusGroup": {
              "key": "state-0231"
            },
            "status": {
              "key": "state-0073"
            },
            "not": true
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": "<=",
            "value": 2
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0317"
          },
          "unlocked": true
        },
        {
          "type": "flag",
          "objective": {
            "key": "state-0093"
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
          "value": -2
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
            "key": "state-0114"
          }
        }
      ]
    },
    {
      "id": "scene-4-140",
      "title": "Ход офицера",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0225"
            },
            "statusGroup": {
              "key": "state-0145"
            },
            "status": {
              "key": "state-0056"
            }
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
              "key": "state-0076"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Узурпировать власть",
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0040"
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
                "key": "state-0251"
              },
              "side": 0,
              "value": 2
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
          "text": "Покинуть дворец",
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
              "type": "relation",
              "character": {
                "key": "state-0252"
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
              "type": "stat",
              "parameter": {
                "key": "state-0221"
              },
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "scene-4-141",
      "title": "Кредо Эгерия Монрога",
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
            },
            "not": true
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
              "key": "state-0158"
            },
            "not": true
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": ">=",
            "value": 3
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": "<=",
            "value": 7
          },
          {
            "type": "status",
            "character": {
              "key": "state-0252"
            },
            "statusGroup": {
              "key": "state-0355"
            },
            "status": {
              "key": "state-0102"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0252"
            },
            "statusGroup": {
              "key": "state-0324"
            },
            "status": {
              "key": "state-0163"
            },
            "not": true
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0327"
          },
          "unlocked": true
        }
      ]
    },
    {
      "id": "scene-4-142",
      "title": "Кредо Джериана Темпеста",
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
            },
            "not": true
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
              "key": "state-0158"
            },
            "not": true
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": ">=",
            "value": 3
          },
          {
            "type": "stat",
            "parameter": {
              "key": "state-0221"
            },
            "operator": "<=",
            "value": 7
          },
          {
            "type": "status",
            "character": {
              "key": "state-0252"
            },
            "statusGroup": {
              "key": "state-0355"
            },
            "status": {
              "key": "state-0102"
            },
            "not": true
          },
          {
            "type": "status",
            "character": {
              "key": "state-0252"
            },
            "statusGroup": {
              "key": "state-0324"
            },
            "status": {
              "key": "state-0163"
            }
          }
        ]
      },
      "effects": [
        {
          "type": "flag",
          "objective": {
            "key": "state-0270"
          },
          "unlocked": true
        }
      ]
    }
  ]
});
