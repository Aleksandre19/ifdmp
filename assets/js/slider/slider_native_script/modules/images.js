import {Config} from '../config.js';

const config = new Config();

const _imageLoadStatus = new WeakMap();
const _checkImagesQuantity = new WeakMap();

export class Images{
    
    constructor(){

        _imageLoadStatus.set(this, false);
        _checkImagesQuantity.set(this, false);

        let dom = window.location.href;
        let folderUrl = 'assets/js/slider/slider_images/lg/';
        let imgName = config.imgName[1];


        // Setting first image background to slider     

        if(_imageLoadStatus.get(this) === false){

             document.getElementById("dianaSlider").style.backgroundImage = "url('"+dom+folderUrl+imgName+"')";
            _imageLoadStatus.set(this, true);

        }else{
            _imageLoadStatus.set(this, false);
        }

         // Checking if quantity of images are more than one
        
        if(config.imgName.length > 1)
            _checkImagesQuantity.set(this, true);
    
    }

    get firstImageLoadStatus(){
        return _imageLoadStatus.get(this);
    }

    get imagesQuantityStatus(){
        return _checkImagesQuantity.get(this);
    }
}