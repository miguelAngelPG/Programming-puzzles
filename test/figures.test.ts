import { drawSquare, drawRightTriangle, drawEquilateralTriangle, drawDiamond } from "../src/figures";

describe('Draw a Square', () => {
    it('should return a square with the given side length', () => {
        expect(drawSquare(5)).toBe('*****\n*****\n*****\n*****\n*****\n');
        expect(drawSquare(3)).toBe('***\n***\n***\n');
    });
    it('should return a message that the side length should be a positive number', () => {
        expect(drawSquare(-1)).toBe('The side length should be a positive number');
    });
});

describe('Draw a Right Triangle', () => {
    it('should return a right triangle with the given side length', () => {
        expect(drawRightTriangle(5)).toEqual('*\n**\n***\n****\n*****\n');
        expect(drawRightTriangle(3)).toBe('*\n**\n***\n');
        const lastRow = drawRightTriangle(4).split('\n')
        expect(lastRow.length).toBe(5);
    });
    it('should return a message that the side length should be a positive number', () => {
        expect(drawRightTriangle(-1)).toBe('The side length should be a positive number');
    });
});

describe('Draw a Equilateral Triangle', () => {
    it('should return a equilateral triangle with the given base length', () => {
        expect(drawEquilateralTriangle(5)).toBe('  *  \n *** \n*****\n');
        expect(drawEquilateralTriangle(3)).toBe(' * \n***\n');
    });
    it('should return a message that the base length should be a positive number', () => {
        expect(drawEquilateralTriangle(-1)).toBe('The base length should be a positive number');
    });
});

describe('Draw a Diamond', () => {
    it('should return a diamond with the given base length', () => {
        expect(drawDiamond(5)).toBe('  *  \n *** \n*****\n *** \n  *  \n');
        expect(drawDiamond(3)).toBe(' * \n***\n * \n');
    });
    it('should return a message that the base length should be a positive number', () => {
        expect(drawDiamond(-1)).toBe('The base length should be a positive number');
    });
})