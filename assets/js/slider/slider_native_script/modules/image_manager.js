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
    get setBackgroundImageToTheDiv(){
        

        let el = document.getElementsByClassName('slideshow_bg_img');

        for(let i = 0; i < el.length; i++){

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

            el[i].classList.add('slideshow_bg_img');

        }

        return true;

        // Geting html div element
       // let divEl = document.getElementById(divId);

        // Getting image full path
        //let imgPath = this.imageFullPath(imageName);

        // Setting background image to the div element
        //divEl.style.backgroundImage = "url('"+imgPath+"')";
        
        // If everithing gose well returning true
        //return true;
    }


    // Getting image's full path
    imageFullPath(imgNames){

        let dom = window.location.href;
        let folderUrl = `assets/js/slider/slider_images/${(this.screenResolution != "iPro" ? this.screenResolution : "lg")}/`;
        let imgName = imgNames;
        let imgFullUrl = dom + folderUrl + imgName;

        return imgFullUrl;

    }

    // Getting device screen size
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


    // Get image natural deminsion
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

            // Saving data in the browser 
           sessionStorage.setItem("imageNaturalWidth", image.naturalWidth);

        };

        return true;
    }

    
}