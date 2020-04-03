

// Defining private variables by using WeakMap()

const _imageStartingNaturLWidth = new WeakMap();
const _functionHasCalled = new WeakMap();

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
            _functionHasCalled.set(this, true);

            
            setInterval(() => {

                let scaledUpWidth = natW++;

                document.getElementById(elDivId).style.backgroundSize = `${scaledUpWidth}px`;

                // When image's dimention is increased by 7% going on next step
                if(Math.round(this.calculateImageIncrisedDimension(scaledUpWidth)) === 7 && _functionHasCalled.get(this)){
           
                    console.log("Has increased")

                    _functionHasCalled.set(this, false);
                }
               
           },15);
    }

    calculateImageIncrisedDimension(sUpWidth){
        return (sUpWidth - _imageStartingNaturLWidth.get(this)) / _imageStartingNaturLWidth.get(this) * 100;
    }

}