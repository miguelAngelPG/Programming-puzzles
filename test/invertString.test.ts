import { invertString, invertWords, invertVowels, invertConsonants, findPalindromeWord } from '../src/invertString';

describe("Invert Words", () => {

    it("should return the words of the sentence inverted", () => {
        expect(invertWords("Espero que este mensaje le encuentre bien")).toBe("bien encuentre le mensaje este que Espero");
    })

    it("should return a message that is a string emty", () => {
        expect(invertWords("")).toBe("Empty strings are not allowed");
    })
    
})

describe("Invert a String", () => {

    it("should return the inverted string", () => {
        expect(invertString("hello")).toBe("olleh");
    })

    it("should return the inverted string", () => {
        expect(invertString("world")).toBe("dlrow");
    })

    it("should return a message that is a string emty", () => {
        expect(invertString("")).toBe("Empty strings are not allowed");
    })
    
})

describe("Invert Vowels", () => {

    it("should return the inverted vowels", () => {
        expect(invertVowels("hello")).toBe("holle");
    })

    it("should return the inverted vowels", () => {
        expect(invertVowels("¿Hola como estas?")).toBe("¿Hale como astos?");
        // ?satse omoc aloH¿
        // ¿Hola como estas?
    })

    it("should return message that is a string emty", () => {
        expect(invertVowels("")).toBe("Empty strings are not allowed");
    })

    it("should return a message that the word must have at least 2 vowels", () => {
        expect(invertVowels("hlle")).toBe("The string should have at least 2 vowels");
    })

    it("should return a message that the word must have vowels", () => {
        expect(invertVowels("h")).toBe("No vowels were found");
    })
    
})

describe("Invert Consonants", () => {

    it("should return the inverted consonants", () => {
        expect(invertConsonants("hello")).toBe("lelho");
    })

    it("should return the inverted consonants", () => {
        expect(invertConsonants("¿Hola como estas?")).toBe("¿sota somo eclaH?");
        // ?satse omoc aloH¿
        // ¿sota somo eclaH?
    })

    it("should return message that is a string emty", () => {
        expect(invertConsonants("")).toBe("Empty strings are not allowed");
    })

    it("should return a message that the word must have at least 2 consonants", () => {
        expect(invertConsonants("Laaaaaaaaaaaaaaa")).toBe("The string should have at least 2 consonants");
    })

    it("should return a message that the word must have consonants", () => {
        expect(invertConsonants("a")).toBe("No consonants were found");
    })
    
})

describe("Find a Palindrome Word", () => {

    it("should return the first palindrome word found", () => {
        expect(findPalindromeWord("la Ana lava la tina")).toBe("Ana".toLowerCase());
    })

    it("should return the first palindrome word found", () => {
        expect(findPalindromeWord("El oso lava la tina y el tino se asusto")).toBe("oso".toLowerCase());
    })

    it("should return a message that is a string emty", () => {
        expect(findPalindromeWord("")).toBe("Empty strings are not allowed");
    })

    it("should return a message that no palindrome words were found", () => {
        expect(findPalindromeWord("hola como estas")).toBe("No palindrome words were found");
    })
    
})