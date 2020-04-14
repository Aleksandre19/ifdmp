import {ImageManager} from './image_manager.js';
import {DianaSliderMessageBox} from './animation_message.js';

const imgAniImageManager = new ImageManager();
const imgAniMessage = new DianaSliderMessageBox();

// Defining private variables by using WeakMap()
const _imageStartingNaturLWidth = new WeakMap();
const _functionHasCalled = new WeakMap();

export class ImageAnimation{



    
    constructor(){

        this.anInSize = null;
        this.fade = null;
        this.secondInterval = null;
        this.animationFadeCaounter = 0;
        this.divNameF = "dianaSlider-f";
        this.divNameS = "";
        this.naturalW = 0;
        this.lastImage = false;
        this.called = true;
    }






    imageAnimation(naturalWidth, imgAniDivId){
       
        this.animateImageInSize(naturalWidth, imgAniDivId);
    }







    // Animating image's width
    animateImageInSize(elDivId , natW){
            
            this.naturalW = natW;
            // Saving image's starting width  
             _imageStartingNaturLWidth.set(this, natW);

           // Defining variable to check if function has been called   
            _functionHasCalled.set(this, true);

            
            this.anInSize = setInterval(() => {
                
                let scaledUpWidth = this.naturalW++;

                document.getElementById(elDivId).style.backgroundSize = `${scaledUpWidth}px`;

                // When image's dimention is increased by 7% going on next step
                if(Math.round(this.calculateImageIncreasedDemision(scaledUpWidth)) === 7 && _functionHasCalled.get(this)){
                

                    // Getting second image name to set second div background image with
                    let changeImageName = imgAniImageManager.imgName(1);

                    if(changeImageName){

                        // Setting second backgroud image to the second div element with id #dianaSlider-f
                        if(imgAniImageManager.setBackgroundImageToTheDiv(changeImageName, "dianaSlider-f")){

                                // Calling animation opacity changer function
                                this.animationFadeInOut(elDivId);
                           

                        }else{

                            return false;

                        }
 

                    }else{
                        
                        // In case there is some mistake in image name so throw new error
                        imgAniMessage.getMessage("There was a some problem! Please check image names in config.js");

                        // Stopping animation
                       

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

        // Counting how much was called this function
        this.animationFadeCaounter++;

        console.log(this.animationFadeCaounter);
        // Defining opacity variable
        let op = 1;
        
        console.log(op);

        this.fade =  setInterval(() => {

           // Decrementing opacity by 0.003 each time
           op -= 0.003;
    
           document.getElementById(fadeID).style.opacity = `${op}`;

           if(this.animationFadeCaounter === 3){
              
            // ახლიდან დაუძახო ანიმაციას
            
           }
              
                // When opacity is less or equal to 5 than calling a backgroundMoving function for second background image
                if(this.called && this.animationFadeCaounter === 1){
                        
                        //Animatiing background by moving it 
                        this.backgroundMoving(this.divNameF);

                        // Setting value to identify that this if statment was called once inside interval
                        this.called = false;

                }else if(op.toFixed(1) < 0.0){ // when image oopacity goes down than 0.1 we stop animation

                    if(this.animationFadeCaounter === 1){
                        // Stopin this interval 
                        clearInterval(this.fade); 

                        clearInterval(this.anInSize);

                        console.log(op.toFixed(1));

                        console.log("dianaSlider-s has finished");


                        // Getting second image's name
                        let changeImageName = imgAniImageManager.imgName(2);

                        // Setting second background image to the #dianaSlider-s
                        imgAniImageManager.setBackgroundImageToTheDiv(changeImageName, "lastImage");

                        // Getting #dianaSlider-s" element  
                        let el = document.getElementById("dianaSlider-s");

                        // Setting z-index to the #ianaSlider-s
                        el.style.zIndex = "5";
                        
                        // Resetting #ianaSlider-s" opacity 
                        el.style.opacity = "1";

                     }else if(this.animationFadeCaounter === 2){

                        console.log(op.toFixed(1));

                        console.log("dianaSlider-f has finished");

                        clearInterval(this.bgMove);

                        clearInterval(this.fade);
                       // this.called = true;

                        this.resetImagesStyles();

                        this.animationFadeInOut("lastImage");

                        
                    }else if(this.animationFadeCaounter === 3){
                        
                        clearInterval(this.bgMove);

                        clearInterval(this.fade);

                        console.log("lastImage has finished");
                        
                    }

                    
                }else{
                    // In any other casses returning false
                    return false;

                }

          
          
        }, 15);
    }




    

    // Moving backgrounf function

    backgroundMoving(id){

          // Declaring variable for moving ration 
        let move = 1;

        // Gettig element
        let el = document.getElementById(id);


        let called = true;

        // Running timer for animation
        this.bgMove = setInterval(() => {


            // Decreasing move variable by 0.1 unit 
            move -= 0.1;
            
            // Animating positions
            el.style.backgroundPosition = `${move}px ${move}px`;

            // Incirsing in size to cover div element
            el.style.backgroundSize = "120%";
           

            if(move.toFixed(0) <= -150 && called === true){
    
                this.animationFadeInOut(this.divNameF);
                
                called = false;
            }

        });
    }




    // Last image animation
    resetImagesStyles(){

        let changeImageName = imgAniImageManager.imgName(0);
                        
        imgAniImageManager.setBackgroundImageToTheDiv(changeImageName, "dianaSlider-s");

        let el = document.getElementById("dianaSlider-f");

        let elS = document.getElementById("dianaSlider-s");

       


    }











    // Setting names to slider divs 
    sliderDivName(id){

        if(id%2 == 0 ){
            this.divNameF = "dianaSlider-f";
        }else if((id - 1) > imgAniImageManager.imgName.length){
            this.divNameF = "dianaSlider-f"
        }else{
            this.divNameF = "dianaSlider-f"
        }
    }


    runSecondInterval(id){

         let op = 1;

        this.secondInterval =  setInterval(() => {

               op -= 0.003;
    
               document.getElementById(id).style.opacity = `${op}`;

        }, 15); 
    }
    

    setXandYpositions(id){

        let imageX = document.getElementById("dianaSlider-f").style.backgroundPositionX;
        let imageY = document.getElementById("dianaSlider-f").style.backgroundPositionY;
        
        document.getElementById("dianaSlider-f").style.backgroundPosition = `${imageX}px ${imageY}px`;

         return true;
    }
}