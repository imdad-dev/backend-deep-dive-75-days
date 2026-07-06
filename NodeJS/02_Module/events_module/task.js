
/*
Create a custom EventEmitter system in Node.js.

Emit multiple types of events: "login", "logout", "purchase", "profileUpdate",  .

Attach listeners for each event type that:

a). Logs when the event occurs.

b) . Increments a counter for that event type.

Maintain an internal tracker object that counts how many times each event has been emitted.

Add a special "summary" event:  When triggered, it prints a summary report showing the total occurrences of each event type.
*/

const EventEmitter = require("events");
const fs = require("fs");

const emitter = new EventEmitter();

// Load previous counts if file exists, otherwise start fresh
let eventCounts = {
  userLogin: 0,
  userLogOut: 0,
  itemPurchase: 0,
  profileUpdate: 0,
};

const logFile = "./logs.json";

// Read existing counts from file
if (fs.existsSync(logFile)) {
  try {
    const data = fs.readFileSync(logFile, "utf-8");
    eventCounts = JSON.parse(data);
  } catch (err) {
    console.error("Error reading log file:", err);
  }
}

// Event listeners increment counters
emitter.on("userLogin", ({ username }) => {
  console.log(`${username} logged in`);
  eventCounts.userLogin++;
});

emitter.on("userLogOut", ({ username }) => {
  console.log(`${username} logged out`);
  eventCounts.userLogOut++;
});

emitter.on("itemPurchase", ({ itemName, price }) => {
  console.log(`${itemName} purchased for ${price}`);
  eventCounts.itemPurchase++;
});

emitter.on("profileUpdate", ({ username, prof }) => {
  console.log(`${username} updated profile to: ${prof}`);
  eventCounts.profileUpdate++;
});

// Special summary event
emitter.on("summary", () => {
  const summaryObject = {
    timestamp: new Date().toISOString(),
    summary: eventCounts,
  };

  console.log("Event Summary:", summaryObject);

  // Overwrite file with updated counts (persistent storage)
  fs.writeFileSync(logFile, JSON.stringify(eventCounts, null, 2));
});

// Emit some events
emitter.emit("userLogin", { username: "Imdad" });
emitter.emit("userLogOut", { username: "Imdad" });
emitter.emit("itemPurchase", { itemName: "Biscuit", price: 50 });
emitter.emit("profileUpdate", { username: "Imdad", prof: "Backend Developer" });

// Trigger summary
emitter.emit("summary");
