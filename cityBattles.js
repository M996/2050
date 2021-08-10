cityBattleIndex = 1;
let cityBattles = [
    {
          "id": 0,
          "planetID": 2,
          "cityID": 0,
          // the planet and city in which the fighting took place are recorded in the battle log
          "attackCountry": 0,
          "attackGuerrilla": null,
          // if the "attackCountry" property has a value it will be the id of the attacking country, otherwise it will be null
          // ad this mean that the attacker was a Rebel Group instead. In this case the "attackGuerrilla" property should have
          // a value instead and this value will be the id of the ideology the guerrillas fought for
          "defendCountry": null,
          "defendGuerrilla": 1,
          // the same logic applies to the defenders as it does to the attackers
          "attackInfantryLoss": 0,
          "attackTankLoss": 0,
          "attackMarineLoss": 0,
          "attackSpaceInfantryLoss": 0,
          "attackSpaceMarineLoss": 0,
          "attackGuerrillaLoss": 0,
          // here we can see a tally kept of all the losses attackers suffered in this battle,the total losses a country has
          // suffered are kept in the country object, rebels losses are not tracked
          "defendInfantryLoss": 0,
          "defendTankLoss": 0,
          "defendMarineLoss": 0,
          "defendSpaceInfantryLoss": 0,
          "defendSpaceMarineLoss": 0,
          "defendGuerrillaLoss": 0,
          "finished": true,
          // this value is used to determine if a fight is ongoing or finished
    },               
];