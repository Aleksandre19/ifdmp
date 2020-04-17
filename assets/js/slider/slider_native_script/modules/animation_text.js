import {Config} from '../config.js';

const imgText = new Config();

export class AnimationTexts{
    constructor(){
        this.imageText = function(img, desc){
            return imgText.imageTexts[img][desc];
        }
        
        console.log(this.imageText(0,0));

        this.insertImageTextsInDiv("text-f", "author-f", 0);
    }


    insertImageTextsInDiv(textID, authorID, imgOrder){
        
        let text = document.getElementById(textID);
        let author = document.getElementById(authorID);

        text.innerHTML = `${this.imageText(imgOrder, 0)}`;
        author.innerHTML = `${this.imageText(imgOrder, 1)}`;
    }
}