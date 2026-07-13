# CLI Portfolio App 

## Project: Interactive Linux-style CLI Shell (Node.js)

---

## Tasks

[x] ### Task 1a: Base REPL setup
- Imported `readline`, created the `readline.createInterface` (input/output/prompt)
- Defined initial `commands` object with all handlers (help, whoami, date, clear, about, skills, projects, contact, github, resume, echo, history, sudo, exit)
- Wired up `rl.on('line', ...)` to parse input, look up handler, call it, print output
- Wired up `rl.on('close', ...)` to end session cleanly

[x] ### Task 1b: History tracking (initial)
- Added `history` array to record every non-empty command typed
- Added `history` command handler to print recorded commands with index numbers

[x] ### Task 2: Modularize commands
- Moved `commands` object out of `index.js` into `commands/index.js`
- Exported `commands` (and `history`) from the module
- Updated `index.js` to `require('./commands')` instead of inline definition
- Verified `help`, `whoami`, `history`, `echo test` still work after refactor

[x] ### Task 3: Fix history tracking + input validation / error handling
- Moved `history.push(input)` to only happen when there's valid output (avoids junk entries for empty/invalid input)
- `history` array now lives in `commands/index.js`, exported alongside `commands`
- `index.js` destructures both from the same `require('./commands')` call so they share the same reference
- Normalized `cmd` to lowercase before lookup (`WHOAMI` now resolves same as `whoami`)
- Guarded `echo` for empty args -> returns usage hint
- Guarded `sudo` for missing `args[0]` -> returns usage hint; confirmed fallback "Sorry..." still fires for any non-`hire-me` argument
- Wrapped `handler(args)` call in `try/catch` in `index.js` so one broken command can't crash the REPL

[x] ### Task 4: Dynamic help + banner command (with chalk)
- Added `banner` command using `chalk` (v4, CommonJS-compatible) for styled terminal text
- Refactored `help` to build its output dynamically from `Object.keys(commands)` instead of a hardcoded string
- `help` now auto-lists every command (including `banner`) without manual edits whenever a new command is added
- Confirmed `banner` and `help` both render correctly, with `help` showing all command names sorted and colorized

[x] ### Task 5: Flags + clickable links + full styling pass
- `history --clear` flag added (wipes shared array via `.length = 0`)
- `contact`/`github` now use `open` package to launch URLs in default browser, with terminal confirmation message
- Full chalk styling pass: colored prompt, boxed `banner`, colorized `help`/`skills`/`projects`/`sudo`/`history` output
- `package.json` set to `"type": "module"` for ESM `import`/`export` syntax

[ ] ### Task 6: github and linkedin  directly open into browser using open npm package 

---

