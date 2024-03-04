//without using set
let arr=["rahul1","rahul2","rahul1"]
let arr2=[]

for(let i=0;i<arr.length;i++){
    if(!arr2.includes(arr[i])){
        arr2.push(arr[i])
    }
}
console.log(arr2)
console.log(new Set(arr))