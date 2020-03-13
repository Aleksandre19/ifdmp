import {DianaSliderMessageBox} from './dianaSlider_message.js';
import {Config} from '../dianaSlider_config.js';

const config = new Config();

const _imageLoadStatus = new WeakMap();

export class Images{
    
    constructor(){

        _imageLoadStatus.set(this, false);

        let dom = window.location.href;
        let folderUrl = 'assets/js/slider/slider_images/lg/';
        let imgName = config.imgName[1];

        if(_imageLoadStatus.get(this) === false){

             document.getElementById("dianaSlider").style.backgroundImage = "url('"+dom+folderUrl+imgName+"')";
            _imageLoadStatus.set(this, true);

        }else{
            _imageLoadStatus.set(this, false);
        }    
    
    }

    get firstImageLoadStatus(){
        return _imageLoadStatus.get(this);
    }

}