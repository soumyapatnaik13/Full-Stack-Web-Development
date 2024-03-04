let add=(arr)=>{
   let sum=0;
   let i=0;
   while(i<arr.length){
    sum += arr[i];
    i++
   }
   return sum;
}


let arr=[1,3,4,5,7];
let ans=add(arr)
console.log(ans)
/*
for each :
sum=0
  for(num of arr){
    sum +=num;
  }
  return sum
*/