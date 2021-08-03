const openBuildWindow2 = function(buildingArrayIndex, buildingModel, buildingImg, buildingOwner, buildingProcess, buildingHealth) {
  
  buildButtons = `<div id="construct-res-tooltip">
    </div>`;
    // initialize an empty string for the build buttons, what build buttons are displayed to the player is determined by unlocked technologies
  buildLoopButtons = false;
  // build loop buttons are the buttons that allow you to queue up multiple units in a building, if this variable is set to true then
  // display the build loop buttons to the player
  cancelProductionButton = ``;
  // the cancel production button is a button that stops the building from constructing whatever it is currently building
  // however it does not turn the building off or disable it in any way
  nuclearStorageDiv = false;
  // The nuclear storage div only appears if the building is a Missile Silo, and displays stored nuclear ICBMs
  switch(buildingModel) {
    // this switch case is used to deermine the name and picture of a building based on its model, as well as all production options
    // associated with that building ie. what you can build
    case 'construction':
      buildingName = 'Under Construction';
      buildButtons += ``;
    break;
    case 'port':
      buildLoopButtons = true;
      cancelProductionButton = `<button class="cancel-production-btn" onclick="cancelProduction2(` + buildingProcess + `, ` + buildingOwner + `)">Cancel</button>`;
      buildingName = 'Port';
      buildingImg = 'public/images/portBuilding.png';
      if (countries[buildingOwner].hasMarines) {
         buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'marine',1,['processed-metal','manpower','capital','energy'],[0.4,5500,0.8,0.4],2,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.4,5500,0.8,0.4],2,0)">Marine</button>
                        </div>`;
      }
      if (countries[buildingOwner].hasCarriers) {
        buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'carrier',1,['processed-metal','manpower','capital','energy'],[2.2,6000,2.4,1],9,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[2.2,6000,2.4,1],9,0)">Aircraft Carrier</button>
                      </div>`;
      } 
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'destroyer',1,['processed-metal','manpower','capital','energy'],[1.8,4000,1.6,0.75],5,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1.8,4000,1.6,0.75],5,0)">Destroyer</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'submarine',1,['processed-metal','manpower','capital','energy'],[1.2,2000,1.8,0.8],6,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1.2,2000,1.8,0.8],6,0)">Submarine</button>
                        </div>`;
    break;
    case 'military-base':
      buildLoopButtons = true;
      cancelProductionButton = `<button class="cancel-production-btn" onclick="cancelProduction2(` + buildingProcess + `, ` + buildingOwner + `)">Cancel</button>`;
      buildingName = 'Military Base';
      buildingImg = 'public/images/barracks.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'infantry',1,['processed-metal','manpower','capital','energy'],[0.4,6000,0.6,0.3],2,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.4,6000,0.6,0.3],2,0)">Infantry</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'tank',1,['processed-metal','manpower','capital','energy'],[1.4,3000,1.5,0.6],3,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1.4,3000,1.5,0.6],3,0)">Tank Division</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'aircraft',1,['processed-metal','processed-minerals','manpower','capital','energy'],[0.8,0.1,500,1.5,1.2],4,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','processed-minerals','manpower','capital','energy'],[0.8,0.1,500,1.5,1.2],4,0)">Aircraft</button>
                        </div>`;
    break;
    case 'power-plant-1':
      buildingName = 'Power Plant';
      buildingImg = 'public/images/power-plant.png';
      buildButtons += ``;
    break;
    case 'power-plant-2':
      buildingName = 'Power Plant';
      buildingImg = 'public/images/power-plant.png';
      buildButtons += ``;
    break;
    case 'metal-processing-plant-1':
      // for metal processing plants, the build process is created on creation of the building, and the building can only be activated or deactivated
      // for other buildings, activating and deactivating may not be an option, except with a virus
      buildingName = 'Metal Plant';
      buildingImg = 'public/images/metal-factory.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>`;
    break;
    case 'metal-processing-plant-2':
      buildingName = 'Metal Plant';
      buildingImg = 'public/images/metal-factory.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>`;
    break;
    case 'mineral-processing-plant-1':
      buildingName = 'Mineral Plant';
      buildingImg = 'public/images/mineral-factory.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'processed-minerals',0.5,['capital','minerals','energy'],[0.6,1.5,0.2],1,1)"
                        onmouseover="buildingCostToolTip(['capital','minerals','energy'],[0.6,1.5,0.2],1,0)">Processed Minerals</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'super-high-tensile-material',0.5,['processed-minerals','energy'],[2,1],3,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[2,1],3,0)">Super High Tensile Material</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'agricultural-material',1,['processed-minerals','energy'],[1,1],1,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[1,1],1,0)">Agricultural Material</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'oil',0.5,['processed-minerals','energy'],[0.25,0.8],1,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[0.25,0.8],1,0)">Synthetic Oil</button>
                      </div>`;
    break;
    case 'mineral-processing-plant-2':
      buildingName = 'Mineral Plant';
      buildingImg = 'public/images/mineral-factory.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'processed-minerals',0.6,['capital','minerals','energy'],[0.5,1.5,0.2],1,1)"
                        onmouseover="buildingCostToolTip(['capital','minerals','energy'],[0.5,1.5,0.2],1,0)">Processed Minerals</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'super-high-tensile-material',0.5,['processed-minerals','energy'],[2,1],3,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[2,1],3,0)">Super High Tensile Material</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'agricultural-material',1,['processed-minerals','energy'],[1,1],1,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[1,1],1,0)">Agricultural Material</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'oil',0.5,['processed-minerals','energy'],[0.25,0.8],1,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[0.25,0.8],1,0)">Synthetic Oil</button>
                      </div>`;
    break;
  case 'mineral-processing-plant-3':
      buildingName = 'Mineral Plant';
      buildingImg = 'public/images/mineral-factory.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'processed-minerals',0.7,['capital','minerals','energy'],[0.4,1.4,0.2],1,1)"
                        onmouseover="buildingCostToolTip(['capital','minerals','energy'],[0.4,1.4,0.2],1,0)">Processed Minerals</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'super-high-tensile-material',0.5,['processed-minerals','energy'],[2,1],3,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[2,1],3,0)">Super High Tensile Material</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'agricultural-material',1,['processed-minerals','energy'],[1,1],1,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[1,1],1,0)">Agricultural Material</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'oil',0.5,['processed-minerals','energy'],[0.25,0.6],1,1)"
                        onmouseover="buildingCostToolTip(['processed-minerals','energy'],[0.25,0.6],1,0)">Synthetic Oil</button>
                      </div>`;
    break;
    case 'nuclear-power-plant-1':
      buildingName = 'Nuclear Power Plant';
      buildingImg = 'public/images/nuclear-power-plant.png';
      buildButtons += ``;
    break;
  case 'nuclear-power-plant-2':
      buildingName = 'Nuclear Power Plant';
      buildingImg = 'public/images/nuclear-power-plant.png';
      buildButtons += ``;
    break;
  case 'nuclear-power-plant-3':
      buildingName = 'Nuclear Power Plant';
      buildingImg = 'public/images/nuclear-power-plant.png';
      buildButtons += ``;
    break;
  case 'railgun-1':
      buildingName = 'Railgun';
      buildingImg = 'public/images/railgun.png';
      buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetCities2(` + buildingProcess + `)">Target Cities</button>
                          <button class="build-window-btn" onclick="targetEnemyArmies2(` + buildingProcess + `)">Target Armies</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetEnemySpace2(` + buildingProcess + `)">Target Space</button>
                        </div>`;
    break;
  case 'railgun-2':
      buildingName = 'Railgun';
      buildingImg = 'public/images/railgun.png';
      buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetCities2(` + buildingProcess + `)">Target Cities</button>
                          <button class="build-window-btn" onclick="targetEnemyArmies2(` + buildingProcess + `)">Target Armies</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetEnemySpace2(` + buildingProcess + `)">Target Space</button>
                        </div>`;
    break;
  case 'railgun-3':
      buildingName = 'Railgun';
      buildingImg = 'public/images/railgun.png';
      buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetCities2(` + buildingProcess + `)">Target Cities</button>
                          <button class="build-window-btn" onclick="targetEnemyArmies2(` + buildingProcess + `)">Target Armies</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetEnemySpace2(` + buildingProcess + `)">Target Space</button>
                        </div>`;
    break;
  case 'missile-system-1':
      buildingName = 'Missile System';
      buildingImg = 'public/images/missiles.png';
      buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetCities2(` + buildingProcess + `)">Target Cities</button>
                          <button class="build-window-btn" onclick="targetEnemyArmies2(` + buildingProcess + `)">Target Armies</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetEnemySpace2(` + buildingProcess + `)">Target Space</button>
                        </div>`;
    break;
  case 'missile-system-2':
      buildingName = 'Missile System';
      buildingImg = 'public/images/missiles.png';
      buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetCities2(` + buildingProcess + `)">Target Cities</button>
                          <button class="build-window-btn" onclick="targetEnemyArmies2(` + buildingProcess + `)">Target Armies</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetEnemySpace2(` + buildingProcess + `)">Target Space</button>
                        </div>`;
    break;
  case 'missile-system-3':
      buildingName = 'Missile System';
      buildingImg = 'public/images/missiles.png';
      buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetCities2(` + buildingProcess + `)">Target Cities</button>
                          <button class="build-window-btn" onclick="targetEnemyArmies2(` + buildingProcess + `)">Target Armies</button>
                        </div>
                        <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="targetEnemySpace2(` + buildingProcess + `)">Target Space</button>
                        </div>`;
    break;
  case 'missile-silo':
    buildLoopButtons = true;
    cancelProductionButton = `<button class="cancel-production-btn" onclick="cancelProduction2(` + buildingProcess + `, ` + buildingOwner + `)">Cancel</button>`;
      buildingName = 'Nuclear Missile Silo';
      buildingImg = 'public/images/nuclear-silo.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'ICBM',1,['nuclear-material','processed-minerals','capital','energy'],[0.25,0.2,2,1.5],6,0)"
                        onmouseover="buildingCostToolTip(['nuclear-material','processed-minerals','capital','energy'],[0.25,0.2,2,1.5],6,0)">ICBM</button>
                      </div>`;
      nuclearStorageDiv = true;
      cityID = document.querySelector("#city-index").textContent;
      document.querySelector("#nuke-missile-amount").textContent = map2Cities[cityID].ICBMs.length;
    break;
  case 'ground-defense-laser-1':
      buildingName = 'Ground Defense Laser';
      buildingImg = 'public/images/ground-laser.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>`;
    break;
  case 'ground-defense-laser-2':
      buildingName = 'Ground Defense Laser';
      buildingImg = 'public/images/ground-laser.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>`;
    break;
  case 'research-facility':
      buildingName = 'Research Facility';
      buildingImg = 'public/images/research-facility.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>`;
    break;
  case 'ocean-rig':
      buildingName = 'Oil Rig';
      buildingImg = 'public/images/oil-rig.png';
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>`;
    break;
  case 'orbital-launch-pad':
    buildLoopButtons = true;
    cancelProductionButton = `<button class="cancel-production-btn" onclick="cancelProduction2(` + buildingProcess + `, ` + buildingOwner + `)">Cancel</button>`;
      thisCity = map2BuildingProcess[buildingProcess].city;
      // check if this city is an Asteroid Habitat, a Moon City, or a Solar Cylinder. Launch Pad prices will vary based on
      // what type of city is producing the unit
      if (map2Cities[thisCity].isAsteroidHabitat) {
        // THIS LAUNCH PAD IS ON A NASTEROID, THUS COSTS TILL BE LOWER MCUH LIKE IF IT WERE ON A SOLAR CYLINDER
        // MOON CITIES WILL BE A BIT MORE EXPENSIVE AND ORDINARY PLANETS WILL BE THE MOST EXPENSIVE
        buildingName = 'Orbital Launch Pad';
        buildingImg = 'public/images/launchpad.png';
        if (countries[buildingOwner].hasSolarPowerStation) {
          if (countries[buildingOwner].hasSpaceInfantry) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)">Solar Power Station</button>
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)">Space Infantry</button>
                          </div>`;
          } else {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)">Solar Power Station</button>
                          </div>`;
          }
        } else if (countries[buildingOwner].hasSpaceInfantry) {
          buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)">Space Infantry</button>
                          </div>`;
        }
        buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'comms-satellite',1,['processed-metal','processed-minerals','capital','energy'],[0.4,0.2,0.6,0.4],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','processed-minerals','capital','energy'],[0.4,0.2,0.6,0.4],3,0)">Communication Satellite</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'task-ship',1,['processed-metal','precious-metal','capital','energy'],[1.2,0.05,1.6,1],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[1.2,0.05,1.6,1],5,0)">Task Ship</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-debris-extractor',1,['processed-metal','capital','energy'],[0.8,0.8,0.8],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,0.8,0.8],3,0)">Space Debris Extractor</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weapons-platform',1,['processed-metal','capital','energy'],[1,1.5,1],4,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[1,1.5,1],4,0)">Orbital Weapons Platform</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weather-amp-satellite',1,['processed-metal','precious-metal','capital','energy'],[0.4,0.1,0.5,0.4],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[0.4,0.1,0.5,0.4],5,0)">Weather Amplification Satellite</button>
                          </div>`;
        if (countries[buildingOwner].hasSpaceInfantry) {
          if (countries[buildingOwner].hasMarines) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-marines',1,['processed-metal','manpower','capital','energy'],[0.8,300,1.5,1.2],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1.5,300,2.2,2],2,1)">Space Marines</button>
                          </div>`;
          }
        }
        
      } else if (map2Cities[thisCity].isMoonCity) {
        // THIS LAUNCH PAD IS ON A MOON CITY
        buildingName = 'Orbital Launch Pad';
        buildingImg = 'public/images/launchpad.png';
        if (countries[buildingOwner].hasSolarPowerStation) {
          if (countries[buildingOwner].hasSpaceInfantry) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[1.6,2.4,1.4],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[1.6,2.4,1.4],4,0)">Solar Power Station</button>
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[1,500,1.6,1.2],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1,500,1.6,1.2],2,0)">Space Infantry</button>
                          </div>`;
          } else {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[1.6,2.4,1.4],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[1.6,2.4,1.4],4,0)">Solar Power Station</button>
                          </div>`;
          }
        } else if (countries[buildingOwner].hasSpaceInfantry) {
          buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[1,500,1.6,1.2],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1,500,1.6,1.2],2,0)">Space Infantry</button>
                          </div>`;
        }
        buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'comms-satellite',1,['processed-metal','processed-minerals','capital','energy'],[0.8,0.4,1,0.8],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','processed-minerals','capital','energy'],[0.8,0.4,1,0.8],3,0)">Communication Satellite</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'task-ship',1,['processed-metal','precious-metal','capital','energy'],[2.4,0.1,3,2],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[2.4,0.1,3,2],5,0)">Task Ship</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-debris-extractor',1,['processed-metal','capital','energy'],[1.5,1.5,1.5],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[1.5,1.5,1.5],3,0)">Space Debris Extractor</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weapons-platform',1,['processed-metal','capital','energy'],[2,3,2],4,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[2,3,2],4,0)">Orbital Weapons Platform</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weather-amp-satellite',1,['processed-metal','precious-metal','capital','energy'],[0.8,0.15,1,0.8],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[0.8,0.15,1,0.8],5,0)">Weather Amplification Satellite</button>
                          </div>`;
                          
        if (countries[buildingOwner].hasSpaceInfantry) {
          if (countries[buildingOwner].hasMarines) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-marines',1,['processed-metal','manpower','capital','energy'],[1.5,300,2.2,2],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1.5,300,2.2,2],2,1)">Space Marines</button>
                          </div>`;
          }
        }
        
      } else if (map2Cities[thisCity].isSolarCylinder) {
        // THIS LAUNCH PAD IS ON A SOLAR CYLINDER
        buildingName = 'Orbital Launch Pad';
        buildingImg = 'public/images/launchpad.png';
        if (countries[buildingOwner].hasSolarPowerStation) {
          if (countries[buildingOwner].hasSpaceInfantry) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)">Solar Power Station</button>
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)">Space Infantry</button>
                          </div>`;
          } else {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)">Solar Power Station</button>
                          </div>`;
          }
        } else if (countries[buildingOwner].hasSpaceInfantry) {
          buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)">Space Infantry</button>
                          </div>`;
        }
        buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'comms-satellite',1,['processed-metal','processed-minerals','capital','energy'],[0.4,0.2,0.6,0.4],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','processed-minerals','capital','energy'],[0.4,0.2,0.6,0.4],3,0)">Communication Satellite</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'task-ship',1,['processed-metal','precious-metal','capital','energy'],[1.2,0.05,1.6,1],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[1.2,0.05,1.6,1],5,0)">Task Ship</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-debris-extractor',1,['processed-metal','capital','energy'],[0.8,0.8,0.8],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,0.8,0.8],3,0)">Space Debris Extractor</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weapons-platform',1,['processed-metal','capital','energy'],[1,1.5,1],4,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[1,1.5,1],4,0)">Orbital Weapons Platform</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weather-amp-satellite',1,['processed-metal','precious-metal','capital','energy'],[0.4,0.1,0.5,0.4],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[0.4,0.1,0.5,0.4],5,0)">Weather Amplification Satellite</button>
                          </div>`;
        if (countries[buildingOwner].hasSpaceInfantry) {
          if (countries[buildingOwner].hasMarines) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-marines',1,['processed-metal','manpower','capital','energy'],[0.8,300,1.5,1.2],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.8,300,1.5,1.2],2,1)">Space Marines</button>
                          </div>`;
          }
        }
        
      } else {
        // THIS LUNCH PAD IS NOT ON AN ASTEROID, MOON CITY, OR SOLAR CYLINDER
        buildingName = 'Orbital Launch Pad';
        buildingImg = 'public/images/launchpad.png';
        if (countries[buildingOwner].hasSolarPowerStation) {
          if (countries[buildingOwner].hasSpaceInfantry) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[4,6,3.5],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[4,6,3.5],4,0)">Solar Power Station</button>
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[1.6,500,2.5,2],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1.6,500,2.5,2],2,0)">Space Infantry</button>
                          </div>`;
          } else {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[4,6,3.5],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[4,6,3.5],4,0)">Solar Power Station</button>
                          </div>`;
          }
        } else if (countries[buildingOwner].hasSpaceInfantry) {
          buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[1.6,500,2.5,2],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1.6,500,2.5,2],2,0)">Space Infantry</button>
                          </div>`;
        }
        buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'comms-satellite',1,['processed-metal','processed-minerals','capital','energy'],[1.5,1,3,2],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','processed-minerals','capital','energy'],[1.5,1,3,2],3,0)">Communication Satellite</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'skyhook',1,['super-high-tensile-material','capital','energy','processed-metal'],[0.3,4,3,1],10,0)"
                          onmouseover="buildingCostToolTip(['super-high-tensile-material','capital','energy','processed-metal'],[0.3,4,3,1],10,0)">Skyhook</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'task-ship',1,['processed-metal','precious-metal','capital','energy'],[6,0.1,8,5],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[6,0.1,8,5],5,0)">Task Ship</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-debris-extractor',1,['processed-metal','capital','energy'],[4,4,3],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[4,4,3],3,0)">Space Debris Extractor</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weapons-platform',1,['processed-metal','capital','energy'],[5,6,4],4,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[5,6,4],4,0)">Orbital Weapons Platform</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weather-amp-satellite',1,['processed-metal','precious-metal','capital','energy'],[1,0.25,2,1.5],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[1,0.25,2,1.5],5,0)">Weather Amplification Satellite</button>
                          </div>`;
        if (countries[buildingOwner].hasSpaceInfantry) {
          if (countries[buildingOwner].hasMarines) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-marines',1,['processed-metal','manpower','capital','energy'],[3,300,4,4],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[3,300,4,4],2,1)">Space Marines</button>
                          </div>`;
          }
        }
        
      }
       
    break;
  case 'skyhook':
    buildLoopButtons = true;
    cancelProductionButton = `<button class="cancel-production-btn" onclick="cancelProduction2(` + buildingProcess + `, ` + buildingOwner + `)">Cancel</button>`;
      buildingName = 'Sky Hook';
      buildingImg = 'public/images/skyhook.png';
      if (countries[buildingOwner].hasSolarPowerStation) {
        buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[3,3,2],4,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[3,3,2],4,0)">Solar Power Station</button>
                        </div>`;
      }
      if (countries[buildingOwner].hasSpaceInfantry) {
        buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.8,500,1.6,1],2,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.8,500,1.6,1],2,0)">Space Infantry</button>
                        </div>`;
      }
      buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'comms-satellite',1,['processed-metal','processed-minerals','capital','energy'],[0.8,0.5,1.5,1.2],3,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','processed-minerals','capital','energy'],[0.8,0.5,1.5,1.2],3,0)">Communication Satellite</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'task-ship',1,['processed-metal','precious-metal','capital','energy'],[4,0.1,4,2.5],5,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[4,0.1,4,2.5],5,0)">Task Ship</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-debris-extractor',1,['processed-metal','capital','energy'],[2,2,1.5],3,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[2,2,1.5],3,0)">Space Debris Extractor</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weapons-platform',1,['processed-metal','capital','energy'],[3,3,2],4,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[3,3,2],4,0)">Orbital Weapons Platform</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weather-amp-satellite',1,['processed-metal','precious-metal','capital','energy'],[0.8,0.25,1.2,0.75],5,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[0.8,0.25,1.2,0.75],5,0)">Weather Amplification Satellite</button>
                        </div>`;
      if (countries[buildingOwner].hasSpaceInfantry) {
          if (countries[buildingOwner].hasMarines) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-marines',1,['processed-metal','manpower','capital','energy'],[1.5,300,2.2,2],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[1.5,300,2.2,2],2,1)">Space Marines</button>
                          </div>`;
          }
        }
        
    break;
  case 'space-elevator':
    buildLoopButtons = true;
    cancelProductionButton = `<button class="cancel-production-btn" onclick="cancelProduction2(` + buildingProcess + `, ` + buildingOwner + `)">Cancel</button>`;
    thisCity = map2BuildingProcess[buildingProcess].city;
      // check if this city is an Asteroid Habitat, a Moon City, or a Solar Cylinder. Launch Pad prices will vary based on
      // what type of city is producing the unit
     if (map2Cities[thisCity].isMoonCity) {
      // CHECK TO SEE IF THIS SPACE ELEVATOR IS ON A MOON CITY, UNIT COSTS WILL BE AFFECTED 
        buildingName = 'Space Elevator';
        buildingImg = 'public/images/space-elevator.png';
       if (countries[buildingOwner].hasSpaceInfantry) {
        if (countries[buildingOwner].hasSpaceInfantry) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)">Solar Power Station</button>
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)">Space Infantry</button>
                          </div>`;
          } else {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,1.2,0.7],4,0)">Solar Power Station</button>
                          </div>`;
          }
        } else if (countries[buildingOwner].hasSpaceInfantry) {
          buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.5,500,0.8,0.6],2,0)">Space Infantry</button>
                          </div>`;
        }
        buildButtons += `<div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                          <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'comms-satellite',1,['processed-metal','processed-minerals','capital','energy'],[0.4,0.2,0.6,0.4],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','processed-minerals','capital','energy'],[0.4,0.2,0.6,0.4],3,0)">Communication Satellite</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'task-ship',1,['processed-metal','precious-metal','capital','energy'],[1.2,0.05,1.6,1],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[1.2,0.05,1.6,1],5,0)">Task Ship</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-debris-extractor',1,['processed-metal','capital','energy'],[0.8,0.8,0.8],3,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[0.8,0.8,0.8],3,0)">Space Debris Extractor</button>
                          </div>
                          <div class="build-btn-grouper">
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weapons-platform',1,['processed-metal','capital','energy'],[1,1.4,1],4,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[1,1.5,1],4,0)">Orbital Weapons Platform</button>
                          <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weather-amp-satellite',1,['processed-metal','precious-metal','capital','energy'],[0.4,0.1,0.5,0.4],5,0)"
                          onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[0.4,0.1,0.5,0.4],5,0)">Weather Amplification Satellite</button>
                          </div>`;
        if (countries[buildingOwner].hasSpaceInfantry) {
          if (countries[buildingOwner].hasMarines) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-marines',1,['processed-metal','manpower','capital','energy'],[0.8,300,1.4,1],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.8,300,1.4,1],2,1)">Space Marines</button>
                          </div>`;
          }
        }
        
      } else {
        // THIS SPACE ELEVATOR IS NOT ON A MOON CITY
      buildingName = 'Space Elevator';
      buildingImg = 'public/images/space-elevator.png';
       if (countries[buildingOwner].hasSolarPowerStation) {
          if (countries[buildingOwner].hasSpaceInfantry) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[2,1.5,0.8],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[2,1.5,0.8],4,0)">Solar Power Station</button>
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.4,500,0.8,0.6],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.4,500,0.8,0.6],2,0)">Space Infantry</button>
                          </div>`;
          } else {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'solar-power-station',1,['processed-metal','capital','energy'],[2,1.5,0.8],4,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[2,1.5,0.8],4,0)">Solar Power Station</button>
                          </div>`;
          }
        } else if (countries[buildingOwner].hasSpaceInfantry) {
          buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-infantry',1,['processed-metal','manpower','capital','energy'],[0.4,500,0.8,0.6],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.4,500,0.8,0.6],2,0)">Space Infantry</button>
                          </div>`;
        }
        buildButtons += `<div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 1)">Activate</button>
                        <button class="build-window-btn" onclick="activateBuildingProcess2(` + buildingProcess + `, 0)">De-activate</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'comms-satellite',1,['processed-metal','processed-minerals','capital','energy'],[0.5,0.25,0.8,0.5],3,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','processed-minerals','capital','energy'],[0.5,0.25,0.8,0.5],3,0)">Communication Satellite</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'skyhook',1,['super-high-tensile-material','capital','energy','processed-metal'],[0.3,1,1,0.5],10,0)"
                        onmouseover="buildingCostToolTip(['super-high-tensile-material','capital','energy','processed-metal'],[0.3,1,1,0.5],10,0)">Skyhook</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'task-ship',1,['processed-metal','precious-metal','capital','energy'],[1.5,0.05,2,1.5],5,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[1.5,0.05,2,1.5],5,0)">Task Ship</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-debris-extractor',1,['processed-metal','capital','energy'],[1,1,1],3,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[1,1,1],3,0)">Space Debris Extractor</button>
                        </div>
                        <div class="build-btn-grouper">
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weapons-platform',1,['processed-metal','capital','energy'],[2,1.5,1],4,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','capital','energy'],[2,1.5,1],4,0)">Orbital Weapons Platform</button>
                        <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'weather-amp-satellite',1,['processed-metal','precious-metal','capital','energy'],[0.6,0.2,0.6,0.4],5,0)"
                        onmouseover="buildingCostToolTip(['processed-metal','precious-metal','capital','energy'],[0.6,0.2,0.6,0.4],5,0)">Weather Amplification Satellite</button>
                        </div>`;
        if (countries[buildingOwner].hasSpaceInfantry) {
          if (countries[buildingOwner].hasMarines) {
            buildButtons += `<div class="build-btn-grouper">
                            <button class="build-window-btn" onclick="manipulateBuildingProcess2(` + buildingProcess + `, 'space-marines',1,['processed-metal','manpower','capital','energy'],[0.8,300,1.5,1],2,0)"
                            onmouseover="buildingCostToolTip(['processed-metal','manpower','capital','energy'],[0.8,300,1.5,1.2],2,1)">Space Marines</button>
                          </div>`;
          }
        }
        
      }
    break;
  }
    
    buildOutputString = ``;
    outputMaterial = map2BuildingProcess[buildingProcess].outputMaterial;
    outputAmount = map2BuildingProcess[buildingProcess].outputAmount;
      switch(outputMaterial) {
        case 'processed-metal':
          outputMaterial = `<img class="inline-build-window-resource" src="public/images/processedmetalicon.png">`;
          // if the outputMaterial is a resource, we can simply insert an icon, if it is something more complex, we will use a word or phrase
        break;
        case 'processed-minerals':
          outputMaterial = `<img class="inline-build-window-resource" src="public/images/processedmineralicon.png">`;
          // if the outputMaterial is a resource, we can simply insert an icon, if it is something more complex, we will use a word or phrase
        break;
      case 'super-high-tensile-material':
          outputMaterial = `<img class="inline-build-window-resource" src="public/images/superhightensileicon.png">`;
        break;
      case 'agricultural-material':
          outputMaterial = `<img class="inline-build-window-resource" src="public/images/agriculturalicon.png">`;
        break;
      case 'oil':
          outputMaterial = `<img class="inline-build-window-resource" src="public/images/oilicon.png">`;
        break;
      case 'energy':
          outputMaterial = `<img class="inline-build-window-resource" src="public/images/energyicon.png">`;
        break;
        case 'marine':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/marinesicon.png">`;
        break;
      case 'carrier':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/carriericon.png">`;
        break;
      case 'destroyer':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/destroyericon.png">`;
        break;
      case 'submarine':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/submarineicon.png">`;
        break;
      case 'infantry':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/infantryicon.png">`;
        break;
      case 'tank':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/tankicon.png">`;
        break;
      case 'aircraft':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/mannedaircrafticon.png">`;
          // both mannedaircraft and unmannedaircraft have their own symbols, in the future make it so that when
          // a certain level of technology has been reached unmanned aircraft will start being produced and
          // switch out this symbol
        break;
      case 'ICBM':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/ICBMicon.png">`;
        break;
      case 'space-infantry':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/spaceinfantryicon.png">`;
        break;
      case 'space-marines':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/spacemarinesicon.png">`;
        break;
      case 'solar-power-station':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/solarsatelliteicon.png">`;
        break;
      case 'space-debris-extractor':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/spacedebrisextractoricon.png">`;
        break;
      case 'comms-satellite':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/communicationsatelliteicon.png">`;
        break;
      case 'task-ship':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/taskshipicon.png">`;
        break;
      case 'skyhook':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/skyhookicon.png">`;
        break;
      case 'weapons-platform':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/weaponsplatformicon.png">`;
        break;
      case 'weather-amp-satellite':
          outputMaterial = `<img class="inline-build-window-unit" src="public/images/weatherampicon.png">`;
        break;
      // Buildings are included in this list because something must be displayed when a building is being constructed
      case 'port':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/portBuilding.png">`;
        break;
      case 'military-base':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/barracks.png">`;
        break;
      case 'power-plant-1':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/power-plant.png">`;
        break;
      case 'power-plant-2':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/power-plant.png">`;
        break;
      case 'metal-processing-plant-1':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/metal-factory.png">`;
        break;
      case 'metal-processing-plant-2':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/metal-factory.png">`;
        break;
      case 'mineral-processing-plant-1':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/mineral-factory.png">`;
        break;
      case 'mineral-processing-plant-2':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/mineral-factory.png">`;
        break;
      case 'mineral-processing-plant-3':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/mineral-factory.png">`;
        break;
      case 'nuclear-power-plant-1':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/nuclear-power-plant.png">`;
        break;
      case 'nuclear-power-plant-2':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/nuclear-power-plant.png">`;
        break;
      case 'nuclear-power-plant-3':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/nuclear-power-plant.png">`;
        break;
      case 'railgun-1':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/railgun.png">`;
        break;
      case 'railgun-2':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/railgun.png">`;
        break;
      case 'railgun-3':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/railgun.png">`;
        break;
      case 'missile-system-1':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/missiles.png">`;
        break;
      case 'missile-system-2':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/missiles.png">`;
        break;
      case 'missile-system-3':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/missiles.png">`;
        break;
      case 'orbital-launch-pad':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/launchpad.png">`;
        break;
      case 'missile-silo':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/nuclear-silo.png">`;
        break;
      case 'ground-defense-laser-1':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/ground-laser.png">`;
        break;
      case 'ground-defense-laser-2':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/ground-laser.png">`;
        break;
      case 'research-facility':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/research-facility.png">`;
        break;
      case 'ocean-rig':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/oil-rig.png">`;
        break;
      case 'space-elevator':
          outputMaterial = `<img class="inline-build-window-structure" src="public/images/space-elevator.png">`;
        break;
      default:
        
        if (map2BuildingProcess[buildingProcess].damageAmount > 0) {
          // if this building has a registered damage amount greater than zero, it is a weapon and therefore the build
          // output should be showing what it is targeting rather than what it is producing
          if (map2BuildingProcess[buildingProcess].targetCity == undefined) {
            buildOutputString = '<p class="weapon-target">Targeting Armies</p>';
          } else if (map2BuildingProcess[buildingProcess].targetCity == -1) {
            buildOutputString = '<p class="weapon-target">Targeting Orbital Fleets</p>';
          } else {
            targetCityName = map2Cities[map2BuildingProcess[buildingProcess].targetCity].name;
            buildOutputString = '<p class="weapon-target">Targeting ' + targetCityName + ' (City)</p>';
          }
        }
        
        break;
      }
      
      if (buildOutputString === ``) {
        buildOutputString += `<p class="build-info-win">+` + outputAmount + ` ` + outputMaterial + `</p>
        <p class="build-info-win">(` + map2BuildingProcess[buildingProcess].monthsLeft + `) Months</p>
        ` + cancelProductionButton + ``;
      }
      
    // After creating a string describing what is being produced and how much, we must now create a string describing what it costs to
    // produce this material
    
    maintenanceMaterialIncrement = 0;
    buildMaintenanceString = ``;
    map2BuildingProcess[buildingProcess].maintenanceMaterial.forEach(function(maintenanceMaterial) {
      maintenanceAmount = map2BuildingProcess[buildingProcess].maintenanceAmount[maintenanceMaterialIncrement];
      switch(maintenanceMaterial) {
        case 'capital':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/capitalicon.png">`;
        break;
        case 'oil':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/oilicon.png">`;
        break;
        case 'manpower':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/manpowericon.png">`;
        break;
        case 'minerals':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/mineralicon.png">`;
        break;
        case 'processed-minerals':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/processedmineralicon.png">`;
        break;
        case 'metal':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/metalicon.png">`;
        break;
        case 'processed-metal':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/processedmetalicon.png">`;
        break;
        case 'energy':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/energyicon.png">`;
        break;
        case 'precious-metal':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/preciousmetalicon.png">`;
        break;
        case 'nuclear-material':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/nuclearicon.png">`;
        break;
      case 'super-high-tensile-material':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/superhightensileicon.png">`;
        break;
      case 'agricultural-material':
          maintenanceMaterial = `<img class="inline-build-window-resource" src="public/images/agriculturalicon.png">`;
        break;
      }
      
      buildMaintenanceString += `<p class="build-info-win">-` + maintenanceAmount + ` ` + maintenanceMaterial + `</p>`;
      
      maintenanceMaterialIncrement++;
    });
    
    // In this part of the function we must determine what kind of building we have opened the build window for
    // what kinds of processes are running right now for this building, what it is building, output, resources being consumed
    // all units or other things that could consume, and render all of that information as output strings and buttons
    
    if (map2BuildingProcess[buildingProcess].active) {
      document.querySelector(".build-info-active").style.color = "green";
      document.querySelector(".build-info-active").textContent = "Active";
    } else {
      document.querySelector(".build-info-active").style.color = "red";
      document.querySelector(".build-info-active").textContent = "De-actived";
    }
    
    
    document.querySelector('.build-output-div').innerHTML = buildOutputString;
    document.querySelector('.build-maintenance-div').innerHTML = buildMaintenanceString;
    // after creating a string defining the materials and amounts being both outputted and consumed by a process,
    // we print those strings to the build window
    document.querySelector('.build-window-title').textContent = buildingName;
    document.querySelector('.build-window-image').src = buildingImg;
    document.querySelector('.build-window-health').textContent = "Health: " + buildingHealth;
    document.querySelector('.build-btns-container').innerHTML = buildButtons;
    
    if (nuclearStorageDiv) {
      document.querySelector('.nuclear-storage-div').style.display = "flex";
    } else {
      document.querySelector('.nuclear-storage-div').style.display = "none";
    }
    
    if (buildLoopButtons) {
      document.querySelector('.build-info-loop').style.display = 'block';
      document.querySelector('.build-info-loop-buttons').style.display = 'block';
      document.querySelector("#build-number").textContent = map2BuildingProcess[buildingProcess].loop;
      document.querySelector('#add-1').setAttribute("onclick","buildQueuePlusOneMap2(" + buildingProcess + ")");
      document.querySelector('#add-5').setAttribute("onclick","buildQueuePlusFiveMap2(" + buildingProcess + ")");
      document.querySelector('#add-10').setAttribute("onclick","buildQueuePlusTenMap2(" + buildingProcess + ")");
      document.querySelector('#minus-1').setAttribute("onclick","buildQueueMinusOneMap2(" + buildingProcess + ")");
    } else {
      document.querySelector('.build-info-loop').style.display = 'none';
      document.querySelector('.build-info-loop-buttons').style.display = 'none';
    }
    // display the build loop buttons if this building is the kind that can recruit units
    
    
    // Here we will define what city the building is in and pass its array position and building process id so it can be deleted
    thisCity = map2BuildingProcess[buildingProcess].city;
    document.querySelector(".build-win-control-destroy").setAttribute("onclick","buildingDestroy2(" + thisCity + ", " + buildingArrayIndex + ", " + map2BuildingProcess[buildingProcess].id + ", true)");
    document.querySelector(".build-win-control-more").setAttribute("onclick","moreBuildings2(" + thisCity + ")");
    
    
    // if the number of buildings in a city is less than the maximum number of buildings that city can have, then
    // allow the 'More Buildings' button to be clickable thus allowing the creation of more buildings
    if (map2Cities[thisCity].buildings.length < map2Cities[thisCity].buildingSlots) {
      document.querySelector(".build-win-control-more").style.background = "rgb(255,255,255)";
      document.querySelector(".build-win-control-more").setAttribute("onclick","moreBuildings2(" + thisCity + ")");
    } else {
      document.querySelector(".build-win-control-more").style.background = "rgb(140,140,140)";
      document.querySelector(".build-win-control-more").setAttribute("onclick","");
    }
    
    // Now we set the Upgrade button to either be active and charge capital for upgrades, or be inactive
  switch(buildingModel) {
    case 'power-plant-1':
      if (countries[buildingOwner].powerPlantLevel === 2) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (50)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'metal-processing-plant-1':
      if (countries[buildingOwner].metalProcessingPlantLevel === 2) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (45)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'mineral-processing-plant-1':
      if (countries[buildingOwner].mineralProcessingPlantLevel > 1) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (40)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'mineral-processing-plant-2':
      if (countries[buildingOwner].mineralProcessingPlantLevel === 3) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (55)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'nuclear-power-plant-1':
      if (countries[buildingOwner].nuclearPowerPlantLevel > 1) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (75)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'nuclear-power-plant-2':
      if (countries[buildingOwner].nuclearPowerPlantLevel === 3) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (100)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'railgun-1':
      if (countries[buildingOwner].railgunLevel > 1) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (50)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'railgun-2':
      if (countries[buildingOwner].railgunLevel === 3) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (80)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'missile-system-1':
      if (countries[buildingOwner].missileSystemLevel > 1) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (50)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'missile-system-2':
      if (countries[buildingOwner].missileSystemLevel === 3) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (80)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
    case 'ground-defense-laser-1':
      if (countries[buildingOwner].groundDefenseLaserLevel === 2) {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(255,255,255)";
        document.querySelector(".build-win-control-upgrade").setAttribute("onclick","buildingUpgrade2(" + thisCity + ", " + buildingArrayIndex + ", '" + buildingModel + "', " + map2BuildingProcess[buildingProcess].id + ")");
        document.querySelector(".build-win-control-upgrade").textContent = "Upgrade (40)";
      } else {
        document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
        document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
        document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
      }
    break;
  default:
    document.querySelector(".build-win-control-upgrade").style.background = "rgb(140,140,140)";
    document.querySelector(".build-win-control-upgrade").setAttribute('onclick','');
    document.querySelector(".build-win-control-upgrade").textContent = "No Upgrade";
    // if no buildings are currently able to be upgraded, then make the background of the upgrade button grey and
    // take away the onclick function
  }
    
    document.querySelector(".build-window-div").style.display = "block";
    // then make the build window visible
}
