// Type Narrowing Examples

// Narrow using typeof
function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }

    return `Chai order #${kind}`;
}

// Truthiness Narrowing
function getMessage(msg: string) {
    if (msg) {
        return `Serving ${msg}`;
    }

    return "Serving default message";
}

// Equality Narrowing
function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return "Small cutting chai";
    }

    if (size === "medium" || size === "large") {
        return `Making ${size} chai`;
    }

    return `Chai order #${size}`;
}

// instanceof Narrowing
class KulhadChai {
    serve() {
        return "Serving Kulhad Chai";
    }
}

class CuttingChai {
    serve() {
        return "Serving Cutting Chai";
    }
}

function serveChai(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }

    return chai.serve();
}

// Custom Type Guard
type ChaiOrder = {
    type: string;
    sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}

function serve(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} with ${item.sugar} sugar`;
    }

    return `Serving custom chai: ${item}`;
}

// Discriminated Union
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; tasteRate: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return "Making Masala Chai";

        case "ginger":
            return "Making Ginger Chai";

        case "elaichi":
            return "Making Elaichi Chai";
    }
}

// 'in' Operator Narrowing
function brew(order: MasalaChai | GingerChai) {
    if ("spiceLevel" in order) {
        return `Spice level: ${order.spiceLevel}`;
    }
}