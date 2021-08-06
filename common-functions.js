let foodValue = 0.5;
let mineralValue = 1.0;
let metalValue = 1.5;
let oilValue = 2.0;
let goldValue = 4.0;
let nuclearValue = 3.0;
// nuclear provinces on earth are found in Australia, Canada, Kazakhstan, and South Africa. It can also be obtained by seasteading.
// Some estimates say we only have enough Uranium for the next 100 years on Earth, Uranium depletion in some provinces?

// A bit about Antimatter: Antimatter will require structures to be built and suspended inside of gas giants. Instead of creating
// a map of a Gas Giant, we simply make Gas Giants clickable on the System Screen, and AntiMatter factories can be built suspended
// in the Gas Giant to produce antimatter. A 'Gas Giant' screen comes up displaying the number of antiMatter factories for each country
// that is actively harveting antiMatter in that Gas Giant, and Space Infantry are needed to find and seize control of antiMatter factories.
// Originally, I was going to have the moons of Gas Giants produce the antiMatter, but unfortunately no moons in our system have
// any hydrogen or dueterium in the atmosphere, so harvesting it directly in the Gas Giant is neccesary. Gas Giant names will be Jupiter,
// Proserpina, Vulcan, and Juno.Use this text when describing Gas Giant combat:

// Due to the dense atmosphere, limited visibility, and unpredictable movements of the factories as they float across the Gas Giant's
// surface, we cannot use ranged weapons to destroy the factories from above. We will have to send infantry down to find and
// seize control of these valuable factories.




let infantryFleetVolume = 1;
let tankFleetVolume = 1.5;
let marineFleetVolume = 0.5;
let spaceInfantryFleetVolume = 0.5;
let spaceMarineFleetVolume = 0.5;
// these variables determine how much space each type of unit takes up inside of a fleet
// and therefore how many of each unit type a single fleet can carry



let destroyerCarryingCapacity = 2;
let carrierCarryingCapacity = 4;



let fireFlashesCity = 0;
let fireFlashesUnit = 0;
let fireFlashesSpace = 0;
// this variable counts the number of fireFlash circles that are on the map after ranged weapons inside of
// cities and naval units fire



let militaryBaseFixedCapital = 1;
let militaryBaseFixedEnergy = 0.25;
let portFixedCapital = 0.2;
let missileSiloFixedCapital = 1.5;
let missileSiloFixedEnergy = 0.75;
let spaceElevatorFixedCapital = 2.2;
let spaceElevatorFixedEnergy = 1.2;
let orbitalLaunchPadFixedCapital = 2.2;
let orbitalLaunchPadFixedEnergy = 1.2;
let researchFacilityFixedCapital = 0.85;
// The variables above dictate the fixed costs associated with buildings that can produce units with their own independent cost
// Fixed costs are assigned to buildings because they produce units or because it is just more effecient to have their cost deducted
// as a simple amount rather than as a cost of something they are producing. This should also mean that these types of buildings
// cannot be 'deactivated' to save on costs, as the cost associated with them is not run as a process but rather a fixed expense



let currentPlayerID = 0;
// currentPlayerID is the id of the country the player is currently playing as.






const openCity = function(city, cityDots) {
  if (event.ctrlKey) {
         selectTargetCity2(city.id);
        } else if (1 == 2) {
         // 1 == 2 is only placeholder code. The purpose of this code block is to create a function by which people using
         // a touch screen are still able to target enemy cities, thus allowing mobile gameplay
        }
        // here we are moving the selector icon on the canvas so you can see which city you have selected
        citySelector.top = (cityDots.top - 5);
        citySelector.left = (cityDots.left - 5);
        mainCanvas2.requestRenderAll();
        // Set Top Buttons =============================================================================================
        document.getElementById('province-info-btn').setAttribute('onclick','showProvince(' + city.id + ',' + city.provinceID +')')
        // Fill in City Info =============================================================================================
        document.querySelector('.city-interaction').style.display = 'flex';
        // this causes the city interactions window to display
        
        updateCombatWindow(city, null, null);
        
        // Here we have to figure out what units are currently positioned in this city before we open the unit interactions window
        
        // figure out what units are positioned in the city
        
        document.querySelector(".unit-interaction").style.display = "flex";
        // this causes the unit view for that city to display
        if (city.coastal === false) {
            coastalPic = '';
        } else {
            coastalPic = 'public/images/port.png';
        }
        if (city.isCapital === false) {
            capitalPic = '';
        } else {
            capitalPic = 'public/images/capital.png'
        }
        document.querySelector('#city-index').textContent = city.id;
        document.querySelector('#planet-index').textContent = 2;
        document.querySelector('#city-name').innerHTML = '<img src=" ' + coastalPic + '" style="height: 2vh"> ' + city.name + ' <img src="' + capitalPic + '" style="height: 2vh">';
        // above we are determining if this city is coastal or a capital, we will display icons surrounding the city name depending on these factors
        popNumber = city.population.toLocaleString();
        // this will turn 3600000 to 3,600,000
        document.querySelector('.city-img').src = city.cityPic;
        
        document.querySelector('#city-population').textContent = 'Population: ' + popNumber;
        gdpPerCapita = map2Provinces[city.provinceID].gdpPerCapita;
        populationIncome = (city.population / 5000000) * gdpPerCapita;
        document.querySelector('#city-gdp-per-capita').textContent = 'GDP Per Capita: ' + gdpPerCapita;
        document.querySelector('#city-pop-income').textContent = 'Tax Income: ' + populationIncome.toFixed(2);
        // above we have determined the population of the city, calculated it with the gdp per capita of its province
        // and determined how much capital income this city will generate from raw population
        
        
        
        if (currentPlayerID != -1) {
         hasMilitaryIntel = false;
         countries[currentPlayerID].hasMilitaryIntel.forEach(function(spiedEnemyID) {
          if (spiedEnemyID === city.ownerID) {
           hasMilitaryIntel = true;
          }
         });
        }
        // determine ahead of time, if the current player has military intel on the country they are trying to spy on
        // however if the currentPlayerID is -1 then they are a spectator so it doesn't matter
        
        if (city.ownerID === currentPlayerID) {
         controlMilitaryIntelligence();
         displayLandArmies();
        } else if (currentPlayerID === -1) {
         // this id signifies that the player is a spectator
         displayMilitaryIntelligence();
         displayLandArmies();
        } else if (hasMilitaryIntel) {
         displayMilitaryIntelligence();
         displayLandArmies();
        } else {
         isNeighbor = false;
         map2Provinces[city.provinceID].landNeighbors.forEach(function(neighborID) {
          countries[currentPlayerID].ownedProvinces2.forEach(function(playerProvinceID) {
            if (neighborID === playerProvinceID) {
             isNeighbor = true;
             displayMilitaryIntelligence();
             displayLandArmies();
             // first run a forEach loop for every neighboring province of the city you just selected, then inside of that loop
             // run another loop for every province currently owned by the player. If at any point a province owned by the player
             // is the same as the neighbor of the province that was selected, we can then display the military units inside of
             // that city on the screen, because the player has line of sight to them
            }
           });
          });
         map2Provinces[city.provinceID].coastalNeighbors.forEach(function(neighborID) {
          countries[currentPlayerID].ownedProvinces2.forEach(function(playerProvinceID) {
            if (neighborID === playerProvinceID) {
             isNeighbor = true;
             displayMilitaryIntelligence();
             displayLandArmies();
            }
           });
          });
         if (isNeighbor === false) {
          hideMilitaryIntelligence();
          hideLandArmies();
          // if everything else has failed and this province is also not a land neighbor to any player owned province, then
          // hide all military information from the player about this province
         }
        }
        // now that we have populated both the city index and the planet index above, we can call displayLandArmies() in order to
        // populate the unit interactions window as long as the city is owned by the player (or they are a spectator), the player
        // has military intel or the city is in a province that borders the player
        
        
        
        // now below we will determine what resource this province produces, how much, what the city's share is
        // and therefore how much income from that resource we can depend on
        cityResource = map2Provinces[city.provinceID].resource;
        switch(cityResource) { 
            case "<img src='public/images/foodicon.png' class='tile-res-icn'>": 
                resourceValue = foodValue;
            break; 
            case "<img src='public/images/mineralicon.png' class='tile-res-icn'>": 
                resourceValue = mineralValue;
            break;
            case "<img src='public/images/metalicon.png' class='tile-res-icn'>": 
                resourceValue = metalValue;
            break;
            case "<img src='public/images/oilicon.png' class='tile-res-icn'>": 
                resourceValue = oilValue;
            break;
            case "<img src='public/images/preciousmetalicon.png' class='tile-res-icn'>": 
                resourceValue = goldValue;
            break;
            case "<img src='public/images/nuclearicon.png' class='tile-res-icn'>": 
                resourceValue = nuclearValue;
            break;
        } 
        // show good produced
        cityResourceProduced = (city.corporateResourceModifier * 2) * map2Provinces[city.provinceID].resourceAmount;
        document.querySelector('#city-resource-produced').innerHTML = cityResource + ' Produced: ' + cityResourceProduced.toFixed(2);
        // show capital produced from goods
        cityResourceIncome = (city.corporateResourceModifier * 2) * (map2Provinces[city.provinceID].resourceAmount * (resourceValue * 0.8));
        // Note: Resources provide 80% of their capital value to governments, but Corporations will extract 100% resource value from cities and only 50%
        // actual resources. Corporations also have near infinite resource storage capacity for most resources
        document.querySelector('#city-resource-income').innerHTML = cityResource + ' Income: ' + cityResourceIncome.toFixed(2);
        
        totalIncome = (populationIncome + cityResourceIncome);
        document.querySelector('#total-income').textContent = 'Total: ' + totalIncome.toFixed(2);
        
        document.querySelector('#city-unrest').textContent = 'Unrest: ' + map2Provinces[city.provinceID].unrest;
        
        document.querySelector('#city-defense').textContent = 'Defense: +' + city.baseDefense;
        
        document.querySelector('#city-corporation').innerHTML = 'Corporation: <span onclick="">' + city.corporation + '</span>';
        // then shoow which corporation holds this city, and render a button to interact with them
        
        // now we determine the global position of this city to see if it is elgible to build space infrastructure or cause
        // attrition damage to enemies
        if (city.equatorial === false) {
         if (map2Provinces[city.provinceID].arctic === false) {
          if (map2Provinces[city.provinceID].antarctic === false) {
           latitudeInfoString = '<span style="color: white">Average</span>';
          } else {
           latitudeInfoString = '<span style="color: rgb(100,100,255)">Antarctic</span>';
          }
         } else {
          latitudeInfoString = '<span style="color: rgb(100,100,255)">Arctic</span>';
         }
        } else {
         latitudeInfoString = '<span style="color: rgb(255,100,100)">Equatorial</span>';
        }
        document.querySelector('#city-latitude').innerHTML = 'Latitude: ' + latitudeInfoString;
        
        
        document.querySelector('#city-ownership').innerHTML = 'Owner: <span onclick="">' + city.owner + '</span>';
        document.querySelector('#city-occupation').innerHTML = 'Occupier: <span onclick="">' + city.occupiedBy + '</span>';
        
        // now to create a new div container and tooltip for every building, this will also include an image of the building to
        // be used in the gui
        buildingsDomElement = ``;
        buildingArrayIndex = 0;
        // This variable is used to track our place in the cities.buildings array found in cities2.js. By knowing our position in this array
        // we can also know the corresponding health of that building in the cities.buildingHealth array just below it.
        city.buildings.forEach(function(building) {
         
            switch(building) { 
            case 'port': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`port`, `Port`, `public/images/portBuilding.png`, `Can be used to receive goods from Trade Ships, or build Naval Units.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/portBuilding.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `port`, `public/images/portBuilding.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break; 
            case 'military-base': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`military-base`, `Military Base`, `public/images/barracks.png`, `Provides +1 Defense in this city and can be used to recruit Land Units.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/barracks.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `military-base`, `public/images/barracks.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
            case 'power-plant-1': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`power-plant-1`, `Power Plant`, `public/images/power-plant.png`, `(Tier 1) Produces Power by consuming Oil and Synthetic Oil.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/power-plant.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `power-plant-1`, `public/images/power-plant.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'power-plant-2': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`power-plant-2`, `Power Plant`, `public/images/power-plant.png`, `(Tier 2) Produces Power by consuming Oil and Synthetic Oil.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/power-plant.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `power-plant-2`, `public/images/power-plant.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
            case 'metal-processing-plant-1': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`metal-processing-plant-1`, `Metal Plant`, `public/images/metal-factory.png`, `(Tier 1) Can be used to turn Metal into Processed Metal`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/metal-factory.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `metal-processing-plant-1`, `public/images/metal-factory.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'metal-processing-plant-2': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`metal-processing-plant-2`, `Metal Plant`, `public/images/metal-factory.png`, `(Tier 2) Can be used to turn Metal into Processed Metal.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/metal-factory.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `metal-processing-plant-2`, `public/images/metal-factory.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
            case 'mineral-processing-plant-1': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`mineral-processing-plant-1`, `Mineral Plant`, `public/images/mineral-factory.png`, `(Tier 1) Can be used to process Minerals into Processed Minerals, and to turn Processed Minerals into finished goods.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/mineral-factory.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `mineral-processing-plant-1`, `public/images/mineral-factory.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'mineral-processing-plant-2': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`mineral-processing-plant-2`, `Mineral Plant`, `public/images/mineral-factory.png`, `(Tier 2) Can be used to process Minerals into Processed Minerals, and to turn Processed Minerals into finished goods.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/mineral-factory.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `mineral-processing-plant-2`, `public/images/mineral-factory.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'mineral-processing-plant-3': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`mineral-processing-plant-3`, `Mineral Plant`, `public/images/mineral-factory.png`, `(Tier 3) Can be used to process Minerals into Processed Minerals, and to turn Processed Minerals into finished goods.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/mineral-factory.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `mineral-processing-plant-3`, `public/images/mineral-factory.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
            case 'nuclear-power-plant-1': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`nuclear-power-plant-1`, `Nuclear Power Plant`, `public/images/nuclear-power-plant.png`, `(Tier 1) Produces Power by consuming Nuclear Materials.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/nuclear-power-plant.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `nuclear-power-plant-1`, `public/images/nuclear-power-plant.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'nuclear-power-plant-2': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`nuclear-power-plant-2`, `Nuclear Power Plant`, `public/images/nuclear-power-plant.png`, `(Tier 2) Produces Power by consuming Nuclear Materials.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/nuclear-power-plant.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `nuclear-power-plant-2`, `public/images/nuclear-power-plant.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'nuclear-power-plant-3': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`nuclear-power-plant-3`, `Nuclear Power Plant`, `public/images/nuclear-power-plant.png`, `(Tier 3) Produces Power by consuming Nuclear Materials.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/nuclear-power-plant.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `nuclear-power-plant-3`, `public/images/nuclear-power-plant.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'railgun-1': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`railgun-1`, `Railgun`, `public/images/railgun.png`, `(Tier 1) Long Range weapon which can be used to attack enemy armies and cities.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/railgun.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `railgun-1`, `public/images/railgun.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'railgun-2': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`railgun-2`, `Railgun`, `public/images/railgun.png`, `(Tier 2) Long Range weapon which can be used to attack enemy armies and cities.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/railgun.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `railgun-2`, `public/images/railgun.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'railgun-3': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`railgun-3`, `Railgun`, `public/images/railgun.png`, `(Tier 3) Long Range weapon which can be used to attack enemy armies and cities.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/railgun.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `railgun-3`, `public/images/railgun.png`, `' + city.buildingOwner[buildingArrayIndex] + '`, ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'missile-system-1': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`missile-system-1`, `Missile System`, `public/images/missiles.png`, `(Tier 1) Long Range weapon which can be used to attack enemy armies and cities.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/missiles.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `missile-system-1`, `public/images/missiles.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'missile-system-2': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`missile-system-2`, `Missile System`, `public/images/missiles.png`, `(Tier 2) Long Range weapon which can be used to attack enemy armies and cities.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/missiles.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `missile-system-2`, `public/images/missiles.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'missile-system-3': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`missile-system-3`, `Missile System`, `public/images/missiles.png`, `(Tier 3) Long Range weapon which can be used to attack enemy armies and cities.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/missiles.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `missile-system-3`, `public/images/missiles.png`, `' + city.buildingOwner[buildingArrayIndex] + '`, ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'orbital-launch-pad': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`orbital-launch-pad`, `Orbital Launch Pad`, `public/images/launchpad.png`, `Used to build and launch Orbital Units into near-planet orbit.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/launchpad.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `orbital-launch-pad`, `public/images/launchpad.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'missile-silo': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`missile-silo`, `Nuclear Silo`, `public/images/nuclear-silo.png`, `Can build and store Nuclear Missiles.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/nuclear-silo.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `missile-silo`, `public/images/nuclear-silo.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'ground-defense-laser-1': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`ground-defense-laser-1`, `Ground Defense Laser`, `public/images/ground-laser.png`, `(Tier 1) This structure can be used to target Orbital units and Nuclear Missiles and shoot them down before they can reach their target.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/ground-laser.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `ground-defense-laser-1`, `public/images/ground-laser.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'ground-defense-laser-2': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`ground-defense-laser-2`, `Ground Defense Laser`, `public/images/ground-laser.png`, `(Tier 2) This structure can be used to target Orbital units and Nuclear Missiles and shoot them down before they can reach their target.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/ground-laser.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `ground-defense-laser-2`, `public/images/ground-laser.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'research-facility': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`research-facility`, `Research Facility`, `public/images/research-facility.png`, `Allows the research of new technologies.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/research-facility.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `research-facility`, `public/images/research-facility.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'ocean-rig': 
                buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`ocean-rig`, `Rig`, `public/images/oil-rig.png`, `Rigs allow you to extract Oil from Sea Zones. They can be part of a Seastead or stand alone.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
                buildingsDomElement += '<img src="public/images/oil-rig.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `ocean-rig`, `public/images/oil-rig.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
                // Note: Precious Metals and Nuclear Materials must be extracted with a Seastead instead of an Ocean Rig.
            break;
           case 'space-elevator': 
               buildingsDomElement += '<div class="building-container" onmouseover="showToolTip2(`space-elevator`, `Space Elevator`, `public/images/space-elevator.png`, `Used to build and launch Orbital Units into near-planet orbit.`, `' + buildingArrayIndex + '`, ' + city.id + ')" onmouseout="hideToolTip()">';
               buildingsDomElement += '<img src="public/images/space-elevator.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `space-elevator`, `public/images/space-elevator.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-12': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-12.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-12.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-11': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-11.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-11.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-10': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-10.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-10.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-9': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-9.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-9.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-8': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-8.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-8.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-7': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-7.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-7.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-6': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-6.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-6.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-5': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-5.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-5.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-4': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-4.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-4.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-3': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-3.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-3.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-2': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-2.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-2.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           case 'built-in-1': 
                buildingsDomElement += '<div class="building-container">';
                buildingsDomElement += '<img src="public/images/built-in-1.png" onclick="openBuildWindow2(`' + buildingArrayIndex + '`, `construction`, `public/images/built-in-1.png`, ' + city.buildingOwner[buildingArrayIndex] + ', ' + city.buildingProcess[buildingArrayIndex] + ', ' + city.buildingHealth[buildingArrayIndex] + ')" class="city-building-img" id="building-select-' + buildingArrayIndex + '"></div>';
            break;
           }
           buildingArrayIndex++;
        });
        if (map2Cities[city.id].buildings.length < map2Cities[city.id].buildingSlots) {
         buildingsDomElement += '<div class="building-container">';
         buildingsDomElement += '<img src="public/images/build-new.png" onclick="moreBuildings2(' + city.id + ')" class="city-building-img"></div>';
        }
        
        document.querySelector('#city-buildings').innerHTML = buildingsDomElement;
        // create a seperate paragraph element and encompassing div for each building in the city.
}





const closeInteractions = function() {
  
  cityID = document.querySelector("#city-index").textContent;
  planetID = document.querySelector("#planet-index").textContent;
  
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
  
  if (document.querySelector(".city-combat-screen").style.display == 'flex') {
    //if the city combat screen is currently open that open the city interactions screen instead of the combat sscreen before closing
    document.querySelector(".city-combat-screen").style.display = "none";
    document.querySelector(".city-interaction").style.display = "flex";
  } else {
    
    document.querySelector(".unit-interaction").style.display = "none";
    document.querySelector(".city-interaction").style.display = "none";
    document.querySelector(".city-combat-screen").style.display = "none";
    document.querySelector(".unit-move-interaction-land").style.display = "none";
    document.querySelector(".unit-move-interaction-naval").style.display = "none";
    document.querySelector(".unit-move-interaction-air").style.display = "none";
    document.querySelector("#move-space-marines").style.display = "none";
    document.querySelector("#move-space-infantry").style.display = "none";
    document.querySelector("#move-carrier").style.display = "none";
    document.querySelector("#move-submarine").style.display = "none";
    document.querySelector("#move-marines").style.display = "none";
    document.querySelector("#move-destroyer").style.display = "none";
    document.querySelector("#move-aircraft").style.display = "none";
    document.querySelector("#move-tank").style.display = "none";
    document.querySelector("#move-infantry").style.display = "none";
    
    disembarkInfantry(cityID, planetID);
    disembarkTanks(cityID, planetID);
    disembarkAircraft(cityID, planetID);
    disembarkMarines(cityID, planetID);
    disembarkSpaceInfantry(cityID, planetID);
    disembarkSpaceMarines(cityID, planetID);
    
    if (planetID == 1) {
      
    } else if(planetID == 2) {
      if (map2Cities[cityID].fleet.length > 0) {
        // if a fleet actually exists in this city, then make sure to remove all naval units from the fleet when closing the city
        removeDestroyersFromFleet(cityID, planetID, true);
        removeSubmarinesFromFleet(cityID, planetID);
        removeCarriersFromFleet(cityID, planetID, true);
      }
    } else if(planetID == 3) {
      
    } else if(planetID == 4) {
      
    }
    
    if (planetID == 1) {
      
    } else if(planetID == 2) {
      if (map2Cities[cityID].army.length > 0) {
        // if an army actually exists in this city, then make sure to remove all land units from the army when closing the city
        removeInfantryFromArmy(cityID, planetID);
        removeTanksFromArmy(cityID, planetID);
        aircraftSelected = false;
        removeMarinesFromArmy(cityID, planetID);
        removeSpaceInfantryFromArmy(cityID, planetID);
        removeSpaceMarinesFromArmy(cityID, planetID);
      }
    } else if(planetID == 3) {
      
    } else if(planetID == 4) {
      
    }   
  }
}







// This function is called when the city interactions window is open and at least one of the buildings in the city
// have the word 'built' in them. This tells us that a building is being actively built on the player's screen and
// this function is called to find the planet, city, and building index of that structure which is being built so
// that the construction image can be updated every month in front of the player and they don't have to close or
// refresh the city window to see the timer ticking down on the building they are constructing
const updateImage = function(buildingArrayIndex, srcImage, cityID, planetIndex) {
  if (planetIndex == 1) {
    buildingModel = map1Cities[cityID].buildings[buildingArrayIndex];
    switch(buildingModel) {
      case 'built-in-12':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-12.png';
      break;
      case 'built-in-11':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-11.png';
      break;
      case 'built-in-10':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-10.png';
      break;
      case 'built-in-9':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-9.png';
      break;
      case 'built-in-8':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-8.png';
      break;
      case 'built-in-7':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-7.png';
      break;
      case 'built-in-6':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-6.png';
      break;
      case 'built-in-5':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-5.png';
      break;
      case 'built-in-4':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-4.png';
      break;
      case 'built-in-3':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-3.png';
      break;
      case 'built-in-2':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-2.png';
      break;
      case 'built-in-1':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-1.png';
      break;
      default:
      document.querySelector('.city-interaction').style.display = 'none';
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
      break;
    }
  } else if (planetIndex == 2) {
    buildingModel = map2Cities[cityID].buildings[buildingArrayIndex];
    switch(buildingModel) {
      case 'built-in-12':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-12.png';
      break;
      case 'built-in-11':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-11.png';
      break;
      case 'built-in-10':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-10.png';
      break;
      case 'built-in-9':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-9.png';
      break;
      case 'built-in-8':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-8.png';
      break;
      case 'built-in-7':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-7.png';
      break;
      case 'built-in-6':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-6.png';
      break;
      case 'built-in-5':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-5.png';
      break;
      case 'built-in-4':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-4.png';
      break;
      case 'built-in-3':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-3.png';
      break;
      case 'built-in-2':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-2.png';
      break;
      case 'built-in-1':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-1.png';
      break;
      default:
      document.querySelector('.city-interaction').style.display = 'none';
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
      break;
    }
  } else if (planetIndex == 3) {
    buildingModel = map3Cities[cityID].buildings[buildingArrayIndex];
    switch(buildingModel) {
      case 'built-in-12':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-12.png';
      break;
      case 'built-in-11':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-11.png';
      break;
      case 'built-in-10':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-10.png';
      break;
      case 'built-in-9':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-9.png';
      break;
      case 'built-in-8':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-8.png';
      break;
      case 'built-in-7':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-7.png';
      break;
      case 'built-in-6':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-6.png';
      break;
      case 'built-in-5':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-5.png';
      break;
      case 'built-in-4':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-4.png';
      break;
      case 'built-in-3':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-3.png';
      break;
      case 'built-in-2':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-2.png';
      break;
      case 'built-in-1':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-1.png';
      break;
      default:
      document.querySelector('.city-interaction').style.display = 'none';
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
      break;
    }
  } else {
    buildingModel = map4Cities[cityID].buildings[buildingArrayIndex];
    switch(buildingModel) {
      case 'built-in-12':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-12.png';
      break;
      case 'built-in-11':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-11.png';
      break;
      case 'built-in-10':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-10.png';
      break;
      case 'built-in-9':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-9.png';
      break;
      case 'built-in-8':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-8.png';
      break;
      case 'built-in-7':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-7.png';
      break;
      case 'built-in-6':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-6.png';
      break;
      case 'built-in-5':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-5.png';
      break;
      case 'built-in-4':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-4.png';
      break;
      case 'built-in-3':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-3.png';
      break;
      case 'built-in-2':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-2.png';
      break;
      case 'built-in-1':
        document.querySelector("#building-select-" + buildingArrayIndex + "").src = 'public/images/built-in-1.png';
      break;
      default:
      document.querySelector('.city-interaction').style.display = 'none';
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
      break;
    }
  }
}






const buildQueuePlusOneMap2 = function(processID) {
  map2BuildingProcess[processID].loop++;
  buildNumber = document.querySelector("#build-number").textContent;
  buildNumber++;
  document.querySelector("#build-number").textContent = buildNumber;
}



const buildQueuePlusFiveMap2 = function(processID) {
  map2BuildingProcess[processID].loop = map2BuildingProcess[processID].loop + 5;
  buildNumber = document.querySelector("#build-number").textContent;
  buildNumber = Number(buildNumber);
  buildNumber = buildNumber + 5;
  document.querySelector("#build-number").textContent = buildNumber;
}



const buildQueuePlusTenMap2 = function(processID) {
  map2BuildingProcess[processID].loop = map2BuildingProcess[processID].loop + 10;
  buildNumber = document.querySelector("#build-number").textContent;
  buildNumber = Number(buildNumber);
  buildNumber = buildNumber + 10;
  document.querySelector("#build-number").textContent = buildNumber;
}



const buildQueueMinusOneMap2 = function(processID) {
  map2BuildingProcess[processID].loop--;
  buildNumber = document.querySelector("#build-number").textContent;
  buildNumber--;
  document.querySelector("#build-number").textContent = buildNumber;
}





const showToolTip2 = function(building, title, image, description, buildingArrayIndex, cityID) {
  
  // This switch case assigns outputs and maintenance costs to buildings as displayed in the tooltip
  switch(building) {
    case 'port':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -' + portFixedCapital + ' <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'military-base':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -' + militaryBaseFixedEnergy + ' <img src="public/images/energyicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -' + militaryBaseFixedCapital + ' <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'power-plant-1':
      output = '<span class="maintenance-tip-string"> +5 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -1 <img src="public/images/oilicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.1 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'power-plant-2':
      output = '<span class="maintenance-tip-string"> +8 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -1 <img src="public/images/oilicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.1 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'metal-processing-plant-1':
      output = '<span class="maintenance-tip-string"> +1 <img src="public/images/processedmetalicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -0.5 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -1.5 <img src="public/images/metalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.4 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  case 'metal-processing-plant-2':
      output = '<span class="maintenance-tip-string"> +1 <img src="public/images/processedmetalicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -0.4 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -1.4 <img src="public/images/metalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.4 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  case 'mineral-processing-plant-1':
      output = '<span class="maintenance-tip-string"> +0.5 <img src="public/images/processedmineralicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -0.6 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -1.5 <img src="public/images/mineralicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.2 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  case 'mineral-processing-plant-2':
      output = '<span class="maintenance-tip-string"> +0.6 <img src="public/images/processedmineralicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -0.5 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -1.5 <img src="public/images/mineralicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.2 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  case 'mineral-processing-plant-3':
      output = '<span class="maintenance-tip-string"> +0.7 <img src="public/images/processedmineralicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -0.4 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -1.4 <img src="public/images/mineralicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.2 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  case 'nuclear-power-plant-1':
      output = '<span class="maintenance-tip-string"> +12 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -0.9 <img src="public/images/nuclearicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.8 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'nuclear-power-plant-2':
      output = '<span class="maintenance-tip-string"> +16 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -0.9 <img src="public/images/nuclearicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.6 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'nuclear-power-plant-3':
      output = '<span class="maintenance-tip-string"> +20 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
      maintenance = '<span class="maintenance-tip-string"> -0.8 <img src="public/images/nuclearicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.5 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'railgun-1':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -0.8 <img src="public/images/energyicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.9 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'railgun-2':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -0.8 <img src="public/images/energyicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.75 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'railgun-3':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -0.85 <img src="public/images/energyicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.6 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'missile-system-1':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -1.1 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.25 <img src="public/images/energyicon.png" class="building-res-icn"></span></span>';
    break;
  case 'missile-system-2':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -1 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.25 <img src="public/images/energyicon.png" class="building-res-icn"></span></span>';
    break;
  case 'missile-system-3':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -1 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.2 <img src="public/images/energyicon.png" class="building-res-icn"></span></span>';
    break;
  case 'orbital-launch-pad':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -' + orbitalLaunchPadFixedCapital + ' <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -' + orbitalLaunchPadFixedEnergy + ' <img src="public/images/energyicon.png" class="building-res-icn"></span></span>';
    break;
  // Skyhooks will not have a tooltip, you just click on them and they open up the build window right away
  case 'missile-silo':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -' + missileSiloFixedCapital + ' <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -' + missileSiloFixedEnergy + ' <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  case 'ground-defense-laser-1':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -0.4 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.4 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  case 'ground-defense-laser-2':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -0.5 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.6 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  case 'research-facility':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -' + researchFacilityFixedCapital + ' <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'ocean-rig':
      output = 'Allows <img src="public/images/oilicon.png" class="building-res-icn"> Extraction';
      maintenance = '<span class="maintenance-tip-string"> -0.8 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'space-elevator':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -' + spaceElevatorFixedCapital + ' <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -' + spaceElevatorFixedEnergy + ' <img src="public/images/energyicon.png" class="building-res-icn"></span>';
    break;
  }
  
  health = map2Cities[cityID].buildingHealth[buildingArrayIndex];
  
  document.querySelector('#tooltip-title').textContent = title;
  document.querySelector('#tooltip-image').src = image;
  document.querySelector('#tooltip-description').textContent = description;
  document.querySelector('#building-health').textContent = 'Health: ' + health;
  document.querySelector('#production-tip').innerHTML = output;
  document.querySelector('#maintenance-tip').innerHTML = maintenance;
  document.querySelector('#tooltip-text').style.visibility = 'visible';
}








const hideToolTip = function() {
  document.querySelector('#tooltip-text').style.visibility = 'hidden';
}







const closeBuildWindow = function() {
  document.querySelector(".build-window-div").style.display = "none";
}






const buildingCostToolTip = function(resourceArray, amountArray, time, bufferValue) {
  
  currentToolTipText = ``;
  
  let amountIndex = 0;
  resourceArray.forEach(function(resourceName) {
    switch(resourceName) {
        case 'capital':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/capitalicon.png">`;
        break;
        case 'oil':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/oilicon.png">`;
        break;
        case 'manpower':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/manpowericon.png">`;
        break;
        case 'minerals':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/mineralicon.png">`;
        break;
        case 'processed-minerals':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/processedmineralicon.png">`;
        break;
        case 'metal':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/metalicon.png">`;
        break;
        case 'processed-metal':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/processedmetalicon.png">`;
        break;
        case 'energy':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/energyicon.png">`;
        break;
        case 'precious-metal':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/preciousmetalicon.png">`;
        break;
        case 'nuclear-material':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/nuclearicon.png">`;
        break;
        case 'super-high-tensile-material':
          resourceIcon = `<img class="inline-build-window-resource" src="public/images/superhightensileicon.png">`;
        break;
      }
      currentToolTipText += `<p class="build-info-win">-` + amountArray[amountIndex] + ` ` + resourceIcon + `</p>`;
      amountIndex++;
      // this code will iterate through each resource passed to the function and swap the name of the resource with its icon,
      // as well as pulling the corresponding amount of the resource from the sister array
  });
    
    if (bufferValue === 1) {
      document.querySelector("#construct-res-tooltip").style.marginLeft = "160px";
    } else {
      document.querySelector("#construct-res-tooltip").style.marginLeft = "0%";
    }
    
   currentToolTipText += `<p class="build-info-win" style=" width: 100%; text-align: center;">` + time + ` Months</p>`;
  document.querySelector("#construct-res-tooltip").innerHTML = currentToolTipText;
  // after we have created tooltip text from the array passed to this function, we display the tooltip for the user to see
  document.querySelector("#construct-res-tooltip").style.display = "flex";
}





const moreBuildings2 = function(cityID) {
  
  currentOwnerID = map2Cities[cityID].ownerID;
  // we must determine who owns this city so that we can determine their technology level and then give them the ability
  // to construct the correct buildings
  
  if (countries[currentOwnerID].powerPlantLevel === 2) {
    powerPlantString = 'power-plant-2';
  } else {
    powerPlantString = 'power-plant-1';
  }
  // these strings will be inserted into the onclick functions below so that the correct building level is built
  
  if (countries[currentOwnerID].metalProcessingPlantLevel === 2) {
    metalPlantString = 'metal-processing-plant-2';
  } else {
    metalPlantString = 'metal-processing-plant-1';
  }
  
  if (countries[currentOwnerID].groundDefenseLaserLevel === 2) {
    groundDefenseButton = `<button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'ground-defense-laser-2')" onmouseover="buildingCostToolTip(
     ['processed-metal','processed-minerals','capital','energy'],[0.3,0.3,1.5,2],4,1)">Ground Defense Laser</button>`;
  } else if (countries[currentOwnerID].groundDefenseLaserLevel === 1) {
    groundDefenseButton = `<button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'ground-defense-laser-1')" onmouseover="buildingCostToolTip(
     ['processed-metal','processed-minerals','capital','energy'],[0.2,0.2,1.2,1],4,1)">Ground Defense Laser</button>`;
  } else {
    groundDefenseButton = ``;
  }
  
  if (countries[currentOwnerID].monthlyNuclearMaterial > 0.6) {
    if (countries[currentOwnerID].nuclearPowerPlantLevel === 3) {
      nuclearPlantString = 'nuclear-power-plant-3';
    } else if (countries[currentOwnerID].nuclearPowerPlantLevel === 2) {
      nuclearPlantString = 'nuclear-power-plant-2';
    } else {
      nuclearPlantString = 'nuclear-power-plant-1';
    }
    nuclearButtonText = `<button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, '` + nuclearPlantString + `')" onmouseover="buildingCostToolTip(
     ['processed-metal','processed-minerals','capital','energy'],[1.8,2.6,2.5,1.5],6,1)">Nuclear Power Plant</button>`;
  } else {
    nuclearButtonText = '';
  }
  
  if (countries[currentOwnerID].mineralProcessingPlantLevel === 3) {
    mineralPlantString = 'mineral-processing-plant-3';
  } else if (countries[currentOwnerID].mineralProcessingPlantLevel === 2) {
    mineralPlantString = 'mineral-processing-plant-2';
  } else {
    mineralPlantString = 'mineral-processing-plant-1';
  }
  
  if (countries[currentOwnerID].railgunLevel === 3) {
    railgunString = 'railgun-3';
  } else if (countries[currentOwnerID].railgunLevel === 2) {
    railgunString = 'railgun-2';
  } else {
    railgunString = 'railgun-1';
  }
  
  if (countries[currentOwnerID].missileSystemLevel === 3) {
    missileString = 'missile-system-3';
  } else if (countries[currentOwnerID].missileSystemLevel === 2) {
    missileString = 'missile-system-2';
  } else {
    missileString = 'missile-system-1';
  }
  
  if (countries[currentOwnerID].ICBMLevel > 0) {
    nuclearSiloButtonText = `<button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'missile-silo')" onmouseover="buildingCostToolTip(
    ['processed-metal','processed-minerals','capital','energy'],[1.5,2,3,1.2],9,1)">Nuclear Missile Silo</button>`;
  } else {
    nuclearSiloButtonText = ``;
  }
  
  if (map2Cities[cityID].isSeaStead) {
    rigBuildButton = `<button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'ocean-rig')" onmouseover="buildingCostToolTip(
     ['processed-metal','capital','energy'],[1.8,3.8,1.8],6,1)">Oil Rig</button>`;
  } else {
    rigBuildButton = ``;
  }
  
  if (countries[currentOwnerID].hasSpaceElevator) {
    if (map2Cities[cityID].isAsteroidHabitat) {
      spaceElevatorButton = ``;
    } else if (map2Cities[cityID].isSolarCylinder) {
      spaceElevatorButton = ``;
    } else {
      if (map2Cities[cityID].equatorial) {
        spaceElevatorButton = `<button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'space-elevator')" onmouseover="buildingCostToolTip(
        ['super-high-tensile-material','capital','energy','processed-metal'],[0.5,6,5.5,3],12,1)">Space Elevator</button>`;
        // Space Elevators can only be built if you have unlocked the Space Elevator Technology, and this city is not on an Asteroid
        // or a Solar Cylinder, and this city is near the equator. If you are on a planet or a moon you can build the Space Elevator
      }
    }
  } else {
    spaceElevatorButton = ``;
  }
  
  if (map2Cities[cityID].coastal) {
    portBuildButton = `<button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'port')" onmouseover="buildingCostToolTip(
    ['processed-metal','capital','energy'],[1.2,1.8,2],4,0)">Port</button>`;
  } else {
    portBuildButton = ``;
  }
  
  if (map2Cities[cityID].isRig) {
    document.querySelector(".build-btns-container").innerHTML = `<div id="construct-res-tooltip">
    </div>
    <div class="build-btn-grouper">
      <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'ocean-rig')" onmouseover="buildingCostToolTip(
      ['processed-metal','capital','energy'],[1.8,3.8,1.8],6,0)">Oil Rig</button>
    </div>`;
    document.querySelector(".build-window-image").src = "public/images/build-new.png";
    document.querySelector(".build-window-title").textContent = "Construct Oil Rig";
    document.querySelector(".build-window-div").style.display = "block";
  } else {
    document.querySelector(".build-btns-container").innerHTML = `<div id="construct-res-tooltip">
    </div>
    <div class="build-btn-grouper">
     ` + portBuildButton + `
     <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'military-base')" onmouseover="buildingCostToolTip(
     ['processed-metal','manpower','capital','energy'],[2,10000,1.5,1.5],4,0)">Military Base</button>
     </div>
     <div class="build-btn-grouper">
     <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, '` + powerPlantString + `')" onmouseover="buildingCostToolTip(
     ['processed-metal','processed-minerals','capital','energy'],[1,1.6,1.2,0.8],5,0)">Power Plant</button>
     <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, '` + metalPlantString + `')" onmouseover="buildingCostToolTip(
     ['processed-metal','processed-minerals','capital','energy'],[0.5,1.8,1.2,1],6,0)">Metal Plant</button>
     </div>
     <div class="build-btn-grouper">
     <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'orbital-launch-pad')" onmouseover="buildingCostToolTip(
     ['processed-metal','processed-minerals','capital','energy'],[0.5,1.5,2.2,2.5],6,0)">Orbital Launch Pad</button>
     <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, '` + mineralPlantString + `')" onmouseover="buildingCostToolTip(
     ['processed-metal','processed-minerals','capital','energy'],[1.5,0.6,1.5,1.4],6,0)">Mineral Plant</button>
     </div>
     <div class="build-btn-grouper">
     <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, '` + railgunString + `')" onmouseover="buildingCostToolTip(
     ['processed-metal','manpower','processed-minerals','capital','energy'],[1.2,400,0.4,2,2.4],8,0)">Railgun</button>
     <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, '` + missileString + `')" onmouseover="buildingCostToolTip(
     ['processed-metal','manpower','processed-minerals','capital','energy'],[0.6,600,1.2,1.8,1.4],6,0)">Missile System</button>
     </div>
     <div class="build-btn-grouper">
     ` + nuclearButtonText + `
     ` + nuclearSiloButtonText + `
     </div>
     <div class="build-btn-grouper">
     ` + groundDefenseButton + `
     ` + rigBuildButton + `
     </div>
     <div class="build-btn-grouper">
     <button class="build-window-btn" onclick="constructBuilding2(` + cityID + `, 'research-facility')" onmouseover="buildingCostToolTip(
     ['processed-metal','processed-minerals','capital','energy'],[0.4,0.8,5.2,1],9,1)">Research Facility</button>
     ` + spaceElevatorButton + `
     </div>`;
    
    
    document.querySelector(".build-window-image").src = "public/images/build-new.png";
    document.querySelector(".build-window-title").textContent = "More Buildings";
    document.querySelector(".build-window-div").style.display = "block";
    // lastly we want to make sure that the window is open, since this page can also be opened by the
    // 'BUILD' button in city view
  }
}






const constructBuilding2 = function(cityID, buildingModel) {
  if (map2Cities[cityID].buildings.length < map2Cities[cityID].buildingSlots) {
    // if the number of buildings currently in this city is smaller than the number of buildings allowed here, then allow
    // the player to construct a new building
    newBuildProcessID = map2BuildingProcessID + 1;
    // figure out how many build processes there are for this world, then add 1 to that.
    // this is the new ID for the new build process that wil be created.
    
    newBuildingIndex = map2Cities[cityID].buildings.length;
    // Because javascript arrays start at 0 instead of 1, we do not need to increment this value when we insert it into buildingArrayIndex
    
    switch(buildingModel) {
      case "ground-defense-laser-2":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'ground-defense-laser-2',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.3,0.3,1.5,2],
          "loop": 1,
          "monthsLeft": 4
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-4');
        // the building picture will be the number of months until construction is finished
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        // the owner of the building is the same as the one who owns the city
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        // the build process is equal to the new build process being created
        map2Cities[cityID].buildingHealth.push(1);
        // the Health will always be equal to 1 during construction
        
      break;
      case "ground-defense-laser-1":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'ground-defense-laser-1',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.2,0.2,1.2,1],
          "loop": 1,
          "monthsLeft": 4
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-4');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "nuclear-power-plant-3":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'nuclear-power-plant-3',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.8,2.6,2.5,1.5],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "nuclear-power-plant-2":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'nuclear-power-plant-2',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.8,2.6,2.5,1.5],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "nuclear-power-plant-1":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'nuclear-power-plant-1',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.8,2.6,2.5,1.5],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "missile-silo":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'missile-silo',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.5,2,3,1.2],
          "loop": 1,
          "monthsLeft": 9
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-9');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break; 
      case "ocean-rig":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'ocean-rig',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','capital','energy'],
          "maintenanceAmount": [1.8,3.8,1.8],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "space-elevator":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'space-elevator',
          "outputAmount": 1,
          "maintenanceMaterial": ['super-high-tensile-material','capital','energy','processed-metal'],
          "maintenanceAmount": [0.5,6,5.5,3],
          "loop": 1,
          "monthsLeft": 12
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-12');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "port":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'port',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','capital','energy'],
          "maintenanceAmount": [1.2,1.8,2],
          "loop": 1,
          "monthsLeft": 4
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-4');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "military-base":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'military-base',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','manpower','capital','energy'],
          "maintenanceAmount": [2,10000,1.5,1.5],
          "loop": 1,
          "monthsLeft": 4
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-4');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "power-plant-2":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'power-plant-2',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1,1.6,1.2,0.8],
          "loop": 1,
          "monthsLeft": 5
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-5');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "power-plant-1":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'power-plant-1',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1,1.6,1.2,0.8],
          "loop": 1,
          "monthsLeft": 5
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-5');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break; 
      case "metal-processing-plant-2":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'metal-processing-plant-2',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.5,1.8,1.2,1],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "metal-processing-plant-1":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'metal-processing-plant-1',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.5,1.8,1.2,1],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "orbital-launch-pad":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'orbital-launch-pad',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.5,1.5,2.2,2.5],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "mineral-processing-plant-3":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'mineral-processing-plant-3',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.5,0.6,1.5,1.4],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "mineral-processing-plant-2":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'mineral-processing-plant-2',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.5,0.6,1.5,1.4],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "mineral-processing-plant-1":
      
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'mineral-processing-plant-1',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.5,0.6,1.5,1.4],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "railgun-3":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'railgun-3',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','manpower','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.2,400,0.4,2,2.4],
          "loop": 1,
          "monthsLeft": 8
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-8');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "railgun-2":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'railgun-2',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','manpower','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.2,400,0.4,2,2.4],
          "loop": 1,
          "monthsLeft": 8
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-8');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "railgun-1":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'railgun-1',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','manpower','processed-minerals','capital','energy'],
          "maintenanceAmount": [1.2,400,0.4,2,2.4],
          "loop": 1,
          "monthsLeft": 8
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-8');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "missile-system-3":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'missile-system-3',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','manpower','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.6,600,1.2,1.8,1.4],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "missile-system-2":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'missile-system-2',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','manpower','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.6,600,1.2,1.8,1.4],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "missile-system-1":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'missile-system-1',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','manpower','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.6,600,1.2,1.8,1.4],
          "loop": 1,
          "monthsLeft": 6
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-6');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
      case "research-facility":
        
        newBuildProcess = {
          "id": newBuildProcessID,
          "city": cityID,
          "buildingArrayIndex": newBuildingIndex,
          "virus": 0,
          "destroyed": false,
          "active": true,
          "targetCity": undefined,
          "damageType": '',
          "damageAmount": 0,
          "range": 0,
          "tracking": 0,
          "outputMaterial": 'research-facility',
          "outputAmount": 1,
          "maintenanceMaterial": ['processed-metal','processed-minerals','capital','energy'],
          "maintenanceAmount": [0.4,0.8,5.2,1],
          "loop": 1,
          "monthsLeft": 9
        };
        currentOwnerID = map2Cities[cityID].ownerID;
        map2Cities[cityID].buildings.push('built-in-9');
        map2Cities[cityID].buildingOwner.push(currentOwnerID);
        map2Cities[cityID].buildingProcess.push(newBuildProcessID);
        map2Cities[cityID].buildingHealth.push(1);
        
      break;
    }
    
    // here we will construct the new build process so our new building gets made
    
    map2BuildingProcess.push(newBuildProcess);
    // then down here we push that new build process into the map2BuildingProcess array, thus making our newly
    // constructed process accessible
    
    countries[currentOwnerID].buildingProcess2.push(newBuildProcessID);
    // finally we add the build process to the list of build processes to be executed for this country
    // at the end of the month
    map2BuildingProcessID = newBuildProcessID;
    // and lastly we update the planet's build process id so that next time we are starting from the right number
    closeBuildWindow();
    document.querySelector(".city-interaction").style.display = "none";
    document.querySelector('.unit-interaction').style.display = 'none';
    document.querySelector(".unit-move-interaction-land").style.display = "none";
    document.querySelector(".unit-move-interaction-air").style.display = "none";
    document.querySelector(".unit-move-interaction-naval").style.display = "none";
  }
}






const buildingDestroy2 = function(cityID, buildingArrayIndex, buildingProcessID, userDestroyed) {
  buildingModel = map2Cities[cityID].buildings[buildingArrayIndex];
  // determine what country owns this city
  if (buildingModel == 'military-base') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingEnergyExpense = (countries[currentOwner].buildingEnergyExpense - militaryBaseFixedEnergy);
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - militaryBaseFixedCapital);
  } else if (buildingModel == 'missile-silo') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingEnergyExpense = (countries[currentOwner].buildingEnergyExpense - missileSiloFixedEnergy);
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - missileSiloFixedCapital);
    map2Cities[cityID].ICBMs.forEach(function(ICBMID) {
      ICBMUnits[ICBMID].isDead = true;
      // make all of the ICBMs in this city be dead so the country no longer
      // has to pay maintenance and we can ignore these objects
    });
    map2Cities[cityID].ICBMs = [];
    // no more ICBMs are left in this city
  } else if (buildingModel == 'port') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - portFixedCapital);
    countries[currentOwner].numberOfPorts = countries[currentOwner].numberOfPorts - 1;
  } else if (buildingModel == 'space-elevator') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingEnergyExpense = (countries[currentOwner].buildingEnergyExpense - spaceElevatorFixedEnergy);
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - spaceElevatorFixedCapital);
    countries[currentOwner].numberOfSpaceElevators = countries[currentOwner].numberOfSpaceElevators - 1;
  } else if (buildingModel == 'orbital-launch-pad') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingEnergyExpense = (countries[currentOwner].buildingEnergyExpense - orbitalLaunchPadFixedEnergy);
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - orbitalLaunchPadFixedCapital);
  } else if (buildingModel == 'research-facility') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - researchFacilityFixedCapital);
    countries[currentOwner].numberOfResearchFacilities = countries[currentOwner].numberOfResearchFacilities - 1;
  }
  // if a building the produces units and also has fixed expenses base was destroyed, erase the fixed expenses
  // from that county's total energy and capital expenses
  
  // if a port was destroyed, erase the fixed expenses from that county's total capital expenses
  map2Cities[cityID].buildings.splice(buildingArrayIndex, 1);
  map2Cities[cityID].buildingOwner.splice(buildingArrayIndex, 1);
  map2Cities[cityID].buildingProcess.splice(buildingArrayIndex, 1);
  map2Cities[cityID].buildingHealth.splice(buildingArrayIndex, 1);
  map2BuildingProcess[buildingProcessID].destroyed = true;
  currentCountryID = map2Cities[cityID].ownerID;
  for( i = 0; i < countries[currentCountryID].buildingProcess2.length; i++){ 
    if ( countries[currentCountryID].buildingProcess2[i] === buildingProcessID) { 
      countries[currentCountryID].buildingProcess2.splice(i, 1);
      // here we are finding the building process inside of this country's building processes to be run
      // then once we find the building process we delete it
    }
  }
  if (userDestroyed) {
    // determine if the destroy button in the build window was pressed or if this building was destroyed by an enemy
    document.querySelector(".build-window-div").style.display = "none";
    document.querySelector(".city-interaction").style.display = "none";
    document.querySelector('.unit-interaction').style.display = 'none';
    document.querySelector(".unit-move-interaction-land").style.display = "none";
    document.querySelector(".unit-move-interaction-air").style.display = "none";
    document.querySelector(".unit-move-interaction-naval").style.display = "none";
  }
}






const buildingUpgrade2 = function(cityID, buildingArrayIndex, buildingModel, buildingProcessID) {
  switch(buildingModel) {
    case 'power-plant-1':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 50;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'power-plant-2';
      map2Cities[cityID].buildingHealth[buildingArrayIndex] = 140;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[currentProcessID].outputAmount = 8;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'metal-processing-plant-1':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 45;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'metal-processing-plant-2';
      map2Cities[cityID].buildingHealth[buildingArrayIndex] = 180;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[currentProcessID].maintenanceAmount[0] = 0.4;
      // level 2 metal processing facilities use lass capital and raw metal, so we are reducing both of these here
      map2BuildingProcess[currentProcessID].maintenanceAmount[1] = 1.4;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'mineral-processing-plant-1':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 40;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'mineral-processing-plant-2';
      map2Cities[cityID].buildingHealth[buildingArrayIndex] = 120;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[currentProcessID].outputMaterial = 'processed-minerals';
      map2BuildingProcess[currentProcessID].outputAmount = 0.6;
      map2BuildingProcess[currentProcessID].maintenanceMaterial = ['capital','minerals','energy']; 
      map2BuildingProcess[currentProcessID].maintenanceAmount = [0.4,1.4,0.2]; 
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'mineral-processing-plant-2':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 55;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'mineral-processing-plant-3';
      map2Cities[cityID].buildingHealth[buildingArrayIndex] = 140;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[currentProcessID].outputAmount = 0.7;
      map2BuildingProcess[currentProcessID].maintenanceAmount[0] = 0.4;
      map2BuildingProcess[currentProcessID].maintenanceAmount[1] = 1.4;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'nuclear-power-plant-1':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 75;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'nuclear-power-plant-2';
      map2Cities[cityID].buildingHealth[buildingArrayIndex] = 185;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[currentProcessID].outputAmount = 16;
      map2BuildingProcess[currentProcessID].maintenanceAmount[1] = 0.6;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'nuclear-power-plant-2':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 100;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'nuclear-power-plant-3';
      map2Cities[cityID].buildingHealth[buildingArrayIndex] = 220;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[currentProcessID].outputAmount = 20;
      map2BuildingProcess[currentProcessID].maintenanceAmount[0] = 0.8;
      map2BuildingProcess[currentProcessID].maintenanceAmount[1] = 0.5;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'railgun-1':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 50;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'railgun-2';
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[buildingProcessID].damageAmount = 130;
      map2BuildingProcess[buildingProcessID].tracking = 0.06;
      map2BuildingProcess[buildingProcessID].range = 220;
      map2BuildingProcess[currentProcessID].maintenanceAmount[1] = 0.75;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'railgun-2':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 80;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'railgun-3';
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[buildingProcessID].damageAmount = 160;
      map2BuildingProcess[buildingProcessID].tracking = 0.1;
      map2BuildingProcess[buildingProcessID].range = 260;
      map2BuildingProcess[currentProcessID].maintenanceAmount[0] = 0.85;
      map2BuildingProcess[currentProcessID].maintenanceAmount[1] = 0.6;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'missile-system-1':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 50;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'missile-system-2';
      map2BuildingProcess[buildingProcessID].damageAmount = 140;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[buildingProcessID].tracking = 0.1;
      map2BuildingProcess[buildingProcessID].range = 150;
      map2BuildingProcess[currentProcessID].maintenanceAmount[0] = 1;
      map2BuildingProcess[currentProcessID].maintenanceAmount[2] = 0.03;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'missile-system-2':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 80;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'missile-system-3';
      map2BuildingProcess[buildingProcessID].damageAmount = 160;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[buildingProcessID].tracking = 0.12;
      map2BuildingProcess[buildingProcessID].range = 180;
      map2BuildingProcess[currentProcessID].maintenanceAmount[2] = 0.02;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  case 'ground-defense-laser-1':
      currentCountryID = map2Cities[cityID].ownerID;
      countries[currentCountryID].capitalStored = countries[currentCountryID].capitalStored - 40;
      document.querySelector("#country-capital-amount").textContent = countries[currentCountryID].capitalStored;
      map2Cities[cityID].buildings[buildingArrayIndex] = 'ground-defense-laser-2';
      map2Cities[cityID].buildingHealth[buildingArrayIndex] = 50;
      map2BuildingProcess[buildingProcessID].damageAmount = 1000;
      currentProcessID = map2Cities[cityID].buildingProcess[buildingArrayIndex];
      map2BuildingProcess[buildingProcessID].tracking = 0.35;
      map2BuildingProcess[currentProcessID].maintenanceAmount[0] = 0.5;
      map2BuildingProcess[currentProcessID].maintenanceAmount[1] = 0.6;
      document.querySelector(".build-window-div").style.display = "none";
      document.querySelector(".city-interaction").style.display = "none";
      document.querySelector('.unit-interaction').style.display = 'none';
      document.querySelector(".unit-move-interaction-land").style.display = "none";
      document.querySelector(".unit-move-interaction-air").style.display = "none";
      document.querySelector(".unit-move-interaction-naval").style.display = "none";
    break;
  }
}






const manipulateBuildingProcess2 = function(buildProcessID, outputMat, outputAmount, mainMat, mainAmount, buildTime, mineralPlant) {
  // Add a 'Cancel Production button' and force the user to cancel current production, wipe the build process
  // and remove the build process from the country build process list. All of this must be done before the user
  // can be allowed to start a new build process, otherwise, pop up some kind of message saying they can't build
  if (mineralPlant == 1) {
    map2BuildingProcess[buildProcessID].outputMaterial = outputMat;
    map2BuildingProcess[buildProcessID].outputAmount = outputAmount;
    map2BuildingProcess[buildProcessID].maintenanceMaterial = mainMat;
    map2BuildingProcess[buildProcessID].maintenanceAmount = mainAmount;
    map2BuildingProcess[buildProcessID].monthsLeft = buildTime;
    map2BuildingProcess[buildProcessID].loop = 1;
    // set the build process to produce the thing we want at the price determined by information passed in from the onclick
    countryID = map2Cities[map2BuildingProcess[buildProcessID].city].ownerID;
    // find the country by determing the city and then the owner of the city
    document.querySelector(".build-window-div").style.display = "none";
    // finally close the build window
  } else {
    if (map2BuildingProcess[buildProcessID].outputMaterial == '') {
      map2BuildingProcess[buildProcessID].outputMaterial = outputMat;
      map2BuildingProcess[buildProcessID].outputAmount = outputAmount;
      map2BuildingProcess[buildProcessID].maintenanceMaterial = mainMat;
      map2BuildingProcess[buildProcessID].maintenanceAmount = mainAmount;
      map2BuildingProcess[buildProcessID].monthsLeft = buildTime;
      map2BuildingProcess[buildProcessID].loop = 1;
      // set the build process to produce the thing we want at the price determined by information passed in from the onclick
      countryID = map2Cities[map2BuildingProcess[buildProcessID].city].ownerID;
      // find the country by determing the city and then the owner of the city
      isCurrentBuildProcess = false;
      for( i = 0; i < countries[countryID].buildingProcess2.length; i++){ 
        if (countries[countryID].buildingProcess2[i] === buildProcessID) {
          isCurrentBuildProcess = true;
        }
      }
      if (!isCurrentBuildProcess) {
        countries[countryID].buildingProcess2.push(buildProcessID);
        // If the current build process for this building is not currently and actively being worked
        // on by this country (ie it is in the Country's build queue) then add this new build process
        // to the country's build process queue for this planet
      }
      document.querySelector(".build-window-div").style.display = "none";
      // finally close the build window
    }
  }
}







const activateBuildingProcess2 = function(buildProcessID, activeStatus) {
  if (activeStatus == 0) {
    map2BuildingProcess[buildProcessID].active = false;
    // if a building is being de-activated, set it to inactive
    document.querySelector(".build-info-active").style.color = "red";
    document.querySelector(".build-info-active").textContent = "De-actived";
  } else if (activeStatus == 1) {
    map2BuildingProcess[buildProcessID].active = true;
    // if a building is being re-activated, set it to active
    document.querySelector(".build-info-active").style.color = "green";
    document.querySelector(".build-info-active").textContent = "Active";
  }
}







const cancelProduction2 = function(buildProcessID, buildingOwner) {
  map2BuildingProcess[buildProcessID].outputMaterial = "";
  map2BuildingProcess[buildProcessID].outputAmount = 1;
  map2BuildingProcess[buildProcessID].maintenanceMaterial = [];
  map2BuildingProcess[buildProcessID].maintenanceAmount = [];
  map2BuildingProcess[buildProcessID].loop = 1;
  map2BuildingProcess[buildProcessID].monthsLeft = 1;
  // after setting the build process to a default, empty object, we must then find the build process id in this
  // country's build array,a nd remove the id so the code no longer attempts to build from there. Failure to do
  // this could mean that we this building is selected to build again, its build process shows up twice
  // in the build array meaning it will build twice as fast and for double the resources
  for( i = 0; i < countries[buildingOwner].buildingProcess2.length; i++){ 
    if ( countries[buildingOwner].buildingProcess2[i] === buildProcessID) { 
      countries[buildingOwner].buildingProcess2.splice(i, 1);
    }
  }
  document.querySelector(".build-maintenance-div").innerHTML = "";
  document.querySelector(".build-output-div"). innerHTML = `<p class="build-info-win">+1 </p>
                                                            <p class="build-info-win">(1) Months</p>`;
}






const showProvince = function(cityID, provID) {
  alert(map2Provinces[provID].id);
}
