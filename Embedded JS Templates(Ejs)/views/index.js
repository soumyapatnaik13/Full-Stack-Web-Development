import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  
  res.render("indexStatic.ejs");
});


app.post("/submit", (req, res) => {
 
  const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  
 
  const userName = req.body.username;
  const weekDayInput = req.body.weekDays.toLowerCase(); // Convert to lowercase for a case-insensitive match.
  
  const dayIndex = weekDays.indexOf(weekDayInput);

  
  res.render("index.ejs", {
    name: userName,
    week: dayIndex, 
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
