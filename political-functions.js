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
            
            if (map2Provinces[provinceID].ideology.some('Positivist-Dirigist') {
                // if at least one of the ideologies present in this province is Positivist Dirigism then every guerrilla
                // that can spawn here must fight for Positivist Dirigism first and foremost
                guerrillaType = 1;
            } else if (!map2Provinces[provinceID].cores.every(countryID) {
                // if not every core in the cores list for this province is belonging to its host country, then a
                // foreign country must have a core, therefore the guerrillas that will spawn here will be provincial
                // guerrillas loyal to that foreign country
                guerrillaType = 0;
            } else if () {
                // in this final guerrillaType section, determine if an ideology exists in this province with more than 50%
                // control of the province and is not the endorsed ideology of the country. If this is the case, assign
                // guerrillas to this ideology
                guerrillaType = ?;
            } else {
                // if Positivist Dirigists are not in the province, and no foreign cores are held, and no significant ideology
                // exists in the area that wants to assume control, then the guerrillas spawning should be particularists so
                // figure out what that is going to look like withint the Guerrilla mechanics
                guerrillaType = ?;
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