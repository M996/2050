guerrillaIndex = 1;
let guerillaUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": 0,
      "isDead": false,
      "fleet": null,
      "army": null,
      "health": 66,
      // guerilla morale is dependent on various factors when they spawn, generally guerrillas have lower morale
      // guerillas have no maintenance cost
      "morale": 0.2500,
      // maxHealth is equal to 110% infantry maxHealth
      // smallArmsDamage is equal to 80% infantry
      // explosiveDamage is equal to 70% infantry
      // moraleDamage is equal to 120% of infantry
      // speed is equal to 65% of infantry
      // smallArmsArmor is equal to -0.08 infantry
      // explosiveArmor is equal to -0.10 infantry
      // directEnergyArmor and kineticArmor is infantryArmor for this value +0.1
      "currentManpower": 8000,
    }
]