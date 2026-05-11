import React from "react";
import { Gavel, Phone, Mail } from "lucide-react";

const Layout5 = () => {
  return (
    <section className="relative bg-slate-50 py-24 md:py-36 overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-900/80"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-600/10 border border-gold-600/30 text-gold-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-600"></span>
            Legal Service
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-8 leading-tight">
            Section 216 of the Insolvency Act 1986
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20" data-aos="fade-up" data-aos-delay="200">
          <div className="prose prose-lg max-w-none font-sans text-white leading-relaxed">
            <p className="mb-6">
              Justitia Legal is now offering a service to directors of companies in liquidation who wish to acquire the name/trading name of the company in liquidation. Directors very often wish to run another business, either as a director of a new limited company, as a partner in a partnership, or as a sole trader, and wish to continue to use the liquidated company name or something similar.
            </p>
            <p className="mb-6">
              However, Section 216 of the Insolvency Act 1986 prohibits a director of the liquidated company from using the same or similar name to the company which has entered into liquidation and to do so could constitute a criminal offence. Whilst there are exceptions (provided for in the Insolvency Rules), time is of the essence and, often, directors do not have the time, as they are busy dealing with the liquidation process. This is where Justitia Legal can help. We will ensure that the correct process is implemented and completed within the statutory timelines.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/30">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 text-gold-600" />
                <span className="font-medium">07766 727308</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/50" />
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 text-gold-600" />
                <span className="font-medium">gary@justitialegal.com</span>
              </div>
            </div>
            <p className="text-center text-white/80 text-sm mb-8">
              Please contact Gary Addison for more information
            </p>
            <div className="text-center">
              <button className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-gold-600 px-10 text-lg font-semibold text-white shadow-xl shadow-gold-600/30 hover:shadow-2xl hover:shadow-gold-600/50 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout5;