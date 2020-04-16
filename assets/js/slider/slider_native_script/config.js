const _imageNames = new WeakMap();

export class Config{
    constructor(){
        _imageNames.set(this,[
            // Write image names here
            'family.jpg',
            'food.jpg',
            'yoga.jpg'

        ])
    }

    get imgName(){
        return _imageNames.get(this);
    }
}