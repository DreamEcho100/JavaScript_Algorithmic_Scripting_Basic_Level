//Solution 1
function largestInArrays(arr) {
  let newArr = arr;
  let arrOfLargest = [];
  for (let i = 0; i < newArr.length; i++) {
    let largestNum = newArr[i][0];
    for (let j = 0; j < newArr[i].length; j++){
      if (newArr[i][j] > largestNum) {
        largestNum = newArr[i][j];
      }
    }
    arrOfLargest.push(largestNum);
  }
  
  return arrOfLargest;
}

let myArr= [[314, 143.46534, 52, 234],
            [34, 54, 95, 99],
            [43, 33, 34, 35],
            [134, 98, 34, 50]];

console.log(largestInArrays(myArr));

//Solution 2
function largestInArrays(arr) {
  let newArr = arr;
  let arrOfLargest = [];
  
  newArr.map(arr => {
    let largestNum = arr[0];
    for (let j = 0; j < arr.length; j++){
      if (arr[j] > largestNum) {
        largestNum = arr[j];
      }
    }
    arrOfLargest.push(largestNum);
  })
  
  return arrOfLargest;
}

let myArr= [[314, 143.46534, 52, 234],
            [34, 54, 95, 99],
            [43, 33, 34, 35],
            [134, 98, 34, 50]];

console.log(largestInArrays(myArr));

//Solution 3
function largestInArrays(arr) {
  let newArr = arr.slice();
  
  return newArr.map(group => {
    return group.reduce((prev, current) => {
      return (current > prev) ? current : prev;      
    });
  });
}

let myArr= [[314, 143.46534, 52, 234],
            [34, 54, 95, 99],
            [43, 33, 34, 35],
            [134, 98, 34, 50]];

console.log(largestInArrays(myArr));

//Solution 4
function largestInArrays(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

let myArr= [[314, 143.46534, 52, 234],
            [34, 54, 95, 99],
            [43, 33, 34, 35],
            [134, 98, 34, 50]];

console.log(largestInArrays(myArr));