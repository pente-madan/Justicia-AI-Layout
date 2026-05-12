import React from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, ChevronDown } from "lucide-react";

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-center gap-4 p-6 md:p-8 rounded-2xl bg-[var(--color-justitia-accent-light)] border border-[var(--color-justitia-accent)] shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-justitia-navy)] flex items-center justify-center text-white">
      {icon}
    </div>
    <div>
      <p className="font-['Baloo 2',sans-serif] text-xs uppercase tracking-widest font-medium text-[var(--color-justitia-medium-grey)] mb-1">{label}</p>
      {link ? (
        <a href={link} className="font-['Baloo 2',sans-serif] text-base text-[var(--color-justitia-navy)] hover:text-[var(--color-justitia-navy-light)] transition-colors">
          {value}
        </a>
      ) : (
        <p className="font-['Baloo 2',sans-serif] text-base text-[var(--color-justitia-dark-grey)]">{value}</p>
      )}
    </div>
  </div>
);

export function ContactSection() {

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">


      <div className="container relative z-10 mx-auto px-4 py-8 md:px-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30 items-center">

          {/* Content Column */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-justitia-accent-light)] border border-[var(--color-justitia-accent)] text-[var(--color-justitia-navy)] font-['Baloo 2',sans-serif] font-medium text-xs uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--color-justitia-navy)]"></span>
                Available for Consultations
              </div>
              <h1 className="font-['Signika',Helvetica,Arial,Lucida,sans-serif] text-4xl md:text-5xl text-[var(--color-justitia-charcoal)] mb-6 leading-tight">
                Legal Support <br />
                <span className="text-4xl md:text-5xl text-[var(--color-justitia-charcoal)]">When You Need It.</span>
              </h1>
              <p className="font-['Baloo 2',sans-serif] text-base leading-relaxed max-w-lg text-[var(--color-justitia-medium-grey)]">
                Your legal journey starts with a conversation. We combine traditional values with modern expertise to provide exceptional guidance.
              </p>
            </div>

            <div className="grid gap-6">
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Email Us"
                value="contact@justizialaw.co.uk"
                link="mailto:help@justitialegal.com"
              />
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="Call Us"
                value="+0330 818 2619"
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
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md hover:shadow-xl border border-[var(--color-border-light)] relative overflow-hidden group transition-shadow duration-300">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-justitia-accent-light)]/30 rounded-bl-full transition-all group-hover:bg-[var(--color-justitia-accent-light)]/50"></div>

              <div className="relative z-10">
                <h2 className="font-['Signika',Helvetica,Arial,Lucida,sans-serif] text-3xl md:text-4xl text-[var(--color-justitia-charcoal)] leading-tight mb-2">Book an Appointment</h2>
                <p className="font-['Baloo 2',sans-serif] text-base text-[var(--color-justitia-medium-grey)] mb-8">Get in touch with our legal experts today.</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['Baloo 2',sans-serif] text-sm font-medium text-[var(--color-justitia-dark-grey)] mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full bg-white border border-[var(--color-border)] focus:border-[var(--color-justitia-navy)] focus:ring-2 focus:ring-[var(--color-justitia-accent-light)] rounded-xl px-4 py-3 font-['Baloo 2',sans-serif] text-sm text-[var(--color-justitia-dark-grey)] placeholder:text-[var(--color-justitia-medium-grey)] outline-none transition-all duration-200"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block font-['Baloo 2',sans-serif] text-sm font-medium text-[var(--color-justitia-dark-grey)] mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full bg-white border border-[var(--color-border)] focus:border-[var(--color-justitia-navy)] focus:ring-2 focus:ring-[var(--color-justitia-accent-light)] rounded-xl px-4 py-3 font-['Baloo 2',sans-serif] text-sm text-[var(--color-justitia-dark-grey)] placeholder:text-[var(--color-justitia-medium-grey)] outline-none transition-all duration-200"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['Baloo 2',sans-serif] text-sm font-medium text-[var(--color-justitia-dark-grey)] mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-white border border-[var(--color-border)] focus:border-[var(--color-justitia-navy)] focus:ring-2 focus:ring-[var(--color-justitia-accent-light)] rounded-xl px-4 py-3 font-['Baloo 2',sans-serif] text-sm text-[var(--color-justitia-dark-grey)] placeholder:text-[var(--color-justitia-medium-grey)] outline-none transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-['Baloo 2',sans-serif] text-sm font-medium text-[var(--color-justitia-dark-grey)] mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full bg-white border border-[var(--color-border)] focus:border-[var(--color-justitia-navy)] focus:ring-2 focus:ring-[var(--color-justitia-accent-light)] rounded-xl px-4 py-3 font-['Baloo 2',sans-serif] text-sm text-[var(--color-justitia-dark-grey)] placeholder:text-[var(--color-justitia-medium-grey)] outline-none transition-all duration-200"
                        placeholder="+44 123 456 7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Baloo 2',sans-serif] text-sm font-medium text-[var(--color-justitia-dark-grey)] mb-2">Select Your Product</label>
                    <div className="relative">
                      <select
                        style={{ appearance: 'none', textAlign: 'left' }}
                        className="w-full bg-white border border-[var(--color-border)] focus:border-[var(--color-justitia-navy)] focus:ring-2 focus:ring-[var(--color-justitia-accent-light)] rounded-xl px-4 py-3 font-['Baloo 2',sans-serif] text-sm text-[var(--color-justitia-dark-grey)] outline-none transition-all duration-200"
                      >
                        <option value="">Choose an option</option>
                        <option value="first">First Choice</option>
                        <option value="second">Second Choice</option>
                        <option value="third">Third Choice</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Baloo 2',sans-serif] text-sm font-medium text-[var(--color-justitia-dark-grey)] mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-white border border-[var(--color-border)] focus:border-[var(--color-justitia-navy)] focus:ring-2 focus:ring-[var(--color-justitia-accent-light)] rounded-xl px-4 py-3 font-['Baloo 2',sans-serif] text-sm text-[var(--color-justitia-dark-grey)] placeholder:text-[var(--color-justitia-medium-grey)] outline-none transition-all duration-200 resize-none"
                      placeholder="Tell us about your legal needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--color-justitia-navy)] hover:bg-[var(--color-justitia-navy-light)] active:bg-[var(--color-justitia-navy-dark)] text-white font-['Signika',Helvetica,Arial,Lucida,sans-serif] font-semibold text-sm tracking-wide px-8 py-4 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-justitia-accent)] focus:ring-offset-2 flex items-center justify-center gap-2"
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