import React from 'react';

/**
 * Layout2 Component
 * Displays the 7-step process timeline for Justitia Legal
 * Uses alternating left/right layout with center timeline
 */
const Layout2 = () => {

  const steps = [
    {
      id: 1,
      title: "Lead Handoff and Background Review",
      description: "The process begins when an Insolvency Practice introduces our firm to the director along with the background information and status report on the case. This initial documentation provides us with a comprehensive understanding of the case, including key details and current status."
    },
    {
      id: 2,
      title: "Internal Case Review",
      description: "Our team conducts a thorough internal review of the case. This involves examining all aspects, including the asset base of the former director. If necessary, we will perform a trace to gather additional information, ensuring that we have a complete picture before proceeding."
    },
    {
      id: 3,
      title: "Communication with the Former Director",
      description: "Once our review is complete, we draft and send a formal letter to the former director. This letter outlines the case details and initiates the process of negotiation. Our communication is designed to be clear, professional, and informative."
    },
    {
      id: 4,
      title: "Negotiation",
      description: "We then enter the negotiation phase, engaging directly with the former director. Our experienced team works to reach a fair and equitable settlement, using our extensive expertise to navigate any complexities that may arise during discussions."
    },
    {
      id: 5,
      title: "Settlement Agreement",
      description: "Upon reaching an agreement, we formalise the settlement with the former director. This step ensures that all terms are clearly defined and mutually agreed upon, paving the way for a smooth resolution."
    },
    {
      id: 6,
      title: "Review with Insolvency Practitioner",
      description: "Following the agreement, we conduct a review with the Insolvency Practitioner (IP) to ensure that the settlement aligns with their expectations and regulatory requirements. This collaborative review helps to confirm that all aspects of the case are addressed appropriately."
    },
    {
      id: 7,
      title: "Case Closure and Documentation",
      description: "The final step involves closing the case. We document all the work undertaken throughout the process and provide a detailed recommendation. This documentation is crucial for maintaining a clear record of the case and supporting any future regulatory or procedural requirements."
    }
  ];

  return (
    <div className="w-full bg-slate-50 py-12 md:py-16">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Section Label */}
          <div className="inline-block px-4 py-2 bg-gold-600 text-navy-900 font-heading text-sm font-bold uppercase tracking-wide rounded-lg mb-6">
            The Process
          </div>

          {/* Section Title */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            How We Work
          </h2>

          {/* Section Description */}
          <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl mx-auto">
            At Justitia Legal, we follow a meticulous and structured process to ensure the effective recovery of antecedent transactions. Here's how we work:
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4">
        <div className="timeline-wrapper relative max-w-full mx-auto">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const stepNumber = String(step.id).padStart(2, '0');

            return (
              <div
                key={step.id}
                className="timeline-row"
              >
                {/* Left Card Column */}
                {isLeft ? (
                  <div className="card-container-left">
                    <div className="timeline-card hover-gold-glow">
                      <div className="step-header step-header-left">
                        <div className="step-number">
                          {stepNumber}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-navy-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600 mt-4">
                        {step.description}
                      </p>
                    </div>
                    <div className="connector-left"></div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* Center Dot Column */}
                <div className="dot-container">
                  <div className="timeline-dot"></div>
                </div>

                {/* Right Card Column */}
                {!isLeft ? (
                  <div className="card-container-right">
                    <div className="connector-right"></div>
                    <div className="timeline-card hover-gold-glow">
                      <div className="step-header step-header-right">
                        <div className="step-number">
                          {stepNumber}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-navy-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600 mt-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .timeline-wrapper {
          position: relative;
        }

        .timeline-wrapper::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 2px;
          background: #d4af37;
          z-index: 0;
        }

        .timeline-row {
          display: grid;
          grid-template-columns: 1fr 30px 1fr;
          align-items: center;
        //   gap: 48px;
          min-height: 160px;
          margin-bottom: 10px;
        }

        .card-container-left {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0;
          text-align: right;
        }

        .card-container-right {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0;
          text-align: left;
        }

        .timeline-card {
          position: relative;
          background: #ffffff;
          border-radius: 1rem;
          padding: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          max-width: 620px;
          width: 100%;
        }

        .connector-left {
          width: 40px;
          height: 1px;
          background: #d4af37;
          flex-shrink: 0;
        }

        .connector-right {
          width: 40px;
          height: 1px;
          background: #d4af37;
          flex-shrink: 0;
        }

        .dot-container {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .timeline-dot {
          width: 14px;
          height: 14px;
          background: #d4af37;
          border-radius: 50%;
          border: 3px solid #ffffff;
          box-shadow: 0 0 0 3px #d4af37;
          position: relative;
          z-index: 1;
          transition: box-shadow 0.3s ease;
        }

        .timeline-row:has(.timeline-card:hover) .timeline-dot {
          box-shadow: 0 0 15px #d4af37, 0 0 0 3px #d4af37;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .step-header-left {
          justify-content:flex-end;
        }

        .step-header-left .step-number {
          order: 2;
        }

        .step-header-right {
          justify-content: flex-start;
        }

        .step-number {
          font-family: 'Amiri', serif;
          font-size: 48px;
          font-weight: bold;
          color: #d4af37;
          opacity: 0.25;
          line-height: 1;
          flex-shrink: 0;
        }

        @media (max-width: 1023px) {
          .timeline-card {
            max-width: 320px;
          }
        }

        @media (max-width: 767px) {
          .timeline-wrapper::before {
            left: 20px;
            transform: none;
          }

          .timeline-row {
            grid-template-columns: 40px 1fr;
            gap: 16px;
            min-height: auto;
            margin-bottom: 32px;
          }

          .card-container-left,
          .card-container-right {
            grid-column: 2;
            text-align: left;
            justify-content: flex-start;
          }

          .dot-container {
            grid-column: 1;
          }

          .connector-left,
          .connector-right {
            display: none;
          }

          .timeline-card {
            max-width: 100%;
          }

          .step-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .step-number {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout2;