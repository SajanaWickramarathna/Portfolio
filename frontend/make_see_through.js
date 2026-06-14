const fs = require('fs');
const files = ['footer.js', 'home.js', 'about.js', 'services.js', 'project.js', 'skills.js', 'Artical.js', 'roadmap.js', 'contact.js'];

for (const file of files) {
  let filePath = file === 'footer.js' ? 'src/components/footer.js' : 'src/pages/' + file;
  
  if(fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Make the glass highly transparent and reduce blur so animations are clearly visible
    content = content.replace(/bg-white\/5/g, 'bg-white/[0.02]');
    content = content.replace(/backdrop-blur-2xl/g, 'backdrop-blur-sm');
    content = content.replace(/backdrop-blur-xl/g, 'backdrop-blur-sm');
    content = content.replace(/backdrop-blur-md/g, 'backdrop-blur-sm');

    fs.writeFileSync(filePath, content);
    console.log('Made glass more see-through in ' + file);
  }
}

// Also update header.js
let headerPath = 'src/components/header.js';
if(fs.existsSync(headerPath)) {
  let content = fs.readFileSync(headerPath, 'utf8');
  content = content.replace(/bg-white\/5/g, 'bg-white/[0.02]');
  content = content.replace(/backdrop-blur-2xl/g, 'backdrop-blur-sm');
  content = content.replace(/backdrop-blur-xl/g, 'backdrop-blur-sm');
  content = content.replace(/backdrop-blur-md/g, 'backdrop-blur-sm');
  fs.writeFileSync(headerPath, content);
  console.log('Made glass more see-through in header.js');
}
