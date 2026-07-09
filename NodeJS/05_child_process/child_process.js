const { exec , spawn } = require("child_process");


// ===exec =======//
// exec("node -v", (error, stdout, stderr) => {
//   if (error) {
//     console.error("Exec Error:", error.message);
//     return;
//   }
//   if (stderr) {
//     console.error("Exec Stderr:", stderr);
//     return;
//   }
//   console.log("Exec Output:", stdout); // Example: v20.11.0
// });




const list =
  process.platform === "win32"
    ? spawn("cmd.exe", ["/c", "dir"]) // Windows
    : spawn("ls", ["-lh"]);           // Linux/Mac

list.stdout.on("data", (data) => {
  console.log(`Spawn Output:\n${data}`);
});

list.stderr.on("data", (data) => {
  console.error(`Spawn Error:\n${data}`);
});

list.on("close", (code) => {
  console.log(`Spawn exited with code ${code}`);
});
