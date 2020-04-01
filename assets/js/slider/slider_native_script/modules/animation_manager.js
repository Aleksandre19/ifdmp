import {SettingsChecker} from './settings_checker.js';
import {ImageManager} from './image_manager.js';
import {Config} from '../config.js';

const anManSetting = new SettingsChecker();
const anManImageManager = new ImageManager();
const anManConfig = new Config();

export class AnimationManager{

    constructor(){
        
        this.imgOrderInConfig = 0;
        this.divId = "dianaSlider-s";
        if(anManSetting.checkImageNamesInConfig){

            // Getting image name 
            let currenImgName = anManImageManager.imgName(this.imgOrderInConfig);

            anManImageManager.setBackgroundImageToTheDiv(currenImgName, this.divId);
        }
    }


}