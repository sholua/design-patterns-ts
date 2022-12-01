// The proxy pattern lets you provide a substitute or placeholder for another object to control access to it.
const original = { name: "jeff" };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log("Tracking: ", key);
    return target[key];
  },
  set(target, key, value) {
    console.log("updating UI...");
    return Reflect.set(target, key, value);
  },
});

reactive.name; // 'Tracking: name'

reactive.name = "bob"; // 'updating UI...'
