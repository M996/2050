



infantrySelected = false;
tankSelected = false;
aircraftSelected = false;
destroyerSelected = false;
marineSelected = false;
submarineSelected = false;
carrierSelected = false;
taskShipSelected = false;
spaceInfantrySelected = false;
spaceMarineSelected = false;



const openMoveArmiesWindow = function() {
    
    if (infantrySelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            infantryUnitAmount = map2Cities[cityID].infantry.length;
            document.querySelector("#unit-move-infantry-slider").max = infantryUnitAmount;
            document.querySelector("#unit-move-infantry-slider").value = infantryUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-infantry").style.display = "flex";
    }
    
    if (tankSelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            tankUnitAmount = map2Cities[cityID].tanks.length;
            document.querySelector("#unit-move-tank-slider").max = tankUnitAmount;
            document.querySelector("#unit-move-tank-slider").value = tankUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-tank").style.display = "flex";
    }
    
    if (aircraftSelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            planeUnitAmount = map2Cities[cityID].planes.length;
            document.querySelector("#unit-move-aircraft-slider").max = planeUnitAmount;
            document.querySelector("#unit-move-aircraft-slider").value = planeUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-aircraft").style.display = "flex";
    }
    
    if (destroyerSelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            destroyerUnitAmount = map2Cities[cityID].destroyers.length;
            document.querySelector("#unit-move-destroyer-slider").max = destroyerUnitAmount;
            document.querySelector("#unit-move-destroyer-slider").value = destroyerUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-destroyer").style.display = "flex";
    }
    
    if (marineSelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            marineUnitAmount = map2Cities[cityID].marines.length;
            document.querySelector("#unit-move-marine-slider").max = marineUnitAmount;
            document.querySelector("#unit-move-marine-slider").value = marineUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-marines").style.display = "flex";
    }
    
    if (submarineSelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            submarineUnitAmount = map2Cities[cityID].submarines.length;
            document.querySelector("#unit-move-submarines-slider").max = submarineUnitAmount;
            document.querySelector("#unit-move-submarines-slider").value = submarineUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-submarine").style.display = "flex";
    }
    
    if (carrierSelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            carrierUnitAmount = map2Cities[cityID].aircraftCarriers.length;
            document.querySelector("#unit-move-carrier-slider").max = carrierUnitAmount;
            document.querySelector("#unit-move-carrier-slider").value = carrierUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-carrier").style.display = "flex";
    }
    
    if (taskShipSelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            taskShipUnitAmount = map2Cities[cityID].taskShips.length;
            document.querySelector("#unit-move-task-ship-slider").max = taskShipUnitAmount;
            document.querySelector("#unit-move-task-ship-slider").value = taskShipUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-task-ship").style.display = "flex";
    }
    
    if (spaceInfantrySelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            spaceInfantryUnitAmount = map2Cities[cityID].spaceInfantry.length;
            document.querySelector("#unit-move-space-infantry-slider").max = spaceInfantryUnitAmount;
            document.querySelector("#unit-move-space-infantry-slider").value = spaceInfantryUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-space-infantry").style.display = "flex";
    }
    
    if (spaceMarineSelected) {
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            spaceMarineUnitAmount = map2Cities[cityID].spaceMarines.length;
            document.querySelector("#unit-move-space-marines-slider").max = spaceMarineUnitAmount;
            document.querySelector("#unit-move-space-marines-slider").value = spaceMarineUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-space-marines").style.display = "flex";
    }
    
    
    document.querySelector(".unit-move-interaction").style.display = "flex";
}




cityInfantryAmount = 0;
cityTankAmount = 0;
cityAircraftAmount = 0;
cityDestroyerAmount = 0;
cityMarineAmount = 0;
citySubmarineAmount = 0;
cityCarrierAmount = 0;
cityTaskShipAmount = 0;
citySpaceInfantryAmount = 0;
citySpaceMarineAmount = 0;

function iterateMarineAmount(marineID) {
    currentManpower = marineUnits[marineID].currentManpower;
    cityMarineAmount = cityMarineAmount + currentManpower;
}

function iterateDestroyerAmount(destroyerID) {
    currentManpower = destroyerUnits[destroyerID].currentManpower;
    currentAmount = currentManpower / 2000;
    // destroyers have a maximum of 4 ships per unit, and 8000 manpower per unit
    currentAmount = Math.round(currentAmount);
    if (currentAmount == 0) {
        currentAmount = 1;
    }
    cityDestroyerAmount = cityDestroyerAmount + currentAmount;
}

function iterateSubmarineAmount(submarineID) {
    currentManpower = submarineUnits[submarineID].currentManpower;
    currentAmount = currentManpower / 1500;
    // submarines have a maximum of 2 ships per unit, and 6000 manpower per unit
    currentAmount = Math.round(currentAmount);
    if (currentAmount == 0) {
        currentAmount = 1;
    }
    citySubmarineAmount = citySubmarineAmount + currentAmount;
}

function iterateSpaceInfantryAmount(spaceInfantryID) {
    currentManpower = spaceInfantryUnits[spaceInfantryID].currentManpower;
    citySpaceInfantryAmount = citySpaceInfantryAmount + currentManpower;
}

function iterateSpaceMarineAmount(spaceMarineID) {
    currentManpower = spaceMarineUnits[spaceMarineID].currentManpower;
    citySpaceMarineAmount = citySpaceMarineAmount + currentManpower;
}

function iterateInfantryAmount(infantryID) {
    currentManpower = infantryUnits[infantryID].currentManpower;
    cityInfantryAmount = cityInfantryAmount + currentManpower;
}

function iterateTankAmount(tankID) {
    currentManpower = tankUnits[tankID].currentManpower;
    currentAmount = currentManpower / 40;
    // destroyers have a maximum of 4 ships per unit, and 8000 manpower per unit
    currentAmount = Math.round(currentAmount);
    if (currentAmount == 0) {
        currentAmount = 1;
    }
    cityTankAmount = cityTankAmount + currentAmount;
}



const controlMilitaryIntelligence = function() {
    document.querySelector("#move-army").style.display = "block";
    document.querySelector("#land-unit-group").setAttribute("onclick","displayLandArmies()");
    document.querySelector("#naval-unit-group").setAttribute("onclick","displayNavalFleets()");
    document.querySelector("#space-unit-group").setAttribute("onclick","displaySpaceFleets()");
    // The player can now see all military units in this city
    infantrySelected = false;
    tankSelected = false;
    aircraftSelected = false;
    destroyerSelected = false;
    marineSelected = false;
    submarineSelected = false;
    carrierSelected = false;
    taskShipSelected = false;
    spaceInfantrySelected = false;
    spaceMarineSelected = false;
    // we are opening a new city, so make sure no units are selected any longer
    document.querySelector("#unit-move-infantry-slider").value = 0;
    document.querySelector("#unit-move-tank-slider").value = 0;
    document.querySelector("#unit-move-aircraft-slider").value = 0;
    document.querySelector("#unit-move-destroyer-slider").value = 0;
    document.querySelector("#unit-move-marines-slider").value = 0;
    document.querySelector("#unit-move-submarines-slider").value = 0;
    document.querySelector("#unit-move-carrier-slider").value = 0;
    document.querySelector("#unit-move-task-ship-slider").value = 0;
    document.querySelector("#unit-move-space-infantry-slider").value = 0;
    document.querySelector("#unit-move-space-marines-slider").value = 0;
    // make sure that all unit-movement sliders are also reset to zero
}



const displayMilitaryIntelligence = function() {
    document.querySelector("#move-army").style.display = "none";
    document.querySelector("#land-unit-group").setAttribute("onclick","displayLandArmies()");
    document.querySelector("#naval-unit-group").setAttribute("onclick","displayNavalFleets()");
    document.querySelector("#space-unit-group").setAttribute("onclick","displaySpaceFleets()");
    // The player can now see all military units in this city
}



const hideMilitaryIntelligence = function() {
    document.querySelector("#move-army").style.display = "none";
    document.querySelector("#land-unit-group").setAttribute("onclick","");
    document.querySelector("#naval-unit-group").setAttribute("onclick","");
    document.querySelector("#space-unit-group").setAttribute("onclick","");
    // The player cannot see any military units in this city
}



const hideLandArmies = function() {
    
    document.querySelector(".bottom-unit-view").innerHTML = `
        <div class="unit-div">
          <p class="unit-name" onclick="infantryCitySelection()">Infantry</p>
          <img class="unit-icon" id="infantry-unit-icon" src="public/images/infantryicon.png" onclick="infantryCitySelection()">
          <p class="unit-amount">???</p>
          <img class="embark-img-infantry" src="public/images/port.png">
          <button class="embark-button" id="embark-button-infantry" onclick="embarkInfantry()">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="tankCitySelection()">Tanks</p>
          <input type="hidden" id="tank-selected" value="0">
          <img class="unit-icon" id="tank-unit-icon" src="public/images/tankicon.png" onclick="tankCitySelection()">
          <p class="unit-amount">???</p>
          <img class="embark-img-tank" src="public/images/port.png">
          <button class="embark-button" id="embark-button-tanks" onclick="embarkTanks()">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="aircraftCitySelection()">Aircraft</p>
          <input type="hidden" id="aircraft-selected" value="0">
          <img class="unit-icon" id="aircraft-unit-icon" src="public/images/mannedaircrafticon.png" onclick="aircraftCitySelection()">
          <p class="unit-amount">???</p>
          <img class="embark-img-aircraft" src="public/images/port.png">
          <button class="embark-button" id="embark-button-aircraft" onclick="embarkAircraft()">Embark</button>
        </div>`;
}




const displayNavalFleets = function() {
    cityID = document.querySelector("#city-index").textContent;
    planetIndex = document.querySelector("#planet-index").textContent;
    
    if (planetIndex == 1) {
        
    } else if (planetIndex == 2) {
        // for Marines and destroyers we need to pass the array into functions in order to find out
        // how many of them there are because we get multiple parts per unit, but for submarines and
        // aircraft carriers, each unit is only 1 craft
        
        destroyerArray = map2Cities[cityID].destroyers;
        destroyerArray.forEach(iterateDestroyerAmount);
        
        marineArray = map2Cities[cityID].marines;
        marineArray.forEach(iterateMarineAmount);
        
        submarineArray = map2Cities[cityID].submarines;
        submarineArray.forEach(iterateSubmarineAmount);
        
        cityCarrierAmount = map2Cities[cityID].aircraftCarriers.length;
        
    } else if (planetIndex == 3) {
        
    } else if (planetIndex == 4) {
        
    }
    
    document.querySelector(".bottom-unit-view").innerHTML = `
        <div class="unit-div">
          <p class="unit-name" onclick="destroyerCitySelection()">Destroyers</p>
          <img class="unit-icon" id="destroyer-unit-icon" src="public/images/destroyericon.png" onclick="destroyerCitySelection()">
          <p class="unit-amount" id="destroyer-interact-amount">` + cityDestroyerAmount + `</p>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="marinesCitySelection()">Marines</p>
          <img class="unit-icon" id="marines-unit-icon" src="public/images/marinesicon.png" onclick="marinesCitySelection()">
          <p class="unit-amount" id="marines-interact-amount">` + cityMarineAmount.toLocaleString() + `</p>
          <img class="embark-img-marines" src="public/images/port.png">
          <button class="embark-button" id="embark-button-marines" onclick="embarkMarines()">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="submarineCitySelection()">Submarines</p>
          <img class="unit-icon" id="submarine-unit-icon" src="public/images/submarineicon.png" onclick="submarineCitySelection()">
          <p class="unit-amount" id="submarine-interact-amount">` + citySubmarineAmount + `</p>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="carrierCitySelection()">Carriers</p>
          <img class="unit-icon" id="carrier-unit-icon" src="public/images/carriericon.png" onclick="carrierCitySelection()">
          <p class="unit-amount" id="carrier-interact-amount">` + cityCarrierAmount + `</p>
        </div>`;
        cityDestroyerAmount = 0;
        cityMarineAmount = 0;
        citySubmarineAmount = 0;
        cityCarrierAmount = 0;
        // after we are done counting how many units we have in this city, we msut reset the variables we used to count this value
        // back to zero, because the next selected city may have no units in it and we don't want these strings to stick around and
        // make it look like units are stationed in an empty city;
}

const displaySpaceFleets = function() {
    cityID = document.querySelector("#city-index").textContent;
    planetIndex = document.querySelector("#planet-index").textContent;
    
    if (planetIndex == 1) {
        
    } else if (planetIndex == 2) {
        
        spaceInfantryArray = map2Cities[cityID].spaceInfantry;
        spaceInfantryArray.forEach(iterateSpaceInfantryAmount);
        
        spaceMarineArray = map2Cities[cityID].spaceMarines;
        spaceMarineArray.forEach(iterateSpaceMarineAmount);
        
        cityTaskShipAmount = map2Cities[cityID].taskShips.length;
        
    } else if (planetIndex == 3) {
        
    } else if (planetIndex == 4) {
        
    }
    
    document.querySelector(".bottom-unit-view").innerHTML = `
        <div class="unit-div">
          <p class="unit-name" onclick="taskShipCitySelection()">Task Ships</p>
          <img class="unit-icon" id="task-ship-unit-icon" src="public/images/taskshipicon.png" onclick="taskShipCitySelection()">
          <p class="unit-amount" id="task-ship-interact-amount">` + cityTaskShipAmount + `</p>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="spaceInfantryCitySelection()">Space Infantry</p>
          <img class="unit-icon" id="space-infantry-unit-icon" src="public/images/spaceinfantryicon.png" onclick="spaceInfantryCitySelection()">
          <p class="unit-amount" id="space-infantry-interact-amount">` + citySpaceInfantryAmount.toLocaleString() + `</p>
          <img class="embark-img-space-infantry" src="public/images/spaceEmbark.png">
          <button class="embark-button" id="embark-button-space-infantry" onclick="embarkSpaceInfantry()">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="spaceMarinesCitySelection()">Space Marines</p>
          <img class="unit-icon" id="space-marines-unit-icon" src="public/images/spacemarinesicon.png" onclick="spaceMarinesCitySelection()">
          <p class="unit-amount" id="space-marine-interact-amount">` + citySpaceMarineAmount.toLocaleString() + `</p>
          <img class="embark-img-space-marines" src="public/images/spaceEmbark.png">
          <button class="embark-button" id="embark-button-space-marines" onclick="embarkSpaceMarines()">Embark</button>
        </div>`;
        cityTaskShipAmount = 0;
        citySpaceInfantryAmount = 0;
        citySpaceMarineAmount = 0;
}

const displayLandArmies = function() {
    cityID = document.querySelector("#city-index").textContent;
    planetIndex = document.querySelector("#planet-index").textContent;
    
    if (planetIndex == 1) {
        
    } else if (planetIndex == 2) {
        
        infantryArray = map2Cities[cityID].infantry;
        infantryArray.forEach(iterateInfantryAmount);
        
        tankArray = map2Cities[cityID].tanks;
        tankArray.forEach(iterateTankAmount);
        
        cityAircraftAmount = (map2Cities[cityID].planes.length * 10);
        
    } else if (planetIndex == 3) {
        
    } else if (planetIndex == 4) {
        
    }
    
    document.querySelector(".bottom-unit-view").innerHTML = `
        <div class="unit-div">
          <p class="unit-name" onclick="infantryCitySelection()">Infantry</p>
          <img class="unit-icon" id="infantry-unit-icon" src="public/images/infantryicon.png" onclick="infantryCitySelection()">
          <p class="unit-amount" id="infantry-interact-amount">` + cityInfantryAmount.toLocaleString() + `</p>
          <img class="embark-img-infantry" src="public/images/port.png">
          <button class="embark-button" id="embark-button-infantry" onclick="embarkInfantry()">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="tankCitySelection()">Tanks</p>
          <img class="unit-icon" id="tank-unit-icon" src="public/images/tankicon.png" onclick="tankCitySelection()">
          <p class="unit-amount" id="tank-interact-amount">` + cityTankAmount.toLocaleString() + `</p>
          <img class="embark-img-tank" src="public/images/port.png">
          <button class="embark-button" id="embark-button-tanks" onclick="embarkTanks()">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="aircraftCitySelection()">Aircraft</p>
          <img class="unit-icon" id="aircraft-unit-icon" src="public/images/mannedaircrafticon.png" onclick="aircraftCitySelection()">
          <p class="unit-amount" id="aircraft-interact-amount">` + cityAircraftAmount.toLocaleString() + `</p>
          <img class="embark-img-aircraft" src="public/images/port.png">
          <button class="embark-button" id="embark-button-aircraft" onclick="embarkAircraft()">Embark</button>
        </div>`;
        cityInfantryAmount = 0;
        cityTankAmount = 0;
        cityAircraftAmount = 0;
}




const infantryCitySelection = function() {
    if (!infantrySelected) {
        infantrySelected = true;
        // here we are determining if this is a currently selected infantry army. If it is not, then select it after the icon
        // gets clicked on and display the embark button because infantry are embarkable units
        document.querySelector("#embark-button-infantry").style.display = "block";
        document.querySelector("#infantry-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        infantrySelected = false;
        document.querySelector("#embark-button-infantry").style.display = "none";
        document.querySelector("#infantry-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-infantry").style.display = "none";
        console.log("Deselect this infantry unit, remove them from the move window, and remove them from embarkment");
    }
}

const tankCitySelection = function() {
    if (!tankSelected) {
        tankSelected = true;
        document.querySelector("#embark-button-tanks").style.display = "block";
        document.querySelector("#tank-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        tankSelected = false;
        document.querySelector("#embark-button-tanks").style.display = "none";
        document.querySelector("#tank-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-tank").style.display = "none";
        console.log("Deselect this tank unit, remove them from the move window");
    }
}

const aircraftCitySelection = function() {
    if (!aircraftSelected) {
        aircraftSelected = true;
        document.querySelector("#embark-button-aircraft").style.display = "block";
        document.querySelector("#aircraft-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        aircraftSelected = false;
        document.querySelector("#embark-button-aircraft").style.display = "none";
        document.querySelector("#aircraft-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-aircraft").style.display = "none";
        console.log("Deselect this aircraft unit, remove them from the move window");
    }
}

const marinesCitySelection = function() {
    if (!marineSelected) {
        marineSelected = true
        document.querySelector("#embark-button-marines").style.display = "block";
        document.querySelector("#marines-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        marineSelected = false;
        document.querySelector("#embark-button-marines").style.display = "none";
        document.querySelector("#marines-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-marines").style.display = "none";
        console.log("Deselect this marines unit, remove them from the move window");
    }
}

const spaceInfantryCitySelection = function() {
    if (!spaceInfantrySelected) {
        spaceInfantrySelected = true;
        document.querySelector("#embark-button-space-infantry").style.display = "block";
        document.querySelector("#space-infantry-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        spaceInfantrySelected = false;
        document.querySelector("#embark-button-space-infantry").style.display = "none";
        document.querySelector("#space-infantry-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-space-infantry").style.display = "none";
        console.log("Deselect this space infantry unit, remove them from the move window");
    }
}

const spaceMarinesCitySelection = function() {
    if (!spaceMarineSelected) {
        spaceMarineSelected = true;
        document.querySelector("#embark-button-space-marines").style.display = "block";
        document.querySelector("#space-marines-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        spaceMarineSelected = false;
        document.querySelector("#embark-button-space-marines").style.display = "none";
        document.querySelector("#space-marines-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-space-marines").style.display = "none";
        console.log("Deselect this space marines unit, remove them from the move window");
    }
}

const destroyerCitySelection = function() {
    if (!destroyerSelected) {
        destroyerSelected = true;
        document.querySelector("#destroyer-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        destroyerSelected = false;
        document.querySelector("#destroyer-unit-icon").style.boxShadow = "none";
        console.log("Deselect this destroyer unit, remove them from the move window");
    }
}

const submarineCitySelection = function() {
    if (!submarineSelected) {
        submarineSelected = true;
        document.querySelector("#submarine-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        submarineSelected = false;
        document.querySelector("#submarine-unit-icon").style.boxShadow = "none";
        console.log("Deselect this submarine unit, remove them from the move window");
    }
}

const carrierCitySelection = function() {
    if (!carrierSelected) {
        carrierSelected = true;
        document.querySelector("#carrier-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        carrierSelected = false;
        document.querySelector("#carrier-unit-icon").style.boxShadow = "none";
        console.log("Deselect this aircraft carrier unit, remove them from the move window");
    }
}

const taskShipCitySelection = function() {
    if (!taskShipSelected) {
        taskShipSelected = true;
        document.querySelector("#task-ship-unit-icon").style.boxShadow = "0px 0px 12px white";
    } else {
        taskShipSelected = false;
        document.querySelector("#task-ship-unit-icon").style.boxShadow = "none";
        console.log("Deselect this task ship unit, remove them from the move window");
    }
}





const embarkInfantry = function() {
    document.querySelector(".embark-img-infantry").style.display = "block";
    // change the infantry embark button so that it now becomes a disembark button
    console.log("Embark as many infantry as destroyers and carriers will allow");
}

const embarkTanks = function() {
    document.querySelector(".embark-img-tank").style.display = "block";
    // change the tank embark button so that it now becomes a disembark button
    console.log("Embark as many tanks as destroyers and carriers will allow");
}

const embarkAircraft = function() {
    document.querySelector(".embark-img-aircraft").style.display = "block";
    // change the aircraft embark button so that it now becomes a disembark button
    console.log("Embark as many aircraft as carriers will allow");
}

const embarkMarines = function() {
    document.querySelector(".embark-img-marines").style.display = "block";
    // change the marines embark button so that it now becomes a disembark button
    console.log("Embark as many marines as destroyers carriers will allow which is double infantry");
}

const embarkSpaceInfantry = function() {
    document.querySelector(".embark-img-space-infantry").style.display = "block";
    // change the space infantry embark button so that it now becomes a disembark button
    console.log("Embark as many space infantry as task ships will allow");
}

const embarkSpaceMarines = function() {
    document.querySelector(".embark-img-space-marines").style.display = "block";
    // change the space marines embark button so that it now becomes a disembark button
    console.log("Embark as many space marines as task ships will allow");
}



// Weaponized Buildings ===============================================================================================================

// weaponized buildings first check to see if they are targeting cities, in which case they shoot a city they have already been
// designated to target.

// Then they check to see if they are targeting enemy armies. If so, they run through the list of all
// currently active enemy armies and compare the 'xpos' value of each army to the 'xpos' of the city they are in. If the difference
// between the two values is less than the 'range' property on the building process of that building and the same is true for the
// 'ypos' values, then the enemy army is within range. Next check if the province ID the enemy army is in, is the same as a land
// neighbor or coastal neighbor of the province the building is in. If it is, then this building has line of sight to the enemy army
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
const targetCities2 = function(buildProcessID) {
  selectedWeaponizedBuilding2 = map2BuildingProcess[buildProcessID].id;
  document.querySelector('.build-btns-container').innerHTML = `<p class="target-building-info-text">Now 'Ctrl + Click' on a city within
  targeting range of this building.
  <br>
  When war is declared, this building will auto-attack buildings within that city.</p>
  <br>
  <button class="build-win-control-close" onclick="closeBuildWindow()">Close & Target</button>`;
}
const selectTargetCity2 = function(cityID) {
  map2BuildingProcess[selectedWeaponizedBuilding2].targetCity = cityID;
  cityName = map2Cities[map2BuildingProcess[selectedWeaponizedBuilding2].city].name;
  console.log(map2BuildingProcess[selectedWeaponizedBuilding2]);
  // come back here later and make it so that a window pops up upon targeting a city giving some kind of confirmation the
  // city has been targeted and telling which building will now target it.
}



const targetEnemyArmies2 = function(buildProcessID) {
  map2BuildingProcess[buildProcessID].targetCity = undefined;
  // setting the target city to undefined will tell the building to attack enemy armies within both range and visibility
    closeBuildWindow();
}




const targetEnemySpace2 = function(buildProcessID) {
  map2BuildingProcess[buildProcessID].targetCity = -1;
  // setting the target city to -1 will tell the building to attack enemy space fleets
    closeBuildWindow();
}


