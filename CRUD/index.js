// To reading a file in Node
const fs = require("fs");
const path = require("path"); //to give the absolute path we add this line and change line no-5
// // fs.readFile("./starter.txt", "utf8", (err, data) => {
fs.readFile(path.join(__dirname, "starter.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// creating a new file in node
// fs.writeFile(
//   path.join(__dirname, "newCreate.txt"),
//   "Hi, welcome to new created file in CRUD folder",
//   (err) => {
//     if (err) throw err;
//     console.log("writing done!");
//   }
// );

// updating, changing (replace the new data to old one) an existing file in node
// fs.writeFile(
//   path.join(__dirname, "starter.txt"),
//   "This is new added file in 2nd.",
//   (err) => {
//     if (err) throw err;
//     console.log("Appending done!");
//   }
// );

// console.log("This is asynchronous function, so first print console");
