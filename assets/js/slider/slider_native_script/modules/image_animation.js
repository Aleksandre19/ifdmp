import {ImageManager} from './image_manager.js';
import {DianaSliderMessageBox} from './animation_message.js';
import {AnimationTexts} from './animation_text.js';

const imgAniImageManager = new ImageManager();
const imgAniMessage = new DianaSliderMessageBox();
const imgAniTextAnimation = new AnimationTexts();

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

        this.callAnimationAgain = true;
        this.hasEnteredSecondTime = false;
        this.oneCircleHasFinished = false;


    }


    imageAnimation(naturalWidth, imgAniDivId){
        
        this.animateImageInSize(naturalWidth, imgAniDivId);

        // Calling Image text animation functions
       imgAniTextAnimation.insertImageTextsInDiv("text-f", "author-f", 0);
       imgAniTextAnimation.startImageTextAnimation;

    }



    // Animating image's width
    animateImageInSize(elDivId , natW){

            // If there is Ipad Pro then we incrise natural width by 10% to hide emnpty space during animation
            if(imgAniImageManager.screenResolution === "iPro"){
                this.naturalW = (Number(natW) * 10 / 100) + Number(natW);
            }else{
                this.naturalW = natW;
            }

            // Saving image's starting width
            // If device is Ipad pro then we save 10% incrised natural with to hide empty space suring animation 
             _imageStartingNaturLWidth.set(this, (imgAniImageManager.screenResolution != "iPro" ? natW : this.naturalW));

           // Defining variable to check if function has been called   
            _functionHasCalled.set(this, true);

            this.anInSize = setInterval(() => {
               
                let scaledUpWidth = this.naturalW++;

                document.getElementById(elDivId).style.backgroundSize = `${scaledUpWidth}px`;

                // When image's dimention is increased by 7% going on next step
                if(Math.round(this.calculateImageIncreasedDemision(scaledUpWidth)) === 7 && _functionHasCalled.get(this)){     

                    // Getting second image name to set second div background image with
                    let changeImageName = imgAniImageManager.imgName(0);

                    if(changeImageName){

                        // Setting second backgroud image to the second div element with id #dianaSlider-f
                        if(imgAniImageManager.setBackgroundImageToTheDiv(changeImageName, "dianaSlider-f")){

                                // Only first time we call fade out function in sequence.
                                // Next time we call that function end of the each circle
                                if(this.animationFadeCaounter === 0){
                                        
                                    this.animationFadeInOut(elDivId);

                                }    

                        }else{
                            // In other cases it returns false
                            return false;

                        }
 

                    }else{
                        
                        // In case there is some mistake in image name so throw new error
                        imgAniMessage.getMessage("There was a some problem! Please check image names in config.js");

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

        // When step counter reaches more than 3 it resetts back to 1
        if(this.animationFadeCaounter > 3 || this.animationFadeCaounter < 0){
            this.animationFadeCaounter = 1;
        }

        console.log(this.animationFadeCaounter);
        // Defining opacity variable
        let op = 1;

        this.fade =  setInterval(() => {

           // Decrementing opacity by 0.003 each time
           op -= 0.003;
                      
           document.getElementById(fadeID).style.opacity = `${op}`;

           // When there is last step this code calles animations's circle again
           if(this.animationFadeCaounter === 3 && this.callAnimationAgain){

                this.called = true;
                    
                this.imageAnimation("dianaSlider-s", sessionStorage.getItem("imageNaturalWidth"));

                this.callAnimationAgain = false;

           }

           // When opacity is less or equal to 5 than calling a backgroundMoving function for second background image
            if(this.called && this.animationFadeCaounter === 1){
                        
                //Animatiing background by moving it 
                this.backgroundMoving(this.divNameF);

                // Setting value to identify that this if statment was called once inside interval
                this.called = false;

            }else if(op.toFixed(1) < 0.0){ // when image oopacity goes down than 0.0 we call transition controller function

                this.transitionController(this.animationFadeCaounter);
                    
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

        // Variables to check that conditional statment has been called only once inside setInterval();
        let called = true;
        let called2 = true;    
        let called3 = true;
        let called4 = true;
        let called5 = true;
        let called6 = true;

        // Running timer for animation
        this.bgMove = setInterval(() => {

            // Decreasing move variable by 0.1 unit 
            move -= 0.1;


            // Managing text animation's transitions
            if(move.toFixed(0) <= -280 && called6){

                imgAniTextAnimation.finishImageTextAnimation;
                called6 = false;

            }else if(move.toFixed(0) <= -175 && called5){

                imgAniTextAnimation.insertImageTextsInDiv("text-f", "author-f", 2);
                imgAniTextAnimation.startImageTextAnimation;
                called5 = false;

            }else if(move.toFixed(0) <= -170 && called4){

                imgAniTextAnimation.finishImageTextAnimation;
                called4 = false;

            }else if(move.toFixed(0) <= -65 && called3){
                
               imgAniTextAnimation.insertImageTextsInDiv("text-f", "author-f", 1);
               imgAniTextAnimation.startImageTextAnimation;
               called3 = false;

            }else if(move.toFixed(0) <= -60 && called2){
               
               imgAniTextAnimation.finishImageTextAnimation;
               called2 = false;

            }

           

            // Animating positions
            el.style.backgroundPosition = `${move}px ${move}px`;

            // Dependign on screen resolution we incirsing image in size to cover div element during animation
            if(imgAniImageManager.screenResolution === "md"){
                // Medium screen size
               el.style.backgroundSize = "135%"; 

            }else if(imgAniImageManager.screenResolution === "sm"){
                // Small screen size
                el.style.backgroundSize = "220%";

            }else if(imgAniImageManager.screenResolution === "iPro"){
                // Ipad Pro
                el.style.backgroundSize = "240%";    
            }else{

                // Large screen size
                el.style.backgroundSize = "120%";
            }    
           
            // Then image's top reaches to - 150 we call fadeout function
            if(move.toFixed(0) <= -150 && called === true){
    
                this.animationFadeInOut(this.divNameF);
                
                called = false;
            }

        });
    }




    animatingText(i){

    
       

    }



    // This functuons controlls transitions between images
    transitionController(step){

        if(step === 1){

            // Stopin this interval 
            clearInterval(this.fade); 

            clearInterval(this.anInSize);

            // Getting second image's name
            let changeImageName = imgAniImageManager.imgName(2);

            // Setting second background image to the #dianaSlider-s
            imgAniImageManager.setBackgroundImageToTheDiv(changeImageName, "lastImage");

            // Calling style resett function
            this.styleResetter(step);

            console.log("dianaSlider-s has finished");


         }else if(step === 2){

            // Stoping background moving function
            clearInterval(this.bgMove);

            // Stoping fade outing function
            clearInterval(this.fade);

            // Getting first image name
            let changeImageName = imgAniImageManager.imgName(1);
            
            // Setting first image as a background to #dianaSlider-s div element
            imgAniImageManager.setBackgroundImageToTheDiv(changeImageName, "dianaSlider-s");

            // Calling resett function
            this.styleResetter(step);

            console.log("dianaSlider-f has finished");


            // Calling fadeout function
            this.animationFadeInOut("lastImage");

                        
        }else if(step === 3){

             // Stoping background moving function            
            clearInterval(this.bgMove);

            // Stoping fade outing function
            clearInterval(this.fade);

            // Calling resett function
            this.styleResetter(step);
            
            // Calling fade out function
            this.animationFadeInOut("dianaSlider-s");

            console.log("lastImage has finished");
                        
        }else{

            return false;

        }

    }


    // Resetting styles for html div elements on each steps
    styleResetter(step){

        if(step === 1){

             // Getting #dianaSlider-s" element  
            let el = document.getElementById("dianaSlider-s");

            // Setting z-index to the #ianaSlider-s
            el.style.zIndex = "5";
                        
            // Resetting #ianaSlider-s" opacity 
            el.style.opacity = "1";

            //Setting nothing to the #dianaSlider-s background
            el.style.backgroundImage = "";

            // Setting original sizes
            el.style.backgroundSize = `${sessionStorage.getItem("imageNaturalWidth")}px`;

        }else if(step === 2){

            // Getting element in variable
            let el = document.getElementById("dianaSlider-f");

            // resetting element's positions to 0s
            el.style.backgroundPosition = "0px 0px";

            // Setting z-index to 5
            el.style.zIndex = "5";

            // Making fully visible
            el.style.opacity = "1";

            this.callAnimationAgain = true;

        }else if(step === 3){

            // Getting elements to variables
            let el = document.getElementById("dianaSlider-s");
            let el2 = document.getElementById("lastImage");
            let el3 = document.getElementById("dianaSlider-f");

            // Resetting z-index back to 10
            el.style.zIndex = "10";

            // Making fully visible
            el2.style.opacity = "1";

            // Setting background to nothing
            el2.style.backgroundImage = "";

            // Resetting z-index back to 10
            el3.style.zIndex = "10";

        }else{
            return false;
        }

    }

// End of the Class     
}