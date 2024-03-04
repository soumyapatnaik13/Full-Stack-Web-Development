// slice will remove an element from one index to till that index(end index excluded)
// splice will take a index , number of index you want to insert and then the number

let arr1= [1,2,3,4]
let v= arr1.slice(0,2)
console.log(v)

let arr2=[1,2,3,4]
arr2.splice(2,2,6,7)
console.log(arr2)