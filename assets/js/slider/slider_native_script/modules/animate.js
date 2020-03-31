// Importing classes
import {CheckSettings} from './check_settings.js';
import {Config} from '../config.js';
import {Images} from './images.js';
import {AnimationFunctions} from './animation_functions.js';

// Initialising objects
const settings = new CheckSettings();
const conf = new Config();
const images = new Images();
const AnimeFun = new AnimationFunctions();

// Declaring private variabels with WeakMap();
const _imageNaturalWidth = new WeakMap();
const _imageStartingNaturLWidth = new WeakMap();
const _imgName = new WeakMap();
const _functionHasCalled = new WeakMap();


// Creating Animation's class
export class Animate{

    constructor(){
        //Setting animation imnage name
        _imgName.set(this, images.getImageName(0));
    

        // Checking if all reuqried setting are ok
        if(settings.settingsStatus){
            Animate.getNaturalDiminsion(_imgName.get(this), "second-bg");
        }
    }

    jusTforTest(){
        console.log("testing");
    }

    // Starting animation
     static startAnimation(divId,natWidth){

            // Saving image's starting width  
             _imageStartingNaturLWidth.set(this, natWidth);

           // Defining variable to check if function has been called   
            _functionHasCalled.set(this, true);

            setInterval(() => {

                let scaledUpWidth = natWidth++;

                document.getElementById(divId).style.backgroundSize = `${scaledUpWidth}px`;
            
                // When image's dimention is increased by 7% going on next step
                if(Math.round(Animate.calculateImageIncrisedDimension(scaledUpWidth)) === 7 && _functionHasCalled.get(this)){
           
                    AnimeFun.backgroundFadeToggle("second-bg");

                    _functionHasCalled.set(this, false);
                }

           },15);
    }


    // Calculating how much the demission was increased
    static calculateImageIncrisedDimension(sUpWidth){      
        return (sUpWidth - _imageStartingNaturLWidth.get(this)) / _imageStartingNaturLWidth.get(this) * 100;
    }
   
    
    // Getting natural dimentions of image
    static getNaturalDiminsion(imgName, divId){
            // Getting image's current width and height
            // This part of the code i found and copyed from here:
            // https://stackoverflow.com/questions/3098404/get-the-size-of-a-css-background-image-using-javascript
            let iName  = imgName;
            let image;
            image = new Image();
            
            image.src = images.imgFullPath(iName);
            

            // On load getting width and height of image
            image.onload = function() {

                // Setting natural dimentions to the variables
                _imageNaturalWidth.set(this, image.naturalWidth);

                // Calling animation function
                Animate.startAnimation(divId,_imageNaturalWidth.get(this));
                    
            };

           // console.log(_imageNaturalWidth.get(this));
    }

  
    
  
    
    
   

}