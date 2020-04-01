import {Config} from '../config.js';

const imgConfig = new Config();


export class ImageManager{
    constructor(){
        
        // Getting image name
        this.imgName = function(i){
            return imgConfig.imgName[i];
        }
    }

    setBackgroundImageToTheDiv(imageName, divId){
        
        // Geting html div element
        let divEl = document.getElementById(divId);

        // Getting image full path
        let imgPath = this.imageFullPath(imageName);

        // Setting background image to the div element
        divEl.style.backgroundImage = "url('"+imgPath+"')";
        
    }


    // Getting image's full path
    imageFullPath(imgNames){

        let dom = window.location.href;
        let folderUrl = 'assets/js/slider/slider_images/lg/';
        let imgName = imgNames;
        let imgFullUrl = dom + folderUrl + imgName;

        return imgFullUrl;

    }
}