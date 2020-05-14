//Solution 1
function titleCase(string) {
  let test = string.toLowerCase().split(" ");
  for (let i = 0; i < test.length; i++) {
    test[i] =  test[i][0].toUpperCase() + test[i].slice(1).toLowerCase();
  }
  
  return test.join(" ");
}

console.log(titleCase("I'm a little tea bot"));

//Solution 2
function titleCase(string) {
  let test = string.toLowerCase().split(" ");
  
  let testModified = test.map(elem => {
    return elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase())
  }).join(" ");
  
  return testModified;
}

console.log(titleCase("I'm a little tea bot"));

//Solution 3
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)./g, (L) => L.toUpperCase());
}

console.log(titleCase("i'm a little tea bot"));

//Solution 4
function titleCase(str) {
  let test = str.toLowerCase().split(" ");
  
  for (let elem in test) {
    test[elem] = test[elem].split("");
    test[elem][0] = test[elem][0].toUpperCase();
    test[elem] = test[elem].join("");
  }
  
  return test.join(" ");
}

console.log(titleCase("i'm a little tea bot"));