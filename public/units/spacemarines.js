// The Emperor Protects

spaceMarineIndex = 0;
let spaceMarineUnits = [
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
      "health": 72,
      "morale": 0.3000,
      // maxHealth is equal to 100% infantry maxHealth
      // smallArmsDamage is equal to 200% infantry
      // explosiveDamage is equal to 0.0
      // moraleDamage is equal to 200% of infantry
      // speed is equal to 40% of infantry
      // smallArmsArmor is equal to +0.4 infantry
      // explosiveArmor is equal to +0.25 infantry
      // directedEnergyArmor is equal to +0.4 infantry
      // kineticArmor is equal to +0.3 infantry
      // space marines cost 200% maintenance of infantry multiplied by the orbital unit maintenance multiplier
      "currentManpower": 200,
    },
]