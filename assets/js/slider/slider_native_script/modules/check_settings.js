import {DianaSliderMessageBox} from './message.js'; // Imprting MessageBox class for messages.js
import {Images} from './images.js'; // Importing Images class from images.js
import {Config} from '../config.js';

// Defining private variables
const _checkElement = new WeakMap();
const _checkStatus = new WeakMap();

const dianaMsg = new DianaSliderMessageBox(); // initialising message object 
const img = new Images(); // Initialising Images class
const config = new Config();

// Creating checking class
export class CheckSettings{

    constructor(){
        
        // Getting dianaSlider's div element
        const dianaEl = document.getElementById("dianaSlider");
        
       
        // Defining private variables and setting values
        _checkElement.set(this, dianaEl);
        _checkStatus.set(this, false); 

        // Checking if element is div html element, if it has #dianaSlider
        if(!_checkElement.get(this))

            dianaMsg.getMessage("Please set a #dianaSlider id to the div element.");

        else if(_checkElement.get(this).tagName != "DIV")

            dianaMsg.getMessage("dianaSlider's wrapper must be a div html element");
        else if(config.imgName.length === 0)

            dianaMsg.getMessage("Please set image's names in config.js");

        else if(img.firstImageLoadStatus === false)

            dianaMsg.getMessage("Please set background images to dianaSlider's div element");

        else if(!img.imagesQuantityStatus) 
        
            dianaMsg.getMessage("dianaSlider needs more than one image to function");
            
        else
            // if all reauired settigns are ok then setting true value   
             _checkStatus.set(this, true);   
    }

    // Defining geter for checking of setting's status
    get settingsStatus(){
        return _checkStatus.get(this);
    }
   
}