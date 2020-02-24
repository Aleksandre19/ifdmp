
/* Step 2 - Creating dianaSlider function */
function dianaSlider(){

    /*  Checking if a dianaSlider id has been set to html div elemnt */
    let checkId = document.getElementById("dianaSlider");
    if(dianaSliderPreSettingCheck(checkId)){

        /* Checking if slider's wrapper is html div element */ 
        let checkDiv = document.getElementById("dianaSlider");
        if(checkDiv.tagName == "DIV"){

           // https://stackoverflow.com/questions/47979405/how-to-check-if-folder-is-empty
           // https://www.w3schools.com/nodejs/ref_fs.asp

        }else{
            dianaSliderAlertBox("Slider's wrapper must html div element.");
        }
        
    }else{
        /*  If dianaSlider id has not been set then alerting message */
        dianaSliderAlertBox("Please set a dianaSlider id to div element.");
    }

}


/* Step 3 - Checking if dianaSlider class exists and html element id div */
function dianaSliderPreSettingCheck(check){

    let getCheck = check;

    if(getCheck){
        return true;
    }else{
        return false;                
    }

}


/* Step 4 - Creating dianaSlider alert box function */
function dianaSliderAlertBox(msg){

        let testEl = document.createElement("div");
        testEl.textContent = String(msg);
        testEl.className = "dianaSlider_alert";

        return document.body.insertBefore(testEl, document.body.firstChild);

}


/* Step 1 - Initialising dianaSlider function */
dianaSlider();