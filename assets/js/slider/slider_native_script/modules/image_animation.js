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

        this.textAnimationHasCalled = true;

        
        this.animationHasStarted = true;

        this.move = 1;

        this.opacity = 1;

        this.scaledUpWidth = 0;

        this.wrapperID = 2;

        const APIkey = 'AIzaSyBTHOShiV37hHaNUxC1aQhZxMyY4VFKX2U';   
        

    }


    imageAnimation(naturalWidth, imgAniDivId){


        this.animateImageInSize(naturalWidth, imgAniDivId);

         // Calling Image text animation functions
        if(this.clickedOnButton){
            imgAniTextAnimation.textAnimation('finish');
        }
        
        // Only at the beginning I call here text animation's function
        // 
        if(this.animationHasStarted){
            imgAniTextAnimation.textAnimation(0, 'start');
        }
        
        this.animationHasStarted = false;

    }



    // Animating image's width
    animateImageInSize(elDivId , natW){
            
            // Restoring the value of the animation in size variable
            this.scaledUpWidth = 0;

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
            this.animationsIntervalsSaver({ int : 'this.anInSize', val: this.naturalW, divId: elDivId});
            
            this.anInSize = setInterval(() => {
               
                this.scaledUpWidth = this.naturalW++;

                // Here i updating value of chenged image's size in the array (this.saveSteps) where is save this value.
                this.updatingSavedIntervalsValue('this.anInSize', this.scaledUpWidth);

                document.getElementById(elDivId).style.backgroundSize = `${this.scaledUpWidth}px`;

                // When image's dimention is increased by 7% going on next step
                if(Math.round(this.calculateImageIncreasedDemision(this.scaledUpWidth)) === 7 && _functionHasCalled.get(this)){    

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



    get getSliderWrappersID(){

        let el = document.getElementsByClassName('slideshow_bg_img');
        let divElID = '';

      


        if(this.wrapperID < 0){
            this.wrapperID = 2;
        }

        for(let i in el){
            if(Number(i) === Number(this.wrapperID)){
                divElID = el[i].id;
            }
        }

        this.wrapperID -= 1;

       

        return divElID;

    }




    // Animating opacity of image
    animationFadeInOut(fadeID){

        // Restoring the value of the opacity variable
        this.opacity = 1;

        // Counting how much was called this function
        this.animationStepCounter++;

        // When step counter reaches more than 3 it resetts back to 1
        if(this.animationStepCounter > 3 || this.animationStepCounter < 0){
            this.animationStepCounter = 1;
        }

        console.log(this.animationStepCounter);

       
        // Saving interval in to array to be able to now which interval is running
        this.animationsIntervalsSaver({ int : 'this.fade', val: this.opacity, divId: fadeID});


        this.fade =  setInterval(() => {

           // Decrementing opacity by 0.003 each time
           this.opacity -= 0.003;

           // Here i updating value of chenged opacity in the array (this.saveSteps) where is save this value.
           this.updatingSavedIntervalsValue('this.fade', this.opacity);
           
           // Here i start to animate text. I make value of opacity as a transition point which is 0.3
           this.textAnimation(this.animationStepCounter, this.opacity.toFixed(1), this.textAnimationHasCalled);
                        
           document.getElementById(fadeID).style.opacity = `${this.opacity}`;

           // When there is last step this code calles animations's circle again
           if(this.animationStepCounter === 3 && this.callAnimationAgain){

                this.called = true;
                  
                this.imageAnimation(this.getSliderWrappersID, sessionStorage.getItem("imageNaturalWidth"));

                this.callAnimationAgain = false;

                this.clickedOnButton = false;

           }

           // When opacity is less or equal to 5 than calling a backgroundMoving function for second background image
            if(this.called && this.animationStepCounter === 1){
                        
                //Animatiing background by moving it 
                this.backgroundMoving(this.getSliderWrappersID);

                // Setting value to identify that this if statment was called once inside interval
                this.called = false;

            }else if(this.opacity.toFixed(1) < 0.0){ // when image opacity goes down than 0.0 we call transition controller function
                
                this.textAnimationHasCalled = true;

                this.transitionController(this.animationStepCounter, '');
                    
            }else{
                // In any other casses returning false
                return false;
    
            }
          
          
        }, 15);
    }




    

    // Moving backgrounf function

    backgroundMoving(id){
         
        // Restoring the value of the background moving's variable
        this.move = 1;

        // Dependign on screen resolution we incirsing image in size to cover div element during animation
        this.increasingImageSizeBasedOnScreenResolution(imgAniImageManager.screenResolution, id);

        // Gettig element
        let el = document.getElementById(id);

        // Variables to check that conditional statment has been called only once inside setInterval();
        let called = true;

         // Saving interval in to array to be able to now which interval is running
         this.animationsIntervalsSaver({ int : 'this.bgMove', val: this.move, divId: id});

        // Running timer for animation
        this.bgMove = setInterval(() => {

            // Decreasing move variable by 0.1 unit 
            this.move -= 0.1; 
            
             // Here i updating value of chenged positions in the array (this.saveSteps) where is save this value.
            this.updatingSavedIntervalsValue('this.bgMove', this.move);

            // Animating positions
            el.style.backgroundPosition = `${this.move}px ${this.move}px`;
           
            // Then image's top reaches to - 150 we call fadeout function
            if(this.move.toFixed(0) <= -150 && called === true){
                
                this.animationFadeInOut(id);
                
                called = false;
            }

        });
    }



    // This functuons controlls transitions between images
    transitionController(step, btnId){
       
        if(step === 1){

           

            // Activating second slider button

            this.activeCurrentSlideButton((btnId === '' ?  'second_btn' :  btnId));

            // Stoping running intervals
            this.stopRunningIntervals('this.fade', 'this.anInSize'); 
           

            // Removing finished intervals from array
            this.removeAnimationStepsFromArray('this.fade','this.anInSize');
           

        
            // Calling style resett function
            this.styleResetter(step);

            


         }else if(step === 2){


            
           

            // Activating third slider button
            this.activeCurrentSlideButton((btnId === '' ?  'third_btn' :  btnId));


             // Stoping running intervals
            this.stopRunningIntervals('this.bgMove', 'this.fade'); 
        

            // Removing finished intervals from array
            this.removeAnimationStepsFromArray('this.fade','this.bgMove');
        


            // Calling resett function
            this.styleResetter(step);

           

            // Calling fadeout function
            this.animationFadeInOut(this.getSliderWrappersID);
        
                        
        }else if(step === 3){

           

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

    

    // This is text animation's function
    textAnimation(step, opacity, hasCalled){

        if(step === 1 && opacity <= 0.3 && hasCalled){
         
             imgAniTextAnimation.textAnimation('finish', 1, 'start');        
             this.textAnimationHasCalled = false;

        }else if(step === 2 && opacity <= 0.3 && hasCalled){

             imgAniTextAnimation.textAnimation('finish', 2, 'start');
             this.textAnimationHasCalled = false;
 
        }else if(step === 3 && opacity <= 0.3 && hasCalled){

            imgAniTextAnimation.textAnimation('finish', 0, 'start');
            this.textAnimationHasCalled = false;
        }

    }



    increasingImageSizeBasedOnScreenResolution(screenRes, id){

            let el = document.getElementById(id); 

         // Dependign on screen resolution we incirsing image in size to cover div element during animation
            if(screenRes === "md"){
                // Medium screen size
               el.style.backgroundSize = "135%"; 

            }else if(screenRes === "sm"){
                // Small screen size
                el.style.backgroundSize = "220%";

            }else if(screenRes === "iPro"){
                // Ipad Pro
                el.style.backgroundSize = "240%";    
            }else{

                // Large screen size
                el.style.backgroundSize = "120%";
            }  

    }

    // Saving animations steps in array to be able to control it
    animationsIntervalsSaver(val){

        this.saveSteps.push(val);

    }

    // Here i save current values for this.move, this.fade and this.anInSize variables
    updatingSavedIntervalsValue(int, val){

        for(let i in this.saveSteps){
            
            if(this.saveSteps[i].int === int){

               this.saveSteps[i].val = val;

            }

        }

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

    stopAllIntervals(){

        for(let i in this.saveSteps){

            clearInterval(eval(this.saveSteps[i].int));

        }

    }



    // speedUpCurrentIntervals(num){

    //     let intName = '';

    //     let intValue = '';

    //     let speedUpint = null;

    //     let speedUpBgMove = null;

    //     for(let i in this.saveSteps){

    //        if(this.saveSteps[i].int === 'this.fade'){

    //             let opacity = this.saveSteps[i].val;

    //             clearInterval(eval(this.saveSteps[i].int));

    //             speedUpint = setInterval(() => {

    //                 opacity -= 0.003;

    //                 document.getElementById(this.saveSteps[i].divId).style.opacity = `${opacity}`;

    //                 if(opacity.toFixed(1) < 0.0){

    //                     console.log(opacity.toFixed(1));

    //                     clearInterval(speedUpint);

    //                 }

    //             },1)

    //        }else if(this.saveSteps[i].int === 'this.bgMove' && num ===){


    //             let move = this.saveSteps[i].val;

    //             clearInterval(eval(this.saveSteps[i].int));

    //             speedUpBgMove = setInterval(() => {

    //                 move += 1;

    //                 document.getElementById(this.saveSteps[i].divId).style.backgroundPosition = `${move}px ${move}px`;

    //                 if(move.toFixed(0) >= 0){

    //                     console.log(move.toFixed(0));

    //                     clearInterval(speedUpBgMove);

    //                 }

    //             },1)     


    //        }

    //     }        

    // }   

    
    sliderSwitcherByButtons(num, id){
        

        this.activeCurrentSlideButton(id);

        
        imgAniTextAnimation.textAnimation('finish');

        this.stopAllIntervals();

        this.wrapperID = Number(num - 1);

        imgAniTextAnimation.textAnimation(this.wrapperID, 'start');

        this.called = true;

        console.log(this.wrapperID);

        console.log("num "  + num);
        this.animationStepCounter = 0;

        let el = document.getElementsByClassName('slideshow_bg_img');

        for(let i = 0; i < el.length; i++){
            document.getElementById(el[i].id).classList.add('slideshow_bg_img');
        }


        this.styleResetter(this.wrapperID);

        this.imageAnimation(this.getSliderWrappersID, sessionStorage.getItem("imageNaturalWidth"));

       

    }



// End of the Class     
}