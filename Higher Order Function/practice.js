//take a array as a paramter and condition if matches then return the index
const ans= (arr,condition)=>{
  
  for(let i=0;i<arr.length;i++){
       if(condition(arr[i])){
        return arr[i];
       }
  }
}
const a=[1,2,3,4,5,6,7]
const cond=(val)=>{
    if(val>5){
        return true;
    }
}
console.log(ans(a,cond))