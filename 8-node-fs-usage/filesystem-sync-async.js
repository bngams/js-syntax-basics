var fs = require("fs");
var filename = "file.txt";
var data;
try {
  data = fs.readFileSync(filename);
  console.log("Synchronous data:" + data.toString());
} catch (e) {
  console.log("Synchronous error:", e);
}

fs.readFile(filename, function(err, data) {
  if (err) {
    console.log("Asynchronous error:", err);
  } else {
    console.log("Asynchronous data:", data.toString());
  }
});