import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <span className="text-accent-500 mr-2">■</span>
            Unlock Business Growth with Data-Driven Insights
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-accent-500 transition">Home</Link>
            <Link href="/about" className="hover:text-accent-500 transition">About</Link>
            <Link href="/services" className="hover:text-accent-500 transition">Services</Link>
            <Link href="/contact" className="hover:text-accent-500 transition">Contact</Link>
          </nav>

          <a
            href="tel:"
            className="bg-accent-500 px-6 py-2 rounded-lg hover:bg-accent-600 transition font-semibold"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
