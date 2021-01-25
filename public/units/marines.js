// marines are just infantry units that take up less space on destroyers and carriers
// they use the same base stats for the infantry, and get a combat bonus when attacking
// cities from the water

marineIndex = 0;
let marineUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": null,
      "isDead": false,
      "xpos": 0,
      "ypos": 0,
      "health": 66,
      "morale": 0.3000,
      // maxHealth is equal to 110% infantry maxHealth
      // smallArmsDamage is eqaul to 110% infantry
      // explosiveDamage is equal to 110% infantry
      // moraleDamage is equal to 120% of infantry
      // speed is equal to 80% of infantry
      // smallArmsArmor is equal to +0.05 infantry
      // explosiveArmor is equal to +0.10 infantry
      // directEnergyArmor and kineticArmor is infantryArmor for this value -0.1
      // marines only count for 0.5 carrying capacity on destroyers and carriers instead of 1
      // marines cost 140% maintenance of infantry
      "currentManpower": 8000,
    },
]