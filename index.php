<?php
require 'header.php';


?>

<head>
  <title>Page Title</title>
</head>

<style>
  
  .city-img-btn:hover {
    cursor: pointer;
  }
  
</style>


<body style="margin: 0;">
  <div class="main-div"> <!-- oncontextmenu="return false;" uncomment this and add to main div to prevent people from right-clicking on screen -->
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
        <span class="tooltip-mineral">Minerals</span>
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
        <span class="tooltip-metal">Metal</span>
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
    </div>
  </div>
    <canvas class="main-world-map" id="main-world-2-canvas"></canvas>
    <div class="city-interaction">
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
  </div>
</body>

<script src="fabric-4.3.0.min.js"></script>
<script src="common-functions.js"></script>
<script src="unions.js"></script>
<script src="countries.js"></script>
<script src="corporations.js"></script>

<script src="provinces2.js"></script>
<script src="cities2.js"></script>
<script src="buildingProcess1.js"></script>
<script src="buildingProcess2.js"></script>
<script src="buildingProcess3.js"></script>
<script src="buildingProcess4.js"></script>
<script src="main2.js"></script>

<script src="play.js"></script>
