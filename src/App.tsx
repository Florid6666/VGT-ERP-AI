import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricSparklines } from './components/MetricSparklines';
import { ShowcaseDashboard } from './components/ShowcaseDashboard';
import { FeatureTabs } from './components/FeatureTabs';
import { IndustryGrid } from './components/IndustryGrid';
import { MicrosoftPartnershipCallout } from './components/MicrosoftPartnershipCallout';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { FaqAccordion } from './components/FaqAccordion';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-blue-500 selection:text-white relative">
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Home Page Sections */}
      <main className="w-full">
        <HeroSection
          onOpenTrial={() => {
            showToast("Welcome! Requesting trial provisioning portal...");
            scrollToContact();
          }}
          onWatchDemo={scrollToServices}
        />

        <MetricSparklines />

        <ShowcaseDashboard />

        <FeatureTabs
          onOpenTrial={() => {
            showToast("Feature node demo requested.");
            scrollToContact();
          }}
        />

        <IndustryGrid />

        <MicrosoftPartnershipCallout />

        <TestimonialCarousel />

        <FaqAccordion />

        <ContactCtaSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
