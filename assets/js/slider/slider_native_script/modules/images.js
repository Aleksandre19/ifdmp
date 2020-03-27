import {Config} from '../config.js';


const config = new Config();

const _imageLoadStatus = new WeakMap();
const _checkImagesQuantity = new WeakMap();

export class Images{
    
    constructor(){

        _imageLoadStatus.set(this, false);
        _checkImagesQuantity.set(this, false);

        // Setting first image background to slider     

        if(_imageLoadStatus.get(this) === false){

            Images.setBackgroundImage(1);

            // Setting load status to true
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

    // Getting image absolute path    
    static imgFullPath(imgNames){
        let dom = window.location.href;
        let folderUrl = 'assets/js/slider/slider_images/lg/';
        let imgName = imgNames;
        let imgFullUrl = dom + folderUrl + imgName;
        return imgFullUrl;
    }

    // Getting image name 
    static getImageName(i){
        return config.imgName[i];
    }

    // Setting background image

    static setBackgroundImage(i){
        document.getElementById("dianaSlider").style.backgroundImage = "url('"+Images.imgFullPath(Images.getImageName(i))+"')";
    }
    
}