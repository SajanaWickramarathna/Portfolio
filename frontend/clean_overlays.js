const fs = require('fs');
const files = ['about.js', 'Artical.js', 'contact.js', 'home.js', 'project.js', 'roadmap.js', 'services.js', 'skills.js'];

for (const file of files) {
  let content = fs.readFileSync('src/pages/' + file, 'utf8');

  // Strip anything that looks like the overlay
  content = content.replace(/\{\/\* Overlay \*\/\}\s*<div className=\"absolute inset-0 [^\"]+\" \/>/g, '');
  
  // Just in case, strip absolute inset-0 bg-gradient... without comment
  content = content.replace(/<div className=\"absolute inset-0 bg-gradient-[^\"]+\" \/>/g, '');

  fs.writeFileSync('src/pages/' + file, content);
  console.log('Cleaned overlays from ' + file);
}
