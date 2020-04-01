import {SettingsChecker} from './settings_checker.js';
import {ImageManager} from './image_manager.js';


const anManSetting = new SettingsChecker();
const anManImageManager = new ImageManager();
export class AnimationManager{

    constructor(){

        if(anManSetting.checkImageNamesInConfig()){
            anManImageManager.setBackgroundImageToTheDiv();
        }
    }


}