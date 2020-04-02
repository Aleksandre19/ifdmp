

export class ImageAnimation{

    constructor(){

    }

    imageAnimation(imgAniDivId){
        
        let divEl = document.getElementById(imgAniDivId);

        let top = divEl.style.offsetTop;

        console.log(top);
    }

}