import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StartingPointsSection } from './components/StartingPointsSection';
import { WhyVgtSection } from './components/WhyVgtSection';
import { ErpComparisonSection } from './components/ErpComparisonSection';
import { ShowcaseDashboard } from './components/ShowcaseDashboard';
import { FeatureTabs } from './components/FeatureTabs';
import { CrmShowcaseSection } from './components/CrmShowcaseSection';
import { IndustryGrid } from './components/IndustryGrid';
import { MicrosoftPartnershipCallout } from './components/MicrosoftPartnershipCallout';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { FaqAccordion } from './components/FaqAccordion';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import { CrmPage } from './pages/CrmPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PartnershipPage } from './pages/PartnershipPage';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'home' | 'crm' | 'industries' | 'partnership'>('home');

  const scrollToContact = () => {
    if (activeView !== 'home') {
      setActiveView('home');
    }
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToServices = () => {
    if (activeView !== 'home') {
      setActiveView('home');
    }
    setTimeout(() => {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleNavigate = (view: 'home' | 'crm' | 'industries' | 'partnership') => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-blue-500 selection:text-white relative">
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenContact={scrollToContact}
        onNavigate={handleNavigate}
        activeView={activeView}
      />

      {/* Dynamic Subpage View Routing */}
      {activeView === 'crm' && (
        <CrmPage
          onBackToHome={() => handleNavigate('home')}
          onOpenContact={scrollToContact}
        />
      )}

      {activeView === 'industries' && (
        <IndustriesPage
          onBackToHome={() => handleNavigate('home')}
          onOpenContact={scrollToContact}
        />
      )}

      {activeView === 'partnership' && (
        <PartnershipPage
          onBackToHome={() => handleNavigate('home')}
          onOpenContact={scrollToContact}
        />
      )}

      {/* Main Home Page Sections */}
      {activeView === 'home' && (
        <main className="w-full">
          <HeroSection
            onOpenTrial={() => {
              showToast("Welcome! Requesting trial provisioning portal...");
              scrollToContact();
            }}
            onWatchDemo={scrollToServices}
          />

          <StartingPointsSection />

          <WhyVgtSection />

          <ErpComparisonSection />

          <ShowcaseDashboard />

          <FeatureTabs
            onOpenTrial={() => {
              showToast("Feature node demo requested.");
              scrollToContact();
            }}
          />

          <CrmShowcaseSection
            onOpenTrial={() => {
              showToast("CRM AI demo requested.");
              scrollToContact();
            }}
          />

          <IndustryGrid />

          <MicrosoftPartnershipCallout />

          <TestimonialCarousel />

          <FaqAccordion />

          <ContactCtaSection onShowToast={showToast} />
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
