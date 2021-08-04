// Here we are beginning by laying out our main map for world 2 on our canvas

const mainCanvas2 = new fabric.Canvas('main-world-2-canvas', {
    height: 4144,
    width: 7200,
});
mainCanvas2.renderAll();
// first we must designate the canvas as being equal to a canvas element in our HTML by selecting an ID, then we set its height and width
// in this case, we want the height and width to be equal to the height and width of the actual images we will be working with.

fabric.Image.fromURL('maps/game-map-2-full-size.png', (mainImg2) => {
    mainCanvas2.backgroundImage = mainImg2;
    mainCanvas2.renderAll();
})
// now we will pull an image from a URL (relative or absolute) then set that image as  the background of our canvas, and re-render the
// entire canvas.

mainCanvas2.renderOnAddRemove = false;
// disabling this option will stop the canvas from re-rendering every time a new shape is added or removed
// setting .objectCaching could also increase performance but may cause other difficulties so it is not currently
// being done, disabling /objectCaching in the future could be experimented with

labelNumber = 0;

citySelector = new fabric.Circle({
  left: 0,
  top: 0,
  fill: 'grey',
  stroke: 'rgb(24,18,99)',
  strokeWidth: 3,
  radius: 10,
  selectable: false
});

mainCanvas2.add(citySelector);

// the city selector, is the circle that appears over any city you click on, on the map, so you don't lose your place.


 map2Cities.forEach(function(city) {
    const cityDots = new fabric.Circle({
        radius: 5,
        left: city.xpos,
        top: city.ypos,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
        selectable: false,
        hoverCursor: 'pointer',
        __uid: city.id
    });
    cityLabelText = ' ' + city.name + '  ';
     window["cityLabels"+labelNumber]= new fabric.Text(cityLabelText, {
      textBackgroundColor: 'rgba(40,40,40,0.8)',
      left: (city.xpos - 12),
      top: (city.ypos - 20),
      fontSize: 15,
      fill: 'white',
      textAlign: 'center',
      fontFamily: 'Raleway',
      fontWeight: 'bold',
      hoverCursor: 'pointer',
      selectable: false,
      __uid: city.id
    }); // create a city label for each city that displays the city name on mouseover and also shows when and where fighting
        // is happening on the world map
    cityDots.on('mouseover', function() {
     mainCanvas2.add(window["cityLabels"+city.id]);
     mainCanvas2.requestRenderAll();
    });
    cityDots.on('mouseout', function() {
     mainCanvas2.remove(window["cityLabels"+city.id]);
     mainCanvas2.requestRenderAll();
    });
    
    // below we will create an event listener so that when any city is clicked, the city interactions window pops up with all
    // relevant information for that city.
    cityDots.on('mouseup', function() {
        openCity(city, cityDots);
    });
    mainCanvas2.add(cityDots);
    // we have now rendered every single city, and can display the cities full stats when you click on them, add them to the canvas!
    
    
    // replicate all city dot functionality inside of the city labels, so that clicking either one has the same result
    window["cityLabels"+labelNumber].on('mouseup', function() {
        openCity(city, cityDots);
    });
    labelNumber++;
    
});
// each city created should be a circle 4 pixels in radius, white inside, black border, which cannot be selected and dragged around
// the screen, and contains a unique id matching it up to its counterpart in cities.js


