



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

infantryEmbarked = false;
tankEmbarked = false;
aircraftEmbarked = false;
marineEmbarked = false;
spaceInfantryEmbarked = false;
spaceMarineEmbarked = false;



const openMoveArmiesWindow = function() {
    navalUnitPrecedence = false;
    landUnitPrecedence = false;
    // these variables determine which window opens based on which windows take precedence over the others
    
    // if you have task ships selected then you will always view the space tab no matter what, if you have
    // any naval units selected then you will always view the naval tab, unless task ships are selected
    // and if you have ground units selected they will only be moveable if you have none of the other types
    // of units selected and aircraft are only moveable if no other type of unit anywhere is selected
    
    cityID = document.querySelector("#city-index").textContent;
    planetIndex = document.querySelector("#planet-index").textContent;
    
    if (infantrySelected) {
        
        landUnitPrecedence = true;
        // if any land units at all are selected, they take precedence and so the
        // other unit windows will not open at all
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            infantryUnitAmount = map2Cities[cityID].infantry.length;
            document.querySelector("#unit-move-infantry-slider").max = infantryUnitAmount;
            document.querySelector("#unit-move-infantry-slider").value = infantryUnitAmount;
            document.querySelector('#infantry-move-amount').textContent = infantryUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-infantry").style.display = "flex";
    }
    

    
    if (tankSelected) {
        
        landUnitPrecedence = true;
        
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            tankUnitAmount = map2Cities[cityID].tanks.length;
            document.querySelector("#unit-move-tank-slider").max = tankUnitAmount;
            document.querySelector("#unit-move-tank-slider").value = tankUnitAmount;
            document.querySelector('#tank-move-amount').textContent = tankUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-tank").style.display = "flex";
    }
    
    
    
    if (aircraftSelected) {
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            planeUnitAmount = map2Cities[cityID].planes.length;
            document.querySelector("#unit-move-aircraft-slider").max = planeUnitAmount;
            document.querySelector("#unit-move-aircraft-slider").value = planeUnitAmount;
            document.querySelector('#aircraft-move-amount').textContent = planeUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-aircraft").style.display = "flex";
    }
    
    
    
    if (destroyerSelected) {
        
        navalUnitPrecedence = true;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            destroyerUnitAmount = map2Cities[cityID].destroyers.length;
            document.querySelector("#unit-move-destroyer-slider").max = destroyerUnitAmount;
            document.querySelector("#unit-move-destroyer-slider").value = destroyerUnitAmount;
            document.querySelector('#destroyer-move-amount').textContent = destroyerUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-destroyer").style.display = "flex";
    }
    
    if (marineSelected) {
        
        landUnitPrecedence = true;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            marineUnitAmount = map2Cities[cityID].marines.length;
            document.querySelector("#unit-move-marines-slider").max = marineUnitAmount;
            document.querySelector("#unit-move-marines-slider").value = marineUnitAmount;
            document.querySelector('#marines-move-amount').textContent = marineUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-marines").style.display = "flex";
    }
    
    
    
    if (submarineSelected) {
        
        navalUnitPrecedence = true;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            submarineUnitAmount = map2Cities[cityID].submarines.length;
            document.querySelector("#unit-move-submarines-slider").max = submarineUnitAmount;
            document.querySelector("#unit-move-submarines-slider").value = submarineUnitAmount;
            document.querySelector('#submarine-move-amount').textContent = submarineUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-submarine").style.display = "flex";
    }
    
    if (carrierSelected) {
        
        navalUnitPrecedence = true;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            carrierUnitAmount = map2Cities[cityID].aircraftCarriers.length;
            document.querySelector("#unit-move-carrier-slider").max = carrierUnitAmount;
            document.querySelector("#unit-move-carrier-slider").value = carrierUnitAmount;
            document.querySelector('#carrier-move-amount').textContent = carrierUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-carrier").style.display = "flex";
    }
    
    
    if (spaceInfantrySelected) {
        
        landUnitPrecedence = true;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            spaceInfantryUnitAmount = map2Cities[cityID].spaceInfantry.length;
            document.querySelector("#unit-move-space-infantry-slider").max = spaceInfantryUnitAmount;
            document.querySelector("#unit-move-space-infantry-slider").value = spaceInfantryUnitAmount;
            document.querySelector('#space-infantry-move-amount').textContent = spaceInfantryUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-space-infantry").style.display = "flex";
    }
    
    
    
    if (spaceMarineSelected) {
        
        landUnitPrecedence = true;
        
        if (planetIndex == 1) {
            // add the same code for planet 1 in this function and displayLandArmies
        } else if (planetIndex == 2) {
            spaceMarineUnitAmount = map2Cities[cityID].spaceMarines.length;
            document.querySelector("#unit-move-space-marines-slider").max = spaceMarineUnitAmount;
            document.querySelector("#unit-move-space-marines-slider").value = spaceMarineUnitAmount;
            document.querySelector('#space-marines-move-amount').textContent = spaceMarineUnitAmount;
        } else if (planetIndex == 3) {
            // add the same code for planet 3 in this function and displayLandArmies
        } else if (planetIndex == 4) {
            // add the same code for planet 4 in this function and displayLandArmies
        }
        document.querySelector("#move-space-marines").style.display = "flex";
    }
    
    
    // make individual unit windows close when you click on the 'open' button a second time
    // and make units stop appearing in the unit windows if they have not been selected
    // finally, units get auto-put into armies and fleets when they are moved up or down
    // on the slider, and add a new button to move armies out of the city
    if (navalUnitPrecedence) {
        document.querySelector(".unit-move-interaction-naval").style.display = "flex";
    } else if (landUnitPrecedence) {
        document.querySelector(".unit-move-interaction-land").style.display = "flex";
        //addSoldiersToArmy(cityID, planetIndex);
        console.log("If land units take precedence I used to have a function called 'addsoldiersToArmy' but I removed it cuz it isn't defined");
    } else {
        document.querySelector(".unit-move-interaction-air").style.display = "flex";
    }
    document.getElementById('move-army').setAttribute('onclick','closeMoveArmiesWindow()');
    document.getElementById('move-army').textContent = "Close";
    $("#move-army").toggleClass("move-btn-open");
}


const closeMoveArmiesWindow = function() {
  
  cityID = document.querySelector("#city-index").textContent;
  planetIndex = document.querySelector("#planet-index").textContent;
  
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
  document.getElementById('move-army').textContent = "Open";
  
  disembarkInfantry(cityID, planetIndex);
  disembarkTanks(cityID, planetIndex);
  disembarkAircraft(cityID, planetIndex);
  disembarkMarines(cityID, planetIndex);
  disembarkSpaceInfantry(cityID, planetIndex);
  disembarkSpaceMarines(cityID, planetIndex);
  
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
          <p class="unit-name">Infantry</p>
          <img class="unit-icon" id="infantry-unit-icon" src="public/images/infantryicon.png">
          <p class="unit-amount">???</p>
          <img class="embark-img-infantry" src="public/images/port.png">
          <button class="embark-button" id="embark-button-infantry">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name">Tanks</p>
          <input type="hidden" id="tank-selected" value="0">
          <img class="unit-icon" id="tank-unit-icon" src="public/images/tankicon.png">
          <p class="unit-amount">???</p>
          <img class="embark-img-tank" src="public/images/port.png">
          <button class="embark-button" id="embark-button-tanks">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name">Aircraft</p>
          <input type="hidden" id="aircraft-selected" value="0">
          <img class="unit-icon" id="aircraft-unit-icon" src="public/images/mannedaircrafticon.png">
          <p class="unit-amount">???</p>
          <img class="embark-img-aircraft" src="public/images/port.png">
          <button class="embark-button" id="embark-button-aircraft">Embark</button>
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
          <p class="unit-name" onclick="destroyerCitySelection(` + cityID + `, ` + planetIndex + `, true)">Destroyers</p>
          <img class="unit-icon" id="destroyer-unit-icon" src="public/images/destroyericon.png" onclick="destroyerCitySelection(` + cityID + `, ` + planetIndex + `, true)">
          <p class="unit-amount" id="destroyer-interact-amount">` + cityDestroyerAmount + `</p>
        </div>`;
    }
    
    if (cityMarineAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="marinesCitySelection(` + cityID + `, ` + planetIndex + `, true)">Marines</p>
          <img class="unit-icon" id="marines-unit-icon" src="public/images/marinesicon.png" onclick="marinesCitySelection(` + cityID + `, ` + planetIndex + `, true)">
          <p class="unit-amount" id="marines-interact-amount">` + cityMarineAmount.toLocaleString() + `</p>
          <img class="embark-img-marines" src="public/images/port.png">
          <button class="embark-button" id="embark-button-marines" onclick="embarkMarines(` + cityID + `, ` + planetIndex + `)">Embark</button>
        </div>`;
    }
    
    if (citySubmarineAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="submarineCitySelection(` + cityID + `, ` + planetIndex + `, true)">Submarines</p>
          <img class="unit-icon" id="submarine-unit-icon" src="public/images/submarineicon.png" onclick="submarineCitySelection(` + cityID + `, ` + planetIndex + `, true)">
          <p class="unit-amount" id="submarine-interact-amount">` + citySubmarineAmount + `</p>
        </div>`;
    }
    
    if (cityCarrierAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="carrierCitySelection(` + cityID + `, ` + planetIndex + `, true)">Carriers</p>
          <img class="unit-icon" id="carrier-unit-icon" src="public/images/carriericon.png" onclick="carrierCitySelection(` + cityID + `, ` + planetIndex + `, true)">
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
    
    if (marineEmbarked) {
      document.querySelector(".embark-img-marines").style.display = "block";
      document.querySelector("#embark-button-marines").setAttribute("onclick","disembarkMarines(" + cityID + ", " + planetIndex + ")");
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
          <p class="unit-name" onclick="spaceInfantryCitySelection(` + cityID + `, ` + planetIndex + `, true)">Space Infantry</p>
          <img class="unit-icon" id="space-infantry-unit-icon" src="public/images/spaceinfantryicon.png" onclick="spaceInfantryCitySelection(` + cityID + `, ` + planetIndex + `, true)">
          <p class="unit-amount" id="space-infantry-interact-amount">` + citySpaceInfantryAmount.toLocaleString() + `</p>
          <img class="embark-img-space-infantry" src="public/images/port.png">
          <button class="embark-button" id="embark-button-space-infantry" onclick="embarkSpaceInfantry(` + cityID + `, ` + planetIndex + `)">Embark</button>
        </div>`;
    }
    
    if (citySpaceMarineAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="spaceMarinesCitySelection(` + cityID + `, ` + planetIndex + `, true)">Sky Marines</p>
          <img class="unit-icon" id="space-marines-unit-icon" src="public/images/spacemarinesicon.png" onclick="spaceMarinesCitySelection(` + cityID + `, ` + planetIndex + `, true)">
          <p class="unit-amount" id="space-marine-interact-amount">` + citySpaceMarineAmount.toLocaleString() + `</p>
          <img class="embark-img-space-marines" src="public/images/port.png">
          <button class="embark-button" id="embark-button-space-marines" onclick="embarkSpaceMarines(` + cityID + `, ` + planetIndex + `)">Embark</button>
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
    
    if (spaceInfantryEmbarked) {
      document.querySelector(".embark-img-space-infantry").style.display = "block";
      document.querySelector("#embark-button-space-infantry").setAttribute("onclick","disembarkSpaceInfantry(" + cityID + ", " + planetIndex + ")");
    }
    
    if (spaceMarineEmbarked) {
      document.querySelector(".embark-img-space-marines").style.display = "block";
      document.querySelector("#embark-button-space-marines").setAttribute("onclick","disembarkSpaceMarines(" + cityID + ", " + planetIndex + ")");
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
          <p class="unit-name" onclick="infantryCitySelection(` + cityID + `, ` + planetIndex + `, true)">Infantry</p>
          <img class="unit-icon" id="infantry-unit-icon" src="public/images/infantryicon.png" onclick="infantryCitySelection(` + cityID + `, ` + planetIndex + `, true)">
          <p class="unit-amount" id="infantry-interact-amount">` + cityInfantryAmount.toLocaleString() + `</p>
          <img class="embark-img-infantry" src="public/images/port.png">
          <button class="embark-button" id="embark-button-infantry" onclick="embarkInfantry(` + cityID + `, ` + planetIndex + `)">Embark</button>
        </div>`;
    }
    
    if (cityTankAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="tankCitySelection(` + cityID + `, ` + planetIndex + `, true)">Tanks</p>
          <img class="unit-icon" id="tank-unit-icon" src="public/images/tankicon.png" onclick="tankCitySelection(` + cityID + `, ` + planetIndex + `, true)">
          <p class="unit-amount" id="tank-interact-amount">` + cityTankAmount.toLocaleString() + `</p>
          <img class="embark-img-tank" src="public/images/port.png">
          <button class="embark-button" id="embark-button-tanks" onclick="embarkTanks(` + cityID + `, ` + planetIndex + `)">Embark</button>
        </div>`;
    }
    
    if (cityAircraftAmount > 0) {
        cityMilitaryDisplayString += `
        <div class="unit-div">
          <p class="unit-name" onclick="aircraftCitySelection(` + cityID + `, ` + planetIndex + `, true)">Aircraft</p>
          <img class="unit-icon" id="aircraft-unit-icon" src="public/images/mannedaircrafticon.png" onclick="aircraftCitySelection(` + cityID + `, ` + planetIndex + `, true)">
          <p class="unit-amount" id="aircraft-interact-amount">` + cityAircraftAmount.toLocaleString() + `</p>
          <img class="embark-img-aircraft" src="public/images/port.png">
          <button class="embark-button" id="embark-button-aircraft" onclick="embarkAircraft(` + cityID + `, ` + planetIndex + `)">Embark</button>
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
    
    if (infantryEmbarked) {
      document.querySelector(".embark-img-infantry").style.display = "block";
      document.querySelector("#embark-button-infantry").setAttribute("onclick","disembarkInfantry(" + cityID + ", " + planetIndex + ")");
    }
    
    if (tankEmbarked) {
      document.querySelector(".embark-img-tank").style.display = "block";
      document.querySelector("#embark-button-tanks").setAttribute("onclick","disembarkTanks(" + cityID + ", " + planetIndex + ")");
    }
    
    if (aircraftEmbarked) {
      document.querySelector(".embark-img-aircraft").style.display = "block";
      document.querySelector("#embark-button-aircraft").setAttribute("onclick","disembarkAircraft(" + cityID + ", " + planetIndex + ")");
    }
      
    cityInfantryAmount = 0;
    cityTankAmount = 0;
    cityAircraftAmount = 0;
}





const infantryCitySelection = function(cityID, planetID, player) {
    
    if (!infantrySelected) {
        addInfantryToArmy(cityID, planetID);
        infantrySelected = true;
        // here we are determining if this is a currently selected infantry army. If it is not, then select it after the icon
        // gets clicked on and display the embark button because infantry are embarkable units
        document.querySelector("#embark-button-infantry").style.display = "block";
        document.querySelector("#infantry-unit-icon").style.boxShadow = "0px 0px 12px white";
        infantryUnitAmount = map2Cities[cityID].infantry.length;
        document.querySelector("#unit-move-infantry-slider").max = infantryUnitAmount;
        document.querySelector("#unit-move-infantry-slider").value = infantryUnitAmount;
        document.querySelector('#infantry-move-amount').textContent = infantryUnitAmount;
        document.querySelector("#move-infantry").style.display = "flex";
    } else {
        removeInfantryFromArmy(cityID, planetID);
        disembarkInfantry(cityID, planetID);
        document.querySelector("#embark-button-infantry").style.display = "none";
        document.querySelector("#infantry-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-infantry").style.display = "none";
        document.querySelector("#move-infantry").style.display = "none";
        document.querySelector("#unit-move-infantry-slider").value = 0;
    }
}

const tankCitySelection = function(cityID, planetID, player) {
  
    if (!tankSelected) {
        addTanksToArmy(cityID, planetID);
        tankSelected = true;
        document.querySelector("#embark-button-tanks").style.display = "block";
        document.querySelector("#tank-unit-icon").style.boxShadow = "0px 0px 12px white";
        tankUnitAmount = map2Cities[cityID].tanks.length;
        document.querySelector("#unit-move-tank-slider").max = tankUnitAmount;
        document.querySelector("#unit-move-tank-slider").value = tankUnitAmount;
        document.querySelector('#tank-move-amount').textContent = tankUnitAmount;
        document.querySelector("#move-tank").style.display = "flex";
    } else {
        removeTanksFromArmy(cityID, planetID);
        disembarkTanks(cityID, planetID);
        document.querySelector("#embark-button-tanks").style.display = "none";
        document.querySelector("#tank-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-tank").style.display = "none";
        document.querySelector("#move-tank").style.display = "none";
        document.querySelector("#unit-move-tank-slider").value = 0;
    }
}

const aircraftCitySelection = function(cityID, planetID, player) {
  
    if (!aircraftSelected) {
        aircraftSelected = true;
        document.querySelector("#embark-button-aircraft").style.display = "block";
        document.querySelector("#aircraft-unit-icon").style.boxShadow = "0px 0px 12px white";
        planeUnitAmount = map2Cities[cityID].planes.length;
        document.querySelector("#unit-move-aircraft-slider").max = planeUnitAmount;
        document.querySelector("#unit-move-aircraft-slider").value = planeUnitAmount;
        document.querySelector('#aircraft-move-amount').textContent = planeUnitAmount;
        document.querySelector("#move-aircraft").style.display = "flex";
    } else {
        aircraftSelected = false;
        disembarkAircraft(cityID, planetID);
        document.querySelector("#embark-button-aircraft").style.display = "none";
        document.querySelector("#aircraft-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-aircraft").style.display = "none";
        document.querySelector("#move-aircraft").style.display = "none";
        document.querySelector("#unit-move-aircraft-slider").value = 0;
    }
}

const marinesCitySelection = function(cityID, planetID, player) {
  
    if (!marineSelected) {
        addMarinesToArmy(cityID, planetID);
        marineSelected = true
        document.querySelector("#embark-button-marines").style.display = "block";
        document.querySelector("#marines-unit-icon").style.boxShadow = "0px 0px 12px white";
        marineUnitAmount = map2Cities[cityID].marines.length;
        document.querySelector("#unit-move-marines-slider").max = marineUnitAmount;
        document.querySelector("#unit-move-marines-slider").value = marineUnitAmount;
        document.querySelector('#marines-move-amount').textContent = marineUnitAmount;
        document.querySelector("#move-marines").style.display = "flex";
    } else {
        removeMarinesFromArmy(cityID, planetID);
        disembarkMarines(cityID, planetID);
        document.querySelector("#embark-button-marines").style.display = "none";
        document.querySelector("#marines-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-marines").style.display = "none";
        document.querySelector("#move-marines").style.display = "none";
        document.querySelector("#unit-move-marines-slider").value = 0;
    }
}

const spaceInfantryCitySelection = function(cityID, planetID, player) {
  
    if (!spaceInfantrySelected) {
      addSpaceInfantryToArmy(cityID, planetID);
        spaceInfantrySelected = true;
        document.querySelector("#embark-button-space-infantry").style.display = "block";
        document.querySelector("#space-infantry-unit-icon").style.boxShadow = "0px 0px 12px white";
        spaceInfantryUnitAmount = map2Cities[cityID].spaceInfantry.length;
        document.querySelector("#unit-move-space-infantry-slider").max = spaceInfantryUnitAmount;
        document.querySelector("#unit-move-space-infantry-slider").value = spaceInfantryUnitAmount;
        document.querySelector('#space-infantry-move-amount').textContent = spaceInfantryUnitAmount;
        document.querySelector("#move-space-infantry").style.display = "flex";
    } else {
        removeSpaceInfantryFromArmy(cityID, planetID);
        disembarkSpaceInfantry(cityID, planetID);
        document.querySelector("#embark-button-space-infantry").style.display = "none";
        document.querySelector("#space-infantry-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-space-infantry").style.display = "none";
        document.querySelector("#move-space-infantry").style.display = "none";
        document.querySelector("#unit-move-space-infantry-slider").value = 0;
    }
}

const spaceMarinesCitySelection = function(cityID, planetID, player) {
  
    if (!spaceMarineSelected) {
        addSpaceMarinesToArmy(cityID, planetID);
        spaceMarineSelected = true;
        document.querySelector("#embark-button-space-marines").style.display = "block";
        document.querySelector("#space-marines-unit-icon").style.boxShadow = "0px 0px 12px white";
        spaceMarineUnitAmount = map2Cities[cityID].spaceMarines.length;
        document.querySelector("#unit-move-space-marines-slider").max = spaceMarineUnitAmount;
        document.querySelector("#unit-move-space-marines-slider").value = spaceMarineUnitAmount;
        document.querySelector('#space-marines-move-amount').textContent = spaceMarineUnitAmount;
        document.querySelector("#move-space-marines").style.display = "flex";
    } else {
        removeSpaceMarinesFromArmy(cityID, planetID);
        disembarkSpaceMarines(cityID, planetID);
        document.querySelector("#embark-button-space-marines").style.display = "none";
        document.querySelector("#space-marines-unit-icon").style.boxShadow = "none";
        document.querySelector(".embark-img-space-marines").style.display = "none";
        document.querySelector("#move-space-marines").style.display = "none";
        document.querySelector("#unit-move-space-marines-slider").value = 0;
    }
}

const destroyerCitySelection = function(cityID, planetID, player) {
  
    if (!destroyerSelected) {
        destroyerSelected = true;
        addDestroyersToFleet(cityID, planetID);
        document.querySelector("#destroyer-unit-icon").style.boxShadow = "0px 0px 12px white";
        destroyerUnitAmount = map2Cities[cityID].destroyers.length;
        document.querySelector("#unit-move-destroyer-slider").max = destroyerUnitAmount;
        document.querySelector("#unit-move-destroyer-slider").value = destroyerUnitAmount;
        document.querySelector('#destroyer-move-amount').textContent = destroyerUnitAmount;
        document.querySelector("#move-destroyer").style.display = "flex";
    } else {
        removeDestroyersFromFleet(cityID, planetID, false);
        document.querySelector("#destroyer-unit-icon").style.boxShadow = "none";
        document.querySelector("#move-destroyer").style.display = "none";
        document.querySelector("#unit-move-destroyer-slider").value = 0;
    }
}

const submarineCitySelection = function(cityID, planetID, player) {
    
    if (!submarineSelected) {
        submarineSelected = true;
        addSubmarinesToFleet(cityID, planetID);
        document.querySelector("#submarine-unit-icon").style.boxShadow = "0px 0px 12px white";
        submarineUnitAmount = map2Cities[cityID].submarines.length;
        document.querySelector("#unit-move-submarines-slider").max = submarineUnitAmount;
        document.querySelector("#unit-move-submarines-slider").value = submarineUnitAmount;
        document.querySelector('#submarine-move-amount').textContent = submarineUnitAmount;
        document.querySelector("#move-submarine").style.display = "flex";
    } else {
        removeSubmarinesFromFleet(cityID, planetID);
        document.querySelector("#submarine-unit-icon").style.boxShadow = "none";
        document.querySelector("#move-submarine").style.display = "none";
        document.querySelector("#unit-move-submarines-slider").value = 0;
    }
}

const carrierCitySelection = function(cityID, planetID, player) {
    
    if (!carrierSelected) {
        carrierSelected = true;
        addCarriersToFleet(cityID, planetID);
        document.querySelector("#carrier-unit-icon").style.boxShadow = "0px 0px 12px white";
        carrierUnitAmount = map2Cities[cityID].aircraftCarriers.length;
        document.querySelector("#unit-move-carrier-slider").max = carrierUnitAmount;
        document.querySelector("#unit-move-carrier-slider").value = carrierUnitAmount;
        document.querySelector('#carrier-move-amount').textContent = carrierUnitAmount;
        document.querySelector("#move-carrier").style.display = "flex";
    } else {
        removeCarriersFromFleet(cityID, planetID, false);
        document.querySelector("#carrier-unit-icon").style.boxShadow = "none";
        document.querySelector("#move-carrier").style.display = "none";
        document.querySelector("#unit-move-carrier-slider").value = 0;
    }
}





const embarkInfantry = function(cityID, planetID) {
    
    if (planetID === 1) {
      
    } else if (planetID === 2) {
      
      if (map2Cities[cityID].coastal || map2Cities[cityID].isSeaStead || map2Cities[cityID].isRig) {
        cityOwner = map2Cities[cityID].ownerID;
        if (map2Cities[cityID].fleet.length === 0) {
          // we have now determined that in this city, on this planet, the city is either coastal or a SeaStead and it doesn't have a fleet
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(currentFleetIndex);
          // after we have created the new fleet object, we must now push the object so it is accessible globally and to the city
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        // now that we have either created a fleet for this city or we have one already in place, we must add these units to the fleet
        map2Cities[cityID].infantry.forEach(infantryID => {
          // the code being executed here, is extremely similar to the code executed in 'iterateXAmount()' functions at the top of the page
          if (cityOwner === map2Cities[cityID].infantryOwnerID[infantryID]) {
            // check to see if the fleet has capacity then add them
            if (navalFleets[currentFleetIndex].landEmbarkAmount <= (navalFleets[currentFleetIndex].landEmbarkCapacity - infantryFleetVolume)) {
              // there is room for at least one more land unit in this fleet, so load this infantry unit into the fleet
              navalFleets[currentFleetIndex].infantry.push(infantryID);
              infantryUnits[infantryID].fleet = currentFleetIndex;
              navalFleets[currentFleetIndex].landEmbarkAmount += infantryFleetVolume;
              infantryEmbarked = true;
            }
          }
        });
        if (infantryEmbarked) {
          document.querySelector(".embark-img-infantry").style.display = "block";
          document.querySelector("#embark-button-infantry").setAttribute("onclick","disembarkInfantry(" + cityID + ", " + planetID + ")");
        }
        console.log(navalFleets[currentFleetIndex]);
        // infantry display army and fleet information for testing purposes
      }
      
    } else if (planetID === 3) {
      
    } else if (planetID === 4) {
      
    }
}

const embarkTanks = function(cityID, planetID) {
    
    if (planetID === 1) {
      
    } else if (planetID === 2) {
      
      if (map2Cities[cityID].coastal || map2Cities[cityID].isSeaStead || map2Cities[cityID].isRig) {
        cityOwner = map2Cities[cityID].ownerID;
        if (map2Cities[cityID].fleet.length === 0) {
          // we have now determined that in this city, on this planet, the city is either coastal or a SeaStead and it doesn't have a fleet
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(currentFleetIndex);
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        // now that we have either created a fleet for this city or we have one already in place, we must add these units to the fleet
        map2Cities[cityID].tanks.forEach(tankID => {
          // the code being executed here, is extremely similar to the code executed in 'iterateXAmount()' functions at the top of the page
          if (cityOwner === map2Cities[cityID].tanksOwnerID[tankID]) {
            // check to see if the fleet has capacity then add them
            if (navalFleets[currentFleetIndex].landEmbarkAmount <= (navalFleets[currentFleetIndex].landEmbarkCapacity - tankFleetVolume)) {
              // there is room for at least one more land unit in this fleet, so load this infantry unit into the fleet
              navalFleets[currentFleetIndex].tanks.push(tankID);
              tankUnits[tankID].fleet = currentFleetIndex;
              navalFleets[currentFleetIndex].landEmbarkAmount += tankFleetVolume;
              tankEmbarked = true;
            }
          }
        });
        if (tankEmbarked) {
          document.querySelector(".embark-img-tank").style.display = "block";
          document.querySelector("#embark-button-tanks").setAttribute("onclick","disembarkTanks(" + cityID + ", " + planetID + ")");
        }
      }
      
    } else if (planetID === 3) {
      
    } else if (planetID === 4) {
      
    }
}

const embarkAircraft = function(cityID, planetID) {
    
    if (planetID === 1) {
      
    } else if (planetID === 2) {
      
      if (map2Cities[cityID].coastal || map2Cities[cityID].isSeaStead || map2Cities[cityID].isRig) {
        cityOwner = map2Cities[cityID].ownerID;
        if (map2Cities[cityID].fleet.length === 0) {
          // we have now determined that in this city, on this planet, the city is either coastal or a SeaStead and it doesn't have a fleet
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(currentFleetIndex);
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        // now that we have either created a fleet for this city or we have one already in place, we must add these units to the fleet
        map2Cities[cityID].planes.forEach(aircraftID => {
          // the code being executed here, is extremely similar to the code executed in 'iterateXAmount()' functions at the top of the page
          if (cityOwner === map2Cities[cityID].planesOwnerID[aircraftID]) {
            // check to see if the fleet has capacity then add them
            if (navalFleets[currentFleetIndex].aircraft.length < navalFleets[currentFleetIndex].aircraftCapacity) {
              // there is room for at least one more aircraft in this fleet, so load this aircraft
              navalFleets[currentFleetIndex].aircraft.push(aircraftID);
              aircraftUnits[aircraftID].fleet = currentFleetIndex;
              aircraftEmbarked = true;
            }
          }
        });
        if (aircraftEmbarked) {
          document.querySelector(".embark-img-aircraft").style.display = "block";
          document.querySelector("#embark-button-aircraft").setAttribute("onclick","disembarkAircraft(" + cityID + ", " + planetID + ")");
        }
      }
      
    } else if (planetID === 3) {
      
    } else if (planetID === 4) {
      
    }
}

const embarkMarines = function(cityID, planetID) {
    
    if (planetID === 1) {
      
    } else if (planetID === 2) {
      
      if (map2Cities[cityID].coastal || map2Cities[cityID].isSeaStead || map2Cities[cityID].isRig) {
        cityOwner = map2Cities[cityID].ownerID;
        if (map2Cities[cityID].fleet.length === 0) {
          // we have now determined that in this city, on this planet, the city is either coastal or a SeaStead and it doesn't have a fleet
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(currentFleetIndex);
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        // now that we have either created a fleet for this city or we have one already in place, we must add these units to the fleet
        map2Cities[cityID].marines.forEach(marineID => {
          // the code being executed here, is extremely similar to the code executed in 'iterateXAmount()' functions at the top of the page
          if (cityOwner === map2Cities[cityID].marinesOwnerID[marineID]) {
            // check to see if the fleet has capacity then add them
            if (navalFleets[currentFleetIndex].landEmbarkAmount <= (navalFleets[currentFleetIndex].landEmbarkCapacity - marineFleetVolume)) {
              // there is room for at least one more land unit in this fleet, so load this infantry unit into the fleet
              navalFleets[currentFleetIndex].marines.push(marineID);
              marineUnits[marineID].fleet = currentFleetIndex;
              navalFleets[currentFleetIndex].landEmbarkAmount += marineFleetVolume;
              marineEmbarked = true;
            }
          }
        });
        if (marineEmbarked) {
          document.querySelector(".embark-img-marines").style.display = "block";
          document.querySelector("#embark-button-marines").setAttribute("onclick","disembarkMarines(" + cityID + ", " + planetID + ")");
        }
      }
      
    } else if (planetID === 3) {
      
    } else if (planetID === 4) {
      
    }
}

const embarkSpaceInfantry = function(cityID, planetID) {
    
    if (planetID === 1) {
      
    } else if (planetID === 2) {
      
      if (map2Cities[cityID].coastal || map2Cities[cityID].isSeaStead || map2Cities[cityID].isRig) {
        cityOwner = map2Cities[cityID].ownerID;
        if (map2Cities[cityID].fleet.length === 0) {
          // we have now determined that in this city, on this planet, the city is either coastal or a SeaStead and it doesn't have a fleet
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(currentFleetIndex);
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        // now that we have either created a fleet for this city or we have one already in place, we must add these units to the fleet
        map2Cities[cityID].spaceInfantry.forEach(spaceInfantryID => {
          // the code being executed here, is extremely similar to the code executed in 'iterateXAmount()' functions at the top of the page
          if (cityOwner === map2Cities[cityID].spaceInfantryOwnerID[spaceInfantryID]) {
            // check to see if the fleet has capacity then add them
            if (navalFleets[currentFleetIndex].landEmbarkAmount <= (navalFleets[currentFleetIndex].landEmbarkCapacity - spaceInfantryFleetVolume)) {
              // there is room for at least one more land unit in this fleet, so load this infantry unit into the fleet
              navalFleets[currentFleetIndex].spaceInfantry.push(spaceInfantryID);
              spaceInfantryUnits[spaceInfantryID].fleet = currentFleetIndex;
              navalFleets[currentFleetIndex].landEmbarkAmount += spaceInfantryFleetVolume;
              spaceInfantryEmbarked = true;
            }
          }
        });
        if (spaceInfantryEmbarked) {
          document.querySelector(".embark-img-space-infantry").style.display = "block";
          document.querySelector("#embark-button-space-infantry").setAttribute("onclick","disembarkSpaceInfantry(" + cityID + ", " + planetID + ")");
        }
      }
      
    } else if (planetID === 3) {
      
    } else if (planetID === 4) {
      
    }
}

const embarkSpaceMarines = function(cityID, planetID) {
    
    if (planetID === 1) {
      
    } else if (planetID === 2) {
      
      if (map2Cities[cityID].coastal || map2Cities[cityID].isSeaStead || map2Cities[cityID].isRig) {
        cityOwner = map2Cities[cityID].ownerID;
        if (map2Cities[cityID].fleet.length === 0) {
          // we have now determined that in this city, on this planet, the city is either coastal or a SeaStead and it doesn't have a fleet
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(currentFleetIndex);
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        // now that we have either created a fleet for this city or we have one already in place, we must add these units to the fleet
        map2Cities[cityID].spaceMarines.forEach(spaceMarineID => {
          // the code being executed here, is extremely similar to the code executed in 'iterateXAmount()' functions at the top of the page
          if (cityOwner === map2Cities[cityID].spaceMarinesOwnerID[spaceMarineID]) {
            // check to see if the fleet has capacity then add them
            if (navalFleets[currentFleetIndex].landEmbarkAmount <= (navalFleets[currentFleetIndex].landEmbarkCapacity - spaceMarineFleetVolume)) {
              // there is room for at least one more land unit in this fleet, so load this infantry unit into the fleet
              navalFleets[currentFleetIndex].spaceMarines.push(spaceMarineID);
              spaceMarineUnits[spaceMarineID].fleet = currentFleetIndex;
              navalFleets[currentFleetIndex].landEmbarkAmount += spaceMarineFleetVolume;
              spaceMarineEmbarked = true;
            }
          }
        });
        if (spaceMarineEmbarked) {
          document.querySelector(".embark-img-space-marines").style.display = "block";
          document.querySelector("#embark-button-space-marines").setAttribute("onclick","disembarkSpaceMarines(" + cityID + ", " + planetID + ")");
        }
      }
      
    } else if (planetID === 3) {
      
    } else if (planetID === 4) {
      
    }
}




const disembarkInfantry = function(cityID, planetID) {
  disembarkInfantryAmount = 0;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    // we are acting on units on planet 2
    fleetID = map2Cities[cityID].fleet[0];
    // find the first fleet in the city array, this will be the fleet this unit is a part of
    if (fleetID != null){
      disembarkingInfantryArray = navalFleets[fleetID].infantry;
      
      disembarkingInfantryArray.forEach(infantryID => {
        disembarkInfantryAmount += infantryFleetVolume;
        infantryUnits[infantryID].fleet = null;
        // change the 'fleet' each unit belongs to into 'null' so the unit no longer thinks it is embarked
        // and also increase the amount of embark space that will be freed up by these units leaving the fleet
      });
      
      navalFleets[fleetID].landEmbarkAmount -= disembarkInfantryAmount;
      navalFleets[fleetID].infantry = [];
      // free up embark space and also finally remove all infantry units from the fleet
    }
    
    if (document.querySelector(".embark-img-infantry")) {
      document.querySelector(".embark-img-infantry").style.display = "none";
      document.querySelector("#embark-button-infantry").setAttribute("onclick","embarkInfantry(" + cityID + ", " + planetID + ")");
    }
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  infantryEmbarked = false;
}

const disembarkTanks = function(cityID, planetID) {
  disembarkTankAmount = 0;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    fleetID = map2Cities[cityID].fleet[0];
    
    if (fleetID != null){
      disembarkingTanksArray = navalFleets[fleetID].tanks;
      
      disembarkingTanksArray.forEach(tanksID => {
        disembarkTankAmount += tankFleetVolume;
        tankUnits[tanksID].fleet = null;
      });
      
      navalFleets[fleetID].landEmbarkAmount -= disembarkTankAmount;
      navalFleets[fleetID].tanks = [];
    }
    
    if (document.querySelector(".embark-img-tank")) {
      document.querySelector(".embark-img-tank").style.display = "none";
      document.querySelector("#embark-button-tanks").setAttribute("onclick","embarkTanks(" + cityID + ", " + planetID + ")");
    }
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  tankEmbarked = false;
}

const disembarkAircraft = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    fleetID = map2Cities[cityID].fleet[0];
    
    if (fleetID != null){
      disembarkingAircraftArray = navalFleets[fleetID].aircraft;
      
      disembarkingAircraftArray.forEach(aircraftID => {
        aircraftUnits[aircraftID].fleet = null;
      });
      
      navalFleets[fleetID].aircraft = [];
    }
    
    if (document.querySelector(".embark-img-aircraft")) {
      document.querySelector(".embark-img-aircraft").style.display = "none";
      document.querySelector("#embark-button-aircraft").setAttribute("onclick","embarkAircraft(" + cityID + ", " + planetID + ")");
    }
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  aircraftEmbarked = false;
}

const disembarkMarines = function(cityID, planetID) {
  
  disembarkMarineAmount = 0;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    fleetID = map2Cities[cityID].fleet[0];
    
    if (fleetID != null){
      disembarkingMarinesArray = navalFleets[fleetID].marines;
      
      disembarkingMarinesArray.forEach(marineID => {
        disembarkMarineAmount += marineFleetVolume;
        marineUnits[marineID].fleet = null;
      });
      
      navalFleets[fleetID].landEmbarkAmount -= disembarkMarineAmount;
      navalFleets[fleetID].marines = [];
    }
    
    if (document.querySelector(".embark-img-marines")) {
      document.querySelector(".embark-img-marines").style.display = "none";
      document.querySelector("#embark-button-marines").setAttribute("onclick","embarkMarines(" + cityID + ", " + planetID + ")");
    }
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  marineEmbarked = false;
}

const disembarkSpaceInfantry = function(cityID, planetID) {
  
  disembarkSpaceInfantryAmount = 0;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    fleetID = map2Cities[cityID].fleet[0];
    
    if (fleetID != null){
      disembarkingSpaceInfantryArray = navalFleets[fleetID].spaceInfantry;
      
      disembarkingSpaceInfantryArray.forEach(spaceInfantryID => {
        disembarkSpaceInfantryAmount += spaceInfantryFleetVolume;
        spaceInfantryUnits[spaceInfantryID].fleet = null;
      });
      
      navalFleets[fleetID].landEmbarkAmount -= disembarkSpaceInfantryAmount;
      navalFleets[fleetID].spaceInfantry = [];
    }
    
    if (document.querySelector(".embark-img-space-infantry")) {
      document.querySelector(".embark-img-space-infantry").style.display = "none";
      document.querySelector("#embark-button-space-infantry").setAttribute("onclick","embarkSpaceInfantry(" + cityID + ", " + planetID + ")");
    }
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  spaceInfantryEmbarked = false;
  
}

const disembarkSpaceMarines = function(cityID, planetID) {
  disembarkSpaceMarineAmount = 0;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    fleetID = map2Cities[cityID].fleet[0];
    
    if (fleetID != null){
      disembarkingSpaceMarinesArray = navalFleets[fleetID].spaceMarines;
      
      disembarkingSpaceMarinesArray.forEach(spaceMarineID => {
        disembarkSpaceMarineAmount += spaceMarineFleetVolume;
        spaceMarineUnits[spaceMarineID].fleet = null;
      });
      
      navalFleets[fleetID].landEmbarkAmount -= disembarkSpaceMarineAmount;
      navalFleets[fleetID].spaceMarines = [];
    }
    
    if (document.querySelector(".embark-img-space-marines")) {
      document.querySelector(".embark-img-space-marines").style.display = "none";
      document.querySelector("#embark-button-space-marines").setAttribute("onclick","embarkSpaceMarines(" + cityID + ", " + planetID + ")");
    }
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  spaceMarineEmbarked = false;
}





const addDestroyersToFleet = function(cityID, planetID) {
  
  cityOwner = map2Cities[cityID].ownerID;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    
    if (map2Cities[cityID].fleet.length === 0) {
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          if (map2Cities[cityID].admirals.length > 0) {
            fleetAdmiral = map2Cities[cityID].admirals[1];
          } else {
            fleetAdmiral = null;
          }
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "admiral": fleetAdmiral,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(newFleetObject);
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        
      map2Cities[cityID].destroyers.forEach(destroyerID => {
      if (cityOwner === map2Cities[cityID].destroyersOwnerID[destroyerID]) {
        // we need to make sure that the destroyer being put in this fleet actually belongs to the city owner I am
        // not sure if this is neccesary since I am not sure if destroyers will be able to enter other cities yet
        navalFleets[currentFleetIndex].destroyers.push(destroyerID);
        destroyerUnits[destroyerID].fleet = currentFleetIndex;
        navalFleets[currentFleetIndex].landEmbarkCapacity += (destroyerCarryingCapacity + countries[cityOwner].destroyerCarryingCapacityBonus);
        // add new carrying capacity to the fleet now that this destroyer has been added, equal to the base plus any national bonus
      }
    });
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}

const addSubmarinesToFleet = function(cityID, planetID) {
  
  cityOwner = map2Cities[cityID].ownerID;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    
    if (map2Cities[cityID].fleet.length === 0) {
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          if (map2Cities[cityID].admirals.length > 0) {
            fleetAdmiral = map2Cities[cityID].admirals[1];
          } else {
            fleetAdmiral = null;
          }
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "admiral": fleetAdmiral,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(newFleetObject);
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        
      map2Cities[cityID].submarines.forEach(submarineID => {
      if (cityOwner === map2Cities[cityID].submarinesOwnerID[submarineID]) {
        // we need to make sure that the submarine being put in this fleet actually belongs to the city owner I am
        // not sure if this is neccesary since I am not sure if submarines will be able to enter other cities yet
        navalFleets[currentFleetIndex].submarines.push(submarineID);
        submarineUnits[submarineID].fleet = currentFleetIndex;
        // add new carrying capacity to the fleet now that this destroyer has been added, equal to the base plus any national bonus
      }
    });
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}

const addCarriersToFleet = function(cityID, planetID) {
  
  cityOwner = map2Cities[cityID].ownerID;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    
    if (map2Cities[cityID].fleet.length === 0) {
          navalFleetIndex++;
          currentFleetIndex = navalFleetIndex;
          if (map2Cities[cityID].admirals.length > 0) {
            fleetAdmiral = map2Cities[cityID].admirals[1];
          } else {
            fleetAdmiral = null;
          }
          newFleetObject = {
            "id": navalFleetIndex,
            "ownerID": cityOwner,
            "planetID": 2,
            "cityID": cityID,
            "admiral": fleetAdmiral,
            "reEnterHomeCity": false,
            "xpos": map2Cities[cityID].xpos,
            "ypos": map2Cities[cityID].ypos,
            "morale": countries[cityOwner].morale,
            "destroyers": [],
            "submarines": [],
            "carriers": [],
            "infantry": [],
            "tanks": [],
            "marines": [],
            "spaceInfantry": [],
            "spaceMarines": [],
            "aircraft": [],
            "landEmbarkAmount": 0,
            "landEmbarkCapacity": 0,
            "aircraftCapacity": 0,
          }
          navalFleets.push(newFleetObject);
          map2Cities[cityID].fleet.push(newFleetObject);
        } else {
            currentFleetIndex = map2Cities[cityID].fleet[0];
        }
        
      map2Cities[cityID].aircraftCarriers.forEach(carrierID => {
      if (cityOwner === map2Cities[cityID].aircraftCarriersOwnerID[carrierID]) {
        // we need to make sure that the carrier being put in this fleet actually belongs to the city owner I am
        // not sure if this is neccesary since I am not sure if carriers will be able to enter other cities yet
        navalFleets[currentFleetIndex].carriers.push(carrierID);
        carrierUnits[carrierID].fleet = currentFleetIndex;
        navalFleets[currentFleetIndex].landEmbarkCapacity += carrierCarryingCapacity;
        navalFleets[currentFleetIndex].aircraftCapacity += (countries[cityOwner].aircraftCapacity + countries[cityOwner].carrierCarryingCapacityBonus);
        // add new carrying capacity to the fleet now that this destroyer has been added, equal to the base plus any national bonus
      }
    });
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}

const removeDestroyersFromFleet = function(cityID, planetID, cityClose) {
  
  cityOwner = map2Cities[cityID].ownerID;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    
      fleetID = map2Cities[cityID].fleet[0]; 
      navalFleets[fleetID].destroyers.forEach(destroyerID => {
        
        destroyerUnits[destroyerID].fleet = null;
        // change each destroyer formerly in this fleet so it no longer is attached to the fleet at the unit level
        navalFleets[fleetID].landEmbarkCapacity -= (destroyerCarryingCapacity + countries[cityOwner].destroyerCarryingCapacityBonus);
        // remove the carrying capacity belonging to this fleet whe the destroyers are removed
        
    });
      
      navalFleets[fleetID].destroyers = [];
      // set the destroyers property of the fleet object to be an empty array since all destroyers have been removed
      
      if (!cityClose) {
        // only disembark all units if this unit has been selected and the city is not being closed
        // if the city is being closed all units have already been disembarked in 'closeInteractions()' by the time this code is run
        disembarkInfantry(cityID, planetIndex);
        disembarkTanks(cityID, planetIndex);
        disembarkAircraft(cityID, planetIndex);
        disembarkMarines(cityID, planetIndex);
        disembarkSpaceInfantry(cityID, planetIndex);
        disembarkSpaceMarines(cityID, planetIndex);
      }
      
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  destroyerSelected = false;
}

const removeSubmarinesFromFleet = function(cityID, planetID) {
  
  cityOwner = map2Cities[cityID].ownerID;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    
      fleetID = map2Cities[cityID].fleet[0]; 
      navalFleets[fleetID].submarines.forEach(submarineID => {
        
        submarineUnits[submarineID].fleet = null;
        
    });
      
      navalFleets[fleetID].submarines = [];
      
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  submarineSelected = false;
}

const removeCarriersFromFleet = function(cityID, planetID, cityClose) {
  
  cityOwner = map2Cities[cityID].ownerID;
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    
      fleetID = map2Cities[cityID].fleet[0]; 
      navalFleets[fleetID].carriers.forEach(carrierID => {
        
        carrierUnits[carrierID].fleet = null;
        navalFleets[fleetID].landEmbarkCapacity -= carrierCarryingCapacity;
        navalFleets[fleetID].aircraftCapacity -= (countries[cityOwner].aircraftCapacity + countries[cityOwner].carrierCarryingCapacityBonus);
        
    });
      
      navalFleets[fleetID].carriers = [];
      
      if (!cityClose) {
        disembarkInfantry(cityID, planetIndex);
        disembarkTanks(cityID, planetIndex);
        disembarkAircraft(cityID, planetIndex);
        disembarkMarines(cityID, planetIndex);
        disembarkSpaceInfantry(cityID, planetIndex);
        disembarkSpaceMarines(cityID, planetIndex);
      }
      
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  carrierSelected = false;
}




const addInfantryToArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    cityID = parseInt(cityID);
    cityOwner = map2Cities[cityID].ownerID;
    if (map2Cities[cityID].army.length === 0) {
      landArmyIndex++;
      currentArmyIndex = landArmyIndex;
      if (map2Cities[cityID].generals.length > 0) {
        armyGeneral = map2Cities[cityID].generals[1];
      } else {
        armyGeneral = null;
      }
      newArmyObject = {
        "id": landArmyIndex,
        "ownerID": cityOwner,
        "guerrillaArmyIdeology": null,
        "planetID": 2,
        "cityID": cityID,
        "general": armyGeneral,
        "reEnterHomeCity": false,
        "xpos": map2Cities[cityID].xpos,
        "ypos": map2Cities[cityID].ypos,
        "morale": 0,
        "maxMorale": 0,
        "infantry": [],
        "tanks": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
      }
      landArmies.push(newArmyObject);
      map2Cities[cityID].army.push(currentArmyIndex);
    } else {
        currentArmyIndex = map2Cities[cityID].army[0];
    }
      map2Cities[cityID].infantry.forEach(infantryID => {
      // the code being executed here, is extremely similar to the code executed in 'iterateXAmount()' functions at the top of the page
      if (cityOwner === map2Cities[cityID].infantryOwnerID[infantryID]) {
        landArmies[currentArmyIndex].infantry.push(infantryID);
        landArmies[currentArmyIndex].morale += infantryUnits[infantryID].currentMorale;
        landArmies[currentArmyIndex].maxMorale += infantryUnits[infantryID].maxMorale;
        infantryUnits[infantryID].army = currentArmyIndex;
      }
    });
    console.log(landArmies[currentArmyIndex]);
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}

const addTanksToArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    cityID = parseInt(cityID);
    cityOwner = map2Cities[cityID].ownerID;
    if (map2Cities[cityID].army.length === 0) {
      landArmyIndex++;
      currentArmyIndex = landArmyIndex;
      if (map2Cities[cityID].generals.length > 0) {
        armyGeneral = map2Cities[cityID].generals[1];
      } else {
        armyGeneral = null;
      }
      newArmyObject = {
        "id": currentArmyIndex,
        "ownerID": cityOwner,
        "guerrillaArmyIdeology": null,
        "planetID": 2,
        "cityID": cityID,
        "general": armyGeneral,
        "reEnterHomeCity": false,
        "xpos": map2Cities[cityID].xpos,
        "ypos": map2Cities[cityID].ypos,
        "morale": 0,
        "maxMorale": 0,
        "infantry": [],
        "tanks": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
      }
      landArmies.push(newArmyObject);
      map2Cities[cityID].army.push(currentArmyIndex);
    } else {
        currentArmyIndex = map2Cities[cityID].army[0];
    }
      map2Cities[cityID].tanks.forEach(tankID => {
      if (cityOwner === map2Cities[cityID].tanksOwnerID[tankID]) {
        landArmies[currentArmyIndex].tanks.push(tankID);
        landArmies[currentArmyIndex].morale += tankUnits[tankID].currentMorale;
        landArmies[currentArmyIndex].maxMorale += tankUnits[tankID].maxMorale;
        tankUnits[tankID].army = currentArmyIndex;
      }
    });
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}

const addMarinesToArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    cityID = parseInt(cityID);
    cityOwner = map2Cities[cityID].ownerID;
    if (map2Cities[cityID].army.length === 0) {
      landArmyIndex++;
      currentArmyIndex = landArmyIndex;
      if (map2Cities[cityID].generals.length > 0) {
        armyGeneral = map2Cities[cityID].generals[1];
      } else {
        armyGeneral = null;
      }
      newArmyObject = {
        "id": landArmyIndex,
        "ownerID": cityOwner,
        "guerrillaArmyIdeology": null,
        "planetID": 2,
        "cityID": cityID,
        "general": armyGeneral,
        "reEnterHomeCity": false,
        "xpos": map2Cities[cityID].xpos,
        "ypos": map2Cities[cityID].ypos,
        "morale": 0,
        "maxMorale": 0,
        "infantry": [],
        "tanks": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
      }
      landArmies.push(newArmyObject);
      map2Cities[cityID].army.push(currentArmyIndex);
    } else {
        currentArmyIndex = map2Cities[cityID].army[0];
    }
      map2Cities[cityID].marines.forEach(marineID => {
      if (cityOwner === map2Cities[cityID].marinesOwnerID[marineID]) {
        landArmies[currentArmyIndex].marines.push(marineID);
        landArmies[currentArmyIndex].morale += marineUnits[marineID].currentMorale;
        landArmies[currentArmyIndex].maxMorale += marineUnits[marineID].maxMorale;
        marineUnits[marineID].army = currentArmyIndex;
      }
    });
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}

const addSpaceInfantryToArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    cityID = parseInt(cityID);
    cityOwner = map2Cities[cityID].ownerID;
    if (map2Cities[cityID].army.length === 0) {
      landArmyIndex++;
      currentArmyIndex = landArmyIndex;
      if (map2Cities[cityID].generals.length > 0) {
        armyGeneral = map2Cities[cityID].generals[1];
      } else {
        armyGeneral = null;
      }
      newArmyObject = {
        "id": landArmyIndex,
        "ownerID": cityOwner,
        "guerrillaArmyIdeology": null,
        "planetID": 2,
        "cityID": cityID,
        "general": armyGeneral,
        "reEnterHomeCity": false,
        "xpos": map2Cities[cityID].xpos,
        "ypos": map2Cities[cityID].ypos,
        "morale": 0,
        "maxMorale": 0,
        "infantry": [],
        "tanks": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
      }
      landArmies.push(newArmyObject);
      map2Cities[cityID].army.push(currentArmyIndex);
    } else {
        currentArmyIndex = map2Cities[cityID].army[0];
    }
      map2Cities[cityID].spaceInfantry.forEach(spaceInfantryID => {
      if (cityOwner === map2Cities[cityID].spaceInfantryOwnerID[spaceInfantryID]) {
        landArmies[currentArmyIndex].spaceInfantry.push(spaceInfantryID);
        landArmies[currentArmyIndex].morale += spaceInfantryUnits[spaceInfantryID].currentMorale;
        landArmies[currentArmyIndex].maxMorale += spaceInfantryUnits[spaceInfantryID].maxMorale;
        spaceInfantryUnits[spaceInfantryID].army = currentArmyIndex;
      }
    });
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}

const addSpaceMarinesToArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    cityID = parseInt(cityID);
    cityOwner = map2Cities[cityID].ownerID;
    if (map2Cities[cityID].army.length === 0) {
      landArmyIndex++;
      currentArmyIndex = landArmyIndex;
      if (map2Cities[cityID].generals.length > 0) {
        armyGeneral = map2Cities[cityID].generals[1];
      } else {
        armyGeneral = null;
      }
      newArmyObject = {
        "id": landArmyIndex,
        "ownerID": cityOwner,
        "guerrillaArmyIdeology": null,
        "planetID": 2,
        "cityID": cityID,
        "general": armyGeneral,
        "reEnterHomeCity": false,
        "xpos": map2Cities[cityID].xpos,
        "ypos": map2Cities[cityID].ypos,
        "morale": 0,
        "maxMorale": 0,
        "infantry": [],
        "tanks": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
      }
      landArmies.push(newArmyObject);
      map2Cities[cityID].army.push(currentArmyIndex);
    } else {
        currentArmyIndex = map2Cities[cityID].army[0];
    }
      map2Cities[cityID].spaceMarines.forEach(spaceMarineID => {
      if (cityOwner === map2Cities[cityID].spaceMarinesOwnerID[spaceMarineID]) {
        landArmies[currentArmyIndex].spaceMarines.push(spaceMarineID);
        landArmies[currentArmyIndex].morale += spaceMarineUnits[spaceMarineID].currentMorale;
        landArmies[currentArmyIndex].maxMorale += spaceMarineUnits[spaceMarineID].maxMorale;
        spaceMarineUnits[spaceMarineID].army = currentArmyIndex;
      }
    });
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}

// the function below to add guerillas to an army is not in use yet but it will be when guerillas are added to the game
const addGuerrillasToArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    cityID = parseInt(cityID);
    cityOwner = map2Cities[cityID].ownerID;
    if (map2Cities[cityID].army.length === 0) {
      // we have now determined that in this city, on this planet, the city is either coastal or a SeaStead and it doesn't have a fleet
      landArmyIndex++;
      currentArmyIndex = landArmyIndex;
      if (map2Cities[cityID].generals.length > 0) {
        armyGeneral = map2Cities[cityID].generals[1];
      } else {
        armyGeneral = null;
      }
      newArmyObject = {
        "id": landArmyIndex,
        "ownerID": cityOwner,
        "guerrillaArmyIdeology": null,
        "planetID": 2,
        "cityID": cityID,
        "general": armyGeneral,
        "reEnterHomeCity": false,
        "xpos": map2Cities[cityID].xpos,
        "ypos": map2Cities[cityID].ypos,
        "morale": 0,
        "maxMorale": 0,
        "infantry": [],
        "tanks": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
      }
      landArmies.push(newArmyObject);
      map2Cities[cityID].army.push(currentArmyIndex);
      // after we have created the new fleet object, we must now push the object so it is accessible globally and to the city
    } else {
        currentArmyIndex = map2Cities[cityID].army[0];
    }
    // now that we have either created a fleet for this city or we have one already in place, we must add these units to the fleet
      map2Cities[cityID].guerrillas.forEach(guerrillaID => {
      // the code being executed here, is extremely similar to the code executed in 'iterateXAmount()' functions at the top of the page
      if (cityOwner === map2Cities[cityID].guerillasOwnerID[guerrillaID]) {
        // check to see if the fleet has capacity then add them
        // there is room for at least one more land unit in this fleet, so load this infantry unit into the fleet
        landArmies[currentArmyIndex].guerilla.push(guerrillaID);
        landArmies[currentArmyIndex].morale += guerrillaUnits[guerrillaID].currentMorale;
        landArmies[currentArmyIndex].maxMorale += guerrillaUnits[guerrillaID].maxMorale;
        guerillaUnits[guerrillaID].army = currentArmyIndex;
      }
    });
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
}




const removeInfantryFromArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    // we are acting on units on planet 2
    armyID = map2Cities[cityID].army[0];
    // find the first army in the city array, this will be the army this unit is a part of
    detachingInfantryArray = landArmies[armyID].infantry;
    
    detachingInfantryArray.forEach(infantryID => {
      infantryUnits[infantryID].army = null;
      // change the 'army' property of these infantry so they no longer belong to this army
    });
    
    landArmies[armyID].infantry = [];
    // finally remove all infantry from this army
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  infantryEmbarked = false;
  infantrySelected = false;
}

const removeTanksFromArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    // we are acting on units on planet 2
    armyID = map2Cities[cityID].army[0];
    // find the first army in the city array, this will be the army this unit is a part of
    detachingTanksArray = landArmies[armyID].tanks;
    
    detachingTanksArray.forEach(tankID => {
      tankUnits[tankID].army = null;
      // change the 'army' property of these infantry so they no longer belong to this army
    });
    
    landArmies[armyID].tanks = [];
    // finally remove all infantry from this army
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  tankEmbarked = false;
  tankSelected = false;
}

const removeMarinesFromArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    // we are acting on units on planet 2
    armyID = map2Cities[cityID].army[0];
    // find the first army in the city array, this will be the army this unit is a part of
    detachingMarinesArray = landArmies[armyID].marines;
    
    detachingMarinesArray.forEach(marineID => {
      marineUnits[marineID].army = null;
      // change the 'army' property of these infantry so they no longer belong to this army
    });
    
    landArmies[armyID].marines = [];
    // finally remove all infantry from this army
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  marineEmbarked = false;
  marineSelected = false;
}

const removeSpaceInfantryFromArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    // we are acting on units on planet 2
    armyID = map2Cities[cityID].army[0];
    // find the first army in the city array, this will be the army this unit is a part of
    detachingSpaceInfantryArray = landArmies[armyID].spaceInfantry;
    
    detachingSpaceInfantryArray.forEach(spaceInfantryID => {
      spaceInfantryUnits[spaceInfantryID].army = null;
      // change the 'army' property of these infantry so they no longer belong to this army
    });
    
    landArmies[armyID].spaceInfantry = [];
    // finally remove all infantry from this army
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  spaceInfantryEmbarked = false;
  spaceInfantrySelected = false;
}

const removeSpaceMarinesFromArmy = function(cityID, planetID) {
  if (planetID == 1) {
    
  } else if (planetID == 2) {
    // we are acting on units on planet 2
    armyID = map2Cities[cityID].army[0];
    // find the first army in the city array, this will be the army this unit is a part of
    detachingSpaceMarinesArray = landArmies[armyID].spaceMarines;
    
    detachingSpaceMarinesArray.forEach(spaceMarineID => {
      spaceMarineUnits[spaceMarineID].army = null;
      // change the 'army' property of these infantry so they no longer belong to this army
    });
    
    landArmies[armyID].spaceMarines = [];
    // finally remove all infantry from this army
  } else if (planetID == 3) {
    
  } else if (planetID == 4) {
    
  }
  spaceMarineEmbarked = false;
  spaceMarineSelected = false;
}





const updateArmyDestroyer = function() {
  
}





const infantryArmyNull = function() {
    
}




const infantryArmyMax = function() {
    
}




const updateArmyInfantry = function() {
    
}





const spawnHostileGuerrillas = function(planetID, cityID, countryID, guerrillaType, seperatistID) {
  
  if (planetID == 1) {
    
    
    
  } else if (planetID == 2) {
    
    guerrillaHealth = countries[countryID].infantryMaxHealth * countries[countryID].guerrillaHealthPercent;
    
    if (guerrillaType == 0 || guerrillaType == 1) {
      // the guerrillas are seperatists or particularists
      guerrillaSpawnAmount = Math.round((map2Cities[cityID].population * (countries[countryID].guerrillaPopPercent * 2))/10000);
      // the guerrilla spawn amount is the population times the country's spawn rate times 2 divided by 10,000 rounded to the nearest
      // whole number to determine the number of hostile armies which will spawn
      if (guerrillaType == 0) {
        map2Cities[cityID].defenderName = countries[seperatistID].name + " Seperatists";
      } else {
        provinceID = map2Cities[cityID].provinceID;
        map2Cities[cityID].defenderName = map2Provinces[provinceID].name + " Particularists";
      }
      guerrillaMorale = Math.round(guerrillaHealth * countries[countryID].guerrillaMorale);
    } else {
      // the guerrillas are ideological
      guerrillaSpawnAmount = Math.round((map2Cities[cityID].population * ideologies[guerrillaType].guerrillaPopPercent)/10000);
      map2Cities[cityID].defenderName = ideologies[guerrillaType].name + " Rebels";
      // the name of the defending party in this city will be 'Ideology' Rebels
      guerrillaMorale = Math.round(guerrillaHealth * ideologies[guerrillaType].guerrillaMorale);
    }
    
    for (i = 0; i < guerrillaSpawnAmount; i++) {
      guerrillaUnits.push(
        {
          "id": guerrillaIndex,
          "ownerID": countryID,
          "ideology": guerrillaType,
          "seperatistID": seperatistID,
          "planetID": 2,
          "cityID": cityID,
          "army": null,
          "health": guerrillaHealth,
          "currentMorale": guerrillaMorale,
          "maxMorale": guerrillaMorale,
          "currentManpower": 10000,
        }
      );
      countries[countryID].hostileGuerrillas.push(guerrillaIndex);
      countries[countryID].hostileGuerrillasIdeology.push(guerrillaType);
      // ideological guerrillas will have their morale updated every month based on their ideology not on their spawn country
      // so the ideology of each unit gets kept track of here
      map2Cities[cityID].hostileGuerrillas.push(guerrillaIndex);
      map2Cities[cityID].hostileGuerrillasOwnerID.push(countryID);
      guerrillaIndex++;
    }
    
    if (guerrillaSpawnAmount > 0) {
      // if hostile guerrillas are present in a city any army entering the city will be made aware of this immediately and will
      // fight them
      
      map2Cities[cityID].defendingColor = "black";
      
      bestGeneralID = null;
      bestGeneralBonus = 0;
      map2Cities[cityID].generals.forEach(function(generalID) {
          generalOwner = generalUnits[generalID].ownerID;
          if (generalOwner == countries[countryID].id) {
            // this general belongs to the country spawning the rebels
            if (generalUnits[generalID].bonus > bestGeneralBonus) {
              bestGeneralID = generalID;
              // if this general has a higher bonus than any other general in this city owned by
              // this country, then put him in charge of the fight so his bonus can be applied
            }
          }
      });
      
      map2Cities[cityID].attackingGeneral = bestGeneralID;
      map2Cities[cityID].attackerName = countries[countryID].nameColored;
      map2Cities[cityID].attackingColor = countries[countryID].color;
      beginFightingHostileGuerrillas(planetID, cityID, countryID, []);
      // start a fight in the city between the country which owns the city and the hostile guerrillas which we have just spawned
    }
    
  } else if (planetID == 3) {
    
    
    
  } else if (planetID == 4) {
    
    
    
  }
  
}