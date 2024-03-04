//it return a new array and does the same task of foreach
const price=[100,200,300,400,500]
function discount(price){
   let dis= price.map((element)=>{
    return element -20;
   })
   return dis
}

let ans= discount(price)
console.log(ans)
