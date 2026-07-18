// "A variable can store ONE of multiple allowed types or values." */

// 1. Union of Types

let subscriber: string | number = 54;

subscriber = 100;    // ✅ number
subscriber = "1M";   // ✅ string

// subscriber = true; // ❌ boolean is not allowed


// 2. Union of Literal Values

/*
Only the listed values are allowed.
*/
let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success"; // ✅
// apiRequestStatus = "loading"; // ❌



// 3. Real-World Example

let airlineSeat: "aisle" | "window" | "middle" = "aisle";

airlineSeat = "window"; // ✅
// airlineSeat = "front"; // ❌



// 4. Union with undefined

/*
currentOrder may be:
1. a number
2. undefined (if not found)
*/

const orders = [23, 53, 521, 10, 20, 30];

let currentOrder: number | undefined;

for (const order of orders) {
  if (order === 10) {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder); // 10


// Example: value not found

const numbers = [1, 2, 3];

let result: number | undefined;

for (const num of numbers) {
  if (num === 100) {
    result = num;
    break;
  }
}

console.log(result); // undefined


/*
⚠️ Avoid using 'any' unless absolutely necessary.
*/


// 1. Basic Example


let data: any = "Imdadul";

data = 21;         // ✅
data = true;       // ✅
data = [1, 2, 3];  // ✅
data = { name: "Imdadul" }; // ✅



// 2. No Type Checking

let value: any = "Hello";

value.toUpperCase(); // ✅

value = 100;

value.toUpperCase(); // ❌ No TypeScript error
                     // Runtime Error (number has no toUpperCase())



// 3. Real-World Example


// API response can have different shapes
let apiResponse: any;

apiResponse = {
  id: 1,
  name: "Imdadul",
};

apiResponse = ["Apple", "Banana"];

apiResponse = "Server Error";


// 4. Why avoid 'any'?


let userName: any = "Imdadul";

userName = 100;

// TypeScript won't stop this
userName.toUpperCase(); // ❌ Runtime Error


// Better Alternative

// Instead of:
let user: any;

// Prefer specific types
let name: string;
let age: number;

// Or use union types
let res: string | number;

