tellTime = function(t1) {
  t2 = new Date().getTime();
  console.log(t2-t1);
}
// this function will tell us how long all economic calculations took for all countries


// World Clock: The function below should contain all logic the world needs executed on a timer
  // Each in-game tick is 1.2 seconds, there are 16 ticks per month, which is 19.2 seconds
  // 12 months in a year totalling 230.4 seconds or 3.84 minutes, and 200 years per game for a total of
  // 768 minutes per game, or 12.8 hours.
  tickTime = 1;
  worldClock = window.setInterval(function(){
    switch(tickTime) { 
    case 1:
        for (i = fireFlashesCity; i > 0; i--) {
          mainCanvas2.remove(window["fireFlashCityCircle"+i]);
          mainCanvas2.requestRenderAll();
          fireFlashesCity--;
        }
        // the window["fireFlashCityCircle"+fireFlashes] variable being used above is a way to add a number onto the end of a
        // javascript variable. When a weapon is fired it creates a 'flash circle' that you see on the map around cities
        // and naval units. Each circle has a unique number at the end of the name (fireFlashCityCircle1, fireFlashCityCircle2, etc.)
        // the code above is de-spawning each circle after the first tick of the new month, by working through them in reverse
        
        for (i = fireFlashesSpace; i > 0; i--) {
          mainCanvas2.remove(window["fireFlashSpaceCircle"+i]);
          mainCanvas2.requestRenderAll();
          fireFlashesSpace--;
        }
        
        for (i = fireFlashesUnit; i > 0; i--) {
          mainCanvas2.remove(window["fireFlashUnitCircle"+i]);
          mainCanvas2.requestRenderAll();
          fireFlashesUnit--;
        }
        
        tickTime++;
    break; 
    case 2:
        cityBattles.forEach(function(battle) {
          if (battle != null && !battle.finished) {
            cityBattle(battle);
          }
        });
        tickTime++;
    break;
    case 3: 
        tickTime++;
    break;
    case 4: 
        tickTime++;
    break;
    case 5: 
        tickTime++;
    break;
    case 6:
        cityBattles.forEach(function(battle) {
          if (battle != null && !battle.finished) {
            cityBattle(battle);
          }
        });
        tickTime++;
    break;
    case 7: 
        tickTime++;
    break;
    case 8: 
        tickTime++;
    break;
    case 9: 
        tickTime++;
    break;
    case 10:
        cityBattles.forEach(function(battle) {
          if (battle != null && !battle.finished) {
            cityBattle(battle);
          }
        });
        tickTime++;
    break;
    case 11: 
        tickTime++;
    break;
    case 12: 
        tickTime++;
    break;
    case 13: 
        tickTime++;
    break;
    case 14:
      
        countries.forEach(function(country) {
          
          country.ownedProvinces1.forEach(function(province) {
            
            // disease spread between provinces
            
            // ideology spread between provinces
            
            // ethnicity spread between provinces
            
            // provincial unrest and guerrillas
            factorUnrest1(country.id, province.id, province.unrest, province.civilUnrest);
            
          });
          
          country.ownedProvinces2.forEach(function(provinceID) {
            // I am calling the forEach loop here on a single value array instead of the array of province objects
            // disease spread between provinces
            
            // ideology spread between provinces
            
            // ethnicity spread between provinces
            
            // provincial unrest and guerrillas
            // add function to calculate unrest, probably by adding an unrestEffects array to each province and mapping the effects
            // to a timer or policy, and each month verifying that the time has not yet passed or the policy is still in effect
            // and then re-calculating how much unrest should rightfully be in that province. Ideology must also be taken into account
            factorUnrest2(country.id, provinceID, map2Provinces[provinceID].unrest, map2Provinces[provinceID].civilUnrest);
            
          });
          
          country.ownedProvinces3.forEach(function(province) {
            
            // disease spread between provinces
            
            // ideology spread between provinces
            
            // ethnicity spread between provinces
            
            // provincial unrest and guerrillas
            factorUnrest3(country.id, province.id, province.unrest, province.civilUnrest);
            
          });
          
          country.ownedProvinces4.forEach(function(province) {
            
            // disease spread between provinces
            
            // ideology spread between provinces
            
            // ethnicity spread between provinces
            
            // provincial unrest and guerrillas
            factorUnrest4(country.id, province.id, province.unrest, province.civilUnrest);
            
          });
          
        });
        
        cityBattles.forEach(function(battle) {
          if (battle != null && !battle.finished) {
            cityBattle(battle);
          }
        });
        
        tickTime++;
    break;
    case 15:
        tickTime++;
    break;
    case 16:
      
      
      t1 = new Date().getTime();
      // this variable is the start time for this month's calculations. At the bottom of this tick, this variable will be used
      // to determine how long this entire foreach loop took to run for all countries combined
      
        countries.forEach(function(country) {
        if (!country.isDead) {
            
            // ======= PROVINCE OCCUPATION / SECESSION =======================================================================
            secedingProvinceID1 = 0;
            country.secedingProvinces1.forEach(function(provinceID) {
              
              secedingProvinceID1++;
            }); 
            
            secedingProvinceID2 = 0;
            country.secedingProvinces2.forEach(function(provinceID) {
              if (map2Provinces[provinceID].occupierID != null) {
                map2Provinces[provinceID].monthsUntilDemandsEnforced--;
                if (map2Provinces[provinceID].monthsUntilDemandsEnforced == 0) {
                    // secede the province to the occupier of said province
                    // this function will be created in political-functions.php
                    // it has not yet been created, this is a TODO item
                    // remember to refactor things like unrest
                    if (map2Provinces[provinceID].occupierID == 'particularist') {
                      console.log(`incresing autonomy in province ${provinceID}`);
                        map2Provinces[provinceID].autonomy = map2Provinces[provinceID].autonomy + 0.50;
                        if (map2Provinces[provinceID].autonomy > 1) {
                            map2Provinces[provinceID].autonomy = 1;
                        }
                        map2Provinces[provinceID].monthsUntilDemandsEnforced = null;
                        map2Provinces[provinceID].occupiedBy = '';
                        map2Provinces[provinceID].occupierID = null;
                        country.secedingProvinces2.splice(provinceID, 1);
                        
                        // remove one policy that particularists don't like
                        
                    } else {
                      console.log(`province ${provinceID} has been succesfully occupied by seperatists or idealogues!`);
                      // this code will fire if the occupied province is for [seperatists] or [idealogues]
                    }
                }
              } 
              secedingProvinceID2++;
            });
            
            secedingProvinceID3 = 0;
            country.secedingProvinces3.forEach(function(provinceID) {
              
              secedingProvinceID3++;
            });
            
            secedingProvinceID4 = 0;
            country.secedingProvinces4.forEach(function(provinceID) {
              
              secedingProvinceID4++;
            }); 
            
            // ===============================================================================================================
            
            // Reset all recorded costs from last month, we want to make sure that when the month rolls over the recorded expenses are recent
            country.capitalExpense = country.buildingCapitalExpense;
            country.energyExpense = country.buildingEnergyExpense;
            country.monthlyEnergy = 2;
            // every country gets a base of 2 energy, fixed capital and energy expenses for buildings are also taken into account here
            country.monthlyProcessedMetal = 0;
            country.monthlyProcessedMinerals = 0;
            country.processedMetalExpense = 0;
            country.processedMineralsExpense = 0;
            country.manpowerExpense = 0;
            country.mineralExpense = 0;
            country.metalExpense = 0;
            country.oceanRigOil = 0;
            country.syntheticOilProduced = 0;
            country.oilExpense = 0;
            country.preciousMetalExpense = 0;
            country.nuclearMaterialExpense = 0;
            country.antiMatterExpense = 0;
            country.exoticMatterExpense = 0;
            // here we are only setting the values of resources affected by buildings back to zero. We would not
            // set monthlyFood back to zero, because food is produced primarily by provinces and the quantity of
            // food produced monthly by provinces should only be readjusted when a province is gained or lost or
            // the product of a province changes, so it will be changed rarely, not monthly
            
            
            // Capital ==========================================================
            if (country.debt > 0) {
                monthlyInterestRate = country.debtInterestRate / 12;
                interestPayment = country.debt * monthlyInterestRate;
                country.debt = country.debt * (1 + monthlyInterestRate);
                
                debtPayment = (country.debt / 240) + interestPayment;
                if (debtPayment < 4) {
                  debtPayment = 4;
                }
                country.debt = country.debt - debtPayment;
                
                // if in a Depression temporarily reduce the income by 10%
                if (country.inDepression) {
                  fullTaxModifier = country.taxModifier - 0.1;
                } else {
                  fullTaxModifier = country.taxModifier;
                }
                
                // now that we have applied interest to loans and figured out what the debt payment is,
                // we apply the debt payment to the expenses.
                
                if (country.capitalStored > country.capitalStorageCapacity) {
                    fullCoffersPenalty = country.capitalStored / country.capitalStorageCapacity;
                    // the Capital we are storing is greater than what our government can reasonably handle
                    // because of that we must apply the full coffers penalty, this is made better by some expansion
                    // technologies and worse by corruption and some other techs
                    // apply modifiers to the Full Coffers Penalty below
                    if (country.techs.includes('global-investment-economy')) {
                        // +25%
                        fullCoffersPenalty -= 1;
                        fullCoffersPenalty = fullCoffersPenalty * 1.25;
                        fullCoffersPenalty += 1;
                    } else if (country.techs.includes('large-investments')) {
                        // -40%
                        fullCoffersPenalty -= 1;
                        fullCoffersPenalty = fullCoffersPenalty * 0.6;
                        fullCoffersPenalty += 1;
                    } else if (country.techs.includes('internal-investments')) {
                        // -50%
                        fullCoffersPenalty -= 1;
                        fullCoffersPenalty = fullCoffersPenalty * 0.5;
                        fullCoffersPenalty += 1;
                    }
                    monthlyCapital = country.monthlyCapital * fullCoffersPenalty;
                } else {
                  monthlyCapital = country.monthlyCapital;
                }
                
                capitalChange = (monthlyCapital * fullTaxModifier) - (debtPayment + country.buildingCapitalExpense);
                capitalAmount = country.capitalStored + capitalChange;
                 if (capitalAmount < 0 && country.capitalStored < 0) {
                    country.debt = country.debt - capitalAmount;
                    country.capitalStored = 0;
                    if (country.debt > country.maxDebt) {
                      declareBankruptcy(country.id);
                    }
                } else {
                  country.capitalStored = capitalAmount;
                }
                
            } else {
              
              // if in a Depression temporarily reduce the income by 10%
              if (country.inDepression) {
                fullTaxModifier = country.taxModifier - 0.1;
              } else {
                fullTaxModifier = country.taxModifier;
              }
              
              if (country.capitalStored > country.capitalStorageCapacity) {
                    fullCoffersPenalty = country.capitalStored / country.capitalStorageCapacity;
                    // the Capital we are storing is greater than what our government can reasonably handle
                    // because of that we must apply the full coffers penalty, this is made better by some expansion
                    // technologies and worse by corruption and some other techs
                    // apply modifiers to the Full Coffers Penalty below
                    if (country.techs.includes('global-investment-economy')) {
                        // +25%
                        fullCoffersPenalty -= 1;
                        fullCoffersPenalty = fullCoffersPenalty * 1.25;
                        fullCoffersPenalty += 1;
                    } else if (country.techs.includes('large-investments')) {
                        // -40%
                        fullCoffersPenalty -= 1;
                        fullCoffersPenalty = fullCoffersPenalty * 0.6;
                        fullCoffersPenalty += 1;
                    } else if (country.techs.includes('internal-investments')) {
                        // -50%
                        fullCoffersPenalty -= 1;
                        fullCoffersPenalty = fullCoffersPenalty * 0.5;
                        fullCoffersPenalty += 1;
                    }
                    monthlyCapital = country.monthlyCapital / fullCoffersPenalty;
                } else {
                  monthlyCapital = country.monthlyCapital;
                }
              
              capitalChange = (monthlyCapital * fullTaxModifier ) - country.buildingCapitalExpense;
              capitalAmount = country.capitalStored + capitalChange;
               if (capitalAmount < 0 && country.capitalStored < 0) {
                  country.debt = country.debt - capitalAmount;
                  country.capitalStored = 0;
                } else {
                country.capitalStored = capitalAmount;
                }
            }
            
            // Energy: Fixed Expenses ================================================
            energyChange = country.monthlyEnergy - country.buildingEnergyExpense;
            energyAmount = country.energyStored + energyChange;
            if (energyAmount > country.energyStorageCapacity) {
                country.energyStored = country.energyStorageCapacity;
            } else {
                country.energyStored = energyAmount;
            }
            // the purpose of this section is to add the base energy all nations get (+2) and subtract the fixed
            // energy cost of certain buildings, usually military bases. Most of the energy budget however should
            // be consumed by things building produce, and active military units, not buildings themselves
            
            // this is not the only code that affects energy. Further down this page inside of building processes
            // energy is further added and subtracted. Negative effects a country suffers from having an energy
            // defecit should be calculated after building proceeses are taken into account, just above the code
            // that displays these numbers to the player if that country is player controlled
            
            
            // Influence =============================================================
            influenceChange = country.monthlyInfluence - country.influenceExpense;
            influenceAmount = country.influenceStored + influenceChange;
            if (influenceAmount > country.influenceStorageCapacity) {
                country.influenceStored = country.influenceStorageCapacity;
            } else {
                country.influenceStored = influenceAmount;
            }
            
            // Food ==================================================================
            foodChange = country.monthlyFood - country.foodExpense;
            // monthlyFood and foodExpense is calculated whenever a province changes hands, or whenever a new year begins
            
            // If Agricultural Materials are being produced in this country, and at least 1 unit is stored
            // then take the amount of food being produced and divide it by 3. If this number comes out to
            // be 1, then determine if you have at least 1 AG stored. If you do then subtract the 1 AG and
            // add 1 food produced to this country instead. If you have a larger Agricultural base (for instance you
            // produce 6 food per month) then check to see if you have 2 AG being stored. If you do then
            // subtract those 2 AG and add 2 food to the country instead. This continues to a maximum of
            // 6 extra food production. If at any point you have a large agricultural base but are not producing
            // as much AG as you can consume, then instead whatever smaller amount of AG is being produced will be
            // turned into food. Effectively, up to a limit of 6 food per month, AG is used to produce 1
            // food for every 3 food already produced, making it a 33% increase in total food production.
            if (country.agriculturalMaterialStored >= 1) {
              agricultureBase = country.monthlyFood / 3;
              agricultureBase = Math.floor(agricultureBase);
              switch(agricultureBase) {
                case 1:
                  if (country.agriculturalMaterialStored >= 1) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 1;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 1;
                    foodChange = foodChange + 1;
                  } 
                break;
                case 2:
                  if (country.agriculturalMaterialStored >= 2) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 2;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 2;
                    foodChange = foodChange + 2;
                  } else if (country.agriculturalMaterialStored === 1) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 1;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 1;
                    foodChange = foodChange + 1;
                  } 
                break;
                case 3:
                  if (country.agriculturalMaterialStored >= 3) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 3;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 3;
                    foodChange = foodChange + 3;
                  } else if (country.agriculturalMaterialStored === 2) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 2;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 2;
                    foodChange = foodChange + 2;
                  } else if (country.agriculturalMaterialStored === 1) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 1;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 1;
                    foodChange = foodChange + 1;
                  } 
                break;
                case 4:
                  if (country.agriculturalMaterialStored >= 4) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 4;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 4;
                    foodChange = foodChange + 4;
                  } else if (country.agriculturalMaterialStored === 3) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 3;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 3;
                    foodChange = foodChange + 3;
                  } else if (country.agriculturalMaterialStored === 2) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 2;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 2;
                    foodChange = foodChange + 2;
                  } else if (country.agriculturalMaterialStored === 1) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 1;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 1;
                    foodChange = foodChange + 1;
                  } 
                break;
                case 5:
                  if (country.agriculturalMaterialStored >= 5) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 5;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 5;
                    foodChange = foodChange + 5;
                  } else if (country.agriculturalMaterialStored === 4) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 4;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 4;
                    foodChange = foodChange + 4;
                  } else if (country.agriculturalMaterialStored === 3) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 3;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 3;
                    foodChange = foodChange + 3;
                  } else if (country.agriculturalMaterialStored === 2) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 2;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 2;
                    foodChange = foodChange + 2;
                  } else if (country.agriculturalMaterialStored === 1) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 1;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 1;
                    foodChange = foodChange + 1;
                  } 
                break;
                default:
                  if (country.agriculturalMaterialStored >= 6) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 6;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 6;
                    foodChange = foodChange + 6;
                  } else if (country.agriculturalMaterialStored === 5) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 5;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 5;
                    foodChange = foodChange + 5;
                  } else if (country.agriculturalMaterialStored === 4) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 4;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 4;
                    foodChange = foodChange + 4;
                  } else if (country.agriculturalMaterialStored === 3) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 3;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 3;
                    foodChange = foodChange + 3;
                  } else if (country.agriculturalMaterialStored === 2) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 2;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 2;
                    foodChange = foodChange + 2;
                  } else if (country.agriculturalMaterialStored === 1) {
                    country.agriculturalMaterialStored = country.agriculturalMaterialStored - 1;
                    country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + 1;
                    foodChange = foodChange + 1;
                  } 
                break;
              }
            }
            foodAmount = country.foodStored + foodChange;
            if (foodAmount > country.foodStorageCapacity) {
                country.foodStored = country.foodStorageCapacity;
            } else if (foodAmount < -10 ){
                country.foodStored = -10;
            } else {
              country.foodStored = foodAmount;
            }
            
            // Manpower ================================================================
            if (country.manpowerGainModifier) {
              manpowerChange = country.monthlyManpower * (1 + country.manpowerGainModifier);
            } else {
              manpowerChange = country.monthlyManpower
            }
            manpowerAmount = country.manpowerStored + manpowerChange;
            // Manpower Storage Modifier
            if (country.manpowerModifier) {
              manpowerMax = country.manpowerStorageCapacity * (1 + country.manpowerModifier);
            } else {
              manpowerMax = country.manpowerStorageCapacity;
            }
            // ============================
            if (manpowerAmount > manpowerMax) {
                country.manpowerStored = manpowerMax;
            } else {
                country.manpowerStored = manpowerAmount;
            }
            
            // Raw Minerals ==============================================================
            mineralAmount = country.mineralStored + country.monthlyMinerals;
            if (mineralAmount > country.mineralStorageCapacity) {
                country.mineralStored = country.mineralStorageCapacity;
            } else {
                country.mineralStored = mineralAmount;
            }
            
            // Raw Metal ==================================================================
            metalAmount = country.metalStored + country.monthlyMetal;
            if (metalAmount > country.metalStorageCapacity) {
                country.metalStored = country.metalStorageCapacity;
            } else {
                country.metalStored = metalAmount;
            }
            
            // Oil ========================================================================
            oilAmount = country.oilStored + country.monthlyOil;
            if (oilAmount > country.oilStorageCapacity) {
                country.oilStored = country.oilStorageCapacity;
            } else {
                country.oilStored = oilAmount;
            }
            
            // Precious Metals ==============================================================
            preciousMetalAmount = country.preciousMetalStored + country.monthlyPreciousMetal;
            if (preciousMetalAmount > country.preciousMetalStorageCapacity) {
                country.preciousMetalStored = country.preciousMetalStorageCapacity;
            } else {
                country.preciousMetalStored = preciousMetalAmount;
            }
            
            // Nuclear Materials =============================================================
            nuclearAmount = country.nuclearMaterialStored + country.monthlyNuclearMaterial;
            if (nuclearAmount > country.nuclearMaterialStorageCapacity) {
                country.nuclearMaterialStored = country.nuclearMaterialStorageCapacity;
            } else {
                country.nuclearMaterialStored = nuclearAmount;
            }
            
            
            
            
            
            // here we have have building process processors for each array inside of every country, these arrays are labeled
            // 1 through 4 and indicate which planet the building process is taking place on. Each building process is associated
            // with a building in a city, therefore each array of building processes is associated with a solar system
            
            //runBuildingProcesses1(country);
            // this enormous function will take care of every action performed by every type of building owned by this country
            
            runBuildingProcesses2(country);
            
            
            //runBuildingProcesses3(country);
            
            
            //runBuildingProcesses4(country);
            
            
            
            
            
            
            // COUNTRY IS STARVING
            if (country.foodStored < 0) {
              enterFamine(country.id);
              if (country.isPlayer) {
                // if this country is the players that is currently in a famine, then update the population
                // numbers of the city they are looking at in real time just because that is nice to look at.
                textPopString = document.querySelector('#city-population').textContent;
                if (textPopString) {
                  textPopAmount = textPopString.match(/\d+/g);
                  fullNumber = '';
                  textPopAmount.forEach(function(numberString) {
                    fullNumber += numberString;
                  });
                  fullNumber = Number(fullNumber);
                  fullNumber = fullNumber * 0.996;
                  fullNumber = Math.round(fullNumber);
                  fullNumber = fullNumber.toLocaleString();
                  document.querySelector('#city-population').textContent = "Population: " + fullNumber;
                }
              }
            } else {
              if (country.isStarving) {
                endFamine(country.id);
              }
            }
            
            
            
            if (country.isPlayer) {
              
              // the functions below will figure out if the image currently on the user's screen is of a building
              // being constructed, if it's construction has made any progress, and if it has, update the image accordingly
              cityIndex = document.querySelector("#city-index").textContent;
              planetIndex = document.querySelector("#planet-index").textContent;
              
              buildingElement4 = document.querySelector("#building-select-4");
              if (buildingElement4) {
                buildingElement4 = document.querySelector("#building-select-4").src;
                builtWordIndex = buildingElement4.search("built");
                if (builtWordIndex != -1) {
                  updateImage(4, buildingElement4, cityIndex, planetIndex);
                }
              }
              
              buildingElement3 = document.querySelector("#building-select-3");
              if (buildingElement3) {
                buildingElement3 = document.querySelector("#building-select-3").src;
                builtWordIndex = buildingElement3.search("built");
                if (builtWordIndex != -1) {
                  updateImage(3, buildingElement3, cityIndex, planetIndex);
                }
              }
              
              buildingElement2 = document.querySelector("#building-select-2");
              if (buildingElement2) {
                buildingElement2 = document.querySelector("#building-select-2").src;
                builtWordIndex = buildingElement2.search("built");
                if (builtWordIndex != -1) {
                  updateImage(2, buildingElement2, cityIndex, planetIndex);
                }
              }
              
              buildingElement1 = document.querySelector("#building-select-1");
              if (buildingElement1) {
                buildingElement1 = document.querySelector("#building-select-1").src;
                builtWordIndex = buildingElement1.search("built");
                if (builtWordIndex != -1) {
                  updateImage(1, buildingElement1, cityIndex, planetIndex);
                }
              }
              
              buildingElement0 = document.querySelector("#building-select-0");
              if (buildingElement0) {
                buildingElement0 = document.querySelector("#building-select-0").src;
                builtWordIndex = buildingElement0.search("built");
                if (builtWordIndex != -1) {
                  updateImage(0, buildingElement0, cityIndex, planetIndex);
                }
              }
              
                capitalChange = capitalChange.toFixed(2)
                capitalChange = Number(capitalChange);
                if (capitalChange < 0) {
                  document.querySelector("#country-capital-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + capitalChange.toLocaleString() + "</span>";
                } else {
                  document.querySelector("#country-capital-growth").innerHTML = "+" + capitalChange.toLocaleString();
                }
                document.querySelector("#country-capital-amount").textContent = country.capitalStored.toFixed(0);
                
                if (country.inDepression) {
                  document.querySelector("#country-capital-amount").style.color = "rgb(255,200,200)";
                  document.querySelector("#country-capital-amount").style.textShadow = "0px 0px 4px rgb(255,100,100)";
                } else {
                  document.querySelector("#country-capital-amount").style.color = "white";
                  document.querySelector("#country-capital-amount").style.textShadow = "0px 0px 4px transparent";
                }
                
                if (influenceChange < 0) {
                  document.querySelector("#country-influence-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + influenceChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-influence-growth").innerHTML = "+" + influenceChange.toFixed(2);
                }
                document.querySelector("#country-influence-amount").textContent = country.influenceStored;
                
                oilChange = ((country.monthlyOil + country.oceanRigOil + country.syntheticOilProduced) - country.oilExpense);
                if (oilChange < 0) {
                  document.querySelector("#country-oil-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + oilChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-oil-growth").innerHTML = "+" + oilChange.toFixed(2);
                }
                document.querySelector("#country-oil-amount").textContent = country.oilStored.toFixed(0);
                
                mineralChange = (country.monthlyMinerals - country.mineralExpense);
                mineralChange = Number(mineralChange);
                if (mineralChange < 0) {
                  document.querySelector("#country-mineral-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + mineralChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-mineral-growth").innerHTML = "+" + mineralChange.toFixed(2);
                }
                document.querySelector("#country-mineral-amount").textContent = country.mineralStored.toFixed(0);
                
                processedMineralsChange = (country.monthlyProcessedMinerals - country.processedMineralsExpense);
                processedMineralsChange = Number(processedMineralsChange);
                if (processedMineralsChange < 0) {
                  document.querySelector("#country-processed-mineral-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + processedMineralsChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-processed-mineral-growth").innerHTML = "+" + processedMineralsChange.toFixed(2);
                }
                document.querySelector("#country-processed-mineral-amount").textContent = country.processedMineralsStored.toFixed(0);
                
                nuclearChange = (country.monthlyNuclearMaterial - country.nuclearMaterialExpense);
                nuclearChange = Number(nuclearChange);
                if (nuclearChange < 0) {
                  document.querySelector("#country-nuclear-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + nuclearChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-nuclear-growth").innerHTML = "+" + nuclearChange.toFixed(2);
                }
                document.querySelector("#country-nuclear-amount").textContent = country.nuclearMaterialStored.toFixed(1);
                
                exoticChange = (country.monthlyExoticMatter - country.exoticMatterExpense);
                exoticChange = Number(exoticChange);
                if (exoticChange < 0) {
                  document.querySelector("#country-exotic-matter-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + exoticChange.toFixed(3) + "</span>";
                } else {
                  document.querySelector("#country-exotic-matter-growth").innerHTML = "+" + exoticChange.toFixed(3);
                }
                document.querySelector("#country-exotic-matter-amount").textContent = country.exoticMatterStored.toFixed(1);
                
                if (energyChange < 0) {
                  document.querySelector("#country-energy-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + energyChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-energy-growth").innerHTML = "+" + energyChange.toFixed(2);
                }
                document.querySelector("#country-energy-amount").textContent = country.energyStored.toFixed(0);
                
                if (foodChange < 0) {
                  document.querySelector("#country-food-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + foodChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-food-growth").innerHTML = "+" + foodChange.toFixed(2);
                }
                if (country.foodStored > 0) {
                  document.querySelector("#country-food-amount").innerHTML =  country.foodStored.toFixed(0);
                } else {
                  document.querySelector("#country-food-amount").innerHTML = "<span style='color:rgb(255,50,50);'>" + country.foodStored.toFixed(0); + "</span>";
                }
                
                
                manpowerChange = (manpowerChange - country.manpowerExpense);
                manpowerChange = manpowerChange.toFixed(0);
                manpowerChange = Number(manpowerChange);
                manpowerStoredDisplay = country.manpowerStored.toFixed(0);
                manpowerStoredDisplay = Number(manpowerStoredDisplay);
                if (manpowerChange < 0) {
                  document.querySelector("#country-manpower-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + manpowerChange.toLocaleString() + "</span>";
                } else {
                  document.querySelector("#country-manpower-growth").innerHTML = "+" + manpowerChange.toLocaleString();
                }
                document.querySelector("#country-manpower-amount").textContent = manpowerStoredDisplay.toLocaleString();
                
                metalChange = (country.monthlyMetal - country.metalExpense);
                metalChange = Number(metalChange);
                if (metalChange < 0) {
                  document.querySelector("#country-metal-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + metalChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-metal-growth").innerHTML = "+" + metalChange.toFixed(2);
                }
                document.querySelector("#country-metal-amount").textContent = country.metalStored.toFixed(0);
                
                processedMetalChange = (country.monthlyProcessedMetal - country.processedMetalExpense);
                processedMetalChange = Number(processedMetalChange);
                if (processedMetalChange < 0) {
                  document.querySelector("#country-processed-metal-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + processedMetalChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-processed-metal-growth").innerHTML = "+" + processedMetalChange.toFixed(2);
                }
                document.querySelector("#country-processed-metal-amount").textContent = country.processedMetalStored.toFixed(0);
                
                
                preciousMetalChange = (country.monthlyPreciousMetal - country.preciousMetalExpense);
                preciousMetalChange = Number(preciousMetalChange);
                if (country.monthlyPreciousMetal < 0) {
                  document.querySelector("#country-precious-metal-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + preciousMetalChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-precious-metal-growth").innerHTML = "+" + preciousMetalChange.toFixed(2);
                }
                document.querySelector("#country-precious-metal-amount").textContent = preciousMetalChange.toFixed(1);
                
                antiMatterChange = (country.monthlyAntiMatter - country.antiMatterExpense);
                antiMatterChange = Number(antiMatterChange);
                if (antiMatterChange < 0) {
                  document.querySelector("#country-antimatter-growth").innerHTML = "<span style='color:rgb(255,50,50);'>" + antiMatterChange.toFixed(3) + "</span>";
                } else {
                  document.querySelector("#country-antimatter-growth").innerHTML = "+" + antiMatterChange.toFixed(3);
                }
                document.querySelector("#country-antimatter-amount").textContent = country.antiMatterStored.toFixed(1);
            }
        }
        });
        
        currentMonth = document.querySelector(".current-month").textContent;
        switch(currentMonth) {
            case 'January':
              
                countries.forEach(function(country) {
                  
                  if (country.inDepression) {
                    fullTaxModifier = country.taxModifier - 0.1;
                  } else {
                    fullTaxModifier = country.taxModifier;
                  }
                  
                  incomeLevel = country.monthlyCapital * fullTaxModifier;
                  fullCoffersCorruptionPenalty = 1 + (country.corruption / 100);
                  country.capitalStorageCapacity = (incomeLevel * 24) / fullCoffersCorruptionPenalty;
                  // the fullCoffersPenalty begins at 2 years stored capital with 0 corruption or 1 year
                  // stored Capital with 100 corruption
                  country.maxDebt = incomeLevel * 60;
                  // the amount of debt a country can store is always equal to it's monthly income distributed
                  // over 5 years
                  
                  updateMilitaryUnitCapitalCosts(country.id);
                  // now that we have figured out the latest averageGdpPerCapita for this country last month
                  // we want to know how much military units should get paid in Capital
                  
                });
                // every year after income is recalculated, we must then recalculate maximum
                // capital storage and maximum debt as well since these are based on income
                
                document.querySelector(".current-month").textContent = 'February';
            break;
            case 'February':
                document.querySelector(".current-month").textContent = 'March';
            break;
            case 'March':
                document.querySelector(".current-month").textContent = 'April';
            break;
            case 'April':
                document.querySelector(".current-month").textContent = 'May';
            break;
            case 'May':
                document.querySelector(".current-month").textContent = 'June';
            break;
            case 'June':
                document.querySelector(".current-month").textContent = 'July';
            break;
            case 'July':
                document.querySelector(".current-month").textContent = 'August';
            break;
            case 'August':
                document.querySelector(".current-month").textContent = 'September';
            break;
            case 'September':
                document.querySelector(".current-month").textContent = 'October';
            break;
            case 'October':
                document.querySelector(".current-month").textContent = 'November';
            break;
            case 'November':
                document.querySelector(".current-month").textContent = 'December';
            break;
            case 'December':
              
              // annual calculations will take place here
              // Do not forget that population growth should not take place if the isStarving property is set to TRUE
              
              // things to calculate:
              // GDPPerCapitaGrowth / done
              // PopulationGrowth / done
              // add Depression mechanics for maps 1,3, and 4
              // ideology spread
              // Ethnic group spread
              // Points
              
              // ==== Global Depression Mechanics =====================================================================
              
              countries.forEach(function(country) {
                if (country.inDepression) {
                  if (country.techs.includes('economic')) {
                    country.inDepression = false;
                    // if this country chose the Economic Expansion Path then remove the Depression after 1 year
                  } else {
                    if (country.corruption < 50) { // countries with low corruption have a 30% chance of recovering
                      // from a Depression while countries with high corruption have a 20% chance of recovering
                      recoveryChance = Math.floor(Math.random() * 3);
                      if (recoveryChance == 1) {
                        country.inDepression = false;
                      }
                    } else {
                      recoveryChance = Math.floor(Math.random() * 5);
                      if (recoveryChance == 1) {
                        country.inDepression = false;
                      }
                    }
                  }
                }
              });
              
              if (map1LastDepression >= (currentYear - 25)) {
                // it has been less than 25 years since the last Depression so a new Depression cannot happen
              } else if (map1LastDepression <= (currentYear - 50)) {
                // it has been 50 years or more since the last Depression so start one right away
              } else {
                // it has been between 25 and 50 years since a Depression, their is a 5% chance of having one this year
              }
              
              if (map2LastDepression >= (currentYear - 25)) {
                // it has been less than 25 years since the last Depression so a new Depression cannot happen
              } else if (map2LastDepression <= (currentYear - 50)) {
                console.log(`A Global depression has been triggered due to time since last one`);
                map2LastDepression = currentYear;
                // it has been 50 years or more since the last Depression so start one right away
                countries.forEach(function(country) {
                  if (country.ownedProvinces2.length > 0) {
                    country.inDepression = true;
                    country.ownedProvinces2.forEach(function(provinceID) {
                      if (country.averageGdpPerCapita > map2GDPPerCapita) {
                        // this is a rich country, so they will be more affected by the Depression
                        map2Provinces[provinceID].gdpPerCapita = map2Provinces[provinceID].gdpPerCapita * 0.94;
                        
                        // In Depressions Rich countries lose -6% of gdpPerCapita in the first year and -3%
                        // every year after that until they pull out of the Depression, poor countries
                        // lose -3% the first year then -1.5% every year after
                        
                      } else {
                        map2Provinces[provinceID].gdpPerCapita = map2Provinces[provinceID].gdpPerCapita * 0.97;
                      }
                    });
                  }
                });
              } else {
                // it has been between 25 and 50 years since a Depression, their is a 5% chance of having one this year
                depressionChance = Math.floor(Math.random() * 20);
                if (depressionChance == 20) {
                  console.log(`A Global depression has been triggered`);
                  map2LastDepression = currentYear;
                  countries.forEach(function(country) {
                    if (country.ownedProvinces2.length > 0) {
                      country.inDepression = true;
                      country.ownedProvinces2.forEach(function(provinceID) {
                        if (country.averageGdpPerCapita > map2GDPPerCapita) {
                          // this is a rich country, so they will be more affected by the Depression
                          map2Provinces[provinceID].gdpPerCapita = map2Provinces[provinceID].gdpPerCapita * 0.94;
                        } else {
                          map2Provinces[provinceID].gdpPerCapita = map2Provinces[provinceID].gdpPerCapita * 0.98;
                        }
                      });
                    }
                  });
                }
              }
              
              if (map3LastDepression >= (currentYear - 25)) {
                // it has been less than 25 years since the last Depression so a new Depression cannot happen
              } else if (map3LastDepression <= (currentYear - 50)) {
                // it has been 50 years or more since the last Depression so start one right away
              } else {
                // it has been between 25 and 50 years since a Depression, their is a 5% chance of having one this year
              }
              
              if (map4LastDepression >= (currentYear - 25)) {
                // it has been less than 25 years since the last Depression so a new Depression cannot happen
              } else if (map4LastDepression <= (currentYear - 50)) {
                // it has been 50 years or more since the last Depression so start one right away
              } else {
                // it has been between 25 and 50 years since a Depression, their is a 5% chance of having one this year
              }
              
              // Calculate Economics and Unrest ==============================================================
              countries.forEach(function(country) {
                if (country.isBankrupt) {
                  switch(country.isBankrupt) {
                    case 'bankrupt-year-5':
                      country.isBankrupt = 'bankrupt-year-4';
                    break;
                    case 'bankrupt-year-4':
                      country.isBankrupt = 'bankrupt-year-3';
                    break;
                    case 'bankrupt-year-3':
                      country.isBankrupt = 'bankrupt-year-2';
                    break;
                    case 'bankrupt-year-2':
                      country.isBankrupt = 'bankrupt-year-1';
                    break;
                    case 'bankrupt-year-1':
                      endBankruptcy(country.id);
                    break;
                  }
                }
                
                // Recalculate Provincial Unrest Modifiers from Rebel Spawns =================================
                unrestInfoStringCounter = 0;
                country.provincialUnrestReduction2.forEach(function(provinceInfoString) {
                  provinceInfo = provinceInfoString.split("-");
                  if (provinceInfo[1] > 1) {
                    provinceInfo[1]--;
                    newProvinceInfo = provinceInfo[0] + "-" + provinceInfo[1];
                    country.provincialUnrestReduction2[unrestInfoStringCounter] = newProvinceInfo;
                    // if we are still waiting for the unrest to return to normal, then subtract 1 year from the info string and
                    // return the string to its position in this country's array
                  } else {
                    country.provincialUnrestReduction2.splice(unrestInfoStringCounter,1);
                    map2Provinces[provinceInfo[0]].unrest = map2Provinces[provinceInfo[0]].unrest + 20;
                    // if the unrest was reduced 10 years ago, then return it to its normal state
                  }
                  unrestInfoStringCounter++;
                });
                
                // here we will recalculate the gdppercapita of a province and also the population size, and then calculate also
                // the benefits of these two numbers in each province
                /*country.ownedProvinces1.forEach(function(provinceID) {
                
                }); */
                
                cumulativeGDPPerCapita = 0;
                country.ownedProvinces2.forEach(function(provinceID) {
                  if (map2Provinces[provinceID].autonomy > 0.025) {
                    map2Provinces[provinceID].autonomy -= (0.025 + countries[map2Provinces[provinceID].ownerID].autonomyDecrease);
                  } else if (map2Provinces[provinceID].autonomy > 0) {
                    map2Provinces[provinceID].autonomy = 0;
                  } // if the province has any level of autonomy, decrease it by about 2.5% every year
                  recalculateProvincePopulation2(provinceID);
                  recalculateProvinceGDP2(provinceID);
                  
                  cumulativeGDPPerCapita = parseFloat(cumulativeGDPPerCapita) + parseFloat(map2Provinces[provinceID].gdpPerCapita);
                  
                });
                
                if (country.ownedProvinces2.length > 0) {
                  country.averageGdpPerCapita = cumulativeGDPPerCapita / country.ownedProvinces2.length;
                  map2CountryIndexPosition = countryIDList2.indexOf(country.id);
                  countryGDPPerCapita2[map2CountryIndexPosition] = country.averageGdpPerCapita;
                  // update the country's averageGDPPerCapita for nation and planet
                }
                
                
                
                calculateCountryCapital(country.id);
                // figure out what the monthlyCapital is for this country
                calculateCountryManpower(country.id);
                // figure out what the monthlyManpower is for this country
                
                /*country.ownedProvinces3.forEach(function(provinceID) {
                
                });
                
                country.ownedProvinces4.forEach(function(provinceID) {
                
                }); */
              });
              
              map2GDPPerCapita = 0;
              countryGDPPerCapita2.forEach(function(gdpPerCapita) {
                map2GDPPerCapita += gdpPerCapita;
              });
              map2GDPPerCapita = map2GDPPerCapita / countryGDPPerCapita2.length;
              
              // Add casualties from battle this year and clear out battle arrays
              cityBattles.forEach(function(battle) {
                if (battle != null) {
                  if (battle.finished) {
                    // tally all losses for attacker nations then defender nations
                    if (battle.attackCountry != null) {
                      countries[battle.attackCountry].infantryLosses = countries[battle.attackCountry].infantryLosses + battle.attackInfantryLoss;
                      countries[battle.attackCountry].spaceInfantryLosses = countries[battle.attackCountry].spaceInfantryLosses + battle.attackSpaceInfantryLoss;
                      countries[battle.attackCountry].spaceMarineLosses = countries[battle.attackCountry].spaceMarineLosses + battle.attackSpaceMarineLoss;
                      countries[battle.attackCountry].marineLosses = countries[battle.attackCountry].marineLosses + battle.attackMarineLoss;
                      countries[battle.attackCountry].tankLosses = countries[battle.attackCountry].tankLosses + battle.attackTankLoss;
                    }
                    if (battle.defendCountry != null) {
                      countries[battle.defendCountry].infantryLosses = countries[battle.defendCountry].infantryLosses + battle.defendInfantryLoss;
                      countries[battle.defendCountry].spaceInfantryLosses = countries[battle.defendCountry].spaceInfantryLosses + battle.defendSpaceInfantryLoss;
                      countries[battle.defendCountry].spaceMarineLosses = countries[battle.defendCountry].spaceMarineLosses + battle.defendSpaceMarineLoss;
                      countries[battle.defendCountry].marineLosses = countries[battle.defendCountry].marineLosses + battle.defendMarineLoss;
                      countries[battle.defendCountry].tankLosses = countries[battle.defendCountry].tankLosses + battle.defendTankLoss;
                    }
                    cityBattles[battle.id] = null;
                  }
                }
              });
              
              
              
              
              // once per decade calculations will take place here:
              
              currentYear++;
              if ((currentYear % 10) == 0) {
                foodValue = foodValue * 1.1;
                mineralValue = mineralValue * 1.1;
                metalValue = metalValue * 1.1;
                oilValue = oilValue * 1.1;
                goldValue = goldValue * 1.15;
                nuclearValue = nuclearValue * 1.1;
              }
                
                // update the global timer
                
                document.querySelector(".current-year").textContent = currentYear;
                document.querySelector(".current-month").textContent = 'January';
                
                // END OF THE WORLD =========================================================================
                if (currentYear == 2250) {
                    clearInterval(worldClock);
                }
                // ==========================================================================================
            break;
        }
        tickTime = 1;
        tellTime(t1);
        // how long did all this take to process? This will tell us the time in milliseconds
    break; 
  }
}, 1200);