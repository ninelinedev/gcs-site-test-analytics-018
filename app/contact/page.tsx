import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-primary-700 text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary-600 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              We're here to answer your questions and discuss how we can help you achieve your goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600"></p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600"></p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600"></p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-700 mb-2">Business Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-700">Saturday - Sunday: By appointment</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
