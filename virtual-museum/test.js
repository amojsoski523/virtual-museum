const packageJson = require('./package.json');

console.log("Hello World! Virtual Museum setup is working!");
console.log("Testing dependencies:");
console.log("React version:", packageJson.dependencies.react);
console.log("Three.js version:", packageJson.dependencies.three);
console.log("Express version:", packageJson.dependencies.express);
console.log("Mongoose version:", packageJson.dependencies.mongoose); 