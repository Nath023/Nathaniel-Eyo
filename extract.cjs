const fs = require('fs');
const content = fs.readFileSync('app_bundle.js', 'utf8');
const strings = content.match(/"(?:[^"\\]|\\.)*"/g) || [];
const texts = strings.map(s => s.slice(1, -1))
  .filter(s => s.length > 20 && !s.match(/^[a-zA-Z0-9_\-\.\/]+$/) && s.includes(' '));
console.log(Array.from(new Set(texts)).join('\n'));
