 # 📘 Node.js `process` Cheat‑Sheet

## 🔹 Properties

| Property           | What It Returns                  | Example Output                              |
|--------------------|----------------------------------|---------------------------------------------|
| **process.pid**    | Process ID                       | `9840`                                      |
| **process.platform** | OS platform                    | `win32`, `linux`, `darwin`                  |
| **process.arch**   | CPU architecture                 | `x64`, `arm`                                |
| **process.argv**   | Command‑line arguments (array)   | `[ 'node', 'app.js', 'arg1' ]`              |
| **process.env**    | Environment variables (object)   | `{ PATH: '...', NODE_ENV: 'development' }`  |
| **process.version** | Node.js version string          | `v20.11.0`                                  |
| **process.versions** | Object of dependency versions  | `{ node: '20.11.0', v8: '11.2.214' }`       |
| **process.title**  | Process title (string)           | `node` or custom                            |
| **process.config** | Build configuration object       | Compiler flags, options                     |

---

## 🔹 Methods

| Method                  | Purpose                     | Real Use                                    |
|--------------------------|-----------------------------|---------------------------------------------|
| **process.exit()**       | Stop process immediately    | Fatal errors, emergency shutdown             |
| **process.exitCode**     | Set exit status code        | Graceful exit with status reporting          |
| **process.memoryUsage()**| Memory statistics (object)  | Detect memory leaks, monitor usage           |
| **process.uptime()**     | Running time (seconds)      | Health checks, monitoring                    |
| **process.cpuUsage()**   | CPU usage since start       | Performance profiling                        |
| **process.hrtime()**     | High‑resolution timer       | Benchmarking code execution                  |
| **process.cwd()**        | Current working directory   | File path resolution                         |
| **process.chdir(path)**  | Change working directory    | Switch project folders dynamically           |
| **process.kill(pid)**    | Send signal to a process    | Stop child processes safely                  |

---

## 🔹 Events

| Event               | Trigger                                | Real Use                                    |
|---------------------|----------------------------------------|---------------------------------------------|
| **beforeExit**      | When Node empties event loop            | Final cleanup tasks before natural exit      |
| **exit**            | Process is exiting                     | Log exit status, release resources           |
| **SIGINT**          | Ctrl + C in terminal                   | Stop dev server safely, close DB connections |
| **SIGTERM**         | OS/Docker sends termination signal     | Graceful shutdown in production              |
| **uncaughtException** | Error not caught anywhere            | Log error, clean up, exit                    |
| **unhandledRejection** | Promise rejection not handled        | Log rejection, clean up, exit                |
| **warning**         | Node.js emits a runtime warning         | Detect deprecated APIs or memory leaks       |

---

## 🔹 `process.nextTick()` vs `setImmediate()`

| Function                | When It Runs                                | Real Use                                    |
|--------------------------|---------------------------------------------|---------------------------------------------|
| **process.nextTick()**   | Runs immediately after current operation, before event loop continues | Handle micro‑tasks that must finish before I/O or timers |
| **setImmediate()**       | Runs on the next iteration of the event loop, after I/O events | Schedule callbacks that should not block current execution |

### Example

```js
console.log("Start");

process.nextTick(() => {
  console.log("nextTick callback");
});

setImmediate(() => {
  console.log("setImmediate callback");
});

console.log("End");

```
### Output : 
```
Start
End
nextTick callback      // runs first (microtask)
setImmediate callback  // runs later (macrotask)
