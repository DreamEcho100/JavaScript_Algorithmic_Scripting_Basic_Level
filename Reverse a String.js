//Solution 1
let str1 = "Hello";

function strReversrd(string) {
  let str = string.slice();
  let reverse = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse;
  
}

console.log(strReversrd(str1));
//Solution 2
let str1 = "Hello";

function strReversrd(string) {
  let str = string.slice();
  return str.split("").reverse().join("");;
  
}

console.log(strReversrd(str1));
//Solution 3

//Solution 4