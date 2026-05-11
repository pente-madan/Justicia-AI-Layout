import React from "react";
import { ArrowRight, Gavel, Scale, Shield, Users } from "lucide-react";

const Layout4 = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row relative min-h-[800px]">
        {/* Left Side - Operational Core */}
        <div className="flex-1 p-12 lg:p-24 lg:pt-32 relative z-10 flex flex-col justify-start bg-navy-900">
          <div className="mb-12" data-aos="fade-right">
            <h3 className="text-2xl font-heading text-white mb-2 italic text-gold-600">Operational Integrity</h3>
            <div className="w-20 h-[1px] bg-gold-600/30" />
          </div>

          <div className="grid gap-y-10 max-w-2xl">
            {[
              { title: "Close Cases", desc: "Justitia Legal can work with you to close cases" },
              { title: "Limit Exposure", desc: "Justitia Legal brings certainty to a case without financial exposure to the Insolvency Practitioner." },
              { title: "Increased Efficiency", desc: "Increased efficiency due to streamlined processes." },
              { title: "Greater Return", desc: "Greater percentage return for IP in most cases using fee caps for out of court settlements." },
              { title: "Forensic Accounting", desc: "Forensic accounting with potential of boosting claims." },
              { title: "Communication", desc: "Single line of communication and reporting." }
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative pl-8"
              >
                <div className="absolute left-0 top-1.5 w-[2px] h-4 bg-gold-600 opacity-30" />
                <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                <p className="text-slate-400 font-sans text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Background Glow for Left */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-20%] left-[-20%] w-full h-full bg-gold-600/5 rounded-full blur-[120px]" />
          </div>
        </div>

        {/* Right Side - Strategic Recovery */}
        <div className="flex-1 p-12 lg:p-24 lg:pt-32 relative z-10 flex flex-col justify-start bg-white border-t lg:border-t-0 lg:border-l border-slate-100">
          <div className="mb-12" data-aos="fade-left">
            <h3 className="text-2xl font-heading text-navy-900 mb-2 italic text-gold-600">Strategic Recovery</h3>
            <div className="w-20 h-[1px] bg-gold-600/30" />
          </div>

          <div className="grid gap-y-10 max-w-2xl">
            {[
              { title: "Streamline Cases", desc: "Justitia Legal can complete the investigation work and prepare reports for the Insolvency Practitioner to streamline case progression practice wide." },
              { title: "Timescales", desc: "Bespoke routes of recovery to achieve (bring) shorter timescales." },
              { title: "Less Stringent", desc: "Less stringent criteria for case acceptance." },
              { title: "Maximum Recovery", desc: "Court actions when required but intelligently balanced to ensure maximum recovery to the estate." },
              { title: "Payment Plans", desc: "Justitia Legal manage payment plans and provide monthly statements." }
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative pl-8"
              >
                <div className="absolute left-0 top-1.5 w-[2px] h-4 bg-gold-600 opacity-30" />
                <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                <p className="text-slate-600 font-sans text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Decorative Watermark */}
          <div className="absolute bottom-12 right-12 opacity-5 pointer-events-none select-none hidden lg:block">
            <Scale className="w-64 h-64 text-navy-900" />
          </div>
          
          {/* Background Glow for Right */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <div className="absolute bottom-[-20%] right-[-20%] w-full h-full bg-gold-600/10 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout4;