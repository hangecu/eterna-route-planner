/**
 * События главы 3: выборы, условия и наблюдаемые последствия.
 * Записи расположены в порядке прохождения.
 */
"use strict";
globalThis.PLANNER_CHAPTERS ??= [];
globalThis.PLANNER_CHAPTERS.push({
  "number": 3,
  "id": "chapter-3",
  "title": "Глава III. Великий Цензор",
  "scenes": [
    {
      "id": "scene-3-1",
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
      "id": "scene-3-2",
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
      "id": "scene-3-3",
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
      "id": "scene-3-4",
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
      "id": "scene-3-5",
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
      "id": "scene-3-6",
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
      "id": "scene-3-7",
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
      "id": "scene-3-8",
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
      "id": "scene-3-9",
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
      "id": "scene-3-10",
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
      "id": "scene-3-11",
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
      "id": "scene-3-12",
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
      "id": "scene-3-13",
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
      "id": "scene-3-14",
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
      "id": "scene-3-15",
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
      "id": "scene-3-16",
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
      "id": "scene-3-17",
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
      "id": "scene-3-18",
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
      "id": "scene-3-19",
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
      "id": "scene-3-20",
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
      "id": "scene-3-21",
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
      "id": "scene-3-22",
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
      "id": "scene-3-23",
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
      "id": "scene-3-24",
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
      "id": "scene-3-25",
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
      "id": "scene-3-26",
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
      "id": "scene-3-27",
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
      "id": "scene-3-28",
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
      "id": "scene-3-29",
      "occurrenceKey": "loyalty-commoners-wrath",
      "onceKey": "loyalty-commoners-wrath",
      "locationVariant": "eterna",
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
      "id": "scene-3-30",
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
      "id": "scene-3-31",
      "occurrenceKey": "loyalty-worthy-arkns-wrath",
      "onceKey": "loyalty-worthy-arkns-wrath",
      "locationVariant": "eterna",
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
      "id": "scene-3-32",
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
      "id": "scene-3-33",
      "occurrenceKey": "loyalty-great-houses-wrath",
      "onceKey": "loyalty-great-houses-wrath",
      "locationVariant": "eterna",
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
      "id": "scene-3-34",
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
      "id": "scene-3-35",
      "occurrenceKey": "loyalty-human-nobility-wrath",
      "onceKey": "loyalty-human-nobility-wrath",
      "locationVariant": "eterna",
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
      "id": "scene-3-36",
      "occurrenceKey": "loyalty-old-faith-wrath",
      "onceKey": "loyalty-old-faith-wrath",
      "locationVariant": "eterna",
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
      "id": "scene-3-37",
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
      "id": "scene-3-38",
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
      "id": "scene-3-39",
      "occurrenceKey": "loyalty-new-faith-wrath",
      "onceKey": "loyalty-new-faith-wrath",
      "locationVariant": "eterna",
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
      "id": "scene-3-40",
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
      "id": "scene-3-41",
      "title": "Наследие Тарквиния",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Заплатить из казны",
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
              "value": 1
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
          "text": "Отказаться платить",
          "effects": [
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
                "key": "state-0062"
              },
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Взять деньги у нововеров",
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
              "value": 1
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
        }
      ]
    },
    {
      "id": "scene-3-42",
      "title": "Закон превыше Любви",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Приказать говорить",
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
                "key": "state-0074"
              },
              "side": 1,
              "value": -1
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
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Заставить сменить Удел",
          "effects": [
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
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
                "key": "state-0062"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Освободить пленника",
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
                "key": "state-0364"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-43",
      "title": "Триумвират",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Корнелия",
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
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": 1
            },
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
              "value": -1
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
          "number": 2,
          "text": "Поддержать Эгерия",
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
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
            },
            {
              "type": "relation",
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
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Компромисс",
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
                  },
                  "not": true
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
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
          "text": "Присвоить земли",
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
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
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
    {
      "id": "scene-3-45",
      "title": "Великий Цензор",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Отменить дотации",
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
              "type": "relation",
              "character": {
                "key": "state-0252"
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отменить дотации и ввести налог",
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
                          "key": "state-0364"
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
              "type": "relation",
              "character": {
                "key": "state-0217"
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
              "side": 1,
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
          "text": "Сохранить дотации",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
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
                "key": "state-0112"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Увеличить дотации",
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
                "key": "state-0036"
              },
              "value": -1
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
                "key": "state-0245"
              },
              "estateParameter": 2,
              "value": 1
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
          "number": 5,
          "text": "Доказать вред дотаций",
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
            },
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
                          "type": "flag",
                          "objective": {
                            "key": "state-0290"
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
              "type": "relation",
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-46",
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
      "id": "scene-3-47",
      "title": "Гадкий лебедь",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Оставить ошейник",
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
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0364"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Снять ошейник",
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
                "key": "state-0002"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Пригласить наставника",
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
              "type": "character",
              "character": {
                "key": "state-0112"
              },
              "value": 1
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-48",
      "title": "Дебаты",
      "type": "text",
      "effects": [
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
      "id": "scene-3-49",
      "title": "Общее дело",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять предложение Монрога",
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
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0351"
              },
              "status": {
                "key": "state-0273"
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
            }
          ]
        },
        {
          "number": 2,
          "text": "Дипломатично отказать",
          "effects": [
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
          "text": "Выбросить перстень",
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
              "value": -1
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
                "key": "state-0226"
              },
              "value": 10
            }
          ]
        },
        {
          "number": 4,
          "text": "Снести Форум",
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
                          "type": "flag",
                          "objective": {
                            "key": "state-0206"
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
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            },
            {
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
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
      "id": "scene-3-50",
      "title": "Выбор проекта",
      "type": "annual-project",
      "choiceSystem": "annualProjects"
    },
    {
      "id": "scene-3-51",
      "title": "Разделить твою боль",
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
            "value": 1
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Освободить отца Агаты",
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
                "key": "state-0130"
              },
              "status": {
                "key": "state-0306"
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
        },
        {
          "number": 2,
          "text": "Устроить встречу с отцом",
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
                "key": "state-0074"
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
                "key": "state-0062"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-52",
      "title": "Судьба усмиренных",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Использовать магов",
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
              "type": "character",
              "character": {
                "key": "state-0112"
              },
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
          "text": "Закрыть Дома Смирения",
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
                "key": "state-0217"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
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
          "text": "Оставить всё как есть",
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
                "key": "state-0364"
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
          "text": "Наложить полный запрет",
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
                          "key": "state-0070"
                        },
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
              "type": "relation",
              "character": {
                "key": "state-0364"
              },
              "value": 1
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
              "value": 2
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
      "id": "scene-3-53",
      "title": "Основание Республики",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Аквилия Темпеста",
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
          "text": "Отвергнуть Аквилия Темпеста",
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
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
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
          "text": "Наставить Аквилия Темпеста",
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
      "id": "scene-3-54",
      "title": "Малый кворум",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять бюджет без поправок",
          "effects": [
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
                "key": "state-0245"
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
              "value": -1
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
          "text": "Открыть новые школы",
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
                "key": "state-0199"
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Помочь городской бедноте",
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
              "value": 2
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
          "text": "Принять обе поправки",
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
          "number": 5,
          "text": "Угодить всем",
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
                          "key": "state-0322"
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
                "key": "state-0003"
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-55",
      "title": "Усадьба шалостей",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "status",
            "character": {
              "key": "state-0224"
            },
            "statusGroup": {
              "key": "state-0373"
            },
            "status": {
              "key": "state-0082"
            }
          }
        ],
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
                "key": "state-0034"
              }
            }
          ],
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
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Разорвать отношения",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0083"
              }
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
          "text": "Предаться страсти",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0305"
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
          "text": "Обвинить",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0283"
              }
            }
          ]
        },
        {
          "number": 4,
          "text": "Наставить",
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
                "key": "state-0224"
              },
              "statusGroup": {
                "key": "state-0373"
              },
              "status": {
                "key": "state-0283"
              }
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-56",
      "title": "Запретная роскошь",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Заменить запрет налогом",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0112"
                        },
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
              "type": "relation",
              "character": {
                "key": "state-0217"
              },
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
          "text": "Отменить запрет",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0217"
                        },
                        "operator": ">=",
                        "value": 1
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
                          "key": "state-0058"
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
                          "key": "state-0112"
                        },
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
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
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
          "text": "Оставить запрет",
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
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Расширить запрет",
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
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-57",
      "title": "Тепло очага",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0023"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Уйти",
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
          "number": 2,
          "text": "Пойти с родителями",
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
                          "value": 3
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
          ],
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
                "key": "state-0085"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0045"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Пойти с Корнелием и Гаем",
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
                          "value": 3
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
                "key": "state-0058"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0172"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Прогуляться с Фердинандом",
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
                          "type": "relation",
                          "character": {
                            "key": "state-0294"
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
                          "type": "flag",
                          "objective": {
                            "key": "state-0311"
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
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0294"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 5,
          "text": "Продолжить вечер",
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
                          "type": "flag",
                          "objective": {
                            "key": "state-0096"
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
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0085"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0045"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
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
              "type": "relation",
              "character": {
                "key": "state-0294"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-58",
      "title": "Дела сердечные",
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
            "value": 1
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Объясниться с Оттоном",
          "effects": [
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
          "text": "Согласиться",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0372"
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Сразиться одному",
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
                "key": "state-0372"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0159"
              },
              "status": {
                "key": "state-0065"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-60",
      "title": "Неравный брак",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Отказать",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Разрешить смешанные браки",
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
          "text": "Сделать исключение для Катона",
          "effects": [
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
          "number": 4,
          "text": "Посоветоваться с Лукрецией",
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
                          "key": "state-0101"
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
                        "type": "relation",
                        "character": {
                          "key": "state-0291"
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
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-61",
      "title": "Распад союза",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Голосовать против Свода Законов",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
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
                "key": "state-0112"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Переубедить Диаманта",
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
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
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
                "key": "state-0112"
              },
              "value": 1
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
          "text": "Голосовать за Свод Законов",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": 1
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
                "key": "state-0217"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Сплотить Совет",
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
                ]
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
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": 1
            },
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
                "key": "state-0252"
              },
              "value": -1
            },
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-62",
      "title": "Свод Законов",
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
            "key": "state-0175"
          },
          "value": -1
        }
      ]
    },
    {
      "id": "scene-3-63",
      "title": "Основы политики",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Глэда",
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
                "key": "state-0074"
              },
              "side": 1,
              "value": -3
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
          "text": "Обвинить Глэда в бесчестности",
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
          "text": "Отвергнуть Глэда, как это сделали предки",
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
        }
      ]
    },
    {
      "id": "scene-3-65",
      "title": "Рождение принца",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Выслушать речь Флавия",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0064"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Уйти вместе с Оргрифом",
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
              "type": "stat",
              "parameter": {
                "key": "state-0062"
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
          "number": 3,
          "text": "Грубо прервать Флавия",
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
              "type": "relation",
              "character": {
                "key": "state-0064"
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
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Отвлечь внимание гостей",
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
              "type": "relation",
              "character": {
                "key": "state-0070"
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
        }
      ]
    },
    {
      "id": "scene-3-66",
      "title": "Осада Университета",
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
      "id": "scene-3-67",
      "title": "Долг матроны",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Согласиться с Монрогом",
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
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": -1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0036"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Выгнать Монрога",
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
                  },
                  "not": true
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
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0045"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0252"
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
              "type": "character",
              "character": {
                "key": "state-0252"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0351"
              },
              "status": {
                "key": "state-0165"
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
                "key": "state-0045"
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
      "id": "scene-3-68",
      "title": "Приданое",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0291"
            },
            "operator": ">=",
            "value": 1
          },
          {
            "type": "status",
            "character": {
              "key": "state-0291"
            },
            "statusGroup": {
              "key": "state-0310"
            },
            "status": {
              "key": "state-0101"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отчеканить герб Темпестов",
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
              "type": "relation",
              "character": {
                "key": "state-0291"
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отчеканить символ Церкви",
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
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0291"
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
          "number": 3,
          "text": "Отказаться от помощи",
          "effects": [
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
      ]
    },
    {
      "id": "scene-3-71",
      "title": "Праздник для всех",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Уйти с Сервилией",
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
                "key": "state-0045"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Остаться на приеме",
          "effects": [
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
                "key": "state-0036"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Остановить Сервилию",
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
                "key": "state-0036"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0045"
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
            }
          ]
        },
        {
          "number": 4,
          "text": "Выгнать людей",
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
                "key": "state-0036"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0045"
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-72",
      "title": "Филиппика",
      "type": "text",
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
          "type": "stat",
          "parameter": {
            "key": "state-0175"
          },
          "value": 1
        }
      ]
    },
    {
      "id": "scene-3-73",
      "title": "Долг советника",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Уйти",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
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
          "text": "Увести Оргрифа",
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
                          "type": "relation",
                          "character": {
                            "key": "state-0364"
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
                            "key": "state-0123"
                          },
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
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
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
          "number": 3,
          "text": "Остаться",
          "effects": [
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
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
        },
        {
          "number": 4,
          "text": "Вернуть Миланида",
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
                          "type": "relation",
                          "character": {
                            "key": "state-0112"
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
                            "key": "state-0123"
                          },
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
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": 1
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
                "key": "state-0217"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-74",
      "title": "Неудобные вопросы",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять выбор Уттера",
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
          "text": "Не принять выбор Уттера",
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
          "number": 3,
          "text": "Дать выход ярости",
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
              "side": 1,
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0085"
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
        }
      ]
    },
    {
      "id": "scene-3-75",
      "title": "Выбор проекта",
      "type": "annual-project",
      "choiceSystem": "annualProjects"
    },
    {
      "id": "scene-3-76",
      "title": "Потерянный покой",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Навестить Лукрецию",
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
                          "key": "state-0291"
                        },
                        "statusGroup": {
                          "key": "state-0310"
                        },
                        "status": {
                          "key": "state-0101"
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
                        "type": "relation",
                        "character": {
                          "key": "state-0291"
                        },
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 1,
              "value": 2
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
              "type": "relation",
              "character": {
                "key": "state-0291"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Пойти к Камилле",
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
                          "key": "state-0372"
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0340"
              },
              "side": 0,
              "value": 2
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
              "type": "relation",
              "character": {
                "key": "state-0372"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Встретиться с Агатой",
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
                          "key": "state-0285"
                        },
                        "operator": ">=",
                        "value": 1
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
                          "key": "state-0285"
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0230"
              },
              "side": 0,
              "value": 2
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
              "type": "relation",
              "character": {
                "key": "state-0285"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Отправиться с Флавием",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
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
                "key": "state-0074"
              },
              "side": 1,
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-77",
      "title": "Не представляет интереса",
      "type": "hidden-text",
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
            "operator": "<=",
            "value": 1
          }
        ]
      },
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
        }
      ]
    },
    {
      "id": "scene-3-78",
      "title": "Бесчестие",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Обвинить обоих",
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
              "type": "relation",
              "character": {
                "key": "state-0045"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Обвинить Сервилию",
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
              "type": "relation",
              "character": {
                "key": "state-0045"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Обвинить Корнелия",
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
              "type": "relation",
              "character": {
                "key": "state-0036"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 4,
          "text": "Сдержать гнев",
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
                          "type": "flag",
                          "objective": {
                            "key": "state-0096"
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
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -5
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0112"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-79",
      "title": "Марш ошейников",
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
      "id": "scene-3-80",
      "title": "Судьба Корнелия",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Назначить Корнелия наместником",
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
                        "value": 2
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
                          "key": "state-0070"
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
              "type": "flag",
              "objective": {
                "key": "state-0232"
              },
              "unlocked": true
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
                "key": "state-0188"
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
          "text": "Отослать Корнелия из столицы",
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
                "key": "state-0205"
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Осудить Корнелия",
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
                        "type": "flag",
                        "objective": {
                          "key": "state-0096"
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
              "type": "character",
              "character": {
                "key": "state-0036"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0193"
              },
              "status": {
                "key": "state-0260"
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
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": 5
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
        },
        {
          "number": 4,
          "text": "Заключить Корнелия под стражу",
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
                        "value": 3
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
                        "value": 2
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
                          "key": "state-0364"
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
              "type": "flag",
              "objective": {
                "key": "state-0342"
              },
              "unlocked": true
            },
            {
              "type": "character",
              "character": {
                "key": "state-0036"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0193"
              },
              "status": {
                "key": "state-0046"
              }
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
      "id": "scene-3-85",
      "title": "Неоплаченный счет",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Подписать указ об экспроприации",
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
                        "operator": ">=",
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
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0251"
                        },
                        "side": 1,
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
                "key": "state-0334"
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
              "type": "axis",
              "bilateralParameter": {
                "key": "state-0240"
              },
              "side": 1,
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
          "text": "Попросить людей о займе",
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
                        "side": 0,
                        "operator": ">=",
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
                        "type": "axis",
                        "bilateralParameter": {
                          "key": "state-0251"
                        },
                        "side": 0,
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
                "key": "state-0166"
              },
              "unlocked": true
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
              "type": "relation",
              "character": {
                "key": "state-0252"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Отдать земли",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0157"
              },
              "value": -5
            },
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
        {
          "number": 4,
          "text": "Нарушить договор",
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
              "value": 2
            },
            {
              "type": "status",
              "character": {
                "key": "state-0080"
              },
              "statusGroup": {
                "key": "state-0214"
              },
              "status": {
                "key": "state-0219"
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-3-87",
      "title": "Вера за Кровь",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Исполнить ритуал",
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
              "type": "flag",
              "objective": {
                "key": "state-0288"
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
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Нарушить ритуал",
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
              "type": "flag",
              "objective": {
                "key": "state-0131"
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
    }
  ]
});
