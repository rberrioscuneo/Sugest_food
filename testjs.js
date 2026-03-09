const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');
try {
  new Function(code);
  console.log("Syntax is OK!");
} catch (e) {
  console.error("Syntax Error:", e);
}
