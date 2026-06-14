const fs = require('fs');
const files = ['about.js', 'Artical.js', 'contact.js', 'home.js', 'project.js', 'roadmap.js', 'services.js', 'skills.js'];

for (const file of files) {
  let content = fs.readFileSync('src/pages/' + file, 'utf8');

  // Remove the backgroundhero motion.div
  content = content.replace(/\{\/\* Background with animation \*\/\}\s*<motion\.div[\s\S]*?ease:\s*"easeInOut",\s*\}\}\s*\/>/g, '');
  
  // Remove the Overlay
  content = content.replace(/\{\/\* Overlay \*\/\}\s*<div className="absolute inset-0 bg-gradient-to-b from-\\[#0D1117\\]\/90 to-\\[#161B22\\]\/95" \/>/g, '');
  
  // For home.js which might not have the comment
  content = content.replace(/<motion\.div\s*className="absolute inset-0 bg-cover bg-center"\s*style=\{\{ backgroundImage: `url\('\/backgroundhero\.jpg'\)` \}\}[\s\S]*?ease:\s*"easeInOut",\s*\}\}\s*\/>/g, '');

  // Remove the gradient overlay from home.js if it exists without comment
  content = content.replace(/<div className="absolute inset-0 bg-gradient-to-b from-\\[#0D1117\\]\/90 to-\\[#161B22\\]\/95" \/>/g, '');

  // Remove local min-h-screen to fix massive gaps when stacked
  content = content.replace(/min-h-screen/g, '');

  fs.writeFileSync('src/pages/' + file, content);
  console.log('Cleaned ' + file);
}
