import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";

const faqData = [
  {
    id: "1",
    question: "How do I reset my password?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page, enter your email address, and follow the instructions sent to your email."
  },
  {
    id: "2",
    question: "How can I update my billing information?",
    answer: "You can update your billing information by going to Account Settings > Billing > Payment Methods. Click 'Edit' next to your current payment method."
  },
  {
    id: "3",
    question: "What are your support hours?",
    answer: "Our support team is available Monday through Friday, 9 AM to 6 PM EST. We also offer 24/7 chat support for urgent issues."
  },
  {
    id: "4",
    question: "How do I cancel my subscription?",
    answer: "To cancel your subscription, go to Account Settings > Subscription > Cancel Plan. Your service will remain active until the end of your current billing period."
  },
  {
    id: "5",
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time from Account Settings > Subscription > Change Plan. Changes take effect immediately."
  },
  {
    id: "6",
    question: "How do I contact technical support?",
    answer: "You can contact technical support by submitting a ticket through this portal, using our live chat feature, or emailing support@supporthub.com."
  }
];

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Find quick answers to common questions
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible>
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No FAQs found matching your search. Try different keywords or submit a ticket for help.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;