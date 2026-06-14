const fs = require('fs');
const files = ['about.js', 'Artical.js', 'contact.js', 'home.js', 'project.js', 'roadmap.js', 'services.js', 'skills.js'];

for (const file of files) {
  let content = fs.readFileSync('src/pages/' + file, 'utf8');

  // Find the root div or section, which usually looks like:
  // <div className="relative font-inter overflow-hidden text-white bg-[#0D1117]">
  // and remove any bg-[...] classes from it.
  
  // We can just do a blanket removal of bg-[#0D1117] and bg-[#161B22] from the file IF it's on a root level, but let's just use regex to remove it from any className that has "relative" and "font-inter" or something similar.
  // Actually, a simpler way is to replace 'bg-[#0D1117]' with '' if it's on the main wrapper. Let's just remove them from the first few lines of the component return.
  
  // Alternatively, let's just make sure we didn't leave any `bg-` colors on `MainPage.js` sections.
}
