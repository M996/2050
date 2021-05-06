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