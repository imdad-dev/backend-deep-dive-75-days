const { log } = require("console");
const crypto = require("crypto");

// console.log(crypto);  very long object 

// Generating Random Values
const token = crypto.randomBytes(8).toString("hex")  // bytes 8 but to hex --> 16 ( double)
// console.log(token)

// Hashing Data
const hashedData = crypto.createHash("sha256").update("My_password").digest("hex");
const hashedData2 = crypto.createHash("sha256").update("My_password").digest("hex");

// console.log(hashedData)   // 2b12b810442fe4bad5ebf69acb5df3978b39a042edc8e09bbffce9690e96548e
 
// console.log(hashedData2)    // 2b12b810442fe4bad5ebf69acb5df3978b39a042edc8e09bbffce9690e96548e



// hashed with secret 

const hashedWithSecret = crypto.createHmac("sha256" , "my_secret").update("my_password").digest("hex");

console.log(hashedWithSecret);


 /*  Generate Secure Reset Tokens (randomBytes + createHash)
Imagine you’re building a password reset system. You need a random token that can’t be guessed.  */


// Step 1: Generate random token
const resetToken = crypto.randomBytes(32).toString("hex");

// Step 2: Hash it before storing in DB (so even if DB leaks, token isn’t exposed)
const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

console.log("Send to user:", resetToken);   // goes in reset link
console.log("Store in DB:", hashedToken);   // safe storage
