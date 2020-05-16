/**
 * Importing modules
 */
import {Config} from '../config';
import {ImageManager} from './image_manager';

/**
 * Initiating Objects
 */
const imgText = new Config();
const imgMan = new ImageManager();


/**
 * This class gets texts,
 * Adds texts to sliders,
 * Starts text animation
 * and stops text animation
 */
export class AnimationTexts{
    
    constructor(){

        // Gets texts
        this.imageText = function(img, desc){
            return imgText.imageTexts[img][desc];
        }
        
        this.startAnimateText = null;
        this.finishAnimateText = null;
        this.textAuthor = null;

        this.left = -150; // For animations text
        this.right = 130; // For author
        
        
    }



     /**
      * Thiis function manages text animation:
      * It sets text to sliders,
      * and calls starting and finishing function on appropriate stage
      * @param  {Three types of value: 'start' , 'finish', and image's order number} val 
      */
    textAnimation(...val){
        
        for(let i = 0; i < val.length; i++){

            if(!isNaN(val[i])){

                let text = document.getElementById('text-f');
                let author = document.getElementById('author-f');

                text.innerHTML = '';
                author.innerHTML = ''; 
                
                text.innerHTML = `${this.imageText(val[i], 0)}`;
                author.innerHTML = `${this.imageText(val[i], 1)}`;

            }else if(val[i] === 'start'){

                this.startImageTextAnimation;

            }else if(val[i] === 'finish'){

                this.finishImageTextAnimation;

            }else{
                return false;
            }

        }

    }




  
    /**
     * This function starts text animation
     */
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



    /**
     * This function stops text animation
     */
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