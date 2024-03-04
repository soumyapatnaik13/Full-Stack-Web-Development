const db=(n)=>{
   return n+n;
}
const sq=(n)=>{
    return n*n;
}

const comp = (fun1,fun2,num)=>{
  return fun1(fun2(num))
}

console.log(comp(db,sq,3))