//Solution 1
function repeatStrNumOfTimes(str, num) {
  if ((typeof num === "number") && num > 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

console.log(repeatStrNumOfTimes("Candy Apple", "ian"));
console.log(repeatStrNumOfTimes("Candy Apple", -2));
console.log(repeatStrNumOfTimes("Candy Apple", 3));

//Solution 2
function repeatStrNumOfTimes(str, num) {
  if ((typeof num === "number") && num > 0) {
    let repeatStr = "";
    for (let i = 0; i < num; i++) {
      repeatStr += ` ${str}`;
    }
    repeatStr = repeatStr.replace(/[\s]/, "");
    return repeatStr;
    
  } else {
    return "";
  } 
}

console.log(repeatStrNumOfTimes("Candy Apple", "ian"));
console.log(repeatStrNumOfTimes("Candy Apple", -2));
console.log(repeatStrNumOfTimes("Candy Apple", 3));

//Solution 3
function repeatStrNumOfTimes(str, num) {
  if ((typeof num !== "number") | num < 0) {
    return "";
  }
  if (num === 1) {
    return str;
  } else {
    return str + " " +repeatStrNumOfTimes(str, num - 1)
  }  
}

console.log(repeatStrNumOfTimes("Candy Apple", "ian"));
console.log(repeatStrNumOfTimes("Candy Apple", -2));
console.log(repeatStrNumOfTimes("Candy Apple", 2));
