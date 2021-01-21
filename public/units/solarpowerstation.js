let solarStationUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": null,
      "isDead": false,
      // as long as the Solar Station is alive it will continue to produce
      // 4 energy per month, and as long is this country continues to have
      // a number larger than zero in their 'numberOfSolarSatellites'
      // property, this country can still sell energy to all other countries on their planet
      "xpos": 0,
      "ypos": 0,
      "health": 5,
      // solar satellite health is equal to 50% of task ship health
    },
]