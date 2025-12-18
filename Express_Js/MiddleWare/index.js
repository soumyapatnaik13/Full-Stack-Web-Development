import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const portNum = 3000;

//morgan middle-ware import 
app.use(morgan("tiny"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

//create middleware
function logger(req, res, next) {
  console.log(req.method); 
  console.log(req.url);    
  next();                  
}

app.use(logger);

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Handle form submission
app.post("/submit", (req, res) => {
  console.log(req.body); // logs { email: '...', password: '...' }
  res.send(`Received Email: ${req.body.email}, Password: ${req.body.password}`);
});


app.listen(portNum, () => {
  console.log(`Server is listening at http://localhost:${portNum}`);
});
