



const openMoveArmiesWindow = function() {
    document.querySelector(".unit-move-interaction").style.display = "flex";
}



const updateArmyInfantry = function(amount) {
    document.querySelector("#infantry-move-amount").textContent = amount;
    // update land army composition here
}



const updateArmyTanks = function(amount) {
    document.querySelector("#tank-move-amount").textContent = amount;
    // update land army composition here
}



const updateArmyGuerrilla = function(amount) {
    document.querySelector("#guerrilla-move-amount").textContent = amount;
    // update land army composition here
}



const updateArmyMarines = function(amount) {
    document.querySelector("#marines-move-amount").textContent = amount;
    // update land army composition here
}

const updateArmySpaceInfantry = function(amount) {
    document.querySelector("#space-infantry-move-amount").textContent = amount;
    // update land army composition here
}



const updateArmySpaceMarines = function(amount) {
    document.querySelector("#space-marines-move-amount").textContent = amount;
    // update land army composition here
}




const displayNavalFleets = function() {
    cityID = document.querySelector("#city-index").textContent;
    document.querySelector("#naval-unit-group").background = "rgb(45,45,45)";
    document.querySelector("#land-unit-group").background = "rgb(60,60,60)";
    document.querySelector("#space-unit-group").background = "rgb(60,60,60)";
    document.querySelector(".bottom-unit-view").innerHTML = `
        <div class="unit-div">
          <p class="unit-name">Destroyers</p>
          <input type="hidden" id="destroyer-selected" value="0">
          <img class="unit-icon" src="public/images/destroyericon.png">
          <p class="unit-amount">4</p>
        </div>
        <div class="unit-div">
          <p class="unit-name">Marines</p>
          <input type="hidden" id="marines-selected" value="0">
          <img class="unit-icon" src="public/images/marinesicon.png">
          <p class="unit-amount">8,000</p>
        </div>
        <div class="unit-div">
          <p class="unit-name">Submarines</p>
          <input type="hidden" id="submarine-selected" value="0">
          <img class="unit-icon" src="public/images/submarineicon.png">
          <p class="unit-amount">1</p>
        </div>
        <div class="unit-div">
          <p class="unit-name">Aircraft Carriers</p>
          <input type="hidden" id="carrier-selected" value="0">
          <img class="unit-icon" src="public/images/carriericon.png">
          <p class="unit-amount">1</p>
        </div>`;
}

const displaySpaceFleets = function() {
    cityID = document.querySelector("#city-index").textContent;
    document.querySelector("#naval-unit-group").background = "rgb(60,60,60)";
    document.querySelector("#land-unit-group").background = "rgb(60,60,60)";
    document.querySelector("#space-unit-group").background = "rgb(45,45,45)";
    document.querySelector(".bottom-unit-view").innerHTML = `
        <div class="unit-div">
          <p class="unit-name">Task Ships</p>
          <input type="hidden" id="task-ship-selected" value="0">
          <img class="unit-icon" src="public/images/taskshipicon.png">
          <p class="unit-amount">1</p>
        </div>
        <div class="unit-div">
          <p class="unit-name">Space Infantry</p>
          <input type="hidden" id="space-infantry-selected" value="0">
          <img class="unit-icon" src="public/images/spaceinfantryicon.png">
          <p class="unit-amount">500</p>
        </div>
        <div class="unit-div">
          <p class="unit-name">Space Marines</p>
          <input type="hidden" id="carrier-selected" value="0">
          <img class="unit-icon" src="public/images/spacemarinesicon.png">
          <p class="unit-amount">300</p>
        </div>`;
}

const displayLandArmies = function() {
    cityID = document.querySelector("#city-index").textContent;
    document.querySelector("#naval-unit-group").background = "rgb(60,60,60)";
    document.querySelector("#land-unit-group").background = "rgb(45,45,45)";
    document.querySelector("#space-unit-group").background = "rgb(60,60,60)";
    document.querySelector(".bottom-unit-view").innerHTML = `
        <div class="unit-div">
          <p class="unit-name">Infantry</p>
          <input type="hidden" id="infantry-selected" value="0">
          <img class="unit-icon" src="public/images/infantryicon.png">
          <p class="unit-amount">10,000</p>
        </div>
        <div class="unit-div">
          <p class="unit-name">Tanks</p>
          <input type="hidden" id="tank-selected" value="0">
          <img class="unit-icon" src="public/images/tankicon.png">
          <p class="unit-amount">100</p>
        </div>
        <div class="unit-div">
          <p class="unit-name">Aircraft</p>
          <input type="hidden" id="aircraft-selected" value="0">
          <img class="unit-icon" src="public/images/mannedaircrafticon.png">
          <p class="unit-amount">1</p>
        </div>`;
}
