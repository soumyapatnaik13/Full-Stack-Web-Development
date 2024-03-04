let payment="credit";
switch(payment){
    case 'credit':
        console.log("process fee of credit payment 2%");
        break;
    case 'debit':
        console.log("process fee of debit payment 1.5%");
        break;
    case 'paypal':
        console.log("process fee of paypal payment 3%");
        break;
    default:
        console.log("invalid payment")
}