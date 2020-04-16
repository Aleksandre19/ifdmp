import {SettingsChecker} from './settings_checker.js';
import {ImageManager} from './image_manager.js';
import {Config} from '../config.js';
import {ImageAnimation} from './image_animation.js';

const anManSetting = new SettingsChecker();
const anManImageManager = new ImageManager();
const anManConfig = new Config();
const anManImageAnimation = new ImageAnimation();

export class AnimationManager{

    constructor(){
        
        this.imgOrderInConfig = 1;
        this.divId = "dianaSlider-s";

        //Checking if settiing are ok
        if(anManSetting.checkImageNamesInConfig){

            // Getting image name 
            let currenImgName = anManImageManager.imgName(this.imgOrderInConfig);
            
            // Setting background image to the div element 
            if(anManImageManager.setBackgroundImageToTheDiv(currenImgName, this.divId)){

                // If background image was set so get natural demisions
                if(anManImageManager.getNaturalDimension(currenImgName, this.divId)){
                    
                    // Calling Image Animation function from image_animation.js
                    anManImageAnimation.imageAnimation(this.divId, sessionStorage.getItem("imageNaturalWidth"));
                  
                    console.log("Your screen resolution is: " + window.screen.width + "x" + window.screen.height);
                }
       
            }

            
           
        }
    }


    


}