/*
    Fibonacci: Write a function that takes a number as input and returns the n-ésimo number fibonacci sequense .
        -If the number is less than 0 return a message stating that negative numbers are not allowed
        -If the number is 0, 1, 100 return a message stating that n is not allowed
        -If the input is 100 return a message stating that 100 is not allowed 
        -If the input is a float return a message stating that only integers are allowed
        -If the input is bigger than 100 return a message stating that the number should be less than 100

            -Use loops to solve the problem

*/

export function fibonacci(n: number): number {
    if (n < 0) return -1;
    if (n === 0 || n === 1 || n === 100) return -2;
    if (n === 100) return -3;
    if (n % 1 !== 0) return -5;
    if (n > 100) return -6;
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}