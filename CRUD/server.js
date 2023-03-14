//work on call Back Hell
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "newCreate.txt"),
      "utf-8"
    );
    // console.log(data);
    await fsPromises.writeFile(path.join(__dirname, "promiseWrite.txt"), data); //create a new file
    await fsPromises.appendFile(
      path.join(__dirname, "promiseWrite.txt"),
      "This is new create file by using callback hell"
    ); //update the data with existing data
    await fsPromises.rename(
      path.join(__dirname, "promiseWrite.txt"),
      path.join(__dirname, "NewCreatedPromise.txt")
    ); //rename the file with existing file
    await fsPromises.unlink(path.join(__dirname, "newCreate.txt")); //delete any file if we want
  } catch (err) {
    console.log(err);
  }
};
fileOps(); //call that function otherwise they did not show anything
