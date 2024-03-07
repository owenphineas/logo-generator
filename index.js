const inquirer = require('inquirer');
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const shapeClass = require('./lib/shapes');
// import shapes from './lib/shapes';
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
inquirer.registerPrompt('maxlengthinput', maxLengthInputPrompt);
inquirer
.prompt([
    {
        type: 'maxlengthinput',
        name: 'letters',
        message: 'Enter abbreviation (max 3 characters):',
        maxLength: '3'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Choose text color (keyword or hex code):'
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Choose shape color (keyword or hex code):'
    }
])
.then(function(data) {
    console.log(data);
    if(data.shapes === 'Circle') {
        const shape = new shapeClass.Circle(data.letters, data.textcolor, data.shapecolor);
    } else if(data.shapes === 'Triangle') {
        const shape = new shapeClass.Triangle(data.letters, data.textcolor, data.shapecolor);
    } else if(data.shapes === 'Square') {
        const shape = new shapeClass.Square(data.letters, data.textcolor, data.shapecolor);
    }
});