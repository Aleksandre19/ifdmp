import {Config} from '../config.js';


const config = new Config();

const _imageLoadStatus = new WeakMap();
const _checkImagesQuantity = new WeakMap();

export class Images{
    
    constructor(){

        _imageLoadStatus.set(this, false);
        _checkImagesQuantity.set(this, false);

        // Setting background images to slider     

        if(_imageLoadStatus.get(this) === false){

            // Setting background image for top div element
            this.setBackgroundImage("second-bg",0);

            // Setting background image for bottom div element
            this.setBackgroundImage("dianaSlider",1);

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
     imgFullPath(imgNames){
        let dom = window.location.href;
        let folderUrl = 'assets/js/slider/slider_images/lg/';
        let imgName = imgNames;
        let imgFullUrl = dom + folderUrl + imgName;
        return imgFullUrl;
    }

    // Getting image name 
    getImageName(i){
        return config.imgName[i];
    }

    // Setting background image
    setBackgroundImage(id,i){
        document.getElementById(id).style.backgroundImage = "url('"+this.imgFullPath(this.getImageName(i))+"')";
    }
    
}