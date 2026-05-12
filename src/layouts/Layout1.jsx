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
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[var(--color-justitia-light-grey)] via-white to-[var(--color-justitia-accent-light)]/20 py-16 px-4 md:px-8 lg:px-16">
        
        {/* Background Decorative Elements */}
        <div className="absolute -left-[5%] top-[10%] h-[400px] w-[400px] rounded-full bg-[var(--color-justitia-navy)]/10 blur-3xl filter" />
        <div className="absolute -right-[5%] bottom-[15%] h-[350px] w-[350px] rounded-full bg-[var(--color-justitia-accent)]/30 blur-3xl filter" />

        {/* Main Container */}
        <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT COLUMN - Image */}
            <div 
              className="relative h-[600px] w-full lg:h-[700px]"
            >
              {/* Image Container with decorative frame */}
              <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-[var(--color-justitia-navy)] shadow-xl">
                {/* Main Image - Legal/Justice Theme */}
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
                  alt="Scales of justice representing legal expertise"
                  className="h-full w-full object-cover object-center opacity-90"
                />
                
                {/* Accent Border */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[var(--color-justitia-accent)]/20" />
              </div>

              {/* Decorative Accent Element */}
              <div className="absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-full bg-[var(--color-justitia-accent)]/10 blur-2xl" />
              <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-[var(--color-justitia-navy)]/5 blur-3xl" />
            </div>

            {/* RIGHT COLUMN - Content */}
            <div className="relative z-10 flex flex-col justify-center space-y-4">

              {/* Section Label */}
              <div>
                <h1 className="font-['Signika',Helvetica,Arial,Lucida,sans-serif] text-4xl md:text-5xl font-bold text-[var(--color-justitia-charcoal)] leading-tight">
                  Justitia Legal
                </h1>
              </div>

              {/* 1. Short Description */}
              <div>
                <p className="font-['Poppins',sans-serif] text-base leading-relaxed text-[var(--color-justitia-medium-grey)]">
                  Justitia Legal is a specialist company offering a unique and professional service to insolvency practitioners in the recovery of a range of debts owed by directors of insolvent companies.
                </p>
              </div>

              {/* 2. Services Section */}
              <div 
                className="space-y-4"
              >
                <h3 className="font-['Signika',Helvetica,Arial,Lucida,sans-serif] text-2xl md:text-3xl font-bold text-[var(--color-justitia-charcoal)] leading-tight">
                  Our Services
                </h3>
                <p className="font-['Baloo 2',sans-serif] text-base leading-relaxed text-[var(--color-justitia-medium-grey)]">
                  We provide fast and efficient debt recovery services to Insolvency Practitioners.<br />
                  {/* We assist Office Holders in recovering funds from directors of insolvent companies. */}
                </p>
                
                {/* Services List */}
                <ul className="mt-2 space-y-3">
                  {services.map((service, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-justitia-navy)]" />
                      <span className="font-['Baloo 2',sans-serif] text-base leading-relaxed text-[var(--color-justitia-dark-grey)]">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Statistics - Horizontal Row */}
              <div 
                className="grid grid-cols-2 gap-4 md:grid-cols-4"
              >
                {statistics.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center rounded-2xl bg-[var(--color-justitia-navy)] p-3 md:p-4 text-center shadow-md"
                    >
                      <Icon className="mb-2 h-4 w-4 text-[var(--color-justitia-accent-light)]" />
                      <div className="font-['Signika',Helvetica,Arial,Lucida,sans-serif] text-lg font-bold text-white md:text-xl">
                        {stat.number}
                      </div>
                      <div className="mt-1 text-xs font-['Baloo 2',sans-serif] font-medium text-white/70">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 4. Contact Us CTA Button */}
              <div className="mt-44">
                <button className="bg-[var(--color-justitia-navy)] hover:bg-[var(--color-justitia-navy-light)] active:bg-[var(--color-justitia-navy-dark)] text-white font-['Signika',Helvetica,Arial,Lucida,sans-serif] font-semibold text-sm tracking-wide px-8 py-4 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-justitia-accent)] focus:ring-offset-2 inline-flex items-center gap-3">
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