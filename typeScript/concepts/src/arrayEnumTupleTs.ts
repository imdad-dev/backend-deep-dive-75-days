// Arrays

const chaiFlavour: string[] = ["Masala Chai", "Lemon Chai"];

// Common syntax
const chaiPrice: number[] = [40, 25, 40];

// Generic syntax
const rating: Array<number> = [4.5, 5.0, 4];

// Array of Objects

type Chai = {
  name: string;
  price: number;
};

const chaiMenu: Chai[] = [
  { name: "Lemon Chai", price: 30 },
  { name: "Kadak Chai", price: 20 },
];

chaiMenu.push({ name: "Adrak Chai", price: 34 });

// Readonly Array

const favouriteCities: readonly string[] = [
  "Bangalore",
  "Hyderabad",
  "Greater Noida",
  "Gurgaon",
];

// favouriteCities.push("Pune");  // not allow

// 2D Array

const table: number[][] = [
  [324, 53, 34],
  [2, 53, 53],
];

// Tuple

let chaiTuple: [string, number];

chaiTuple = ["Masala", 34];
// chaiTuple = [34, "Masala"]; ❌

// Optional Tuple

let userInfo: [string, number, boolean?];

userInfo = ["Imdadul", 21];
userInfo = ["Imdadul", 21, true];

// Readonly Tuple

const location: readonly [number, number] = [234.5, 24.22];

// Named Tuple

const nameTuple: [name: string, price: number] = ["Masala", 20];

// Numeric Enum

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

// Custom Numeric Enum

enum Status {
  PENDING = 100,
  SERVER,
  CANCELED,
}

// String Enum

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
  LEMON = "lemon",
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type} chai`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala"); ❌

// Heterogeneous Enum (Rare)

enum RandomEnum {
  ID = 1,
  NAME = "imdad",
}

// Const Enum

const enum Sugar {
  LOW = 1,
  MEDIUM = 3,
  HIGH = 5,
}

const s = Sugar.HIGH;

// Tuple Note

let t: [string, number] = ["Chai", 20];

// Allowed, but not recommended
t.push("Extra");