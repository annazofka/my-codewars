/* DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

// My solution:
function findShort(s) {
  let wordsArray = s.split(" ");
  let shortestWord = wordsArray[0].length;
  for (let i = 0; i < wordsArray.length; i++) {
    let wordLength = wordsArray[i].length;
    if (wordLength < shortestWord) {
      shortestWord = wordLength;
    }
  }
  return shortestWord;
}

// Model solution 1:
function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

// Model solution 2:
const findShort = (s) =>
  s
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;
