import { Button } from "@/components/ui/button";
import { HeadphonesIcon, User } from "lucide-react";
import NotificationBell from "./NotificationBell";

interface HeaderProps {
  onShowAuth?: () => void;
  onSubmitTicket?: () => void;
}

const Header = ({ onShowAuth, onSubmitTicket }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HeadphonesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SupportHub</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('tickets')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              My Tickets
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <NotificationBell />
            <Button variant="ghost" size="icon" onClick={onShowAuth}>
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="default"
              onClick={onSubmitTicket || (() => scrollToSection('tickets'))}
            >
              Submit Ticket
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;