// console.log("Hi my name is deepti");
// const os = require("os");
// console.log(os.version()); // to check the os version
// console.log(os.homedir()); // to find the home directory

// Now we can check the path
// const path = require("path");

// console.log(path.basename(__filename)); //but adding the basename with file name it return the file name
// console.log(path.basename(__dirname)); //show the directory name
// console.log(path.extname(__filename)); //show the extension of the file

// how we can make the function in other file and call in this main file
// const addFun = require("./mathFunction");
// console.log(addFun(8, 14));

// Create a web server
// const myServer = require("http");
// myServer
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-type": "text/html" });
//     res.end(
//       "Hello friends welcome to Deepti page, this is new updated page and again I add something"
//     );
//   })
//   .listen(8080);

// Add Express
// for using express we can add and send any file to local host
const path = require("path");
const PORT = process.env.port || 3500;

const { logger } = require("./middleware/logEvents"); //create a logger
const errorHandler = require("./middleware/errorHandler"); //Import error handler
const corsOptions = require("./config/corsOptions");

const express = require("express");
const app = express();
const cors = require("cors");

//cors and cors option

// Using middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

// How to create the middleware--
app.use(logger);
app.use(cors(corsOptions));

app.use(errorHandler);

//Routes
// app.use("/subdir", require("./routes/subdir"));
app.use("/", require("./routes/root"));
app.use("/employees", require("./routes/api/employees")); //for API
app.use("/register", require("./routes/register"));
// app.use("/auth", require("./routes/auth"));

//If you want to create another router you should delete line from 72-84.  and paste these line in root.js file.

// app.get("^/$|/index(.html)?", (req, res) => {
//   //   res.send("Hello This is new Deepti World!");
//   res.sendFile(path.join(__dirname, "view", "index.html"));
// });

// //adding this (.html)? we do not need to use extension when we run that file on local host
// app.get("/new-page(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "view", "new-page.html"));
// });

// app.get("/old-page(.html)?", (req, res) => {
//   res.redirect(301, "/new-page.html");
// });

app.get("*", (req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "view", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 json not found" });
  } else req.accepts("txt");
  {
    res.type("html");
  }
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
