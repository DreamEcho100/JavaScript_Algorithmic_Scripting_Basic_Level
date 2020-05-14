//Solution 1
function palindrome(string) {
  let test = string.match(/[^_\W)|(-]/g).join("").toLowerCase();
  let reverseTest = test.split("").reverse().join("");
  
  return test === reverseTest;
}

console.log(palindrome('mom'));
console.log(palindrome('mom_'));
console.log(palindrome('race&cA#R'));
console.log(palindrome('raced&cA#gR'));