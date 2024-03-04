function validDate(date){
    let userDate= new Date(date);
    let presentDate= new Date();
    if(userDate < presentDate){
        console.log("Valid date")
    }
    else{
        console.log("Invalid Date");
    }
}


validDate('2024-01-21')