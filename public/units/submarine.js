// Submarines are stealth units that cannot be seen by the enemy and ai will not
// compensate for them unless they have been 'detected' whatever that is going to look like.
// submarines are excellent at hit and run and can destroy a destroyer in one shot without being detected
// based on their evasion chance. Later versions of the game may allow ICBMs to be launched
// from Submarines


submarineIndex = 0;
let submarineUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": 0,
      "fleet": null,
      "health": 60,
      // while many units may split alliegance in a civil war based partly on morale, submarines will have
      // a different alliegance splitting mechanic, and should be more likely then most untis to split alliegance
      // and side with the underdog in a civil war
      "currentManpower": 3000,
    },
]