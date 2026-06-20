const fs = require('fs');
const path = require('path');

const pages = [
  'features', 'pricing', 'changelog', 'integrations',
  'about', 'blog', 'careers', 'contact',
  'privacy', 'terms', 'cookie'
];

const template = (title) => `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
${title === 'pricing' ? 'import Pricing from "@/components/Pricing";\nimport FAQ from "@/components/FAQ";' : ''}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0]">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[60vh]">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 capitalize">${title.replace('-', ' ')}</h1>
        <p className="text-xl text-[#a3a3a3]">
          This is the ${title.replace('-', ' ')} page. Content is currently being updated.
        </p>
      </div>
      ${title === 'pricing' ? '<Pricing />\n      <FAQ />' : ''}
      <Footer />
    </main>
  );
}
`;

const baseDir = path.join(__dirname, 'src', 'app');

pages.forEach(page => {
  const dirPath = path.join(baseDir, page);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(page));
  console.log(`Created ${page}/page.tsx`);
});
