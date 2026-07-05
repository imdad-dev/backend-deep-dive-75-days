const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os")

const PORT = 3000;

 const server = http.createServer( ( req , res) =>{

  
  console.log("req url is " , req.url =="/" ?"home.html" : req.url);
       
      if(req.url === "/"){
      
         const filePath = path.join(__dirname , "public" , "home.html");

         fs.readFile(filePath , (err , data)=>{

          if(err) return console.log("File does not exit : " , err);

             return res.end(data)
         })
  return;
      }

      if(req.url === "/image"){
                const filePath = path.join(__dirname , "public/images" , "carImage.png");

         fs.readFile(filePath , (err , data)=>{

          if(err) return console.log("File does not exit : " , err);

             return res.end(data) 
         })
        return;
      }


      if (req.url === "/about"){
           const filePath = path.join(__dirname , "public" , "about.html");

         fs.readFile(filePath , (err , data)=>{

          if(err) return console.log("File does not exit : " , err);

             return res.end(data) 
      })
      return ;
    }

    // json api 
    
    if(req.url ==="/api/users"){
    const filePath = path.join(__dirname , "data" , "data.json");

    fs.readFile(filePath , "utf-8" , ( err , data)=>{
      
          if(err) return console.log("File does not exit : " , err);

             return res.end(data) 
    })

      return ;
    }
 

    // Generate Token 
if(req.url ==="/token"){
   
   const token = crypto.randomBytes(32).toString("hex");

   res.end(token)
}

  // Server Info
    if (req.url === "/server") {

        res.setHeader("Content-Type", "application/json");

        return res.end(
            JSON.stringify({
                platform: os.platform(),
                cpu: os.cpus().length,
                memory: `${(os.totalmem()/1024**3).toFixed(2)} GB`
            })
        );

    } 

    res.statusCode =404;
    return res.end( "Page not found");
 

})

  

 server.listen(PORT , ()=>{
    console.log(`server is listening at ${PORT}`);
 })