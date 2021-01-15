// Map 2 Canvas Settings

let backgroundImgCanvas = document.querySelector("#background-img");
let backgroundImgContext = backgroundImgCanvas.getContext("2d");

backgroundImgCanvas.height = 4144;
backgroundImgCanvas.width = 7200;
// These number represent the size of the canvas we have to draw on.

class BackgroundImage {
    constructor(imagePath) {
        this.imagePath = imagePath;
        this.xpos = 0;
        this.ypos = 0;
    }
}


function createImage(backgroundImgContext, imagePath, xpos, ypos) {
    let backgroundImg = document.createElement('img');
    backgroundImg.id = "map2Main";
    backgroundImg.src = imagePath;
    backgroundImg.style.zIndex = "2";
    backgroundImg.onload = function() {
        var width = backgroundImg.naturalWidth;
        var height = backgroundImg.naturalHeight;
        // these properties will allow the image to display inside the canvas at its natural width and height
        // (7200px X 4144px)
        backgroundImgContext.drawImage(backgroundImg, xpos, ypos, width, height);
        
        // next we must display cities on the map depending on which map is currently being rendered.
        
        switch(imagePath) {
            
        case "maps/game-map-2-full-size.png":
          
            // create an img tag on the canvas for every city on the map, tag each circle image with an id corresponding to the city id.
            map2Cities.forEach(function(city) {
              let cityImg = document.createElement('img');
              cityImg.className = "city-img-btn";
              cityImg.id = city.id;
              cityImg.setAttribute("onclick", "alert('blah');");
              cityImg.src = "maps/circle.png";
              cityImg.style.zIndex = "4";
              cityImg.border = "15px solid black";
              cityImg.onload = function() {
                backgroundImgContext.drawImage(cityImg, city.xpos, city.ypos, 12, 12);
                console.log(cityImg);
              }
            });
            
          break;
        
        case y:
            
          // code block
          
          break;
        
        default:
            
          // code block
        }
    }
}

function selectMap(mapNumber) {
    switch(mapNumber) {
        case "2Main":
            
          let image = new BackgroundImage('maps/game-map-2-full-size.png');
          createImage(backgroundImgContext, image.imagePath, image.xpos, image.ypos);
          
          break;
        
        case y:
            
          // code block
          
          break;
        
        default:
            
          // code block
}
    
}

selectMap("2Main");
// Run this function whenever the map switches. This function will tell the canvas which map to display.


