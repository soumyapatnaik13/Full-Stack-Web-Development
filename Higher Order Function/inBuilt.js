const arr=[1,2,3,4]

arr.forEach((value,index,arr)=>{
      console.log(value,arr[index])
})
const arr2=arr.map((value,index,arr)=>{
      return value*2
})
console.log(arr2)