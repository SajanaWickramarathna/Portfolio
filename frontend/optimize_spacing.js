const fs = require('fs');
const files = ['about.js', 'Artical.js', 'contact.js', 'home.js', 'project.js', 'roadmap.js', 'services.js', 'skills.js'];

for (const file of files) {
  let content = fs.readFileSync('src/pages/' + file, 'utf8');

  // Add scroll margin to fix header overlap
  content = content.replace(/className=\"relative z-10 flex/g, 'className=\"relative z-10 scroll-mt-28 md:scroll-mt-32 flex');
  
  // For articles which uses a div
  if (file === 'Artical.js') {
    content = content.replace(/id=\"articles\" className=\"relative/, 'id=\"articles\" className=\"relative scroll-mt-28 md:scroll-mt-32');
  }

  // Optimize mobile padding: change py-24 to py-16 md:py-24
  content = content.replace(/py-24/g, 'py-16 md:py-24');
  
  // Change mt-10 to mt-6 md:mt-10 for better mobile spacing
  content = content.replace(/mt-10/g, 'mt-6 md:mt-10');

  fs.writeFileSync('src/pages/' + file, content);
  console.log('Optimized spacing in ' + file);
}
