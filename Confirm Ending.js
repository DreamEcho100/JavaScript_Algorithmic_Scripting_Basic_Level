//Solution 1
function confirmEnding(str, target) {
  let lastWord = str.slice(str.length - target.length)
  return lastWord === target;
}

console.log(confirmEnding("Bastian", "ian"));

//Solution 2
function confirmEnding(str, target) {
  let lastWord = str.substr(-target.length)
  return lastWord === target;
}

console.log(confirmEnding("Bastian", "ian"));

//Solution 3
function confirmEnding(str, target) {
  let lastWord = str.substr(str.length - target.length, target.length)
  return lastWord === target;
}

console.log(confirmEnding("Bastian", "ian"));