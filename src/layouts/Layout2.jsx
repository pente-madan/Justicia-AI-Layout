import React from "react";
import { 
  Gavel, 
  ShieldCheck, 
  Users2, 
  HeartHandshake, 
  Scale, 
  FileWarning, 
  FileCheck, 
  FileText, 
  Cpu 
} from "lucide-react";

const features = [
  {
    title: "Comprehensive Understanding of IP Responsibilities",
    description: "We recognise the critical role and responsibilities of Insolvency Practitioners (IPs) and prioritise adherence to your licence and standards. Our approach is meticulously aligned with the regulatory framework, ensuring that every step of the recovery process conforms to the highest professional standards.",
    icon: <Gavel className="w-6 h-6" />,
  },
  {
    title: "Regulatory Compliance and Thoroughness",
    description: "Regulation is at the heart of what we do. Our extensive experience ensures that all aspects of the recovery process are conducted with the utmost thoroughness and in full compliance with relevant regulations. We leave no detail overlooked, guaranteeing a robust and transparent approach to every case.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Expert Negotiation with Directors and Representatives",
    description: "Our team excels in negotiating directly with directors and/or their representatives, typically accountants and lawyers. This direct approach facilitates clearer communication and more effective negotiations, enabling us to address and resolve complex issues efficiently.",
    icon: <Users2 className="w-6 h-6" />,
  },
  {
    title: "Collaborative Approach with Your Legal Team",
    description: "We understand the importance of collaboration and are adept at working alongside your chosen legal counsel. Our extensive experience means we can provide your lawyer with detailed insights and progress updates, ensuring they are well-informed and prepared to advance the case.",
    icon: <HeartHandshake className="w-6 h-6" />,
  },
  {
    title: "Specialised Knowledge in Bounce Back Loan Recovery",
    description: "Our expertise extends to the recovery of Bounce Back Loans, a critical area of focus given its complexity, sensitivity, and political focus. If required, we use our extensive knowledge to break down, justify, and clearly explain to directors why the debt is owed.",
    icon: <Scale className="w-6 h-6" />,
  },
  {
    title: "Statutory Demands",
    description: "We are equipped to write and issue statutory demands on behalf of the Liquidator, if necessary, as a last resort.",
    icon: <FileWarning className="w-6 h-6" />,
  },
  {
    title: "Consultative Settlement Agreements",
    description: "At Justitia Legal, we value stakeholder input and only agree to settlements after comprehensive consultation, keeping our clients updated throughout the negotiation process. This ensures that the Insolvency Practitioner is in agreement.",
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    title: "Professional Correspondence and Documentation",
    description: "All our correspondence is produced to a high professional standard, and any documents prepared are suitable for use by your law firm if legal action is required. We also provide detailed reports with justifications if no recovery is achievable.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Integrated Virtual Team Approach",
    description: "We work seamlessly as part of your virtual team, maintaining regular communication with case administrators and managers. Our commitment includes monthly reporting and reviews, detailing all interactions with directors.",
    icon: <Cpu className="w-6 h-6" />,
  },
];

const Layout2 = () => {
  return (
    <section className="relative bg-slate-50 py-24 md:py-36 overflow-hidden">
      {/* Background Decorative Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* High-end Grid & Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#bfd2e7_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.05]"></div>
        
        {/* Layered Gradient Atmosphere */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-accent-500/15 via-accent-500/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-navy-900/10 via-navy-900/5 to-transparent rounded-full blur-[140px]" />
        
        {/* Architectural Geometry */}
        <div className="absolute top-[15%] -right-24 w-[600px] h-[600px] border-[0.5px] border-accent-500/10 rounded-full"></div>
        <div className="absolute top-[15%] -right-16 w-[600px] h-[600px] border-[0.5px] border-accent-500/5 rounded-full"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto mb-24" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 border border-accent-400 text-navy-700 font-['Baloo 2',sans-serif] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-navy-600"></span>
            The Optimal Choice
          </div>
          <h2 className="font-['Signika',Helvetica,Arial,Lucida,sans-serif] text-5xl md:text-6xl text-navy-900 mb-8 tracking-tight leading-tight">
            Why choose us?
          </h2>
          <p className="font-['Baloo 2',sans-serif] text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            At Justitia Legal, we provide specialized insolvency recovery services that are thorough, compliant, and effective. Here's why we're the optimal choice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-navy-400 transition-all duration-500 flex flex-col items-start overflow-hidden h-full cursor-default hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-500/10"
            >
              
              <div className="flex items-center gap-4 mb-5 w-full">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center text-navy-600 group-hover:bg-navy-600 group-hover:text-white transition-all duration-500 shadow-sm hover:rotate-15 hover:scale-110">
                  {React.cloneElement(feature.icon, { className: "w-5 h-5" })}
                </div>
                <h3 className="font-['Signika',Helvetica,Arial,Lucida,sans-serif] text-lg text-navy-900 leading-tight group-hover:text-navy-600 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              
              <p className="font-['Baloo 2',sans-serif] text-sm leading-relaxed flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layout2;