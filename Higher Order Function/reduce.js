const arr=[1,2,3,4,5]
const ans=arr.reduce((sum,number,index,arr)=>{
  return (sum + number)
},0);

console.log(ans)
