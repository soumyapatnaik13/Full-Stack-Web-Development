// take function as a input and calculate the sum and multiply
function calculate(operation,iv,arr){
    let total=iv;
    for ( let num of arr){
        total = operation(total,num)
    }
    return total
}
function sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b
}


const ans=calculate(sum,0,[1,2,3,4])
console.log(calculate(multiply,1,[1,2,3,4,5]))
console.log(ans)