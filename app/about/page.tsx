export default function About() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-primary-700 mb-8">About Unlock Business Growth with Data-Driven Insights</h1>

        <div className="prose prose-lg">
          <p className="text-xl text-gray-700 mb-6">
            With over two decades of experience in business analytics, we've built our reputation on
            delivering exceptional results and maintaining the highest standards of professional excellence.
          </p>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide our clients with trusted, reliable business analytics services that exceed expectations
            and deliver measurable value to their businesses and personal goals.
          </p>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-4">Our Values</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-accent-500 mr-2">✓</span>
              <span><strong>Integrity:</strong> We uphold the highest ethical standards in every engagement.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-2">✓</span>
              <span><strong>Excellence:</strong> We continuously strive for superior outcomes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-2">✓</span>
              <span><strong>Client Focus:</strong> Your success drives everything we do.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-2">✓</span>
              <span><strong>Innovation:</strong> We embrace new approaches to solve complex challenges.</span>
            </li>
          </ul>

          <div className="bg-primary-50 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-primary-700 mb-4">Get in Touch</h3>
            <p className="text-gray-700">
              Ready to work with a trusted business analytics partner? Contact us today to discuss your needs.
            </p>
            <a href="/contact" className="inline-block mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
