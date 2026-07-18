
const chai ={
     name : "Masala chai" ,
     price : 32 ,
     isHot : true ,
};


// auto interfer 
// {
//     name : string;
//     price : number;
//     isHot : boolean;
// }

let tea : {
    name : string ;
    price : number;
    isHot : boolean;
};

tea ={
    name :"ginger tea" ,
    price : 25,
    isHot : true
};

// Alias object 

 type Tea = {
    name : string ;
    price : number;
    inGredients : string[]
};

const adrakChai : Tea ={
    name : "adrak Chai" ,
    price :20,
    inGredients : ["ginger" , "sugar" ,"water"]
};


// duck typing "If it looks like a duck and walk like a duck, TypeScript treats it as a duck." 🦆

type Cup  ={ size : string};

let smallCup : Cup ={ size : "200ms"};

let bigCup   ={ size : "250ms" , material : "steel"};

smallCup =bigCup;

type Brew = { brewTime : number };

let coffe = { brewTime : 24 , bean : "african"};

let ChaiBrew : Brew = coffe;  

type User ={
    username : string;
    password : string;
};

const user : User = {
  username : "Imdadul" ,
  password : "secure123" ,
};

// Splitting / Extracting Types
// Break large objects into reusable types

type Item = { name : string ; quantity : number};
type Address ={street : string; pin : number};

type Order ={
    id : string;
    item : Item[];
    address : Address;
};


type Chai ={
    name : string ;
    price : number;
    isHot : true;
};

// all propeter optional 
const updateChai=( update :  Partial<Chai>)=>{
        console.log("Updated Chai");
        
};

updateChai({ name : "kadhad Chai "  , price : 30});
updateChai({});  // can be empty object

type ChaiOrder ={
    name? : string;
    price?: number;
};

// Required<T>
// Makes every property required

const placeOrder =(order : Required<ChaiOrder>)=>{
    console.log(order);
};

placeOrder({ name : "Kulhad Chai " , price : 40});


// Pick<T, Keys>
// Select only specific properties

const PickOrder =(order : Pick<Chai , "name" |"price">) =>{
    console.log("Pick only value name and price");
};

PickOrder({
    name : "lemon Tea" ,
    price : 25,
});


// Omit<T, Keys>
// Remove unwanted properties

type User1 ={
    id : string
    username : string;
    password : string;
    isVerify : boolean;
};

 type safeuser =Omit<User1 , "password">;    