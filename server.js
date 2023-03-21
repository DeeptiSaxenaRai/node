require("dotenv").config();
const path = require("path");
const PORT = process.env.port || 3500;

const { logger } = require("./middleware/logEvents"); //create a logger
const errorHandler = require("./middleware/errorHandler"); //Import error handler
const corsOptions = require("./config/corsOptions");
const verifyJWT = require("./middleware/verifyJWT");

const connectDB = require("./config/dbConn");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser"); //import cookie parser
const mongoose = require("mongoose");

//connection
connectDB();

//cors and cors option

// Using middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "/public")));

// How to create the middleware--
app.use(logger);
app.use(cors(corsOptions));
app.use(errorHandler);

//The Routes

app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));
app.use("/register", require("./routes/register"));

app.use(verifyJWT);
app.use("/employees", require("./routes/api/employees")); //for API

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

mongoose.connection.once("open", () => {
  console.log("Connect to MongoDB");
  app.listen(PORT, () =>
    console.log(`App running on http://localhost:${PORT}`)
  );
});
