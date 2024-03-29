const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "ddMMyyyy\tHH:mm:ss")}`;
  const theLog = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(theLog);

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      theLog
    );
  } catch (err) {
    console.error(err);
  }
};

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  // logEvents(`${req.method}\t${req.header.origin}\t${req.url}`, "reqLog.txt");
  logEvents(`${req.method}\t${req.header.origin}\t${req.url}`, "reqLog.txt");
  next();
};

module.exports = { logger, logEvents };
