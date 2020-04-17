import {Config} from '../config.js';

const imgText = new Config();

export class AnimationTexts{
    
    constructor(){

        this.imageText = function(img, desc){
            return imgText.imageTexts[img][desc];
        }
        
        this.animateText = null;

        this.insertImageTextsInDiv("text-f", "author-f", 0);
        this.imageTextAnimation("text-f");
    }


    insertImageTextsInDiv(textID, authorID, imgOrder){
        
        let text = document.getElementById(textID);
        let author = document.getElementById(authorID);

        text.innerHTML = `${this.imageText(imgOrder, 0)}`;
        author.innerHTML = `${this.imageText(imgOrder, 1)}`;
    }


    imageTextAnimation(id){

        let left = -150;

        this.animateText = setInterval(() => {
            
            if(left.toFixed(0) >= 300){
                clearInterval(this.animateText);
                left = -150;
            } else if(left.toFixed(0) <= 0){
                left += 0.7;
            }else if(left.toFixed(0) >= 13){
                left += 0.9;
            }else{
                left += 0.01;
            }
           
            document.getElementById(id).style.transform = `translate(${left}%)`;

        });

    }
}