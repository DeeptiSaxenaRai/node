// console.log("Hi my name is deepti");
// const os = require("os");
// console.log(os.version()); // to check the os version
// console.log(os.homedir()); // to find the home directory

// Now we can check the path
//  const path = require("path");

// console.log(path.basename(__filename)); //but adding the basename with file name it return the file name
// console.log(path.basename(__dirname)); //show the directory name
// console.log(path.extname(__filename)); //show the extension of the file

// how we can make the function in other file and call in this main file
// const addFun = require("./mathFunction");
// console.log(addFun(18, 14));

// Create a web server
const myServer = require("http");
myServer
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(
      "Hello friends welcome to Deepti page, this is new updated page and again I add something"
    );
  })
  .listen(8080);
