export function isConsonant(char: string): boolean {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    return consonants.includes(char);
}

export function isVowel(char: string): boolean {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(char);
}