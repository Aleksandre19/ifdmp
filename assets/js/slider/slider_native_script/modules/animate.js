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
            // This part of the code i found and copyed from here:
            // https://stackoverflow.com/questions/3098404/get-the-size-of-a-css-background-image-using-javascript
            let dimension = {
                width: 0,
                height: 0
            }

            let image;
            image = new Image();
            image.src = imgFullUrl;
            

            // On load getting width and height of image
            image.onload = function() {

                dimension = {
                    width: image.naturalWidth,
                    height: image.naturalHeight
                };
               
              
                // Starting animation
                    setInterval(function(){

                        let scaledUpWidth = dimension.width++;
                        let scaleUpHight = dimension.height++;

                        document.getElementById("dianaSlider").style.backgroundSize = `${scaledUpWidth}px ${scaleUpHight}px`;
                        
                    },15);



                
               
            };
            
           
        

        }

        
    }

    

    getImagesLengths(w, h){
        let ww = w;
        let hh = h;
        console.log(ww);
    }
       

}