// Faction and Governmental functions should take place here



factorUnrest1(countryID, provinceID, unrestAmount, civilUnrest) {
    
    
    
}

factorUnrest2(countryID, provinceID, unrestAmount, civilUnrest) {
    
    if (!civilUnrest) {
        if (countries[countryID].unrestReduction !== undefined) {
            unrestReduction = countries[countryID].unrestReduction;
        } else {
            unrestReduction = 0;
        }
        // determine if this country has the national idea to reduce provincial unrest
        
        unrestPercent = (unrestAmount - unrestReduction);
        //calculate the percent chance that this province goes into civil unrest this month
        rebellion = Math.floor(Math.random() * 100);
        
        if (rebellion < unrestPercent) {
            map2Provinces[provinceID].civilUnrest = true;
            // if our randomly generated number is smaller than our unrest likelihood then this province enters into Civil Unrest
        }
    } else {
        if (countries[countryID].unrestReduction !== undefined) {
            unrestReduction = countries[countryID].unrestReduction;
        } else {
            unrestReduction = 0;
        }
        
        rebellionPercent = ((unrestAmount - unrestReduction) + 5);
        //calculate the percent chance that this province spawns guerrillas
        rebellion = Math.floor(Math.random() * 100);
        
        if (rebellion < rebellionPercent) {
            
            guerrillaIdeology = false;
            // set this variable to false to begin with, it will be set to the proper ideology to spawn guerrillas
            // if such an ideology is found suitable in this province
            ideologyArrayIndex = 0;
            map2Provinces[provinceID].ideology.forEach(function(ideology) {
                if (ideology != countries[countryID].ideology) {
                    // the ideology in this list is not endorsed by the Host Country
                    if (map2Provinces[provinceID].ideologyPercent[ideologyArrayIndex] > 0.5) {
                        // this ideology is over 50% of the province so they can now spawn their own guerrillas
                        guerrillaIdeology = ideology;
                    }
                }
                ideologyArrayIndex++;
            });
            
            if (map2Provinces[provinceID].ideology.some(2) {
                // if at least one of the ideologies present in this province is Positivist Dirigism then every guerrilla
                // that can spawn here must fight for Positivist Dirigism first and foremost
                guerrillaType = 2;
            } else if (!map2Provinces[provinceID].cores.every(countryID) {
                // if not every core in the cores list for this province is belonging to its host country, then a
                // foreign country must have a core, therefore the guerrillas that will spawn here will be seperatist
                // guerrillas loyal to that foreign country
                guerrillaType = 0;
            } else if (guerrillaIdeology) {
                // An ideology in this province holds over 50% of the population and is not adopted by the Host Country
                // as we determined in the code above therefore the guerrillas that spawn here will belong to this ideological group
                guerrillaType = guerrillaIdeology;
            } else {
                // if Positivist Dirigists are not in the province, and no foreign cores are held, and no significant ideology
                // exists in the area that wants to assume control, then the guerrillas spawning should be particularists
                guerrillaType = 1;
            }
            
            map2Provinces[provinceID].cities.forEach(function(city) {
                spawnHostileGuerrillas(2, city.id, countryID, guerrillaType);
            });
            
            map2Provinces[provinceID].civilUnrest = false;
            // if our randomly generated number is smaller than our unrest likelihood then this province spawns rebels and Civil Unrest ends
        } else if (rebellion > 91) {
            map2Provinces[provinceID].civilUnrest = false;
            // if this province has not spawned guerrillas then there is an 8% chance every month that it naturally leaves Civil Unrest
        }
        
        if (unrestAmount == 0) {
            map2Provinces[provinceID].civilUnrest = false;
            // if this province no longer has any unrest then bring it out of Civil Unrest
        }
        
    }
    
}

factorUnrest3(countryID, provinceID, unrestAmount, civilUnrest) {
    
    
    
}

factorUnrest4(countryID, provinceID, unrestAmount, civilUnrest) {
    
    
    
}