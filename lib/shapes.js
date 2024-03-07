
class Shape {
    constructor(letters, textcolor, shapecolor) {
        this.letters = letters;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
};

class Triangle extends Shape {
    render() {

    }

};

class Square extends Shape {
    render() {
        
    }
};

class Circle extends Shape {
    render() {
        
    }
};



module.exports = {Shape, Triangle, Square, Circle};