/**
 * Declearing private variables
 */
const _imageNames = new WeakMap();
const _imageText = new WeakMap();

/**
 * This class keeps image's names and slider's texts,
 * and gets image's name and slider's text
 */
export class Config{
    constructor(){
        _imageNames.set(this,[
            // Write image names here
            'family.jpg',
            'food.jpg',
            'yoga.jpg'

        ]);

        _imageText.set(this, [
            
            [// First image's text
                "What you eat is what you will look!",
                "- Diana Voronina - Akhvlediani" 
            ],
            [
                "A happy family is but an earlier heaven",
                "–George Bernard Shaw"
            ],
            [
                "Paradise is not a place, it’s a state of consciousness",
                "–Sri Chinmoy"
            ]
        ]);
    }

    /**
     * This function returns image's name
     */
    get imgName(){
        return _imageNames.get(this);
    }

    /**
     * This function returns slider's text
     */
    get imageTexts(){
        return _imageText.get(this);
    }
}