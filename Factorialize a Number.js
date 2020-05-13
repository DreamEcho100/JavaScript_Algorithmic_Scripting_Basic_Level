//Solution 1
function factorialiaze(num) {
  if (num < 0) {
    console.log("Can't factorialiaze a negative number");
  }
  
  if (isNaN(num)) {
    console.log("Can't factorialiaze a none positive number");
  }
    
  let numFactorial = 1;
  for (let i = num; i > 0; i--) {
    numFactorial *= i;
  }
  
  return numFactorial;
}

console.log(factorialiaze(4));
console.log(factorialiaze(0));
console.log(factorialiaze(5));

//Solution 2
function factorialiaze(num) {
  if (num < 0) {
    console.log("Can't factorialiaze a negative number");
  }
  
  if (isNaN(num)) {
    console.log("Can't factorialiaze a none positive number");
  }
  
  if(num === 0) {
    return 1
  }
  
  return num * factorialiaze(num - 1);
}

console.log(factorialiaze(4));
console.log(factorialiaze(0));
console.log(factorialiaze(5));
//Solution 3