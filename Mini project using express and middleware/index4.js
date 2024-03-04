import express from "express";//import the express framework
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";// this will take the whole path where the server is running
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended : true}))//app.use will fast and encoded all the user data in the body parser 
//middle ware
// after that body parser middle ware craete our own middleware and stores the value andcall the app.use to used that method

function generate(req,res,next){
console.log(req.body);
 val=req.body["email"] + req.body["course"];
next();
}
app.use(generate)

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})
app.post("/submit",(req,res)=>{
  res.send(`you have enrolled to ${val}`)

})

app.listen(port,()=>{
  console.log(`app is listening at port num :${port}`)
})
