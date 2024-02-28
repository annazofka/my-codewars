/* DESCRIPTION:
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**

 */

//My solution:
function reverseAndMirror(s1, s2) {
  //invert case for s1
  let reversedString1 = s1.split("").reverse();
  for (let i = 0; i < s1.length; i++) {
    if (reversedString1[i] === reversedString1[i].toLowerCase()) {
      reversedString1[i] = reversedString1[i].toUpperCase();
    } else {
      reversedString1[i] = reversedString1[i].toLowerCase();
    }
  }
  reversedString1 = reversedString1.join("");

  //invert & mirror case for s1
  let mirroredReversedString1 = reversedString1.split("").reverse().join("");

  //invert case for s2
  let reversedString2 = s2.split("").reverse();
  for (let i = 0; i < s2.length; i++) {
    if (reversedString2[i] === reversedString2[i].toLowerCase()) {
      reversedString2[i] = reversedString2[i].toUpperCase();
    } else {
      reversedString2[i] = reversedString2[i].toLowerCase();
    }
  }
  reversedString2 = reversedString2.join("");

  return reversedString2 + "@@@" + reversedString1 + mirroredReversedString1;
}

// Best practice:
function reverseAndMirror(s1, s2) {
  s1 = [...s1]
    .map((x) => (x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("");
  s2 = [...s2]
    .map((x) => (x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .reverse()
    .join("");
  return `${s2}@@@${[...s1].reverse().join("")}${s1}`;
}
