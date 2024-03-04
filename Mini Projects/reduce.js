//reduce method takes callback(accumalator) and another argument as 0 which is the initial value

let arr=[100,200,300,400]

function totalCountAfterDiscount(arr){
    let total= arr.reduce((initialPrice,element)=>{
       return initialPrice+ element-20;
    },0)
    return total
}
console.log(totalCountAfterDiscount(arr))