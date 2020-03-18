import {CheckSettings} from './check_settings.js';
import {Config} from '../config.js';

const settings = new CheckSettings();
const conf = new Config();


export class Animate{

    constructor(){

        // Checking if all reuqried setting are ok
        if(settings.settingsStatus){
            
            // Creating image's full path    
            let dom = window.location.href;
            let folderUrl = 'assets/js/slider/slider_images/lg/';
            let imgName = conf.imgName[1];
            let imgFullUrl = dom + folderUrl + imgName;

            // Getting image's current width and height
            let dimension, image;
            image = new Image();
            image.src = imgFullUrl;
            image.onload = function() {
                dimension = {
                    width: image.naturalWidth,
                    height: image.naturalHeight
                };
                console.log(dimension);
            }; 
            
            

        }

        
    }

    getImagesLengths(w, h){
        let ww = w;
        let hh = h;
        console.log(ww);
    }
       

}