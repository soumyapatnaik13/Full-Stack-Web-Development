const todo=[
    {task:"reading newspaper", status: true},
    {task: "playing cricket", status:true},
    {task:"study",status:false}

]
function todoList(todo){
todo.forEach((data)=>{
    if(data.status){
        console.log(`you have finished your task ${data.task}`)
    }
    else{
        console.log(`your job ${data.task} is pendind`)
    }
})
}

todoList(todo)
// the todo array takes all the obj having some key and value
// foreach will call the callback func to do task which implies as to get the elemnt in the obj as todo.status 
//which gives the value of the func