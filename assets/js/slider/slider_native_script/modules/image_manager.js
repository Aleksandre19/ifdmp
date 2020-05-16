/**
 * Importing Objects
 */
import {Config} from '../config';

// Initiating Objects
const imgConfig = new Config();


// Defining private variable by using WeakMap()
const _imageNaturalWidth = new WeakMap();
const _imageStartingNaturLWidth = new WeakMap();
const _functionHasCalled = new WeakMap();


/**
 * This class sets background images to the html div elements,
 * gets image name from config.js,
 * gets image's full path,
 * controls screen resolution
 * and gets image's natural demensions 
 */
export class ImageManager{

    constructor(){
        this.anInSize = null;
        this.imgManDivId = '';
        
        // This variable is used to control setting background image without calling animation
        this.justSetBgImage = false;

        // Getting image name
        this.imgName = function(i){
            return imgConfig.imgName[i];
        }
    }



    /**
     * This function sets background images 
     */
    get setBackgroundImageToTheDiv(){
        
        // Getting html div elements
        let el = document.getElementsByClassName('slideshow_bg_img');

        for(let i = 0; i < el.length; i++){

            // Irritating and settiing backgrount images to the appropriate divs
            if(el[i].id === 'dianaSlider-s'){

                let imgPath = this.imageFullPath(this.imgName(1));

                document.getElementById(el[i].id).style.backgroundImage = "url('"+imgPath+"')";

            }else if(el[i].id === 'dianaSlider-f'){

                let imgPath = this.imageFullPath(this.imgName(0));

                document.getElementById(el[i].id).style.backgroundImage = "url('"+imgPath+"')";

            }else if(el[i].id === 'lastImage'){

                let imgPath = this.imageFullPath(this.imgName(2));

                document.getElementById(el[i].id).style.backgroundImage = "url('"+imgPath+"')";

            }

            // Adding css style
            el[i].classList.add('slideshow_bg_img');

        }

        return true;

    }


    /**
     * This function gets images's full path
     * @param {image's name} imgNames 
     */
    imageFullPath(imgNames){

        let dom = window.location.href;
        let folderUrl = `assets/js/slider/slider_images/${(this.screenResolution != "iPro" ? this.screenResolution : "lg")}/`;
        let imgName = imgNames;
        let imgFullUrl = dom + folderUrl + imgName;

        return imgFullUrl;

    }



    /**
     * This function gets devices screen resolution
     */
    get screenResolution(){

        let screenW = window.screen.width;
        let screenH = window.screen.height;

        if(screenW < 576){// Small devices
            return "sm";
        }else if(screenW < 992){// Medium devices
            return "md";
        }else if(screenW === 1024 && screenH === 1366){// Ipad pro
            return "iPro";
        }else{
            return "lg";// Large devices
        }
    }


    /**
     * This function gets images natural demensions
     * @param {Image's name} imgName 
     */
    getNaturalDimension(imgName){

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

            sessionStorage.setItem("imageNaturalWidth", image.naturalWidth);

        };

        return true;
    }

    
}