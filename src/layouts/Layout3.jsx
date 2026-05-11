import React from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all duration-300">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-600/20 flex items-center justify-center text-gold-600">
      {icon}
    </div>
    <div>
      <p className="text-sm text-slate-600 font-medium">{label}</p>
      {link ? (
        <a href={link} className="text-navy-900 hover:text-gold-600 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-navy-900">{value}</p>
      )}
    </div>
  </div>
);

export function ContactSection() {

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden bg-white font-body">


      <div className="container relative z-10 mx-auto px-4 py-8 md:px-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30 items-center">

          {/* Content Column */}
          <div className="lg:col-span-5 text-navy-900 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C4A46B]/10 border border-[#C4A46B]/30 text-[#C4A46B] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C4A46B]"></span>
                Available for Consultations
              </div>
              <h1 className="text-5xl md:text-5xl font-heading mb-6 leading-[1.1]">
                Legal Support <br />
                <h2 className="text-5xl md:text-5xl text-navy-900">When You Need It.</h2>
              </h1>
              <p className="text-sm leading-relaxed max-w-lg">
                Your legal journey starts with a conversation. We combine traditional values with modern expertise to provide exceptional guidance.
              </p>
            </div>

            <div className="grid gap-6">
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Email Us"
                value="help@justitialegal.com"
                link="mailto:help@justitialegal.com"
              />
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="Call Us"
                value="0161 533 0232"
                link="tel:01615330232"
              />
              <ContactItem
                icon={<MapPin className="w-5 h-5" />}
                label="Visit Us"
                value="Suite 201, 5300 Lakeside, Cheadle Royal Business Park, Cheadle. SK8 3GP"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600/5 rounded-bl-full transition-all group-hover:bg-gold-600/10"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-heading text-navy-900 mb-2">Book an Appointment</h2>
                <p className="text-slate-600 mb-8">Get in touch with our legal experts today.</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C4A46B] focus:border-transparent transition-all"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C4A46B] focus:border-transparent transition-all"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C4A46B] focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C4A46B] focus:border-transparent transition-all"
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C4A46B] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your legal needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Layout3 = () => <ContactSection />;

export default Layout3;