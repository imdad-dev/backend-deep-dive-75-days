// Runs multiple promises in parallel and waits until all succeed.

async function demoAll() {
  const p1 = Promise.resolve("A");
  const p2 = Promise.resolve("B");
  const p3 = Promise.resolve("C");

  const results = await Promise.all([p1, p2, p3]);
  console.log(results); // ["A", "B", "C"]
}
demoAll();



//  `Promise.race` : Runs multiple promises in parallel and returns the **first one that settles** (resolve or reject).

async function demoRace() {
  const p1 = new Promise(res => setTimeout(() => res("Fast"), 500));
  const p2 = new Promise(res => setTimeout(() => res("Slow"), 1000));

  const result = await Promise.race([p1, p2]);
  console.log(result); // "Fast"
}
demoRace();