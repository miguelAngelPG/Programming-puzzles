/*
    *Puzzle 1:
        Draw a square with the given side length.
            -The side length should be a positive number.
            -Withouth using the repeat method.

            Example:
                `
                    *****
                    *****
                    *****
                `

    *Puzzle 2:
        Draw a right triangle with the given side length.
            -The side length should be a positive number.
            -Withouth using the repeat method.

            Example:
                `
                    *
                    **
                    ***
                    ****
                `

    *Puzzle 3:
        Draw a equilateral triangle with the given base length.
            -The base length should be a positive number.
            -The number base should be the same length of asterisks in the last row.
            -Withouth using the repeat method.

            Example: drawEquilateralTriangle(5)
                `
                    --*--
                    -***-
                    *****
                `
    
    *Puzzle 4:
        Draw a diamond with the given base length.
            -The base length should be a positive number.
            -The number base should be the same length of asterisks in the last row.
            -Withouth using the repeat method.

            Example: drawDiamond(5)
                `
                    --*--
                    -***-
                    *****
                    -***-
                    --*--
                `

    *Puzzle 5:
        Draw a x with the given side length.
            -The side length should be a positive number.
            -Withouth using the repeat method.

            Example: drawX(5)
                `
                    *   *
                     * *
                      *
                     * *
                    *   *
                `

*/

// Puzzle 1
export function drawSquare(side: number): string {
    if (side <= 0) return 'The side length should be a positive number';
    let result = '';
    for (let i = 0; i < side; i++) {
        for (let j = 0; j < side; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}

// Puzzle 2
export function drawRightTriangle(side: number): string {
    if (side <= 0) return 'The side length should be a positive number';
    let result = '';
    for (let i = 0; i < side; i++) {
        for (let j = 0; j <= i; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}

// Puzzle 3
export function drawEquilateralTriangle(base: number): string {
    if (base <= 0) return 'The base length should be a positive number';
    let result = '';

    let side = 0
    while (base > 1) {
        base -= 2
        side++
    }

    for (let i = 0; i < side + 1; i++) {
        for (let j = 0; j < side - i; j++) {
            result += ' ';
        }
        for (let j = 0; j < (i * 2) + 1; j++) {
            result += '*';
        }
        for (let j = 0; j < side - i; j++) {
            result += ' ';
        }
        result += '\n';
    }
    return result;
}

// Puzzle 4
export function drawDiamond(base: number): string {
    if (base <= 0) return 'The base length should be a positive number';
    let result = '';

    let side = 0
    while (base > 1) {
        base -= 2
        side++
    }

    for (let i = 0; i < side + 1; i++) {
        for (let j = 0; j < side - i; j++) {
            result += ' ';
        }
        for (let j = 0; j < (i * 2) + 1; j++) {
            result += '*';
        }
        for (let j = 0; j < side - i; j++) {
            result += ' ';
        }
        result += '\n';
    }

    for (let i = side - 1; i >= 0; i--) {
        for (let j = 0; j < side - i; j++) {
            result += ' ';
        }
        for (let j = 0; j < (i * 2) + 1; j++) {
            result += '*';
        }
        for (let j = 0; j < side - i; j++) {
            result += ' ';
        }
        result += '\n';
    }
    return result;
}