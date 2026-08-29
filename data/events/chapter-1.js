/**
 * События главы 1: выборы, условия и наблюдаемые последствия.
 * Записи расположены в порядке прохождения.
 */
"use strict";
globalThis.PLANNER_CHAPTERS ??= [];
globalThis.PLANNER_CHAPTERS.push({
  "number": 1,
  "id": "chapter-1",
  "title": "Глава I. Небытие",
  "scenes": [
    {
      "id": "scene-1-2",
      "title": "Чужак",
      "showLocationChange": false,
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Ударить чужака",
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
          "text": "Присмотреться к чужаку",
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
              "unlocked": true
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-3",
      "title": "Наставление Корнелия",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Настоять на уроке чтения",
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
          "number": 2,
          "text": "Настоять на уроке счета",
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
          "number": 3,
          "text": "Пойти шпионить",
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
      "id": "scene-1-4",
      "title": "Открытые двери",
      "type": "text",
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
        }
      ]
    },
    {
      "id": "scene-1-5",
      "title": "Божественная Благодать",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Подойти к Старшему за утешением",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0224"
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
        },
        {
          "number": 2,
          "text": "Подойти к Младшему за справедливостью",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0005"
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
            }
          ]
        },
        {
          "number": 3,
          "text": "Познать обоих Богов",
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
                "key": "state-0062"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-6",
      "title": "Безудельный",
      "type": "text",
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
      "id": "scene-1-7",
      "title": "Удел человека",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Выпить с аркном",
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
          "text": "Отказаться пить",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Заступиться за семью Марты",
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
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-8",
      "title": "В тени штандартов",
      "type": "text",
      "effects": [
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0251"
          },
          "side": 1,
          "value": -1
        }
      ]
    },
    {
      "id": "scene-1-9",
      "title": "Прошлое, настоящее, будущее",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддержать Фердинанда",
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
                "key": "state-0294"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Поддержать Корнелия",
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
                "key": "state-0036"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Предложить свою тему для урока",
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
                "key": "state-0062"
              },
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
              "type": "character",
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
      "id": "scene-1-10",
      "title": "Высокая ересь",
      "type": "text",
      "effects": [
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0357"
          },
          "side": 1,
          "value": -1
        }
      ]
    },
    {
      "id": "scene-1-11",
      "title": "Удел дворянина",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поддаться Эмилю",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Сражаться в полную силу",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Отказаться от дуэли",
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
                "key": "state-0123"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-12",
      "title": "Правота и сочувствие",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Пойти с Эмилем",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Остаться с Альфредом",
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
      "id": "scene-1-13",
      "title": "Памфлет о губительном прогрессе",
      "type": "text",
      "effects": [
        {
          "type": "axis",
          "bilateralParameter": {
            "key": "state-0240"
          },
          "side": 1,
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
      "id": "scene-1-14",
      "title": "Тени грядущего",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "anyOf": [
          [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0058"
              },
              "operator": ">=",
              "value": 3
            }
          ],
          [
            {
              "type": "stat",
              "parameter": {
                "key": "state-0062"
              },
              "operator": ">=",
              "value": 3
            }
          ]
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Пойти с Фердинандом",
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
                            "key": "state-0062"
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
                            "key": "state-0294"
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
              "type": "character",
              "character": {
                "key": "state-0294"
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
          "text": "Доделать доклад",
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
                          "key": "state-0058"
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
              "type": "character",
              "character": {
                "key": "state-0036"
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
          "number": 3,
          "text": "Отправиться к друзьям",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-15",
      "title": "Сад чудовищ",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0005"
            },
            "operator": ">=",
            "value": 2
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Пойти с аркнийкой",
          "effects": [
            {
              "type": "character",
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
          "text": "Остаться с Эмилем",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Спасти Эмиля",
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
                          "key": "state-0123"
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
                "key": "state-0123"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0372"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0005"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-16",
      "title": "Последняя проповедь",
      "type": "hidden",
      "appearance": {
        "unlock": {
          "locked": true
        },
        "conditions": [
          {
            "type": "relation",
            "character": {
              "key": "state-0224"
            },
            "operator": ">=",
            "value": 2
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Утешить Альфреда",
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
                "key": "state-0074"
              },
              "side": 0,
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Отвернуться от Альфреда",
          "effects": [
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Переубедить Марту",
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
                          "key": "state-0062"
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
                "key": "state-0062"
              },
              "value": 1
            },
            {
              "type": "character",
              "character": {
                "key": "state-0224"
              },
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-17",
      "title": "Час испытаний",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Поспешить на помощь друзьям",
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
                "key": "state-0017"
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
                "key": "state-0121"
              }
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
          "text": "Произнести выверенную речь",
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
                            "key": "state-0058"
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
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0007"
              },
              "unlocked": true
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
                "key": "state-0036"
              },
              "value": 1
            }
          ]
        },
        {
          "number": 3,
          "text": "Провалиться с речью",
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
                          "key": "state-0058"
                        },
                        "operator": ">=",
                        "value": 5
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
                        "type": "stat",
                        "parameter": {
                          "key": "state-0123"
                        },
                        "operator": ">=",
                        "value": 5
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
                        "type": "stat",
                        "parameter": {
                          "key": "state-0062"
                        },
                        "operator": ">=",
                        "value": 5
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
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-18",
      "title": "Настоящие друзья",
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
              "key": "state-0017"
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
              "key": "state-0121"
            }
          }
        ]
      },
      "choices": [
        {
          "number": 1,
          "text": "Остаться с Мартой",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "relation",
                  "character": {
                    "key": "state-0224"
                  },
                  "operator": ">=",
                  "value": 3
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0041"
              },
              "unlocked": true
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
                "key": "state-0091"
              }
            }
          ]
        },
        {
          "number": 2,
          "text": "Пойти с Эмилем",
          "requirements": [
            {
              "unlock": {
                "locked": true
              },
              "conditions": [
                {
                  "type": "relation",
                  "character": {
                    "key": "state-0005"
                  },
                  "operator": ">=",
                  "value": 3
                }
              ]
            }
          ],
          "effects": [
            {
              "type": "flag",
              "objective": {
                "key": "state-0041"
              },
              "unlocked": true
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
                "key": "state-0328"
              }
            }
          ]
        },
        {
          "number": 3,
          "text": "Уйти заниматься",
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
            }
          ]
        }
      ]
    },
    {
      "id": "scene-1-19",
      "title": "Темпест",
      "type": "scene",
      "choices": [
        {
          "number": 1,
          "text": "Раствориться в Реке Крови",
          "effects": [
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
              "value": 1
            }
          ]
        },
        {
          "number": 2,
          "text": "Сопротивляться Реке Крови",
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
                        "type": "flag",
                        "objective": {
                          "key": "state-0041"
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
                "key": "state-0226"
              },
              "value": 5
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
              "type": "flag",
              "objective": {
                "key": "state-0311"
              },
              "unlocked": true
            }
          ]
        }
      ]
    }
  ]
});
