let c =0;
const timer=setInterval(countdown,1000);

const countdown=()=>{
   console.log(c++)
   if(c ==10){
    clearInterval(timer)
   }

}