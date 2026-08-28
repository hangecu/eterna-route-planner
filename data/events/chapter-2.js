/**
 * События главы 2: выборы, условия и наблюдаемые последствия.
 * Записи расположены в порядке прохождения.
 */
"use strict";
globalThis.PLANNER_CHAPTERS ??= [];
globalThis.PLANNER_CHAPTERS.push({
  "number": 2,
  "id": "chapter-2",
  "title": "Глава II. Наследник",
  "scenes": [
    {
      "id": "scene-2-1",
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
      "id": "scene-2-2",
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
      "id": "scene-2-3",
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
      "id": "scene-2-4",
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
      "id": "scene-2-5",
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
      "id": "scene-2-6",
      "title": "Дивный новый мир",
      "type": "scene-no-choice",
      "effects": [
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
      "id": "scene-2-7",
      "title": "Семейный портрет",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Занять место рядом с отцом",
          "effects": [
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
          "text": "Занять место рядом с матерью",
          "effects": [
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
          "text": "Занять место рядом с наставником",
          "effects": [
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
          "number": 4,
          "text": "Пригласить Фердинанда",
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
                          "key": "state-0294"
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
              "type": "relation",
              "character": {
                "key": "state-0294"
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
      "id": "scene-2-8",
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
      "id": "scene-2-9",
      "title": "Торжество лучших",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "«Бремя достойнейших»",
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
              "type": "character",
              "character": {
                "key": "state-0085"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "«Справедливость сильнейших»",
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
                "key": "state-0045"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "«Наследие величайших»",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0311"
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
          "number": 4,
          "text": "Никакого девиза",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "flag",
                  "objective": {
                    "key": "state-0311"
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
      "id": "scene-2-10",
      "title": "Большая игра",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Сблизиться с семьей",
          "effects": [
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
            }
          ]
        },
        {
          "number": 2,
          "text": "Сблизиться с аркнами",
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
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Сблизиться с людьми",
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
              "value": 2
            }
          ]
        },
        {
          "number": 4,
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
              "type": "character",
              "character": {
                "key": "state-0172"
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
      "id": "scene-2-11",
      "title": "Уроки галантности",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Попросить их остаться",
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
                "key": "state-0372"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Самому проводить Камиллу домой",
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
              "type": "relation",
              "character": {
                "key": "state-0372"
              },
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0172"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Оставить Камиллу с Гаем",
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
                "key": "state-0172"
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
      "id": "scene-2-12",
      "title": "Долгожданная встреча",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "flag",
            "objective": {
              "key": "state-0311"
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
                "key": "state-0017"
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
                "key": "state-0121"
              }
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Прислушаться к Корнелию",
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
                "key": "state-0005"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0325"
              }
            },
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
                "key": "state-0083"
              }
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
          "number": 2,
          "text": "Сделать прощальный подарок",
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
                "key": "state-0058"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0325"
              }
            },
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
                "key": "state-0083"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Оказать покровительство",
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
                "key": "state-0004"
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
                "key": "state-0082"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-13",
      "title": "Воля Императора",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Отказать отцу",
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
                "key": "state-0085"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0013"
              },
              "status": {
                "key": "state-0152"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Выбрать победителей по мастерству",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0085"
              },
              "value": 1,
              "status": {
                "key": "state-0152"
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
                "key": "state-0255"
              },
              "estateParameter": 2,
              "value": -1
            }
          ]
        },
        {
          "number": 3,
          "text": "Выбрать победителей с учетом связей",
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
              "type": "character",
              "character": {
                "key": "state-0085"
              },
              "value": 1,
              "status": {
                "key": "state-0152"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-14",
      "title": "Образ будущего",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Пригласить Достойных аркнов",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
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
              "type": "character",
              "character": {
                "key": "state-0172"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Пригласить людское дворянство",
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
                "key": "state-0120"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Пригласить и Достойных аркнов, и дворян-людей",
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
                            "key": "state-0007"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0294"
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
              "value": 2
            },
            {
              "type": "character",
              "character": {
                "key": "state-0036"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 4,
          "text": "Пригласить Великие дома и клир Старой Веры",
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
                          "value": 6
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
                          "value": 6
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
                  "type": "stat",
                  "parameter": {
                    "key": "state-0058"
                  },
                  "operator": ">=",
                  "value": 5
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
                "key": "state-0218"
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
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-15",
      "title": "Право силы",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Джериана Первого",
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
            }
          ]
        },
        {
          "number": 2,
          "text": "Отвергнуть Джериана Первого",
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
          "text": "Призвать к милосердию",
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
                "key": "state-0226"
              },
              "value": -5
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
      "id": "scene-2-16",
      "title": "Выбор проекта",
      "type": "annual-project",
      "choiceSystem": "annualProjects"
    },
    {
      "id": "scene-2-17",
      "title": "Ветер перемен",
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
      "id": "scene-2-18",
      "title": "Мир без границ",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Согласиться с Фердинандом",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": 1,
              "status": {
                "key": "state-0072"
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
          "number": 2,
          "text": "Отказать Фердинанду",
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
                  "operator": "<=",
                  "value": 5
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
              "value": -1,
              "statusGroup": {
                "key": "state-0027"
              },
              "status": {
                "key": "state-0072"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Предложить компромисс",
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
                  "type": "stat",
                  "parameter": {
                    "key": "state-0062"
                  },
                  "operator": ">=",
                  "value": 5
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
              "value": 1,
              "status": {
                "key": "state-0072"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-19",
      "title": "Подарок для принца",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Выбрать сказку о любви",
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
            }
          ]
        },
        {
          "number": 2,
          "text": "Выбрать сказку о мудрости",
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
          "text": "Приказать станцевать",
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-20",
      "title": "Сон Императора",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0085"
            },
            "operator": ">=",
            "value": 3
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
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отпустить отца",
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
              "type": "stat",
              "parameter": {
                "key": "state-0058"
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
                "key": "state-0036"
              },
              "value": -1
            },
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
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0033"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 2,
          "text": "Заняться императорским приемом",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0085"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0013"
              },
              "status": {
                "key": "state-0152"
              }
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
          "text": "Провести церемонию",
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
                "key": "state-0085"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0013"
              },
              "status": {
                "key": "state-0152"
              }
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
        }
      ]
    },
    {
      "id": "scene-2-21",
      "title": "Трапеза",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Сервилия должна извиниться",
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
                          "key": "state-0045"
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
          "number": 2,
          "text": "Корнелий должен извиниться",
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
              "value": -1
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
          "number": 3,
          "text": "Уттер должен всех примирить",
          "effects": [
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
          "number": 4,
          "text": "Уйти в Университет",
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
              "type": "faction",
              "estate": {
                "key": "state-0199"
              },
              "estateParameter": 2,
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0085"
              },
              "value": -1
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
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0172"
              },
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-22",
      "title": "Чудо без благодати",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддержать нововера",
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
                "key": "state-0003"
              },
              "estateParameter": 2,
              "value": 2
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать старовера",
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
                "key": "state-0218"
              },
              "estateParameter": 2,
              "value": 2
            }
          ]
        },
        {
          "number": 3,
          "text": "Сказать правду",
          "effects": [
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
        }
      ]
    },
    {
      "id": "scene-2-23",
      "title": "Поступь Новой Веры",
      "type": "text",
      "effects": [
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
      "id": "scene-2-24",
      "title": "Маскарад",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Отказать Сервилии",
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
                          "key": "state-0074"
                        },
                        "side": 1,
                        "operator": "<=",
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
                "key": "state-0045"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0191"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Защитить честь семьи",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0123"
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
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": 1,
              "status": {
                "key": "state-0191"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Обратиться к аркнам",
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
                          "type": "relation",
                          "character": {
                            "key": "state-0372"
                          },
                          "operator": ">=",
                          "value": 1
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
                "key": "state-0045"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-25",
      "title": "За горизонт",
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
              "key": "state-0072"
            },
            "not": true
          },
          {
            "type": "relation",
            "character": {
              "key": "state-0294"
            },
            "operator": ">=",
            "value": 3
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Фердинанда",
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
              "type": "stat",
              "parameter": {
                "key": "state-0062"
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
              "type": "relation",
              "character": {
                "key": "state-0294"
              },
              "value": 1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0113"
              },
              "unlocked": true
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
              "type": "relation",
              "character": {
                "key": "state-0172"
              },
              "value": -1
            }
          ]
        },
        {
          "number": 2,
          "text": "Согласиться с Гаем",
          "effects": [
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
                "key": "state-0045"
              },
              "value": 1
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
                "key": "state-0072"
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
          "number": 3,
          "text": "Создать торговый флот",
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
              "type": "character",
              "character": {
                "key": "state-0294"
              },
              "value": -1,
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
      "id": "scene-2-26",
      "title": "Рождение рыцаря",
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
              "key": "state-0004"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Отказать Эмилю",
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
                "key": "state-0005"
              },
              "value": -2,
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0325"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Удовлетворить просьбу",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": 1,
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0161"
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
        },
        {
          "number": 3,
          "text": "Отправить Эмиля в Университет",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0066"
              },
              "status": {
                "key": "state-0034"
              }
            }
          ]
        },
        {
          "number": 4,
          "text": "Подготовить Эмиля",
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
                  "type": "stat",
                  "parameter": {
                    "key": "state-0123"
                  },
                  "operator": ">=",
                  "value": 5
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
                "key": "state-0034"
              }
            },
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
      "id": "scene-2-27",
      "title": "Невеста",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Опереться на Кровь",
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
          "text": "Обратиться к Закону Близнецов",
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Разорвать помолвку",
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
                          "value": 6
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
                "key": "state-0291"
              },
              "value": 0,
              "statusGroup": {
                "key": "state-0310"
              },
              "status": {
                "key": "state-0269"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-28",
      "title": "Молитва",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Просить о Любви",
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
          "number": 2,
          "text": "Просить о Законе",
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
                "key": "state-0085"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Оставить молитвы",
          "effects": [
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
          "text": "Обратиться за советом к Агате",
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
                "cost": 1,
                "parameter": {
                  "key": "state-0049"
                }
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
                "key": "state-0062"
              },
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
              "type": "relation",
              "character": {
                "key": "state-0285"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-29",
      "title": "Священный Пакт",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Принять Эрика Святого",
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
          "text": "Наставить Эрика Святого",
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Отвергнуть Эрика Святого",
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
      "id": "scene-2-30",
      "title": "Выбор проекта",
      "type": "annual-project",
      "choiceSystem": "annualProjects"
    },
    {
      "id": "scene-2-31",
      "title": "Малая ветвь",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0045"
            },
            "operator": ">=",
            "value": 3
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
              "key": "state-0191"
            },
            "not": true
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Сервилию",
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
              "type": "flag",
              "objective": {
                "key": "state-0275"
              },
              "unlocked": true
            },
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
                "key": "state-0045"
              },
              "value": 1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0294"
              },
              "value": -1
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0085"
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
        },
        {
          "number": 2,
          "text": "Отказать Сервилии",
          "effects": [
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
                "key": "state-0036"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": -1,
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
          "number": 3,
          "text": "Реформировать орден",
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
              "type": "character",
              "character": {
                "key": "state-0045"
              },
              "value": -1,
              "statusGroup": {
                "key": "state-0330"
              },
              "status": {
                "key": "state-0191"
              }
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0294"
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
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-2-32",
      "title": "По велению сердца",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Посвятить себя чтению",
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
                "key": "state-0062"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Встретиться с Лукрецией",
          "requirements": [
            {
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
                    "key": "state-0101"
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
                "key": "state-0123"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Встретиться с Камиллой",
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
                  "type": "relation",
                  "character": {
                    "key": "state-0372"
                  },
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
                "key": "state-0340"
              },
              "side": 0,
              "value": 2
            },
            {
              "type": "relation",
              "character": {
                "key": "state-0372"
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
          "number": 4,
          "text": "Встретиться с Агатой",
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
                  "type": "relation",
                  "character": {
                    "key": "state-0285"
                  },
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
                "key": "state-0230"
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
      "id": "scene-2-33",
      "title": "Пустой трон",
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
      "id": "scene-2-34",
      "title": "Покой Императора",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Отказаться",
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
                        "operator": ">=",
                        "value": 4
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
                          "key": "state-0036"
                        },
                        "operator": ">=",
                        "value": 4
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
                        "operator": ">=",
                        "value": 4
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
              "value": -1,
              "statusGroup": {
                "key": "state-0063"
              },
              "status": {
                "key": "state-0010"
              }
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
        },
        {
          "number": 2,
          "text": "Промолчать",
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
                          "type": "relation",
                          "character": {
                            "key": "state-0036"
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
                          "type": "relation",
                          "character": {
                            "key": "state-0045"
                          },
                          "operator": ">=",
                          "value": 4
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
              "type": "status",
              "character": {
                "key": "state-0085"
              },
              "statusGroup": {
                "key": "state-0063"
              },
              "status": {
                "key": "state-0010"
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
              "type": "stat",
              "parameter": {
                "key": "state-0226"
              },
              "value": -15
            }
          ]
        },
        {
          "number": 3,
          "text": "Принять перстень",
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
              ]
            },
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
                        "type": "relation",
                        "character": {
                          "key": "state-0036"
                        },
                        "operator": ">=",
                        "value": 4
                      }
                    ]
                  }
                }
              ]
            },
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
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0023"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 4,
          "text": "Произнести Клятву Единства",
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
                        "type": "relation",
                        "character": {
                          "key": "state-0036"
                        },
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
                        "type": "relation",
                        "character": {
                          "key": "state-0045"
                        },
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
                        "type": "relation",
                        "character": {
                          "key": "state-0172"
                        },
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
              "type": "flag",
              "objective": {
                "key": "state-0096"
              },
              "unlocked": true
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0023"
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
                "key": "state-0226"
              },
              "value": 10
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
      "id": "scene-2-35",
      "title": "Обращение к народу",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Успокоить подданных",
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
                          "type": "faction",
                          "estate": {
                            "key": "state-0245"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 14
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
                            "key": "state-0255"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 14
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
              "anyOf": [
                [
                  {
                    "type": "block",
                    "block": {
                      "conditions": [
                        {
                          "type": "faction",
                          "estate": {
                            "key": "state-0120"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 12
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
                          "value": 12
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
                          "value": 12
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
                            "key": "state-0218"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 14
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
              "value": -1
            },
            {
              "type": "flag",
              "objective": {
                "key": "state-0322"
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
          "number": 2,
          "text": "Успокоить аркнов",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
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
                            "key": "state-0245"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 14
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
            },
            {
              "unlock": {
                "cost": 10,
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
                          "value": 14
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
                          "value": 10
                        }
                      ]
                    }
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 10,
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
                            "key": "state-0218"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 14
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
              "type": "flag",
              "objective": {
                "key": "state-0290"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 3,
          "text": "Успокоить людей",
          "requirements": [
            {
              "unlock": {
                "cost": 10,
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
                            "key": "state-0120"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 12
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
            },
            {
              "unlock": {
                "cost": 10,
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
                            "key": "state-0199"
                          },
                          "estateParameter": 2,
                          "operator": ">=",
                          "value": 12
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
                          "value": 10
                        }
                      ]
                    }
                  }
                ]
              ]
            },
            {
              "unlock": {
                "cost": 10,
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
                          "value": 12
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
              "type": "flag",
              "objective": {
                "key": "state-0206"
              },
              "unlocked": true
            }
          ]
        },
        {
          "number": 4,
          "text": "Перекричать толпу",
          "effects": [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0175"
              },
              "value": 1
            }
          ]
        }
      ]
    }
  ]
});
