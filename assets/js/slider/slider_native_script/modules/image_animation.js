/**
 * On this page happens image animation,
 * text animation and 
 * here is also code for buttons which will be moved in other file in the future
 */

 // importing modules
import {ImageManager} from './image_manager';
import {DianaSliderMessageBox} from './message';
import {AnimationTexts} from './animation_text';


// Initiating object
const imgAniImageManager = new ImageManager();
const imgAniMessage = new DianaSliderMessageBox();
const imgAniTextAnimation = new AnimationTexts();


// Defining private variables by using WeakMap()
const _imageStartingNaturLWidth = new WeakMap();
const _functionHasCalled = new WeakMap();


/**
 * This class defines variables,
 * animates first image in the size by animateImageInSize() function ,
 * then increased image size reaches to 7% of the original size it calls next function animationFadeInOut()
 * which starts fading out of the first image.
 * At the same time from the animationFadeInOut() starts backgroundMoving() function.
 * This function starts position's animation and moves second image from the bottom to the left and from right to the left at the same time.
 * Then second image has moved more than 150px it starts fading out.
 * After fading out second image there starts fading out of the third image and
 * After that the circle starts again.
 *       
 */
export class ImageAnimation{


    constructor(){
        // Defining variables
        this.anInSize = null;

        this.fade = null;

        this.animationStepCounter = 0;

        this.naturalW = 0;
        
        this.called = true;

        this.callAnimationAgain = true;

        this.saveSteps = [];

        this.clickedOnButton = false;

        this.textAnimationHasCalled = true;

        this.animationHasStarted = true;

        this.move = 1;

        this.opacity = 1;

        this.scaledUpWidth = 0;

        this.wrapperID = 2;

        this.settingEvenListenerToButtons;
 
        
    }


    /**
     * This functions starts animations first effect's function - animateImageInSize()
     * and when page loads first time then it calls text animations function - imgAniTextAnimation.textAnimation(0, 'start');
     * @param {Image's natural width} naturalWidth 
     * @param {Id of the div in which the image is background} imgAniDivId 
     */
    imageAnimation(naturalWidth, imgAniDivId){

        this.animateImageInSize(naturalWidth, imgAniDivId);

        
        // Only at the beginning I call here text animation's function
        if(this.animationHasStarted){
            imgAniTextAnimation.textAnimation(0, 'start');
        }
        
        this.animationHasStarted = false;

    }


    /**
     * This function animates image (only first one) in size.
     * Then image size has increased by 7% it calls fading out function - animationFadeInOut(elDivId)
     * @param {Id of the div in which the image is background} elDivId 
     * @param {Image's natural width} natW 
     */

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



    /**
     * This function fading outs the images,
     * controls the switching of the animated texts,
     * controls finishing of the one animation's circle,
     * controls steps of the transition,
     * and colls background moving function - backgroundMoving()
     * @param {Id of the div in which the image is background} fadeID 
     */

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




    

    /**
     * This functions animates second image's position from bottom to the top and from right to the left at the same time
     * @param {Id of the div in which the image is background} id 
     */
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
            
             // Here i updating value of chenged positions in the array (this.saveSteps).
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


     /**
      * This functions calculates how much the image was increased in %
      * @param {Increased width of the image} sUpWidth 
      */
    calculateImageIncreasedDemision(sUpWidth){

        return (sUpWidth - _imageStartingNaturLWidth.get(this)) / _imageStartingNaturLWidth.get(this) * 100;
    }


    /**
     * This function gets the id of the div element in this the images ar as a backgrounds
     */
    get getSliderWrappersID(){

        // Getting all div elements
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


    /**
     * This function prepears thing before and after image transition from one to another.
     * It changes border color for button switcher,
     * stops appropriate intervals
     * and calls style resetter  
     * @param {Step of the transition} step 
     * @param {Button switcher's ID} btnId 
     */
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


    /**
     * This function resetts styles of the animation's elements
     * @param {Number of the slide} step 
     */
    styleResetter(step){
       
        // Getting elements to variables
        let el = document.getElementById("dianaSlider-s");// First slide
        let el2 = document.getElementById("dianaSlider-f");// Second slide
        let el3 = document.getElementById("lastImage"); // Third slide
        

        if(step === 1){

            // returning back opacity of the first slide
            el.style.opacity = '1';

            //Decreasing z-index of the first slide
            el.style.zIndex = '5';

            // Setting original sizes to the first slide
            el.style.backgroundSize = `${sessionStorage.getItem("imageNaturalWidth")}px`;

        }else if(step === 2){

            // Returning background positions back to 0 for the second slide
            el2.style.backgroundPosition = "0px 0px";

            // returning back opacity of the second slide
            el2.style.opacity = '1';

            //Decreasing z-index of the second slide
            el2.style.zIndex = '5';

            this.callAnimationAgain = true;

        }else if(step === 3){

            // Resetting z-index back to 10 for the first slide
            el.style.zIndex = "10";

             // Resetting z-index back to 10 for the second slide
            el2.style.zIndex = "10";

            // Making fully visible - third slide
            el3.style.opacity = "1";

        }else{
            return false;
        }

    }

    

    /**
     * This functions controls switching of the animation text.
     * On appropriate step then the opacity equals 0.3 or is less than 0.3 it makes transitions 
     * from one text to another
     * @param {Number of the slide} step 
     * @param {opacity} opacity 
     * @param {call this function only once} hasCalled 
     */

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


    /**
     * Depending on the screen resolution this function increases the image size of the slide
     * to cover empty areas which appears durring animation of slides
     * @param {Screen resolution} screenRes 
     * @param {ID of the slide} id 
     */
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



    /**
     * This function saves running intervals
     * @param {Intervals name} val 
     */
    animationsIntervalsSaver(val){

        this.saveSteps.push(val);

    }



    /**
     * This function saves value of the intervasl incrementer 
     * @param {Interval's name} int 
     * @param {value} val 
     */
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


    /**
     * This functions stops intervasls
     * @param  {Array of the interval's name} intervals 
     */

    stopRunningIntervals(...intervals){

        for(let int of intervals){

            clearInterval(eval(int));

        }

    }




    /**
     * This functions sets style of the active button
     * @param {ID of the button} id 
     */
    activeCurrentSlideButton(id){

        this.removeSlidersActiveButton;

        document.getElementById(id).classList.add("active_btn");
       
    }


    /**
     * This function removes active button's style
     */
    get removeSlidersActiveButton(){

       let el = document.getElementsByClassName("slide_changer_button");

       for(let i = 0; i < el.length; i++){
           el[i].classList.remove("active_btn");
       }

    }



    /**
     * This function sets event listener to the buttons (Sliders switching buttons)
     * and calls slider switcher button
     */
    get settingEvenListenerToButtons(){

        // Getting all buttons elements
        let el = document.getElementsByClassName("slide_changer_button");

        for(let i = 0; i < el.length; i++){
            
            // Settting click event to all buttons
            document.getElementById(el[i].id).addEventListener("click", (event) =>{

               

                if(!this.checkWhichIsActiveButton(event.toElement.classList)){
                    
                   if(this.findButtonsOrderNumber(el[i].id) != this.animationStepCounter){

                        if(this.saveSteps.length > 1){
                            
                            // Calling slider switcher's function
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


    /**
     * This function finds slider switcher's ordering number
     * @param {ID of the button} id 
     */
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



    /**
     * This function fiinds which button is active
     * @param {IDs of the button} data 
     */
    checkWhichIsActiveButton(data){
        
        for(let className of data){

            if(className === "active_btn"){

                return true;

            }else{

                return false;

            }
        }
    }


    /**
     * This function stops all intervals
     */
    stopAllIntervals(){

        for(let i in this.saveSteps){

            clearInterval(eval(this.saveSteps[i].int));

        }

    }


    
    sliderSwitcherByButtons(num, id){

        // this.activeCurrentSlideButton(id);

        
        // imgAniTextAnimation.textAnimation('finish');

        // this.stopAllIntervals();

        // this.wrapperID = Number(num - 1);

        // imgAniTextAnimation.textAnimation(this.wrapperID, 'start');

        // this.called = true;

        // console.log(this.wrapperID);

        // console.log("num "  + num);
        // this.animationStepCounter = 0;

        // let el = document.getElementsByClassName('slideshow_bg_img');

        // for(let i = 0; i < el.length; i++){
        //     document.getElementById(el[i].id).classList.add('slideshow_bg_img');
        // }


        // this.styleResetter(this.wrapperID);

        // this.imageAnimation(this.getSliderWrappersID, sessionStorage.getItem("imageNaturalWidth"));

       

    }



// End of the Class     
}