const _imageNames = new WeakMap();
const _imageText = new WeakMap();

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

    get imgName(){
        return _imageNames.get(this);
    }

    get imageTexts(){
        return _imageText.get(this);
    }
}