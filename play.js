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
        countries.forEach(function(country) {
            // Reset all recorded costs from last month, we want to make sure that when the month rolls over the recorded expenses are recent
            country.capitalExpense = country.buildingCapitalExpense;
            country.energyExpense = country.buildingEnergyExpense;
            country.manpowerExpense = 0;
            country.mineralExpense = 0;
            country.metalExpense = 0;
            country.oilExpense = 0;
            country.preciousMetalExpense = 0;
            country.nuclearMaterialExpense = 0;
            country.antiMatterExpense = 0;
            country.exoticMatterExpense = 0;
            
            
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
              capitalChange = country.monthlyCapital;
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
            fixedEnergyChange = country.monthlyEnergy - country.buildingEnergyExpense;
            fixedEnergyAmount = country.energyStored + fixedEnergyChange;
            if (fixedEnergyAmount > country.energyStorageCapacity) {
                country.energyStored = country.energyStorageCapacity;
            } else {
                country.energyStored = fixedEnergyAmount;
            }
            // the purpose of this section is to add the base energy all nations get (+2) and subtract the fixed
            // energy cost of certain buildings, usually military bases. Most of the energy budget however should
            // be consumed by things building produce, and active military units, not buildings themselves
            
            
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
            foodAmount = country.foodStored + foodChange;
            if (foodAmount > country.foodStorageCapacity) {
                country.foodStored = country.foodStorageCapacity;
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
                if (map2BuildingProcess[processID].outputMaterial === '') {
                  if (map2BuildingProcess[processID].damageType === '') {
                    
                  } else {
                    // the building is a weapon, treat it as one
                  }
                } else {
                  // the building is constructing something, help it
                  maintenanceAmountIndex = 0;
                  transactPass = true;
                  map2BuildingProcess[processID].maintenanceMaterial.forEach(function(material) {
                    // this switch case will determine if we have enough of this resource stored to cover our costs, if we do not then it will
                    // change transactPass to false, and the building will not produce anything this month, but if we do then it will produce
                    switch(material) {
                      case 'capital':
                        if (country.capitalStored > map2BuildingProcess[processID].maintenanceAmount[maintenanceAmountIndex]) {
                          
                        } else {
                          transactPass = false;
                        }
                      break;
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
                        break;
                        case 'previous-metal':
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
                    
                  }
                }
              }
            });
            
            
            
            
            country.buildingProcess3.forEach(function(processID) {
              
            });
            
            
            
            
            country.buildingProcess4.forEach(function(processID) {
              
            });
            
            
            
            
            
            
            
            if (country.isPlayer) {
                totalCapitalChange = (country.monthlyCapital - country.capitalExpense);
                totalCapitalChange = totalCapitalChange.toFixed(2)
                totalCapitalChange = Number(totalCapitalChange);
                if (capitalChange < 0) {
                  document.querySelector("#country-capital-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + capitalChange.toLocaleString() + "</span>";
                } else {
                  document.querySelector("#country-capital-growth").innerHTML = "+" + capitalChange.toLocaleString();
                }
                document.querySelector("#country-capital-amount").textContent = country.capitalStored.toFixed(0);
                
                if (influenceChange < 0) {
                  document.querySelector("#country-influence-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + influenceChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-influence-growth").innerHTML = "+" + influenceChange.toFixed(2);
                }
                document.querySelector("#country-influence-amount").textContent = country.influenceStored;
                
                oilChange = (country.monthlyOil - country.oilExpense);
                if (oilChange < 0) {
                  document.querySelector("#country-oil-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + oilChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-oil-growth").innerHTML = "+" + oilChange.toFixed(2);
                }
                document.querySelector("#country-oil-amount").textContent = country.oilStored.toFixed(0);
                
                mineralChange = (country.monthlyMinerals - country.mineralExpense);
                mineralChange = Number(mineralChange);
                if (mineralChange < 0) {
                  document.querySelector("#country-mineral-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + mineralChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-mineral-growth").innerHTML = "+" + mineralChange.toFixed(2);
                }
                document.querySelector("#country-mineral-amount").textContent = country.mineralStored.toFixed(0);
                
                nuclearChange = (country.monthlyNuclearMaterial - country.nuclearMaterialExpense);
                nuclearChange = Number(nuclearChange);
                if (nuclearChange < 0) {
                  document.querySelector("#country-nuclear-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + nuclearChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-nuclear-growth").innerHTML = "+" + nuclearChange.toFixed(2);
                }
                document.querySelector("#country-nuclear-amount").textContent = country.nuclearMaterialStored.toFixed(1);
                
                exoticChange = (country.monthlyExoticMatter - country.exoticMatterExpense);
                exoticChange = Number(exoticChange);
                if (exoticChange < 0) {
                  document.querySelector("#country-exotic-matter-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + exoticChange.toFixed(3) + "</span>";
                } else {
                  document.querySelector("#country-exotic-matter-growth").innerHTML = "+" + exoticChange.toFixed(3);
                }
                document.querySelector("#country-exotic-matter-amount").textContent = country.exoticMatterStored.toFixed(1);
                
                energyChange = (country.monthlyEnergy - country.energyExpense);
                if (energyChange < 0) {
                  document.querySelector("#country-energy-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + energyChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-energy-growth").innerHTML = "+" + energyChange.toFixed(2);
                }
                document.querySelector("#country-energy-amount").textContent = country.energyStored.toFixed(0);
                
                if (foodChange < 0) {
                  document.querySelector("#country-food-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + foodChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-food-growth").innerHTML = "+" + foodChange.toFixed(2);
                }
                document.querySelector("#country-food-amount").textContent = country.foodStored.toFixed(0);
                
                manpowerChange = (manpowerChange - country.manpowerExpense);
                manpowerChange = Number(manpowerChange);
                manpowerChange.toFixed(0)
                manpowerStoredDisplay = country.manpowerStored.toFixed(0);
                manpowerStoredDisplay = Number(manpowerStoredDisplay);
                if (manpowerChange < 0) {
                  document.querySelector("#country-manpower-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + manpowerChange.toLocaleString() + "</span>";
                } else {
                  document.querySelector("#country-manpower-growth").innerHTML = "+" + manpowerChange.toLocaleString();
                }
                document.querySelector("#country-manpower-amount").textContent = manpowerStoredDisplay.toLocaleString();
                
                metalChange = (country.monthlyMetal - country.metalExpense);
                metalChange = Number(metalChange);
                if (metalChange < 0) {
                  document.querySelector("#country-metal-growth").innerHTML = "<span style='color:rgb(255,50,50);'>-" + metalChange.toFixed(2) + "</span>";
                } else {
                  document.querySelector("#country-metal-growth").innerHTML = "+" + metalChange.toFixed(2);
                }
                document.querySelector("#country-metal-amount").textContent = country.metalStored.toFixed(0);
                
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
    break; 
  }
}, 1200);