import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended : true}));
// so before it reaches to the route handler thsi middle ware will hold that value and sent back to the req.body 
//without using the middleware func if you want to access req.body it will give null cz middleware has stotres that value
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit",(req,res) =>{
  console.log(req.body)
  
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/**
 * _dirname basically helps to find the file in the server and add additional things required to find that file
 * for thisserver its present in c:user\desktop......
 * so we add some express module to write that method
 * and when the user get some value form the server than that files will be shown and that is a static file so we
 * write that in a separate folder
 */