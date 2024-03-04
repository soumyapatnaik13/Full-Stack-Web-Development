const a="racecar"// convert the string into Array
let c=a.split("")
function isPelindrome(c){
    let v= c.reverse().join("");
    return a===v
}
console.log(isPelindrome(c))
// because string are immutable so that 
// step 1: convert that string into a array : method is split()
// then use join method to convert the array into string