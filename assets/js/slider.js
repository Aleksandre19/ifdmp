function dianaSlider(){
    
    if(dianaSliderPreSettingCheck()){

    }else{
        dianaSliderAlertBox("Please set a dianaSlider id to div html element.");
    }

}


function dianaSliderAlertBox(msg){

        var testEl = document.createElement("div");
        testEl.textContent = String(msg);
        testEl.className = "dianaSlider_alert";
        return document.body.insertBefore(testEl, document.body.firstChild);

}

function dianaSliderPreSettingCheck(){

    var checkId = document.getElementById("dianaSlider");

    if(checkId){

        return true;

    }else{

        return false;                
    }

}

dianaSlider();