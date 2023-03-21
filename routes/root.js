const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  //   res.send("Hello This is new Deepti World!");
  res.sendFile(path.join(__dirname, "..", "view", "index.html"));
});

//adding this (.html)? we do not need to use extension when we run that file on local host
// router.get("/new-page(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "view", "new-page.html"));
// });

// router.get("/old-page(.html)?", (req, res) => {
//   res.redirect(301, "/new-page.html");
// });

module.exports = router;
