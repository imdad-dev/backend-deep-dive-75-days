 // Type Assertion, unknown & never
 

// Type Assertion: compiler ko batana ki value ka expected type kya hai.-
let response: any = "234";

let numericLength: number = (response as string).length;

// ---------------------------------
// JSON Parsing with Type Assertion
// ---------------------------------

type Book = {
    name: string;
};

let bookString = '{"name":"Atomic Habit"}';

// JSON.parse() 'any' return karta hai.
// Assertion se expected object shape batate hain.
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

// ---------------------------------
// DOM Type Assertion
// ---------------------------------

// getElementById() generic element return karta hai.
// HTMLInputElement assert karne se input-specific properties milti hain.

const inputElement =  document.getElementById("username") as HTMLInputElement;

 
// any vs unknown

// any → TypeScript type checking skip kar deta hai.
let value: any;

value = "String";
value = [234, 53, 53];
value = 34.4;

// Compile-time error nahi milega.
// Agar value string na hui to runtime error aa sakta hai.
value.toUpperCase();

// --------------------

// unknown → Safe alternative to any.
// Use karne se pehle type narrow karna zaroori hai.
let newValue: unknown;

newValue = "String";
newValue = [234, 53, 53];
newValue = 34.4;

// ❌ Error
// newValue.toUpperCase();

// Type Guard ke baad safe access.
if (typeof newValue === "string") {
    newValue.toUpperCase();
}

// ====================
// try...catch
// ====================

try {
    //
} catch (error) {

    // catch me error ka type unknown hota hai.
    // instanceof se Error object verify karte hain.
    if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
    }

    console.log(error);
}

// ====================
// Assertion Example
// ====================

let data: unknown = "chai aur code se data fail ho gaya";

// Assertion compiler ko trust karne ke liye bolti hai.
// Runtime par koi validation nahi hoti.
const strData: string = data as string;

// ====================
// never
// ====================

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {

    if (role === "admin") {
        console.log("Redirect to Admin Dashboard");
        return;
    }

    if (role === "user") {
        console.log("Redirect to User Dashboard");
        return;
    }

    if (role === "superadmin") {
        console.log("Redirect to Super Admin Dashboard");
        return;
    }

    // Exhaustive Check
    // Agar future me Role me nayi value add hogi,
    // to TypeScript yahan error dikhayega.
    const exhaustiveCheck: never = role;
}

// --------------------

// never ka matlab function kabhi successfully return nahi karega.
function neverReturn(): never {
    while (true) {}
}