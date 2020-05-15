//Solution 1
function truncateStr(str, num) {
  if ((typeof num !== "number") | num <= 0) {
    return `"${num}" is not a valid input, it must be a positive integer`;
  }
  if (str.length > num) {
    return str.slice(0, num > 3 ? num - 3 : num) + "...";
  }
  
  return str;
}

console.log(truncateStr("Orange", "ian"));
console.log(truncateStr("Orange", -2));
console.log(truncateStr("Orange", 2));
console.log(truncateStr("Orange", 5));
console.log(truncateStr("Orange", 7));
