//Solution 1
function truncateStr(str, num) {
  if ((typeof num !== "number") | num <= 0) {
    return `"${num}" is not a valid input, it must be a positive integer`;
  }
  if (num === 1) {
    return num;
  }
  if (num > 0) {
    return str.slice(0, num) + "...";
  }
}

console.log(truncateStr("Orange", "ian"));
console.log(truncateStr("Orange", -2));
console.log(truncateStr("Orange", 2));

//Solution 2
