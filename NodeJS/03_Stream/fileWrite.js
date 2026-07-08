const fs = require("fs");


//  write terminal and log text into file 

// const writableStream = fs.createWriteStream("./log.txt");

// process.stdin.pipe(writableStream);

// Read terminal data from a log file 

const readableStream = fs.createReadStream("log.txt");

readableStream.pipe(process.stdout);