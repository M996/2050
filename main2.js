// Here we are beginning by laying out our main map for world 2 on our canvas

const mainCanvas2 = new fabric.Canvas('main-world-2-canvas', {
    height: 4144,
    width: 7200,
});
mainCanvas2.renderAll();
// first we must designate the canvas as being equal to a canvas element in our HTML by selecting an ID, then we set its height and width
// in this case, we want the height and width to be equal to the height and width of the actual images we will be working with.

fabric.Image.fromURL('maps/game-map-2-full-size.png', (mainImg2) => {
    mainCanvas2.backgroundImage = mainImg2;
    mainCanvas2.renderAll();
})
// now we will pull an image from a URL (relative or absolute) then set that image as  the background of our canvas, and re-render the
// entire canvas.

mainCanvas2.renderOnAddRemove = false;
// disabling this option will stop the canvas from re-rendering every time a new shape is added or removed
// setting .objectCaching could also increase performance but may cause other difficulties so it is not currently
// being done, disabling /objectCaching in the future could be experimented with

labelNumber = 0;

citySelector = new fabric.Circle({
  left: 0,
  top: 0,
  fill: 'grey',
  stroke: 'rgb(24,18,99)',
  strokeWidth: 3,
  radius: 10,
  selectable: false
});

mainCanvas2.add(citySelector);

// the city selector, is the circle that appears over any city you click on, on the map, so you don't lose your place.


 map2Cities.forEach(function(city) {
    const cityDots = new fabric.Circle({
        radius: 5,
        left: city.xpos,
        top: city.ypos,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
        selectable: false,
        hoverCursor: 'pointer',
        __uid: city.id
    });
    cityLabelText = ' ' + city.name + ' ';
     window["cityLabels"+labelNumber]= new fabric.Text(cityLabelText, {
      textBackgroundColor: 'rgba(40,40,40,0.8)',
      left: (city.xpos - 12),
      top: (city.ypos - 20),
      fontSize: 16,
      fill: 'white',
      textAlign: 'center',
      selectable: false,
    });
    cityDots.on('mouseover', function() {
     mainCanvas2.add(window["cityLabels"+city.id]);
     mainCanvas2.requestRenderAll();
    });
    cityDots.on('mouseout', function() {
     mainCanvas2.remove(window["cityLabels"+city.id]);
     mainCanvas2.requestRenderAll();
    });
    labelNumber++;
    
    // below we will create an event listener so that when any city is clicked, the city interactions window pops up with all
    // relevant information for that city.
    cityDots.on('mouseup', function() {
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
        
        if (city.combatDefendingInfantry.length > 0 || city.combatDefendingMarines.length > 0 || city.combatDefendingGuerrillas.length > 0
        || city.combatDefendingSpaceInfantry.length > 0 || city.combatDefendingSpaceMarines.length > 0 || city.combatDefendingTanks.length > 0) {
         
         document.querySelector('.city-combat-screen').style.display = 'flex';
         
        }
        // if any units are actively defending this city then
        
        // Here we have to figure out what units are currently positioned in this city before we open the unit interactions window
        
        // figure out what units are positioned in the city
        
        document.querySelector(".unit-interaction").style.display = "flex";
        // this cuases the unit view for that city to display
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
    });
    mainCanvas2.add(cityDots);
    // we have now rendered every single city, and can display the cities full stats when you click on them, add them to the canvas!
    
});
// each city created should be a circle 4 pixels in radius, white inside, black border, which cannot be selected and dragged around
// the screen, and contains a unique id matching it up to its counterpart in cities.js


