import React from 'react';
import { ArrowRight, Scale, FileText, TrendingUp, Users } from 'lucide-react';

/**
 * Layout1 Component - Two Column Services Section
 * Left: Legal justice themed image
 * Right: Company description, services list, statistics, and CTA
 */
const Layout1 = () => {
  const services = [
    'Overdrawn director\'s loan accounts',
    'Preferences',
    'Illegal dividends',
    'Transactions at an Undervalue',
    'Bounce Back Loans',
    'Other recoveries'
  ];

  const statistics = [
    { number: '30+', label: 'Cases Solved', icon: FileText },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Years Expertise', icon: TrendingUp },
    { number: '2', label: 'Legal Associates', icon: Scale }
  ];

  return (
    <div className="w-full bg-white">
      {/* Two Column Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gold-50/20 font-body">
        
        {/* Background Decorative Elements */}
        <div className="absolute -left-[5%] top-[10%] h-[400px] w-[400px] rounded-full bg-navy-100/20 blur-3xl filter" />
        <div className="absolute -right-[5%] bottom-[15%] h-[350px] w-[350px] rounded-full bg-gold-100/30 blur-3xl filter" />

        {/* Main Container */}
        <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT COLUMN - Image */}
            <div 
              className="relative h-[600px] w-full lg:h-[700px]"
            >
              {/* Image Container with decorative frame */}
              <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-navy-900 shadow-2xl shadow-navy-900/30">
                {/* Main Image - Legal/Justice Theme */}
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
                  alt="Scales of justice representing legal expertise"
                  className="h-full w-full object-cover object-center opacity-90"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 to-transparent" />
                
                {/* Gold Border Accent */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-gold-600/20" />
              </div>

              {/* Decorative Gold Element */}
              <div className="absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-full bg-gold-600/10 blur-2xl" />
              <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-navy-900/5 blur-3xl" />
            </div>

            {/* RIGHT COLUMN - Content */}
            <div className="relative z-10 flex flex-col justify-center space-y-4">

              {/* Section Label */}
              <div>
                <h1 className="font-heading text-[34px] font-bold text-navy-900">
                  Justitia Legal
                </h1>
              </div>

              {/* 1. Short Description */}
              <div>
                <p className="text-sm leading-relaxed text-slate-600">
                  Justitia Legal is a specialist company offering a unique and professional service to insolvency practitioners in the recovery of a range of debts owed by directors of insolvent companies.
                </p>
              </div>

              {/* 2. Services Section */}
              <div 
                className="space-y-4"
              >
                <h3 className="font-heading text-2xl font-bold text-navy-900">
                  Our Services
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  We provide fast and efficient debt recovery services to Insolvency Practitioners.<br />
                  {/* We assist Office Holders in recovering funds from directors of insolvent companies. */}
                </p>
                
                {/* Services List */}
                <ul className="mt-2 space-y-3">
                  {services.map((service, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-gold-600" />
                      <span className="text-sm leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Statistics - Horizontal Row */}
              <div 
                className="grid grid-cols-2 gap-3 md:grid-cols-4"
              >
                {statistics.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center rounded-xl bg-navy-900 p-3 text-center"
                    >
                      <Icon className="mb-2 h-5 w-5 text-gold-600" />
                      <div className="font-heading text-xl font-bold text-white md:text-2xl">
                        {stat.number}
                      </div>
                      <div className="mt-1 text-xs font-medium text-slate-400 font-sans">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 4. Contact Us CTA Button */}
              <div className="mt-28">
                <button className="group inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-gold-600 px-10 text-lg font-semibold text-white btn-lift hover:shadow-xl hover:shadow-gold-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5 arrow-slide" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout1;