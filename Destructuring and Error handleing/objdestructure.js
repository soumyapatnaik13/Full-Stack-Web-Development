const obj={
    name:"rahul",
    age:22,
    hobbies:"coding",
    adress:{
        city:"Berhampur",
        state:"odisha",
        nation:"india"
    }
}
let{name,age,hobbies}=obj
console.log(name)
let{ adress: {nation} }=obj
console.log(nation)

//either write the key name ,with the corresponding it will print the value of that particular key