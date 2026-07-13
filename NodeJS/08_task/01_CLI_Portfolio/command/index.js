import chalk from "chalk";
import  open from "open";
// history needs to live outside any function, so it persists across calls
const history = [];

// small helper to draw a boxed banner without needing an image/ascii-art lib
function boxLine(text, width) {
  const pad = width - text.length;
  const left = Math.floor(pad / 2);
  const right = pad - left;
  return "│" + " ".repeat(left) + text + " ".repeat(right) + "│";
}

function drawBanner() {
  const lines = [
    "IMDAD",
    "Backend / MERN Stack Developer",
    'Type "help" to see available commands',
  ];
  const width = Math.max(...lines.map((l) => l.length)) + 4;
  const top = "┌" + "─".repeat(width) + "┐";
  const bottom = "└" + "─".repeat(width) + "┘";

  const styled = [
    chalk.cyan(top),
    chalk.cyan("│") + chalk.cyan.bold(centerPad(lines[0], width)) + chalk.cyan("│"),
    chalk.cyan("│") + chalk.gray(centerPad(lines[1], width)) + chalk.cyan("│"),
    chalk.cyan("│") + chalk.gray(centerPad(lines[2], width)) + chalk.cyan("│"),
    chalk.cyan(bottom),
  ];
  return styled.join("\n");
}

function centerPad(text, width) {
  const pad = width - text.length;
  const left = Math.floor(pad / 2);
  const right = pad - left;
  return " ".repeat(left) + text + " ".repeat(right);
}

const commands = {
  whoami: () => "imdad",

  date: () => new Date().toString(),

  clear: () => {
    process.stdout.write("\x1Bc"); // clears the terminal
    return "";
  },

  banner: () => drawBanner(),

  about: () =>
    chalk.bold("Imdad") +
    " — Backend / MERN stack developer.\n" +
    "B.Tech CSE @ Assam University (Central), Silchar.",

  skills: () =>
    chalk.yellow("Backend: ") + "Node.js, Express, MongoDB, REST APIs, JWT Auth\n" +
    chalk.yellow("Frontend: ") + "React, Vite, Tailwind CSS",

  projects: () =>
    chalk.green("- Blogify   ") + "(Node/Express/MongoDB blogging platform)\n" +
    chalk.green("- URL Shortener ") + "(link analytics)\n" +
    chalk.green("- SkillPath ") + "(React learning roadmap)",

  contact: () =>open("https://linkedin.com/in/imdad-dev"),

  github: () => open("https://github.com/imdad-dev"),

  resume: () => "Resume link coming soon",

  // args = everything typed after "echo"
  echo: (args) => {
    if (args.length === 0) return chalk.gray("usage: echo <text>");
    return args.join(" ");
  },

  history: (args) => {
    if (args.includes("--clear")) {
      history.length = 0; // wipes the shared array in place
      return chalk.gray("History cleared.");
    }
    if (history.length === 0) return chalk.gray("(empty)");
    return history.map((h, i) => chalk.gray(`  ${i + 1}  `) + h).join("\n");
  },

  // args[0] is the word right after "sudo"
  sudo: (args) => {
    if (!args[0]) return chalk.gray("usage: sudo <hire-me>");
    if (args[0] === "hire-me")
      return chalk.green("Permission granted. Initiating hiring sequence... ✅");
    return chalk.red("Sorry, imdad is not allowed to sudo that.");
  },
};

// attached last so Object.keys(commands) already includes every other command
commands.help = () =>
  chalk.bold("Available commands:\n") +
  Object.keys(commands)
    .sort()
    .map((cmd) => "  " + chalk.green(cmd))
    .join("\n");

export { commands, history };