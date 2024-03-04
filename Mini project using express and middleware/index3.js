import express from "express";

const app = express();
const port = 3000;
function logger(req,res,next){
  console.log(req.method)
  console.log(req.url)
  next();//reach the next handler
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/**
 * task: to create the own middle ware which has like 3 para one req and then req and then call next()
 * so it will call the next route hanlder
 */
