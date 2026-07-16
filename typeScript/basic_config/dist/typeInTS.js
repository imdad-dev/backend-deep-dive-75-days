"use strict";
// ================================
// TypeScript: Type Annotation & Inference
// ================================
Object.defineProperty(exports, "__esModule", { value: true });
// Type Annotation (manual type)--> samjhana padtha h 
let userName = "Imdadul";
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
let name = "Imdadul";
// 2. number -> integer & decimal
let age = 21;
let price = 99.99;
// 3. boolean -> true / false
let isLoggedIn = true;
// 4. bigint -> very large integers
let bigNumber = 12345678901234567890n;
// 5. null -> intentionally empty
let data = null;
// 6. undefined -> not assigned
let value = undefined;
// ================================
// Practice
// ================================
let studentName = "Imdadul";
let semester = 5;
let passed = true;
let salary = 9007199254740993n;
let selectedUser = null;
let apiResponse = undefined;
console.log(studentName);
console.log(semester);
console.log(passed);
console.log(salary);
console.log(selectedUser);
console.log(apiResponse);
// ================================
// Quick Revision
// ================================
/*
string     -> "Hello"
number     -> 100, 99.5
boolean    -> true / false
bigint     -> 123456789n
null       -> empty value
undefined  -> not assigned

Annotation -> let age: number = 21;
Inference  -> let age = 21;
*/ 
//# sourceMappingURL=typeInTS.js.map