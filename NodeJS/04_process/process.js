// ================== PROCESS PROPERTIES ==================

// Process ID
console.log("PID:", process.pid); 
// Output: PID: 9840

// Platform & Architecture
console.log("Platform:", process.platform); // win32
console.log("Arch:", process.arch);         // x64

// Command-line arguments
console.log("Args:", process.argv); 
// Output: [ "cwd" , " if other argv passes" ]

// Environment variables
console.log("NODE_ENV:", process.env.NODE_ENV); 
// Output: development

// Node.js version
console.log("Node Version:", process.version); 
// Output: v20.11.0


// ================== PROCESS METHODS ==================

// Memory usage
console.log("Memory:", process.memoryUsage());

// Uptime
console.log("Uptime (s):", process.uptime());

// CPU usage
console.log("CPU:", process.cpuUsage());

// High-resolution timer
const start = process.hrtime();
setTimeout(() => {
  const diff = process.hrtime(start);
  console.log(`Benchmark: ${diff[0]}s ${diff[1] / 1e6}ms`);
}, 500);

// Current working directory
console.log("CWD:", process.cwd());

// Change directory
// process.chdir("..");
// console.log("New CWD:", process.cwd());

// Exit code
process.exitCode = 0;
// process.exit(); // Uncomment to terminate


// ================== PROCESS EVENTS DEMO ==================

// Exit event
process.on("exit", (code) => {
  console.log(`Process exiting with code: ${code}`);
});

// BeforeExit event
process.on("beforeExit", (code) => {
  console.log(`Process will exit soon with code: ${code}`);
});

// SIGINT (Ctrl+C)
process.on("SIGINT", () => {
  console.log("Caught SIGINT. Exiting safely...");
  process.exit();
});

// SIGTERM (Docker/OS kill)
process.on("SIGTERM", () => {
  console.log("Caught SIGTERM. Graceful shutdown...");
  process.exit();
});

// Uncaught Exception
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});


// ================== NEXTTICK vs SETIMMEDIATE DEMO ==================

console.log("Start");

process.nextTick(() => {
  console.log("nextTick callback");
});

setImmediate(() => {
  console.log("setImmediate callback");
});

console.log("End");

// Output order:
// Start
// End
// nextTick callback
// setImmediate callback
