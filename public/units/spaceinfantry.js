// space infantry are the only type of infantry besides space marines who can board task ships to travel to
// asteroid cities, moon worlds, gas giants, or Solar Cylinders. They are an indispensable asset for any
// space based empire. Task ships can be used to destroy both asteroid cities and solar cylinders, but only
// space infantry or space marines can succesfully capture a habitat like these, and since moon cities
// cannot be destroyed, they are also vital to transport to moons to do combat

spaceInfantryIndex = 0;
let spaceInfantryUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": null,
      "isDead": false,
      "fleet": null,
      "army": null,
      "spaceFleet": null,
      "xpos": 0,
      "ypos": 0,
      "health": 48,
      "morale": 0.3000,
      // maxHealth is equal to 80% infantry maxHealth
      // smallArmsDamage is equal to 150% infantry
      // explosiveDamage is equal to 0.0
      // moraleDamage is equal to 150% of infantry
      // speed is equal to 40% of infantry
      // smallArmsArmor is equal to +0.30 infantry
      // explosiveArmor is equal to +0.15 infantry
      // directedEnergyArmor is equal to +0.3 infantry
      // kineticArmor is equal to +0.20 infantry
      // space infantry cost 160% maintenance of infantry multiplied by the orbital unit maintenance multiplier
      "currentManpower": 412,
    },
]