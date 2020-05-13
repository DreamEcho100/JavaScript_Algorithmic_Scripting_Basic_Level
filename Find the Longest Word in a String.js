let string = "lodw pokscf s'fl aedfvdsv vwock 1234567890 LOL";

//solution 1
function longestStr(str) {
  let words = str.split(" ");
  let checker = "";
  
  words.map(elem => {
    if(elem.length > checker.length) {
      checker = elem;
    }
      });
  
  return `${checker}, ${checker.length}`;
}

console.log(longestStr(string));



//solution 2
function longestStr(str) {
  return str.split(' ').reduce((a, b) => {
    return Math.max(a, b.length)
  }, 0)
}

console.log(longestStr(string));
