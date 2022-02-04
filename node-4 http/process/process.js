const process = require("process");

console.log(process.platform)

let c = 0
setInterval(() => {
    c++
    console.log(c);
}, 1000)

process.on("SIGINT", () => {
    console.log("exiting application")
   // process.exit()
})