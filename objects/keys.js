const human={
    name : "Rahul",
    age:12,
    sex:"M",
}
console.log(Object.keys(human))
console.log(Object.values(human))
console.log(Object.entries(human))

const rahul = Object.assign({},human,{friend:"yes"})
console.log(rahul)