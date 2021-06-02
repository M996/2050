let ideologies = [
    {
        "id": 0,
        "name": "Seperatist",
        // if a guerrilla group has the ideology id of 0 that means the guerrillas are aligned
        // with a country and seek independence
    },
    {
        "id": 1,
        "name": "Particularist",
        // if a guerrilla group has the ideology id of 1 that means the guerrillas are aligned
        // with the Host Country and will seek autonomy or policy changes
    },
    {
        "id": 2,
        "name": "Positivist-Dirigist",
        "guerrillaPopPercent": 0.02,
        "guerrillaMorale": 0.3,
        "spreadSpeed": 0.15,
        "unrest": 5,
        // ideologies only cause unrest while the country has not adopted said ideology
        "popGrowthIncrease": 0.0,
        "gdpGrowthIncrease": -0.004,
    },
    {
        "id": 3,
        "name": "Romulotian",
        "guerrillaPopPercent": 0.012,
        "guerrillaMorale": 0.28,
        "spreadSpeed": 0.02,
        "unrest": 0,
        "popGrowthIncrease": 0.0,
        "gdpGrowthIncrease": 0.0,
    },
    {
        "id": 4,
        "name": "Turengan",
        "guerrillaPopPercent": 0.014,
        "guerrillaMorale": 0.28,
        "spreadSpeed": 0.02,
        "unrest": 1,
        "popGrowthIncrease": 0.0,
        "gdpGrowthIncrease": 0.0,
    },
]