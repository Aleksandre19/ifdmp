import {DianaSliderMessageBox} from './dianaSlider_message.js';
import {Config} from '../dianaSlider_config.js';

const _loadImages = new WeakMap();
const config = new Config();

export class Images{
    
    constructor(){

        // Loading images in the dianaSlider's div element
    
    }

    get loadingImages(){
        let dom = window.location.href;
        let folderUrl = 'assets/js/slider/slider_images/lg/';
        let imgName = config.imgName[1];
        document.getElementById("dianaSlider").style.backgroundImage = "url('"+dom+folderUrl+imgName+"')";
       
       // console.log(d);
    }

    

   
    
}