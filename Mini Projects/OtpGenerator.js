function otp(){
    let num=Math.random() * 10000;//give num from 0 to 9 
   return Math.floor(num)// erage the decimal part will give the nearest below decimal num
}
console.log(otp())
console.log(otp())