<?php
require 'header.php';


?>

<head>
  <title>2050 Game</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet">
</head>

<style>
  
  .city-img-btn:hover {
    cursor: pointer;
  }
  
</style>


<body style="margin: 0;">
  <div class="main-div"> <!--  uncomment this and add to main div to prevent people from right-clicking on screen -->
  <div class="ui-resource-container">
    <div class="top-resource-div">
      <div class="capital-tooltip">
        <img src="public/images/capitalicon.png" class="resource-icon">
        <span class="tooltip-capital">Capital</span>
      </div>
      <p class="resource-amount-text" id="country-capital-amount">0</p>
      <p class="resource-gain-text" id="country-capital-growth">+0</p>
      <div class="oil-tooltip">
        <img src="public/images/oilicon.png" class="resource-icon">
        <span class="tooltip-oil">Oil</span>
      </div>
      <p class="resource-amount-text" id="country-oil-amount">0</p>
      <p class="resource-gain-text" id="country-oil-growth">+0</p>
      <div class="mineral-tooltip">
        <img src="public/images/mineralicon.png" class="resource-icon">
        <span class="tooltip-mineral">Raw Minerals</span>
      </div>
      <p class="resource-amount-text" id="country-mineral-amount">0</p>
      <p class="resource-gain-text" id="country-mineral-growth">+0</p>
      <div class="processedmineral-tooltip">
        <img src="public/images/processedmineralicon.png" class="resource-icon">
        <span class="tooltip-processedmineral">Processed Minerals</span>
      </div>
      <p class="resource-amount-text" id="country-processed-mineral-amount">0</p>
      <p class="resource-gain-text" id="country-processed-mineral-growth">+0</p>
      <div class="nuclear-tooltip">
        <img src="public/images/nuclearicon.png" class="resource-icon">
        <span class="tooltip-nuclear">Nuclear Materials</span>
      </div>
      <p class="resource-amount-text" id="country-nuclear-amount">0</p>
      <p class="resource-gain-text" id="country-nuclear-growth">+0</p>
      <div class="exoticmatter-tooltip">
        <img src="public/images/exoticmattericon.png" class="resource-icon">
        <span class="tooltip-exoticmatter">Exotic Matter</span>
      </div>
      <p class="resource-amount-text" id="country-exotic-matter-amount">0</p>
      <p class="resource-gain-text" id="country-exotic-matter-growth">+0</p>
      <div class="end-resource-container">
        <div class="influence-tooltip">
          <img src="public/images/influenceicon.png" class="resource-icon">
          <span class="tooltip-influence">Influence</span>
        </div>
        <p class="resource-amount-text" id="country-influence-amount">0</p>
        <p class="resource-gain-text" id="country-influence-growth">+0</p>
      </div>
      <p class="current-month">January</p>
    </div>
    <div class="bottom-resource-div">
      <div class="energy-tooltip">
        <img src="public/images/energyicon.png" class="resource-icon">
        <span class="tooltip-energy">Energy</span>
      </div>
      <p class="resource-amount-text" id="country-energy-amount">0</p>
      <p class="resource-gain-text" id="country-energy-growth">+0</p>
      <div class="food-tooltip">
        <img src="public/images/foodicon.png" class="resource-icon">
        <span class="tooltip-food">Food</span>
      </div>
      <p class="resource-amount-text" id="country-food-amount">0</p>
      <p class="resource-gain-text" id="country-food-growth">+0</p>
      <div class="metal-tooltip">
        <img src="public/images/metalicon.png" class="resource-icon">
        <span class="tooltip-metal">Raw Metal</span>
      </div>
      <p class="resource-amount-text" id="country-metal-amount">0</p>
      <p class="resource-gain-text" id="country-metal-growth">+0</p>
      <div class="processedmetal-tooltip">
        <img src="public/images/processedmetalicon.png" class="resource-icon">
        <span class="tooltip-processedmetal">Processed Metal</span>
      </div>
      <p class="resource-amount-text" id="country-processed-metal-amount">0</p>
      <p class="resource-gain-text" id="country-processed-metal-growth">+0</p>
      <div class="preciousmetal-tooltip">
        <img src="public/images/preciousmetalicon.png" class="resource-icon">
        <span class="tooltip-preciousmetal">Precious Metals</span>
      </div>
      <p class="resource-amount-text" id="country-precious-metal-amount">0</p>
      <p class="resource-gain-text" id="country-precious-metal-growth">+0</p>
      <div class="antimatter-tooltip">
        <img src="public/images/antimattericon.png" class="resource-icon">
        <span class="tooltip-antimatter">Antimatter</span>
      </div>
      <p class="resource-amount-text" id="country-antimatter-amount">0</p>
      <p class="resource-gain-text" id="country-antimatter-growth">+0</p>
      <div class="end-resource-container">
        <div class="manpower-tooltip">
          <img src="public/images/manpowericon.png" class="resource-icon">
          <span class="tooltip-manpower">Manpower</span>
        </div>
        <p class="resource-amount-text" id="country-manpower-amount">0</p>
        <p class="resource-gain-text" id="country-manpower-growth">+0</p>
      </div>
      <p class="current-year">2050</p>
    </div>
  </div>
  <div class="build-window-div">
    <div class="build-window-top">
      <img class="build-window-image">
      <div class="current-build-stats">
        <h2 class="build-window-title"></h2>
        <div class="build-output-maintenance-container">
          <div class="build-output-div">
            
          </div>
          <div class="build-maintenance-div">
            
          </div>
        </div>
      </div>
      <div class="build-condition-info-container">
        <p class="build-window-health"></p>
        <p class="build-info-active">Active</p>
        <p class="build-info-loop">Build Amount: <span id="build-number"></span></p>
        <div class="build-info-loop-buttons">
          <button class="build-add-btn" id="minus-1">-1</button>
          <button class="build-add-btn" id="add-1">+1</button>
          <button class="build-add-btn" id="add-5">+5</button>
          <button class="build-add-btn" id="add-10">+10</button>
        </div>
      </div>
    </div>
    <div class="build-window-bottom">
      <div class="build-window-control-panel">
        <button class="build-win-control-destroy">
        DESTROY
        </button>
        <button class="build-win-control-upgrade">
        Upgrade
        </button>
        <button class="build-win-control-more" onclick="moreBuildings()">
        More Buildings
        </button>
        <button class="build-win-control-close" onclick="closeBuildWindow()">
        Close
        </button>
      </div>
      <div class="build-btns-container">
      </div>
      <div class="nuclear-storage-div">
        <div class="nuclear-storage-info">
          <p class="nuke-info">Nuclear ICBMs: <span id="nuke-missile-amount">0</span></p>
        </div>
        <div class="nuclear-storage-target">
          <button class="nuke-target-btn">Target City</button>
        </div>
        <div class="nuclear-storage-target">
          <button class="nuke-launch-btn">Launch</button>
        </div>
      </div>
    </div>
  </div>
  <div class="city-target-confirmation-window">
    <p class="city-target-info">
      You are now targeting <span id="weapon-targeted-city">City</span> from <span id="weapon-targeting-city">Your City</span>.
    </p>
    <p class="city-target-unable">
      You cannot target <span id="weapon-non-targeted-city">City</span> because it is out of range.
    </p>
    <button onclick="closeTargetingWindow()" class="close-targeting-btn">Close</button>
  </div>
    <canvas class="main-world-map" id="main-world-2-canvas"></canvas>
    <div class="city-interaction">
      <div id="city-index" style="display:none"></div>
      <div id="planet-index" style="display:none"></div>
      <div class="tooltip-container">
        <div id="tooltip-text">
          <div class="building-info-grouper">
            <div class="title-health-grouper">
              <h1 id="tooltip-title"></h1>
              <p id="building-health"></p>
            </div>
            <img id="tooltip-image">
          </div>
          <p id="tooltip-description"></p>
          <div class="production-maintenance-tool-container">
            <p id="production-tip"></p>
            <p id="maintenance-tip"></p>
          </div>
        </div>
        <h1 id="city-name"></h1>
        <div class="ui-btn-div">
          <button id="city-info-btn">City</button>
          <button onclick="showProvince()" id="province-info-btn">Province</button>
        </div>
        <img src="" class="city-img">
        <div class="city-stats-view">
          <div class="left-city-view">
            <p id="city-population"></p>
            <p id="city-gdp-per-capita"></p>
            <p id="city-pop-income"></p>
            <p id="city-resource-income"></p>
            <p id="total-income"></p>
            <p id="city-corporation"></p>
          </div>
          <div class="right-city-view">
            <p id="city-resource-produced"></p>
            <p id="city-unrest"></p>
            <p id="city-defense"></p>
            <p id="city-latitude"></p>
            <div class="ownership-div">
              <p id="city-ownership"></p>
              <p id="city-occupation"></p>
            </div>
          </div>
        </div>
        <div id="city-buildings"></div>
      </div>
    </div>
    
    <div class="city-combat-screen">
      <div class="attacker-stats">
        <div class="attacker-name-info-container">
          <p class="attacker-name">Tuetoro</p>
          <div class="attacker-name-tooltip">
          </div>
        </div>
        <div class="attacker-units-info">
          <div class="unit-display-container">
            <div class="attacker-infantry-info" id="attacker-infantry-div">
              <img class="combat-unit-img" id="attacker-unit" src="public/images/infantryicon.png">
              <p class="attacker-infantry-manpower" id="attacker-infantry">10,000</p>
            </div>
            <div class="attacker-infantry-info" id="attacker-tanks-div">
              <img class="combat-unit-img" id="attacker-unit" src="public/images/tankicon.png">
              <p class="attacker-tank-manpower" id="attacker-tanks">100</p>
            </div>
            <div class="attacker-infantry-info" id="attacker-guerrillas-div">
              <img class="combat-unit-img" id="attacker-unit" src="public/images/guerrillaicon.png">
              <p class="attacker-tank-manpower" id="attacker-guerrillas">10,000</p>
            </div>
            <div class="attacker-infantry-info" id="attacker-marines-div">
              <img class="combat-unit-img" id="attacker-unit" src="public/images/marinesicon.png">
              <p class="attacker-tank-manpower" id="attacker-marines">8,000</p>
            </div>
            <div class="attacker-infantry-info" id="attacker-space-infantry-div">
              <img class="combat-unit-img" id="attacker-unit" src="public/images/spaceinfantryicon.png">
              <p class="attacker-tank-manpower" id="attacker-space-infantry">500</p>
            </div>
            <div class="attacker-infantry-info" id="attacker-space-marines-div">
              <img class="combat-unit-img" id="attacker-unit" src="public/images/spacemarinesicon.png">
              <p class="attacker-tank-manpower" id="attacker-space-marines">300</p>
            </div>
          </div>
        </div>
      </div>
      <div class="combat-action-screen">
        <div class="attacker-morale-div"><div class="current-attacker-morale"></div><div class="attacker-morale-tooltip"></div></div>
        <!-- The morale bars appear here and are filled in with the values of an army's current morale status -->
        <div class="combat-window">
          
          <div class="combat-roll-window">
            <div class="defender-rolls-div">
              <p class="defender-roll">8</p>
              <p class="defender-bonus">0</p>
            </div>
            <div class="attacker-rolls-div">
              <p class="attacker-bonus">1</p>
              <p class="attacker-roll">7</p>
            </div>
          </div>
          <div class="combat-units-window">
            <div class="defender-combat-units">
              <div class="defender-row">
                <img class="defender-unit" id="defend-17" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-18" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-19" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-20" src="public/images/infantryicon.png">
              </div>
              <div class="defender-row">
                <img class="defender-unit" id="defend-13" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-14" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-15" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-16" src="public/images/infantryicon.png">
              </div>
              <div class="defender-row">
                <img class="defender-unit" id="defend-9" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-10" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-11" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-12" src="public/images/infantryicon.png">
              </div>
              <div class="defender-row">
                <img class="defender-unit" id="defend-5" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-6" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-7" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-8" src="public/images/infantryicon.png">
              </div>
              <div class="defender-row">
                <img class="defender-unit" id="defend-1" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-2" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-3" src="public/images/infantryicon.png">
                <img class="defender-unit" id="defend-4" src="public/images/infantryicon.png">
              </div>
            </div>
            <div class="attacker-combat-units">
              <div class="attacker-row">
                <img class="attacker-unit" id="attack-1" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-2" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-3" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-4" src="public/images/infantryicon.png">
              </div>
              <div class="attacker-row">
                <img class="attacker-unit" id="attack-5" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-6" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-7" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-8" src="public/images/infantryicon.png">
              </div>
              <div class="attacker-row">
                <img class="attacker-unit" id="attack-9" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-10" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-11" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-12" src="public/images/infantryicon.png">
              </div>
              <div class="attacker-row">
                <img class="attacker-unit" id="attack-13" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-14" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-15" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-16" src="public/images/infantryicon.png">
              </div>
              <div class="attacker-row">
                <img class="attacker-unit" id="attack-17" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-18" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-19" src="public/images/infantryicon.png">
                <img class="attacker-unit" id="attack-20" src="public/images/infantryicon.png">
              </div>
            </div>
          </div>
        </div>
        <div class="defender-morale-div"><div class="current-defender-morale"></div><div class="defender-morale-tooltip"></div></div>
      </div>
      <div class="defender-stats">
        <div class="defender-name-info-container">
          <p class="defender-name">Tehlike Empire</p>
          <div class="defender-name-tooltip">
          </div>
        </div>
        <div class="defender-units-info">
          <div class="unit-display-container">
            <div class="defender-infantry-info" id="defender-infantry-div">
              <img class="combat-unit-img" id="defender-unit" src="public/images/infantryicon.png">
              <p class="defender-infantry-manpower" id="defender-infantry">10,000</p>
            </div>
            <div class="defender-infantry-info" id="defender-tanks-div">
              <img class="combat-unit-img" id="defender-unit" src="public/images/tankicon.png">
              <p class="defender-tank-manpower" id="defender-tanks">100</p>
            </div>
            <div class="defender-infantry-info" id="defender-guerrillas-div">
              <img class="combat-unit-img" id="defender-unit" src="public/images/guerrillaicon.png">
              <p class="defender-tank-manpower" id="defender-guerrillas">10,000</p>
            </div>
            <div class="defender-infantry-info" id="defender-marines-div">
              <img class="combat-unit-img" id="defender-unit" src="public/images/marinesicon.png">
              <p class="defender-tank-manpower" id="defender-marines">8,000</p>
            </div>
            <div class="defender-infantry-info" id="defender-space-infantry-div">
              <img class="combat-unit-img" id="defender-unit" src="public/images/spaceinfantryicon.png">
              <p class="defender-tank-manpower" id="defender-space-infantry">500</p>
            </div>
            <div class="defender-infantry-info" id="defender-space-marines-div">
              <img class="combat-unit-img" id="defender-unit" src="public/images/spacemarinesicon.png">
              <p class="defender-tank-manpower" id="defender-space-marines">300</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="unit-move-interaction-land">
      <div class="unit-type-move-container" id="move-infantry">
        <img class="unit-move-icon" src="public/images/infantryicon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-infantry-slider" onchange="updateArmyInfantry(this.value)">
        </div>
        <p class="current-move-amount"><span id="infantry-move-amount">0</span> Units</p>
      </div>
      <div class="unit-type-move-container" id="move-tank">
        <img class="unit-move-icon" src="public/images/tankicon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-tank-slider" onchange="updateArmyTanks(this.value)">
        </div>
        <p class="current-move-amount"><span id="tank-move-amount">0</span> Units</p>
      </div>
      <div class="unit-type-move-container" id="move-marines">
        <img class="unit-move-icon" src="public/images/marinesicon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-marines-slider" onchange="updateArmyMarines(this.value)">
        </div>
        <p class="current-move-amount"><span id="marines-move-amount">0</span> Units</p>
      </div>
      <div class="unit-type-move-container" id="move-space-infantry">
        <img class="unit-move-icon" src="public/images/spaceinfantryicon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-space-infantry-slider" onchange="updateArmySpaceInfantry(this.value)">
        </div>
        <p class="current-move-amount"><span id="space-infantry-move-amount">0</span> Units</p>
      </div>
      <div class="unit-type-move-container" id="move-space-marines">
        <img class="unit-move-icon" src="public/images/spacemarinesicon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-space-marines-slider" onchange="updateArmySpaceMarines(this.value)">
        </div>
        <p class="current-move-amount"><span id="space-marines-move-amount">0</span> Units</p>
      </div>
      <div class="unit-option-btns">
        <button class="unit-option-btn-primary" onclick="moveLandArmy()">Move</button>
      </div>
    </div>
    
    <div class="unit-move-interaction-air">
      <div class="unit-type-move-container" id="move-aircraft">
        <img class="unit-move-icon" src="public/images/mannedaircrafticon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-aircraft-slider" onchange="updateArmyAircraft(this.value)">
        </div>
        <p class="current-move-amount"><span id="aircraft-move-amount">0</span> Units</p>
      </div>
      <div class="unit-option-btns">
        <button class="unit-option-btn-primary" onclick="moveAircraft()">Move</button>
        <button class="unit-option-btn-secondary" onclick="aircraftTargeting(0)">Target<br>Armies</button>
        <button class="unit-option-btn-secondary" onclick="aircraftTargeting(1)">Target<br>Cities</button>
      </div>
    </div>
    
    <div class="unit-move-interaction-naval">
      <div class="unit-type-move-container" id="move-destroyer">
        <img class="unit-move-icon" src="public/images/destroyericon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-destroyer-slider" onchange="updateArmyDestroyer(this.value)">
        </div>
        <p class="current-move-amount"><span id="destroyer-move-amount">0</span> Units</p>
      </div>
      <div class="unit-type-move-container" id="move-submarine">
        <img class="unit-move-icon" src="public/images/submarineicon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-submarines-slider" onchange="updateArmySubmarine(this.value)">
        </div>
        <p class="current-move-amount"><span id="submarine-move-amount">0</span> Units</p>
      </div>
      <div class="unit-type-move-container" id="move-carrier">
        <img class="unit-move-icon" src="public/images/carriericon.png">
        <div class="unit-move-options">
          <input type="range" min="0" max="10" class="unit-move-range" id="unit-move-carrier-slider" onchange="updateArmyCarrier(this.value)">
        </div>
        <p class="current-move-amount"><span id="carrier-move-amount">0</span> Units</p>
      </div>
      <div class="unit-option-btns">
        <button class="unit-option-btn-primary" onclick="moveNavalFleet()">Move</button>
      </div>
    </div>
      
    </div>
    <div class="unit-interaction">
      <div class="top-unit-view">
        <button class="unit-open-btn" id="move-army" onclick="openMoveArmiesWindow()">Open</button>
        <button class="unit-group-btn" id="land-unit-group" onclick="displayLandArmies()">Land</button>
        <button class="unit-group-btn" id="naval-unit-group" onclick="displayNavalFleets()">Naval</button>
        <button class="unit-group-btn" id="space-unit-group" onclick="displaySpaceFleets()">Space</button>
        <button class="close-interactions-btn" onclick="closeInteractions()">X</button>
      </div>
      <div class="bottom-unit-view">
        <div class="unit-div">
          <p class="unit-name" onclick="infantryCitySelection()">Infantry</p>
          <input type="hidden" id="infantry-selected" value="0">
          <img class="unit-icon" id="infantry-unit-icon" src="public/images/infantryicon.png" onclick="infantryCitySelection()">
          <p class="unit-amount" id="infantry-interact-amount">10,000</p>
          <img class="embark-img-infantry" src="public/images/port.png">
          <button class="embark-button" id="embark-button-infantry" onclick="embarkInfantry()">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="tankCitySelection()">Tanks</p>
          <input type="hidden" id="tank-selected" value="0">
          <img class="unit-icon" id="tank-unit-icon" src="public/images/tankicon.png" onclick="tankCitySelection()">
          <p class="unit-amount" id="tank-interact-amount">100</p>
          <img class="embark-img-tank" src="public/images/port.png">
          <button class="embark-button" id="embark-button-tanks" onclick="embarkTanks()">Embark</button>
        </div>
        <div class="unit-div">
          <p class="unit-name" onclick="aircraftCitySelection()">Aircraft</p>
          <input type="hidden" id="aircraft-selected" value="0">
          <img class="unit-icon" id="aircraft-unit-icon" src="public/images/mannedaircrafticon.png" onclick="aircraftCitySelection()">
          <p class="unit-amount" id="aircraft-interact-amount">10</p>
          <img class="embark-img-aircraft" src="public/images/port.png">
          <button class="embark-button" id="embark-button-aircraft" onclick="embarkAircraft()">Embark</button>
        </div>
      </div>
    </div>
    
  </div>
</body>

<script src="fabric-4.3.0.min.js"></script>
<script src="common-functions.js"></script>
<script src="political-functions.js"></script>
<script src="economic-functions.js"></script>
<script src="build-window-functions.js"></script>
<script src="combat.js"></script>
<script src="military-functions.js"></script>
<script src="seperate-military-functions.js"></script>
<script src="ranged-weapon-functions.js"></script>
<script src="ethnicities.js"></script>
<script src="ideologies.js"></script>
<script src="unions.js"></script>
<script src="countries.js"></script>
<script src="country-colors.js"></script>
<script src="corporations.js"></script>

<script src="public/units/admirals.js"></script>
<script src="public/units/general.js"></script>
<script src="public/units/aircraft.js"></script>
<script src="public/units/carrier.js"></script>
<script src="public/units/destroyer.js"></script>
<script src="public/units/ICBM.js"></script>
<script src="public/units/infantry.js"></script>
<script src="public/units/marines.js"></script>
<script src="public/units/skyhook.js"></script>
<script src="public/units/spaceinfantry.js"></script>
<script src="public/units/spacemarines.js"></script>
<script src="public/units/submarine.js"></script>
<script src="public/units/tank.js"></script>
<script src="public/units/taskship.js"></script>
<script src="public/units/guerrilla.js"></script>
<script src="public/units/weaponsplatform.js"></script>
<script src="public/units/landarmies.js"></script>
<script src="public/units/navalfleet.js"></script>

<script src="provinces1.js"></script>
<script src="provinces2.js"></script>
<script src="provinces3.js"></script>
<script src="provinces4.js"></script>
<script src="cities1.js"></script>
<script src="cities2.js"></script>
<script src="cities3.js"></script>
<script src="cities4.js"></script>
<script src="buildingProcess1.js"></script>
<script src="buildingProcess2.js"></script>
<script src="buildingProcess3.js"></script>
<script src="buildingProcess4.js"></script>
<script src="runBuildingProcesses2.js"></script>
<script src="main1.js"></script>
<script src="main2.js"></script>
<script src="main3.js"></script>
<script src="main4.js"></script>
<script src="cityBattles.js"></script>
<script src="landBattles.js"></script>
<script src="navalBattles.js"></script>


<script src="play.js"></script>
