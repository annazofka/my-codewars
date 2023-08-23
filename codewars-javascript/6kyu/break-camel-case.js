/* Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// My solution:
function solution(string) {
  let str = string.split("");
  for (let i = 0; i < str.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      str[i] = " " + str[i];
    }
  }
  return str.join("");
}

//Model solution 1:
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

//Model soltion 2:
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}

// Model solution 3:
function solution(string) {
  let res = "";
  let letters = string.split("");
  letters.forEach((letter) => {
    if (letter.toUpperCase() == letter) res += " " + letter;
    else res += letter;
  });
  return res;
}
