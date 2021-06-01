// ICBMs are stored in Nuclear Missile Silos inside of cities or occasionally
// onboard Orbital Weapons Platforms. An Orbital Weapons Platform can carry up to
// 4 ICBMs while a Nuclear Silo can carry 10. ICBMs launched from a Silo have twice
// as high of a chance of being shot down as the ones launched from OWPs. I have yet
// to determine exactly what the chances are of shooting down an ICBM, but it will likely
// be based on the evasion rate of task ships which serves as the base evasion rate for
// all orbital units

ICBMIndex = 0;
let ICBMUnits = [
    {
      "id": 0,
      "ownerID": 0,
      "planetID": 2,
      "cityID": 0,
      "orbitalWeaponsPlatformID": 0,
      // ICBMs can be carried inside either a city or an orbital weapon's platform
      "xpos": 0,
      "ypos": 0,
      // any other stats that should be in here that are not in here currently,
      // can just be borrowed from either the taskShip stats or the aircraft stats,
      // whichever one is most applicable
      
      // placeholder evasion chance for ICBMs, Silo launched ICBM has task ship
      // evasion percentage * 0.75. When launched from an OWP it has the same evasion as
      // a task ship.
      
      // Note to self, 0.9 Nuclear Material per month is required for a Nuclear Power Plant
      // but only 1.2 NM is required for a single ICBM, maybe we should make the power plants
      // cheaper and produce both less energy and also cost less NM?
    },
]