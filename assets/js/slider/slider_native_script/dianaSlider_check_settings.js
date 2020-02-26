import {DianaSliderMessageBox} from './dianaSlider_message.js'; // Imprting class for messages

// Defining private variables
const _checkElement = new WeakMap();
const _checkStatus = new WeakMap();
const _checkBackgroundImages = new WeakMap();
const dianaMsg = new DianaSliderMessageBox(); // initialising message object 

// Creating checking class
export class CheckSettings{

    constructor(){
        
        // Getting dianaSlider's div element
        const dianaEl = document.getElementById("dianaSlider");

        _checkBackgroundImages.set(this, Number(dianaEl.style.backgroundImage.length));
        console.log(_checkBackgroundImages.get(this));

        // Defining private variables and setting values
        _checkElement.set(this, dianaEl);
        _checkStatus.set(this, false); 

        // Checking if element is div html element, if it has #dianaSlider
        if(!_checkElement.get(this))
            dianaMsg.getMessage("Please set a #dianaSlider id to the div element.");

        else if(_checkElement.get(this).tagName != "DIV")
            dianaMsg.getMessage("dianaSlider's wrapper must be a div html element");
        else if(_checkBackgroundImages.get(this) === 0)
            dianaMsg.getMessage("Please set background images to dianaSlider's div element");
        else
            // if all reauired settigns are ok then setting true value   
             _checkStatus.set(this, true);   
    }

    // Defining geter for checking of setting's status
    get settingsStatus(){
        return _checkStatus.get(this);
    }
   
}