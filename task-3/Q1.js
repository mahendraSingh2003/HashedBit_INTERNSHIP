// Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.


let states = ["Rajasthan", "Uttar Pradesh", "Odisha", "Kerala", "Andhra Pradesh", "Punjab", "Bihar", "Tamil Nadu"];
let filteredStates = states.filter(state => !"AEIOUaeiou".includes(state[0]));
console.log(filteredStates);
