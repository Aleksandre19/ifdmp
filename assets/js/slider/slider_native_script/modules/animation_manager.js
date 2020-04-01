import {SettingsChecker} from './settings_checker.js';
import {ImageManager} from './image_manager.js';
import {Config} from '../config.js';

const anManSetting = new SettingsChecker();
const anManImageManager = new ImageManager();
const anManConfig = new Config();

export class AnimationManager{

    constructor(){

        
        
        //console.log(dianaSliderFimg());

        if(anManSetting.checkImageNamesInConfig()){
            anManImageManager.setBackgroundImageToTheDiv();
        }
    }


}