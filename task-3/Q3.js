//  let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice


let string = ['I', 'N', 'D', 'I', 'A'];
string.splice(1, 4, 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A');
console.log(string.join(''));  // "INDONESIA"
