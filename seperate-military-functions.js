// All functions in this file are meant to be run in a seperate thread or core to increase game performance especially on low
// end machines




const detectEnemies = function(countryID, cityID) {
    
    // Upon entering a city, first check to see if their is an active fight going on, if their is, reinforce your side.
    // If no active fight is happening then check to see if their are enemy armies present in the city by checking the
    // 'countriesPresent' property. If this is also empty then finally check the hostileGuerrillas array to see if their
    // are rebels in this city. If the array is not empty then pull a list of all distinct countryIDs that the rebels
    // belong to and check to see if you are in the 'hostileGuerrillasNeutral' array for that country. If you are
    // not neutral to those guerrillas then take all hostileguerrillas() in the array with that ID (likely they will
    // all belong to the same country) and call 'beginFightingHostileGuerrillas()' while passing in that country or countries
    // by ID into the 'guerrillaCountryIDs' variable and your own countryID for the third parameter.
    
}




const armyMoralePercent = function(countryID, cityID, infoType) {
  if (countries[countryID].numberOfComSatellites2 < 5) {
        satMoraleModifier = 0;
      } else {
        satMoraleModifier = 0.04;
      } // if this country has at least 5 communication satellites on the planet, add 4% morale
      
      if (countries[countryID].cyberNetwork > 30) {
        cybMoraleModifier = 0;
      } else {
        cybMoraleModifier = -0.05;
      } // if this country has a cyber network at less than 30% subtract -5% morale
      
      // DEFENSIVE: HOMELAND DEFENSE: +3% morale when in a tile owned by this army
      if (map2Cities[cityID].ownerID == countryID && countries[countryID].techs.includes('homeland-defense')) {
        homeMoraleModifier = 0.05;
      } else { // this country owns the city in which we are fighting and has the 'Homeland Defense' Expansion Tech
        homeMoraleModifier = 0;
      }
      
       // OFFENSIVE: MILITARY PARADES: +2% Morale for all armies
      if (!(countries[countryID].techs.includes('military-parades'))) {
        milParMoraleModifier = 0;
      } else { // this country has the Combat Training Expansion Tech
        milParMoraleModifier = 0.02;
      }
      
      // SPACE: COMBAT TRAINING: +5% Morale for all armies
      if (!(countries[countryID].techs.includes('combat-training'))) {
        combatMoraleModifier = 0;
      } else { // this country has the Combat Training Expansion Tech
        combatMoraleModifier = 0.03;
      }
      
      // MARITIME & ECONOMIC: MATERIALISM: -3% morale for all land units
      if (!(countries[countryID].techs.includes('materialism'))) {
        matMoraleModifier = 0;
      } else { // this country owns the city in which we are fighting and has the 'Homeland Defense' Expansion Tech
        matMoraleModifier = -0.03;
      }
      
      // CORRUPTION
      if (countries[countryID].corruption > 0) {
        if (countries[countryID].corruption == 100) {
          corMoraleModifier = -0.08;
        } else if (countries[countryID].corruption > 50) {
          corMoraleModifier = -0.05;
        } else if (countries[countryID].corruption > 25) {
          corMoraleModifier = -0.02;
        } else {
          corMoraleModifier = 0;
        }
      } // if this country has corruption, reduce morale more the higher the corruption is
      
      
      // CASUS BELLI MORALE MODIFIERS
      // none used here because we are fighting rebels
      
      if (infoType == 'display-percent') {
        
        armyMoraleModifier = Math.round((countries[countryID].morale + satMoraleModifier + cybMoraleModifier + homeMoraleModifier +
        matMoraleModifier + corMoraleModifier + combatMoraleModifier + milParMoraleModifier) * 100);
        
        return armyMoraleModifier;
        
      } else { // this function was called to display an army's morale percentage on screen
        
        armyMoraleModifier = 1 + satMoraleModifier + cybMoraleModifier + homeMoraleModifier +
        matMoraleModifier + corMoraleModifier + combatMoraleModifier;
        
        return armyMoraleModifier;
      } // this function was called to set an army's morale before a battle
      
      
}




const updateCombatWindow = function(city) {
  if (city.defenderMaxMorale > 0) {
         // if combat is ongoing then open up to the combat screen
         
          $('#defend-1').css('opacity', 0);
          $('#defend-2').css('opacity', 0);
          $('#defend-3').css('opacity', 0);
          $('#defend-4').css('opacity', 0);
          $('#defend-5').css('opacity', 0);
          $('#defend-6').css('opacity', 0);
          $('#defend-7').css('opacity', 0);
          $('#defend-8').css('opacity', 0);
          $('#defend-9').css('opacity', 0);
          $('#defend-10').css('opacity', 0);
          $('#defend-11').css('opacity', 0);
          $('#defend-12').css('opacity', 0);
          $('#defend-13').css('opacity', 0);
          $('#defend-14').css('opacity', 0);
          $('#defend-15').css('opacity', 0);
          $('#defend-16').css('opacity', 0);
          $('#defend-17').css('opacity', 0);
          $('#defend-18').css('opacity', 0);
          $('#defend-19').css('opacity', 0);
          $('#defend-20').css('opacity', 0);
  
          $('#attack-1').css('opacity', 0);
          $('#attack-2').css('opacity', 0);
          $('#attack-3').css('opacity', 0);
          $('#attack-4').css('opacity', 0);
          $('#attack-5').css('opacity', 0);
          $('#attack-6').css('opacity', 0);
          $('#attack-7').css('opacity', 0);
          $('#attack-8').css('opacity', 0);
          $('#attack-9').css('opacity', 0);
          $('#attack-10').css('opacity', 0);
          $('#attack-11').css('opacity', 0);
          $('#attack-12').css('opacity', 0);
          $('#attack-13').css('opacity', 0);
          $('#attack-14').css('opacity', 0);
          $('#attack-15').css('opacity', 0);
          $('#attack-16').css('opacity', 0);
          $('#attack-17').css('opacity', 0);
          $('#attack-18').css('opacity', 0);
          $('#attack-19').css('opacity', 0);
          $('#attack-20').css('opacity', 0);
         
         defenderInfantryAmount = 0;
         defenderTankAmount = 0;
         defenderMarineAmount = 0;
         defenderGuerrillaAmount = 0;
         defenderSpaceInfantryAmount = 0;
         defenderSpaceMarineAmount = 0;
         
         attackerInfantryAmount = 0;
         attackerTankAmount = 0;
         attackerMarineAmount = 0;
         attackerGuerrillaAmount = 0;
         attackerSpaceInfantryAmount = 0;
         attackerSpaceMarineAmount = 0;
         
         city.combatDefendingInfantry.forEach(function(infantryID) {
           defenderInfantryAmount += infantryUnits[infantryID].currentManpower;
         });
         city.combatDefendingTanks.forEach(function(tankID) {
           defenderTankAmount += Math.round((tankUnits[tankID].currentManpower / 40));
         });
         city.combatDefendingMarines.forEach(function(marineID) {
           defenderMarineAmount += marineUnits[marineID].currentManpower;
         });
         city.combatDefendingGuerrillas.forEach(function(guerrillaID) {
           defenderGuerrillaAmount += guerrillaUnits[guerrillaID].currentManpower;
         });
         city.combatDefendingSpaceInfantry.forEach(function(spaceInfantryID) {
           defenderSpaceInfantryAmount += spaceInfantryUnits[spaceInfantryID].currentManpower;
         });
         city.combatDefendingSpaceMarines.forEach(function(spaceMarineID) {
           defenderSpaceMarineAmount += spaceMarineUnits[spaceMarineID].currentManpower;
         });
         
         city.combatAttackingInfantry.forEach(function(infantryID) {
           attackerInfantryAmount += infantryUnits[infantryID].currentManpower;
         });
         city.combatAttackingTanks.forEach(function(tankID) {
           attackerTankAmount += Math.round((tankUnits[tankID].currentManpower / 40));
         });
         city.combatAttackingMarines.forEach(function(marineID) {
           attackerMarineAmount += marineUnits[marineID].currentManpower;
         });
         city.combatAttackingGuerrillas.forEach(function(guerrillaID) {
           attackerGuerrillaAmount += guerrillaUnits[guerrillaID].currentManpower;
         });
         city.combatAttackingSpaceInfantry.forEach(function(spaceInfantryID) {
           attackerSpaceInfantryAmount += spaceInfantryUnits[spaceInfantryID].currentManpower;
         });
         city.combatAttackingSpaceMarines.forEach(function(spaceMarineID) {
           attackerSpaceMarineAmount += spaceMarineUnits[spaceMarineID].currentManpower;
         });
         
         $('.defender-name').html(city.defenderName);
         if (defenderInfantryAmount > 0) {
          $('#defender-infantry').text(defenderInfantryAmount.toLocaleString());
          $('#defender-infantry-div').css("display","flex");
         } else {
          $('#defender-infantry-div').hide();
         }
         if (defenderTankAmount > 0) {
          $('#defender-tanks').text(defenderTankAmount.toLocaleString());
          $('#defender-tanks-div').css("display","flex");
         } else {
          $('#defender-tanks-div').hide();
         }
         if (defenderGuerrillaAmount > 0) {
          $('#defender-guerrillas').text(defenderGuerrillaAmount.toLocaleString());
          $('#defender-guerrillas-div').css("display","flex");
         } else {
          $('#defender-guerrillas-div').hide();
         }
         if (defenderMarineAmount > 0) {
          $('#defender-marines').text(defenderMarineAmount.toLocaleString());
          $('#defender-marines-div').css("display","flex");
         } else {
          $('#defender-marines-div').hide();
         }
         if (defenderSpaceInfantryAmount > 0) {
          $('#defender-space-infantry').text(defenderSpaceInfantryAmount.toLocaleString());
          $('#defender-space-infantry-div').css("display","flex");
         } else {
          $('#defender-space-infantry-div').hide();
         }
         if (defenderSpaceMarineAmount > 0) {
          $('#defender-space-marines').text(defenderSpaceMarineAmount.toLocaleString());
          $('#defender-space-marines-div').css("display","flex");
         } else {
          $('#defender-space-marines-div').hide();
         }
         
         $('.attacker-name').html(city.attackerName);
         if (attackerInfantryAmount > 0) {
          $('#attacker-infantry').text(attackerInfantryAmount.toLocaleString());
          $('#attacker-infantry-div').css("display","flex");
         } else {
          $('#attacker-infantry-div').hide();
         }
         if (attackerTankAmount > 0) {
          $('#attacker-tanks').text(attackerTankAmount.toLocaleString());
          $('#attacker-tanks-div').css("display","flex");
         } else {
          $('#attacker-tanks-div').hide();
         }
         if (attackerGuerrillaAmount > 0) {
          $('#attacker-guerrillas').text(attackerGuerrillaAmount.toLocaleString());
          $('#attacker-guerrillas-div').css("display","flex");
         } else {
          $('#attacker-guerrillas-div').hide();
         }
         if (attackerMarineAmount > 0) {
          $('#attacker-marines').text(attackerMarineAmount.toLocaleString());
          $('#attacker-marines-div').css("display","flex");
         } else {
          $('#attacker-marines-div').hide();
         }
         if (attackerSpaceInfantryAmount > 0) {
          $('#attacker-space-infantry').text(attackerSpaceInfantryAmount.toLocaleString());
          $('#attacker-space-infantry-div').css("display","flex");
         } else {
          $('#attacker-space-infantry-div').hide();
         }
         if (attackerSpaceMarineAmount > 0) {
          $('#attacker-space-marines').text(attackerSpaceMarineAmount.toLocaleString());
          $('#attacker-space-marines-div').css("display","flex");
         } else {
          $('#attacker-space-marines-div').hide();
         }
         
         defenderSquare = 1;
         city.combatDefendingPositions.forEach(function(defenderString) {
            defender = defenderString.split("-");
            switch(defender[0]) {
              case 'tank':
                $('#defend-' + defenderSquare).attr("src", 'public/images/tankicon.png');
                defenderColor = countries[tankUnits[defender[1]].ownerID].color + '80';
                $('#defend-' + defenderSquare).css('background', defenderColor);
                defenderHealthPercent = Math.round((tankUnits[defender[1]].currentManpower / 4000) * 100);
                $('#defend-' + defenderSquare).css('opacity', defenderHealthPercent + '%');
                break;
              case 'spaceMarine':
                $('#defend-' + defenderSquare).attr("src", 'public/images/spacemarinesicon.png');
                defenderColor = countries[spaceMarineUnits[defender[1]].ownerID].color + '80';
                $('#defend-' + defenderSquare).css('background', defenderColor);
                defenderHealthPercent = Math.round((spaceMarineUnits[defender[1]].currentManpower / 200) * 100);
                $('#defend-' + defenderSquare).css('opacity', defenderHealthPercent + '%');
                break;
              case 'spaceInfantry':
                $('#defend-' + defenderSquare).attr("src", 'public/images/spaceinfantryicon.png');
                defenderColor = countries[spaceInfantryUnits[defender[1]].ownerID].color + '80';
                $('#defend-' + defenderSquare).css('background', defenderColor);
                defenderHealthPercent = Math.round((spaceInfantryUnits[defender[1]].currentManpower / 500) * 100);
                $('#defend-' + defenderSquare).css('opacity', defenderHealthPercent + '%');
                break;
              case 'marine':
                $('#defend-' + defenderSquare).attr("src", 'public/images/marinesicon.png');
                defenderColor = countries[marineUnits[defender[1]].ownerID].color + '80';
                $('#defend-' + defenderSquare).css('background', defenderColor);
                defenderHealthPercent = Math.round((marineUnits[defender[1]].currentManpower / 8000) * 100);
                $('#defend-' + defenderSquare).css('opacity', defenderHealthPercent + '%');
                break;
              case 'infantry':
                $('#defend-' + defenderSquare).attr("src", 'public/images/infantryicon.png');
                defenderColor = countries[infantryUnits[defender[1]].ownerID].color + '80';
                $('#defend-' + defenderSquare).css('background', defenderColor);
                defenderHealthPercent = Math.round((infantryUnits[defender[1]].currentManpower / 10000) * 100);
                $('#defend-' + defenderSquare).css('opacity', defenderHealthPercent + '%');
                break;
              case 'hostileguerrilla':
                $('#defend-' + defenderSquare).attr("src", 'public/images/guerrillaicon.png');
                defenderColor = 'rgba(0,0,0,0.25)';
                $('#defend-' + defenderSquare).css('background', defenderColor);
                defenderHealthPercent = Math.round((guerrillaUnits[defender[1]].currentManpower / 10000) * 100);
                $('#defend-' + defenderSquare).css('opacity', defenderHealthPercent + '%');
                break;
              case 'guerrilla':
                $('#defend-' + defenderSquare).attr("src", 'public/images/guerrillaicon.png');
                defenderColor = countries[guerrillaUnits[defender[1]].ownerID].color + '40';
                $('#defend-' + defenderSquare).css('background', defenderColor);
                defenderHealthPercent = Math.round((guerrillaUnits[defender[1]].currentManpower / 10000) * 100);
                $('#defend-' + defenderSquare).css('opacity', defenderHealthPercent + '%');
              break;
            }
            defenderSquare++;
         });
         
         
         attackerSquare = 1;
         city.combatAttackingPositions.forEach(function(attackerString) {
            attacker = attackerString.split("-");
            switch(attacker[0]) {
              case 'tank':
                $('#attack-' + attackerSquare).attr("src", 'public/images/tankicon.png');
                attackerColor = countries[tankUnits[attacker[1]].ownerID].color + '80';
                $('#attack-' + attackerSquare).css('background', attackerColor);
                attackerHealthPercent = Math.round((tankUnits[attacker[1]].currentManpower / 4000) * 100);
                $('#attack-' + attackerSquare).css('opacity', attackerHealthPercent + '%');
                break;
              case 'spaceMarine':
                $('#attack-' + attackerSquare).attr("src", 'public/images/spacemarinesicon.png');
                attackerColor = countries[spaceMarineUnits[attacker[1]].ownerID].color + '80';
                $('#attack-' + attackerSquare).css('background', attackerColor);
                attackerHealthPercent = Math.round((spaceMarineUnits[attacker[1]].currentManpower / 200) * 100);
                $('#attack-' + attackerSquare).css('opacity', attackerHealthPercent + '%');
                break;
              case 'spaceInfantry':
                $('#attack-' + attackerSquare).attr("src", 'public/images/spaceinfantryicon.png');
                attackerColor = countries[spaceInfantryUnits[attacker[1]].ownerID].color + '80';
                $('#attack-' + attackerSquare).css('background', attackerColor);
                attackerHealthPercent = Math.round((spaceInfantryUnits[attacker[1]].currentManpower / 500) * 100);
                $('#attack-' + attackerSquare).css('opacity', attackerHealthPercent + '%');
                break;
              case 'marine':
                $('#attack-' + attackerSquare).attr("src", 'public/images/marinesicon.png');
                attackerColor = countries[marineUnits[attacker[1]].ownerID].color + '80';
                $('#attack-' + attackerSquare).css('background', attackerColor);
                attackerHealthPercent = Math.round((marineUnits[attacker[1]].currentManpower / 8000) * 100);
                $('#attack-' + attackerSquare).css('opacity', attackerHealthPercent + '%');
                break;
              case 'infantry':
                $('#attack-' + attackerSquare).attr("src", 'public/images/infantryicon.png');
                attackerColor = countries[infantryUnits[attacker[1]].ownerID].color + '80';
                $('#attack-' + attackerSquare).css('background', attackerColor);
                attackerHealthPercent = Math.round((infantryUnits[attacker[1]].currentManpower / 10000) * 100);
                $('#attack-' + attackerSquare).css('opacity', attackerHealthPercent + '%');
                break;
              case 'guerrilla':
                $('#attack-' + attackerSquare).attr("src", 'public/images/guerrillaicon.png');
                if (city.hostileGuerrillas.length > 0) {
                    if (city.hostileGuerrillas.includes(Number(attacker[1]))) {
                        // if hostile guerrillas are in the city and the value of this unit is in the hostile guerrillas array
                        // then this unit is a hostile guerrilla and should be colored black, otherwise color it based on country
                        attackerColor = 'rgba(0,0,0,0.25)';
                    } else {
                      attackerColor = countries[guerrillaUnits[attacker[1]].ownerID].color + '40';
                    }
                } else {
                  attackerColor = countries[guerrillaUnits[attacker[1]].ownerID].color + '40';
                }
                $('#attack-' + attackerSquare).css('background', attackerColor);
                attackerHealthPercent = Math.round((guerrillaUnits[attacker[1]].currentManpower / 10000) * 100);
                $('#attack-' + attackerSquare).css('opacity', attackerHealthPercent + '%');
                break;
            }
            attackerSquare++;
         });
         
         
         document.querySelector('.defender-rolls-div').style.background = city.defendingColor;
         document.querySelector('.attacker-rolls-div').style.background = city.attackingColor;
         
         $('.defender-roll').text(city.defendingBattleRoll);
         $('.attacker-roll').text(city.attackingBattleRoll);
         
         if (city.defendingGeneral != null) {
          defendingArmyType = city.combatDefendingPositions[0].split('-');
          if (defendingArmyType[0] == 'hostileguerrilla') {
            totalDefensiveBonus = city.baseDefense + generalUnits[city.defendingGeneral].bonus;
            $('.defender-bonus').text(totalDefensiveBonus);
            $('.defender-name-tooltip').text("General: " + generalUnits[city.defendingGeneral].name);
          } else {
            totalDefensiveBonus = city.baseDefense + countries[city.ownerID].baseDefense + generalUnits[city.defendingGeneral].bonus;
            $('.defender-bonus').text(totalDefensiveBonus);
            $('.defender-name-tooltip').text("General: " + generalUnits[city.defendingGeneral].name);
          }
         } else {
          defendingArmyType = city.combatDefendingPositions[0].split('-');
          if (defendingArmyType[0] == 'hostileguerrilla') {
            $('.defender-bonus').text(city.baseDefense);
            $('.defender-name-tooltip').text("General: None");
          } else {
            $('.defender-bonus').text((city.baseDefense + countries[city.ownerID].baseDefense));
            $('.defender-name-tooltip').text("General: None");
          }
         }
         if (city.attackingGeneral != null) {
          $('.attacker-bonus').text(generalUnits[city.attackingGeneral].bonus);
          $('.attacker-name-tooltip').text("General: " + generalUnits[city.attackingGeneral].name);
          $('.attacker-bonus').css('opacity', 1);
         } else {
          $('.attacker-bonus').css('opacity', 0);
          $('.attacker-name-tooltip').text("General: None");
         }
         
         currentDefenderMoralePercent = Math.round((city.defenderMorale / city.defenderMaxMorale) * 100);
         currentAttackerMoralePercent = Math.round((city.attackerMorale / city.attackerMaxMorale) * 100);
         
         document.querySelector('.current-defender-morale').style.width = currentDefenderMoralePercent + "%";
         document.querySelector('.current-attacker-morale').style.width = currentAttackerMoralePercent + "%";
         
         
         if (city.combatDefendingPositions.length > 0) {
            defenderUnitType = city.combatDefendingPositions[0].split('-');
            // pull the first unit defending the city from this array, determine what type of unit it is and use that to
            // determine what kind of army is fighting, if it says 'hostileguerrilla' this is a rebel army
             if (defenderUnitType[0] != 'hostileguerrilla') {
             
              attackingCountryColorPosition = countryColorList.indexOf(city.attackingColor);
              attackingCountryID = countryIdList[attackingCountryColorPosition];
              attackingCountryMoralePercent = armyMoralePercent(attackingCountryID, city.id, 'display-percent');
              
            } else { // determine what country is leading this defensive fight based on the color of the army
              // then choose that country's ID from the color list and pass that info to armyMoralePercent() to display
              // the army's Morale Percentage in the combat window
              
              rebelOwnerCountry = guerrillaUnits[defenderUnitType[1]].ownerID;
              defendingCountryMoralePercent = (countries[rebelOwnerCountry].guerrillaMorale * 100);
            }
         }
          
          
          if (city.combatAttackingPositions.length > 0) {
            attackerUnitType = city.combatAttackingPositions[0].split('-');
            
            if (attackerUnitType[0] != 'hostileguerrilla') {
              
              attackingCountryColorPosition = countryColorList.indexOf(city.attackingColor);
              attackingCountryID = countryIdList[attackingCountryColorPosition];
              attackingCountryMoralePercent = armyMoralePercent(attackingCountryID, city.id, 'display-percent');
              
            } else {
              
              rebelOwnerCountry = guerrillaUnits[attackerUnitType[1]].ownerID;
              attackingCountryMoralePercent = (countries[rebelOwnerCountry].guerrillaMorale * 100);
            }
          
            defenderMoraleString = `Max: ${city.defenderMaxMorale.toLocaleString()} <b>(${defendingCountryMoralePercent}%)</b>`;
            $('.defender-morale-tooltip').html(defenderMoraleString);
            
            attackerMoraleString = `Max: ${city.attackerMaxMorale.toLocaleString()} <b>(${attackingCountryMoralePercent}%)</b>`;
            $('.attacker-morale-tooltip').html(attackerMoraleString);
          }
          
         document.querySelector('.city-combat-screen').style.display = 'flex';
         
         // add attacker and defender colors to every city object, so that the proper color can be assigned
         // to each side in combat also save the last set of dice rolls and possibly general dice rolls to the
         // city as well, these need to be shown when opening the combat window also. Also figure out where units
         // are positioned on the battlefield and if this has a role in their damage and health in combat.
         
        }
}




const beginFightingHostileGuerrillas = function(planetID, cityID, countryID, neutralCountryIDs) {
  
  if (planetID == 1) {
    
    
    
  } else if (planetID == 2) {
    
    if (map2Cities[cityID].defenderMaxMorale == 0) {
        // check to see if a battle is ongoing in this city, if not then add a battle for this city
        cityBattles.push({
          "id": cityBattleIndex,
          "planetID": 2,
          "cityID": cityID,
          "attackCountry": countryID,
          "attackGuerrilla": null,
          "defendCountry": null,
          "defendGuerrilla": guerrillaUnits[map2Cities[cityID].hostileGuerrillas[0]].ideology,
          "attackInfantryLoss": 0,
          "attackTankLoss": 0,
          "attackMarineLoss": 0,
          "attackSpaceInfantryLoss": 0,
          "attackSpaceMarineLoss": 0,
          "attackGuerrillaLoss": 0,
          "defendInfantryLoss": 0,
          "defendTankLoss": 0,
          "defendMarineLoss": 0,
          "defendSpaceInfantryLoss": 0,
          "defendSpaceMarineLoss": 0,
          "defendGuerrillaLoss": 0,
          "finished": false,
        }); 
        cityBattleIndex++;
      }
      
        // make sure that the attacking countryID (in this case your own country) is being accessed here
        // next we are going to iterate through every single hostile guerrilla in the city to see if their
        // ideology matches our ideology, or if the country they are backing (seperatists) is us. If either
        // of those things are true we will not fight them, but if they are not backing us and we are different
        // ideologies then we will fight them for control of the city.
    cityGuerrillaIndex = 0;
    map2Cities[cityID].hostileGuerrillas.forEach(function(hostileGuerrillaID) {
      
      guerrillaSpawnCountryID = map2Cities[cityID].hostileGuerrillasOwnerID[cityGuerrillaIndex];
      if (!neutralCountryIDs.includes(guerrillaSpawnCountryID)) {
        // only proceed with adding hostile guerrillas to the combat array, if the spawn country of those guerrillas are not
        // countries that we are enemies with, and have vowed to not fight their rebels
        
        countryIdeology = countries[countryID].ideology;
        if (guerrillaUnits[hostileGuerrillaID].ideology != countryIdeology && guerrillaUnits[hostileGuerrillaID].ideology != false) {
          // if the guerrillas have an ideology and it is not the same ideology as the attacking country
          // then add them to the combatGuerrilla array
          if (!map2Cities[cityID].combatDefendingGuerrillas.includes(hostileGuerrillaID)) {
            map2Cities[cityID].defenderMorale += guerrillaUnits[hostileGuerrillaID].currentMorale;
            map2Cities[cityID].defenderMaxMorale += guerrillaUnits[hostileGuerrillaID].maxMorale;
            map2Cities[cityID].combatDefendingGuerrillas.push(hostileGuerrillaID);
          }
        } else if (guerrillaUnits[hostileGuerrillaID].seperatistID != countryID) {
          // if they do not have an ideology or the ideologies do not match then check to see if they are seperatists
          // if they are and they do not back this country then add them to the combat array
          if (!map2Cities[cityID].combatDefendingGuerrillas.includes(hostileGuerrillaID)) {
            map2Cities[cityID].defenderMorale += guerrillaUnits[hostileGuerrillaID].currentMorale;
            map2Cities[cityID].defenderMaxMorale += guerrillaUnits[hostileGuerrillaID].maxMorale;
            map2Cities[cityID].combatDefendingGuerrillas.push(hostileGuerrillaID);
          }
        } else {
          // this guerrilla is not a Seperatist or a Rebel so it must be a particularist 
          if (!map2Cities[cityID].combatDefendingGuerrillas.includes(hostileGuerrillaID)) {
            map2Cities[cityID].defenderMorale += guerrillaUnits[hostileGuerrillaID].currentMorale;
            map2Cities[cityID].defenderMaxMorale += guerrillaUnits[hostileGuerrillaID].maxMorale;
            map2Cities[cityID].combatDefendingGuerrillas.push(hostileGuerrillaID);
          }
        }
      }
      cityGuerrillaIndex++;
    });
    
    if (map2Cities[cityID].combatDefendingGuerrillas.length > 0) {
      // there are now hostile guerrillas in the combat array ready to fight our armies, so begin the fighting
      
      cityInfantryIndex = 0;
      map2Cities[cityID].infantry.forEach(function(infantryID) {
        infantryOwnerID = map2Cities[cityID].infantryOwnerID[cityInfantryIndex];
        if (infantryOwnerID == countryID && !map2Cities[cityID].combatAttackingInfantry.includes(infantryID)) {
          map2Cities[cityID].attackerMorale += infantryUnits[infantryID].currentMorale;
          map2Cities[cityID].attackerMaxMorale += infantryUnits[infantryID].maxMorale;
          map2Cities[cityID].combatAttackingInfantry.push(infantryID);
        }
        cityInfantryIndex++;
      });
      // check every infantry unit in the city and add all that belong to the attacking country into the combat array
      
      cityMarineIndex = 0;
      map2Cities[cityID].marines.forEach(function(marineID) {
        marineOwnerID = map2Cities[cityID].marinesOwnerID[cityMarineIndex];
        if (marineOwnerID == countryID && !map2Cities[cityID].combatAttackingMarines.includes(marineID)) {
          map2Cities[cityID].attackerMorale += marineUnits[marineID].currentMorale;
          map2Cities[cityID].attackerMaxMorale += marineUnits[marineID].maxMorale;
          map2Cities[cityID].combatAttackingMarines.push(marineID);
        }
        cityMarineIndex++;
      });
      
      cityAttackingGuerrillasIndex = 0;
      map2Cities[cityID].guerrillas.forEach(function(guerrillaID) {
        guerrillaOwnerID = map2Cities[cityID].guerrillasOwnerID[cityAttackingGuerrillasIndex];
        if (guerrillaOwnerID == countryID && !map2Cities[cityID].combatAttackingGuerrillas.includes(guerrillaID)) {
          map2Cities[cityID].attackerMorale += guerrillaUnits[guerrillaID].currentMorale;
          map2Cities[cityID].attackerMaxMorale += guerrillaUnits[guerrillaID].maxMorale;
          map2Cities[cityID].combatAttackingGuerrillas.push(guerrillaID);
        }
        cityAttackingGuerrillasIndex++;
      });
      
      citySpaceInfantryIndex = 0;
      map2Cities[cityID].spaceInfantry.forEach(function(spaceInfantryID) {
        spaceInfantryOwnerID = map2Cities[cityID].spaceInfantryOwnerID[citySpaceInfantryIndex];
        if (spaceInfantryOwnerID == countryID && !map2Cities[cityID].combatAttackingSpaceInfantry.includes(spaceInfantryID)) {
          map2Cities[cityID].attackerMorale += spaceInfantryUnits[spaceInfantryID].currentMorale;
          map2Cities[cityID].attackerMaxMorale += spaceInfantryUnits[spaceInfantryID].maxMorale;
          map2Cities[cityID].combatAttackingSpaceInfantry.push(spaceInfantryID);
        }
        citySpaceInfantryIndex++;
      });
      
      citySpaceMarineIndex = 0;
      map2Cities[cityID].spaceMarines.forEach(function(spaceMarineID) {
        spaceMarineOwnerID = map2Cities[cityID].spaceMarinesOwnerID[citySpaceMarineIndex];
        if (spaceMarineOwnerID == countryID && !map2Cities[cityID].combatAttackingSpaceMarines.includes(spaceMarineID)) {
          map2Cities[cityID].attackerMorale += spaceMarineUnits[spaceMarineID].currentMorale;
          map2Cities[cityID].attackerMaxMorale += spaceMarineUnits[spaceMarineID].maxMorale;
          map2Cities[cityID].combatAttackingSpaceMarines.push(spaceMarineID);
        }
        citySpaceMarineIndex++;
      });
      
      cityTankIndex = 0;
      map2Cities[cityID].tanks.forEach(function(tankID) {
        tankOwnerID = map2Cities[cityID].tanksOwnerID[cityTankIndex];
        if (tankOwnerID == countryID && !map2Cities[cityID].combatAttackingTanks.includes(tankID)) {
          map2Cities[cityID].attackerMorale += tankUnits[tankID].currentMorale;
          map2Cities[cityID].attackerMaxMorale += tankUnits[tankID].maxMorale;
          map2Cities[cityID].combatAttackingTanks.push(tankID);
        }
        cityTankIndex++;
      });
      
      armyMoraleModifier = armyMoralePercent(countryID, cityID, 'no-display');
      
      map2Cities[cityID].attackerMorale = map2Cities[cityID].attackerMorale * armyMoraleModifier;
      map2Cities[cityID].attackerMaxMorale = map2Cities[cityID].attackerMaxMorale * armyMoraleModifier;
      // after adding together the base morale of all units in this army, the army's own morale is increased seperately
      // based on various factors that effect the country that could happen in between battles
      
      defendingPosition = map2Cities[cityID].combatDefendingPositions.length;
      if (defendingPosition == 0) {
        defendingPosition = 1;
      }
      map2Cities[cityID].combatDefendingGuerrillas.forEach(function(guerrillaID) {
        if (defendingPosition < 20) {
          defenderString = "hostileguerrilla-" + guerrillaID;
          if (!(map2Cities[cityID].combatDefendingPositions.includes(defenderString))) {
            // after making sure that no more than 20 units are on the battlefield, check to see if this unit specifically
            // is on the battlefield if it is not then add it to the combatPositions array
            map2Cities[cityID].combatDefendingPositions.push(defenderString);
            defendingPosition++;
          }
        }
      }); // take each defending guerrilla in the defending army and place them on the battlefield starting at position 1
        // fill all defending combat positions with guerrillas until a max of 20 units have been placed
      
      
      // now add units to thee attacking side, the string placed in the combat position will tell us what type of unit
      // is on that position on the battlefield and what its ID is
      attackingPosition = map2Cities[cityID].combatAttackingPositions.length;
      if (attackingPosition == 0) {
        attackingPosition = 1;
      }
      map2Cities[cityID].combatAttackingTanks.forEach(function(tankID) {
        if (attackingPosition < 20) {
          attackerString = "tank-" + tankID;
          if (!(map2Cities[cityID].combatAttackingPositions.includes(attackerString))) {
            map2Cities[cityID].combatAttackingPositions.push(attackerString);
              attackingPosition++;
          }
        }
      });
      // add tanks to the battlefield first, then if room is left for more units continue to add units
      // in descending order of their strength, this will effect which units get attacked first on the battlefield
      if (attackingPosition < 20) {
        map2Cities[cityID].combatAttackingSpaceMarines.forEach(function(spaceMarineID) {
          if (attackingPosition < 20) {
            attackerString = "spaceMarine-" + spaceMarineID;
            if (!(map2Cities[cityID].combatAttackingPositions.includes(attackerString))) {
              map2Cities[cityID].combatAttackingPositions.push(attackerString);
              attackingPosition++;
            }
          }
        });
      }
      
      if (attackingPosition < 20) {
        map2Cities[cityID].combatAttackingSpaceInfantry.forEach(function(spaceInfantryID) {
          if (attackingPosition < 20) {
            attackerString = "spaceInfantry-" + spaceInfantryID;
            if (!(map2Cities[cityID].combatAttackingPositions.includes(attackerString))) {
              map2Cities[cityID].combatAttackingPositions.push(attackerString);
              attackingPosition++;
            }
          }
        });
      }
      
      if (attackingPosition < 20) {
        map2Cities[cityID].combatAttackingMarines.forEach(function(marineID) {
          if (attackingPosition < 20) {
            attackerString = "marine-" + marineID;
            if (!(map2Cities[cityID].combatAttackingPositions.includes(attackerString))) {
              map2Cities[cityID].combatAttackingPositions.push(attackerString);
              attackingPosition++;
            }
          }
        });
      }
      
      if (attackingPosition < 20) {
        map2Cities[cityID].combatAttackingInfantry.forEach(function(infantryID) {
          if (attackingPosition < 20) {
            attackerString = "infantry-" + infantryID;
            if (!(map2Cities[cityID].combatAttackingPositions.includes(attackerString))) {
              map2Cities[cityID].combatAttackingPositions.push(attackerString);
              attackingPosition++;
            }
          }
        });
      }
      
      if (attackingPosition < 20) {
        map2Cities[cityID].combatAttackingGuerrillas.forEach(function(guerrillaID) {
          if (attackingPosition < 20) {
            attackerString = "guerrilla-" + guerrillaID;
            if (!(map2Cities[cityID].combatAttackingPositions.includes(attackerString))) {
              map2Cities[cityID].combatAttackingPositions.push(attackerString);
              attackingPosition++;
            }
          }
        });
      }
      
      
      console.log(map2Cities[cityID]);
      // now engage the two array groups in combat and display said combat in the city combat screen
      
      if (!window["cityLabels"+cityID].active) {
        mainCanvas2.add(window["cityLabels"+cityID]);
        mainCanvas2.requestRenderAll();
        window["cityLabels"+cityID].set({active: true});
        window["cityLabels"+cityID].set({fill: 'rgb(255,90,90)'});
        // display all cities where active fighting against Guerrillas is currently happening
      } // but only display those cities if the labels are not already active
    }
  } else if (planetID == 3) {
    
    
    
  } else if (planetID == 4) {
    
    
    
  }
  
}




const beginFightingHostileArmies = function(planetID, cityID, countryID, neutralCountryIDs) {
  
}