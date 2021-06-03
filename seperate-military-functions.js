// All functions in this file are meant to be run in a seperate thread or core to increase game performance especially on low
// end machines




const detectEnemies = function(countryID, cityID) {
    
    // Upon entering a city, first check to see if their is an active fight going on, if their is, reinforce your side.
    // If no active fight is happening then check to see if their are enemy armies present in the city by checking the
    // 'countriesPresent' property. If this is also empty then finally check the hostileGuerrillas array to see if their
    // are rebels in this city. If the array is not empty then pull a list of all distinct countriyIDs that the rebels
    // belong to and check to see if you are in the 'hostileGuerrillasNeutral' array for that country. If you are
    // not backing Guerrillas in any country then take all hostileguerrillas() in the array with that ID (likely they will
    // all belong to the same country) and call 'beginFightingHostileGuerrillas()' while passing in that country or countries
    // by ID into the 'guerrillaCountryIDs' variable and your own countryID for the third parameter.
    
}




const beginFightingHostileGuerrillas = function(planetID, cityID, countryID, guerrillaCountryIDs) {
  
  if (planetID == 1) {
    
    
    
  } else if (planetID == 2) {
    
    guerrillaCountryIDs.forEach(function(guerrillaCountryID) {
        console.log('The country these guerrillas belong to is: ' + guerrillaCountryID + ' (should be 0)');
        // make sure that the enemy countryID (in this case your own country) is being accessed here
        // next we are going to iterate through every single hostile guerrilla in the city to see if their
        // ideology matches our ideology, or if the country they are backing (seperatists) is us. If either
        // of those things are true we will not fight them, but if they are not backing us and we are different
        // ideologies then we will fight them for control of the city.
    });
    
  } else if (planetID == 3) {
    
    
    
  } else if (planetID == 4) {
    
    
    
  }
  
}