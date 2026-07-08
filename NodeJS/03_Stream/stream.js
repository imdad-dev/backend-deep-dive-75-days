const { read } = require("fs");
const { Readable , Writable} = require("stream");

const readableStream = new Readable({
    highWaterMark : 10 ,  // how much bytes allow to single buffer chunk , return type Boolean 
    read(){}
});


// write Stream 
const writableStream = new Writable({
    write(s) {
        console.log("Writing : " , s.toString())
    }
});


// Read stream 
readableStream.on("data" , (chunk) =>{
    console.log("Data commint : " , chunk.toString());
    writableStream.write(chunk);
});

const checkStatusWaterMark = readableStream.push("Hey !, You r a backend dev. ri8 .");

console.log("check Status of WaterMark" , checkStatusWaterMark);


 