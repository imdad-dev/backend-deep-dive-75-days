// Class & Object

class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai("Ginger", 25);
masalaChai.flavour = "Masala";


// Access Modifiers

class Chai2 {
    public flavour = "Masala";
    private secretIngredient = "Cardamom";

    reveal() {
        return this.secretIngredient;
    }
}

const c = new Chai2();

c.flavour;   // ✅ public
c.reveal();  // ✅ private access through method
// c.secretIngredient; // ❌


// Protected

class Shop {
    protected shopName = "Chai Corner";
}

class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}

new Branch().getName();


// ECMAScript Private Field (#)

class Wallet {
    #balance = 100;

    getBalance() {
        return this.#balance;
    }
}

const w = new Wallet();
w.getBalance();


// Readonly

class Cup {
    readonly capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}


// Getter & Setter

class ModernChai {
    private _sugar = 2;

    get sugar() {
        return this._sugar;
    }

    set sugar(value: number) {
        if (value > 5) {
            throw new Error("Too much sweet");
        }

        this._sugar = value;
    }
}

const modernChai = new ModernChai();

modernChai.sugar;     // getter
modernChai.sugar = 4; // setter


// Static

class EkChai {
    static shopName = "Imdad-Cafe";

    constructor(public flavour: string) {}
}

console.log(EkChai.shopName);


// Abstract Class

abstract class Drink {
    abstract make(): void;
}

class MyClass extends Drink {
    make() {
        console.log("Brewing Chai");
    }
}


// Composition (HAS-A)

class Heater {
    heat() {
        console.log("Heating...");
    }
}

class MakeChai {
    constructor(private heater: Heater) {}

    make() {
        this.heater.heat();
    }
}

const chai = new MakeChai(new Heater());
chai.make();