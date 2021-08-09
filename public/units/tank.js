// tanks units are stronger and more expensive than infantry

tankIndex = 1;
let tankUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": 0,
      "fleet": null,
      "army": null,
      "health": 120,
      "currentMorale": 30,
      "maxMorale": 30,
      "currentManpower": 4000,
      // tank manpower is how much manpower gets drained when a tank unit takes damage and needs
      // reinforcements. The number of 'troops' that should actually be shown when you click
      // a tank unit should be this amount / 40
    },
]