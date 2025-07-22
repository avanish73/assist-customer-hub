import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TicketForm from "@/components/TicketForm";
import FAQSection from "@/components/FAQSection";
import TicketTracker from "@/components/TicketTracker";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AuthPage from "@/components/AuthPage";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);

  const scrollToTickets = () => {
    const element = document.getElementById('tickets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showAuth) {
    return <AuthPage onBack={() => setShowAuth(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onShowAuth={() => setShowAuth(true)} 
        onSubmitTicket={scrollToTickets}
      />
      <HeroSection />
      <TicketForm />
      <TicketTracker />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
