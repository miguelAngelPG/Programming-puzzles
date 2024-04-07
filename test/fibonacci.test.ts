import { fibonacci } from '../src/fibonacci';

describe('Fibonacci', () => {
    it('should return -1 if n is less than 0', () => {
        expect(fibonacci(-1)).toBe(-1);
    });
    it('should return -2 if n is 0, 1 or 100', () => {
        expect(fibonacci(0)).toBe(-2);
        expect(fibonacci(1)).toBe(-2);
        expect(fibonacci(100)).toBe(-2);
    });
    it('should return -5 if n is a float', () => {
        expect(fibonacci(1.5)).toBe(-5);
    });
    it('should return -6 if n is bigger than 100', () => {
        expect(fibonacci(101)).toBe(-6);
    });
    it('should return the n-ésimo number fibonacci sequense', () => {
        expect(fibonacci(5)).toBe(5);
        expect(fibonacci(10)).toBe(55);
        expect(fibonacci(20)).toBe(6765);
    });
});