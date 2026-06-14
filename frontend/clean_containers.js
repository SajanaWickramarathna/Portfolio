const fs = require('fs');
const files = ['about.js', 'Artical.js', 'contact.js', 'home.js', 'project.js', 'roadmap.js', 'services.js', 'skills.js'];

for (const file of files) {
  let content = fs.readFileSync('src/pages/' + file, 'utf8');

  // Remove bg- colors from root relative div
  content = content.replace(/className=\"relative([^\"]*)bg-\\[#0D1117\\]([^\"]*)\"/g, 'className=\"relative$1$2\"');
  content = content.replace(/className=\"relative([^\"]*)bg-\\[#161B22\\]([^\"]*)\"/g, 'className=\"relative$1$2\"');
  content = content.replace(/className=\"relative([^\"]*)bg-\\[#070B14\\]([^\"]*)\"/g, 'className=\"relative$1$2\"');

  // Also remove it from section if it exists
  content = content.replace(/<section([^>]*)bg-\\[#0D1117\\]([^>]*)>/g, '<section$1$2>');
  content = content.replace(/<section([^>]*)bg-\\[#161B22\\]([^>]*)>/g, '<section$1$2>');
  content = content.replace(/<section([^>]*)bg-\\[#070B14\\]([^>]*)>/g, '<section$1$2>');

  fs.writeFileSync('src/pages/' + file, content);
  console.log('Cleaned container bg from ' + file);
}
