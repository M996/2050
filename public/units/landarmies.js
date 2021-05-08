

let landArmyIndex = 0;

landArmies = [
    {
        "id": 0,
        "ownerID": 0,
        "planetID": 2,
        "cityID": 0,
        "reEnterHomeCity": false,
        // this value is used to determine if a unit is elgible to re-enter the city it just left,
        // if it is just now being moved out of that city, then it should not re-enter the same city
        // even though it spawns on top of it, otherwise it can never leave the city
        "xpos": 0,
        "ypos": 0,
        "morale": 0.3000,
        "infantry": [],
        "tanks": [],
        "marines": [],
        "guerrillas": [],
        "spaceInfantry": [],
        "spaceMarines": [],
    },
]