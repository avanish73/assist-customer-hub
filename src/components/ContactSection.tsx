import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Multiple ways to reach our support team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Phone Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Speak directly with our support team
              </p>
              <p className="font-semibold mb-2">1-800-SUPPORT</p>
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                9 AM - 6 PM EST
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="h-12 w-12 text-success mx-auto mb-2" />
              <CardTitle className="text-lg">Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Send us detailed questions via email
              </p>
              <p className="font-semibold mb-2">support@supporthub.com</p>
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                24-48 hour response
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-warning mx-auto mb-2" />
              <CardTitle className="text-lg">Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get instant help from our chat team
              </p>
              <Button className="mb-2" onClick={() => alert('Live chat would open here!')}>
                Start Chat
              </Button>
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                Available 24/7
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📚</span>
              </div>
              <CardTitle className="text-lg">Knowledge Base</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Browse our comprehensive help articles
              </p>
              <Button variant="outline" onClick={() => alert('Knowledge base would open here!')}>
                Browse Articles
              </Button>
              <div className="flex items-center justify-center text-sm text-muted-foreground mt-2">
                500+ articles
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Need urgent help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For critical issues that require immediate attention, please use our priority support channel.
              </p>
              <Button variant="destructive" size="lg">
                Emergency Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;