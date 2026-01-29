export default function Navbar() {
  return (
    <header className="sticky top-0 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Deepak Kumar Boddu</h1>
        <nav className="space-x-4 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
