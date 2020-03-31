// Importing classes
import {Config} from '../config.js';

// Initiating Classes
const anConfig = new Config();


// Animation manager class
export class AnimationManager{
    constructor(){
       
       // Declaring necessary variables  
       this.oneTransition = 0;
       this.oneCircle = false;
       this.divId = "";
       this.secondDivId = "dianaSlider";
       this.imageOrderNumber = 0;
       
       // Counting images in config.js
       this.numberOfImages = function(){
           return anConfig.imgName.length;
       };
    }


    // Animation manager function
    manageAnimation(i){
       
        // Setting range of transitions between images
       if(i > 0 && i < this.numberOfImages()){
           this.oneTransition = i;

           // If all transition has happend than we get one circle
           if(this.oneTransition === this.numberOfImages()){
               this.oneTransition = 0;
               this.oneCircle = true;
           }
           
       }

        if(this.oneTransition >= 0 && this.oneTransition < this.numberOfImages()){

             //First step when page loads
            if(this.oneTransition === 0){
                this.imageOrderNumber = 0;
                this.divId = "second-bg";
            }

        }

    }
}