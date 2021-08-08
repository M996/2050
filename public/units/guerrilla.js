guerrillaIndex = 1;
let guerrillaUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "ideology": 3,
      // the ideology attribute is the ideology this guerrilla group is loyal to
      // if the guerrilla has no ideology this will be 'false'
      "seperatistID": null,
      // the seperatis ID is the country this guerrilla is trying to liberate provinces for
      // if the guerrilla has no seperatist host nation this will be 'null'
      "planetID": 2,
      "cityID": 0,
      "army": null,
      "health": 66,
      // guerilla morale is either 25% if these are province guerrillas or based on theri Ideology if these
      // are ideological guerrillas
      "currentMorale": 12,
      "maxMorale": 12,
      "morale": 0.2500,
      // maxHealth is equal to 80% infantry maxHealth
      // smallArmsDamage is found in Host Country Guerrilla Stats
      // explosiveDamage is found in Host Country Guerrilla Stats
      // moraleDamage is equal to 90% of infantry
      // speed is equal to 75% of infantry
      // smallArmsArmor is equal infantry
      // explosiveArmor is equal to -0.05 infantry
      // directEnergyArmor and kineticArmor is infantryArmor for this value +0.1
      "currentManpower": 10000,
    }
]