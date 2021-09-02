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





const recalculateProvincePopulation1 = function(provinceID) {
  
}




const recalculateProvincePopulation2 = function(provinceID) {
  ownerID = map2Provinces[provinceID].ownerID;
  provincePopGrowthModifier = ethnicities[countries[ownerID].mainEthnicity].popGrowthIncrease;
  // modify pop growth based on the ethnic group
  provincePopGrowthModifier = provincePopGrowthModifier + ideologies[countries[ownerID].ideology].popGrowthIncrease;
  // further modify pop growth based on the ideology
  map2Provinces[provinceID].cities.forEach(function(cityID) {
    map2Cities[cityID].population = Math.round(map2Cities[cityID].population * (countries[ownerID].annualPopulationGrowth + provincePopGrowthModifier));
  });
  // finally change the actual populations of each city based upon the growth modifier
}




const recalculateProvincePopulation3 = function(provinceID) {
  
}




const recalculateProvincePopulation4 = function(provinceID) {
  
}




const recalculateProvinceGDP1 = function(provinceID) {
  
}




const recalculateProvinceGDP2 = function(provinceID) {
  ownerID = map2Provinces[provinceID].ownerID;
  map2Provinces[provinceID].gdpPerCapita = (map2GDPPerCapita + (map2Provinces[provinceID].gdpPerCapita * 99)) / 100;
  // here we add the province gdpPerCapita together with the global average gdp. The way the provincial gdp is being
  // calculated makes it so that richer countries get a growth debuff while poorer countries get a growth buff
  
  // Being X2 the global average GDPPerCapita = -1% growth
  // Being X4 the global average GDPPerCapita = -2% growth
  // Being 1/2 the global average GDPPerCapita = +1% growth
  // Being 1/4 the global average GDPPerCapita = +2% growth
  
  // this effect is seen also in Global Depressions where richer countries take a harder hit to their GDP
  
  // next we modify the GDPPerCapita of the province by comparing it to a random neighbor, if it has neighbors
  if (map2Provinces[provinceID].landNeighbors.length > 0) {
    randomNeighborID = Math.floor(Math.random() * map2Provinces[provinceID].landNeighbors.length);
    map2Provinces[provinceID].gdpPerCapita = (map2Provinces[randomNeighborID].gdpPerCapita + (map2Provinces[provinceID].gdpPerCapita * 99)) / 100;
    // the neighbor bonus functions mechanically exactly the same as the global average gdppercapita bonus
    // however with both of these bonuses functioning together and at the same time their effect is watered down
    // this means that a poor province with an equally poor neighbor will receive only half of its growth bonus
    // it would normally receive if that neighbor is randomly selected to be paired with this province this year
    // so if the average gdppercapta on the planet is 2 and this province only has 1 it would normally receive a +1% growth bonus
    // but if it is paired with a neighboring province that also has 1 then it will only effectively receive a bonus of +0.5%
    
    // this is still made up for in Depressions where rich countries are beaten down and poor countries are not
  }
  
  provinceGDPGrowthModifier = ideologies[countries[ownerID].ideology].gdpGrowthIncrease;
  // modify gdp growth based on the ideology
  map2Provinces[provinceID].gdpPerCapita = map2Provinces[provinceID].gdpPerCapita * (countries[ownerID].annualGdpPerCapitaGrowth + provinceGDPGrowthModifier);
  // finally change the actual gdppercapita of the province
  
  if (countries[ownerID].inDepression) {
    if (map2Provinces[provinceID].gdpPerCapita > map2GDPPerCapita) {
        map2Provinces[provinceID].gdpPerCapita = map2Provinces[provinceID].gdpPerCapita * 0.97;
    } else {
      map2Provinces[provinceID].gdpPerCapita = map2Provinces[provinceID].gdpPerCapita * 0.985;
    }
    // if the country is in a depression the gdppercapita should trend down every year the depression continues
    // rich provinces will decrease -3% poor provinces will decrease -1.5%
  }
}




const recalculateProvinceGDP3 = function(provinceID) {
  
}




const recalculateProvinceGDP4 = function(provinceID) {
  
}




const calculateCountryCapital = function(countryID) {
  countryResourceIncome = 0;
  countryTaxIncome = 0;
  // here we are running calculations for this country's holdings in world 2, other worlds have not yet been added
  countries[countryID].ownedCities2.forEach(function(cityID) {
    gdpPerCapita = map2Provinces[map2Cities[cityID].provinceID].gdpPerCapita;
    countryTaxIncome += (map2Cities[cityID].population / 5000000) * gdpPerCapita * (1 - map2Provinces[map2Cities[cityID].provinceID].autonomy);
    cityResource = map2Provinces[map2Cities[cityID].provinceID].resource;
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
    countryResourceIncome += (map2Cities[cityID].corporateResourceModifier * 2) * (map2Provinces[map2Cities[cityID].provinceID].resourceAmount * (resourceValue * 0.8));
  });
  
  countries[countryID].monthlyCapital = countryResourceIncome + countryTaxIncome;
  // here we are adding together resources collected + taxes collected, in the future we are going to want to add
  // in capital from Trade and Corporate Stocks
  countries[countryID].capitalStorageCapacity = countries[countryID].monthlyCapital * 60;
  
}




const calculateCountryManpower = function(countryID) {
  countryTotalPopulation = 0;
  countryTotalManpower = 0;
  // here we are running calculations for this country's holdings in world 2, other worlds have not yet been added
  countries[countryID].ownedCities2.forEach(function(cityID) {
    countryTotalPopulation += map2Cities[cityID].population;
    countryTotalManpower += map2Cities[cityID].population + (1 - map2Provinces[map2Cities[cityID].provinceID].autonomy);
  });
  
  countries[countryID].totalPopulation = countryTotalPopulation;
  countries[countryID].manpowerStorageCapacity = countryTotalManpower * 0.03;
  // the manpower storage pool is equal to 3% of the total population multiplied by national multipliers
  countries[countryID].monthlyManpower = countries[countryID].manpowerStorageCapacity / 120;
  // it should take 10 years to refill a country when totally depleted of manpower
  
}