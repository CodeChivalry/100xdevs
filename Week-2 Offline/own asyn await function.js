const fs = require("fs");
function cleanFile(filePath, cb) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}
async function main() {
  await cleanFile("C:/Users/MEHAK SHARMA/Documents/100XDEVS/100xdevs/Week-2/a.txt");
  console.log("Done cleaning file");
}
main();
