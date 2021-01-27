// every line on this page is about 1 tab too far, post this inside of Atom to get it properly formatted
        const runBuildingProcesses2 = function(country) {    
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
                          console.log(map2BuildingProcess[processID]);
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
                                "fleet": null,
                                "army": null,
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
                            // add this unit to the country's unit list and city's unit list
                            
                            unitDisplayed = document.getElementById("marines-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("marines-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 8000;
                                document.getElementById("marines-interact-amount").textContent = fullUnitAmount.toLocaleString();
                                // here we are determining if the player is actively watching this type of unit get built in this city
                                // then update the number of troops in real time
                              } 
                            }
                            // next we determine if more of this type of unit are set to be built
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 2;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              // reset all values in this build process to zero
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                              // if the unit has been created and their are no units left in our loop, then end production
                              // for this building by erasing it from the county's building Process list for this planet
                            }
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
                                "fleet": null,
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
                            
                            unitDisplayed = document.getElementById("carrier-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("carrier-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 1;
                                document.getElementById("carrier-interact-amount").textContent = fullUnitAmount.toLocaleString();
                              } 
                            }
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 9;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
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
                                "fleet": null,
                                "xpos": 0,
                                "ypos": 0,
                                "health": country.destroyerMaxHealth,
                                "morale": country.morale,
                                "carrying": 0,
                                "currentManpower": 8000,
                              } 
                            );
                            country.destroyers.push(destroyerIndex);
                            map2Cities[thisCity].destroyers.push(destroyerIndex);
                            map2Cities[thisCity].destroyersOwnerID.push(country.id);
                            destroyerIndex++;
                            
                            unitDisplayed = document.getElementById("destroyer-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("destroyer-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 4;
                                document.getElementById("destroyer-interact-amount").textContent = fullUnitAmount.toLocaleString();
                              } 
                            }
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 5;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
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
                                "fleet": null,
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
                            
                            unitDisplayed = document.getElementById("submarine-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("submarine-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 2;
                                document.getElementById("submarine-interact-amount").textContent = fullUnitAmount.toLocaleString();
                              } 
                            }
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 6;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
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
                                "fleet": null,
                                "army": null,
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
                            
                            unitDisplayed = document.getElementById("infantry-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("infantry-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 10000;
                                document.getElementById("infantry-interact-amount").textContent = fullUnitAmount.toLocaleString();
                              } 
                            }
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 2;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
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
                                "fleet": null,
                                "army": null,
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
                            
                            unitDisplayed = document.getElementById("tank-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("tank-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 100;
                                document.getElementById("tank-interact-amount").textContent = fullUnitAmount.toLocaleString();
                              } 
                            }
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 3;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
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
                            
                            unitDisplayed = document.getElementById("aircraft-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("aircraft-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 10;
                                document.getElementById("aircraft-interact-amount").textContent = fullUnitAmount.toLocaleString();
                              } 
                            }
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 4;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                  break;
                case 'ICBM':
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
                            ICBMUnits.push(
                              {
                                "id": ICBMIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "orbitalWeaponsPlatformID": null,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                              }
                            );
                            country.ICBMs.push(ICBMIndex);
                            map2Cities[thisCity].ICBMs.push(ICBMIndex);
                            ICBMIndex++;
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 6;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                  break;
                case 'space-infantry':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            spaceInfantryHealth = country.infantryMaxHealth * 0.8;
                            spaceInfantryUnits.push(
                              {
                                "id": spaceInfantryIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "fleet": null,
                                "army": null,
                                "spaceFleet": null,
                                "xpos": 0,
                                "ypos": 0,
                                "health": spaceInfantryHealth,
                                "morale": country.morale,
                                "currentManpower": 500,
                              }
                            );
                            country.spaceInfantry.push(spaceInfantryIndex);
                            map2Cities[thisCity].spaceInfantry.push(spaceInfantryIndex);
                            map2Cities[thisCity].spaceInfantryOwnerID.push(country.id);
                            spaceInfantryIndex++;
                            
                            unitDisplayed = document.getElementById("space-infantry-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("space-infantry-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 500;
                                document.getElementById("space-infantry-interact-amount").textContent = fullUnitAmount.toLocaleString();
                              } 
                            }
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 2;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                  break;
                case 'space-marines':
                    switch(map2BuildingProcess[processID].monthsLeft) {
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            thisCity = map2BuildingProcess[processID].city;
                            spaceMarineUnits.push(
                              {
                                "id": spaceMarineIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "fleet": null,
                                "army": null,
                                "spaceFleet": null,
                                "xpos": 0,
                                "ypos": 0,
                                "health": country.infantryMaxHealth,
                                "morale": country.morale,
                                "currentManpower": 300,
                              }
                            );
                            country.spaceMarines.push(spaceMarineIndex);
                            map2Cities[thisCity].spaceMarines.push(spaceMarineIndex);
                            map2Cities[thisCity].spaceMarinesOwnerID.push(country.id);
                            spaceMarineIndex++;
                            
                            unitDisplayed = document.getElementById("space-marine-interact-amount");
                            if (unitDisplayed) {
                              if (document.getElementById("city-index").textContent == map2BuildingProcess[processID].city) {
                                displayedUnitAmount = document.getElementById("space-marine-interact-amount").textContent;
                                displayedUnitAmount = displayedUnitAmount.match(/\d+/g);
                                fullUnitAmount = '';
                                displayedUnitAmount.forEach(function(numberString) {
                                  fullUnitAmount += numberString;
                                });
                                fullUnitAmount = Number(fullUnitAmount);
                                fullUnitAmount = fullUnitAmount + 300;
                                document.getElementById("space-marine-interact-amount").textContent = fullUnitAmount.toLocaleString();
                              } 
                            }
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 2;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                  break;
                case 'solar-power-station':
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
                            country.numberOfSolarSatellites2++;
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 4;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                break;
                case 'space-debris-extractor':
                  switch(map2BuildingProcess[processID].monthsLeft) {
                          case 3:
                            map2BuildingProcess[processID].monthsLeft = 2;
                          break;
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            country.spaceDebrisExtractors2++;
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 3;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                break;
                case 'comms-satellite':
                  switch(map2BuildingProcess[processID].monthsLeft) {
                          case 3:
                            map2BuildingProcess[processID].monthsLeft = 2;
                          break;
                          case 2:
                            map2BuildingProcess[processID].monthsLeft = 1;
                          break;
                          case 1:
                            country.numberOfComSatellites2++;
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 3;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                break;
                case 'task-ship':
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
                            taskShipUnits.push(
                              {
                                "id": taskShipIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "spaceFleet": null,
                                "xpos": 0,
                                "ypos": 0,
                                "health": country.taskShipMaxHealth,
                              }
                            );
                            country.taskShips.push(taskShipIndex);
                            taskShipIndex++;
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 5;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                break;
                case 'skyhook':
                  switch(map2BuildingProcess[processID].monthsLeft) {
                          case 10:
                            map2BuildingProcess[processID].monthsLeft = 9;
                          break;
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
                            skyHookHealth = country.taskShipMaxHealth * 1.5;
                            skyhookUnits.push(
                              {
                                "id": skyHookIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "isDead": false,
                                "xpos": 0,
                                "ypos": 0,
                                "health": skyHookHealth,
                              }
                            );
                            country.skyHooks.push(skyHookIndex);
                            country.numberOfSkyhooks++;
                            // we need to keep track of how many skyhooks a country has because if this number drops below zero
                            // it may effect how much maintenance is pad on orbital units
                            skyHookIndex++;
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 10;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                break;
                case 'weapons-platform':
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
                            weaponsPlatformHealth = country.taskShipMaxHealth * 1.5;
                            weaponsPlatformUnits.push(
                              {
                                "id": weaponsPlatformIndex,
                                "ownerID": country.id,
                                "planetID": 2,
                                "cityID": thisCity,
                                "isDead": false,
                                "spaceFleet": null,
                                "xpos": 0,
                                "ypos": 0,
                                "health": weaponsPlatformHealth,
                                "kinetic": false,
                                "missile": false,
                                "nuclear": false,
                                "laser": false,
                                "ICBMs": [],
                              }
                            );
                            country.orbitalWeaponsPlatforms.push(weaponsPlatformIndex);
                            weaponsPlatformIndex++;
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 4;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if ( country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                break;
                case 'weather-amp-satellite':
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
                            country.numberOfWeatherSatellites2++;
                            
                            if (map2BuildingProcess[processID].loop > 1) {
                              map2BuildingProcess[processID].loop--;
                              map2BuildingProcess[processID].monthsLeft = 5;
                            } else {
                              map2BuildingProcess[processID].outputMaterial = "";
                              map2BuildingProcess[processID].outputAmount = 1;
                              map2BuildingProcess[processID].maintenanceMaterial = [];
                              map2BuildingProcess[processID].maintenanceAmount = [];
                              for( i = 0; i < country.buildingProcess2.length; i++){ 
                                if (country.buildingProcess2[i] === processID) { 
                                  country.buildingProcess2.splice(i, 1);
                                }
                              }
                            }
                          break;
                    }
                break;
                   
                  }
                }
              }
            });
        }