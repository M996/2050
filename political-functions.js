// Faction and Governmental functions should take place here



const factorUnrest1 = function(countryID, provinceID, unrestAmount, civilUnrest) {
    
    
    
}

const factorUnrest2 = function(countryID, provinceID, unrestAmount, civilUnrest) {
    
    if (!civilUnrest) {
        if (countries[countryID].unrestReduction !== undefined) {
            unrestReduction = countries[countryID].unrestReduction;
        } else {
            unrestReduction = 0;
        }
        // determine if this country has the national idea to reduce provincial unrest
        
        unrestPercent = (unrestAmount - unrestReduction);
        //calculate the percent chance that this province goes into civil unrest this month
        rebellion = Math.floor(Math.random() * 100);
        
        if (rebellion < unrestPercent) {
            map2Provinces[provinceID].civilUnrest = true;
            // if our randomly generated number is smaller than our unrest likelihood then this province enters into Civil Unrest
        }
    } else {
        if (countries[countryID].unrestReduction !== undefined) {
            unrestReduction = countries[countryID].unrestReduction;
        } else {
            unrestReduction = 0;
        }
        
        rebellionPercent = ((unrestAmount - unrestReduction) + 5);
        //calculate the percent chance that this province spawns guerrillas
        rebellion = Math.floor(Math.random() * 100);
        
        if (rebellion < rebellionPercent) {
            // a rebellion has occurred, we must first add a temporary unrest reduction to this province so more guerrillas don't spawn
            newUnrestAmount = map2Provinces[provinceID].unrest - 20;
            map2Provinces[provinceID].unrest = newUnrestAmount;
            provinceUnrestModifier = provinceID + "-10";
            countries[countryID].provincialUnrestReduction2.push(provinceUnrestModifier);
            console.log(map2Provinces[provinceID]);
            
            guerrillaIdeology = false;
            seperatistID = null;
            // set this variable to false to begin with, it will be set to the proper ideology to spawn guerrillas
            // if such an ideology is found suitable in this province
            ideologyArrayIndex = 0;
            map2Provinces[provinceID].ideology.forEach(function(ideology) {
                if (ideology != countries[countryID].ideology) {
                    // the ideology in this list is not endorsed by the Host Country
                    if (map2Provinces[provinceID].ideologyPercent[ideologyArrayIndex] > 0.3) {
                        // this ideology is over 30% of the province so they can now spawn their own guerrillas
                        guerrillaIdeology = ideology;
                    }
                }
                ideologyArrayIndex++;
            });
            
            if (map2Provinces[provinceID].ideology.includes(2)) {
                // if at least one of the ideologies present in this province is Positivist Dirigism then every guerrilla
                // that can spawn here must fight for Positivist Dirigism first and foremost
                guerrillaType = 2;
            } else if (map2Provinces[provinceID].cores.length > 1) {
                // if not every core in the cores list for this province is belonging to its host country, then a
                // foreign country must have a core, therefore the guerrillas that will spawn here will be seperatist
                // guerrillas loyal to that foreign country
                seperatistID = countryID;
                while (seperatistID == countryID) {
                    map2Provinces[provinceID].cores.forEach(function(coreCountryID) {
                        seperatistID = coreCountryID;
                    });
                }
                // the code above will iterate through countries that have cores looking for the oldest country to have
                // a core in this province, and then spawning rebels will be associated with this country
                guerrillaType = 0;
            } else if (guerrillaIdeology) {
                // An ideology in this province holds over 50% of the population and is not adopted by the Host Country
                // as we determined in the code above therefore the guerrillas that spawn here will belong to this ideological group
                guerrillaType = guerrillaIdeology;
            } else {
                // if Positivist Dirigists are not in the province, and no foreign cores are held, and no significant ideology
                // exists in the area that wants to assume control, then the guerrillas spawning should be particularists
                guerrillaType = 1;
            }
            
            map2Provinces[provinceID].cities.forEach(function(city) {
                spawnHostileGuerrillas(2, city, countryID, guerrillaType, seperatistID);
            });
            
            map2Provinces[provinceID].civilUnrest = false;
            // if our randomly generated number is smaller than our unrest likelihood then this province spawns rebels and Civil Unrest ends
        } else if (rebellion > 91) {
            map2Provinces[provinceID].civilUnrest = false;
            // if this province has not spawned guerrillas then there is an 8% chance every month that it naturally leaves Civil Unrest
        }
        
        if (unrestAmount == 0) {
            map2Provinces[provinceID].civilUnrest = false;
            // if this province no longer has any unrest then bring it out of Civil Unrest
        }
        
    }
    
}

const factorUnrest3 = function(countryID, provinceID, unrestAmount, civilUnrest) {
    
    
    
}

const factorUnrest4 = function(countryID, provinceID, unrestAmount, civilUnrest) {
    
    
    
}





const finishCityCombat = function(battle, victor) {
  
  
  switch (battle.planetID) {
    case 1:
      
    break;
    case 2:
      
      map2Cities[battle.cityID].defenderName = '';
      map2Cities[battle.cityID].attackererName = '';
      map2Cities[battle.cityID].defendingGeneral = null;
      map2Cities[battle.cityID].attackingGeneral = null;
      map2Cities[battle.cityID].defendingColor = '';
      map2Cities[battle.cityID].attackingColor = '';
      map2Cities[battle.cityID].defenderMorale = 0;
      map2Cities[battle.cityID].attackerMorale = 0;
      map2Cities[battle.cityID].attackerMaxMorale = 0;
      map2Cities[battle.cityID].defenderMaxMorale = 0;
      map2Cities[battle.cityID].combatDefendingInfantry = [];
      map2Cities[battle.cityID].combatDefendingMarines = [];
      map2Cities[battle.cityID].combatDefendingGuerrillas = [];
      map2Cities[battle.cityID].combatDefendingSpaceInfantry = [];
      map2Cities[battle.cityID].combatDefendingSpaceMarines = [];
      map2Cities[battle.cityID].combatDefendingTanks = [];
      map2Cities[battle.cityID].combatAttackingInfantry = [];
      map2Cities[battle.cityID].combatAttackingMarines = [];
      map2Cities[battle.cityID].combatAttackingGuerrillas = [];
      map2Cities[battle.cityID].combatAttackingSpaceInfantry = [];
      map2Cities[battle.cityID].combatAttackingSpaceMarines = [];
      map2Cities[battle.cityID].combatAttackingTanks = [];
      map2Cities[battle.cityID].combatDefendingPositions = [];
      map2Cities[battle.cityID].combatAttackingPositions = [];
      // reset all city battle values
      
      if (victor == 'attacker') {
        // the attacker was victorious
        if (battle.attackCountry != null) {
            // the attacker is a country
            attackerName = countries[battle.attackCountry].name;
            map2Cities[battle.cityID].occupiedBy = attackerName;
            map2Cities[battle.cityID].occupierID = battle.attackCountry;
            
            occupyingProvinceCityArray = map2Provinces[map2Cities[battle.cityID].provinceID].cities;
            allCitiesAreOccupied = true;
          
            occupyingProvinceCityArray.forEach(function(provincialCityID) {
              if (map2Cities[provincialCityID].occupierID != battle.attackCountry) {
                  allCitiesAreOccupied = false;
              }
            });
            
            // if all cities in this province are now occupied and the province is not under occupation then start the countdown to enforce demands
            if (allCitiesAreOccupied && !(countries[map2Provinces[map2Cities[battle.cityID].provinceID].ownerID].secedingProvinces2.includes(map2Cities[battle.cityID].provinceID))) {
                
                if (map2Provinces[map2Cities[battle.cityID].provinceID].monthsUntilSecession == null) {
                    occupiedProvinceID = map2Cities[battle.cityID].provinceID;
                    map2Provinces[map2Cities[battle.cityID].provinceID].monthsUntilSecession = 48;
                    map2Provinces[map2Cities[battle.cityID].provinceID].occupiedBy = attackerName;
                    map2Provinces[map2Cities[battle.cityID].provinceID].occupierID = battle.attackCountry;
                    countries[map2Provinces[occupiedProvinceID].ownerID].secedingProvinces2.push(occupiedProvinceID);
                    // this province is now counting down to seccession in 4 years
                }
            }
                
        } else {
          // the attacker is a rebel group
          attackerName = ideologies[battle.attackGuerrilla].name;
          map2Cities[battle.cityID].occupiedBy = attackerName;
          map2Cities[battle.cityID].occupierID = battle.attackGuerrilla;
          
          occupyingProvinceCityArray = map2Provinces[map2Cities[battle.cityID].provinceID].cities;
          allCitiesAreOccupied = true;
          
          occupyingProvinceCityArray.forEach(function(provincialCityID) {
            if (map2Cities[provincialCityID].occupierID != battle.attackGuerrilla) {
                allCitiesAreOccupied = false;
            }
          });
          
          // if all cities in this province are now occupied and the province is not under occupation then start the countdown to enforce demands
          if (allCitiesAreOccupied && !(countries[map2Provinces[map2Cities[battle.cityID].provinceID].ownerID].secedingProvinces2.includes(map2Cities[battle.cityID].provinceID))) {
            if (battle.attackGuerrilla == 0) {
                // the guerrillas are seperatists
                
                if (map2Provinces[map2Cities[battle.cityID].provinceID].monthsUntilSecession == null) {
                    rebelCounter = 0;
                    seperatistNotFound = true;
                    while (seperatistNotFound) {
                        hostileGuerrillaID = map2Cities[battle.cityID].hostileGuerrillas[rebelCounter];
                        if (guerrillaUnits[hostileGuerrillaID].seperatistID != null) {
                            seperatistNotFound = false;
                            occupiedProvinceID = map2Cities[battle.cityID].provinceID;
                            map2Provinces[map2Cities[battle.cityID].provinceID].monthsUntilDemandsEnforced = 48;
                            map2Provinces[map2Cities[battle.cityID].provinceID].occupiedBy = attackerName;
                            map2Provinces[map2Cities[battle.cityID].provinceID].occupierID = guerrillaUnits[hostileGuerrillaID].seperatistID;
                            countries[map2Provinces[occupiedProvinceID].ownerID].secedingProvinces2.push(occupiedProvinceID);
                            // this province is now counting down to seccession in 4 years
                        } else {
                            rebelCounter++;
                            // if the first guerrilla in the city is not a seperatist then keep looking until the seperatists are found
                        }
                    }
                }
                
            } else if (battle.attackGuerrilla == 1) {
                // the guerrillas are particularists
                
                rebelCounter = 0;
                particularistNotFound = true;
                while (particularistNotFound) {
                    hostileGuerrillaID = map2Cities[battle.cityID].hostileGuerrillas[rebelCounter];
                    if (guerrillaUnits[hostileGuerrillaID].ideology == 1) {
                        particularistNotFound = false;
                        occupiedProvinceID = map2Cities[battle.cityID].provinceID;
                        map2Provinces[map2Cities[battle.cityID].provinceID].monthsUntilDemandsEnforced = 36;
                        map2Provinces[map2Cities[battle.cityID].provinceID].occupiedBy = attackerName;
                        map2Provinces[map2Cities[battle.cityID].provinceID].occupierID = 'particularist';
                        countries[map2Provinces[occupiedProvinceID].ownerID].secedingProvinces2.push(occupiedProvinceID);
                        // this province is now counting down to autonomy increase and policy change in 4 years
                    } else {
                        rebelCounter++;
                        // if the first guerrilla in the city is not a seperatist then keep looking until the seperatists are found
                    }
                }
                
            } else {
                // the guerrillas belong to a specific ideology, we should check the ideology array for a list of their demands
            }
          }
        }
      } else {
        if (battle.defendCountry == null) {
          // the defender is a rebel group
          defenderName = ideologies[battle.defendGuerrilla].name;
          map2Cities[battle.cityID].occupiedBy = defenderName;
          map2Cities[battle.cityID].occupierID = battle.defendGuerrilla;
          
          occupyingProvinceCityArray = map2Provinces[map2Cities[battle.cityID].provinceID].cities;
          allCitiesAreOccupied = true;
          
          occupyingProvinceCityArray.forEach(function(provincialCityID) {
            if (map2Cities[provincialCityID].occupierID != battle.defendGuerrilla) {
                allCitiesAreOccupied = false;
            }
          });
          
          // if all cities in this province are now occupied and the province is not under occupation then start the countdown to enforce demands
          if (allCitiesAreOccupied && !(countries[map2Provinces[map2Cities[battle.cityID].provinceID].ownerID].secedingProvinces2.includes(map2Cities[battle.cityID].provinceID))) {
            if (battle.defendGuerrilla == 0) {
                // the guerrillas are seperatists
                
                if (map2Provinces[map2Cities[battle.cityID].provinceID].monthsUntilSecession == null) {
                    rebelCounter = 0;
                    seperatistNotFound = true;
                    while (seperatistNotFound) {
                        hostileGuerrillaID = map2Cities[battle.cityID].hostileGuerrillas[rebelCounter];
                        if (guerrillaUnits[hostileGuerrillaID].seperatistID != null) {
                            seperatistNotFound = false;
                            occupiedProvinceID = map2Cities[battle.cityID].provinceID;
                            map2Provinces[map2Cities[battle.cityID].provinceID].monthsUntilDemandsEnforced = 48;
                            map2Provinces[map2Cities[battle.cityID].provinceID].occupiedBy = defenderName;
                            map2Provinces[map2Cities[battle.cityID].provinceID].occupierID = guerrillaUnits[hostileGuerrillaID].seperatistID;
                            countries[map2Provinces[occupiedProvinceID].ownerID].secedingProvinces2.push(occupiedProvinceID);
                            // this province is now counting down to seccession in 4 years
                        } else {
                            rebelCounter++;
                            // if the first guerrilla in the city is not a seperatist then keep looking until the seperatists are found
                        }
                    }
                }
                
            } else if (battle.defendGuerrilla == 1) {
                // the guerrillas are particularists
                
                rebelCounter = 0;
                particularistNotFound = true;
                while (particularistNotFound) {
                    hostileGuerrillaID = map2Cities[battle.cityID].hostileGuerrillas[rebelCounter];
                    if (guerrillaUnits[hostileGuerrillaID].ideology == 1) {
                        particularistNotFound = false;
                        occupiedProvinceID = map2Cities[battle.cityID].provinceID;
                        map2Provinces[map2Cities[battle.cityID].provinceID].monthsUntilDemandsEnforced = 36;
                        map2Provinces[map2Cities[battle.cityID].provinceID].occupiedBy = defenderName;
                        map2Provinces[map2Cities[battle.cityID].provinceID].occupierID = 'particularist';
                        countries[map2Provinces[occupiedProvinceID].ownerID].secedingProvinces2.push(occupiedProvinceID);
                        // this province is now counting down to autonomy increase and policy change in 4 years
                    } else {
                        rebelCounter++;
                        // if the first guerrilla in the city is not a seperatist then keep looking until the seperatists are found
                    }
                }
                
            } else {
                // the guerrillas belong to a specific ideology, we should check the ideology array for a list of their demands
            }
          }
        } 
      }
      
    break;
    case 3:
      
    break;
    case 4:
      
    break;
  }
  
  battle.finished = true;
  // finally conclude the city battle so that this battle can be removed from the battle array at the end of the year
}