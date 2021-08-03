

let navalFleetIndex = 0;

navalFleets = [
    {
        "id": 0,
        "ownerID": 0,
        "planetID": 2,
        "cityID": 0,
        "admiral": 0,
        "reEnterHomeCity": false,
        // this value is used to determine if a unit is elgible to re-enter the city it just left,
        // if it is just now being moved out of that city, then it should not re-enter the same city
        // even though it spawns on top of it, otherwise it can never leave the city
        "xpos": 0,
        "ypos": 0,
        "morale": 0.3000,
        "destroyers": [],
        "submarines": [],
        "carriers": [],
        "infantry": [],
        "tanks": [],
        "marines": [],
        "spaceInfantry": [],
        "spaceMarines": [],
        "aircraft": [],
        "landEmbarkAmount": 0,
        "landEmbarkCapacity": 0,
        "aircraftCapacity": 0,
        // to determine how close we are to aircraft capacity, simply read the length of the aircraft array
    },
]