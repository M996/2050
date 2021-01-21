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
        tickTime++;
    break; 
    case 2:
        countries.forEach(function(country) {
            
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
                
                // now that we have applied interest to loans and figured out what the debt payment is,
                // we apply the debt payment to the expenses.
                capitalChange = country.monthlyCapital - (debtPayment + country.buildingCapitalExpense);
                capitalAmount = country.capitalStored + capitalChange;
                if (capitalAmount > country.capitalStorageCapacity) {
                    country.capitalStored = country.capitalStorageCapacity;
                } else if (capitalAmount < 0 && country.capitalStored < 0) {
                    country.debt = country.debt - capitalAmount;
                    country.capitalStored = 0;
                    if (country.debt > country.maxDebt) {
                      declareBankruptcy(country.id);
                    }
                } else {
                  country.capitalStored = capitalAmount;
                }
                
            } else {
              capitalChange = country.monthlyCapital - country.buildingCapitalExpense;
              capitalAmount = country.capitalStored + capitalChange;
              if (capitalAmount > country.capitalStorageCapacity) {
                country.capitalStored = country.capitalStorageCapacity;
              } else if (capitalAmount < 0 && country.capitalStored < 0) {
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
                    console.log("Food Before 1 AG: " + foodChange);
                    foodChange = foodChange + 1;
                    console.log("Food After 1 AG: " + foodChange);
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
            country.buildingProcess1.forEach(function(processID) {
            
            });
            
            
            
            
            country.buildingProcess2.forEach(function(processID) {
              if (map2BuildingProcess[processID].active) {
                // the building is constructing something, help it
                maintenanceAmountIndex = 0;
                transactPass = true;
                map2BuildingProcess[processID].maintenanceMaterial.forEach(function(material) {
                  // this switch case will determine if we have enough of this resource stored to cover our costs, if we do not then it will
                  // change transactPass to false, and the building will not produce anything this month, but if we do then it will produce
                  if (material == 'capital') {
                    // if we do not have enough capital to produce something, I literally don't care. Just force the country
                    // to take out a loan.
                  } else {
                    switch(material) {
                      case 'oil':
                        if (country.oilStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'manpower':
                        if (country.manpowerStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'minerals':
                        if (country.mineralStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'processed-minerals':
                        if (country.processedMineralsStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'metal':
                        if (country.metalStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'processed-metal':
                        if (country.processedMetalStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'energy':
                        if (country.energyStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'precious-metal':
                        if (country.preciousMetalStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'nuclear-material':
                        if (country.nuclearMaterialStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'super-high-tensile-material':
                        if (country.superHighTensileStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                      case 'agricultural-material':
                        if (country.agriculturalMaterialStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
                    }
                  }
                  maintenanceAmountIndex++;
                });
                if (transactPass) {
                  // if we have confirmed that this nation has enough resources to run this building process then run it and produce
                  // whatever it is this building is trying to produce
                  maintenanceAmountIndex = 0;
                  map2BuildingProcess[processID].maintenanceMaterial.forEach(function(material) {
                    switch(material) {
                      case 'capital':
                        country.capitalStored = country.capitalStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.capitalExpense = country.capitalExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        capitalChange = capitalChange - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'oil':
                        country.oilStored = country.oilStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.oilExpense = country.oilExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'manpower':
                        country.manpowerStored = country.manpowerStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.manpowerExpense = country.manpowerExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'minerals':
                        country.mineralStored = country.mineralStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.mineralExpense = country.mineralExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'processed-minerals':
                        country.processedMineralsStored = country.processedMineralsStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.processedMineralsExpense = country.processedMineralsExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'metal':
                        country.metalStored = country.metalStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.metalExpense = country.metalExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'processed-metal':
                        country.processedMetalStored = country.processedMetalStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.processedMetalExpense = country.processedMetalExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'energy':
                        country.energyStored = country.energyStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.energyExpense = country.energyExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        energyChange = energyChange - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'precious-metal':
                        country.preciousMetalStored = country.preciousMetalStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.preciousMetalExpense = country.preciousMetalExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'nuclear-material':
                        country.nuclearMaterialStored = country.nuclearMaterialStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.nuclearMaterialExpense = country.nuclearMaterialExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'super-high-tensile-material':
                        country.superHighTensileStored = country.superHighTensileStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.superHighTensileExpense = country.superHighTensileExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                      case 'agricultural-material':
                        country.agriculturalMaterialStored = country.agriculturalMaterialStored - map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                        country.agriculturalMaterialExpense = country.agriculturalMaterialExpense + map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex];
                      break;
                    }
                    maintenanceAmountIndex++;
                  });
                  
                  // make the process produce something here
                  switch(map2BuildingProcess[processID].outputMaterial) {
                    // Buildings ===========================================================================================
                    case 'ground-defense-laser-2':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                          // if we have 4 months left, reduce the months left to 3 inside botht eh building process, and the city
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 50;
                          map2BuildingProcess[processID].damageType = 'directed-energy';
                          map2BuildingProcess[processID].damageAmount = 1000;
                          map2BuildingProcess[processID].tracking = 0.35;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.5,0.6];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "ground-defense-laser-2";
                      break;
                      }
                    break;
                    case 'ground-defense-laser-1':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                          // if we have 4 months left, reduce the months left to 3 inside botht eh building process, and the city
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 20;
                          map2BuildingProcess[processID].damageType = 'directed-energy';
                          map2BuildingProcess[processID].damageAmount = 500;
                          map2BuildingProcess[processID].tracking = 0.25;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.4,0.4];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "ground-defense-laser-1";
                      break;
                      }
                    break;
                  case 'nuclear-power-plant-3':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 220;
                          map2BuildingProcess[processID].outputMaterial = 'energy';
                          map2BuildingProcess[processID].outputAmount = 20;
                          map2BuildingProcess[processID].maintenanceMaterial = ['nuclear-material','capital'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.8,0.5];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "nuclear-power-plant-3";
                      break;
                      }
                    break;
                  case 'nuclear-power-plant-2':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 185;
                          map2BuildingProcess[processID].outputMaterial = 'energy';
                          map2BuildingProcess[processID].outputAmount = 16;
                          map2BuildingProcess[processID].maintenanceMaterial = ['nuclear-material','capital'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.9,0.6];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "nuclear-power-plant-2";
                      break;
                      }
                    break;
                  case 'nuclear-power-plant-1':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 150;
                          map2BuildingProcess[processID].outputMaterial = 'energy';
                          map2BuildingProcess[processID].outputAmount = 12;
                          map2BuildingProcess[processID].maintenanceMaterial = ['nuclear-material','capital'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.9,0.8];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "nuclear-power-plant-1";
                      break;
                      }
                    break;
                  case 'missile-silo':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 9:
                          map2BuildingProcess[processID].monthsLeft = 8;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-8";
                        break;
                        case 8:
                          map2BuildingProcess[processID].monthsLeft = 7;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-7";
                        break;
                        case 7:
                          map2BuildingProcess[processID].monthsLeft = 6;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-6";
                        break;
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 150;
                          map2BuildingProcess[processID].maintenanceMaterial = [];
                          map2BuildingProcess[processID].maintenanceAmount = [];
                          country.buildingEnergyExpense = country.buildingEnergyExpense + 0.75;
                          country.buildingCapitalExpense = country.buildingCapitalExpense + 1.5;
                          // make sure the increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "missile-silo";
                      break;
                      }
                    break;
                    case 'ocean-rig':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 80;
                          
                          provinceResource = map2Provinces[map2Cities[buildingCity].provinceID].resource;
                          if (provinceResource == "<img src='public/images/oilicon.png' class='tile-res-icn'>") {
                            oilAmount = map2Provinces[map2Cities[buildingCity].provinceID].resourceAmount;
                          }
                          map2BuildingProcess[processID].outputMaterial = 'oil';
                          map2BuildingProcess[processID].outputAmount = oilAmount;
                          
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.8];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "ocean-rig";
                      break;
                      }
                    break;
                  case 'space-elevator':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 12:
                          map2BuildingProcess[processID].monthsLeft = 11;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-11";
                        break;
                        case 11:
                          map2BuildingProcess[processID].monthsLeft = 10;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-10";
                        break;
                        case 10:
                          map2BuildingProcess[processID].monthsLeft = 9;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-9";
                        break;
                        case 9:
                          map2BuildingProcess[processID].monthsLeft = 8;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-8";
                        break;
                        case 8:
                          map2BuildingProcess[processID].monthsLeft = 7;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-7";
                        break;
                        case 7:
                          map2BuildingProcess[processID].monthsLeft = 6;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-6";
                        break;
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 20;
                          map2BuildingProcess[processID].maintenanceMaterial = [];
                          map2BuildingProcess[processID].maintenanceAmount = [];
                          country.buildingEnergyExpense = country.buildingEnergyExpense + 1.2;
                          country.buildingCapitalExpense = country.buildingCapitalExpense + 2.2;
                          // make sure the increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                          countries[currentOwner].numberOfSpaceElevators = countries[currentOwner].numberOfSpaceElevators + 1;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "space-elevator";
                      break;
                      }
                    break;
                    case 'port':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 150;
                          map2BuildingProcess[processID].maintenanceMaterial = [];
                          map2BuildingProcess[processID].maintenanceAmount = [];
                          country.buildingCapitalExpense = country.buildingCapitalExpense + 0.2;
                          // make sure the increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                          countries[currentOwner].numberOfPorts = countries[currentOwner].numberOfPorts + 1;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "port";
                      break;
                      }
                    break;
                  case 'military-base':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 150;
                          map2BuildingProcess[processID].maintenanceMaterial = [];
                          map2BuildingProcess[processID].maintenanceAmount = [];
                          country.buildingEnergyExpense = country.buildingEnergyExpense + 0.25;
                          country.buildingCapitalExpense = country.buildingCapitalExpense + 1;
                          // make sure the increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "military-base";
                      break;
                      }
                    break;
                  case 'power-plant-2':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 120;
                          map2BuildingProcess[processID].outputMaterial = 'energy';
                          map2BuildingProcess[processID].outputAmount = 8;
                          map2BuildingProcess[processID].maintenanceMaterial = ['oil','capital'];
                          map2BuildingProcess[processID].maintenanceAmount = [1,0.1];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "power-plant-2";
                      break;
                      }
                    break;
                  case 'power-plant-1':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 120;
                          map2BuildingProcess[processID].outputMaterial = 'energy';
                          map2BuildingProcess[processID].outputAmount = 5;
                          map2BuildingProcess[processID].maintenanceMaterial = ['oil','capital'];
                          map2BuildingProcess[processID].maintenanceAmount = [1,0.1];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "power-plant-1";
                      break;
                      }
                    break;
                  case 'metal-processing-plant-2':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 180;
                          map2BuildingProcess[processID].outputMaterial = 'processed-metal';
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','metal','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.4,1.4,0.4];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "metal-processing-plant-2";
                      break;
                      }
                    break;
                  case 'metal-processing-plant-1':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 150;
                          map2BuildingProcess[processID].outputMaterial = 'processed-metal';
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','metal','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.5,1.5,0.4];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "metal-processing-plant-1";
                      break;
                      }
                    break;
                  case 'orbital-launch-pad':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 40;
                          map2BuildingProcess[processID].maintenanceMaterial = [];
                          map2BuildingProcess[processID].maintenanceAmount = [];
                          country.buildingEnergyExpense = country.buildingEnergyExpense + 1.2;
                          country.buildingCapitalExpense = country.buildingCapitalExpense + 2.2;
                          // make sure the increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "orbital-launch-pad";
                      break;
                      }
                    break;
                  case 'mineral-processing-plant-3':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 140;
                          map2BuildingProcess[processID].outputMaterial = 'processed-minerals';
                          map2BuildingProcess[processID].outputAmount = 0.7;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','minerals','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.4,1.4,0.2];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "mineral-processing-plant-3";
                      break;
                      }
                    break;
                  case 'mineral-processing-plant-2':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 120;
                          map2BuildingProcess[processID].outputMaterial = 'processed-minerals';
                          map2BuildingProcess[processID].outputAmount = 0.6;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','minerals','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.5,1.5,0.2];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "mineral-processing-plant-2";
                      break;
                      }
                    break;
                  case 'mineral-processing-plant-1':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 140;
                          map2BuildingProcess[processID].outputMaterial = 'processed-minerals';
                          map2BuildingProcess[processID].outputAmount = 0.5;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','minerals','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.6,1.4,0.2];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "mineral-processing-plant-1";
                      break;
                      }
                    break;
                    case 'railgun-3':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 8:
                          map2BuildingProcess[processID].monthsLeft = 7;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-7";
                        break;
                        case 7:
                          map2BuildingProcess[processID].monthsLeft = 6;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-6";
                        break;
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 10;
                          map2BuildingProcess[processID].damageType = 'kinetic';
                          map2BuildingProcess[processID].damageAmount = 160;
                          map2BuildingProcess[processID].range = 260;
                          map2BuildingProcess[processID].tracking = 0.1;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.6,0.85];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "railgun-3";
                      break;
                      }
                    break;
                  case 'railgun-2':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 8:
                          map2BuildingProcess[processID].monthsLeft = 7;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-7";
                        break;
                        case 7:
                          map2BuildingProcess[processID].monthsLeft = 6;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-6";
                        break;
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 10;
                          map2BuildingProcess[processID].damageType = 'kinetic';
                          map2BuildingProcess[processID].damageAmount = 130;
                          map2BuildingProcess[processID].range = 220;
                          map2BuildingProcess[processID].tracking = 0.06;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.75,0.8];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "railgun-2";
                      break;
                      }
                    break;
                  case 'railgun-1':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 8:
                          map2BuildingProcess[processID].monthsLeft = 7;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-7";
                        break;
                        case 7:
                          map2BuildingProcess[processID].monthsLeft = 6;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-6";
                        break;
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 10;
                          map2BuildingProcess[processID].damageType = 'kinetic';
                          map2BuildingProcess[processID].damageAmount = 100;
                          map2BuildingProcess[processID].range = 180;
                          map2BuildingProcess[processID].tracking = 0.04;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [0.9,0.85];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "railgun-1";
                      break;
                      }
                    break;
                  case 'missile-system-3':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 25;
                          map2BuildingProcess[processID].damageType = 'explosive';
                          map2BuildingProcess[processID].damageAmount = 160;
                          map2BuildingProcess[processID].range = 180;
                          map2BuildingProcess[processID].tracking = 0.1;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [1,0.2];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "missile-system-3";
                      break;
                      }
                    break;
                  case 'missile-system-2':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 25;
                          map2BuildingProcess[processID].damageType = 'explosive';
                          map2BuildingProcess[processID].damageAmount = 140;
                          map2BuildingProcess[processID].range = 150;
                          map2BuildingProcess[processID].tracking = 0.08;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [1,0.25];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "missile-system-2";
                      break;
                      }
                    break;
                  case 'missile-system-1':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 25;
                          map2BuildingProcess[processID].damageType = 'explosive';
                          map2BuildingProcess[processID].damageAmount = 120;
                          map2BuildingProcess[processID].range = 120;
                          map2BuildingProcess[processID].tracking = 0.04;
                          map2BuildingProcess[processID].maintenanceMaterial = ['capital','energy'];
                          map2BuildingProcess[processID].maintenanceAmount = [1,0.25];
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "missile-system-1";
                      break;
                      }
                    break;
                  case 'research-facility':
                      switch(map2BuildingProcess[processID].monthsLeft) {
                        case 9:
                          map2BuildingProcess[processID].monthsLeft = 8;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-8";
                        break;
                        case 8:
                          map2BuildingProcess[processID].monthsLeft = 7;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-7";
                        break;
                        case 7:
                          map2BuildingProcess[processID].monthsLeft = 6;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-6";
                        break;
                        case 6:
                          map2BuildingProcess[processID].monthsLeft = 5;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-5";
                        break;
                        case 5:
                          map2BuildingProcess[processID].monthsLeft = 4;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-4";
                        break;
                        case 4:
                          map2BuildingProcess[processID].monthsLeft = 3;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-3";
                        break;
                        case 3:
                          map2BuildingProcess[processID].monthsLeft = 2;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-2";
                        break;
                        case 2:
                          map2BuildingProcess[processID].monthsLeft = 1;
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "built-in-1";
                        break;
                        case 1:
                          buildingCity = map2BuildingProcess[processID].city;
                          buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                          map2BuildingProcess[processID].outputMaterial = '';
                          map2Cities[buildingCity].buildingHealth[buildingArrayIndex] = 40;
                          map2BuildingProcess[processID].maintenanceMaterial = [];
                          map2BuildingProcess[processID].maintenanceAmount = [];
                          country.buildingCapitalExpense = country.buildingCapitalExpense + 0.85;
                          // we don't need to set the 'hasResearchFacility' to true for this country, because once per year
                          // every city owned by this country will be searched to see if it has a research facility, so its
                          // existence is good enough
                          countries[currentOwner].numberOfResearchFacilities = countries[currentOwner].numberOfResearchFacilities + 1;
                          map2Cities[buildingCity].buildings[buildingArrayIndex] = "research-facility";
                      break;
                      }
                    break;
                  
                  // Materials =============================================================================================
                  
                      case 'oil':
                        country.oilStored = country.oilStored + map2BuildingProcess[processID].outputAmount;
                        // If the amount of oil being produced by this building is gerater than 1, then it must be an
                        // oil rig, if this is the case, record the resource under oil rig, if the amount being produced
                        // is less than or equal to 1, then attribute the oil to synthetic Oil production. However,
                        // if the country producing the synthetic oil is Brazil then add +1 to all synthetic oil production.
                        if (map2BuildingProcess[processID].outputAmount > 1) {
                          country.oceanRigOil = country.oceanRigOil + map2BuildingProcess[processID].outputAmount;
                        } else {
                          if (country.name != 'Brazil') {
                            country.syntheticOilProduced = country.syntheticOilProduced + map2BuildingProcess[processID].outputAmount;
                          } else {
                            country.syntheticOilProduced = country.syntheticOilProduced + (map2BuildingProcess[processID].outputAmount + 1);
                            country.oilStored++;
                          }
                        }
                        if (country.oilStored > country.oilStorageCapacity) {
                          country.oilStored = country.oilStorageCapacity;
                        }
                      break;
                      case 'processed-minerals':
                        country.processedMineralsStored = country.processedMineralsStored + map2BuildingProcess[processID].outputAmount;
                        country.monthlyProcessedMinerals = country.monthlyProcessedMinerals + map2BuildingProcess[processID].outputAmount;
                        if (country.processedMineralsStored > country.processedMineralsStorageCapacity) {
                          country.processedMineralsStored = country.processedMineralsStorageCapacity;
                        }
                      break;
                      case 'processed-metal':
                        country.processedMetalStored++;
                        country.monthlyProcessedMetal++;
                        if (country.processedMetalStored > country.processedMetalStorageCapacity) {
                          country.processedMetalStored = country.processedMetalStorageCapacity;
                        }
                      break;
                      case 'energy':
                        country.energyStored = country.energyStored + map2BuildingProcess[processID].outputAmount;
                        country.monthlyEnergy = country.monthlyEnergy + map2BuildingProcess[processID].outputAmount;
                        energyChange = energyChange + map2BuildingProcess[processID].outputAmount;
                        if (country.energyStored > country.energyStorageCapacity) {
                          country.energyStored = country.energyStorageCapacity;
                        }
                      break;
                      case 'super-high-tensile-material':
                        switch(map2BuildingProcess[processID].monthsLeft) {
                          case 3:
                            map2BuildingProcess[processID].monthsLeft = 2;
                          break;
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            country.superHighTensileStored = country.superHighTensileStored + map2BuildingProcess[processID].outputAmount;
                            country.monthlySuperHighTensile = country.monthlySuperHighTensile + map2BuildingProcess[processID].outputAmount;
                            if (country.superHighTensileStored > country.superHighTensileStorageCapacity) {
                              country.superHighTensileStored = country.superHighTensileStorageCapacity;
                            }
                            map2BuildingProcess[processID].monthsLeft = 3;
                          break;
                        }
                      break;
                      case 'agricultural-material':
                        country.agriculturalMaterialStored++;
                        country.monthlyAgriculturalMaterial++;
                        if (country.agriculturalMaterialStored > country.superHighTensileStorageCapacity) {
                          country.agriculturalMaterialStored = country.agriculturalMaterialStorageCapacity;
                        }
                      break;
                    
                   // Units =================================================================================================
                   case 'marine':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            marineHealth = country.infantryMaxHealth * 1.1;
                            marineUnits.push(
                              {
                                "id": marineIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                                "health": marineHealth,
                                "morale": country.morale,
                                "currentManpower": 8000,
                              }
                            );
                            country.marines.push(marineIndex);
                            map2Cities[thisCity].marines.push(marineIndex);
                            map2Cities[thisCity].marinesOwnerID.push(country.id);
                            marineIndex++;
                          break;
                    }
                  break;
                case 'carrier':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                      case 9:
                            map2BuildingProcess[processID].monthsLeft = 8;
                          break;
                        case 8:
                            map2BuildingProcess[processID].monthsLeft = 7;
                          break;
                        case 7:
                            map2BuildingProcess[processID].monthsLeft = 6;
                          break;
                        case 6:
                            map2BuildingProcess[processID].monthsLeft = 5;
                          break;
                        case 5:
                            map2BuildingProcess[processID].monthsLeft = 4;
                          break;
                        case 4:
                            map2BuildingProcess[processID].monthsLeft = 3;
                          break;
                        case 3:
                            map2BuildingProcess[processID].monthsLeft = 2;
                          break;
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            carrierUnits.push(
                              {
                                "id": carrierIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                                "health": country.carrierMaxHealth,
                                "morale": country.morale,
                                "carrying": 0,
                                "aircraftCarrying": 0,
                                "currentManpower": 12000,
                              } 
                            );
                            country.aircraftCarriers.push(carrierIndex);
                            map2Cities[thisCity].aircraftCarriers.push(carrierIndex);
                            map2Cities[thisCity].aircraftCarriersOwnerID.push(country.id);
                            carrierIndex++;
                          break;
                    }
                  break;
                case 'destroyer':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                        case 5:
                            map2BuildingProcess[processID].monthsLeft = 4;
                          break;
                        case 4:
                            map2BuildingProcess[processID].monthsLeft = 3;
                          break;
                        case 3:
                            map2BuildingProcess[processID].monthsLeft = 2;
                          break;
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            destroyerUnits.push(
                              {
                                "id": destroyerIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                                "health": country.destroyerMaxHealth,
                                "morale": country.morale,
                                "carrying": 0,
                                "currentManpower": 6000,
                              } 
                            );
                            country.destroyers.push(destroyerIndex);
                            map2Cities[thisCity].destroyers.push(destroyerIndex);
                            map2Cities[thisCity].destroyersOwnerID.push(country.id);
                            destroyerIndex++;
                          break;
                    }
                  break;
                case 'submarine':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                        case 6:
                            map2BuildingProcess[processID].monthsLeft = 5;
                          break;
                        case 5:
                            map2BuildingProcess[processID].monthsLeft = 4;
                          break;
                        case 4:
                            map2BuildingProcess[processID].monthsLeft = 3;
                          break;
                        case 3:
                            map2BuildingProcess[processID].monthsLeft = 2;
                          break;
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            submarineUnits.push(
                              {
                                "id": submarineIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                                "health": 60,
                                "morale": country.morale,
                                "currentManpower": 3000,
                              }
                            );
                            country.submarines.push(submarineIndex);
                            map2Cities[thisCity].submarines.push(submarineIndex);
                            map2Cities[thisCity].submarinesOwnerID.push(country.id);
                            submarineIndex++;
                          break;
                    }
                  break;
                case 'infantry':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            infantryUnits.push(
                              {
                                "id": infantryIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                                "health": country.infantryMaxHealth,
                                "morale": country.morale,
                                "currentManpower": 10000,
                              }
                            );
                            country.infantry.push(infantryIndex);
                            map2Cities[thisCity].infantry.push(infantryIndex);
                            map2Cities[thisCity].infantryOwnerID.push(country.id);
                            infantryIndex++;
                          break;
                    }
                  break;
                case 'tank':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                          case 3:
                            map2BuildingProcess[processID].monthsLeft = 2;
                          break;
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            tankUnits.push(
                              {
                                "id": tankIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                                "health": country.tankMaxHealth,
                                "morale": country.morale,
                                "currentManpower": 4000,
                              }
                            );
                            country.tanks.push(tankIndex);
                            map2Cities[thisCity].tanks.push(tankIndex);
                            map2Cities[thisCity].tanksOwnerID.push(country.id);
                            tankIndex++;
                          break;
                    }
                  break;
                case 'aircraft':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                          case 4:
                            map2BuildingProcess[processID].monthsLeft = 3;
                          break;
                          case 3:
                            map2BuildingProcess[processID].monthsLeft = 2;
                          break;
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            aircraftUnits.push(
                              {
                                "id": aircraftIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "carrierID": null,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                              }
                            );
                            country.aircraft.push(aircraftIndex);
                            map2Cities[thisCity].planes.push(aircraftIndex);
                            map2Cities[thisCity].planesOwnerID.push(country.id);
                            aircraftIndex++;
                          break;
                    }
                  break;
                case 'ICBM':
                    
                  break;
                case 'space-infantry':
                    
                  break;
                case 'space-marines':
                    
                  break;
                case 'solar-power-station':
                  // add 1 to numberOfSolarSatellite
                break;
                case 'space-debris-extractor':
                  // add 1 to the space debris extractor count for this country
                break;
                case 'comms-satellite':
                  // add 1 to numberOfComSatellites
                break;
                case 'task-ship':
                  
                break;
                case 'skyhook':
                  // add 1 to numberOfSkyhooks
                break;
                case 'weapons-platform':
                  
                break;
                case 'weather-amp-satellite':
                  // add 1 to numberOfWeatherSatellites
                break;
                   
                  }
                }
              }
            });
            
            
            
            
            country.buildingProcess3.forEach(function(processID) {
              
            });
            
            
            
            
            country.buildingProcess4.forEach(function(processID) {
              
            });
            
            
            
            
            
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
              if (buildingElement3) {
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
              // GDPPerCapitaGrowth
              // PopulationGrowth
              // ideology spread?
              // Ethnic group spread?
              // points?
              
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
              });
                currentYear = Number(document.querySelector(".current-year").textContent);
                currentYear++;
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