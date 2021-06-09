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




const beginFightingHostileGuerrillas = function(planetID, cityID, countryID, neutralCountryIDs) {
  
  if (planetID == 1) {
    
    
    
  } else if (planetID == 2) {
    
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
      // there are now guerrillas in the combat array ready to fight our armies, so begin the fighting
      
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
      
      console.log(map2Cities[cityID]);
      // now engage the two array groups in combat and display said combat in the city combat screen
      window["cityLabels"+cityID].textBackgroundColor = "rgba(180,0,0,0.6)";
      mainCanvas2.add(window["cityLabels"+cityID]);
      mainCanvas2.requestRenderAll();
      // display all cities where active fighting against Guerrillas is currently happening
      
      // then start displaying all of these values in the combat screen when a fighting city is clicked on
      cityBattles.push(
        {
        "id": cityBattleIndex,
        "planetID": 2,
        "cityID": cityID,
        }
      );
      cityBattleIndex++;
      
    }
  } else if (planetID == 3) {
    
    
    
  } else if (planetID == 4) {
    
    
    
  }
  
}