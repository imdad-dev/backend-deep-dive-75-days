const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os")

const PORT = 3000;

 const server = http.createServer( ( req , res) =>{

  // 1. Handle dynamic routes first
  if (req.url === "/token") {
    const token = crypto.randomBytes(32).toString("hex");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(token);
    return;
  }

  if (req.url === "/server") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        platform: os.platform(),
        cpu: os.cpus().length,
        memory: `${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`
      })
    );
    return;
  }



let filePath ;

 // 2. Otherwise serve static files
if( req.url ==="/"){
    filePath = path.join(__dirname , "public" , "home.html");
}  else if( req.url ==="/image"){
    filePath =path.join(__dirname , "public" , "images" , "carImage.png");
}  else if(req.url =="/api/users"){
    filePath = path.join(__dirname , "data" , "data.json");
}  else {
    filePath = path.join(__dirname , "public" , req.url)
}

const extName = String(path.extname(filePath).toLowerCase());


// mimeType format : type/subtype

const mimeTypes ={
    ".html" : "text/html" ,
    ".css" : "text/css",
    ".js" : "text/javascript" ,
      ".txt" : "text/plain"  ,
      ".png" : "image/png" ,
      ".pdf" : "application/pdf" ,
      ".json" : "application/json"
}

const contentType = mimeTypes[extName] || "application/octet-stream"

// Decide encoding based on extension
const isTextFile = [".html", ".css", ".js", ".txt", ".json"].includes(extName);

fs.readFile(filePath , isTextFile? "utf-8" : null , (err , content)=>{

    if(err) { 
        res.writeHead(404 , { "Content-Type" : contentType});
         res.end("404 Page Not Found");
         return;
   }   else {
        res.writeHead(200 , { "Content-Type" : contentType});
        res.end(content);
    }

        
})

})

 server.listen(PORT , ()=>{
    console.log(`server is listening at ${PORT}`);
 })