// Function Parameter Types
 
type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

// ======================================
// Class implements Object Type
// ======================================

type TeaRecipe = {
  water: number;
  milk: number;
};

class MakeChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

 
// Interface + implements
 
interface CupSize {
  size: "small" | "large";
}

class Cup implements CupSize {
  size: "small" | "large" = "large";
}

// ======================================
// Union Type
// Classes cannot implement union types
// ======================================

type Response = { ok: true } | { ok: false };

// ❌ Not Allowed
// class MyResponse implements Response {}

 
// Literal Union
 

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(type: TeaType) {
  console.log(type);
}

// ======================================
// Intersection Type (&)
// Combine multiple object types
// ======================================

type BaseChai = {
  teaLeaves: number;
};

type ExtraIngredients = {
  masala: number;
};

type MasalaChai = BaseChai & ExtraIngredients;

const cup: MasalaChai = {
  teaLeaves: 563,
  masala: 2,
};

 
// Optional Property (?)
 
type User = {
  username: string;
  bio?: string;
};

const user1: User = {
  username: "Imdad",
};

const user2: User = {
  username: "Imdad",
  bio: "Full Stack Developer",
};

 
// Readonly Property
 

type Config = {
  readonly appName: string;
  version: number;
};

const config: Config = {
  appName: "Masterji",
  version: 42,
};

// ❌ Error
// config.appName = "imdad.dev";