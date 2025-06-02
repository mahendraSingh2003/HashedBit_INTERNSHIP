// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.



let sample = "The quick brown fox jumps over the lazy dog.";
let vowels = sample.match(/[aeiouAEIOU]/g)?.length || 0;
let consonants = sample.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
