import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <>
      {/* Forside (Landing Page) Section */}
      <section id="forside">
        <div className="relative flex size-full min-h-screen flex-col bg-[#121118] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="@container">
                  <div className="@[480px]:p-4">
                    <div
                      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("images/Landing page.webp")`}}
                    >
                      <div className="flex flex-col gap-2 text-center">
                        <h1
                          className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                        >
                          AI-Powered Solutions for Your Business
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                          We specialize in AI, automation, and business optimization. Our solutions are designed to streamline your processes and boost your efficiency.
                        </h2>
                      </div>
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#3b19e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                      >
                        <span className="truncate">Explore Solutions</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Om os (About Us) Section */}
      <section id="om-os">
        <div className="relative flex size-full min-h-screen flex-col bg-[#121118] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="@container">
                  <div className="@[480px]:p-4">
                    <div
                      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("images/About us.webp")`}}
                    >
                      <div className="flex flex-col gap-2 text-left">
                        <h1
                          className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                        >
                          AI for the future of work
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                          We believe that artificial intelligence is not only a powerful tool, but also a powerful force for good. That's why we build AI solutions that are designed to enhance human capabilities and help organizations unlock their full potential.
                        </h2>
                      </div>
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#3b19e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                      >
                        <span className="truncate">Explore our solutions</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Løsninger (Solutions) Section */}
      <section id="losninger">
        <div className="relative flex size-full min-h-screen flex-col bg-[#121118] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div>
                  <div className="p-4">
                    <img src="images/Solutiond page.webp" alt="Solutions" className="w-full max-w-[800px] mb-5 rounded-xl" />
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
                      Solutions: Intelligent Platforms that Transform Your Business
                    </h1>
                    <p className="text-white mb-4">
                      We develop customized solutions that make digital transformation simple. Our platforms are powered by AI, automation, and data-driven insights to maximize efficiency in your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branchefokus (Industry Focus) Section */}
      <section id="branchefokus">
        <div className="relative flex size-full min-h-screen flex-col bg-[#121118] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div>
                  <div className="p-4">
                    <img src="images/a50a31bc-4551-49d6-9a20-445fb319152f.webp" alt="Industry Focus" className="w-full max-w-[800px] mb-5 rounded-xl" />
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
                      Industry Focus: Technology for All Industries
                    </h1>
                    <p className="text-white mb-4">
                      Royal Nordics' solutions create value across industries. Whether you work in marketing, retail, finance, or the food industry, our technology can help you optimize, automate, and innovate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases & Referencer (Case Studies) Section */}
      <section id="cases-referencer">
        <div className="relative flex size-full min-h-screen flex-col bg-[#121118] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div>
                  <div className="p-4">
                    <img src="images/ Case Studies.webp" alt="Case Studies" className="w-full max-w-[800px] mb-5 rounded-xl" />
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
                      Case Studies & References: Our Technology in Action
                    </h1>
                    <p className="text-white mb-4">
                      See how our customers have achieved results with Royal Nordics' solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Insights Section */}
      <section id="blog-insights">
        <div className="relative flex size-full min-h-screen flex-col bg-[#121118] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div>
                  <div className="p-4">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
                      Blog & Insights: Latest News on AI & Automation
                    </h1>
                    <p className="text-white mb-4">
                      Get inspired by the latest trends in AI, digital transformation, and automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt (Contact) Section */}
      <section id="kontakt">
        <div className="relative flex size-full min-h-screen flex-col bg-[#121118] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div>
                  <div className="p-4">
                    <img src="images/Contact page.webp" alt="Contact Us" className="w-full max-w-[800px] mb-5 rounded-xl" />
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
                      Contact: Get in Touch with Us
                    </h1>
                    <p className="text-white mb-4">
                      Ready to optimize your business with AI and automation? Contact us today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
