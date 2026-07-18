// TypeScript: Type Annotation & Inference


// Type Annotation (manual type)--> samjhana padtha h 
let userName: string = "Imdadul";
userName = "Haan Ji"; // ✅
// userName = 25;     // ❌

// Type Inference (TS guesses type) --> smjdhar h 
let userName2 = "Imdadul";
userName2 = "Hello"; // ✅
// userName2 = 25;   // ❌




// ================================
// Primitive Types
// ================================

// 1. string -> text
let name: string = "Imdadul";

// 2. number -> integer & decimal
let age: number = 21;
let price: number = 99.99;

// 3. boolean -> true / false
let isLoggedIn: boolean = true;

// 4. bigint -> very large integers
let bigNumber: bigint = 12345678901234567890n;

// 5. null -> intentionally empty
let data: null = null;

// 6. undefined -> not assigned
let value: undefined = undefined;



let studentName: string = "Imdadul";
let semester: number = 5;
let passed: boolean = true;
let salary: bigint = 9007199254740993n;
let selectedUser: null = null;
let apiResponse: undefined = undefined;

console.log(studentName);  
console.log(semester);
console.log(passed);
console.log(salary);
console.log(selectedUser);  // // // null -> Value is intentionally empty.
console.log(apiResponse);  // undefined -->Variable exists, but no value is assigned yet.


