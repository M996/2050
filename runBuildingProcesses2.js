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
                  // if we have 4 months left, reduce the months left to 3 inside both the building process, and the city
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
                  map2BuildingProcess[processID].targetCity = -1;
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
                  map2BuildingProcess[processID].targetCity = -1;
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
                  country.buildingEnergyExpense = country.buildingEnergyExpense + missileSiloFixedEnergy;
                  country.buildingCapitalExpense = country.buildingCapitalExpense + missileSiloFixedCapital;
                  // make sure the increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                  map2Cities[buildingCity].buildings[buildingArrayIndex] = "missile-silo";
                  
                  for( i = 0; i < country.buildingProcess2.length; i++){ 
                        if ( country.buildingProcess2[i] === processID) { 
                          country.buildingProcess2.splice(i, 1);
                        }
                      }
                      // if the building has been created and it is not meant to be running all the time
                      // (for instance this building produces units so it should only be active when in production mode)
                      // then end production for this building by erasing it from the country's building Process list for this planet
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
                  country.buildingEnergyExpense = country.buildingEnergyExpense + spaceElevatorFixedEnergy;
                  country.buildingCapitalExpense = country.buildingCapitalExpense + spaceElevatorFixedCapital;
                  // make sure to increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                  country.numberOfSpaceElevators = country.numberOfSpaceElevators + 1;
                  map2Cities[buildingCity].buildings[buildingArrayIndex] = "space-elevator";
                  
                  for( i = 0; i < country.buildingProcess2.length; i++){ 
                        if ( country.buildingProcess2[i] === processID) { 
                          country.buildingProcess2.splice(i, 1);
                        }
                      }
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
                  country.buildingCapitalExpense = country.buildingCapitalExpense + portFixedCapital;
                  // make sure to increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                  country.numberOfPorts = country.numberOfPorts + 1;
                  map2Cities[buildingCity].buildings[buildingArrayIndex] = "port";
                  
                  for( i = 0; i < country.buildingProcess2.length; i++){ 
                        if ( country.buildingProcess2[i] === processID) { 
                          country.buildingProcess2.splice(i, 1);
                        }
                      }
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
                  country.buildingEnergyExpense = country.buildingEnergyExpense + militaryBaseFixedEnergy;
                  country.buildingCapitalExpense = country.buildingCapitalExpense + militaryBaseFixedCapital;
                  // make sure the increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                  map2Cities[buildingCity].buildings[buildingArrayIndex] = "military-base";
                  
                  for( i = 0; i < country.buildingProcess2.length; i++){ 
                        if ( country.buildingProcess2[i] === processID) { 
                          country.buildingProcess2.splice(i, 1);
                        }
                      }
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
                  country.buildingEnergyExpense = country.buildingEnergyExpense + orbitalLaunchPadFixedEnergy;
                  country.buildingCapitalExpense = country.buildingCapitalExpense + orbitalLaunchPadFixedCapital;
                  // make sure the increase fixed expenses for this type of building, military bases and ports also have fixed expenses
                  map2Cities[buildingCity].buildings[buildingArrayIndex] = "orbital-launch-pad";
                  
                  for( i = 0; i < country.buildingProcess2.length; i++){ 
                        if ( country.buildingProcess2[i] === processID) { 
                          country.buildingProcess2.splice(i, 1);
                        }
                      }
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
                  country.buildingCapitalExpense = country.buildingCapitalExpense + researchFacilityFixedCapital;
                  // we don't need to set the 'hasResearchFacility' to true for this country, because once per year
                  // every city owned by this country will be searched to see if it has a research facility, so its
                  // existence is good enough
                  country.numberOfResearchFacilities = country.numberOfResearchFacilities + 1;
                  map2Cities[buildingCity].buildings[buildingArrayIndex] = "research-facility";
              break;
              }
            break;
          
          // Materials =============================================================================================
          
              case 'oil':
                country.oilStored = country.oilStored + map2BuildingProcess[processID].outputAmount;
                // If the amount of oil being produced by this building is greater than 1, then it must be an
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
                        "fleet": null,
                        "army": null,
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
                        "fleet": null,
                        "health": country.carrierMaxHealth,
                        "morale": country.morale,
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
                        "fleet": null,
                        "health": country.destroyerMaxHealth,
                        "morale": country.morale,
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
                        "fleet": null,
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
                        "fleet": null,
                        "army": null,
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
                        "fleet": null,
                        "army": null,
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
                        "fleet": null,
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
                    buildingArrayIndex = map2BuildingProcess[processID].buildingArrayIndex;
                    ICBMUnits.push(
                      {
                        "id": ICBMIndex,
                        "ownerID": country.id,
                        "planetID": 2,
                        "cityID": thisCity,
                        "orbitalWeaponsPlatformID": null,
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
                        "fleet": null,
                        "army": null,
                        "spaceFleet": null,
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
                        "fleet": null,
                        "army": null,
                        "spaceFleet": null,
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
                        "spaceFleet": null,
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
                        "spaceFleet": null,
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
        
        // ==== ouputMaterial is set to EMPTY STRING ===================================================================================    
        
        default:
            // default is usually going to be a weaponized building
                if (map2BuildingProcess[processID].damageAmount > 0) {
                        // the building is a weapon, treat it as such
                        if (map2BuildingProcess[processID].targetCity === undefined) {
                                // the weapon is targeting enemy armies
                                
                                if (country.enemies.length) {
                                    // if the length of the '.enemies' array is greater than zero, then this country is in an
                                    // active war and can search for enemy units to target
                                    
                                    firingCityID = map2BuildingProcess[processID].city;
                                    firingCityXPOS = (map2Cities[firingCityID].xpos - 6);
                                    firingCityYPOS = (map2Cities[firingCityID].ypos - 6);
                                    
                                    fireFlashesUnit++;
                                    window["fireFlashUnitCircle"+fireFlashesUnit] = new fabric.Circle({
                                        radius: 12,
                                        left: firingCityXPOS,
                                        top: firingCityYPOS,
                                        fill: 'red',
                                        opacity: 0.6,
                                        stroke: 'white',
                                        strokeWidth: 1,
                                        selectable: false,
                                    });
                                    
                                    
                                    mainCanvas2.add(window["fireFlashUnitCircle"+fireFlashesUnit]);
                                    window["fireFlashUnitCircle"+fireFlashesUnit].sendToBack();
                                    mainCanvas2.requestRenderAll();
                                    
                                    // add attacks against enemy armies here. We should iterate through a list of all enemies
                                    // and all of their land and sea units, then take wach unit's x axis and compare it to this
                                    // city's x axis to see if they are within range, if they are then compare their y axis,
                                    // if this is also within range then check to make sure that they are in our province or
                                    // a neighboring province (this may be optional and we may simply attack regardless of whether
                                    // we hyave line of sight to them? Not sure but we should probably only attack if we have line
                                    // of sight so they should probably be in a neighboring province, we may want to use a while loop
                                    // to iterate through land and sea bordering provinces for better performance). Once we have
                                    // determined an enemy unit is within range, then deal damage to that unit, fireflash from this city
                                    // (taken care of in the code above) and make a small animation play on the unit that was struck
                                    // code to determine if an enemy unit is within range can be found in ranged-weapon-functions.js
                                    
                                }
                                
                        } else if (map2BuildingProcess[processID].targetCity === -1) {
                                // the weapon is targeting enemy space fleets
                                
                                if (country.enemies.length) {
                                    firingCityID = map2BuildingProcess[processID].city;
                                    firingCityXPOS = (map2Cities[firingCityID].xpos - 11);
                                    firingCityYPOS = (map2Cities[firingCityID].ypos - 11);
                                    
                                    fireFlashesSpace++;
                                    window["fireFlashSpaceCircle"+fireFlashesSpace] = new fabric.Circle({
                                        radius: 16,
                                        left: firingCityXPOS,
                                        top: firingCityYPOS,
                                        fill: 'rgb(255,100,70)',
                                        opacity: 0.4,
                                        stroke: 'white',
                                        strokeWidth: 2,
                                        selectable: false,
                                    });
                                    
                                    mainCanvas2.add(window["fireFlashSpaceCircle"+fireFlashesSpace]);
                                    window["fireFlashSpaceCircle"+fireFlashesSpace].sendToBack();
                                    mainCanvas2.requestRenderAll();
                                    
                                    // similarly to the code above, we have already determined if this country is at war, and
                                    // already have a fireflash go off whenever an attack happens, now we just need to iterate through
                                    // all enemy space fleets and run a percentage chance of hitting them based on our tracking
                                    // and their evasion. This does not have to be specific to an orbital units position but
                                    // altitude might have an impact
                                    
                                }
                                
                        } else {
                                // the weapon is targeting enemy cities
                                targetCityID = map2BuildingProcess[processID].targetCity;
                                enemyCityOwner = map2Cities[targetCityID].ownerID;
                                
                                cityIsEnemy = country.enemies.includes(enemyCityOwner);
                                // includes() will look to see if the owner of this targeted city is in the 'enemies' list of the country object that has
                                // been passed into the runBuildProcess function, if they are in the 'enemies' array of the country, this means they are
                                // actively at war, so go ahead and attack this city
                                
                                if (cityIsEnemy) {
                                    
                                    // once we know we are attacking the city, then red-flash here to let the players visually know that an attack
                                    // came from this city
                                    firingCityID = map2BuildingProcess[processID].city;
                                    firingCityXPOS = (map2Cities[firingCityID].xpos - 9);
                                    firingCityYPOS = (map2Cities[firingCityID].ypos - 9);
                                    
                                    fireFlashesCity++;
                                    window["fireFlashCityCircle"+fireFlashesCity] = new fabric.Circle({
                                        radius: 15,
                                        left: firingCityXPOS,
                                        top: firingCityYPOS,
                                        fill: 'red',
                                        opacity: 0.4,
                                        stroke: 'black',
                                        strokeWidth: 1,
                                        selectable: false,
                                    });
                                    
                                    mainCanvas2.add(window["fireFlashCityCircle"+fireFlashesCity]);
                                    window["fireFlashCityCircle"+fireFlashesCity].sendToBack();
                                    mainCanvas2.requestRenderAll();
                                    // the window["fireFlashCityCircle"+fireFlashes] variable being used above is a way to add a number onto the end of a
                                    // javascript variable. The above process will increment fireFlashes by 1 every time a weapon is fired, this variable
                                    // is declared in common-function, then the new number is added onto the fireFlashCircle variable
                                    // examples: (fireFlashCircle1, fireFlashCircle2, fireFlashCircle3 and so on) these uniquely named variables are then
                                    // used to remove the circles spawned in tick 1 of the following month thus creating the flash effect when a weapon fires
                                    
                                    if (map2Cities[targetCityID].buildings.length > 0) {
                                            // there are still buildings in this city, so destroy them before attacking
                                            // the general population
                                            buildingIndex = -1;
                                            alreadyHit = false;
                                            // if we find a high priority building we will attack that first, otherwise
                                            // we keep track of which building was the last one in the list and attack that one instead
                                            map2Cities[targetCityID].buildings.forEach(function(buildingName) {
                                                    if (!alreadyHit) {
                                                            // if the building hasn't already selected a high priority target and dmaged it then keep looking
                                                            buildingIndex++;
                                                            switch(buildingName) {
                                                            case "missile-silo":
                                                                    alreadyHit = true;
                                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                                    buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                                    buildingImageParentDiv.style.display = "none";
                                                                                    map2Cities[targetCityID].ICBMs.forEach(function(ICBMID) {
                                                                                        ICBMUnits[ICBMID] = null;
                                                                                        // make all of the ICBMs in this city be dead so the country no longer
                                                                                        // has to pay maintenance and we can ignore these objects
                                                                                    });
                                                                                    map2Cities[targetCityID].ICBMs = [];
                                                                                    // no more ICBMs are left in this city
                                                                            }
                                                                    }
                                                            break;
                                                            case "railgun-3":
                                                                    alreadyHit = true;
                                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                                    buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                                    buildingImageParentDiv.style.display = "none";
                                                                            }
                                                                    }
                                                            break;
                                                            case "railgun-2":
                                                                    alreadyHit = true;
                                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                                    buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                                    buildingImageParentDiv.style.display = "none";
                                                                            }
                                                                    }
                                                            break;
                                                            case "railgun-1":
                                                                    alreadyHit = true;
                                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                                    buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                                    buildingImageParentDiv.style.display = "none";
                                                                            }
                                                                    }
                                                            break;
                                                            case "missile-system-3":
                                                                    alreadyHit = true;
                                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                                    buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                                    buildingImageParentDiv.style.display = "none";
                                                                            }
                                                                    }
                                                            break;
                                                            case "missile-system-2":
                                                                    alreadyHit = true;
                                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                                buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                                buildingImageParentDiv.style.display = "none";
                                                                            }
                                                                    }
                                                            break;
                                                            case "missile-system-1":
                                                                    alreadyHit = true;
                                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                                    buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                                    buildingImageParentDiv.style.display = "none";
                                                                            }
                                                                    }
                                                            break;
                                                            case "space-elevator":
                                                                    alreadyHit = true;
                                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                                    buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                                    buildingImageParentDiv.style.display = "none";
                                                                            }
                                                                    }
                                                            break;
                                                            }
                                                    }
                                                    
                                            });
                                            if (!alreadyHit) {
                                                    // if the building was unable to find any high priority targets then just attack
                                                    // whatever is the last building to have been built
                                                    weaponDamageAmount = map2BuildingProcess[processID].damageAmount * 0.1;
                                                    weaponDamageAmount = Math.round(weaponDamageAmount);
                                                    map2Cities[targetCityID].buildingHealth[buildingIndex] = map2Cities[targetCityID].buildingHealth[buildingIndex] - weaponDamageAmount;
                                                    if (map2Cities[targetCityID].buildingHealth[buildingIndex] < 1) {
                                                            enemyBuildingProcessID = map2Cities[targetCityID].buildingProcess[buildingIndex];
                                                            buildingDestroy2(targetCityID, buildingIndex, enemyBuildingProcessID, false);
                                                            if (document.querySelector("#city-index").textContent == targetCityID) {
                                                                    buildingImageParentDiv = document.querySelector("#building-select-" + buildingIndex + "").parentNode;
                                                                    buildingImageParentDiv.style.display = "none";
                                                                    // select the parent element of the image associated with the building we are targeting,
                                                                    // then make them both disappear as we have been targeting them for destruction
                                                            }
                                                    }
                                            }
                                    } else {
                                            // else if the number of buildings left in this city is less than or equal to zero
                                            if (map2Cities[targetCityID].isRig) {
                                            map2Cities[targetCityID].population = 1;
                                            } else {
                                              oldPopulation = map2Cities[targetCityID].population;
                                              map2Cities[targetCityID].population = (map2Cities[targetCityID].population * 0.999);
                                              map2Cities[targetCityID].population = Math.round(map2Cities[targetCityID].population);
                                              populationChange = oldPopulation - map2Cities[targetCityID].population;
                                              countries[enemyCityOwner].totalPopulation = countries[enemyCityOwner].totalPopulation - populationChange;
                                              // if there are no buildings left to destroy, then just start killing population with
                                              // the ranged weapons
                                              if (document.querySelector("#city-index").textContent == targetCityID) {
                                                    // if the city we are actively looking at right now is the one having its population reduced
                                                    // then use the same code used during famines to display the population reduction in real time
                                                    textPopString = document.querySelector('#city-population').textContent;
                                                    if (textPopString) {
                                                      textPopAmount = textPopString.match(/\d+/g);
                                                      fullNumber = '';
                                                      textPopAmount.forEach(function(numberString) {
                                                        fullNumber += numberString;
                                                      });
                                                      fullNumber = Number(fullNumber);
                                                      fullNumber = fullNumber * 0.999;
                                                      fullNumber = Math.round(fullNumber);
                                                      fullNumber = fullNumber.toLocaleString();
                                                      document.querySelector('#city-population').textContent = "Population: " + fullNumber;
                                                    }
                                              }
                                            }
                                    }
                                }
                        }
                }
        break;
           
          }
        }
      }
    });
}
// dang that's a lot of closing curly braces. This might get tricky when I come back to edit code in a few months...