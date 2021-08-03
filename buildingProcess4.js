// the Building Process array is how we keep track of all units and objects being created on each planet and solar system
// when an order is given for a building in any city to begin building something, it matches the 'city.buildings[ID]'
// to the 'city.buildingProcess[ID]', then uses the ID in the buildingProcess array to find the id of an object in this array,
// it then sets the process to run in one of these objects and also created a reference in the 'countries.buildingProcess'
// array. At the end of each month the queue in the 'countries.buildingProcess' array is run, each entry of which will now
// correspond with an object in the array below, and execute code based on the build process in that object. If a building in
// a city is "destroyed", it will find the build process below corresponding to the id of that building in the 'city.buildingProcess[ID]'
// array, and set this building process to an empty string, as well as mark the object for destruction at the end of the month.


map4BuildingProcessID = 40;
// This variable is used to track how many building processes there have been total for this map. Since objects in this array are deleted
// when a building is destroyed, we want to track how many buildings have existed so we do not re-use a build Process

let map4BuildingProcess = [];