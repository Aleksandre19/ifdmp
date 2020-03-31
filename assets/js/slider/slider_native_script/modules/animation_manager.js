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
       this.imageName = "";
       this.numberOfImages = function(){
           return anConfig.imgName.length;
       };
    }


    // Animation manager function
    manageAnimation(){

    }
}