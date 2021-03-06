
newCountryID = 1;
// the number above should be equal to the total number of existing countries
let countries = [
    {
        "id": 0,
        "name": "Tehlike Empire",
        "color": "#39EB23",
        "nameColored": "<span style='color:#39EB23'>Tehlike Empire</span>",
        "homePlanet": "Medera",
        "homeContinent": "Turen",
        "isPlayer": true,
        "isOtherPlayer": '',
        "isDead": false,
        // isOtherPlayer is used to determine whether a country is controlled by another player in a multiplayer game
        // if it is not, the string is empty, if it is this string could hold their IP address
        
        
        // Economy ===================================
        "monthlyEnergy": 0,
        "buildingEnergyExpense": 0.75,
        // barracks and missile silos increase the monthly energy expense
        "energyExpense": 0,
        // barracks increase the monthly energy expense
        "energyStored": 10,
        "energyStorageCapacity": 100,
        "monthlyCapital": 29.15,
        "buildingCapitalExpense": 4,
        "capitalExpense": 0,
        // ports, barracks, and missile silos increase the monthly capital expense
        // base Capital for all countries is +2
        "capitalStored": 350,
        "capitalStorageCapacity": 699.6,
        // capital storage is equal to 2 years capital income, past this the full coffers penalty should apply, updated annual
        "debt": 0,
        "maxDebt": 1749,
        // maxDebt equal to 5 years income if the total debt surpasses this amount the country enters bankruptcy.
        "debtInterestRate": 0.06,
        "debtOwner": [],
        "debtOwnerAmount": [],
        // debt owner and debtowner amount will be used to track countries and corporations that buy
        // this country's debt and how much they have purchased
        "isBankrupt": '',
        "monthlyInfluence": 3,
        "influenceExpense": 0,
        // base Influence for all countries is +3
        "influenceStored": 0,
        "influenceStorageCapacity": 999,
        "monthlyFood": 12, 
        "foodExpense": 2.6892,
        // base Food for all countries is +2. Food is consumed at a rate of 0.00000003 per population
        "foodStored": 10,
        "foodStorageCapacity": 100,
        "isStarving": false, 
        "buildingProcess1": [],
        "buildingProcess2": [1,2,4,8,40],
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
        "monthlyOil": 0,
        "oceanRigOil": 0,
        "syntheticOilProduced": 0,
        "oilExpense": 0,
        // base for all countries is 0
        "oilStored": 10,
        "oilStorageCapacity": 99,
        "monthlyPreciousMetal": 0,
        "preciousMetalExpense": 0,
        "preciousMetalStored": 0,
        "preciousMetalStorageCapacity": 999,
        "monthlyNuclearMaterial": 0,
        "nuclearMaterialExpense": 0,
        "nuclearMaterialStored": 10,
        "nuclearMaterialStorageCapacity": 99,
        "monthlyAntiMatter": 0,
        "antiMatterExpense": 0,
        "antiMatterStored": 0,
        "antiMatterStorageCapacity": 99,
        "monthlyExoticMatter": 0,
        "exoticMatterExpense": 0,
        "exoticMatterStored": 0,
        "exoticMatterStorageCapacity": 99,
        // production of processed metals and minerals comes from building processes
        "processedMetalExpense": 0,
        "monthlyProcessedMetal": 0,
        "processedMetalStored": 40,
        "processedMetalStorageCapacity": 99,
        "processedMineralsExpense": 0,
        "monthlyProcessedMinerals": 0,
        "processedMineralsStored": 80,
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
        // the current power level of a country will be used by the ai to determine if it should
        // go to war with another country
        "hasPort": true,
        "hasSpacePort": false,
        "ideology": 4,
        "mainEthnicity": 0,
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
        // The 'wil' or World Independence League is similar to the UN but much more capable militarily.
        // It is present at game start on World 4 and can be played as, with the goal of protecting small
        // and defending countries. Protecting countries succesfully yields increased authority which can
        // be used to levy taxes and centralize power until the CIL has formed a one world government.
        "unionAuthority": 0,
        "allies": [],
        "rivals": [1],
        "embargoes": [],
        
        
        // Military ==========================================================================
        "enemies": [],
        // "enemies" denotes countries that are actively at war with this country right now
        "armies": [],
        "fleets": [],
        // armies and fleets arrays will be used to find all units outside of cities to display them
        // on the map to players
        "infantry": [],
        "marines": [],
        "guerrillas": [],
        "hostileGuerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
        "tanks": [0],
        "aircraft": [],
        "destroyers": [],
        "submarines": [],
        "aircraftCarriers": [],
        "orbitalWeaponsPlatforms": [],
        "taskShips": [],
        "skyHooks": [],
        "ICBMs": [],
        // used to keep track of all units owned by this country. 3 land, 4 sea, 10 space, and 2 cyber eventually
        "infantryReinforce": [],
        "marinesReinforce": [],
        "guerrillasReinforce": [],
        "hostileGuerrillasReinforce": [],
        "spaceInfantryReinforce": [],
        "spaceMarinesReinforce": [],
        "tanksReinforce": [0],
        "aircraftReinforce": [],
        "destroyersReinforce": [],
        "aircraftCarriersReinforce": [],
        "orbitalWeaponsPlatformsReinforce": [],
        "taskShipsReinforce": [],
        "skyHooksReinforce": [],
        // These arrays are used to keep track of which units need reinforcements because they have taken damage
        
        
        // Units Stats ======================
        "infantryMaxHealth": 60,
        "infantrySmallArmsDamage": 2.2,
        "infantryExplosiveDamage": 1,
        "infantrySmallArmsArmor": 0.2,
        "infantryExplosiveArmor": 0.1,
        "infantryDirectedEnergyArmor": 0.5,
        "infantryKineticArmor": 0.5,
        "infantrySpeed": 30,
        "infantryCapitalMaintenance": 0.2,
        "infantryEnergyMaintenance": 0.04,
        "infantryCapitalCost": 0.6,
        
        "marineCapitalCost": 0.8,
        "marineCapitalMaintenance": 0.2,
        
        "spaceInfantryCapitalCost": 1.8,
        "spaceInfantryCapitalMaintenance": 0.5,
        
        "spaceMarineCapitalCost": 2.2,
        "spaceMarineCapitalMaintenance": 0.6,
        
        "tankMaxHealth": 100,
        "tankSmallArmsDamage": 1,
        "tankExplosiveDamage": 4,
        "tankSmallArmsArmor": 0.6,
        "tankExplosiveArmor": 0.2,
        "tankDirectedEnergyArmor": 0.2,
        "tankKineticArmor": 0.1,
        "tankSpeed": 50,
        "tankProcessedMetalMaintenance": 0.04,
        "tankCapitalMaintenance": 0.6,
        "tankEnergyMaintenance": 0.18,
        "tankCapitalCost": 1.5,
        
        "aircraftEvasion": 0.9,
        "aircraftExplosiveDamage": 15,
        "aircraftSmallArmsArmor": 0.2,
        "aircraftExplosiveArmor": 0.1,
        "aircraftDirectedEnergyArmor": 0.1,
        "aircraftKineticArmor": 0.0,
        "aircraftSpeed": 120,
        "aircraftCapitalMaintenance": 0.65,
        "aircraftEnergyMaintenance": 0.2,
        "aircraftCapitalCost": 1.5,
        "aircraftAttackPreference": 'units',
        
        "destroyerMaxHealth": 400,
        "destroyerExplosiveDamage": 15,
        "destroyerSmallArmsArmor": 1,
        "destroyerExplosiveArmor": 0.3,
        "destroyerDirectedEnergyArmor": 0.4,
        "destroyerKineticArmor": 0.1,
        "destroyerSpeed": 45,
        "destroyerProcessedMetalMaintenance": 0.08,
        "destroyerCapitalMaintenance": 1.4,
        "destroyerEnergyMaintenance": 0.35,
        "destroyerCapitalCost": 1.6,
        "destroyerCarryingCapacityBonus": 0,
        // this number increases the amount of land units you can carry (0.5 - 2)
        
        "carrierMaxHealth": 720,
        "carrierSmallArmsArmor": 1,
        "carrierExplosiveArmor": 0.3,
        "carrierDirectedEnergyArmor": 0.4,
        "carrierKineticArmor": 0.1,
        "carrierSpeed": 45,
        "aircraftCapacity": 8,
        "carrierCarryingCapacityBonus": 0,
        // this number increases the amount of aircraft you can carry (1 - 6)
        "carrierCapitalMaintenance": 2.2,
        "carrierEnergyMaintenance": 0.6,
        "carrierCapitalCost": 2.4,
        
        "submarineEvasion": 0.8,
        "submarineExplosiveDamage": 200,
        "submarineSmallArmsArmor": 1,
        "submarineExplosiveArmor": 0.1,
        "submarineDirectedEnergyArmor": 1,
        "submarineKineticArmor": 0.1,
        "submarineSpeed": 25,
        "submarineCapitalMaintenance": 1.8,
        "submarineEnergyMaintenance": 0.4,
        "submarineCapitalCost": 1.8,
        
        "taskShipMaxHealth": 10,
        "taskShipEvasion": 0.95,
        // evasion may differ depending on whether a craft is in low orbit, high orbit, or geostationary orbit
        "taskShipDirectedEnergyDamage": 50,
        "taskShipDirectedEnergyTracking": 0.5,
        "taskShipKineticDamage": 10,
        "taskShipKineticTracking": 0.1,
        "taskShipSmallArmsArmor": 0.0,
        "taskShipExplosiveArmor": 0.0,
        "taskShipDirectedEnergyArmor": 0.98,
        "taskShipKineticArmor": 0.1,
        "taskShipNuclearMaintenance": 0.2,
        // Nuclear Salt Water technology disables energy maintenance and replaces it with Nuclear Maintenance
        "taskShipAntimatterMaintenance": 0.08,
        // Antimatter Reactor Technology disables Nuclear Maintenance and replaces it with Antimatter Maintenance
        "taskShipCapitalMaintenance": 2.6,
        "taskShipEnergyMaintenance": 1.8,
        // maintenance costs shouldn't actually be this high because they will be reduced based on ownership of skyhooks and space elevators
        
        // ==== Total Battle Losses ================================================================================
        
        "infantryLosses": 0,
        "marineLosses": 0,
        "spaceInfantryLosses": 0,
        "spaceMarineLosses": 0,
        "tankLosses": 0,
        "aircraftLosses": 0,
        "destroyerLosses": 0,
        "carrierLosses": 0,
        "submarineLosses": 0,
        "taskShipLosses": 0,
        
        // ==== Guerrilla Spawn Stats ==============================================================================
        "guerrillaPopPercent": 0.0075,
        // this is the amount of guerillas that can spawn as a percentage of a city when they pop in a province
        // if hostile seperatist guerrillas pop because of a foreign core then they will use x2 this number
        "guerrillaHealthPercent": 0.8,
        // the amount of Health that this country's guerrillas have proportional to their Infantry
        "guerrillaMorale": 0.25,
        "guerrillaSpeed": 0.75,
        // the percentage of speed and distance these units can travel compared to infantry
        "guerrillaSmallArmsDamage": 1.8,
        "guerrillaExplosiveDamage": 0.8,
        
        "hostileGuerrillas": [0],
        // this array contains all guerrillas which have spawned in a country in order to force a province to defect or force a new government
        "hostileGuerrillasIdeology": [3],
        // if guerrillas are not fighting to free a province for another country but rather for ideological reasons, then their ideology would appear here
        "hostileGuerrillasNeutral": [],
        // this is a list of countries who do not have to fight guerrillas this country spawns because they are enemies with the Host Country
        // or allied directly with the Guerrillas
        
        "skyHookProcessedMineralsMaintenance": 0.1,
        "skyHookCapitalMaintenance": 3.2,
        "skyHookEnergyMaintenance": 3,
        
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
        "annualPopulationGrowth": 1.01,
        "morale": 0.3000,
        // Damage done to a unit after armor is accounted for is first subtracted from the unit health and then subtracted
        // from the unit's morale pool and the army morale pool. Once morale reaches zero for a unit it will be pulled off
        // the battlefied
        "offensiveBuff": null,
        // offensiveBuff is set to null unless this country begins unlocking offensive buffs by going down
        // the Offensive Expansion Route, then this value will appear as a number
        "landQuality": 0,
        "navalQuality": 0,
        "cyberNetwork": 100,
        "offensiveHackers": 0,
        "defensiveHackers": 0,
        "viruses": [],
        "spies": [1],
        // "spies" will be active agents in countries listed in the array above, each number corresponds to another country
        "hasMilitaryIntel": [1],
        // hasMilitaryIntel is an array of all the countries that this country has military intel on currently
        
        
        // Corporate =============================================================================
        "stockOwnedCorporations": [0],
        "stockAmountOwned": [96],
        
        
        // National Ideas ========================================================================
        "destroyerCapitalMaintenance": -0.15,
        "incomeFromTradeModifier": 0.1,
        "battleDiceLandBonus": 1,
        "manpowerModifier": 0.2,
        "manpowerGainModifier": 0.2,
        "infantrySmallArmDamage": 0.1,
        "timeToAnnexProvince": -1,
        
        // Internal ==============================================================================
        "government": "Turengan-Empire",
        "averageGdpPerCapita": 1.32,
        "annualGdpPerCapitaGrowth": 1.03,
        // the average gdppercapita growth on Earth is 2%, on other planets that standard might be higher or lower
        "taxModifier": 0.6,
        // tax modifier can be set to:
        // Socialist   2 = -0.02 annualGdpPerCapitaGrowth (-2%) (evens out after 34 years)
        // Very High   1.4 = -0.01 annualGdpPerCapitaGrowth (-1%) (evens out after 33 years)
        // High        1.2 = -0.005 annualGdpPerCapitaGrowth (-0.5%) (evens out after 36 years)
        // Normal      1 = 0 change
        // Low         0.8 = +0.005 annualGdpPerCapitaGrowth (+0.5%) (evens out difference after after 45 years)
        // Very Low    0.6 = +0.01 annualGdpPerCapitaGrowth (+1%) (evens out difference after 52 years)
        // Minarchist  0.2 = +0.025 annualGdpPerCapitaGrowth (+2.5%) (evens out after 66 years)
        "taxChangeYear": 2000,
        // this records the last year in which taxes were changed, once a tax policy is changed it cannot be
        // changed again for at least 10 years even if it is changed through events spawned by high corruption
        "inDepression": false,
        "corruption": 10,
        // corruption:
        // increases unrest
        // increases time to recover from Depressions
        // increases full coffers penalty
        // decreases chance to discover new technologies
        // decreases morale
        // causes negative events to randomly spawn
        // causes discord in internal politics
        "unrest": 0,
        "autonomyDecrease": 0.0,
        // autonomyDecrease determines how quickly your province autonomy goes down after it has been increased
        "baseDefense": 0,
        // baseDefense is the additional defense that all your cities receive
        "GeneralBonus": 0,
        // General Bonus is the additional bonus added to randomly generated Generals
        "AdmiralBonus": 0,
        // Admiral Bonus is the additional bonus added to randomly generated Admirals
        "warExhaustion": 0,
        "warExhaustionDecrease": -0.1,
        "provincialUnrestReduction1": [],
        "provincialUnrestReduction2": [],
        "provincialUnrestReduction3": [],
        "provincialUnrestReduction4": [],
        "ownedCities1": [],
        "ownedCities2": [0,1,2,3,4,5,6,7,8,33],
        "ownedCities3": [],
        "ownedCities4": [],
        "ownedProvinces1": [],
        "ownedProvinces2": [0,1,2,3,15],
        "ownedProvinces3": [],
        "ownedProvinces4": [],
        "secedingProvinces1": [],
        "secedingProvinces2": [],
        "secedingProvinces3": [],
        "secedingProvinces4": [],
        // when a province is on track to secede, it will appear in these arrays
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
        // ports must be kept track of so that we can know if this country is able to participate in international trade
        // with other countries on the same planet for raw resources such as food, processed minerals and metal, raw minerals
        // and metal, precious metals and oil
        "numberOfResearchFacilities": 0,
        // research facilities must be kept track of so that we can determine if this country is able to acquire new technology
        // on its own without buying those technologies from a corporation
        "numberOfSkyhooks": 0,
        "numberOfSpaceElevators": 0,
        // space elevators and skyhooks must be kept track of so that we can know if this country is able to participate in
        // space trade of raw resources such as minerals, metal, precious metal, and food
        "numberOfSolarSatellites1": 0,
        "numberOfSolarSatellites2": 0,
        "numberOfSolarSatellites3": 0,
        "numberOfSolarSatellites4": 0,
        "numberOfComSatellites1": 0,
        "numberOfComSatellites2": 0,
        "numberOfComSatellites3": 0,
        "numberOfComSatellites4": 0,
        // we need to keep track of the number of solar satellites so the country can sell energy globally, the com satellites
        // are to maintain communications with distant units, cities, and keep up morale, and the weather satellites
        // are to control the weather in cretain provinces like keeping ice out of an ocean tile or increasing food production
        "spaceDebrisExtractors1": 0,
        "spaceDebrisExtractors2": 0,
        "spaceDebrisExtractors3": 0,
        "spaceDebrisExtractors4": 0,
        // Space Debris Extractors remove space debris from the planet's orbital cloud
        // Multiplayer ========================================================================
        "barterPoints": 100,
        "points": 0
    },
    {
        "id": 0,
        "name": "Panera",
        "color": "#F76F86",
        "nameColored": "<span style='color:V'>Panera</span>",
        "homePlanet": "Medera",
        "homeContinent": "Turen",
        "mainEthnicity": 1,
        "isPlayer": false,
        "isOtherPlayer": '',
        "isDead": false,
        "provincialUnrestReduction1": [],
        "provincialUnrestReduction2": [],
        "provincialUnrestReduction3": [],
        "provincialUnrestReduction4": [],
        "secedingProvinces1": [],
        "secedingProvinces2": [],
        "secedingProvinces3": [],
        "secedingProvinces4": [],
        "ownedProvinces1": [],
        "ownedProvinces2": [],
        "ownedProvinces3": [],
        "ownedProvinces4": [],
        "buildingProcess1": [],
        "buildingProcess2": [],
        "buildingProcess3": [],
        "buildingProcess4": [],
        "provincialUnrestReduction": [],
    },
]