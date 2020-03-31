import {DianaSliderMessageBox} from './animation_message.js'; // Imprting MessageBox class for messages.js
import {Config} from '../config.js';

const settingsMessage = new DianaSliderMessageBox(); // initialising message object 
const settingsConfig = new Config();



export class SettingsChecker{

    constructor(){
        this.imagesNamesInConfig = false;
    }

    checkImageNamesInConfig(){
        
        if(settingsConfig.imgName.length > 1){

            return this.imagesNamesInConfig = true;

        }else if(settingsConfig.imgName.length === 1){

            settingsMessage.getMessage("Animation must have at least two images");

        }else{

            settingsMessage.getMessage("Please set image's names in config.js");
            
        }
    }
}