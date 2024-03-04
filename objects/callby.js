const student={
    firstname:"rahul",
    lastname:"patnaik"
}
const student2={
    fullname:function(){
     console.log(`full name is ${this.firstname} ${this.lastname}`)
    }
}
student2.fullname.call(student)