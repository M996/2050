// Weaponized Buildings ===============================================================================================================

// weaponized buildings first check to see if they are targeting cities, in which case they shoot a city they have already been
// designated to target.

// Then they check to see if they are targeting enemy armies. If so, they run through the list of all
// currently active enemy armies and compare the 'xpos' value of each army to the 'xpos' of the city they are in. If the difference
// between the two values is less than the 'range' property on the building process of that building and the same is true for the
// 'ypos' values, then the enemy army is within range. Next check if the province ID the enemy army is in, is the same as a land
// neighbor or coastal neighbor of the province the building is in. If it is, then this building has line of sight to the enemy army.
// The building will then shoot it, and stop checking for more armies within range since it has been expended this month.

// If the building is not set to target cities or armies, it must be set to target orbital units. In this case, it will choose
// a random enemy space fleet if one exists, and attempt to a unit within it with one shot. The likelihood of this succedding
// is dependent upon the 'tracking' property of the building process minus enemy 'taskShipEvasion' property plus 1.


selectedWeaponizedBuilding2 = undefined;
// This variable is the process id for this planet that the player last clicked on containing a building
// capable of targeting other cities to attack. Once the player clicks on 'Target City' in the build window
// this variable will change to contain the build process for the building they selected, when they ctrl + click
// on a city it will then set that build process, and thus that building (for instance railgun) to target
// that city.
weaponRangeCircle = new fabric.Circle({
    color: 'transparent'
});
//create a default invisible circle so that something always gets erased when the range circle is created
const targetCities2 = function(buildProcessID) {
  selectedWeaponizedBuilding2 = map2BuildingProcess[buildProcessID].id;
  document.querySelector('.build-btns-container').innerHTML = `<p class="target-building-info-text">Now 'Ctrl + Click' on a city within
  targeting range of this building.
  <br>
  When war is declared, this building will auto-attack buildings within that city.</p>
  <br>
  <button class="build-win-control-close" onclick="closeBuildWindow()">Close & Target</button>`;
  
  // make it so a green transparent circle pops up showing the effective range of this weapon
  weaponMaxRange = map2BuildingProcess[buildProcessID].range;
  firingCityID = map2BuildingProcess[buildProcessID].city;
  circleLeftPos = map2Cities[firingCityID].xpos - weaponMaxRange;
  circleTopPos = map2Cities[firingCityID].ypos - weaponMaxRange;
  
  mainCanvas2.remove(weaponRangeCircle);
  // if the range circle still exists from the last time they tried to target, erase it.
  
  weaponRangeCircle = new fabric.Circle({
        radius: weaponMaxRange,
        left: circleLeftPos,
        top: circleTopPos,
        fill: 'green',
        stroke: 'rgba(0,255,0,0.1)',
        strokeWidth: 5,
        opacity: 0.4,
        hoverCursor: 'mouse',
        selectable: false,
    });
  
  mainCanvas2.add(weaponRangeCircle);
  weaponRangeCircle.sendToBack();
  mainCanvas2.requestRenderAll();
  // after creating the range circle in fabric, we first set it's z-index below all of the cities so it is under them,
  // then render it to the screen in the next animation frame using requestRenderAll()
}
const selectTargetCity2 = function(cityID) {
    
    targetedCityName = map2Cities[cityID].name;
    targetingWeaponRange = map2BuildingProcess[selectedWeaponizedBuilding2].range;
    targetingCityID = map2BuildingProcess[selectedWeaponizedBuilding2].city;
    targetingCityXPOS = map2Cities[targetingCityID].xpos;
    targetedCityXPOS = map2Cities[cityID].xpos;
    // determine the distance one city is from another in absolute terms on the x axis of the canvas
    absoluteCityDistanceX = Math.abs(targetingCityXPOS - targetedCityXPOS);
    
    if (absoluteCityDistanceX <= targetingWeaponRange) {
        targetingCityYPOS = map2Cities[targetingCityID].ypos;
        targetedCityYPOS = map2Cities[cityID].ypos;
        // determine the distance one city is from another in absolute terms on the y axis of the canvas
        absoluteCityDistanceY = Math.abs(targetingCityYPOS - targetedCityYPOS);
        
        if (absoluteCityDistanceY <= targetingWeaponRange) {
            // we have now determined that the city being targeted is less distance away from the targeting city than the maximum
            // range of the weapon, both forwards and backwards in both the x and y axis, that means we can now target that city
            map2BuildingProcess[selectedWeaponizedBuilding2].targetCity = cityID;
            targetingCityName = map2Cities[map2BuildingProcess[selectedWeaponizedBuilding2].city].name;
            newCityTargeting(targetedCityName, targetingCityName);
            // come back here later and make it so that a window pops up upon targeting a city giving some kind of confirmation the
            // city has been targeted and telling which building will now target it.
        } else {
            cancelCityTargeting(targetedCityName);
        }
        
    } else {
        cancelCityTargeting(targetedCityName);
    }
    
  
  mainCanvas2.remove(weaponRangeCircle);
  weaponRangeCircle = new fabric.Circle({
    color: 'transparent'
  });
  // return the weaponRangeCircle to being invisible
  
}



const targetEnemyArmies2 = function(buildProcessID) {
  map2BuildingProcess[buildProcessID].targetCity = undefined;
  // setting the target city to undefined will tell the building to attack enemy armies within both range and visibility
  mainCanvas2.remove(weaponRangeCircle);
  weaponRangeCircle = new fabric.Circle({
    color: 'transparent'
  });
  // remove the targeting circle from the screen in case it is there currently
    closeBuildWindow();
}




const targetEnemySpace2 = function(buildProcessID) {
  map2BuildingProcess[buildProcessID].targetCity = -1;
  // setting the target city to -1 will tell the building to attack enemy space fleets
  mainCanvas2.remove(weaponRangeCircle);
  weaponRangeCircle = new fabric.Circle({
    color: 'transparent'
  });
  // remove the targeting circle from the screen in case it is there currently
    closeBuildWindow();
}




const cancelCityTargeting = function(targetedCity) {
    document.querySelector('#weapon-non-targeted-city').textContent = targetedCity;
    document.querySelector('.city-target-unable').style.display = 'block';
    document.querySelector('.city-target-info').style.display = 'none';
    document.querySelector('.city-target-confirmation-window').style.display = 'flex';
}




const newCityTargeting = function(targetedCity, targetingCity) {
    document.querySelector('#weapon-targeted-city').textContent = targetedCity;
    document.querySelector('#weapon-targeting-city').textContent = targetingCity;
    document.querySelector('.city-target-unable').style.display = 'none';
    document.querySelector('.city-target-info').style.display = 'block';
    document.querySelector('.city-target-confirmation-window').style.display = 'flex';
}




const closeTargetingWindow = function() {
    document.querySelector('.city-target-confirmation-window').style.display = 'none';
}
