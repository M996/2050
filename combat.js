// this file contains all combat functions



const cityBattle = function(battle) {
    
    battleDiceAttacker = Math.floor(Math.random() * 11);
    battleDiceDefender = Math.floor(Math.random() * 11);
    
    switch (battle.planetID) {
        case 1:
            
        break;
        case 2:
            
            map2Cities[battle.cityID].attackingBattleRoll = battleDiceAttacker;
            map2Cities[battle.cityID].defendingBattleRoll = battleDiceDefender;
            
            if (document.querySelector('#city-index').textContent == battle.cityID &&
                document.querySelector(".city-combat-screen").style.display == "flex") {
                
                updateCombatWindow(map2Cities[battle.cityID]);
                // if (the combat window for (this city is currently open then update the window as the battle progresses
            }
            
            defenderDamageModifier = map2Cities[battle.cityID].baseDefense + map2Cities[battle.cityID].defendingGeneral + battleDiceDefender;
            switch (defenderDamageModifier) {
                case 0:
                    defenderDamageModifier = 0.5;
                break;
                case 1:
                    defenderDamageModifier = 0.6;
                break;
                case 2:
                    defenderDamageModifier = 0.7;
                break;
                case 3:
                    defenderDamageModifier = 0.75;
                break;
                case 4:
                    defenderDamageModifier = 0.8;
                break;
                case 5:
                    defenderDamageModifier = 0.9;
                break;
                case 6:
                    defenderDamageModifier = 1;
                break;
                case 7:
                    defenderDamageModifier = 1.05;
                break;
                case 8:
                    defenderDamageModifier = 1.1;
                break;
                case 9:
                    defenderDamageModifier = 1.15;
                break;
                case 10:
                    defenderDamageModifier = 1.2;
                break;
                case 11:
                    defenderDamageModifier = 1.25;
                break;
                case 12:
                    defenderDamageModifier = 1.3;
                break;
                case 13:
                    defenderDamageModifier = 1.4;
                break;
                case 14:
                    defenderDamageModifier = 1.5;
                break;
                default:
                    defenderDamageModifier = 1.6;
                break;
            }
            
        break;
        case 3:
            
        break;
        case 4:
            
        break;
    }
    
    
    // Add City Defense points here
    // update bonus dice to also reflect city defensive bonus on screen
    // start having attacking units deal damage to defending units first
    // mousing over morale bar should give total morale in number locale string
    
    
}