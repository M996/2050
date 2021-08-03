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
      "cityID": 0,
      "fleet": null,
      "army": null,
      "spaceFleet": null,
      "health": 48,
      "currentMorale": 26,
      "maxMorale": 26,
      // maxHealth is equal to 80% infantry maxHealth
      // smallArmsDamage is equal to 180% infantry
      // explosiveDamage is equal to 0.0
      // maxMorale is equal to 180% of infantry
      // speed is equal to 40% of infantry
      // smallArmsArmor is equal to +0.10 infantry
      // explosiveArmor is equal to +0.2 infantry
      // directedEnergyArmor is equal to +0.3 infantry
      // kineticArmor is equal to +0.20 infantry
      // space infantry cost 160% maintenance of infantry multiplied by the orbital unit maintenance multiplier
      "currentManpower": 412,
    },
]