const http = require("http");
const fs = require("fs");
const { pipeline } = require("stream");

// Import custom transform streams
const replaceWordProcessing = require("./replaceWordProcessing.js");
const upperCaseWordProcessing = require("./upperCaseWordProcessing.js");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    res.statusCode = 404;
    return res.end("Not Found");
  }

  // -------------------------------
  // ❌ BAD WAY: Read big file fully into memory
  // -------------------------------
  // const data = fs.readFileSync("sample.txt");
  // return res.end(data);

  // -------------------------------
  // ✅ GOOD WAY: Stream file directly to response
  // -------------------------------
  // const readableStream = fs.createReadStream("sample.txt");
  // readableStream.pipe(res);

  // -------------------------------
  // ❌ BAD WAY: Copy big file fully into memory
  // -------------------------------
  // const file = fs.readFileSync("sample.txt");
  // fs.writeFileSync("output.txt", file);
  // res.end();

  // -------------------------------
  // ✅ GOOD WAY: Copy big file using streams
  // -------------------------------
  /*
  const readStream = fs.createReadStream("sample.txt");
  const writeStream = fs.createWriteStream("output.txt");

  readStream.on("data", chunk => {
    console.log("Chunk:", chunk); // buffer
    writeStream.write(chunk);
  });

  readStream.on("end", () => {
    writeStream.end();
    res.end("File copied successfully!");
  });
  */

  // -------------------------------
  // ✅ BEST WAY: String processing with Transform streams
  // -------------------------------
  const sampleFileStream = fs.createReadStream("sample.txt");
  const outputWritableStream = fs.createWriteStream("output.txt");

  pipeline(
    sampleFileStream,            // Read source file
    replaceWordProcessing,       // Transform: replace words
    upperCaseWordProcessing,     // Transform: convert to uppercase
    outputWritableStream,        // Write to output file
    (err) => {
      if (err) {
        console.error("Pipeline failed:", err);
        res.statusCode = 500;
        return res.end("Error processing file");
      }
      console.log("Pipeline completed successfully");
      res.end("File processed and saved to output.txt");
    }
  );
});

server.listen(PORT, () => {
  console.log(`✅ Server is listening at port ${PORT}`);
});
