// this file contains all combat functions


const cityBattle = function(battle) {
    
    battleDiceAttacker = Math.floor(Math.random() * 11);
    battleDiceDefender = Math.floor(Math.random() * 11);
    
    
    switch (battle.planetID) {
        case 1:
            
        break;
        case 2:
            
            allAttackersLength = map2Cities[battle.cityID].combatAttackingInfantry.length;
            allAttackersLength += map2Cities[battle.cityID].combatAttackingMarines.length;
            allAttackersLength += map2Cities[battle.cityID].combatAttackingGuerrillas.length;
            allAttackersLength += map2Cities[battle.cityID].combatAttackingSpaceInfantry.length;
            allAttackersLength += map2Cities[battle.cityID].combatAttackingSpaceMarines.length;
            allAttackersLength += map2Cities[battle.cityID].combatAttackingTanks.length;
            
            if (map2Cities[battle.cityID].combatAttackingPositions.length <= allAttackersLength &&
                map2Cities[battle.cityID].combatAttackingPositions.length < 20) {
                        
                    map2Cities[battle.cityID].combatAttackingInfantry.forEach(function(infantryID) {
                        pushString = 'infantry-' + infantryID;
                        if (infantryUnits[infantryID].currentMorale == infantryUnits[infantryID].maxMorale &&
                            !(map2Cities[battle.cityID].combatAttackingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatAttackingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatAttackingPositions.push(pushString);
                            // if there are more available attacking units then what is currently on the battlefield
                            // and some attacking units can be found which are still at full morale, then put them onto
                            // the battlefield to continue the fight
                            
                        }
                    });
                
                    map2Cities[battle.cityID].combatAttackingMarines.forEach(function(marineID) {
                        pushString = 'marine-' + marineID;
                        if (marineUnits[marineID].currentMorale == marineUnits[marineID].maxMorale &&
                            !(map2Cities[battle.cityID].combatAttackingPositions.includes(pushString) &&
                              map2Cities[battle.cityID].combatAttackingPositions.length < 20)) {
                            
                            map2Cities[battle.cityID].combatAttackingPositions.push(pushString);
                            
                        }
                    });
                
                
                    map2Cities[battle.cityID].combatAttackingGuerrillas.forEach(function(guerrillaID) {
                         if (guerrillaUnits[guerrillaID].ideology != false) {
                                pushString = 'hostileguerrilla-' + guerrillaID;
                            } else {
                                pushString = 'guerrilla-' + guerrillaID;
                            }
                        if (guerrillaUnits[guerrillaID].currentMorale == guerrillaUnits[guerrillaID].maxMorale &&
                            !(map2Cities[battle.cityID].combatAttackingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatAttackingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatAttackingPositions.push(pushString);
                            
                        }
                    });
                
                
                    map2Cities[battle.cityID].combatAttackingSpaceInfantry.forEach(function(spaceInfantryID) {
                        pushString = 'spaceInfantry-' + spaceInfantryID;
                        if (spaceInfantryUnits[spaceInfantryID].currentMorale == spaceInfantryUnits[spaceInfantryID].maxMorale &&
                            !(map2Cities[battle.cityID].combatAttackingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatAttackingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatAttackingPositions.push(pushString);
                            
                        }
                    });
                
                
                    map2Cities[battle.cityID].combatAttackingSpaceMarines.forEach(function(spaceMarineID) {
                        pushString = 'spaceMarine-' + spaceMarineID;
                        if (spaceMarineUnits[spaceMarineID].currentMorale == spaceMarineUnits[spaceMarineID].maxMorale &&
                            !(map2Cities[battle.cityID].combatAttackingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatAttackingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatAttackingPositions.push(pushString);
                            
                        }
                    });
                
                
                    map2Cities[battle.cityID].combatAttackingTanks.forEach(function(tankID) {
                        pushString = 'tank-' + tankID;
                        if (tankUnits[tankID].currentMorale == tankUnits[tankID].maxMorale &&
                            !(map2Cities[battle.cityID].combatAttackingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatAttackingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatAttackingPositions.push(pushString);
                            
                        }
                    });
                
            }
            
            
            
            allDefendersLength = map2Cities[battle.cityID].combatDefendingInfantry.length;
            allDefendersLength += map2Cities[battle.cityID].combatDefendingMarines.length;
            allDefendersLength += map2Cities[battle.cityID].combatDefendingGuerrillas.length;
            allDefendersLength += map2Cities[battle.cityID].combatDefendingSpaceInfantry.length;
            allDefendersLength += map2Cities[battle.cityID].combatDefendingSpaceMarines.length;
            allDefendersLength += map2Cities[battle.cityID].combatDefendingTanks.length;
            
            if (map2Cities[battle.cityID].combatDefendingPositions.length <= allDefendersLength &&
                map2Cities[battle.cityID].combatDefendingPositions.length < 20) {
                
                    map2Cities[battle.cityID].combatDefendingInfantry.forEach(function(infantryID) {
                        pushString = 'infantry-' + infantryID;
                        if (infantryUnits[infantryID].currentMorale == infantryUnits[infantryID].maxMorale &&
                            !(map2Cities[battle.cityID].combatDefendingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatDefendingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatDefendingPositions.push(pushString);
                            // if there are more available Defending units then what is currently on the battlefield
                            // and some Defending units can be found which are still at full morale, then put them onto
                            // the battlefield to continue the fight
                            
                        }
                    });
                
                
                    map2Cities[battle.cityID].combatDefendingMarines.forEach(function(marineID) {
                        pushString = 'marine-' + marineID;
                        if (marineUnits[marineID].currentMorale == marineUnits[marineID].maxMorale &&
                            !(map2Cities[battle.cityID].combatDefendingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatDefendingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatDefendingPositions.push(pushString);
                            
                        }
                    });
                
                
                     
                    map2Cities[battle.cityID].combatDefendingGuerrillas.forEach(function(guerrillaID) {
                        if (guerrillaUnits[guerrillaID].ideology != false) {
                                pushString = 'hostileguerrilla-' + guerrillaID;
                            } else {
                                pushString = 'guerrilla-' + guerrillaID;
                            }
                        if (guerrillaUnits[guerrillaID].currentMorale == guerrillaUnits[guerrillaID].maxMorale &&
                            !(map2Cities[battle.cityID].combatDefendingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatDefendingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatDefendingPositions.push(pushString);
                            
                        }
                    });
                
                
                    map2Cities[battle.cityID].combatDefendingSpaceInfantry.forEach(function(spaceInfantryID) {
                        pushString = 'spaceInfantry-' + spaceInfantryID;
                        if (spaceInfantryUnits[spaceInfantryID].currentMorale == spaceInfantryUnits[spaceInfantryID].maxMorale &&
                            !(map2Cities[battle.cityID].combatDefendingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatDefendingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatDefendingPositions.push(pushString);
                            
                        }
                    });
                
                
                    map2Cities[battle.cityID].combatDefendingSpaceMarines.forEach(function(spaceMarineID) {
                        pushString = 'spaceMarine-' + spaceMarineID;
                        if (spaceMarineUnits[spaceMarineID].currentMorale == spaceMarineUnits[spaceMarineID].maxMorale &&
                            !(map2Cities[battle.cityID].combatDefendingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatDefendingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatDefendingPositions.push(pushString);
                            
                        }
                    });
                
                
                    map2Cities[battle.cityID].combatDefendingTanks.forEach(function(tankID) {
                        pushString = 'tank-' + tankID;
                        if (tankUnits[tankID].currentMorale == tankUnits[tankID].maxMorale &&
                            !(map2Cities[battle.cityID].combatDefendingPositions.includes(pushString)) &&
                            map2Cities[battle.cityID].combatDefendingPositions.length < 20) {
                            
                            map2Cities[battle.cityID].combatDefendingPositions.push(pushString);
                            
                        }
                    });
                
            }
            
            
            map2Cities[battle.cityID].attackingBattleRoll = battleDiceAttacker;
            map2Cities[battle.cityID].defendingBattleRoll = battleDiceDefender;
            // after the random battle rolls have been determined above, this will be used to display them on the screen
            
            if (countries[battle.attackCountry].offensiveBuff != null) {
                switch (countries[battle.attackCountry].offensiveBuff) {
                    case 1:
                        offBuff = 0.1
                    break;
                    case 2:
                        offBuff = 0.2
                    break;
                    case 3:
                        offBuff = 0.25
                    break;
                    case 4:
                        offBuff = 0.3
                    break;
                    case 5:
                        offBuff = 0.35
                    break;
                    case 6:
                        offBuff = 0.4
                    break;
                }
            } else {
                offBuff = 0;
            }
            
            
            if (battle.attackCountry != null) {
                if('battleDiceLandBonus' in countries[battle.attackCountry]){
                    landBattleBonus = countries[battle.attackCountry].battleDiceBonus;
                } else {
                    landBattleBonus = 0;
                }
            } else {
                landBattleBonus = 0;
            }
            
            
            attackerDamageModifier = map2Cities[battle.cityID].attackingGeneral + battleDiceAttacker + landBattleBonus;
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
                    attackerDamageModifier = (1.1 + offBuff);
                break;
                case 9:
                    attackerDamageModifier = (1.15 + offBuff); 
                break;
                case 10:
                    attackerDamageModifier = (1.2 + offBuff); 
                break;
                case 11:
                    attackerDamageModifier = (1.25 + offBuff);
                break;
                case 12:
                    attackerDamageModifier = (1.3 + offBuff); 
                break;
                case 13:
                    attackerDamageModifier = (1.4 + offBuff); 
                break;
                case 14:
                    attackerDamageModifier = (1.5 + offBuff); 
                break;
                default:
                    attackerDamageModifier = (1.6 + offBuff); 
                break;
            }
            
            
            map2Cities[battle.cityID].combatAttackingPositions.forEach(function(attackerString) {
                
                if (map2Cities[battle.cityID].combatDefendingPositions.length > 0) {
                    
                    attacker = attackerString.split("-");
                    // figure out who the attacking unit in this position is and determine their attack strength
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
                   
                   attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                   attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                   // when fighting in cities, all units do 50% less damage
                   
                   attackerSmallArmsDamage = attackerSmallArmsDamage * attackerDamageModifier;
                   attackerExplosiveDamage = attackerExplosiveDamage * attackerDamageModifier;
                   
                  break; 
                  case 'spaceMarine':
                    
                    spaceMarineOwnerID = spaceMarineUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[spaceMarineOwnerID].infantrySmallArmsDamage * 2;
                    attackerExplosiveDamage = 0;
                   
                    if (spaceMarineUnits[attacker[1]].health < (countries[spaceMarineOwnerID].infantryMaxHealth * 0.5)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * attackerDamageModifier;
                    attackerExplosiveDamage = attackerExplosiveDamage * attackerDamageModifier;
                    
                  break; 
                  case 'spaceInfantry':
                    
                    spaceInfantryOwnerID = spaceInfantryUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[spaceInfantryOwnerID].infantrySmallArmsDamage * 1.8;
                    attackerExplosiveDamage = 0;
                   
                    if (spaceInfantryUnits[attacker[1]].health < (countries[spaceInfantryOwnerID].infantryMaxHealth * 0.4)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                 
                    attackerSmallArmsDamage = attackerSmallArmsDamage * attackerDamageModifier;
                    attackerExplosiveDamage = attackerExplosiveDamage * attackerDamageModifier;
                 
                  break; 
                  case 'marine':
                    
                    marineOwnerID = marineUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[marineOwnerID].infantrySmallArmsDamage * 1.1;
                    attackerExplosiveDamage = countries[marineOwnerID].infantryExplosiveDamage * 1.1;
                   
                    if (marineUnits[attacker[1]].health < (countries[marineOwnerID].infantryMaxHealth * 0.55)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                     attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * attackerDamageModifier;
                    attackerExplosiveDamage = attackerExplosiveDamage * attackerDamageModifier;
                    
                  break; 
                  case 'infantry':
                    
                    infantryOwnerID = infantryUnits[attacker[1]].ownerID;
                    attackerSmallArmsDamage = countries[marineOwnerID].infantrySmallArmsDamage;
                    attackerExplosiveDamage = countries[marineOwnerID].infantryExplosiveDamage;
                   
                    if (infantryUnits[attacker[1]].health < (countries[infantryOwnerID].infantryMaxHealth * 0.5)) {
                     attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                     attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * attackerDamageModifier;
                    attackerExplosiveDamage = attackerExplosiveDamage * attackerDamageModifier;
                    
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
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * attackerDamageModifier;
                    attackerExplosiveDamage = attackerExplosiveDamage * attackerDamageModifier;
                 
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
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * 0.5;
                    attackerExplosiveDamage = attackerExplosiveDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    attackerSmallArmsDamage = attackerSmallArmsDamage * attackerDamageModifier;
                    attackerExplosiveDamage = attackerExplosiveDamage * attackerDamageModifier;
                    
                  break; 
                }
                
                attackPosition = Math.floor(Math.random() * 30);
                   
                while (attackPosition > (map2Cities[battle.cityID].combatDefendingPositions.length - 1)) {
                    attackFrontPosition = Math.floor(Math.random() * 4);
                    attackPosition = attackFrontPosition;
                }   // if the attack position randomly selected is too high to be on the battlefield then this unit
                    // will instead be redirected to attack a front row enemy. This is set up so that units in the front
                    // row will always bear the largest burden in terms of damage taken, which is why higher armor
                    // and health units are always placed in the front. Their is a roughly 1/3 chance of each unit
                    // randomly rolling a number over 20 and therefore being directed to attack a front row unit in
                    // addition to possibly rolling a number of 0-3 (20%) which would also select a front row unit
                    // only rolling the numbers 4 - 20 will allow this unit to attack an enemy not in the front row
                    
                    // sometimes all enemy units have been destroyed when this code tries to run, check to see if any
                    // enemies are left before continuing the attack
                    victimString = map2Cities[battle.cityID].combatDefendingPositions[Number(attackPosition)];
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
                        
                        
                        tankUnits[victim[1]].health = tankUnits[victim[1]].health - attackerTotalDamage;
                        // subtract damage from health of unit
                        tankUnits[victim[1]].currentMorale = tankUnits[victim[1]].currentMorale - attackerTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].defenderMorale = map2Cities[battle.cityID].defenderMorale - attackerTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].tankMaxHealth) * 4000);
                        tankUnits[victim[1]].currentManpower = tankUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].defendTankLoss = cityBattles[battle.id].defendTankLoss + Math.round(manpowerReductionAmount / 40);
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (tankUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingTanks.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatDefendingTanks.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].tanks.indexOf(victim[1]);
                           map2Cities[battle.cityID].tanks.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].tanksOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.defendCountry].tanksReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.defendCountry].tanksReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.defendCountry].tanks.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.defendCountry].tanks.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = tankUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].tanks.indexOf(victim[1]);
                            landArmies[victimArmyID].tanks.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           tankUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (tankUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1); 
                        }
                        
                        
                      break;
                      case 'spaceMarine':
                        
                        victimOwnerID = spaceMarineUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.2;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.3;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        
                        
                        spaceMarineUnits[victim[1]].health = spaceMarineUnits[victim[1]].health - attackerTotalDamage;
                        // subtract damage from health of unit
                        spaceMarineUnits[victim[1]].currentMorale = spaceMarineUnits[victim[1]].currentMorale - attackerTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].defenderMorale = map2Cities[battle.cityID].defenderMorale - attackerTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 300);
                        spaceMarineUnits[victim[1]].currentManpower = spaceMarineUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].defendSpaceMarineLoss = cityBattles[battle.id].defendSpaceMarineLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                       if (spaceMarineUnits[victim[1]].health < 0) { 
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingSpaceMarines.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatDefendingSpaceMarines.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].spaceMarines.indexOf(victim[1]);
                           map2Cities[battle.cityID].spaceMarines.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].spaceMarinesOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.defendCountry].spaceMarinesReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.defendCountry].spaceMarinesReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.defendCountry].spaceMarines.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.defendCountry].spaceMarines.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = spaceMarineUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].spaceMarines.indexOf(victim[1]);
                            landArmies[victimArmyID].spaceMarines.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           spaceMarineUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (spaceMarineUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'spaceInfantry':
                        
                        victimOwnerID = spaceInfantryUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.1;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.2;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        
                        
                        spaceInfantryUnits[victim[1]].health = spaceInfantryUnits[victim[1]].health - attackerTotalDamage;
                        // subtract damage from health of unit
                        spaceInfantryUnits[victim[1]].currentMorale = spaceInfantryUnits[victim[1]].currentMorale - attackerTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].defenderMorale = map2Cities[battle.cityID].defenderMorale - attackerTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 500);
                        spaceInfantryUnits[victim[1]].currentManpower = spaceInfantryUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].defendSpaceInfantryLoss = cityBattles[battle.id].defendSpaceInfantryLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                       if (spaceInfantryUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingSpaceInfantry.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatDefendingSpaceInfantry.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].spaceInfantry.indexOf(victim[1]);
                           map2Cities[battle.cityID].spaceInfantry.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].spaceInfantryOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.defendCountry].spaceInfantryReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.defendCountry].spaceInfantryReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.defendCountry].spaceInfantry.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.defendCountry].spaceInfantry.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = spaceInfantryUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].spaceInfantry.indexOf(victim[1]);
                            landArmies[victimArmyID].spaceInfantry.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           spaceInfantryUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (spaceInfantryUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'marine':
                        
                        victimOwnerID = marineUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.05;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.1;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        
                        
                        marineUnits[victim[1]].health = marineUnits[victim[1]].health - attackerTotalDamage;
                        // subtract damage from health of unit
                        marineUnits[victim[1]].currentMorale = marineUnits[victim[1]].currentMorale - attackerTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].defenderMorale = map2Cities[battle.cityID].defenderMorale - attackerTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 8000);
                        marineUnits[victim[1]].currentManpower = marineUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].defendMarineLoss = cityBattles[battle.id].defendMarineLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (marineUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingMarines.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatDefendingMarines.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].marines.indexOf(victim[1]);
                           map2Cities[battle.cityID].marines.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].marinesOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.defendCountry].marinesReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.defendCountry].marinesReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.defendCountry].marines.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.defendCountry].marines.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = marineUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].marines.indexOf(victim[1]);
                            landArmies[victimArmyID].marines.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           marineUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (marineUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'infantry':
                        
                        victimOwnerID = infantryUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        
                        
                        infantryUnits[victim[1]].health = infantryUnits[victim[1]].health - attackerTotalDamage;
                        // subtract damage from health of unit
                        infantryUnits[victim[1]].currentMorale = infantryUnits[victim[1]].currentMorale - attackerTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].defenderMorale = map2Cities[battle.cityID].defenderMorale - attackerTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        infantryUnits[victim[1]].currentManpower = infantryUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].defendInfantryLoss = cityBattles[battle.id].defendInfantryLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (infantryUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingInfantry.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatDefendingInfantry.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].infantry.indexOf(victim[1]);
                           map2Cities[battle.cityID].infantry.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].infantryOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.defendCountry].infantryReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.defendCountry].infantryReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.defendCountry].infantry.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.defendCountry].infantry.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = infantryUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].infantry.indexOf(victim[1]);
                            landArmies[victimArmyID].infantry.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           infantryUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (infantryUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'guerrilla':
                        
                        victimOwnerID = guerrillaUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor - 0.05;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                        
                        
                        guerrillaUnits[victim[1]].health = guerrillaUnits[victim[1]].health - attackerTotalDamage;
                        // subtract damage from health of unit
                        guerrillaUnits[victim[1]].currentMorale = guerrillaUnits[victim[1]].currentMorale - attackerTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].defenderMorale = map2Cities[battle.cityID].defenderMorale - attackerTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        guerrillaUnits[victim[1]].currentManpower = guerrillaUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].defendGuerrillaLoss = cityBattles[battle.id].defendGuerrillaLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (guerrillaUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingGuerrillas.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatDefendingGuerrillas.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].guerrillas.indexOf(victim[1]);
                           map2Cities[battle.cityID].guerrillas.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].guerrillasOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.defendCountry].guerrillasReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.defendCountry].guerrillasReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.defendCountry].guerrillas.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.defendCountry].guerrillas.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = guerrillaUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].guerrillas.indexOf(victim[1]);
                            landArmies[victimArmyID].guerrillas.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           guerrillaUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (guerrillaUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'hostileguerrilla':
                        
                        victimOwnerID = guerrillaUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor - 0.05;
                        
                        attackerSmallArmsDamage = attackerSmallArmsDamage * (1 - victimSmallArmsArmor);
                        attackerExplosiveDamage = attackerExplosiveDamage * (1 - victimExplosiveArmor);
                        attackerTotalDamage = attackerSmallArmsDamage + attackerExplosiveDamage;
                       
                        
                        
                        guerrillaUnits[victim[1]].health = guerrillaUnits[victim[1]].health - attackerTotalDamage;
                        // subtract damage from health of unit
                        guerrillaUnits[victim[1]].currentMorale = guerrillaUnits[victim[1]].currentMorale - attackerTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].defenderMorale = map2Cities[battle.cityID].defenderMorale - attackerTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((attackerTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        guerrillaUnits[victim[1]].currentManpower = guerrillaUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].defendGuerrillaLoss = cityBattles[battle.id].defendGuerrillaLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (guerrillaUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingGuerrillas.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatDefendingGuerrillas.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].hostileGuerrillas.indexOf(victim[1]);
                           map2Cities[battle.cityID].hostileGuerrillas.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].hostileGuerrillasOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.defendCountry].hostileGuerrillasReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.defendCountry].hostileGuerrillasReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.defendCountry].hostileGuerrillas.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.defendCountry].hostileGuerrillas.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = guerrillaUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].guerrillas.indexOf(victim[1]);
                            landArmies[victimArmyID].guerrillas.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           guerrillaUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (guerrillaUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatDefendingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatDefendingPositions.splice(deleteVictimID, 1); 
                        }
                        
                      break;
                    } 
                } else {
                    finishCityCombat(battle,'attacker');
                    if (document.querySelector(".city-combat-screen").style.display == 'flex') {
                        //if the city combat screen is currently open then open the city interactions screen instead
                        document.querySelector(".city-combat-screen").style.display = "none";
                        document.querySelector(".city-interaction").style.display = "flex";
                    }
                    // remove the battle from active battles and clean out all battle properties from the city
                    // END THE BATTLE AND CLOSE BATTLE WINDOW
                }
            });
            
            if (map2Cities[battle.cityID].defenderMorale < 1 && cityBattles[battle.id].finished == false) {
                finishCityCombat(battle,'attacker');
                if (document.querySelector(".city-combat-screen").style.display == 'flex') {
                    //if the city combat screen is currently open then open the city interactions screen instead
                    document.querySelector(".city-combat-screen").style.display = "none";
                    document.querySelector(".city-interaction").style.display = "flex";
                }
            //The defenders have lost all their morale
            // END THE BATTLE AND CLOSE BATTLE WINDOW
            }
            
            
            
            
            
            
            if (battle.defendCountry == map2Cities[battle.cityID].ownerID) {
                nationalBaseDefense = countries[battle.defendCountry].baseDefense;
                if (countries[map2Cities[battle.cityID].ownerID].techs.includes('weak-defense-lines') && battleDiceDefender > 0) {
                    battleDiceDefender--;
                }
            } else {
                nationalBaseDefense = 0;
            } // if this city is owned by the defending nation, then they must receive an additional bonus to
            // defense when fighting in their own owned cities
            defenderDamageModifier = nationalBaseDefense + map2Cities[battle.cityID].baseDefense + map2Cities[battle.cityID].defendingGeneral + battleDiceDefender;
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
            
            
            map2Cities[battle.cityID].combatDefendingPositions.forEach(function(defenderString) {
                
                if (map2Cities[battle.cityID].combatAttackingPositions.length > 0) {
                    
                defender = defenderString.split("-");
                // figure out who the defending unit in this position is and determine their attack strength
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
                   
                   defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                   defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                   // when fighting in cities, all units do 50% less damage
                   
                   defenderSmallArmsDamage = defenderSmallArmsDamage * defenderDamageModifier;
                   defenderExplosiveDamage = defenderExplosiveDamage * defenderDamageModifier;
                   
                  break; 
                  case 'spaceMarine':
                    
                    spaceMarineOwnerID = spaceMarineUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[spaceMarineOwnerID].infantrySmallArmsDamage * 2;
                    defenderExplosiveDamage = 0;
                   
                    if (spaceMarineUnits[defender[1]].health < (countries[spaceMarineOwnerID].infantryMaxHealth * 0.5)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * defenderDamageModifier;
                    defenderExplosiveDamage = defenderExplosiveDamage * defenderDamageModifier;
                    
                    
                  break; 
                  case 'spaceInfantry':
                    
                    spaceInfantryOwnerID = spaceInfantryUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[spaceInfantryOwnerID].infantrySmallArmsDamage * 1.8;
                    defenderExplosiveDamage = 0;
                   
                    if (spaceInfantryUnits[defender[1]].health < (countries[spaceInfantryOwnerID].infantryMaxHealth * 0.4)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * defenderDamageModifier;
                    defenderExplosiveDamage = defenderExplosiveDamage * defenderDamageModifier;
                 
                  break; 
                  case 'marine':
                    
                    marineOwnerID = marineUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[marineOwnerID].infantrySmallArmsDamage * 1.1;
                    defenderExplosiveDamage = countries[marineOwnerID].infantryExplosiveDamage * 1.1;
                   
                    if (marineUnits[defender[1]].health < (countries[marineOwnerID].infantryMaxHealth * 0.55)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                     defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * defenderDamageModifier;
                    defenderExplosiveDamage = defenderExplosiveDamage * defenderDamageModifier;
                    
                  break; 
                  case 'infantry':
                    
                    infantryOwnerID = infantryUnits[defender[1]].ownerID;
                    defenderSmallArmsDamage = countries[marineOwnerID].infantrySmallArmsDamage;
                    defenderExplosiveDamage = countries[marineOwnerID].infantryExplosiveDamage;
                   
                    if (infantryUnits[defender[1]].health < (countries[infantryOwnerID].infantryMaxHealth * 0.5)) {
                     defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                     defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    } // if a unit is at less than half health then it will only do 50% normal damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * defenderDamageModifier;
                    defenderExplosiveDamage = defenderExplosiveDamage * defenderDamageModifier;
                    
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
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * defenderDamageModifier;
                    defenderExplosiveDamage = defenderExplosiveDamage * defenderDamageModifier;
                 
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
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * 0.5;
                    defenderExplosiveDamage = defenderExplosiveDamage * 0.5;
                    // when fighting in cities, all units do 50% less damage
                    
                    defenderSmallArmsDamage = defenderSmallArmsDamage * defenderDamageModifier;
                    defenderExplosiveDamage = defenderExplosiveDamage * defenderDamageModifier;
                    
                  break; 
                }
                
                attackPosition = Math.floor(Math.random() * 30);
                while (attackPosition > (map2Cities[battle.cityID].combatAttackingPositions.length -1)) {
                    attackFrontPosition = Math.floor(Math.random() * 4);
                    attackPosition = attackFrontPosition;
                } // if the attack position randomly selected is too high to be on the battlefield then this unit
                // will instead be redirected to attack a front row enemy. This is set up so that units in the front
                // row will always bear the largest burden in terms of damage taken, which is why higher armor
                // and health units are always placed in the front. Their is a roughly 1/3 chance of each unit
                // randomly rolling a number over 20 and therefore being directed to attack a front row unit in
                // addition to possibly rolling a number of 0-3 (20%) which would also select a front row unit
                // only rolling the numbers 4 - 20 will allow this unit to attack an enemy not in the front row
                    
                victimString = map2Cities[battle.cityID].combatAttackingPositions[Number(attackPosition)];
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
                        
                        
                        tankUnits[victim[1]].health = tankUnits[victim[1]].health - defenderTotalDamage;
                        // subtract damage from health of unit
                        tankUnits[victim[1]].currentMorale = tankUnits[victim[1]].currentMorale - defenderTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = map2Cities[battle.cityID].attackerMorale - defenderTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].tankMaxHealth) * 4000);
                        tankUnits[victim[1]].currentManpower = tankUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackTankLoss = cityBattles[battle.id].attackTankLoss + Math.round(manpowerReductionAmount / 40);
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (tankUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingTanks.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatAttackingTanks.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].tanks.indexOf(victim[1]);
                           map2Cities[battle.cityID].tanks.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].tanksOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.attackCountry].tanksReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.attackCountry].tanksReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.attackCountry].tanks.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.attackCountry].tanks.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = tankUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].tanks.indexOf(victim[1]);
                            landArmies[victimArmyID].tanks.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           tankUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (tankUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1); 
                        }
                        
                        
                      break;
                      case 'spaceMarine':
                        
                        victimOwnerID = spaceMarineUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.2;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.3;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        
                        
                        spaceMarineUnits[victim[1]].health = spaceMarineUnits[victim[1]].health - defenderTotalDamage;
                        // subtract damage from health of unit
                        spaceMarineUnits[victim[1]].currentMorale = spaceMarineUnits[victim[1]].currentMorale - defenderTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = map2Cities[battle.cityID].attackerMorale - defenderTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 300);
                        spaceMarineUnits[victim[1]].currentManpower = spaceMarineUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackSpaceMarineLoss = cityBattles[battle.id].attackSpaceMarineLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                       if (spaceMarineUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingSpaceMarines.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatAttackingSpaceMarines.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].spaceMarines.indexOf(victim[1]);
                           map2Cities[battle.cityID].spaceMarines.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].spaceMarinesOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.attackCountry].spaceMarinesReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.attackCountry].spaceMarinesReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.attackCountry].spaceMarines.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.attackCountry].spaceMarines.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = spaceMarineUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].spaceMarines.indexOf(victim[1]);
                            landArmies[victimArmyID].spaceMarines.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           spaceMarineUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (spaceMarineUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'spaceInfantry':
                        
                        victimOwnerID = spaceInfantryUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.1;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.2;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        
                        
                        spaceInfantryUnits[victim[1]].health = spaceInfantryUnits[victim[1]].health - defenderTotalDamage;
                        // subtract damage from health of unit
                        spaceInfantryUnits[victim[1]].currentMorale = spaceInfantryUnits[victim[1]].currentMorale - defenderTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = map2Cities[battle.cityID].attackerMorale - defenderTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 500);
                        spaceInfantryUnits[victim[1]].currentManpower = spaceInfantryUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackSpaceInfantryLoss = cityBattles[battle.id].attackSpaceInfantryLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (spaceInfantryUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingSpaceInfantry.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatAttackingSpaceInfantry.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].spaceInfantry.indexOf(victim[1]);
                           map2Cities[battle.cityID].spaceInfantry.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].spaceInfantryOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.attackCountry].spaceInfantryReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.attackCountry].spaceInfantryReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.attackCountry].spaceInfantry.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.attackCountry].spaceInfantry.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = spaceInfantryUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].spaceInfantry.indexOf(victim[1]);
                            landArmies[victimArmyID].spaceInfantry.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           spaceInfantryUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (spaceInfantryUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'marine':
                        
                        victimOwnerID = marineUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor + 0.05;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor + 0.1;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        
                        
                        marineUnits[victim[1]].health = marineUnits[victim[1]].health - defenderTotalDamage;
                        // subtract damage from health of unit
                        marineUnits[victim[1]].currentMorale = marineUnits[victim[1]].currentMorale - defenderTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = map2Cities[battle.cityID].attackerMorale - defenderTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 8000);
                        marineUnits[victim[1]].currentManpower = marineUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackMarineLoss = cityBattles[battle.id].attackMarineLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (marineUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingMarines.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatAttackingMarines.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].marines.indexOf(victim[1]);
                           map2Cities[battle.cityID].marines.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].marinesOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.attackCountry].marinesReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.attackCountry].marinesReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.attackCountry].marines.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.attackCountry].marines.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = marineUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].marines.indexOf(victim[1]);
                            landArmies[victimArmyID].marines.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           marineUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (marineUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'infantry':
                        
                        victimOwnerID = infantryUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        
                        
                        infantryUnits[victim[1]].health = infantryUnits[victim[1]].health - defenderTotalDamage;
                        // subtract damage from health of unit
                        infantryUnits[victim[1]].currentMorale = infantryUnits[victim[1]].currentMorale - defenderTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = map2Cities[battle.cityID].attackerMorale - defenderTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        infantryUnits[victim[1]].currentManpower = infantryUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackInfantryLoss = cityBattles[battle.id].attackInfantryLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (infantryUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingInfantry.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatAttackingInfantry.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].infantry.indexOf(victim[1]);
                           map2Cities[battle.cityID].infantry.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].infantryOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.attackCountry].infantryReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.attackCountry].infantryReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.attackCountry].infantry.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.attackCountry].infantry.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = infantryUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].infantry.indexOf(victim[1]);
                            landArmies[victimArmyID].infantry.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           infantryUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (infantryUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'guerrilla':
                        
                        victimOwnerID = guerrillaUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor - 0.05;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        
                        
                        guerrillaUnits[victim[1]].health = guerrillaUnits[victim[1]].health - defenderTotalDamage;
                        // subtract damage from health of unit
                        guerrillaUnits[victim[1]].currentMorale = guerrillaUnits[victim[1]].currentMorale - defenderTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = map2Cities[battle.cityID].attackerMorale - defenderTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        guerrillaUnits[victim[1]].currentManpower = guerrillaUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackGuerrillaLoss = cityBattles[battle.id].attackGuerrillaLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (guerrillaUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingGuerrillas.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatAttackingGuerrillas.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].guerrillas.indexOf(victim[1]);
                           map2Cities[battle.cityID].guerrillas.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].guerrillasOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.attackCountry].guerrillasReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.attackCountry].guerrillasReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.attackCountry].guerrillas.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.attackCountry].guerrillas.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = guerrillaUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].guerrillas.indexOf(victim[1]);
                            landArmies[victimArmyID].guerrillas.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           guerrillaUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (guerrillaUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1); 
                        }
                      
                      break;
                      case 'hostileguerrilla':
                        
                        victimOwnerID = guerrillaUnits[victim[1]].ownerID;
                        victimSmallArmsArmor = countries[victimOwnerID].infantrySmallArmsArmor;
                        victimExplosiveArmor = countries[victimOwnerID].infantryExplosiveArmor - 0.05;
                        
                        defenderSmallArmsDamage = defenderSmallArmsDamage * (1 - victimSmallArmsArmor);
                        defenderExplosiveDamage = defenderExplosiveDamage * (1 - victimExplosiveArmor);
                        defenderTotalDamage = defenderSmallArmsDamage + defenderExplosiveDamage;
                        
                        
                        guerrillaUnits[victim[1]].health = guerrillaUnits[victim[1]].health - defenderTotalDamage;
                        // subtract damage from health of unit
                        guerrillaUnits[victim[1]].currentMorale = guerrillaUnits[victim[1]].currentMorale - defenderTotalDamage;
                        // subtract damage from unit morale
                        map2Cities[battle.cityID].attackerMorale = map2Cities[battle.cityID].attackerMorale - defenderTotalDamage;
                        // reduce the morale of the entire army to match new morale after attack
                        manpowerReductionAmount = Math.round((defenderTotalDamage / countries[victimOwnerID].infantryMaxHealth) * 10000);
                        guerrillaUnits[victim[1]].currentManpower = guerrillaUnits[victim[1]].currentManpower - manpowerReductionAmount;
                        // reduce the manpower of this unit by the amount equivalent to the damage taken
                        cityBattles[battle.id].attackGuerrillaLoss = cityBattles[battle.id].attackGuerrillaLoss + manpowerReductionAmount;
                        // reflect the new total amount of casualties on the attacker side by adding the manpower loss of this unit
                        
                        
                        if (guerrillaUnits[victim[1]].health < 0) {
                            // what happens when a unit is destroyed?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1);
                           // remove this unit from the battlefield
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingGuerrillas.indexOf(victim[1]);
                           map2Cities[battle.cityID].combatAttackingGuerrillas.splice(deleteVictimID, 1);
                           // remove this unit from the reserves of this battle
                           deleteVictimID = map2Cities[battle.cityID].hostileGuerrillas.indexOf(victim[1]);
                           map2Cities[battle.cityID].hostileGuerrillas.splice(deleteVictimID, 1);
                           map2Cities[battle.cityID].hostileGuerrillasOwnerID.splice(deleteVictimID, 1);
                           // remove this unit from the city entirely
                           deleteVictimReinforceID = countries[battle.attackCountry].hostileGuerrillasReinforce.indexOf(victim[1]);
                           if (deleteVictimReinforceID => 0) {
                            countries[battle.attackCountry].hostileGuerrillasReinforce.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the reinforcements array of their country
                           deleteVictimInCountryID = countries[battle.attackCountry].hostileGuerrillas.indexOf(victim[1]);
                           if (deleteVictimInCountryID => 0) {
                            countries[battle.attackCountry].hostileGuerrillas.splice(deleteVictimID, 1);
                           }
                           // remove this unit from the country entirely
                           victimArmyID = guerrillaUnits[victim[1]].army;
                           if (victimArmyID != null) {
                            deleteVictimID = landArmies[victimArmyID].guerrillas.indexOf(victim[1]);
                            landArmies[victimArmyID].guerrillas.splice(deleteVictimID, 1);
                           }
                           // remove this unit from its army
                           guerrillaUnits[victim[1]] = null;
                           // remove this unit from existence entirely
                           // this unit has been removed
                        } else if (guerrillaUnits[victim[1]].currentMorale < 0) {
                            //what happens when this unit runs out of morale?
                           deleteVictimID = map2Cities[battle.cityID].combatAttackingPositions.indexOf(victimString);
                           map2Cities[battle.cityID].combatAttackingPositions.splice(deleteVictimID, 1); 
                        }
                        
                      break;
                    }
                    
                    } else {
                     
                        finishCityCombat(battle, 'defender');
                        if (document.querySelector(".city-combat-screen").style.display == 'flex') {
                            //if the city combat screen is currently open then open the city interactions screen instead
                            document.querySelector(".city-combat-screen").style.display = "none";
                            document.querySelector(".city-interaction").style.display = "flex";
                        }
                        // remove the battle from active battles and clean out all battle properties from the city
                        // END THE BATTLE AND CLOSE BATTLE WINDOW
                    }
            });
            
            if (map2Cities[battle.cityID].attackerMorale < 1 && cityBattles[battle.id].finished == false) {
                finishCityCombat(battle, 'defender');
                if (document.querySelector(".city-combat-screen").style.display == 'flex') {
                    //if the city combat screen is currently open then open the city interactions screen instead
                    document.querySelector(".city-combat-screen").style.display = "none";
                    document.querySelector(".city-interaction").style.display = "flex";
                }
            // The attackers have lost all morale
            // END THE BATTLE AND CLOSE BATTLE WINDOW
            }
               
           
        break;
        case 3:
            
        break;
        case 4:
            
        break;
    }
    
    if (document.querySelector('#city-index').textContent == battle.cityID &&
        document.querySelector(".city-combat-screen").style.display == "flex") {
        
        updateCombatWindow(map2Cities[battle.cityID]);
        // if the combat window for this city is currently open then update the window as the battle progresses
    }
    
    // start having attacking units deal damage to defending units first
    // check to see if health or morale are below zero
    // check to see if army morale is below zero, if it is end the battle (don't do this inside foreach loop)
    
    
}