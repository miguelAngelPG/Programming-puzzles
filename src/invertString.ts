/*
    *Puzzle 1
    Inver words: Write a function that takes a string as input and returns it with the words inverted.
        -If the string is empty return a message stating that empty strings are not allowed
        
            -The words should be inverted, not the whole string
    
    Puzzle 2
    Inver string: Write a function that takes a string as input and returns it inverted.
        -If the string is empty return a message stating that empty strings are not allowed

    Puzzle 3
    Inver just vowels: Write a function that takes a string as input and returns it with the vowels inverted.
        -If the string is empty return a message stating that empty strings are not allowed
        -If the string has no vowels return a message stating that no vowels were found
        -If the string has less than 2 vowels return a message stating that the string should have at least 2 vowels

            -The vowels should be inverted, not the whole string
            -The vowels are a, e, i, o, u
            -The vowels are case insensitive
            -The vowels should be inverted in the order they appear in the string
            -The rest of the characters should remain in the same position
            -The string will have at least 2 vowels

        Example: ¿Hola como estas? -> ¿Hale como astos?

    Puzzle 4
    Inver just consonants: Write a function that takes a string as input and returns it with the consonants inverted.
        -If the string is empty return a message stating that empty strings are not allowed
        -If the string has no consonants return a message stating that no consonants were found
        -If the string has less than 2 consonants return a message stating that the string should have at least 2 consonants

            -The consonants should be inverted, not the whole string
            -The consonants are case insensitive
            -The consonants should be inverted in the order they appear in the string
            -The rest of the characters should remain in the same position
            -The string will have at least 2 consonants
            -Use loops to solve the problem

        Example: ¿Hola como estas? -> ¿sotsa omoc elah?

    Puzzle 5
    Find a palindrome word: Write a function that takes a string as input and returns the first palindrome word found.
        ?palindrome is a word or phrase that reads the same in one direction as in the other.

        -If the string is empty return a message stating that empty strings are not allowed
        -If the string has no palindrome words return a message stating that no palindrome words were found

    Puzzle 6
    Invert words in parentheses: Write a function that takes a string as input and returns it with the words inside parentheses inverted.
        -If the string is empty return a message stating that empty strings are not allowed
        -If the string has no parentheses return a message stating that no parentheses were found
        -The words should be inverted, not the whole string
        -The words should be inverted in the order they appear in the string
        -The rest of the characters should remain in the same position
        -The string will have at least 1 pair of parentheses
        -The string will have at least 1 word inside the parentheses

        Example: ¿Hola (como) (estas)? -> ¿Hola omoc satse?

    Puzzle 7
    Invert words in parentheses with gerarchy: Write a function that takes a string as input and returns it with the words inside parentheses inverted.
        -If the string is empty return a message stating that empty strings are not allowed
        -If the string has no parentheses return a message stating that no parentheses were found
        -The words should be inverted, not the whole string
        -The words should be inverted in mathematical order, parentheses inside parentheses
        -The rest of the characters should remain in the same position
        -The string will have at least 1 pair of parentheses
        -The string will have at least 1 word inside the parentheses
        -The string will have at least 2 levels of parentheses

        Example: ¿Hola (como (estas))? -> ¿Hola (como satse)? -> ¿Hola estas omoc?
*/

import { isConsonant } from "./helper";

// Puzzle 1
export function invertWords(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    return str.split(' ').reverse().join(' ');
}

// Puzzle 2
export function invertString(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    return str.split('').reverse().join('');
}

// Puzzle 3
export function invertVowels(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    const vowels = str.match(/[aeiou]/gi);
    if (!vowels) return 'No vowels were found';
    if (vowels.length < 2) return 'The string should have at least 2 vowels';
    let i = 0;
    return str.replace(/[aeiou]/gi, () => vowels[vowels.length - ++i]);
}

// Puzzle 4
export function invertConsonants(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    const consonants: string[] = [];
    for (const char of str) {
        if (isConsonant(char)) {
            consonants.push(char);
        }
    }
    if (consonants.length < 2 && str.length > 2) return 'The string should have at least 2 consonants';
    if (consonants.length === 0) return 'No consonants were found';
    consonants.reverse();
    let result = '';
    let consonantIndex = 0;
    for (const char of str) {
        if (isConsonant(char)) {
            result += consonants[consonantIndex];
            consonantIndex++;
        } else {
            result += char;
        }
    }
    return result;
}

// Puzzle 5
export function findPalindromeWord(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    const words = str.toLowerCase().split(' ');
    for (const word of words) {
        if (word === word.split('').reverse().join('')) return word;
    }
    return 'No palindrome words were found';
}

// Puzzle 6
export function invertWordsInParentheses(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    const words = str.match(/\(([^)]+)\)/g);
    if (!words) return 'No parentheses were found';
    for (const word of words) {
        str = str.replace(word, invertString(word.slice(1, -1)));
    }
    return str;
}

// Puzzle 7
