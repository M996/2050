// Destroyers are the main battle unit of teh seas. All nations have access to them,
// and the ability to extract food from water tiles is determined by who has the most stationed in
// said water tile. In this way Destroyers are not only capable of attacking enemy ships,
// blockading ports, seizing trade ships, invading coastal cities, and transporting troops
// but can also be used directly to take control of food resources

destroyerIndex = 0;
let destroyerUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": null,
      "isDead": false,
      "xpos": 0,
      "ypos": 0,
      "health": 400,
      "morale": 0.3000,
      "carrying": 0,
      "currentManpower": 5500,
    },
]