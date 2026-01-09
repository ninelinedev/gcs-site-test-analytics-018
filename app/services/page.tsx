export default function Services() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-primary-700 text-center mb-12">Our Services</h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Consultation Services</h2>
            <p className="text-gray-700 mb-4">
              Expert guidance tailored to your specific needs and objectives.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Initial assessment and strategy development
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Ongoing advisory support
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Risk analysis and mitigation planning
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Implementation Support</h2>
            <p className="text-gray-700 mb-4">
              Hands-on assistance to execute your strategic initiatives effectively.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Project planning and management
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Process optimization
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Change management guidance
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Compliance & Review</h2>
            <p className="text-gray-700 mb-4">
              Ensure you meet all regulatory requirements and best practices.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Regulatory compliance audits
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Policy and procedure reviews
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Remediation recommendations
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Training & Development</h2>
            <p className="text-gray-700 mb-4">
              Empower your team with knowledge and skills for long-term success.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Customized training programs
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Workshops and seminars
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                Ongoing professional development
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-primary-700 mb-6">Ready to Get Started?</h2>
          <a href="/contact" className="bg-accent-500 text-white px-8 py-4 rounded-lg hover:bg-accent-600 transition text-lg font-semibold">
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
