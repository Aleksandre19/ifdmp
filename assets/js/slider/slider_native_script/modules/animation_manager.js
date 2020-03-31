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
       this.imageOrderNumber = 0;
       
       // Counting images in config.js
       this.numberOfImages = function(){
           return anConfig.imgName.length;
       };
    }


    // Animation manager function
    manageAnimation(){

        if(this.oneTransition >= 0 && this.oneTransition < this.numberOfImages()){

             //First step when page loads
            if(this.oneTransition === 0){
                this.imageOrderNumber = 0;
                this.divId = "second-bg";
            }

        }

    }
}