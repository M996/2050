let ideologies = [
    {
        "id": 0,
        "name": "Seperatists",
        // if a guerrilla group has the ideology id of 0 that means the guerrillas are aligned
        // with a country and seek independence
    },
    {
        "id": 1,
        "name": "Particularists",
        // if a guerrilla group has the ideology id of 1 that means the guerrillas are aligned
        // with the Host Country and will seek autonomy or policy changes
        "addPolicies": [],
        // this is a list of policies that this type of Rebel will want to enact
        "removePolicies": [],
        // this is a list of policies that this type of rebel will want to remove as part of enforcing demands
    },
    {
        "id": 2,
        "name": "Positivist-Dirigists",
        "guerrillaPopPercent": 0.02,
        "guerrillaMorale": 0.3,
        "spreadSpeed": 0.15,
        "unrest": 5,
        // ideologies only cause unrest while the country has not adopted said ideology
        "popGrowthIncrease": 0.0,
        "gdpGrowthIncrease": -0.004,
        "addPolicies": [],
        "removePolicies": [],
        "addGovernment": 0,
        // "addGovernment" is the type of government that this type of rebel will want to impose on the country
        // if they are able to enforce their demands
    },
    {
        "id": 3,
        "name": "Romulotians",
        "guerrillaPopPercent": 0.012,
        "guerrillaMorale": 0.28,
        "spreadSpeed": 0.02,
        "unrest": 0,
        "popGrowthIncrease": 0.0,
        "gdpGrowthIncrease": 0.0,
        "addPolicies": [],
        "removePolicies": [],
        "addGovernment": 0,
    },
    {
        "id": 4,
        "name": "Turengans",
        "guerrillaPopPercent": 0.014,
        "guerrillaMorale": 0.28,
        "spreadSpeed": 0.02,
        "unrest": 1,
        "popGrowthIncrease": 0.0,
        "gdpGrowthIncrease": 0.0,
        "addPolicies": [],
        "removePolicies": [],
        "addGovernment": 0,
    },
]