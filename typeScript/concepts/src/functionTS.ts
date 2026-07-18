function makeChai (type : string , cups : number) : string {
    return `Making ${cups} cups ${type} Chai `
};

makeChai("Masala chai" , 2);


function getChaiPrice():number {
    return 30;
};


function getOrder (order : string){
     if(!order) return null;
     return order;
};


// logger function 

function logChai () : void{
    console.log("Chai is ready ....")
};

// optional parameter & default parameter

function orderChai1(type?:string){
}

function orderChai2(type:string = "Masala chai"){
};


function createOrder( order : {
    type : string;
    sugar : number;
    size : "small" | "large"
}) :string  {
    return `this function always return a string`
};


// function type

let calculate : (a: number, b: number) =>number;

calculate =(a, b ) =>a+b;

// type allias 

type Add = (a: number, b: number) =>number;

let sum : Add = ( a, b) => a+b;

sum(234 , 43);


// ogject parameter

type Tea = {
    name: string;
    price: number;
};

function createTea(tea: Tea) {
    console.log(tea);
};

// rest operator 
function total(...prices: number[]) {
    return prices.reduce((sum, p) => sum + p, 0);
}

total(10, 20, 30);