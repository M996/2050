

let landArmyIndex = 0;

landArmies = [
    {
        "id": 0,
        "ownerID": 0,
        "guerrillaArmyIdeology": null,
        // if an army is made up of ideological guerrillas, then they have to renew their morale
        // from their ideology not from their country, so the ideology id is located here
        "planetID": 2,
        "cityID": 0,
        "general": 0,
        "reEnterHomeCity": false,
        // this value is used to determine if a unit is elgible to re-enter the city it just left,
        // if it is just now being moved out of that city, then it should not re-enter the same city
        // even though it spawns on top of it, otherwise it can never leave the city
        "xpos": 0,
        "ypos": 0,
        "morale": 0,
        "maxMorale": 0,
        "infantry": [],
        "tanks": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
    },
]