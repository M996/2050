



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
    navalUnitPrecedence = false;
    landUnitPrecedence = false;
    // these variables determine which window opens based on which windows take precedence over the others
    
    // if you have task ships selected then you will always view the space tab no matter what, if you have
    // any naval units selected then you will always view the naval tab, unless task ships are selected
    // and if you have ground units selected they will only be moveable if you have none of the other types
    // of units selected and aircraft are only moveable if no other type of unit anywhere is selected
    
    if (infantrySelected) {
        
        landUnitPrecedence = true;
        // if any land units at all are selected, they take precedence and so the
        // other unit windows will not open at all
        
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
        
        landUnitPrecedence = true;
        
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
        
        navalUnitPrecedence = true;
        
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
        
        landUnitPrecedence = true;
        
        cityID = document.querySelector("#city-index").textContent;
        planetIndex = document.querySelector("#planet-index").textContent;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            marineUnitAmount = map2Cities[cityID].marines.length;
            document.querySelector("#unit-move-marines-slider").max = marineUnitAmount;
            document.querySelector("#unit-move-marines-slider").value = marineUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-marines").style.display = "flex";
    }
    
    if (submarineSelected) {
        
        navalUnitPrecedence = true;
        
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
        
        navalUnitPrecedence = true;
        
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
    
    
    if (spaceInfantrySelected) {
        
        landUnitPrecedence = true;
        
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
        
        landUnitPrecedence = true;
        
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
    // make individual unit windows close when you click on the 'move' button a second time
    // and make units stop appearing in the unit windows if they have not been selected
    // finally, units get auto-put into armies and fleets when they are moved up or down
    // on the slider, and add a new button to move armies out of the city
    if (navalUnitPrecedence) {
        document.querySelector(".unit-move-interaction-naval").style.display = "flex";
    } else if (landUnitPrecedence) {
        document.querySelector(".unit-move-interaction-land").style.display = "flex";
        
    } else {
        document.querySelector(".unit-move-interaction-air").style.display = "flex";
    }
    document.getElementById('move-army').setAttribute('onclick','closeMoveArmiesWindow()');
    $("#move-army").toggleClass("move-btn-open");
}


const closeMoveArmiesWindow = function() {
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
  document.getElementById('move-army').setAttribute('onclick','openMoveArmiesWindow()');
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
    cityID = document.querySelector("#city-index").textContent;
    cityOwner = map2Cities[cityID].ownerID;
    if (cityOwner === map2Cities[cityID].marinesOwnerID[marineID]) {
        // first we look to see if this unit statyioned in the city is also owned by the country
        // that owns the city, we will only count it in the military screen if it is an owned unit
        // not an allied or neutral unit that an ally has parked in this city
        currentManpower = marineUnits[marineID].currentManpower;
        cityMarineAmount = cityMarineAmount + currentManpower;
    }
}

function iterateDestroyerAmount(destroyerID) {
    cityID = document.querySelector("#city-index").textContent;
    cityOwner = map2Cities[cityID].ownerID;
    if (cityOwner === map2Cities[cityID].destroyersOwnerID[destroyerID]) {
        currentManpower = destroyerUnits[destroyerID].currentManpower;
        currentAmount = currentManpower / 2000;
        // destroyers have a maximum of 4 ships per unit, and 8000 manpower per unit
        currentAmount = Math.round(currentAmount);
        if (currentAmount == 0) {
            currentAmount = 1;
        }
        cityDestroyerAmount = cityDestroyerAmount + currentAmount;
    }
}

function iterateSubmarineAmount(submarineID) {
    cityID = document.querySelector("#city-index").textContent;
    cityOwner = map2Cities[cityID].ownerID;
    if (cityOwner === map2Cities[cityID].submarinesOwnerID[submarineID]) {
        currentManpower = submarineUnits[submarineID].currentManpower;
        currentAmount = currentManpower / 1500;
        // submarines have a maximum of 2 ships per unit, and 6000 manpower per unit
        currentAmount = Math.round(currentAmount);
        if (currentAmount == 0) {
            currentAmount = 1;
        }
        citySubmarineAmount = citySubmarineAmount + currentAmount;
    }
}

function iterateSpaceInfantryAmount(spaceInfantryID) {
    cityID = document.querySelector("#city-index").textContent;
    cityOwner = map2Cities[cityID].ownerID;
    if (cityOwner === map2Cities[cityID].spaceInfantryOwnerID[spaceInfantryID]) {
        currentManpower = spaceInfantryUnits[spaceInfantryID].currentManpower;
        citySpaceInfantryAmount = citySpaceInfantryAmount + currentManpower;
    }
}

function iterateSpaceMarineAmount(spaceMarineID) {
    cityID = document.querySelector("#city-index").textContent;
    cityOwner = map2Cities[cityID].ownerID;
    if (cityOwner === map2Cities[cityID].spaceMarinesOwnerID[spaceMarineID]) {
        currentManpower = spaceMarineUnits[spaceMarineID].currentManpower;
        citySpaceMarineAmount = citySpaceMarineAmount + currentManpower;
    }
}

function iterateInfantryAmount(infantryID) {
    cityID = document.querySelector("#city-index").textContent;
    cityOwner = map2Cities[cityID].ownerID;
    if (cityOwner === map2Cities[cityID].infantryOwnerID[infantryID]) {
        currentManpower = infantryUnits[infantryID].currentManpower;
        cityInfantryAmount = cityInfantryAmount + currentManpower;
    }
}

function iterateTankAmount(tankID) {
    cityID = document.querySelector("#city-index").textContent;
    cityOwner = map2Cities[cityID].ownerID;
    if (cityOwner === map2Cities[cityID].tanksOwnerID[tankID]) {
        currentManpower = tankUnits[tankID].currentManpower;
        currentAmount = currentManpower / 40;
        // destroyers have a maximum of 4 ships per unit, and 8000 manpower per unit
        currentAmount = Math.round(currentAmount);
        if (currentAmount == 0) {
            currentAmount = 1;
        }
        cityTankAmount = cityTankAmount + currentAmount;
    }
}

function iterateCarrierAmount(carrierID) {
    cityID = document.querySelector("#city-index").textContent;
    cityOwner = map2Cities[cityID].ownerID;    
    if (cityOwner === map2Cities[cityID].aircraftCarriersOwnerID[carrierID]) {
        cityCarrierAmount++;
    }
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
        
        carrierArray = map2Cities[cityID].aircraftCarriers;
        carrierArray.forEach(iterateCarrierAmount);

        
    } else if (planetIndex == 3) {
        
    } else if (planetIndex == 4) {
        
    }
    
    cityMilitaryDisplayString = ``;
    
    if (cityDestroyerAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="destroyerCitySelection()">Destroyers</p>
          <img class="unit-icon" id="destroyer-unit-icon" src="public/images/destroyericon.png" onclick="destroyerCitySelection()">
          <p class="unit-amount" id="destroyer-interact-amount">` + cityDestroyerAmount + `</p>
        </div>`;
    }
    
    if (cityMarineAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="marinesCitySelection()">Marines</p>
          <img class="unit-icon" id="marines-unit-icon" src="public/images/marinesicon.png" onclick="marinesCitySelection()">
          <p class="unit-amount" id="marines-interact-amount">` + cityMarineAmount.toLocaleString() + `</p>
          <img class="embark-img-marines" src="public/images/port.png">
          <button class="embark-button" id="embark-button-marines" onclick="embarkMarines()">Embark</button>
        </div>`;
    }
    
    if (citySubmarineAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="submarineCitySelection()">Submarines</p>
          <img class="unit-icon" id="submarine-unit-icon" src="public/images/submarineicon.png" onclick="submarineCitySelection()">
          <p class="unit-amount" id="submarine-interact-amount">` + citySubmarineAmount + `</p>
        </div>`;
    }
    
    if (cityCarrierAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="carrierCitySelection()">Carriers</p>
          <img class="unit-icon" id="carrier-unit-icon" src="public/images/carriericon.png" onclick="carrierCitySelection()">
          <p class="unit-amount" id="carrier-interact-amount">` + cityCarrierAmount + `</p>
        </div>`;
    }
    
    document.querySelector(".bottom-unit-view").innerHTML = cityMilitaryDisplayString;
        
    if (marineSelected) {
        document.querySelector("#embark-button-marines").style.display = "block";
        document.querySelector("#marines-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
    
    if (destroyerSelected) {
        document.querySelector("#destroyer-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
    
    if (submarineSelected) {
        document.querySelector("#submarine-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
    
    if (carrierSelected) {
        document.querySelector("#carrier-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
        
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
        
    } else if (planetIndex == 3) {
        
    } else if (planetIndex == 4) {
        
    }
    
    cityMilitaryDisplayString = `
        <div class="unit-div">
          <button class="space-control-btn" onclick="openSpaceControlGUI()">Space<br>Control</button>
        </div>`;
    
    if (citySpaceInfantryAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="spaceInfantryCitySelection()">Space Infantry</p>
          <img class="unit-icon" id="space-infantry-unit-icon" src="public/images/spaceinfantryicon.png" onclick="spaceInfantryCitySelection()">
          <p class="unit-amount" id="space-infantry-interact-amount">` + citySpaceInfantryAmount.toLocaleString() + `</p>
          <img class="embark-img-space-infantry" src="public/images/port.png">
          <button class="embark-button" id="embark-button-space-infantry" onclick="embarkSpaceInfantry()">Embark</button>
        </div>`;
    }
    
    if (citySpaceMarineAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="spaceMarinesCitySelection()">Orbital Marines</p>
          <img class="unit-icon" id="space-marines-unit-icon" src="public/images/spacemarinesicon.png" onclick="spaceMarinesCitySelection()">
          <p class="unit-amount" id="space-marine-interact-amount">` + citySpaceMarineAmount.toLocaleString() + `</p>
          <img class="embark-img-space-marines" src="public/images/port.png">
          <button class="embark-button" id="embark-button-space-marines" onclick="embarkSpaceMarines()">Embark</button>
        </div>`;
    }

    document.querySelector(".bottom-unit-view").innerHTML = cityMilitaryDisplayString;
        
    if (spaceInfantrySelected) {
        document.querySelector("#embark-button-space-infantry").style.display = "block";
        document.querySelector("#space-infantry-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
    
    if (spaceMarineSelected) {
        document.querySelector("#embark-button-space-marines").style.display = "block";
        document.querySelector("#space-marines-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
    
    if (taskShipSelected) {
        document.querySelector("#task-ship-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
        
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
    
    cityMilitaryDisplayString = ``;
    
    if (cityInfantryAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="infantryCitySelection()">Infantry</p>
          <img class="unit-icon" id="infantry-unit-icon" src="public/images/infantryicon.png" onclick="infantryCitySelection()">
          <p class="unit-amount" id="infantry-interact-amount">` + cityInfantryAmount.toLocaleString() + `</p>
          <img class="embark-img-infantry" src="public/images/port.png">
          <button class="embark-button" id="embark-button-infantry" onclick="embarkInfantry()">Embark</button>
        </div>`;
    }
    
    if (cityTankAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="tankCitySelection()">Tanks</p>
          <img class="unit-icon" id="tank-unit-icon" src="public/images/tankicon.png" onclick="tankCitySelection()">
          <p class="unit-amount" id="tank-interact-amount">` + cityTankAmount.toLocaleString() + `</p>
          <img class="embark-img-tank" src="public/images/port.png">
          <button class="embark-button" id="embark-button-tanks" onclick="embarkTanks()">Embark</button>
        </div>`;
    }
    
    if (cityAircraftAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="aircraftCitySelection()">Aircraft</p>
          <img class="unit-icon" id="aircraft-unit-icon" src="public/images/mannedaircrafticon.png" onclick="aircraftCitySelection()">
          <p class="unit-amount" id="aircraft-interact-amount">` + cityAircraftAmount.toLocaleString() + `</p>
          <img class="embark-img-aircraft" src="public/images/port.png">
          <button class="embark-button" id="embark-button-aircraft" onclick="embarkAircraft()">Embark</button>
        </div>`;
    }
    
    document.querySelector(".bottom-unit-view").innerHTML = cityMilitaryDisplayString;
        
    if (infantrySelected) {
        document.querySelector("#embark-button-infantry").style.display = "block";
        document.querySelector("#infantry-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
    
    if (tankSelected) {
        document.querySelector("#embark-button-tanks").style.display = "block";
        document.querySelector("#tank-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
    
    if (aircraftSelected) {
        document.querySelector("#embark-button-aircraft").style.display = "block";
        document.querySelector("#aircraft-unit-icon").style.boxShadow = "0px 0px 12px white";
    }
        
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
        infantryUnitAmount = map2Cities[cityID].infantry.length;
        document.querySelector("#unit-move-infantry-slider").max = infantryUnitAmount;
        document.querySelector("#unit-move-infantry-slider").value = infantryUnitAmount;
        document.querySelector("#move-infantry").style.display = "flex";
    } else {
        infantrySelected = false;
        document.querySelector("#embark-button-infantry").style.display = "none";
        document.querySelector("#infantry-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-infantry").style.display = "none";
        document.querySelector("#move-infantry").style.display = "none";
        document.querySelector("#unit-move-infantry-slider").value = 0;
        console.log("Deselect this infantry unit, remove them from the move window, and remove them from embarkment");
    }
}

const tankCitySelection = function() {
    if (!tankSelected) {
        tankSelected = true;
        document.querySelector("#embark-button-tanks").style.display = "block";
        document.querySelector("#tank-unit-icon").style.boxShadow = "0px 0px 12px white";
        tankUnitAmount = map2Cities[cityID].tanks.length;
        document.querySelector("#unit-move-tank-slider").max = tankUnitAmount;
        document.querySelector("#unit-move-tank-slider").value = tankUnitAmount;
        document.querySelector("#move-tank").style.display = "flex";
    } else {
        tankSelected = false;
        document.querySelector("#embark-button-tanks").style.display = "none";
        document.querySelector("#tank-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-tank").style.display = "none";
        document.querySelector("#move-tank").style.display = "none";
        document.querySelector("#unit-move-tank-slider").value = 0;
    }
}

const aircraftCitySelection = function() {
    if (!aircraftSelected) {
        aircraftSelected = true;
        document.querySelector("#embark-button-aircraft").style.display = "block";
        document.querySelector("#aircraft-unit-icon").style.boxShadow = "0px 0px 12px white";
        aircraftUnitAmount = map2Cities[cityID].planes.length;
        document.querySelector("#unit-move-aircraft-slider").max = aircraftUnitAmount;
        document.querySelector("#unit-move-aircraft-slider").value = aircraftUnitAmount;
        document.querySelector("#move-aircraft").style.display = "flex";
    } else {
        aircraftSelected = false;
        document.querySelector("#embark-button-aircraft").style.display = "none";
        document.querySelector("#aircraft-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-aircraft").style.display = "none";
        document.querySelector("#move-aircraft").style.display = "none";
        document.querySelector("#unit-move-aircraft-slider").value = 0;
    }
}

const marinesCitySelection = function() {
    if (!marineSelected) {
        marineSelected = true
        document.querySelector("#embark-button-marines").style.display = "block";
        document.querySelector("#marines-unit-icon").style.boxShadow = "0px 0px 12px white";
        marineUnitAmount = map2Cities[cityID].marines.length;
        document.querySelector("#unit-move-marines-slider").max = marineUnitAmount;
        document.querySelector("#unit-move-marines-slider").value = marineUnitAmount;
        document.querySelector("#move-marines").style.display = "flex";
    } else {
        marineSelected = false;
        document.querySelector("#embark-button-marines").style.display = "none";
        document.querySelector("#marines-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-marines").style.display = "none";
        document.querySelector("#move-marines").style.display = "none";
        document.querySelector("#unit-move-marines-slider").value = 0;
    }
}

const spaceInfantryCitySelection = function() {
    if (!spaceInfantrySelected) {
        spaceInfantrySelected = true;
        document.querySelector("#embark-button-space-infantry").style.display = "block";
        document.querySelector("#space-infantry-unit-icon").style.boxShadow = "0px 0px 12px white";
        spaceInfantryUnitAmount = map2Cities[cityID].spaceInfantry.length;
        document.querySelector("#unit-move-space-infantry-slider").max = spaceInfantryUnitAmount;
        document.querySelector("#unit-move-space-infantry-slider").value = spaceInfantryUnitAmount;
        document.querySelector("#move-space-infantry").style.display = "flex";
    } else {
        spaceInfantrySelected = false;
        document.querySelector("#embark-button-space-infantry").style.display = "none";
        document.querySelector("#space-infantry-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-space-infantry").style.display = "none";
        document.querySelector("#move-space-infantry").style.display = "none";
        document.querySelector("#unit-move-space-infantry-slider").value = 0;
    }
}

const spaceMarinesCitySelection = function() {
    if (!spaceMarineSelected) {
        spaceMarineSelected = true;
        document.querySelector("#embark-button-space-marines").style.display = "block";
        document.querySelector("#space-marines-unit-icon").style.boxShadow = "0px 0px 12px white";
        spaceMarinesUnitAmount = map2Cities[cityID].spaceMarines.length;
        document.querySelector("#unit-move-space-marines-slider").max = spaceMarinesUnitAmount;
        document.querySelector("#unit-move-space-marines-slider").value = spaceMarinesUnitAmount;
        document.querySelector("#move-space-marines").style.display = "flex";
    } else {
        spaceMarineSelected = false;
        document.querySelector("#embark-button-space-marines").style.display = "none";
        document.querySelector("#space-marines-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-space-marines").style.display = "none";
        document.querySelector("#move-space-marines").style.display = "none";
        document.querySelector("#unit-move-space-marines-slider").value = 0;
    }
}

const destroyerCitySelection = function() {
    if (!destroyerSelected) {
        destroyerSelected = true;
        document.querySelector("#destroyer-unit-icon").style.boxShadow = "0px 0px 12px white";
        destroyerUnitAmount = map2Cities[cityID].destroyers.length;
        document.querySelector("#unit-move-destroyer-slider").max = destroyerUnitAmount;
        document.querySelector("#unit-move-destroyer-slider").value = destroyerUnitAmount;
        document.querySelector("#move-destroyer").style.display = "flex";
    } else {
        destroyerSelected = false;
        document.querySelector("#destroyer-unit-icon").style.boxShadow = "none";
        document.querySelector("#move-destroyer").style.display = "none";
        document.querySelector("#unit-move-destroyer-slider").value = 0;
    }
}

const submarineCitySelection = function() {
    if (!submarineSelected) {
        submarineSelected = true;
        document.querySelector("#submarine-unit-icon").style.boxShadow = "0px 0px 12px white";
        submarineUnitAmount = map2Cities[cityID].submarines.length;
        document.querySelector("#unit-move-submarines-slider").max = submarineUnitAmount;
        document.querySelector("#unit-move-submarines-slider").value = submarineUnitAmount;
        document.querySelector("#move-submarine").style.display = "flex";
    } else {
        submarineSelected = false;
        document.querySelector("#submarine-unit-icon").style.boxShadow = "none";
        document.querySelector("#move-submarine").style.display = "none";
        document.querySelector("#unit-move-submarines-slider").value = 0;
    }
}

const carrierCitySelection = function() {
    if (!carrierSelected) {
        carrierSelected = true;
        document.querySelector("#carrier-unit-icon").style.boxShadow = "0px 0px 12px white";
        carrierUnitAmount = map2Cities[cityID].aircraftCarriers.length;
        document.querySelector("#unit-move-carrier-slider").max = carrierUnitAmount;
        document.querySelector("#unit-move-carrier-slider").value = carrierUnitAmount;
        document.querySelector("#move-carrier").style.display = "flex";
    } else {
        carrierSelected = false;
        document.querySelector("#carrier-unit-icon").style.boxShadow = "none";
        document.querySelector("#move-carrier").style.display = "none";
        document.querySelector("#unit-move-carrier-slider").value = 0;
    }
}

const taskShipCitySelection = function() {
    if (!taskShipSelected) {
        taskShipSelected = true;
        document.querySelector("#task-ship-unit-icon").style.boxShadow = "0px 0px 12px white";
        taskShipUnitAmount = map2Cities[cityID].taskShips.length;
        document.querySelector("#unit-move-task-ship-slider").max = taskShipUnitAmount;
        document.querySelector("#unit-move-task-ship-slider").value = taskShipUnitAmount;
        document.querySelector("#move-task-ship").style.display = "flex";
    } else {
        taskShipSelected = false;
        document.querySelector("#task-ship-unit-icon").style.boxShadow = "none";
        document.querySelector("#move-task-ship").style.display = "none";
        document.querySelector("#unit-move-task-ship-slider").value = 0;
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




const infantryArmyNull = function() {
    
}




const infantryArmyMax = function() {
    
}




const updateArmyInfantry = function() {
    
}



