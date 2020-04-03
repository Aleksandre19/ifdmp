

// Defining private variables by using WeakMap()

const _imageStartingNaturLWidth = new WeakMap();

export class ImageAnimation{

    constructor(){
        this.fade = null;
        this.imgManDivId = '';
    }


    imageAnimation(naturalWidth, imgAniDivId){
        
        this.animateImageInSize(naturalWidth, imgAniDivId);
    }



    animateImageInSize(elDivId , natW){
            
        
            // Saving image's starting width  
             _imageStartingNaturLWidth.set(this, natW);

           // Defining variable to check if function has been called   
            //_functionHasCalled.set(this, true);

            
            setInterval(() => {

                let scaledUpWidth = natW++;

                document.getElementById(elDivId).style.backgroundSize = `${scaledUpWidth}px`;
            
                // When image's dimention is increased by 7% going on next step
               
           },15);
    }

}