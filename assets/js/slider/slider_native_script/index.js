
    /**
     * This is the index page and animation starts here.
     * It imports two main objects and initiates them
     */

    // Importing modules 
    import {AnimationManager} from './modules/animation_manager';
    import {AnimationTexts} from './modules/animation_text';

    /**
     * This class initiates animation manager's and animation text's objects
     */
    export class AnimationIndex{
        constructor(){
            const an = new AnimationManager();
            const text = new AnimationTexts();
            
        }
    }

    // Initiating index object
    const index = new AnimationIndex();






