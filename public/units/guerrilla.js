guerrillaIndex = 1;
let guerrillaUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": 0,
      "army": null,
      "health": 66,
      // guerilla morale is either 25% if these are province guerrillas or based on theri Ideology if these
      // are ideological guerrillas
      "morale": 0.2500,
      // maxHealth is equal to 80% infantry maxHealth
      // smallArmsDamage is found in Host Country Guerrilla Stats
      // explosiveDamage is found in Host Country Guerrilla Stats
      // moraleDamage is equal to 90% of infantry
      // speed is equal to 75% of infantry
      // smallArmsArmor is equal to -0.08 infantry
      // explosiveArmor is equal to -0.10 infantry
      // directEnergyArmor and kineticArmor is infantryArmor for this value +0.1
      "currentManpower": 10000,
    }
]