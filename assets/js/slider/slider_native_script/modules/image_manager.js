// Importing classes
import {Config} from '../config.js';

// Declaring Classes
const imgConfig = new Config();


// Defining private variable by using WeakMap()
const _imageNaturalWidth = new WeakMap();
const _imageStartingNaturLWidth = new WeakMap();
const _functionHasCalled = new WeakMap();

export class ImageManager{
    constructor(){
        this.anInSize = null;
        this.imgManDivId = '';
        
        // This variable is used to control setting background image with out calling animation
        this.justSetBgImage = false;

        // Getting image name
        this.imgName = function(i){
            return imgConfig.imgName[i];
        }
    }

    // Setting background image to the div element
    setBackgroundImageToTheDiv(imageName, divId){
        
        // Geting html div element
        let divEl = document.getElementById(divId);

        // Getting image full path
        let imgPath = this.imageFullPath(imageName);

        // Setting background image to the div element
        divEl.style.backgroundImage = "url('"+imgPath+"')";
        
        // If everithing gose well returning true
        return true;
    }


    // Getting image's full path
    imageFullPath(imgNames){

        let dom = window.location.href;
        let folderUrl = 'assets/js/slider/slider_images/lg/';
        let imgName = imgNames;
        let imgFullUrl = dom + folderUrl + imgName;

        return imgFullUrl;

    }


    // Get image natural deminsion
    getNaturalDimension(imgName, divId){

        // Getting image's current width and height
        // This part of the code i found and copyed from here:
        // https://stackoverflow.com/questions/3098404/get-the-size-of-a-css-background-image-using-javascript

        // Defining variables and Image Object(); 
        let iName  = imgName;
        let image;
        image = new Image();
         
        // Setting src to the current images 
        image.src = this.imageFullPath(iName);
            
        // On load getting width and height of image
        image.onload = function() {

            // Saving data in the browser 
           sessionStorage.setItem("imageNaturalWidth", image.naturalWidth);

        };

        return true;
    }


    
}