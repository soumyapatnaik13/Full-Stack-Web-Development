//input => function => ouput
const admin={
   Email:"Soumyapatnai493@gmail.com",
   Password:"disha9"
}
function Login(Email,PassWord){
   if(admin.Email == Email && admin.Password==PassWord){
      return "Login successfull"
   }
   else if(admin.Email==Email && admin.Password != PassWord){
     return "Enter a valid password"
   }
   else{
    return "Enter valid Email and password"
   }
}

console.log(Login("Soumyapatnai493@gmail.com","disha9"))
