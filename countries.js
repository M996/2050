

let countries = [
    {
        "id": 0,
        "name": "Tehlike Empire",
        "color": "rgb(57,135,35)",
        "nameColored": "<span color='rgb(57,135,35)'>Tehlike Empire</span>",
        "homePlanet": "Medera",
        "homeContinent": "Turen",
        "isPlayer": true,
        "isOtherPlayer": '',
        "isDead": false,
        // isOtherPlayer is used to determine whether a country is controlled by another player in a multiplayer game
        // if it is not, the string is empty, if it is this string could hold their IP address
        // Economy ===================================
        "monthlyEnergy": 0,
        "buildingEnergyExpense": 0.5,
        // barracks and missile silos increase the monthly energy expense
        "energyExpense": 0,
        // barracks increase the monthly energy expense
        "energyStored": 10,
        "energyStorageCapacity": 100,
        "monthlyCapital": 31.13,
        "buildingCapitalExpense": 3.2,
        "capitalExpense": 0,
        // ports, barracks, and missile silos increase the monthly capital expense
        // base Capital for all countries is +2
        "capitalStored": 100,
        "capitalStorageCapacity": 1867.8,
        // capital storage is equal to 5 years capital income, past this the full coffers penalty should apply, updated annual
        "debt": 30,
        "maxDebt": 3735.6,
        // maxDebt equal to 20 years income if the total debt surpasses this amount the country enters bankruptcy.
        "debtInterestRate": 0.06,
        "isBankrupt": '',
        "monthlyInfluence": 3,
        "influenceExpense": 0,
        // base Influence for all countries is +3
        "influenceStored": 0,
        "influenceStorageCapacity": 999,
        "monthlyFood": 4,
        // monthlyFood for Tehlike Empire is 12
        "foodExpense": 2.6892,
        // base Food for all countries is +2. Food is consumed at a rate of 0.00000003 per population
        "foodStored": -10,
        "foodStorageCapacity": 100,
        "isStarving": false,
        "buildingProcess1": [],
        "buildingProcess2": [0,1,2,3,4,5,6,7,8,9,10],
        "buildingProcess3": [],
        "buildingProcess4": [],
        "monthlyMinerals": 1,
        // base Minerals for all countries is +1
        "mineralExpense": 0,
        "mineralStored": 40,
        "mineralStorageCapacity": 99,
        "monthlyMetal": 3.01,
        // base Metals for all counties is +1
        "metalExpense": 0,
        "metalStored": 50,
        "metalStorageCapacity": 99,
        "monthlyOil": 3,
        "oceanRigOil": 0,
        "syntheticOilProduced": 0,
        "oilExpense": 0,
        // base for all countries is 0
        "oilStored": 10,
        "oilStorageCapacity": 99,
        "monthlyPreciousMetal": 0,
        "preciousMetalExpense": 0,
        "preciousMetalStored": 0,
        "preciousMetalStorageCapacity": 99,
        "monthlyNuclearMaterial": 0,
        "nuclearMaterialExpense": 0,
        "nuclearMaterialStored": 0,
        "nuclearMaterialStorageCapacity": 99,
        "monthlyAntiMatter": 0,
        "antiMatterExpense": 0,
        "antiMatterStored": 0,
        "antiMatterStorageCapacity": 999,
        "monthlyExoticMatter": 0,
        "exoticMatterExpense": 0,
        "exoticMatterStored": 0,
        "exoticMatterStorageCapacity": 99,
        // production of processed metals and minerals comes from building processes
        "processedMetalExpense": 0,
        "monthlyProcessedMetal": 0,
        "processedMetalStored": 20,
        "processedMetalStorageCapacity": 99,
        "processedMineralsExpense": 0,
        "monthlyProcessedMinerals": 0,
        "processedMineralsStored": 20,
        "processedMineralsStorageCapacity": 99,
        "monthlyAgriculturalMaterial": 0,
        "agriculturalMaterialExpense": 0,
        "agriculturalMaterialStored": 0,
        "agriculturalMaterialStorageCapacity": 100,
        "monthlySuperHighTensile": 0,
        "superHighTensileExpense": 0,
        "superHighTensileStored": 0,
        "superHighTensileStorageCapacity": 99,
        // Diplomatic ========================================================================
        "diplomaticInfluence": 0,
        "currentLandPower": 0,
        "currentNavalPower": 0,
        "currentSpacePower": 0,
        // the current power level of a country will be used by the ai to determine if it should
        // go to war with another country
        "hasPort": true,
        "hasSpacePort": false,
        "ideology": "Turenga",
        "mainEthnicity": "Roque",
        "baseRights": null,
        "baseRightsOverlord": [],
        "territory": null,
        "territoryOverlord": [2],
        "colony": null,
        "colonyOverlord": [],
        "satellite": null,
        "satelliteOverlord": [],
        "dirigist": false,
        "dirigistOverlord": [],
        "concilar": false,
        "concilarOverlord": [],
        "tokem": false,
        "tokemOverlord": [],
        "eu": false,
        "euOverlord": [],
        "northeastLeague": false,
        "northeastLeagueOverlord": false,
        "un": false,
        "unOverlord": [],
        "wil": false,
        "wilOverlord": [],
        // The 'cil' or Central Independence League is similar to the UN but much more capable militarily.
        // It is present at game start on World 4 and can be played as, with the goal of protecting small
        // and defending countries. Protecting countries succesfully yields increased authority which can
        // be used to levy taxes and centralize power until the CIL has formed a one world government.
        "unionAuthority": 0,
        "allies": [],
        "rivals": [1],
        "embargoes": [],
        // Military ==========================================================================
        "enemies": [1],
        // "enemies" denotes countries that are actively at war with this country right now
        "infantry": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
        "tanks": [],
        "aircraft": [],
        "destroyers": [],
        "submarines": [],
        "aircraftCarriers": [],
        "orbitalWeaponsPlatforms": [],
        "taskShips": [],
        // used to keep track of all units owned by this country. 2 land, 1 air, 3 sea, 2 space, and 2 cyber eventually
        "casusBelliName": ['conquest-1'],
        "casusBelliID": [1],
        "casusBelliProvinceID": [4],
        // here we can see that the Tehlike Empire has a conquest casus belli on Paneria (country ID = 1) on the province of Aden
        "totalPopulation": 67230000,
        "manpowerStored": 2000000,
        "manpowerStorageCapacity": 2016900,
        // manpower capacity is equal to 3% of total population
        "monthlyManpower": 16808,
        // monthly manpower is equal to 1/120th of the total manpower storage capacity
        "manpowerExpense": 0,
        "annualPopulationGrowth": 0.02,
        "morale": 0.3000,
        "landQuality": 0,
        "navalQuality": 0,
        "spaceQuality": 0,
        "cyberNetwork": 100,
        "offensiveHackers": 0,
        "defensiveHackers": 0,
        "viruses": [],
        "spies": [1],
        // "spies" will be active agents in countries listed in the array above, each number corresponds to another country
        // Corporate =============================================================================
        "stockOwnedCorporations": [0],
        "stockAmountOwned": [96],
        // National Ideas ========================================================================
        "destroyerCapitalMaintenance": -0.15,
        "incomeFromTradeModifier": 0.1,
        "battleDiceLandBonus": 1,
        "manpowerModifier": 0.2,
        "manpowerGainModifier": 0.2,
        "infantrySmallArmDamage": 0.15,
        "timeToAnnexProvince": -1,
        // Internal ==============================================================================
        "government": "Turengan-Empire",
        "averageGdpPerCapita": 1.32,
        "annualGdpPerCapitaGrowth": 0.05,
        "unrest": 0,
        "warExhaustion": 0,
        "warExhaustionDecrease": -0.1,
        "ownedCities1": [],
        "ownedCities2": [0,1,2,3,4,5,6,7,8,33],
        "ownedCities3": [],
        "ownedCities4": [],
        "ownedProvinces1": [],
        "ownedProvinces2": [0,1,2,3,15],
        "ownedProvinces3": [],
        "ownedProvinces4": [],
        "policies": [],
        // add some more possible buffs/nerfs from policies down here
        "techs": [],
        "powerPlantLevel": 2,
        // max 2
        "metalProcessingPlantLevel": 2,
        // max 2
        "mineralProcessingPlantLevel": 3,
        // max 3
        "nuclearPowerPlantLevel": 3,
        // max 3
        "railgunLevel": 3,
        // max 3
        "missileSystemLevel": 3,
        // max 3
        "groundDefenseLaserLevel": 1,
        // max 2 min 0
        "infantryLevel": 5,
        // max 5
        "tankLevel": 5,
        // max 5
        "aircraftLevel": 3,
        // max 3
        "destroyerLevel": 5,
        // max 5
        "ICBMLevel": 2,
        // max 2 min 0
        "hasMarines": true,
        "hasCarriers": true,
        "hasSeaStead": true,
        "hasSpaceInfantry": true,
        "hasAsteroidHabitat": true,
        "hasSolarCylinder": true,
        "hasSolarPowerStation": true,
        "hasSpaceDebrisExtractor": true,
        "hasSpaceElevator": true,
        "hasWormhole": true,
        "expansionLikelyOptions": ["offensive", "maritime"],
        "expansionPath": "none",
        "numberOfPorts": 0,
        // ports must be kept track of so that we can know if this country is able to participate in intrernational trade
        // with other countries on the same planet for raw resources such as food, processed minerals and metal, raw minerals
        // and metal, precious metals and oil
        "numberOfResearchFacilities": 0,
        // research facilities must be kept track of so that we can determine if this country is able to acquire new technology
        // on its own without buying those technologies from a corporation
        "numberOfSkyhooks": 0,
        "numberOfSpaceElevators": 0,
        // space elevators and skyhooks must be kept track of so that we can know if this country is able to participate in
        // space trade of raw resources such as minerals, metal, precious metal, and food
        "numberOfSolarSatellites": 0,
        "numberOfComSatellites": 0,
        "numberOfWeatherSatellites": 0,
        // we need to keep track of the number of solar satellites so the country can sell energy globally, the com satellites
        // are to maintain communications with distant units, cities, and keep up morale, and the weather satellites
        // are to control the weather in cretain provinces like keeping ice out of an ocean tile or increasing food production
        // Multiplayer ========================================================================
        "barterPoints": 100,
        "points": 0
    },
]