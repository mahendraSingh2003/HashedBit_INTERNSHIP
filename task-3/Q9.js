// Write a function to count the number of words in a paragraph


function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

console.log(countWords("This is a test paragraph with more than seven words."));
