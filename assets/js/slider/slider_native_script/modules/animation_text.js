import {Config} from '../config.js';
import {ImageManager} from './image_manager.js';

const imgText = new Config();
const imgMan = new ImageManager();

export class AnimationTexts{
    
    constructor(){

        this.imageText = function(img, desc){
            return imgText.imageTexts[img][desc];
        }
        
        this.startAnimateText = null;
        this.finishAnimateText = null;
        this.textAuthor = null;

        this.left = -150; // For animations text
        this.right = 130; // For author
        
        
    }



    // Setting texts to div
    insertImageTextsInDiv(textID, authorID, imgOrder){
        
        let text = document.getElementById(textID);
        let author = document.getElementById(authorID);

        text.innerHTML = '';
        author.innerHTML = ''; 
        
        text.innerHTML = `${this.imageText(imgOrder, 0)}`;
        author.innerHTML = `${this.imageText(imgOrder, 1)}`;
    }




  
    // starting animating of text
    get startImageTextAnimation(){

        this.startAnimateText = setInterval(() => {

            // Checking for text
            if(this.left.toFixed(0) >= 0){   
                 this.left += 0.01; 
            }else{
                this.left += 2;
            }

            // Checking for author
            if(this.right <= (imgMan.screenResolution === "sm" ? 25 : 70 || imgMan.screenResolution === "md" ? 25 : 70) ){
                this.right -= 0.01;
            }else{
                this.right -= 0.9;
            }

            // Moving text
            document.getElementById("text-f").style.transform = `translateX(${this.left}%)`;
            // Moving author
            document.getElementById("author-f").style.transform = `translateX(${this.right}%)`;

        });

    }



    // Finishing animating of texts
    get finishImageTextAnimation(){
        
        this.finishAnimateText = setInterval(() => {

            if(this.left.toFixed(0) >= 300){
                 
                 clearInterval(this.finishAnimateText);
                 clearInterval(this.startAnimateText);     
                    
                 this.left = -150; // Text
                 this.right = 130; // Author

            }else{

                this.left += 2; // Text
                this.right -= 2; // Author
            } 

        });

    }



}