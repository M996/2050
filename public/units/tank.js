// tanks units are stronger and more expensive than infantry

tankIndex = 0;
let tankUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": null,
      "isDead": false,
      "fleet": null,
      "army": null,
      "xpos": 0,
      "ypos": 0,
      "health": 120,
      "morale": 0.3000,
      "currentManpower": 4000,
      // tank manpower is how much manpower gets drained when a tank unit takes damage and needs
      // reinforcements. The number of 'troops' that should actually be shown when you click
      // a tank unit should be this amount / 40
    },
]