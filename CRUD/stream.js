// Work on Streams
const fs = require("fs");
const rs = fs.createReadStream("loremIpsum.txt", { encoding: "utf8" });
const ws = fs.createWriteStream("new-lorem.txt");
rs.pipe(ws);
