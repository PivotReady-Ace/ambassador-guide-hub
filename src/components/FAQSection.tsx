import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Users, Shield, MapPin, MessageCircle, Star } from "lucide-react";

const faqData = [
  {
    id: "what-is-comuniti",
    question: "What is Comuniti and how does it work?",
    answer: "Comuniti is a platform that connects people relocating abroad with trusted local service providers recommended by ambassadors they follow and trust. Each ambassador like Mike maintains their own curated list of vetted businesses they personally recommend to their community.",
    icon: <HelpCircle className="w-5 h-5 text-primary" />
  },
  {
    id: "why-trust-mike",
    question: "Why should I trust Mike's recommendations?",
    answer: "Mike has been helping families relocate to Panama since 2021 and has personally vetted each business on this list. He has a 4.9-star rating from 247+ community members and only recommends services he would use himself or has confirmed through trusted community feedback.",
    icon: <Shield className="w-5 h-5 text-success" />
  },
  {
    id: "how-contact-businesses",
    question: "How do I contact these businesses?",
    answer: "Each business listing includes a WhatsApp contact button and Google Maps location. Simply click 'Contact via WhatsApp' to start a conversation directly with the service provider. Most businesses here are experienced working with expats and many speak English.",
    icon: <MessageCircle className="w-5 h-5 text-success" />
  },
  {
    id: "identity-reviews",
    question: "What are identity-based reviews?",
    answer: "These are reviews left by people who share similar backgrounds or circumstances (like 'LGBTQI+ expats', 'Black families', or 'retirees'). This helps you find feedback from people whose experiences might be most relevant to your own situation.",
    icon: <Users className="w-5 h-5 text-accent" />
  },
  {
    id: "verified-badges",
    question: "What does the 'Verified' badge mean?",
    answer: "Verified businesses have had their contact information confirmed and have been personally vetted by the ambassador. While non-verified businesses can still be excellent, verified ones have gone through additional validation steps.",
    icon: <Shield className="w-5 h-5 text-primary" />
  },
  {
    id: "costs-fees",
    question: "Are there any costs or fees to use this directory?",
    answer: "No, this directory is completely free to use. Ambassadors maintain these lists as a service to their community. You pay businesses directly for their services, and there are no platform fees or commissions.",
    icon: <Star className="w-5 h-5 text-accent" />
  },
  {
    id: "add-review",
    question: "How do I leave a review after using a service?",
    answer: "After working with a business, you can return to this page and click 'Leave Review'. Your honest feedback helps other expats make informed decisions. You can optionally tag your review with how you identify to help similar community members.",
    icon: <Star className="w-5 h-5 text-warning" />
  },
  {
    id: "report-problems",
    question: "What if I have a problem with a recommended business?",
    answer: "Use the 'Report a Problem' button to notify both Mike and the business about any issues. This feedback helps maintain the quality of recommendations and ensures problems are addressed quickly.",
    icon: <Shield className="w-5 h-5 text-destructive" />
  },
  {
    id: "multiple-cities",
    question: "I'm considering multiple cities in Panama. Can this help?",
    answer: "Yes! Use the city filter to see services available in Panama City, David, and Boquete. Many businesses serve multiple areas, and some like immigration lawyers work with clients nationwide.",
    icon: <MapPin className="w-5 h-5 text-primary" />
  },
  {
    id: "language-barriers",
    question: "I don't speak Spanish well. Will these businesses work with me?",
    answer: "Most businesses in this directory have experience working with English-speaking expats. Look for reviews mentioning language support, and don't hesitate to ask about English services when you contact them via WhatsApp.",
    icon: <MessageCircle className="w-5 h-5 text-muted-foreground" />
  }
];

export const FAQSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          New to relocating abroad? Here are answers to common questions about using this directory 
          and working with trusted local service providers.
        </p>
        <Badge variant="secondary" className="mt-3">
          <Users className="w-4 h-4 mr-1" />
          First-time Expat Guide
        </Badge>
      </div>

      <Card className="p-6 bg-card border shadow-sm">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqData.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border border-border rounded-lg px-4 bg-background/50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span className="font-medium text-foreground">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            Join Mike's WhatsApp community group for real-time support from other expats.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.open('https://wa.me/50765551234', '_blank')}
              className="inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-success-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Message Mike Directly
            </button>
            <button
              onClick={() => window.open('https://chat.whatsapp.com/example', '_blank')}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Users className="w-4 h-4" />
              Join Community Group
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};