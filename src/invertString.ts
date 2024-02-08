/*
    Inver words: Write a function that takes a string as input and returns it with the words inverted.
        -If the string is empty return a message stating that empty strings are not allowed
        
            -The words should be inverted, not the whole string
    
    Invert a string: Write a function that takes a string as input and returns it inverted.
        -If the string is empty return a message stating that empty strings are not allowed 

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

    Find a palindrome word: Write a function that takes a string as input and returns the first palindrome word found.
        ?palindrome is a word or phrase that reads the same in one direction as in the other.

        -If the string is empty return a message stating that empty strings are not allowed
        -If the string has no palindrome words return a message stating that no palindrome words were found

*/

import { isConsonant } from "./helper";

export function invertWords(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    return str.split(' ').reverse().join(' ');
}

export function invertString(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    return str.split('').reverse().join('');
}

export function invertVowels(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    const vowels = str.match(/[aeiou]/gi);
    if (!vowels) return 'No vowels were found';
    if (vowels.length < 2) return 'The string should have at least 2 vowels';
    let i = 0;
    return str.replace(/[aeiou]/gi, () => vowels[vowels.length - ++i]);
}

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

export function findPalindromeWord(str: string): string {
    if (str === '') return 'Empty strings are not allowed';
    const words = str.toLowerCase().split(' ');
    for (const word of words) {
        if (word === word.split('').reverse().join('')) return word;
    }
    return 'No palindrome words were found';
}
