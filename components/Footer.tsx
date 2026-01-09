export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent-500">Unlock Business Growth with Data-Driven Insights</h3>
            <p className="text-gray-300">
              Professional business analytics services you can trust.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2"></p>
            <p className="text-gray-300 mb-2"></p>
            <p className="text-gray-300"></p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-accent-500">Home</a></li>
              <li><a href="/about" className="hover:text-accent-500">About</a></li>
              <li><a href="/services" className="hover:text-accent-500">Services</a></li>
              <li><a href="/contact" className="hover:text-accent-500">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Unlock Business Growth with Data-Driven Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
