function student(name,age,rollnum){
    this.studentname=name;
    this.age=age
    this.rollnum=rollnum
}
const s1= new student("Rahul",12,13)
console.log(s1)
//function is a first class citizen so it got a lot of option so we can create a obj as well by using new keyword
// new to create the obj then in the func this will refer to as current value