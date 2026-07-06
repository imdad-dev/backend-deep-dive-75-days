const path = require("path")
const myURL = new URL("https://chat.openai.com/chat?id=101&lang=en");

// console.log(myURL);

/* output : 

     URL {
  href: 'https://chat.openai.com/chat?id=101&lang=en',
  origin: 'https://chat.openai.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'chat.openai.com',
  hostname: 'chat.openai.com',
  port: '',
  pathname: '/chat',
  search: '?id=101&lang=en',
  searchParams: URLSearchParams { 'id' => '101', 'lang' => 'en' },
  hash: ''
}
*/

const filePath = path.join(__dirname , "public");

const url = myURL.parse(filePath , true);
console.log(url)

// how to get id and lang 

// searchParams is not a plain object  , its speacial class URLSearchParams, you must use its methods to interact with data.
// console.log(myURL.searchParams.get("id"));
// console.log(myURL.searchParams.get("lang"));

// apend new quary parameter 

 
myURL.searchParams.append("page" , "7");
myURL.searchParams.append("limit" , "20");
 

// apend hash , username , password 
myURL.hash ="installation";
myURL.username = "ImdadBhai"
myURL.password = "Loginpassword@123"
// console.log(myURL.href)   // https://ImdadBhai:Loginpassword%40123@chat.openai.com/chat?id=101&lang=en&page=7&limit=20#installation


// 👉 Task: Write logic that updates these values dynamically when a user requests page 8 with limit 50.

const updatePagination =(page , limit) =>{
    myURL.searchParams.set("page" , page);
    myURL.searchParams.set("limit" , limit);
    // console.log(myURL.href)
}

// user req page 8 

updatePagination(8 , 50)
 

// 👉 Task: Replace it with lang=fr to simulate switching the app to French.
myURL.searchParams.set("lang" , "fr")

/* 
Add multiple tag filters: tag=nodejs, tag=backend.
👉 Task: Append both and then log myURL.searchParams.getAll("tag").
Expected output:  */

myURL.searchParams.append("tag" , "nodejs")
myURL.searchParams.append("tag" , "backend dev")
myURL.searchParams.append("tag" , "mern stack")
myURL.searchParams.append("tag" , "full stack developer")

// console.log(myURL.searchParams.getAll("tag"))

/* 
Task 7: Credentials Toggle
Sometimes you need to add or remove credentials dynamically (like login/logout  */

const toggleCredentials = (username , password) =>{

        myURL.username = username ;
        myURL.password = password;
        // console.log(myURL.href)
}

  toggleCredentials("Imdadul" , "password@123");
  toggleCredentials("" , "");