// orbital unit primarily used for bombardment of ground targets. Can strike anywhere on a planet's surface
// and can carry nuclear weapons, making it more difficult to intercept nuclear strikes against cities.

weaponsPlatformIndex = 0;
let weaponsPlatformUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "spaceFleet": null,
      "health": 15,
      // orbital weapons platform have 150% taskship health
      "kinetic": false,
      "missile": false,
      "nuclear": false,
      "laser": false,
      "ICBMs": [],
      // once a damage type has been selected and purchase for the orbital weapons platform, it
      // can begin targeting ground targets, whether that is cities or units, and then when war
      // breaks out it will continue to strike its selected target class once per month
    },
]