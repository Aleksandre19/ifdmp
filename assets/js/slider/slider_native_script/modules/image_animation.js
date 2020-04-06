import {ImageManager} from './image_manager.js';

const imgAniImageManager = new ImageManager();


// Defining private variables by using WeakMap()
const _imageStartingNaturLWidth = new WeakMap();
const _functionHasCalled = new WeakMap();

export class ImageAnimation{

    constructor(){
        this.anInSize = null;
        this.fade = null;
    }


    imageAnimation(naturalWidth, imgAniDivId){
       
        this.animateImageInSize(naturalWidth, imgAniDivId);
    }


    // Animating image's width
    animateImageInSize(elDivId , natW){
            
        
            // Saving image's starting width  
             _imageStartingNaturLWidth.set(this, natW);

           // Defining variable to check if function has been called   
            _functionHasCalled.set(this, true);

            
            this.anInSize = setInterval(() => {
                
                let scaledUpWidth = natW++;

                document.getElementById(elDivId).style.backgroundSize = `${scaledUpWidth}px`;

                // When image's dimention is increased by 7% going on next step
                if(Math.round(this.calculateImageIncreasedDemision(scaledUpWidth)) === 7 && _functionHasCalled.get(this)){
                    
                    // Getting second image name to set second div background image with
                    let changeImageName = imgAniImageManager.imgName(1);

                    if(changeImageName){

                        // Setting seconda backgroud image to the second div element with id #dianaSlider-f
                        imgAniImageManager.setBackgroundImageToTheDiv(changeImageName, "dianaSlider-f");

                        // Calling animation opacity changer function
                        this.animationFadeInOut(elDivId);

                    }else{
                        
                        // In case there is some mistake in image name the throw new error
                        throw new Error("There was a some problem! Please check image names in config.js");
                        return false;
                    }
                
                    // resseting valie of this variable
                    _functionHasCalled.set(this, false);
                }
               
           },15);
    }

    // Calculating how much the image has increased
    calculateImageIncreasedDemision(sUpWidth){
        return (sUpWidth - _imageStartingNaturLWidth.get(this)) / _imageStartingNaturLWidth.get(this) * 100;
    }

    // Animating opacity of image
    animationFadeInOut(fadeID){
        // Defining opacity variable
        let op = 1;

        // Variable to check that function was called once
        let called = true;
        

        this.fade =  setInterval(() => {

           // Decrementing opacity by 0.003 each time
           op -= 0.003;
    
           document.getElementById(fadeID).style.opacity = `${op}`;

           // When opacity is less or equal to 0.7 than calling a backgroundMoving function for second background image
           if(op.toFixed(1) <= 1 && called){
                //alert("naklebia");
                //anManager.divId = "dianaSlider";
                //this.backgroundMoving(anManager.divId);
                called = false;
           }else if(op.toFixed(1) < 0){
               clearInterval(this.fade);
               //this.stopFade = true;
               console.log("stoped");
              // console.log(op.toFixed(1));
           }
          
          
        }, 15);
    }
}