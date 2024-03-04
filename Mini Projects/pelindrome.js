let char="raceca"
let c= char.split('');
function pelindrome(reverse){
     if(reverse(c)){
        console.log("pelindrome")
     }
     else{
        console.log("not a pelindrome")
     }
}
function swap( s,e,c){
  let temp= c[s];
   c[s]=c[e];
   c[e]=temp;
}
function reverse(c){
    start=0;
    end=c.length-1;
    while(start<end){
        if(c[start] != c[end]) return false;
        swap(start,end,c);
        start++;
        end--;
    }
    return true
}
pelindrome(reverse);