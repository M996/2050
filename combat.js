// this file contains all combat functions



const cityBattle = function(battle) {
    
    
    battleDiceAttacker = Math.floor(Math.random() * 11);
    battleDiceDefender = Math.floor(Math.random() * 11);
    switch (battle.planetID) {
        case 1:
            
        break;
        case 2:
            
            map2Cities[battle.cityID].attackingBattleRoll = battleDiceAttacker;
            map2Cities[battle.cityID].defendingBattleRoll = battleDiceDefender
            
        break;
        case 3:
            
        break;
        case 4:
            
        break;
    }
    
    if (document.querySelector('#city-index').textContent == battle.cityID && document.querySelector(".city-combat-screen").style.display == "flex") {
        updateCombatWindow(map2Cities[battle.cityID], battleDiceAttacker, battleDiceDefender);
        // if (the combat window for (this city is currently open then update the window as the battle progresses
    }
    
    // Add City Defense points here (should effect Battle Dice and morale by +1%)
    // update bonus dice to also reflect city defensive bonus on screen
    // start having attacking units deal damage to defending units first
    
    
}