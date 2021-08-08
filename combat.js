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
                // if the combat window for this city is currently open then update the window as the battle progresses
            }
            
            
            
            
            attackerDamageModifier = map2Cities[battle.cityID].attackingGeneral + battleDiceAttacker;
            switch (attackerDamageModifier) {
                case 0:
                    attackerDamageModifier = 0.5;
                break;
                case 1:
                    attackerDamageModifier = 0.6;
                break;
                case 2:
                    attackerDamageModifier = 0.7;
                break;
                case 3:
                    attackerDamageModifier = 0.75;
                break;
                case 4:
                    attackerDamageModifier = 0.8;
                break;
                case 5:
                    attackerDamageModifier = 0.9;
                break;
                case 6:
                    attackerDamageModifier = 1;
                break;
                case 7:
                    attackerDamageModifier = 1.05;
                break;
                case 8:
                    attackerDamageModifier = 1.1;
                break;
                case 9:
                    attackerDamageModifier = 1.15;
                break;
                case 10:
                    attackerDamageModifier = 1.2;
                break;
                case 11:
                    attackerDamageModifier = 1.25;
                break;
                case 12:
                    attackerDamageModifier = 1.3;
                break;
                case 13:
                    attackerDamageModifier = 1.4;
                break;
                case 14:
                    attackerDamageModifier = 1.5;
                break;
                default:
                    attackerDamageModifier = 1.6;
                break;
            }
            
            
            map2Cities[battle.cityID].combatAttackingPositions.forEach(function() {
                        
                attacker = attackerString.split("-");
                // figure out who the dfending unit in this position is and determine their attack strength
                switch(attacker[0]) {
                     case 'tank':
                      
                   tankOwnerID = tankUnits[attacker[1]].ownerID;
                   attackerSmallArmsDamage = countries[tankOwnerID].tankSmallArmsDamage;
                   attackerExplosiveDamage = countries[tankOwnerID].tankExplosiveDamage;
                   
                   if (tankUnits[attacker[1]].health < (countries[tankOwnerID].tankMaxHealth * 0.5)) {
                    attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                   } // if a unit is at less than half health then it will only do 50% normal damage
                    
                   attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                   attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                   // when fighting in cities, tanks do 50% less damage
                   
                  break; 
                  case 'spaceMarine':
                    
                    spaceMarineOwnerID = spaceMarineUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[spaceMarineOwnerID].infantrySmallArmsDamage * 2;
                    attackerExplosiveDamage = 0;
                   
                    if (spaceMarineUnits[attacker[1]].health < (countries[spaceMarineOwnerID].infantryMaxHealth * 0.5)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    
                  break; 
                  case 'spaceInfantry':
                    
                    spaceInfantryOwnerID = spaceInfantryUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[spaceInfantryOwnerID].infantrySmallArmsDamage * 1.8;
                    attackerExplosiveDamage = 0;
                   
                    if (spaceInfantryUnits[attacker[1]].health < (countries[spaceInfantryOwnerID].infantryMaxHealth * 0.4)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                 
                  break; 
                  case 'marine':
                    
                    marineOwnerID = marineUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[marineOwnerID].infantrySmallArmsDamage * 1.1;
                    attackerExplosiveDamage = countries[marineOwnerID].infantryExplosiveDamage * 1.1;
                   
                    if (marineUnits[attacker[1]].health < (countries[marineOwnerID].infantryMaxHealth * 0.55)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                     attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                  break; 
                  case 'infantry':
                    
                    infantryOwnerID = infantryUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[marineOwnerID].infantrySmallArmsDamage;
                    attackerExplosiveDamage = countries[marineOwnerID].infantryExplosiveDamage;
                   
                    if (infantryUnits[attacker[1]].health < (countries[infantryOwnerID].infantryMaxHealth * 0.5)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                     attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                   break; 
                  case 'hostileguerrilla':
                    
                    guerrillaOwnerID = guerrillaUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[guerrillaOwnerID].guerrillaSmallArmsDamage;
                    attackerExplosiveDamage = countries[guerrillaOwnerID].guerrillaExplosiveDamage;
                   
                    if (guerrillaUnits[attacker[1]].health <
                        ((countries[guerrillaOwnerID].infantryMaxHealth * countries[guerrillaOwnerID].guerrillaHealthPercent) * 0.5)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                     attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                 
                  break; 
                   case 'guerrilla':
                    
                    guerrillaOwnerID = guerrillaUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[guerrillaOwnerID].guerrillaSmallArmsDamage;
                    attackerExplosiveDamage = countries[guerrillaOwnerID].guerrillaExplosiveDamage;
                   
                    if (guerrillaUnits[attacker[1]].health <
                        ((countries[guerrillaOwnerID].infantryMaxHealth * countries[guerrillaOwnerID].guerrillaHealthPercent) * 0.5)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                     attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                  break; 
                }
                
                attackPosition = Math.floor(Math.random() * 30);
                   
                if (attackPosition > 20) {
                    attackFrontPosition = Math.floor(Math.random() * 4);
                    attackPosition = attackFrontPosition;
                } // if the attack position randomly selected is too high to be on the battlefield then this unit
                // will instead be redirected to attack a front row enemy. This is set up so that units in the front
                // row will always bear the largest burden in terms of damage taken, which is why higher armor
                // and health units are always placed in the front. Their is a roughly 1/3 chance of each unit
                // randomly rolling a number over 20 and therefore being directed to attack a front row unit in
                // addition to possibly rolling a number of 0-3 (20%) which would also select a front row unit
                // only rolling the numbers 4 - 20 will allow this unit to attack an enemy not in the front row
                
                victimString = map2Cities[battle.cityID].combatDefendingPositions[Number(attackPosition)];
                console.log(map2Cities[battle.cityID].combatDefendingPositions);
                // code is erroring out here
                victim = victimString.split("-");
                // figure out who the victim of the attack is and determine their armor, health, and morale
                switch(victim[0]) {
                      case 'tank':
                      
                        victimOwnerID = tankUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].tankSmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].tankExplosiveArmor;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        if (attackerTotalDamage < 1) {
                            attackerTotalDamage = 1;
                        }
                        
                        tankUnits[victim[1]].health = Math.round(tankUnits[victim[1]].health - attackerTotalDamage);
                        // subtract damage from health of unit
                        tankUnits[victim[1]].currentMorale = Math.round(tankUnits[victim[1]].currentMorale - attackerTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - attackerTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].tankMaxHealth) * 4000);
                        tankUnits[victim[1]].currentManpower = tankUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (tankUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a unit has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                        
                      break;
                      case 'spaceMarine':
                        
                        victimOwnerID = spaceMarineUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.2;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.3;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        if (attackerTotalDamage < 1) {
                            attackerTotalDamage = 1;
                        }
                        
                        spaceMarineUnits[victim[1]].health = Math.round(spaceMarineUnits[victim[1]].health - attackerTotalDamage);
                        // subtract damage from health of unit
                        spaceMarineUnits[victim[1]].currentMorale = Math.round(spaceMarineUnits[victim[1]].currentMorale - attackerTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - attackerTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 300);
                        spaceMarineUnits[victim[1]].currentManpower = spaceMarineUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (spaceMarineUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a space marine has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                      
                      break;
                      case 'spaceInfantry':
                        
                        victimOwnerID = spaceInfantryUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.1;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.2;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        if (attackerTotalDamage < 1) {
                            attackerTotalDamage = 1;
                        }
                        
                        spaceInfantryUnits[victim[1]].health = Math.round(spaceInfantryUnits[victim[1]].health - attackerTotalDamage);
                        // subtract damage from health of unit
                        spaceInfantryUnits[victim[1]].currentMorale = Math.round(spaceInfantryUnits[victim[1]].currentMorale - attackerTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - attackerTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 500);
                        spaceInfantryUnits[victim[1]].currentManpower = spaceInfantryUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (spaceInfantryUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a space infantry has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                      
                      break;
                      case 'marine':
                        
                        victimOwnerID = marineUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.05;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.1;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        if (attackerTotalDamage < 1) {
                            attackerTotalDamage = 1;
                        }
                        
                        marineUnits[victim[1]].health = Math.round(marineUnits[victim[1]].health - attackerTotalDamage);
                        // subtract damage from health of unit
                        marineUnits[victim[1]].currentMorale = Math.round(marineUnits[victim[1]].currentMorale - attackerTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - attackerTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 8000);
                        marineUnits[victim[1]].currentManpower = marineUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (marineUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a marine has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                      
                      break;
                      case 'infantry':
                        
                        victimOwnerID = infantryUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        if (attackerTotalDamage < 1) {
                            attackerTotalDamage = 1;
                        }
                        
                        infantryUnits[victim[1]].health = Math.round(infantryUnits[victim[1]].health - attackerTotalDamage);
                        // subtract damage from health of unit
                        infantryUnits[victim[1]].currentMorale = Math.round(infantryUnits[victim[1]].currentMorale - attackerTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - attackerTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        infantryUnits[victim[1]].currentManpower = infantryUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (infantryUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a marine has been destroyed');
                        }
                      
                      break;
                      case 'guerrilla':
                        
                        victimOwnerID = guerrillaUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor - 0.05;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        if (attackerTotalDamage < 1) {
                            attackerTotalDamage = 1;
                        }
                        
                        guerrillaUnits[victim[1]].health = Math.round(guerrillaUnits[victim[1]].health - attackerTotalDamage);
                        // subtract damage from health of unit
                        guerrillaUnits[victim[1]].currentMorale = Math.round(guerrillaUnits[victim[1]].currentMorale - attackerTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - attackerTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        guerrillaUnits[victim[1]].currentManpower = guerrillaUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (guerrillaUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a guerrilla has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                      
                      break;
                      case 'hostileguerrilla':
                        
                        victimOwnerID = guerrillaUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor - 0.05;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        if (attackerTotalDamage < 1) {
                            attackerTotalDamage = 1;
                        }
                        
                        guerrillaUnits[victim[1]].health = Math.round(guerrillaUnits[victim[1]].health - attackerTotalDamage);
                        // subtract damage from health of unit
                        guerrillaUnits[victim[1]].currentMorale = Math.round(guerrillaUnits[victim[1]].currentMorale - attackerTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - attackerTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        guerrillaUnits[victim[1]].currentManpower = guerrillaUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (guerrillaUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a guerrilla has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                        
                      break;
                }
                
            });
            
            
            
            
            
            
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
            
            
            map2Cities[battle.cityID].combatDefendingPositions.forEach(function() {
                        
                defender = defenderString.split("-");
                // figure out who the dfending unit in this position is and determine their attack strength
                switch(defender[0]) {
                     case 'tank':
                      
                   tankOwnerID = tankUnits[defender[1]].ownerID;
                   defenderSmallArmsDamage = countries[tankOwnerID].tankSmallArmsDamage;
                   defenderExplosiveDamage = countries[tankOwnerID].tankExplosiveDamage;
                   
                   if (tankUnits[defender[1]].health < (countries[tankOwnerID].tankMaxHealth * 0.5)) {
                    defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                   } // if a unit is at less than half health then it will only do 50% normal damage
                    
                   defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                   defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                   // when fighting in cities, tanks do 50% less damage
                   
                  break; 
                  case 'spaceMarine':
                    
                    spaceMarineOwnerID = spaceMarineUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[spaceMarineOwnerID].infantrySmallArmsDamage * 2;
                    defenderExplosiveDamage = 0;
                   
                    if (spaceMarineUnits[defender[1]].health < (countries[spaceMarineOwnerID].infantryMaxHealth * 0.5)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    
                  break; 
                  case 'spaceInfantry':
                    
                    spaceInfantryOwnerID = spaceInfantryUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[spaceInfantryOwnerID].infantrySmallArmsDamage * 1.8;
                    defenderExplosiveDamage = 0;
                   
                    if (spaceInfantryUnits[defender[1]].health < (countries[spaceInfantryOwnerID].infantryMaxHealth * 0.4)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                 
                  break; 
                  case 'marine':
                    
                    marineOwnerID = marineUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[marineOwnerID].infantrySmallArmsDamage * 1.1;
                    defenderExplosiveDamage = countries[marineOwnerID].infantryExplosiveDamage * 1.1;
                   
                    if (marineUnits[defender[1]].health < (countries[marineOwnerID].infantryMaxHealth * 0.55)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                     defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                  break; 
                  case 'infantry':
                    
                    infantryOwnerID = infantryUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[marineOwnerID].infantrySmallArmsDamage;
                    defenderExplosiveDamage = countries[marineOwnerID].infantryExplosiveDamage;
                   
                    if (infantryUnits[defender[1]].health < (countries[infantryOwnerID].infantryMaxHealth * 0.5)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                     defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                   break; 
                  case 'hostileguerrilla':
                    
                    guerrillaOwnerID = guerrillaUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[guerrillaOwnerID].guerrillaSmallArmsDamage;
                    defenderExplosiveDamage = countries[guerrillaOwnerID].guerrillaExplosiveDamage;
                   
                    if (guerrillaUnits[defender[1]].health <
                        ((countries[guerrillaOwnerID].infantryMaxHealth * countries[guerrillaOwnerID].guerrillaHealthPercent) * 0.5)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                     defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                 
                  break; 
                   case 'guerrilla':
                    
                    guerrillaOwnerID = guerrillaUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[guerrillaOwnerID].guerrillaSmallArmsDamage;
                    defenderExplosiveDamage = countries[guerrillaOwnerID].guerrillaExplosiveDamage;
                   
                    if (guerrillaUnits[defender[1]].health <
                        ((countries[guerrillaOwnerID].infantryMaxHealth * countries[guerrillaOwnerID].guerrillaHealthPercent) * 0.5)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                     defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                  break; 
                }
                
                attackPosition = Math.floor(Math.random() * 30);
                   
                if (attackPosition > 20) {
                    attackFrontPosition = Math.floor(Math.random() * 4);
                    attackPosition = attackFrontPosition;
                } // if the attack position randomly selected is too high to be on the battlefield then this unit
                // will instead be redirected to attack a front row enemy. This is set up so that units in the front
                // row will always bear the largest burden in terms of damage taken, which is why higher armor
                // and health units are always placed in the front. Their is a roughly 1/3 chance of each unit
                // randomly rolling a number over 20 and therefore being directed to attack a front row unit in
                // addition to possibly rolling a number of 0-3 (20%) which would also select a front row unit
                // only rolling the numbers 4 - 20 will allow this unit to attack an enemy not in the front row
                    
                victimString = map2Cities[battle.cityID].combatAttackingingPositions[attackPosition];
                victim = victimString.split("-");
                // figure out who the victim of the attack is and determine their armor, health, and morale
                switch(victim[0]) {
                      case 'tank':
                      
                        victimOwnerID = tankUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].tankSmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].tankExplosiveArmor;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        if (defenderTotalDamage < 1) {
                            defenderTotalDamage = 1;
                        }
                        
                        tankUnits[victim[1]].health = Math.round(tankUnits[victim[1]].health - defenderTotalDamage);
                        // subtract damage from health of unit
                        tankUnits[victim[1]].currentMorale = Math.round(tankUnits[victim[1]].currentMorale - defenderTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - defenderTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].tankMaxHealth) * 4000);
                        tankUnits[victim[1]].currentManpower = tankUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (tankUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a unit has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                        
                      break;
                      case 'spaceMarine':
                        
                        victimOwnerID = spaceMarineUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.2;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.3;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        if (defenderTotalDamage < 1) {
                            defenderTotalDamage = 1;
                        }
                        
                        spaceMarineUnits[victim[1]].health = Math.round(spaceMarineUnits[victim[1]].health - defenderTotalDamage);
                        // subtract damage from health of unit
                        spaceMarineUnits[victim[1]].currentMorale = Math.round(spaceMarineUnits[victim[1]].currentMorale - defenderTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - defenderTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 300);
                        spaceMarineUnits[victim[1]].currentManpower = spaceMarineUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (spaceMarineUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a space marine has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                      
                      break;
                      case 'spaceInfantry':
                        
                        victimOwnerID = spaceInfantryUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.1;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.2;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        if (defenderTotalDamage < 1) {
                            defenderTotalDamage = 1;
                        }
                        
                        spaceInfantryUnits[victim[1]].health = Math.round(spaceInfantryUnits[victim[1]].health - defenderTotalDamage);
                        // subtract damage from health of unit
                        spaceInfantryUnits[victim[1]].currentMorale = Math.round(spaceInfantryUnits[victim[1]].currentMorale - defenderTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - defenderTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 500);
                        spaceInfantryUnits[victim[1]].currentManpower = spaceInfantryUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (spaceInfantryUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a space infantry has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                      
                      break;
                      case 'marine':
                        
                        victimOwnerID = marineUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.05;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.1;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        if (defenderTotalDamage < 1) {
                            defenderTotalDamage = 1;
                        }
                        
                        marineUnits[victim[1]].health = Math.round(marineUnits[victim[1]].health - defenderTotalDamage);
                        // subtract damage from health of unit
                        marineUnits[victim[1]].currentMorale = Math.round(marineUnits[victim[1]].currentMorale - defenderTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - defenderTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 8000);
                        marineUnits[victim[1]].currentManpower = marineUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (marineUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a marine has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                      
                      break;
                      case 'infantry':
                        
                        victimOwnerID = infantryUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        if (defenderTotalDamage < 1) {
                            defenderTotalDamage = 1;
                        }
                        
                        infantryUnits[victim[1]].health = Math.round(infantryUnits[victim[1]].health - defenderTotalDamage);
                        // subtract damage from health of unit
                        infantryUnits[victim[1]].currentMorale = Math.round(infantryUnits[victim[1]].currentMorale - defenderTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - defenderTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        infantryUnits[victim[1]].currentManpower = infantryUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (infantryUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a marine has been destroyed');
                        }
                      
                      break;
                      case 'guerrilla':
                        
                        victimOwnerID = guerrillaUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor - 0.05;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        if (defenderTotalDamage < 1) {
                            defenderTotalDamage = 1;
                        }
                        
                        guerrillaUnits[victim[1]].health = Math.round(guerrillaUnits[victim[1]].health - defenderTotalDamage);
                        // subtract damage from health of unit
                        guerrillaUnits[victim[1]].currentMorale = Math.round(guerrillaUnits[victim[1]].currentMorale - defenderTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - defenderTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        guerrillaUnits[victim[1]].currentManpower = guerrillaUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (guerrillaUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a guerrilla has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                      
                      break;
                      case 'hostileguerrilla':
                        
                        victimOwnerID = guerrillaUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor - 0.05;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        if (defenderTotalDamage < 1) {
                            defenderTotalDamage = 1;
                        }
                        
                        guerrillaUnits[victim[1]].health = Math.round(guerrillaUnits[victim[1]].health - defenderTotalDamage);
                        // subtract damage from health of unit
                        guerrillaUnits[victim[1]].currentMorale = Math.round(guerrillaUnits[victim[1]].currentMorale - defenderTotalDamage);
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = Math.round(map2Cities[battle.cityID].attackerMorale - defenderTotalDamage);
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        guerrillaUnits[victim[1]].currentManpower = guerrillaUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackerLosses = cityBattles[battle.id].attackerLosses + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (guerrillaUnits[victim[1]].health < 1) {
                            // what happens when a unit is destroyed?
                            console.log('a guerrilla has been destroyed');
                        }
                        
                        if (map2Cities[battle.cityID].attackerMorale < 1) {
                            //what happens when the attackers lose the battle?
                            console.log('attackers have lost the battle in a city');
                        }
                        
                      break;
                }
                
            });
               
           
        break;
        case 3:
            
        break;
        case 4:
            
        break;
    }
    
    // start having attacking units deal damage to defending units first
    // check to see if health or morale are below zero
    // check to see if army morale is below zero, if it is end the battle (don't do this inside foreach loop)
    
    
}