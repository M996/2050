// skyhooks are orbital units with no attack, but by clicking on them the build window is opened, and from there
// the player can construct orbital units the same way that they would from a launch pad on the ground or
// a space elevator. For non-space orietned nations, the skyhook is the best way to get into space, it lowers
// production costs and maintenance to about 50% of what a launch pad would normally cost, skyhooks are still
// not as good as a space elevator or having an asteroid habitat, but any major ground power should have one
// if they want to be taken seriously and not threatened by space empires

let skyhookUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      // skyhooks can never stop at a space tower so they can never have a city id
      "isDead": false,
      "xpos": 0,
      "ypos": 0,
      "health": 15,
      // skyhook health is equal to 150% of task ship health
    },
]