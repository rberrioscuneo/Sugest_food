const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// Quick and dirty syntax check
try {
  new Function(content);
  console.log("Syntax check passed.");
} catch (e) {
  console.error("Syntax error in app.js:", e.message);
}
