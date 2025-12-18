import express from "express";
const app = express();
const port =3000;
// define routes before .listen
app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});
/**
 * ip adress-> server(Building) -> port number(doors) -> HTTP method(department)
 *  -> end pont(task)
 */
app.get("/about", (req, res)=>{
    res.send("<h1>About me</h1>");
})
app.get("/contact" , (req,res) =>{
      res.send("<h1>phone num</h1>");
})
//to automatically changes in the server side (use nodeman)
// node i -g nodeman
// then start listening
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
