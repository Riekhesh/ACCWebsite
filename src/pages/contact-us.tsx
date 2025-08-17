const ContactUsPage = () => {

  return (
    <div className="min-h-screen bg-[var(--secondary)]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/90 text-white py-16 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Contact Us
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Get in touch with us. We'd love to hear from you and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* General Contact */}
            <div className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 rounded-2xl p-8 shadow-xl border border-[var(--primary)]/10">
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-6" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary)]">Email</h3>
                    <p className="text-[var(--primary)]/70">info@asianconsultingconference.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary)]">Location</h3>
                    <p className="text-[var(--primary)]/70">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary)]">Response Time</h3>
                    <p className="text-[var(--primary)]/70">Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 rounded-2xl p-8 shadow-xl border border-[var(--primary)]/10">
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-6" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Follow Us
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center space-x-3 p-4 rounded-lg bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors group">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-[var(--primary)]">Twitter</span>
                </a>

                <a href="#" className="flex items-center space-x-3 p-4 rounded-lg bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors group">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-[var(--primary)]">LinkedIn</span>
                </a>

                <a href="#" className="flex items-center space-x-3 p-4 rounded-lg bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors group">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-[var(--primary)]">Instagram</span>
                </a>

                <a href="#" className="flex items-center space-x-3 p-4 rounded-lg bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors group">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-[var(--primary)]">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage; 