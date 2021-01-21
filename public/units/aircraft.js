// aircraft don't move around the map like normal, but are primarily used in a defensive
// manner and for area denial against an enemy. Aircraft are usually used at their most
// offensive when loaded onto an aircraft carrier. They do not move around the map like
// most units, but rather, similar to many attack buildings, aircaft move quickly once
// per month to attack enemy units or cities that are within range. Whenever aircraft
// carry out an attack, nearby buildings such as missile systems and railguns have a
// certain percentage chance of destroying them based on their tracking and the
// aircraft's evasion

aircraftIndex = 0;
let aircraftUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": null,
      "carrierID": null,
      // aircraft can be carried inside either a city OR an aircraft carrier
      "isDead": false,
      "xpos": 0,
      "ypos": 0,
    },
]