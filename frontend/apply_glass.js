const fs = require('fs');
const files = ['footer.js', 'home.js', 'about.js', 'services.js', 'project.js', 'skills.js', 'Artical.js', 'roadmap.js', 'contact.js'];

for (const file of files) {
  let filePath = file === 'footer.js' ? 'src/components/footer.js' : 'src/pages/' + file;
  
  if(fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // To avoid regex escape hell, let's just do split().join() for exact string replacements.
    const replacements = {
      "bg-[#161B22]/60 backdrop-blur-xl border border-white/10": "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
      "bg-[#161B22]/80 backdrop-blur-xl border border-white/10": "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
      "bg-[#161B22]/60 backdrop-blur-2xl border border-white/10": "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
      "bg-[#0D1117]/80 backdrop-blur-xl border border-white/10": "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
      "bg-[#0D1117]/50 border border-white/10": "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg",
      "bg-[#161B22] border-t border-[#30363D]": "bg-[#000000]/40 backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_32px_0_rgba(0,0,0,0.36)]",
      "bg-[#0D1117]/80": "bg-white/5 backdrop-blur-md",
      "bg-[#161B22]/60": "bg-white/5 backdrop-blur-md",
      "bg-[#161B22]": "bg-white/5 backdrop-blur-md"
    };

    for (const [search, replace] of Object.entries(replacements)) {
      content = content.split(search).join(replace);
    }

    fs.writeFileSync(filePath, content);
    console.log('Applied glass to ' + file);
  }
}
