import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Clock, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLiveChat = () => {
    alert('Live chat feature would be available once Supabase is connected for real-time messaging!');
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How can we help you today?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get quick answers or submit a ticket for personalized support
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    scrollToSection('faq');
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card 
            className="text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => scrollToSection('tickets')}
          >
            <CardContent className="p-6">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Submit a Ticket</h3>
              <p className="text-muted-foreground">
                Can't find what you're looking for? Submit a support request
              </p>
            </CardContent>
          </Card>

          <Card 
            className="text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => scrollToSection('ticket-tracker')}
          >
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Tickets</h3>
              <p className="text-muted-foreground">
                Check the status of your existing support tickets
              </p>
            </CardContent>
          </Card>

          <Card 
            className="text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={handleLiveChat}
          >
            <CardContent className="p-6">
              <MessageCircle className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground">
                Get instant help from our support team
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;