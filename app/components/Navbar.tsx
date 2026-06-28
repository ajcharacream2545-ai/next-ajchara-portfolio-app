import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center font-prompt">
        <Link href="/" className="font-bold text-xl hover:text-indigo-200 transition">
          Cream Portfolio
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-indigo-200 transition">Home</Link>
          <Link href="/about" className="hover:text-indigo-200 transition">About</Link>
          <Link href="/me/skills" className="hover:text-indigo-200 transition">Skills</Link>
          <Link href="/me/projects" className="hover:text-indigo-200 transition">Projects</Link>
          <Link href="/me/gallery" className="hover:text-indigo-200 transition">Gallery</Link>
          <Link href="/contact" className="hover:text-indigo-200 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}