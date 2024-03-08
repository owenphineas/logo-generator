const fs = require('fs');
class Shape {
    constructor(letters, textcolor, shapecolor) {
        this.letters = letters;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
};

class Triangle extends Shape {
    shapeParams = `
    <svg>
        <polygon points='150, 18 244, 182 56, 182' fill='${this.shapecolor}'/>
        <text x='150' y='115' text-anchor='middle' font-size='40' fill='${this.textcolor}'>${this.letters}</text>
    </svg>`;
    render() {
        fs.writeFile(`./examples/logo.svg`, this.shapeParams, function(err) {
            err
            ? console.error(err)
            : console.log(`Generated logo.svg`)
        })
        return this.shapeParams;
    } 

};

class Square extends Shape {
    shapeParams = `
    <svg>
        <rect x='50' y='50' width='100' height='100' fill='${this.shapecolor}'/>
        <text x='100' y='115' text-anchor='middle' font-size='40' fill='${this.textcolor}'>${this.letters}</text>
    </svg>`;
    render() {
        fs.writeFile(`./examples/logo.svg`, this.shapeParams, function(err) {
            err
            ? console.error(err)
            : console.log(`Generated logo.svg`)
        })
        return this.shapeParams;
    }
};

class Circle extends Shape {
    shapeParams = `
    <svg>
        <circle cx='100' cy='80' r='60' fill='${this.shapecolor}'/>
        <text x='100' y='95' text-anchor='middle' font-size='40' fill='${this.textcolor}'>${this.letters}</text>
    </svg>`;
    render() {
        fs.writeFile(`./examples/logo.svg`, this.shapeParams, function(err) {
            err
            ? console.error(err)
            : console.log(`Generated logo.svg`)
        })
        return this.shapeParams
    }
};



module.exports = {Shape, Triangle, Square, Circle};