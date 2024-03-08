const shapes = require('./shapes');
const Triangle = shapes.Triangle;
const Circle = shapes.Circle;
const Square = shapes.Square;

describe('Triangle', () => {
it('Should produce a green triangle with ABC in white', () => {
    const triangle = new Triangle('ABC', 'white', 'green');
    triangleParams = `
    <svg>
        <polygon points='150, 18 244, 182 56, 182' fill='green'/>
        <text x='150' y='115' text-anchor='middle' font-size='40' fill='white'>ABC</text>
    </svg>`
    expect(triangle.render()).toEqual(triangleParams);
})
});

describe('Circle', () => {
it('Should produce a red circle with DEF in blue', () => {
    const circle = new Circle('DEF', 'blue', 'red');
    circleParams = `
    <svg>
        <circle cx='100' cy='80' r='60' fill='red'/>
        <text x='100' y='95' text-anchor='middle' font-size='40' fill='blue'>DEF</text>
    </svg>`
    expect(circle.render()).toEqual(circleParams);
})
});

describe('Square', () => {
it('Should produce a purple square with GHI in black', () => {
    const square = new Square('GHI', 'black', 'purple');
    squareParams = `
    <svg>
        <rect x='50' y='50' width='100' height='100' fill='purple'/>
        <text x='100' y='115' text-anchor='middle' font-size='40' fill='black'>GHI</text>
    </svg>`
    expect(square.render()).toEqual(squareParams);
})
});