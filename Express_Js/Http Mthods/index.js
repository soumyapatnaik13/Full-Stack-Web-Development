import express from "express";  
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  
   res.sendStatus(201);
})
app.post("/value",(req,res)=> {

    res.sendStatus(201);
})
app.put("/",(req,res)=> {
  res.sendStatus(200);
})
app.patch("/",(req,res)=> {
  res.sendStatus(200);
})
app.delete("/",(req,res)=> {
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Port is listening on ${port}`);
});
