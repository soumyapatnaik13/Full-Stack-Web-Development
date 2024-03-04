//return a condtion if that true
let  arr=[1,2,3,4,5,6,7,8]
function even(arr){
    let evenNumbers= arr.filter( (value)=>{
      return value % 2==0
    })
    return evenNumbers;
}
console.log(even(arr))