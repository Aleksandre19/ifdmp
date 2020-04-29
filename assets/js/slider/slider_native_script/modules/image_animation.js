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
        this.animationStepCounter = 0;
        this.divNameF = "dianaSlider-f";
        this.divNameS = "";
        this.naturalW = 0;
        this.lastImage = false;
        this.called = true;

        this.callAnimationAgain = true;
        this.hasEnteredSecondTime = false;
        this.oneCircleHasFinished = false;

        this.settingEvenListenerToButtons;

        this.saveSteps = [];

        this.clickedOnButton = false;

        
        

    }


    imageAnimation(naturalWidth, imgAniDivId){

        this.animateImageInSize(naturalWidth, imgAniDivId);

         // Calling Image text animation functions
        if(this.clickedOnButton){
            imgAniTextAnimation.finishImageTextAnimation;
        }
           
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

            // Saving interval in to array to be able to now which interval is running
            this.animationsStepsSaver('this.anInSize');
            
            this.anInSize = setInterval(() => {
               
                let scaledUpWidth = this.naturalW++;

                document.getElementById(elDivId).style.backgroundSize = `${scaledUpWidth}px`;

                // When image's dimention is increased by 7% going on next step
                if(Math.round(this.calculateImageIncreasedDemision(scaledUpWidth)) === 7 && _functionHasCalled.get(this)){     

                    // Only first time we call fade out function in sequence.
                    // Next time we call that function end of the each circle
                    if(this.animationStepCounter === 0){
                                                                       
                        this.animationFadeInOut(elDivId);

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
        this.animationStepCounter++;

        // When step counter reaches more than 3 it resetts back to 1
        if(this.animationStepCounter > 3 || this.animationStepCounter < 0){
            this.animationStepCounter = 1;
        }

        console.log("Step Caounter " +  this.animationStepCounter);

         console.log("Click BUtton is: "  +  this.clickedOnButton);
        
        // Defining opacity variable
        let op = 1;

        // Saving interval in to array to be able to now which interval is running
        this.animationsStepsSaver('this.fade');


        this.fade =  setInterval(() => {

           // Decrementing opacity by 0.003 each time
           op -= 0.003;
                      
           document.getElementById(fadeID).style.opacity = `${op}`;

           // When there is last step this code calles animations's circle again
           if(this.animationStepCounter === 3 && this.callAnimationAgain){

                this.called = true;
                    
                this.imageAnimation("dianaSlider-s", sessionStorage.getItem("imageNaturalWidth"));

                this.callAnimationAgain = false;

                this.clickedOnButton = false;

           }

           // When opacity is less or equal to 5 than calling a backgroundMoving function for second background image
            if(this.called && this.animationStepCounter === 1){
                        
                //Animatiing background by moving it 
                this.backgroundMoving(this.divNameF);

                // Setting value to identify that this if statment was called once inside interval
                this.called = false;

            }else if(op.toFixed(1) < 0.0){ // when image opacity goes down than 0.0 we call transition controller function
                
                this.transitionController(this.animationStepCounter, '');
                    
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

         // Saving interval in to array to be able to now which interval is running
         this.animationsStepsSaver('this.bgMove');

        // Running timer for animation
        this.bgMove = setInterval(() => {

            // Decreasing move variable by 0.1 unit 
            move -= 0.1;

            // Managing text animation's transitions
            if(move.toFixed(0) <= -270 && called6){

                imgAniTextAnimation.finishImageTextAnimation;
                called6 = false;

            }else if(move.toFixed(0) <= -175 && called5){

                imgAniTextAnimation.startImageTextAnimation;
                imgAniTextAnimation.insertImageTextsInDiv("text-f", "author-f", 2);
                called5 = false;

            }else if(move.toFixed(0) <= -170 && called4){

                imgAniTextAnimation.finishImageTextAnimation;
                called4 = false;

            }else if(move.toFixed(0) <= -65 && called3){
                
               imgAniTextAnimation.startImageTextAnimation;
               imgAniTextAnimation.insertImageTextsInDiv("text-f", "author-f", 1);
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



    // This functuons controlls transitions between images
    transitionController(step, btnId){
       
        if(step === 1){

            console.log("transitionController 1" );

            // Activating second slider button

            this.activeCurrentSlideButton((btnId === '' ?  'second_btn' :  btnId));

            // Stoping running intervals
            this.stopRunningIntervals('this.fade', 'this.anInSize'); 
           

            // Removing finished intervals from array
            this.removeAnimationStepsFromArray('this.fade','this.anInSize');
           

        
            // Calling style resett function
            this.styleResetter(step);

            console.log("dianaSlider-s has finished");


         }else if(step === 2){


            
            console.log("transitionController 2" );

            // Activating third slider button
            this.activeCurrentSlideButton((btnId === '' ?  'third_btn' :  btnId));


             // Stoping running intervals
            this.stopRunningIntervals('this.bgMove', 'this.fade'); 
            

            // Removing finished intervals from array
            this.removeAnimationStepsFromArray('this.fade','this.bgMove');
        


            // Calling resett function
            this.styleResetter(step);

            console.log("dianaSlider-f has finished");

            // Calling fadeout function
            this.animationFadeInOut("lastImage");
        
                        
        }else if(step === 3){

            console.log("transitionController 3");

            // Activating frist slider button
            this.activeCurrentSlideButton((btnId === '' ?  'first_btn' :  btnId));            

             // Stoping running intervals
            this.stopRunningIntervals('this.bgMove', 'this.fade'); 


            // Removing finished intervals from array
            this.removeAnimationStepsFromArray('this.fade','this.bgMove');

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
       
        // Getting elements to variables
        let el = document.getElementById("dianaSlider-s");
        let el2 = document.getElementById("dianaSlider-f");
        let el3 = document.getElementById("lastImage");
        

        if(step === 1){

            let el = document.getElementById('dianaSlider-s');

            el.style.opacity = '1';

            el.style.zIndex = '5';

            // Setting original sizes
            el.style.backgroundSize = `${sessionStorage.getItem("imageNaturalWidth")}px`;

        }else if(step === 2){

            el2.style.backgroundPosition = "0px 0px";

            el2.style.opacity = '1';

            el2.style.zIndex = '5';

            this.callAnimationAgain = true;

        }else if(step === 3){

            // Resetting z-index back to 10
            el.style.zIndex = "10";

             // Resetting z-index back to 10
            el2.style.zIndex = "10";

            // Making fully visible
            el3.style.opacity = "1";

        }else{
            return false;
        }

    }


    // Saving animations steps in array to be able to control it
    animationsStepsSaver(val){

        this.saveSteps.push(val);

    }


    // Deleting animation's intervals from the array.
    // The way this code is written generally is not good for n-Notation,
    // But in my case there is small amount of data and i can use two
    // for loops one inside other.
    removeAnimationStepsFromArray(...val){

        for(let intName of val){

             for(let i = 0; i < this.saveSteps.length; i++){

                if(this.saveSteps[i] === intName){

                    this.saveSteps.splice(i, 1);
                            
                }
            }
        }

    }


    checkIfIntervalexistsInArray(val){
    
        for(let i = 0; i < this.saveSteps.length; i++){

            if(this.saveSteps[i] === val){
                return true;
            }else{
                return false;
            }

        }    
    }


    stopRunningIntervals(...intervals){

        for(let int of intervals){

            clearInterval(eval(int));

        }

    }










    // Setting aactive button's style to the current button
    activeCurrentSlideButton(id){

        this.removeSlidersActiveButton;

        document.getElementById(id).classList.add("active_btn");
       
    }


    // Removing button's active style
    get removeSlidersActiveButton(){

       let el = document.getElementsByClassName("slide_changer_button");

       for(let i = 0; i < el.length; i++){
           el[i].classList.remove("active_btn");
       }

    }

    // Here we set click event listener to the slider switcher's buttons
    get settingEvenListenerToButtons(){

        let el = document.getElementsByClassName("slide_changer_button");

        for(let i = 0; i < el.length; i++){
          
            document.getElementById(el[i].id).addEventListener("click", (event) =>{

                if(!this.checkWhichIsActiveButton(event.toElement.classList)){
                    
                   if(this.findButtonsOrderNumber(el[i].id) != this.animationStepCounter){

                        if(this.saveSteps.length > 1){

                            this.sliderSwitcherByButtons(this.findButtonsOrderNumber(el[i].id), el[i].id);
                        }    

                   }

                }else{
                    
                     event.preventDefault(); 
                     return false;
                    
                }

                event.preventDefault();
            });
        }

    }


    // This function finds button's order number
    findButtonsOrderNumber(id){

        let el = document.getElementsByClassName('slide_changer_button');
        
        let orderNumber = 0;

        for(let i = 0; i < el.length; i++){

            if(el[i].id === id){

                orderNumber = i+1;

            }

        }


        return orderNumber;


    }



    // Here we check which buttons is active
    checkWhichIsActiveButton(data){
        
        for(let className of data){

            if(className === "active_btn"){

                return true;

            }else{

                return false;

            }
        }
    }



    // This function stops all current running intervals
    get stopAllIntervals(){

        for(let intervals of this.saveSteps){

            clearInterval(eval(intervals));
        }

    }


    
    sliderSwitcherByButtons(num, id){
        
        this.stopAllIntervals;
        
        if(num === 2 && this.animationStepCounter === 1){

            imgAniTextAnimation.finishImageTextAnimation;
            imgAniTextAnimation.insertImageTextsInDiv("text-f", "author-f", 1);
            imgAniTextAnimation.startImageTextAnimation;


            this.transitionController(1, "second_btn");
            document.getElementById('dianaSlider-s').style.backgroundPosition = '0px 0px';
            this.clickedOnButton = true;

            console.log("Click BUtton is: "  +  this.clickedOnButton);


            setTimeout(() =>{
                this.animationFadeInOut(this.divNameF); 
            },2000);

        }else if(num === 3 && this.animationStepCounter === 1 ){

            this.activeCurrentSlideButton('third_btn');

            let el = document.getElementsByClassName('slideshow');

            for(let i = 0; i < el.length; i++){
                   
                if(el[i].id === 'lastImage'){

                  
                    document.getElementById(el[i].id).style.zIndex = '10';

                    imgAniTextAnimation.finishImageTextAnimation;
                    imgAniTextAnimation.insertImageTextsInDiv("text-f", "author-f", 2);
                    imgAniTextAnimation.startImageTextAnimation;

                    setTimeout(() => {

                        //this.animationStepCounter = 2;
                        this.animationFadeInOut("lastImage");

                    }, 2000);


                }else{

                    document.getElementById(el[i].id).style.zIndex = '5';

                }

            }
           
        }

    }



// End of the Class     
}