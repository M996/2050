let weaponsPlatformUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": null,
      "isDead": false,
      "xpos": 0,
      "ypos": 0,
      "health": 15,
      // orbital weapons platform have 150% taskship health
      "kinetic": false,
      "missile": false,
      "nuclear": false,
      "laser": false,
      // once a damage type has been selected and purchase for the orbital weapons platform, it
      // can begin targeting ground targets, whether that is cities or units, and then when war
      // breaks out it will continue to strike its selected target class once per month
    },
]