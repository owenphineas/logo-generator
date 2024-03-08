const fs = require('fs');

const inquirer = require('inquirer');
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlengthinput', maxLengthInputPrompt);

const shapeClass = require('./lib/shapes');

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
    // Runs the Shape constructor through the given shape class with the responses as params
    if(data.shapes === 'Circle') {
        const circle = new shapeClass.Circle(data.letters, data.textcolor, data.shapecolor);
        circle.render();
    } else if(data.shapes === 'Triangle') {
        const triangle = new shapeClass.Triangle(data.letters, data.textcolor, data.shapecolor);
        triangle.render();
    } else if(data.shapes === 'Square') {
        const square = new shapeClass.Square(data.letters, data.textcolor, data.shapecolor);
        square.render();
    }
});