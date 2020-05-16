/**
 * Importing modules
 */
import {DianaSliderMessageBox} from './message.js'; // Imprting MessageBox class for messages.js
import {Config} from '../config.js';

/**
 * Initiating Objects
 */
const settingsMessage = new DianaSliderMessageBox(); // initialising message object 
const settingsConfig = new Config();


/**
 * This class checks if the animation has more than one images
 * and if image's names are written in config.js
 */
export class SettingsChecker{

    constructor(){
        this.imagesNamesInConfig = false;
    }

    get checkImageNamesInConfig(){
        
        if(settingsConfig.imgName.length > 1){

            return this.imagesNamesInConfig = true;

        }else if(settingsConfig.imgName.length === 1){

            settingsMessage.getMessage("Animation must have at least two images");

        }else{

            settingsMessage.getMessage("Please set image's names in config.js");
            
        }
    }
}