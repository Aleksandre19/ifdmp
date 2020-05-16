
/**
 * This page set ups environment before actualy starting of animation
 */

// Importing modules 
import {SettingsChecker} from './settings_checker.js';
import {ImageManager} from './image_manager.js';
// Importing classes
import {Config} from '../config.js';
import {ImageAnimation} from './image_animation.js';


//Initiating objects
const anManSetting = new SettingsChecker();
const anManImageManager = new ImageManager();
const anManConfig = new Config();
const anManImageAnimation = new ImageAnimation();


/**
 * This class checks if setting are ok - if there are more than one images and checks if are written image names in config.js,
 * gets image names,
 * sets images as a background,
 * gets image's natural dimensions and
 * finally calls animation function
 */


// Animation manager class
export class AnimationManager{
    constructor(){
        
        this.imgOrderInConfig = 1;
        this.divId = "dianaSlider-s";

        //Checking if settiing are ok
        if(anManSetting.checkImageNamesInConfig){

            // Getting image name 
            let currenImgName = anManImageManager.imgName(this.imgOrderInConfig);
            
            // Setting background image to the div element 
            if(anManImageManager.setBackgroundImageToTheDiv){

                // If background image was set so get natural demisions
                if(anManImageManager.getNaturalDimension(currenImgName, this.divId)){
                    
                    // Calling Image Animation function from image_animation.js
                   anManImageAnimation.imageAnimation(anManImageAnimation.getSliderWrappersID, sessionStorage.getItem("imageNaturalWidth"));
                  
                }
       
            }
           
        }

    }

}