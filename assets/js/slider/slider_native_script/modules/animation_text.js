import {Config} from '../config.js';

const imgText = new Config();

export class AnimationTexts{
    
    constructor(){

        this.imageText = function(img, desc){
            return imgText.imageTexts[img][desc];
        }
        
        this.animateText = null;
        this.textAuthor = null;

        this.insertImageTextsInDiv("text-f", "author-f", 0);
        this.imageTextAnimation("text-f");
        this.textAuthorAnimation("author-f");
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



    textAuthorAnimation(id){
        
        let right = 130;

        this.textAuthor = setInterval(() => {

            if(right.toFixed(0) <= -70){
                clearInterval(this.textAuthor);
                right = 130;
            } else if(right.toFixed(0) <= 60){
                right -= 0.8;
            }else if(right.toFixed(0) <= 70){
                right -= 0.007;
            }else {
                 right -= 0.5;
            }

            document.getElementById(id).style.transform = `translateX(${right}%)`;

        });

    }



}