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




let currentPlayerID = 0;
// currentPlayerID is the id of the country the player is currently playing as.







const closeInteractions = function() {
  document.querySelector(".unit-interaction").style.display = "none";
  document.querySelector(".city-interaction").style.display = "none";
  document.querySelector(".unit-move-interaction").style.display = "none";
}







// This function is called when the city interactions window is open and at least one of the buildings in the city
// have the word 'built' in them. This tells us that a building is being actively built on the player's screen and
// this function is called the find the planet, city, and building index of that structure which is being built so
// that the construction image can be updated every month in front of the player adn they don't have to close or
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      maintenance = '<span class="maintenance-tip-string"> -0.2 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'military-base':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -0.25 <img src="public/images/energyicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -1 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
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
      maintenance = '<span class="maintenance-tip-string"> -2.2 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -1.2 <img src="public/images/energyicon.png" class="building-res-icn"></span></span>';
    break;
  // Skyhooks will not have a tooltip, you just click on them and they open up the build window right away
  case 'missile-silo':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -1.5 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -0.75 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
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
      maintenance = '<span class="maintenance-tip-string"> -0.85 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'ocean-rig':
      output = 'Allows <img src="public/images/oilicon.png" class="building-res-icn"> Extraction';
      maintenance = '<span class="maintenance-tip-string"> -0.8 <img src="public/images/capitalicon.png" class="building-res-icn"></span>';
    break;
  case 'space-elevator':
      output = '';
      maintenance = '<span class="maintenance-tip-string"> -2.2 <img src="public/images/capitalicon.png" class="building-res-icn"></span> <br> <span class="maintenance-tip-string"> -1.2 <img src="public/images/energyicon.png" class="building-res-icn"></span>';
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
    document.querySelector(".unit-move-interaction").style.display = "none";
  }
}







const buildingDestroy2 = function(cityID, buildingArrayIndex, buildingProcessID, userDestroyed) {
  buildingModel = map2Cities[cityID].buildings[buildingArrayIndex];
  // determine what country owns this city
  if (buildingModel == 'military-base') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingEnergyExpense = (countries[currentOwner].buildingEnergyExpense - 0.25);
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - 1);
  } else if (buildingModel == 'missile-silo') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingEnergyExpense = (countries[currentOwner].buildingEnergyExpense - 0.75);
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - 1.5);
  } else if (buildingModel == 'port') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - 0.2);
    countries[currentOwner].numberOfPorts = countries[currentOwner].numberOfPorts - 1;
  } else if (buildingModel == 'space-elevator') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingEnergyExpense = (countries[currentOwner].buildingEnergyExpense - 1.2);
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - 2.2);
    countries[currentOwner].numberOfSpaceElevators = countries[currentOwner].numberOfSpaceElevators - 1;
  } else if (buildingModel == 'orbital-launch-pad') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingEnergyExpense = (countries[currentOwner].buildingEnergyExpense - 1.2);
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - 2.2);
  } else if (buildingModel == 'research-facility') {
    currentOwner = map2Cities[cityID].ownerID;
    countries[currentOwner].buildingCapitalExpense = (countries[currentOwner].buildingCapitalExpense - 0.85);
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
    document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
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
      document.querySelector(".unit-move-interaction").style.display = "none";
    break;
  }
}






const manipulateBuildingProcess2 = function(buildProcessID, outputMat, outputAmount, mainMat, mainAmount, buildTime) {
  // Add a 'Cancel Production button' and force the user to cancel current production, wipe the build process
  // and remove the build process from the country build process list. All of this must be done before the user
  // can be allowed to start a new build process, otherwise, pop up some kind of message saying they can't build
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








const declareBankruptcy = function(countryID) {
    alert(countries[countryID].name + " is Bankrupt!");
    // Note: replace this with messaes to players later, so that the page isn't frozen and broken by an alert message
    // this should apply to declareBankruptcy and endBankruptcy.
    // Also Note: ALL CORPORATE STOCK must be auto-sold when Bankruptcy is declared, a bankrupt nation should no longer own any stock
    // alternatively just sell enough stock that it covers the entire loan amount, but that is usually going to be all of it anyways.
    countries[countryID].capitalStored = 0;
    countries[countryID].debt = 0;
    countries[countryID].debtInterestRate = countries[countryID].debtInterestRate + 0.04;
    countries[countryID].isBankrupt = 'bankrupt-year-5';
    countries[countryID].monthlyInfluence = countries[countryID].monthlyInfluence - 2;
    countries[countryID].diplomaticInfluence = countries[countryID].diplomaticInfluence - 25;
    countries[countryID].monthlyManpower = countries[countryID].monthlyManpower / 2;
    countries[countryID].manpowerStored = countries[countryID].manpowerStored / 2;
    countries[countryID].morale = countries[countryID].morale - 0.05;
    countries[countryID].unrest = countries[countryID].unrest + 5;
    countries[countryID].averageGdpPerCapita = countries[countryID].averageGdpPerCapita * 0.9;
}








const endBankruptcy = function(countryID) {
    alert("Bankruptcy Over!");
    countries[countryID].isBankrupt = '';
    countries[countryID].monthlyInfluence = countries[countryID].monthlyInfluence + 2;
    countries[countryID].diplomaticInfluence = countries[countryID].diplomaticInfluence + 20;
    countries[countryID].monthlyManpower = countries[countryID].monthlyManpower * 2;
    countries[countryID].morale = countries[countryID].morale + 0.05;
    countries[countryID].unrest = countries[countryID].unrest - 5;
}






const enterFamine = function(countryID) {
  countries[countryID].isStarving = true;
  countries[countryID].morale = countries[countryID].morale - 0.04;
  countries[countryID].unrest = countries[countryID].unrest + 20;
  // disease becomes likely to spawn
  cumulativePopulation = 0;
  // the forEach loop below calculates a new population for every owned city every month until
  // the famine ends.
  countries[countryID].ownedCities1.forEach(function(cityID) {
    declinedPopulation = map1Cities[cityID].population * 0.996;
    declinedPopulation = Math.round(declinedPopulation);
    cumulativePopulation = cumulativePopulation + declinedPopulation;
    map1Cities[cityID].population = declinedPopulation;
  });
  
  countries[countryID].ownedCities2.forEach(function(cityID) {
    declinedPopulation = map2Cities[cityID].population * 0.996;
    declinedPopulation = Math.round(declinedPopulation);
    cumulativePopulation = cumulativePopulation + declinedPopulation;
    map2Cities[cityID].population = declinedPopulation;
  });
  
  countries[countryID].ownedCities3.forEach(function(cityID) {
    declinedPopulation = map3Cities[cityID].population * 0.996;
    declinedPopulation = Math.round(declinedPopulation);
    cumulativePopulation = cumulativePopulation + declinedPopulation;
    map3Cities[cityID].population = declinedPopulation;
  });
  
  countries[countryID].ownedCities4.forEach(function(cityID) {
    declinedPopulation = map4Cities[cityID].population * 0.996;
    declinedPopulation = Math.round(declinedPopulation);
    cumulativePopulation = cumulativePopulation + declinedPopulation;
    map4Cities[cityID].population = declinedPopulation;
  });
  
  countries[countryID].totalPopulation = cumulativePopulation;
  countries[countryID].manpowerStorageCapacity = countries[countryID].totalPopulation * 0.03;
  countries[countryID].monthlyManpower = countries[countryID].manpowerStorageCapacity / 120;
  countries[countryID].monthlyManpower = countries[countryID].monthlyManpower * 0.9;
  // after we have adjusted the total population to reflect the effects of the famine, we also apply
  // a 10% penalty to recruiting men just temporarily until the famine is over
  
  countries[countryID].averageGdpPerCapita = countries[countryID].averageGdpPerCapita * 0.998;
}






const endFamine = function(countryID) {
  countries[countryID].isStarving = false;
  countries[countryID].morale = countries[countryID].morale + 0.04;
  countries[countryID].unrest = countries[countryID].unrest - 20;
  countries[countryID].monthlyManpower = countries[countryID].monthlyManpower / 0.9;
}






const calculateManpower = function(countryID) {
  // deterine the monthly Manpower gain and manpower storage capacity based on current state population
}