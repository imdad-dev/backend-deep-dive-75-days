const { Transform } = require("stream");


const replaceWordProcessing = new Transform({
    transform(chunk, encoding, callback) {
     
        //error test 
        // replaceWordProcessing.emit("error" , new Error("Replace Word Processing Error"));

        const finalString = chunk.toString().replaceAll(/ipsum/gi, "COOL");
        console.log("Chunk in Buffer format: ", finalString);
        callback(null, finalString);
    }
});

module.exports = replaceWordProcessing;