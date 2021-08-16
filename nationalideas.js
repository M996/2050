const nationalIdeasExample = {
    "manpowerModifier": 0.2, //implemented
    // multiplier for manpower to determine max manpower
    "manpowerGainModifier": 0.2, //implemented
    // multiplier for manpower gain to determine how quickly manpower goes up
    "guerrillaAmount": 0.2,
    // multiplier to determine how many guerillas spawn when a city is lost
    "guerrillaHealth": 0.2
    // multiplier to determine base health of guerillas
    "guerrillaSmallArmDamage": 0.2,
    // multiplier to determine small arms damage of guerillas
    "infantryDistance": 0.2,
    // multiplier to determine distance that can be trvelled by Infantry and how quick
    "infantryCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of all infantry type units at all quality levels
    "infantrySmallArmDamage": 0.2,
    // multiplier for small arms damage done by Infantry
    
    // IMPORTANT: The way to implement damage modifiers that apply to specific units is to make it so that at game start,
    // or whenever a new unit is unlocked and damage amounts are recorded in the country object, the amount of small arms
    // or explosive or other damage (this also applies to heath) is multiplied by this multiplier here, so that the country
    // in question can gain their combat edge in line with their national ideas
    
    "infantrySmallArmHillDamage": 0.2,
    // multiplier for small arms damage done by infantry in hills
    "infantryExplosiveDamage": 0.2,
    // multiplier for explosive damage done by Infantry, more effective against tanks than small arms
    "infantrySmallArmsArmor": 0.2,
    // percentage of extra armor against small arms damage for infantry
    "infantryExplosiveArmor": 0.2,
    // percentage of extra armor against explosive damage for infantry
    "infantryHealth": 0.2
    // multiplier for infantry Health
    "marineCapitalMaintenance": -0.2,
    // multiplier for marine maintenance
    "marineHealth": 0.2,
    // multiplier for marine health
    "marineSmallArmDamage": 0.2,
    // multiplier for small arms damage done by Marines
    "marineExplosiveDamage": 0.2,
    // multiplier for explosive damage done by Marines, more effective against tanks than small arms
    "marineSmallArmsArmor": 0.2,
    // percentage of extra armor against small arms damage for marines
    "marineExplosiveArmor": 0.2,
    // percentage of extra armor against explosive damage for marines
    "spaceInfantryCapitalMaintenance": -0.2,
    // multiplier for space infantry maintenance
    "spaceInfantryHealth": 0.2,
    //  multiplier for space Infantry Health
    "spaceInfantrySmallArmDamage": 0.2,
    // multiplier for small arms damage done by Space Infantry
    "spaceInfantrySmallArmsArmor": 0.2,
    // percentage of extra armor against small arms damage for Space Infantry
    "infantryLowCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Low Quality Infantry
    "infantryLowHealth": 0.2,
    // multiplier for the health of Infantry that are Low Quality
    "infantryNormalCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Normal Quality Infantry
    "infantryNormalHealth": 0.2,
    // multiplier for the health of Infantry that are Normal Quality
    "infantryMediumCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Medium Quality Infantry
    "infantryMediumHealth": 0.2,
    // multiplier for the health of Infantry that are Medium Quality
    "infantryHighCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of High Quality Infantry
    "infantryHighHealth": 0.2,
    // multiplier for the health of Infantry that are High Quality
    "infantryEliteCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Elite Quality Infantry
    "infantryEliteHealth": 0.2,
    // multiplier for the health of Infantry that are Elite Quality
    "tankDistance": 0.2,
    // multiplier to determine distance that can be travelled by Tanks and how quick
    "tankCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of all tank units at all quality levels
    "tankSmallArmDamage": 0.2,
    // multiplier for small arms damage done by tanks
    "tankExplosiveDamage": 0.2,
    // multiplier for explosive damage done by tanks
    "tankSmallArmsArmor": 0.2,
    // percentage of extra armor against small arms damage for tanks
    "tankExplosiveArmor": 0.2,
    // percentage of extra armor against explosive damage for tanks
    "tankHealth": 0.2
    // multiplier for tank Health
    "tankLowCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Low Quality Tanks
    "tankLowHealth": 0.2,
    // multiplier for the health of Tanks that are Low Quality
    "tankNormalCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Normal Quality Tanks
    "tankNormalHealth": 0.2,
    // multiplier for the health of Tanks that are Normal Quality
    "tankMediumCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Medium Quality Tanks
    "tankMediumHealth": 0.2,
    // multiplier for the health of Tanks that are Medium Quality
    "tankHighCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of High Quality Tanks
    "tankHighHealth": 0.2,
    // multiplier for the health of Tanks that are High Quality
    "tankEliteCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Elite Quality Tanks
    "tankEliteHealth": 0.2,
    // multiplier for the health of Tanks that are Elite Quality
    "destroyerDistance": 0.2,
    // multiplier to determine distance that can be travelled by Destroyers and how quick
    "destroyerCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of all destroyer units at all quality levels
    "destroyerExplosiveDamage": 0.2,
    // multiplier for explosive damage done by destroyers
    "destroyerExplosiveArmor": 0.2,
    // percentage of extra armor against explosive damage for destroyers
    "destroyerHealth": 0.2
    // multiplier for destroyerHealth
    "destroyerLowCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Low Quality Destroyers
    "destroyerLowHealth": 0.2,
    // multiplier for the health of Destroyers that are Low Quality
    "destroyerNormalCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Normal Quality Destroyer
    "destroyerNormalHealth": 0.2,
    // multiplier for the health of Destroyers that are Normal Quality
    "destroyerMediumCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Medium Quality Destroyers
    "destroyerMediumHealth": 0.2,
    // multiplier for the health of Destroyers that are Medium Quality
    "destroyerHighCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of High Quality Destroyers
    "destroyerHighHealth": 0.2,
    // multiplier for the health of Destroyers that are High Quality
    "destroyerEliteCapitalMaintenance": -0.2,
    // multiplier for the capital maintenance cost of Elite Quality Destroyers
    "destroyerEliteHealth": 0.2,
    // multiplier for the health of Destroyers that are Elite Quality
    "aircraftHealth": 0.2,
    // multiplier for the health of Aircraft
    "aircraftMaintenance": -0.2,
    // multiplier for the maintenance of Aircraft
    "aircraftDamage": 0.2,
    // multiplier for the damage done by aircraft, which is always explosion damage
    "attritionForEnemies": 0.02,
    // additional attrition damage that enemies take when they are in your owned province
    "timeToAnnexProvince": -1,
    // The amount of reduced years neccesary to annex a province you have been occupying. The base is 4 years
    "battleDiceLandBonus": 2,
    // Number to determine the bonus amount that goes into every roll of the land battle dice
    "battleDiceSeaBonus": 2,
    // Number to determine the bonus amount that goes into every roll of the Sea battle dice
    "battleDiceCorporationBonus": 2,
    // Number to determine the bonus amount that goes into every roll of the Merchant Battle Dice
    "taxModifier": 0.2,
    // multiplier to determine how much extra this country gains from taxes
    "corporateCapitalModifier": 0.2,
    // multiplier to determine how much extra coporations controlled by this country gain from all sources of Capital
    "goodsProducedModifier": 0.2,
    // multiplier for all resources produced
    "corporateGoodsProducedModifier": 0.2,
    // multiplier to determine how much extra resources a corporation produces when it is working in a province
    "populationGrowthModifier": 0.005
    // multiplier for increased (or decreased) population growth
    "gdpPerCapitaGrowthModifier": 0.02
    // multiplier for increased gdp per capita growth
    "buildingConstructionCost": -0.2,
    // multiplier for cost to construct new building in owned cities
    "incomeFromTradeModifier": 0.2,
    // multipler for how much resources and Capital are obtained when trade ships enter your cities
    "costToBuyCorporateStock": -0.2,
    // multiplier to determine discount when buying corporate stock
    "supportedIdeologyGrowthModifier": 0.02,
    // number added to the supported ideology of this state each month in all provinces in which you are supporting an ideology
    "coreCreationCostModifier": -0.4,
    // mulitplier to core creation cost to determine core creation cost decreases
    "corruptionGainModifier": -0.2,
    // multiplier to determine how much more slowly corruption should gain when corruption is going up
    "nationalBaseDefense": 1,
    // Number to be added to the baseDefense of all owned cities, thus increasing ability to defend your own territory
    "unrestReduction": 2, // implemented!
    // reduces unrest in all provinces by this amount
    
    
    // Add some Trade Bonuses here when trade is fleshed out
}