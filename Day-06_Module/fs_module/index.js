const fs = require("fs");

//1. create a file text.txt and write some content into it , then append something 

// fs.writeFile("text.txt", "Backend mastery with nodejs" , (err)=>{
      
//     if(err) return console.log(err);
//     console.log("write file Successfully");

//  // after finished write file then execute append  child 
//     fs.appendFile("text.txt" , "\nPractice fs module" , (err)=>{
//     if(err) return console.log(err);
//     console.log("append succesfully");
// })

// } )


// read file and logs 

// fs.readFile("text.txt" , "utf-8" , (err , data)=>{
    
//     if(err) return console.log("file does not exist" ,err);

//     console.log("text file data is \n" , data)
// })



// // delete file 

// fs.unlink("text.txt" , (err)=>{

//     if(err) {
//         console.log("File Already deleted \n" , err);
//         return ;
//     }
//     console.log("file delete successfully");
// })


 // create folder , add file and list them 

//  fs.mkdir("backend-practice" , (err) =>{
   
//     if(err) return console.log("File directory creation error " , err);

//     console.log("folder created!");

//     // add 3 file 
//     fs.writeFile("backend-practice/day1.txt" , "Day1 practice done " , (err)=>{ if(err) return ;})
//     fs.writeFile("backend-practice/day2.txt" , "Day2 practice done " , (err)=>{ if(err) return ;})
//     fs.writeFile("backend-practice/day3.txt" , "Day3 practice progress " , (err)=>{ if(err) return ;

//  // list them 

//  //  readdir write in nested callback bez this all are asynch , and before execution writefile  execution readdir and no list file [ ]
//   fs.readdir("backend-practice" , (err , files)=>{
//      if(err) return ;

//      console.log("List Down file : " , files)
//   })
//     })


//  })



// count how many time appear Node.js in day3.txt

fs.appendFile("backend-practice/day3.txt" ,
    "Node.js Node.js Node.js Node.js Node.js " ,
    (err) =>{
        if (err) return console.log("file does not exist");


        fs.readFile("backend-practice/day3.txt"  , "utf-8" , (err , data) =>{
             if (err) return ;

              const word = "Node.js" ;
              const count = data.split(word).length -1;

              console.log(`${word} appears ${count} times`)
              console.log("All word " + data.split() );
        })
    }
)