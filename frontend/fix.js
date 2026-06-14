const fs = require('fs');
const files = ['about.js', 'Artical.js', 'contact.js', 'home.js', 'project.js', 'roadmap.js', 'services.js', 'skills.js'];
for (const file of files) {
  let content = fs.readFileSync('src/pages/' + file, 'utf8');
  content = content.replace(/import Footer from [^\n]+\n/g, '');
  content = content.replace(/<Footer \/>/g, '');
  content = content.replace(/\{\/\* Footer \*\/\}/g, '');
  if (file === 'Artical.js') {
    content = content.replace('<div className="relative min-h-screen font-inter overflow-hidden text-white">', '<div id="articles" className="relative min-h-screen font-inter overflow-hidden text-white">');
  }
  fs.writeFileSync('src/pages/' + file, content);
  console.log('Processed ' + file);
}
