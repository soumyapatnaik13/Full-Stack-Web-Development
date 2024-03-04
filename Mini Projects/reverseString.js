let char="viratrahul" //luhartariv

let arr=char.split("");
start=0;
end=arr.length-1
let swap=(num1,num2)=>{
    temp=arr[num1];
    arr[num1]=arr[num2];
    arr[num2]=temp;
 }
while(start<end){
        swap(start,end)
        start++;
        end--;
    
}

console.log(arr.join(""))