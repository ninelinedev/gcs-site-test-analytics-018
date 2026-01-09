export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Trusted business analytics Expertise
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-100">
          Professional solutions backed by decades of experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg hover:bg-accent-600 transition text-lg font-semibold"
          >
            Schedule Consultation
          </a>
          <a
            href="/services"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
          >
            Our Services
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-accent-500 mb-2">20+</div>
            <div className="text-primary-100">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-accent-500 mb-2">500+</div>
            <div className="text-primary-100">Clients Served</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-accent-500 mb-2">98%</div>
            <div className="text-primary-100">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
