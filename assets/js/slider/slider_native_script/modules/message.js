/**
 * This class creates error's massage box
 */
export class DianaSliderMessageBox{

    getMessage(msg){

        let messageBox = document.createElement("div");// Creating html element
        messageBox.textContent = String(msg); // Setting content
        messageBox.className = "dianaSlider_alert"; // Setting css class attribute

        //Inserting the message box as a first html body's element and returning value
        return document.body.insertBefore(messageBox, document.body.firstChild);
             
    }
}