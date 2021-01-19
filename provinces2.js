// For a province to become autnomos or need to be kept as a vassal or satellite, at least two factors must be at play:
// it must be on another continent, another majority Ethnicity, another majority Ideology, or in Space. A space
// colony can still be directly controlled with the right policies, but at the cost of increased autonomy in all
// terrestrial provinces


let map2Provinces = [
    {
        "id": 0,
        "continent": "Turen",
        "planet": "Medera",
        "name": "Igren",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/metalicon.png' class='tile-res-icn'>",
        "resourceAmount": 2,
        "owner": "Tehlike Empire",
        "occupiedBy": "",
        "ownerID": 0,
        "occupierID": null,
        "cores": [0],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        // when unrest is high a province has a chance of being pushed up into civil unrest
        // this means that rebels now have a percentage chance of popping equal to the province's unrest
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.48,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [0,2,8],
        "ethnicity": ["Roque", "Tauran"],
        "ethnicitySize": [0.9600, 0.0400],
        "ideology": ["Turenga", "Romulotian"],
        "ideologyPercent": [0.9600, 0.0400],
        "autonomy": 0.00,
        "landNeighbors": [2,3,4,5],
        "coastalNeighbors": [1,9,15]
    },
    {
        "id": 1,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Brona",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/foodicon.png' class='tile-res-icn'>",
        "resourceAmount": 4,
        "owner": "Tehlike Empire",
        "occupiedBy": "",
        "ownerID": 0,
        "occupierID": null,
        "cores": [0],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.32,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [1,5],
        "ethnicity": ["Roque", "Tauran"],
        "ethnicitySize": [0.7600, 0.2400],
        "ideology": ["Turenga", "Romulotian"],
        "ideologyPercent": [0.7600, 0.2400],
        "autonomy": 0.00,
        "landNeighbors": [8,9],
        "coastalNeighbors": [0,2]
    },
    {
        "id": 2,
        "continent": "Turen",
        "planet": "Medera",
        "name": "Mun",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/foodicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Tehlike Empire",
        "occupiedBy": "",
        "ownerID": 0,
        "occupierID": null,
        "cores": [0],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.24,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [3,4],
        "ethnicity": ["Roque"],
        "ethnicitySize": [1.0000],
        "ideology": ["Turenga"],
        "ideologyPercent": [1.0000],
        "autonomy": 0.00,
        "landNeighbors": [0,3],
        "coastalNeighbors": [1,8]
    },
    {
        "id": 3,
        "continent": "Turen",
        "planet": "Medera",
        "name": "Jamin",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/foodicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Tehlike Empire",
        "occupiedBy": "",
        "ownerID": 0,
        "occupierID": null,
        "cores": [0],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.11,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [6,7],
        "ethnicity": ["Roque"],
        "ethnicitySize": [1.0000],
        "ideology": ["Turenga"],
        "ideologyPercent": [1.0000],
        "autonomy": 0.00,
        "landNeighbors": [0,2,5],
        "coastalNeighbors": []
    },
    {
        "id": 4,
        "continent": "Turen",
        "planet": "Medera",
        "name": "Aden",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/foodicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Paneria",
        "occupiedBy": "",
        "ownerID": 1,
        "occupierID": null,
        "cores": [1],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.25,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [9,10],
        "ethnicity": ["Roque"],
        "ethnicitySize": [1.0000],
        "ideology": ["Turenga"],
        "ideologyPercent": [1.0000],
        "autonomy": 0.00,
        "landNeighbors": [0,5,6],
        "coastalNeighbors": [15]
    },
    {
        "id": 5,
        "continent": "Turen",
        "planet": "Medera",
        "name": "Painterum",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/foodicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Paneria",
        "occupiedBy": "",
        "ownerID": 1,
        "occupierID": null,
        "cores": [1],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.08,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [11,12],
        "ethnicity": ["Roque"],
        "ethnicitySize": [1.0000],
        "ideology": ["Turenga"],
        "ideologyPercent": [1.0000],
        "autonomy": 0.00,
        "landNeighbors": [0,3,4,6],
        "coastalNeighbors": []
    },
    {
        "id": 6,
        "continent": "Turen",
        "planet": "Medera",
        "name": "Cinimat",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/foodicon.png' class='tile-res-icn'>",
        "resourceAmount": 6,
        "owner": "Paneria",
        "occupiedBy": "",
        "ownerID": 1,
        "occupierID": null,
        "cores": [1],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.33,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [13,14,15],
        "ethnicity": ["Roque"],
        "ethnicitySize": [1.0000],
        "ideology": ["Turenga"],
        "ideologyPercent": [1.0000],
        "autonomy": 0.00,
        "landNeighbors": [5,4],
        "coastalNeighbors": [7]
    },
    {
        "id": 7,
        "continent": "Turen",
        "planet": "Medera",
        "name": "Stayen Island",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/mineralicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Paneria",
        "occupiedBy": "",
        "ownerID": 1,
        "occupierID": null,
        "cores": [1],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.28,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [16],
        "ethnicity": ["Roque"],
        "ethnicitySize": [1.0000],
        "ideology": ["Turenga"],
        "ideologyPercent": [1.0000],
        "autonomy": 0.00,
        "landNeighbors": [],
        "coastalNeighbors": [6]
    },
    {
        "id": 8,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Veyra",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/preciousmetalicon.png' class='tile-res-icn'>",
        "resourceAmount": 2,
        "owner": "Veyra",
        "occupiedBy": "",
        "ownerID": 2,
        "occupierID": null,
        "cores": [2],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.52,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [17,18],
        "ethnicity": ["Roque", "Tauran"],
        "ethnicitySize": [0.7200, 0.2800],
        "ideology": ["Turenga", "Romulotian"],
        "ideologyPercent": [0.7200, 0.2800],
        "autonomy": 0.00,
        "landNeighbors": [1,10,9],
        "coastalNeighbors": [2]
    },
    {
        "id": 9,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Soufi",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/foodicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Souhnd",
        "occupiedBy": "",
        "ownerID": 3,
        "occupierID": null,
        "cores": [3],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.11,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [19,20],
        "ethnicity": ["Tauran", "Roque"],
        "ethnicitySize": [0.6200, 0.3800],
        "ideology": ["Romulotian", "Turenga"],
        "ideologyPercent": [0.6200, 0.3800],
        "autonomy": 0.00,
        "landNeighbors": [1,8,10,11,12],
        "coastalNeighbors": [0]
    },
    {
        "id": 10,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Soufa",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/metalicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Souhnd",
        "occupiedBy": "",
        "ownerID": 3,
        "occupierID": null,
        "cores": [3],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.18,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [21,22],
        "ethnicity": ["Tauran", "Roque"],
        "ethnicitySize": [0.6400, 0.3600],
        "ideology": ["Romulotian", "Turenga"],
        "ideologyPercent": [0.6400, 0.3600],
        "autonomy": 0.00,
        "landNeighbors": [8,9,11],
        "coastalNeighbors": []
    },
    {
        "id": 11,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Burgun",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/oilicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Tuetoro",
        "occupiedBy": "",
        "ownerID": 4,
        "occupierID": null,
        "cores": [4],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.44,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [23,24],
        "ethnicity": ["Tauran", "Roque"],
        "ethnicitySize": [0.6500, 0.3500],
        "ideology": ["Romulotian", "Turenga"],
        "ideologyPercent": [0.6500, 0.3500],
        "autonomy": 0.00,
        "landNeighbors": [10,9,12],
        "coastalNeighbors": []
    },
    {
        "id": 12,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Mernah",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/mineralicon.png' class='tile-res-icn'>",
        "resourceAmount": 2,
        "owner": "Tuetoro",
        "occupiedBy": "",
        "ownerID": 4,
        "occupierID": null,
        "cores": [4],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.12,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [25,26,27],
        "ethnicity": ["Tauran", "Roque"],
        "ethnicitySize": [0.8200, 0.1800],
        "ideology": ["Romulotian", "Turenga"],
        "ideologyPercent": [0.8200, 0.1800],
        "autonomy": 0.00,
        "landNeighbors": [9,11,14,13],
        "coastalNeighbors": [15]
    },
    {
        "id": 13,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Castum",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/metalicon.png' class='tile-res-icn'>",
        "resourceAmount": 2,
        "owner": "Tuetoro",
        "occupiedBy": "",
        "ownerID": 4,
        "occupierID": null,
        "cores": [4],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.26,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [28,29],
        "ethnicity": ["Tauran", "Roque"],
        "ethnicitySize": [0.8500, 0.1500],
        "ideology": ["Romulotian", "Turenga"],
        "ideologyPercent": [0.8500, 0.1500],
        "autonomy": 0.00,
        "landNeighbors": [12,14],
        "coastalNeighbors": [15]
    },
    {
        "id": 14,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Orbum",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/metalicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "Tuetoro",
        "occupiedBy": "",
        "ownerID": 4,
        "occupierID": null,
        "cores": [4],
        "claims": [],
        "isSeaZone": false,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.32,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [30,31,32],
        "ethnicity": ["Tauran", "Roque"],
        "ethnicitySize": [0.9200, 0.0800],
        "ideology": ["Romulotian", "Turenga"],
        "ideologyPercent": [0.9200, 0.0800],
        "autonomy": 0.00,
        "landNeighbors": [12,13],
        "coastalNeighbors": []
    },
    {
        "id": 15,
        "continent": "Romulan",
        "planet": "Medera",
        "name": "Belin",
        "provincePic": "",
        "xpos": 0,
        "ypos": 0,
        "arctic": false,
        "antarctic": false,
        "resource": "<img src='public/images/oilicon.png' class='tile-res-icn'>",
        "resourceAmount": 3,
        "owner": "",
        "occupiedBy": "",
        "ownerID": null,
        "occupierID": null,
        "cores": [],
        "claims": [],
        "isSeaZone": true,
        "unrest": 0,
        "civilUnrest": false,
        "controlledPercent": 1.00,
        "gdpPerCapita": 1.35,
        "disease": "",
        "diseasePercent": 0.00,
        "cities": [33],
        "ethnicity": ["Roque"],
        "ethnicitySize": [1.0000],
        "ideology": ["Turenga"],
        "ideologyPercent": [1.0000],
        "autonomy": 0.00,
        "landNeighbors": [],
        "coastalNeighbors": [0,4,12,13]
    },
]