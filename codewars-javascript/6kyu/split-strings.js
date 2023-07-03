/* DESCRIPTION:
Complete the solution so that it splits the string into pairs of 
two characters. If the string contains an odd number of characters
then it should replace the missing second character of the final 
pair with an underscore ('_').

Examples:

'abc' =>  ['ab', 'c_']
'abcdef' => ['ab', 'cd', 'ef']
*/

// My solution:
function solution(str){   
   if (str.length > 0) {
     if (str.length % 2 !== 0) {
       str += '_'
       return str.match(/.{2}/g)
     } else {
       return str.match(/.{2}/g)
       }
     } else {
       return [];
     }
};

// Model solution 1:

function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}

// Model solution 2:
function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

