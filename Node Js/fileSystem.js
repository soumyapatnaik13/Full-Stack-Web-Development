const fs = require("fs");

const fileName = "message.txt";
const fileContent = "Hello from Node.js!";

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error("An error occurred while saving the file:", err);
    return;
  }
  console.log(`The file '${fileName}' has been successfully saved!`);
});
