// we have to create a CRUD operation 
const student=[]
function create(name){
   return student.push(name)
}
function read(){
    return student
}
function del(name){
    //taks 1:find the index you want to delete
    let index= student.indexOf(name)
    //use splice method to delete
    student.splice(index,1);
    // console that 
    console.log(`${name} has removed succesfully`)
}
function upd(name,index){
   student.splice(index,0,name)
}
create("rahul")
create("sahil")
create("tihul")
create("pihul")
create("jihul")


console.log(del("tihul"))
console.log(read())
upd("raga",2)
console.log(read())
