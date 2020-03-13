const _imageNames = new WeakMap();

export class Config{
    constructor(){
        _imageNames.set(this,[
            // Write image names here
            'family-lg.jpg',
            'food-lg.jpg',
            'yoga-lg.jpg'

        ])
    }

    get imgName(){
        return _imageNames.get(this);
    }
}