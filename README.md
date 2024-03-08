# Logo Generator

## Description
A command line application that generates simple logos as SVG files based on user prompts. Users can choose a circle, square, or triangle logo, with up to three letters in the center of the shape, and the colors of the text and the shape. The application saves the generated logo to the examples folder, where the user can copy it and use it for any use. In development of this application, I've learned a lot about objects and classes, and how inheritance works between parent and child objects. It has also served as good practice implementing parameters properly, as well as writing tests and running them with Jest.

## Installation
The application requires node to use. Before the program can be used, the user must run npm install to install the necessary packages (inquirer, jest, etc.).

## Usage
Once the dependencies are installed using npm install, the application can be used by opening a terminal navigated to the logo-generator folder, and running node index.js. This will open a series of prompts asking the user for up to three letters, the color of the text, the shape (circle, square, or triangle), and the color of the shape. For the color prompts, the application will accept keywords like blue, white, etc. or hexcodes. Once the prompts have been answered, a new logo will be generated, called logo.svg, in the examples folder. If the program is run a second time, the previous logo will be overwritten by the new one.

[Tutorial Video](./tutorial)

## Tests
The application can be tested by running npm test. It will conduct three tests, one for each shape to test if it will properly generate a logo given certain parameters. The tests are located in shapes.test.js.

## Credits
Inquirer package: https://www.npmjs.com/package/inquirer

Inquirer max-length-prompt package: https://www.npmjs.com/package/inquirer-maxlength-input-prompt

Jest package: https://www.npmjs.com/package/jest

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://opensource.org/licenses/MIT