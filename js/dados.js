const BANCO_DE_DADOS = {

  jogos: [
    {

      "id": 1001,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "Flamengo x Palmeiras",

      "liga": "Brasileirão Série A",

      "data": "2025-11-20",

      "hora": "21:30",

      "destaque": true,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "Flamengo", "odd": 1.90, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.40, "selecao_key": "draw" },

            { "tipo": "Palmeiras", "odd": 4.10, "selecao_key": "away" }

          ]

        },

        {

          "nome": "Total de Gols (Over/Under)",

          "opcoes": [

            { "tipo": "Mais de 2.5", "odd": 2.15, "selecao_key": "over25" },

            { "tipo": "Menos de 2.5", "odd": 1.70, "selecao_key": "under25" }

          ]

        }

      ]

    },

    {

      "id": 1002,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "São Paulo x Corinthians",

      "liga": "Brasileirão Série A",

      "data": "2025-11-21",

      "hora": "19:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "São Paulo", "odd": 2.20, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.10, "selecao_key": "draw" },

            { "tipo": "Corinthians", "odd": 3.50, "selecao_key": "away" }

          ]

        },

        {

          "nome": "Primeiro a Marcar",

          "opcoes": [

            { "tipo": "São Paulo", "odd": 1.80, "selecao_key": "home_g1" },

            { "tipo": "Corinthians", "odd": 2.30, "selecao_key": "away_g1" }

          ]

        }

      ]

    },

    {

      "id": 1003,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "Grêmio x Internacional",

      "liga": "Brasileirão Série A",

      "data": "2025-11-21",

      "hora": "21:30",

      "destaque": true,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "Grêmio", "odd": 2.50, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.00, "selecao_key": "draw" },

            { "tipo": "Internacional", "odd": 3.00, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 1004,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "Real Madrid x Barcelona",

      "liga": "La Liga",

      "data": "2025-11-22",

      "hora": "17:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "Real Madrid", "odd": 1.80, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.60, "selecao_key": "draw" },

            { "tipo": "Barcelona", "odd": 4.50, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 1005,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "PSG x Manchester City",

      "liga": "Champions League",

      "data": "2025-11-23",

      "hora": "16:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "PSG", "odd": 3.00, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.50, "selecao_key": "draw" },

            { "tipo": "Man City", "odd": 2.10, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 1006,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "Brasil x Argentina",

      "liga": "Amistoso Internacional",

      "data": "2025-11-25",

      "hora": "19:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "Brasil", "odd": 2.20, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.10, "selecao_key": "draw" },

            { "tipo": "Argentina", "odd": 3.50, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 1007,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "Bayer Leverkusen x Bayern de Munique",

      "liga": "Bundesliga",

      "data": "2025-11-26",

      "hora": "14:30",

      "destaque": false,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "Leverkusen", "odd": 2.80, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.20, "selecao_key": "draw" },

            { "tipo": "Bayern", "odd": 2.35, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 1008,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "Liverpool x Arsenal",

      "liga": "Premier League",

      "data": "2025-11-26",

      "hora": "17:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "Liverpool", "odd": 2.05, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.45, "selecao_key": "draw" },

            { "tipo": "Arsenal", "odd": 3.80, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 1009,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "Boca Juniors x River Plate",

      "liga": "Superclássico Argentino",

      "data": "2025-11-27",

      "hora": "21:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "Boca Juniors", "odd": 2.30, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.15, "selecao_key": "draw" },

            { "tipo": "River Plate", "odd": 3.40, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 1010,

      "esporte": "Futebol",

      "icone": "⚽",

      "evento": "Atlético-MG x Cruzeiro",

      "liga": "Brasileirão Série A",

      "data": "2025-11-27",

      "hora": "19:30",

      "destaque": false,

      "mercados": [

        {

          "nome": "Resultado Final",

          "opcoes": [

            { "tipo": "Atlético-MG", "odd": 1.75, "selecao_key": "home" },

            { "tipo": "Empate", "odd": 3.50, "selecao_key": "draw" },

            { "tipo": "Cruzeiro", "odd": 4.80, "selecao_key": "away" }

          ]

        }

      ]

    },





    /* ---------------------- 🏀 BASQUETE (8 Partidas) ---------------------- */

    {

      "id": 2001,

      "esporte": "Basquete",

      "icone": "🏀",

      "evento": "Lakers x Warriors",

      "liga": "NBA",

      "data": "2025-11-20",

      "hora": "23:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "LA Lakers", "odd": 1.45, "selecao_key": "home" },

            { "tipo": "GS Warriors", "odd": 2.80, "selecao_key": "away" }

          ]

        },

        {

          "nome": "Total de Pontos (Over/Under)",

          "opcoes": [

            { "tipo": "Mais de 220.5", "odd": 1.88, "selecao_key": "over2205" },

            { "tipo": "Menos de 220.5", "odd": 1.95, "selecao_key": "under2205" }

          ]

        }

      ]

    },

    {

      "id": 2002,

      "esporte": "Basquete",

      "icone": "🏀",

      "evento": "Celtics x Bucks",

      "liga": "NBA",

      "data": "2025-11-21",

      "hora": "21:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Boston Celtics", "odd": 1.60, "selecao_key": "home" },

            { "tipo": "Milwaukee Bucks", "odd": 2.40, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 2003,

      "esporte": "Basquete",

      "icone": "🏀",

      "evento": "Miami Heat x Chicago Bulls",

      "liga": "NBA",

      "data": "2025-11-22",

      "hora": "22:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Miami Heat", "odd": 1.50, "selecao_key": "home" },

            { "tipo": "Chicago Bulls", "odd": 2.70, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 2004,

      "esporte": "Basquete",

      "icone": "🏀",

      "evento": "Real Madrid x Fenerbahçe",

      "liga": "EuroLeague",

      "data": "2025-11-23",

      "hora": "16:45",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Real Madrid", "odd": 1.30, "selecao_key": "home" },

            { "tipo": "Fenerbahçe", "odd": 3.60, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 2005,

      "esporte": "Basquete",

      "icone": "🏀",

      "evento": "Denver Nuggets x Phoenix Suns",

      "liga": "NBA",

      "data": "2025-11-24",

      "hora": "00:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Denver Nuggets", "odd": 1.70, "selecao_key": "home" },

            { "tipo": "Phoenix Suns", "odd": 2.25, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 2006,

      "esporte": "Basquete",

      "icone": "🏀",

      "evento": "New York Knicks x Brooklyn Nets",

      "liga": "NBA",

      "data": "2025-11-24",

      "hora": "20:30",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "NY Knicks", "odd": 2.00, "selecao_key": "home" },

            { "tipo": "Brooklyn Nets", "odd": 1.85, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 2007,

      "esporte": "Basquete",

      "icone": "🏀",

      "evento": "Olimpia Milano x Barcelona",

      "liga": "EuroLeague",

      "data": "2025-11-25",

      "hora": "15:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Milano", "odd": 2.60, "selecao_key": "home" },

            { "tipo": "Barcelona", "odd": 1.40, "selecao_key": "away" }

          ]

        }

      ]

    },

    {

      "id": 2008,

      "esporte": "Basquete",

      "icone": "🏀",

      "evento": "Cleveland Cavaliers x Atlanta Hawks",

      "liga": "NBA",

      "data": "2025-11-25",

      "hora": "21:30",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Cavaliers", "odd": 1.90, "selecao_key": "home" },

            { "tipo": "Hawks", "odd": 1.95, "selecao_key": "away" }

          ]

        }

      ]

    },



    /* ---------------------- 🎾 TÊNIS (8 Partidas) ---------------------- */

    {

      "id": 3001,

      "esporte": "Tênis",

      "icone": "🎾",

      "evento": "Djokovic x Alcaraz",

      "liga": "ATP Finals",

      "data": "2025-11-21",

      "hora": "15:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Djokovic", "odd": 1.70, "selecao_key": "p1" },

            { "tipo": "Alcaraz", "odd": 2.10, "selecao_key": "p2" }

          ]

        },

        {

          "nome": "Vencedor do 1º Set",

          "opcoes": [

            { "tipo": "Djokovic", "odd": 1.85, "selecao_key": "p1_set1" },

            { "tipo": "Alcaraz", "odd": 1.95, "selecao_key": "p2_set1" }

          ]

        }

      ]

    },

    {

      "id": 3002,

      "esporte": "Tênis",

      "icone": "🎾",

      "evento": "Nadal x Sinner",

      "liga": "ATP Finals",

      "data": "2025-11-22",

      "hora": "13:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Nadal", "odd": 2.50, "selecao_key": "p1" },

            { "tipo": "Sinner", "odd": 1.50, "selecao_key": "p2" }

          ]

        }

      ]

    },

    {

      "id": 3003,

      "esporte": "Tênis",

      "icone": "🎾",

      "evento": "Swiatek x Gauff",

      "liga": "WTA Finals",

      "data": "2025-11-23",

      "hora": "18:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Swiatek", "odd": 1.35, "selecao_key": "p1" },

            { "tipo": "Gauff", "odd": 3.20, "selecao_key": "p2" }

          ]

        }

      ]

    },

    {

      "id": 3004,

      "esporte": "Tênis",

      "icone": "🎾",

      "evento": "Medvedev x Rublev",

      "liga": "ATP Finals",

      "data": "2025-11-24",

      "hora": "15:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Medvedev", "odd": 1.65, "selecao_key": "p1" },

            { "tipo": "Rublev", "odd": 2.20, "selecao_key": "p2" }

          ]

        }

      ]

    },

    {

      "id": 3005,

      "esporte": "Tênis",

      "icone": "🎾",

      "evento": "Rybakina x Sabalenka",

      "liga": "WTA Finals",

      "data": "2025-11-25",

      "hora": "14:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Rybakina", "odd": 2.05, "selecao_key": "p1" },

            { "tipo": "Sabalenka", "odd": 1.75, "selecao_key": "p2" }

          ]

        }

      ]

    },

    {

      "id": 3006,

      "esporte": "Tênis",

      "icone": "🎾",

      "evento": "Tsitsipas x Zverev",

      "liga": "ATP Finals",

      "data": "2025-11-26",

      "hora": "16:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Tsitsipas", "odd": 1.90, "selecao_key": "p1" },

            { "tipo": "Zverev", "odd": 1.90, "selecao_key": "p2" }

          ]

        }

      ]

    },

    {

      "id": 3007,

      "esporte": "Tênis",

      "icone": "🎾",

      "evento": "Jabeur x Pegula",

      "liga": "WTA Finals",

      "data": "2025-11-27",

      "hora": "13:30",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Jabeur", "odd": 1.80, "selecao_key": "p1" },

            { "tipo": "Pegula", "odd": 2.00, "selecao_key": "p2" }

          ]

        }

      ]

    },

    {

      "id": 3008,

      "esporte": "Tênis",

      "icone": "🎾",

      "evento": "Fritz x Hurkacz",

      "liga": "ATP Masters",

      "data": "2025-11-28",

      "hora": "14:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor do Jogo",

          "opcoes": [

            { "tipo": "Fritz", "odd": 1.75, "selecao_key": "p1" },

            { "tipo": "Hurkacz", "odd": 2.10, "selecao_key": "p2" }

          ]

        }

      ]

    },



    /* ---------------------- 🏎️ FÓRMULA 1 (8 Corridas) ---------------------- */

    {

      "id": 4001,

      "esporte": "Fórmula 1",

      "icone": "🏎️",

      "evento": "GP de Mônaco",

      "liga": "F1 2025",

      "data": "2025-11-23",

      "hora": "10:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor da Corrida",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.25, "selecao_key": "v_ver" },

            { "tipo": "Lewis Hamilton", "odd": 5.50, "selecao_key": "v_ham" }

          ]

        },

        {

          "nome": "Top 3",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.05, "selecao_key": "t3_ver" },

            { "tipo": "Charles Leclerc", "odd": 1.80, "selecao_key": "t3_lec" }

          ]

        }

      ]

    },

    {

      "id": 4002,

      "esporte": "Fórmula 1",

      "icone": "🏎️",

      "evento": "GP do Brasil",

      "liga": "F1 2025",

      "data": "2025-12-01",

      "hora": "14:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor da Corrida",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.30, "selecao_key": "v_ver" },

            { "tipo": "Sérgio Pérez", "odd": 6.00, "selecao_key": "v_per" }

          ]

        }

      ]

    },

    {

      "id": 4003,

      "esporte": "Fórmula 1",

      "icone": "🏎️",

      "evento": "GP de Silverstone",

      "liga": "F1 2025",

      "data": "2025-12-08",

      "hora": "10:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Piloto Mais Rápido na Volta",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.50, "selecao_key": "r_ver" },

            { "tipo": "Lewis Hamilton", "odd": 3.00, "selecao_key": "r_ham" }

          ]

        }

      ]

    },

    {

      "id": 4004,

      "esporte": "Fórmula 1",

      "icone": "🏎️",

      "evento": "GP da Bélgica",

      "liga": "F1 2025",

      "data": "2025-12-15",

      "hora": "10:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Corrida",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.28, "selecao_key": "v_ver" },

            { "tipo": "Charles Leclerc", "odd": 4.50, "selecao_key": "v_lec" }

          ]

        }

      ]

    },

    {

      "id": 4005,

      "esporte": "Fórmula 1",

      "icone": "🏎️",

      "evento": "GP da Itália",

      "liga": "F1 2025",

      "data": "2025-12-22",

      "hora": "10:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Top 3",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.08, "selecao_key": "t3_ver" },

            { "tipo": "Carlos Sainz", "odd": 2.50, "selecao_key": "t3_sai" }

          ]

        }

      ]

    },

    {

      "id": 4006,

      "esporte": "Fórmula 1",

      "icone": "🏎️",

      "evento": "GP do Japão",

      "liga": "F1 2025",

      "data": "2025-12-29",

      "hora": "03:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Corrida",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.22, "selecao_key": "v_ver" },

            { "tipo": "Lando Norris", "odd": 6.50, "selecao_key": "v_nor" }

          ]

        }

      ]

    },

    {

      "id": 4007,

      "esporte": "Fórmula 1",

      "icone": "🏎️",

      "evento": "GP de Abu Dhabi",

      "liga": "F1 2025",

      "data": "2026-01-05",

      "hora": "11:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Corrida",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.20, "selecao_key": "v_ver" },

            { "tipo": "George Russell", "odd": 8.00, "selecao_key": "v_rus" }

          ]

        }

      ]

    },

    {

      "id": 4008,

      "esporte": "Fórmula 1",

      "icone": "🏎️",

      "evento": "GP dos EUA",

      "liga": "F1 2025",

      "data": "2026-01-12",

      "hora": "16:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Piloto Mais Rápido na Volta",

          "opcoes": [

            { "tipo": "Max Verstappen", "odd": 1.45, "selecao_key": "r_ver" },

            { "tipo": "Charles Leclerc", "odd": 3.20, "selecao_key": "r_lec" }

          ]

        }

      ]

    },





    /* ---------------------- 🎮 E-SPORTS (8 Partidas) ---------------------- */

    {

      "id": 5001,

      "esporte": "E-Sports",

      "icone": "🎮",

      "evento": "Team Liquid x G2",

      "liga": "CS:GO Major",

      "data": "2025-11-20",

      "hora": "18:00",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor da Partida",

          "opcoes": [

            { "tipo": "Team Liquid", "odd": 1.80, "selecao_key": "t1" },

            { "tipo": "G2 Esports", "odd": 2.05, "selecao_key": "t2" }

          ]

        },

        {

          "nome": "Total de Rounds (Over/Under)",

          "opcoes": [

            { "tipo": "Mais de 26.5 Rounds", "odd": 1.90, "selecao_key": "over265" },

            { "tipo": "Menos de 26.5 Rounds", "odd": 1.90, "selecao_key": "under265" }

          ]

        }

      ]

    },

    {

      "id": 5002,

      "esporte": "E-Sports",

      "icone": "🎮",

      "evento": "LOUD x FURIA",

      "liga": "Valorant Champions",

      "data": "2025-11-21",

      "hora": "20:30",

      "destaque": true,

      "mercados": [

        {

          "nome": "Vencedor da Partida",

          "opcoes": [

            { "tipo": "LOUD", "odd": 1.65, "selecao_key": "t1" },

            { "tipo": "FURIA", "odd": 2.20, "selecao_key": "t2" }

          ]

        }

      ]

    },

    {

      "id": 5003,

      "esporte": "E-Sports",

      "icone": "🎮",

      "evento": "T1 x Gen.G",

      "liga": "League of Legends LCK",

      "data": "2025-11-22",

      "hora": "06:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Partida",

          "opcoes": [

            { "tipo": "T1", "odd": 1.40, "selecao_key": "t1" },

            { "tipo": "Gen.G", "odd": 2.90, "selecao_key": "t2" }

          ]

        }

      ]

    },

    {

      "id": 5004,

      "esporte": "E-Sports",

      "icone": "🎮",

      "evento": "FaZe Clan x NAVI",

      "liga": "CS:GO Pro League",

      "data": "2025-11-23",

      "hora": "17:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Partida",

          "opcoes": [

            { "tipo": "FaZe Clan", "odd": 2.00, "selecao_key": "t1" },

            { "tipo": "NAVI", "odd": 1.85, "selecao_key": "t2" }

          ]

        }

      ]

    },

    {

      "id": 5005,

      "esporte": "E-Sports",

      "icone": "🎮",

      "evento": "Cloud9 x Evil Geniuses",

      "liga": "Valorant NA",

      "data": "2025-11-24",

      "hora": "21:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Partida",

          "opcoes": [

            { "tipo": "Cloud9", "odd": 1.70, "selecao_key": "t1" },

            { "tipo": "Evil Geniuses", "odd": 2.15, "selecao_key": "t2" }

          ]

        }

      ]

    },

    {

      "id": 5006,

      "esporte": "E-Sports",

      "icone": "🎮",

      "evento": "JD Gaming x Bilibili Gaming",

      "liga": "League of Legends LPL",

      "data": "2025-11-25",

      "hora": "07:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Partida",

          "opcoes": [

            { "tipo": "JD Gaming", "odd": 1.30, "selecao_key": "t1" },

            { "tipo": "Bilibili Gaming", "odd": 3.40, "selecao_key": "t2" }

          ]

        }

      ]

    },

    {

      "id": 5007,

      "esporte": "E-Sports",

      "icone": "🎮",

      "evento": "Heroic x Vitality",

      "liga": "CS:GO Blast Premier",

      "data": "2025-11-26",

      "hora": "19:00",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Partida",

          "opcoes": [

            { "tipo": "Heroic", "odd": 1.95, "selecao_key": "t1" },

            { "tipo": "Vitality", "odd": 1.85, "selecao_key": "t2" }

          ]

        }

      ]

    },

    {

      "id": 5008,

      "esporte": "E-Sports",

      "icone": "🎮",

      "evento": "DRX x Paper Rex",

      "liga": "Valorant Pacific",

      "data": "2025-11-27",

      "hora": "09:30",

      "destaque": false,

      "mercados": [

        {

          "nome": "Vencedor da Partida",

          "opcoes": [

            { "tipo": "DRX", "odd": 1.55, "selecao_key": "t1" },

            { "tipo": "Paper Rex", "odd": 2.50, "selecao_key": "t2" }

          ]

        }

      ]

    }
  ]
};

// Função para atualizar os dados do usuário no navegador sempre que o saldo mudar
function salvarEstadoUsuario() {
  if (BANCO_DE_DADOS.usuario.nome) {
    localStorage.setItem('betsim_usuario', JSON.stringify(BANCO_DE_DADOS.usuario));
  }
}