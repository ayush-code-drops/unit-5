const EventEmitter = require('events');
const emitter = new EventEmitter()
const process=require("process")

emitter.on("message", (arg) => {
    console.log(`sending message ${arg}`)
    
})

let c = 0


setInterval(() => {

    emitter.emit("message", "Hello")
    console.log(c)
    c++
}, 1000)

process.on("SIGINT", () => {
    if (c >= 10) {
        process.exit()
    }
})


