 import readline from "readline";
import chalk from "chalk";
import { commands, history } from "./command/index.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:
    chalk.green.bold("imdad") +
    chalk.white("@") +
    chalk.blue("dev-cli") +
    chalk.white(":~$ "),
});

// show banner once on startup
console.log(commands.banner());
console.log(chalk.gray('Type "help" to get started.\n'));

rl.prompt();

rl.on("line", (line) => {
  const input = line.trim();

  if (input === "exit") {
    rl.close();
    return;
  }

  const [rawCmd, ...args] = input.split(" ");
  const cmd = rawCmd.toLowerCase(); // normalize so "WHOAMI" === "whoami"
  const handler = commands[cmd];

  if (handler) {
    try {
      const output = handler(args);
      if (output) console.log(output);
      if (input) history.push(input); // only record valid, non-empty commands
    } catch (err) {
      console.log(chalk.red(`Error running command "${cmd}": ${err.message}`));
    }
  } else if (input) {
    console.log(chalk.red(`command not found: ${cmd}`));
  }

  rl.prompt();
});

rl.on("close", () => {
  console.log(chalk.gray("\nSession ended."));
  process.exit(0);
});