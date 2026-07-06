const EventEmitter  = require("events")
const fs = require('fs');
const os = require('os');


//create a instance of object EventEmitter 
const emitter = new EventEmitter();
  function  greet() {
    console.log("run 1")
}

  function  greet() {
    console.log("run 2")
}

  function  greet() {
    console.log("run 3")
}


// greet(); // run only last on , overrides previous on 

//but in Events module  --> execute all

emitter.on("register"  , ()=>{
  console.log("save User")
})
emitter.on("register"  , ()=>{
  console.log("send welcome Email")
})
emitter.on("register"  , ()=>{
  console.log("generat Token")
})
emitter.on("register"  , ()=>{
  console.log("write logs")
})

emitter.emit("register");

 

// define an event 

emitter.on("greet" , ( { name , prof})=>{
    console.log(`Hii ${name} ,  you are a ${prof} ri8`);
})

// emit or trigger the event 
// emitter.emit("greet"  , { name : "imdadul" , prof : "backend dev"})

 

// logging system
// Create a custom Logger class that extends EventEmitter
class Logger extends EventEmitter {
    // Custom log method that emits a "message" event
    log(message) {
        this.emit("message", { message });
    }
}

// Instantiate the Logger
const logger = new Logger();

// File where logs will be stored
const logFile = "./event.txt";

// Listener function: writes log messages to file
const logToFile = (event) => {
    const logMessage = `${new Date()} - ${event.message}\n`;
    fs.appendFileSync(logFile, logMessage); // append log entry
};

// Attach listener to "message" event
logger.on("message", logToFile);

// Emit some initial logs
logger.log("Application Started...");
logger.log("Application Event Occurred...");

// Monitor memory usage every 3 seconds
setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Current Memory Usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);
