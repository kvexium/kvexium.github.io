const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "static", "prism-kvexium.js");

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("File does not exist:", filePath);
  } else {
    console.log("File exists at path:", filePath);
  }
});
