// the Building Process array is how we keep track of all units and objects being created on each planet and solar system
// when an order is given for a building in any city to begin building something, it matches the 'city.buildings[ID]'
// to the 'city.buildingProcess[ID]', then uses the ID in the buildingProcess array to find the id of an object in this array,
// it then sets the process to run in one of these objects and also created a reference in the 'countries.buildingProcess'
// array. At the end of each month the queue in the 'countries.buildingProcess' array is run, each entry of which will now
// correspond with an object in the array below, and execute code based on the build process in that object. If a building in
// a city is "destroyed", it will find the build process below corresponding to the id of that building in the 'city.buildingProcess[ID]'
// array, and set this building process to an empty string, as well as mark the object for destruction at the end of the month.


map2BuildingProcessID = 40;
// This variable is used to track how many building processes there have been total for this map. Since objects in this array are deleted
// when a building is destroyed, we want to track how many buildings have existed so we do not re-use a build Process

let map2BuildingProcess = [
    {
        "id": 0,
        "city": 0,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 1,
        "city": 0,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 100,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 2,
        "city": 0,
        "buildingArrayIndex": 2,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "processed-metal",
        "outputAmount": 1,
        "maintenanceMaterial": ["capital", "metal", "energy"],
        "maintenanceAmount": [0.5,1.5,0.4],
        "loop": 1,
        "monthsLeft": 1
        // metal processing plants should always be built with this pre-set object since their build queue never changes
        // same with power plants
    },
    {
        "id": 3,
        "city": 1,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 4,
        "city": 1,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 5,
        "city": 2,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 6,
        "city": 2,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 7,
        "city": 5,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 8,
        "city": 6,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "energy",
        "outputAmount": 5,
        "maintenanceMaterial": ["oil","capital"],
        "maintenanceAmount": [1,0.1],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 9,
        "city": 7,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 10,
        "city": 8,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 11,
        "city": 10,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 12,
        "city": 12,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 13,
        "city": 13,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 14,
        "city": 13,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 15,
        "city": 14,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 16,
        "city": 14,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 17,
        "city": 15,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 18,
        "city": 16,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 19,
        "city": 17,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 20,
        "city": 17,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 21,
        "city": 18,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 22,
        "city": 19,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 23,
        "city": 19,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 24,
        "city": 20,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "energy",
        "outputAmount": 5,
        "maintenanceMaterial": ["oil","capital"],
        "maintenanceAmount": [1,0.1],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 25,
        "city": 21,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 26,
        "city": 22,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "energy",
        "outputAmount": 5,
        "maintenanceMaterial": ["oil","capital"],
        "maintenanceAmount": [1,0.1],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 27,
        "city": 23,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "energy",
        "outputAmount": 5,
        "maintenanceMaterial": ["oil","capital"],
        "maintenanceAmount": [1,0.1],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 28,
        "city": 24,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "energy",
        "outputAmount": 5,
        "maintenanceMaterial": ["oil","capital"],
        "maintenanceAmount": [1,0.1],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 29,
        "city": 25,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 30,
        "city": 26,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 31,
        "city": 27,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 32,
        "city": 27,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 33,
        "city": 28,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 34,
        "city": 29,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 35,
        "city": 30,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 36,
        "city": 31,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 37,
        "city": 31,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "energy",
        "outputAmount": 5,
        "maintenanceMaterial": ["oil","capital"],
        "maintenanceAmount": [1,0.1],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 38,
        "city": 32,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
    {
        "id": 39,
        "city": 32,
        "buildingArrayIndex": 1,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
     {
        "id": 40,
        "city": 33,
        "buildingArrayIndex": 0,
        "virus": 0,
        "destroyed": false,
        "active": true,
        "targetCity": undefined,
        "damageType": "",
        "damageAmount": 0,
        "range": 0,
        "tracking": 0,
        "outputMaterial": "",
        "outputAmount": 1,
        "maintenanceMaterial": [],
        "maintenanceAmount": [],
        "loop": 1,
        "monthsLeft": 1
    },
]