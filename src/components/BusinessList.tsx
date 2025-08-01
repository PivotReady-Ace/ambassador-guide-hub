import { useState } from "react";
import { BusinessCard } from "./BusinessCard";
import { Globe, Heart, Shield, Baby, Car, CreditCard, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceTag {
  type: 'language' | 'identity' | 'service' | 'payment';
  label: string;
  icon: React.ReactNode;
  color: 'success' | 'primary' | 'accent' | 'secondary';
}

const mockBusinesses = [
  {
    id: "1",
    name: "Rodriguez Immigration Law",
    category: "Immigration Lawyer",
    rating: 4.9,
    reviewCount: 45,
    city: "Panama City",
    whatsapp: "50765551234",
    verified: true,
    referrers: ["Mike", "Sarah", "John"],
    serviceTags: [
      { type: 'language' as const, label: 'English-speaking', icon: <Globe className="w-3 h-3" />, color: 'success' as const },
      { type: 'identity' as const, label: 'LGBTQI+ friendly', icon: <Heart className="w-3 h-3" />, color: 'accent' as const },
      { type: 'service' as const, label: 'Evening hours', icon: <Shield className="w-3 h-3" />, color: 'primary' as const }
    ],
    identityReviews: {
      count: 23,
      identity: "LGBTQI+ expats"
    },
    recentlyAdded: false
  },
  {
    id: "2", 
    name: "Dr. Maria Santos",
    category: "Family Doctor",
    rating: 4.8,
    reviewCount: 67,
    city: "Panama City",
    whatsapp: "50765551235",
    verified: true,
    referrers: ["Mike"],
    serviceTags: [
      { type: 'language' as const, label: 'English-speaking', icon: <Globe className="w-3 h-3" />, color: 'success' as const },
      { type: 'identity' as const, label: 'Black Owned', icon: <Star className="w-3 h-3" />, color: 'accent' as const },
      { type: 'service' as const, label: 'Child-friendly', icon: <Baby className="w-3 h-3" />, color: 'accent' as const },
      { type: 'payment' as const, label: 'Insurance accepted', icon: <CreditCard className="w-3 h-3" />, color: 'primary' as const }
    ],
    identityReviews: {
      count: 34,
      identity: "Black families"
    },
    recentlyAdded: true
  },
  {
    id: "3",
    name: "Carlos Private Tours",
    category: "Tour Guide",
    rating: 4.7,
    reviewCount: 89,
    city: "Boquete",
    whatsapp: "50765551236",
    verified: false,
    referrers: ["Mike", "Ana"],
    serviceTags: [
      { type: 'language' as const, label: 'English-speaking', icon: <Globe className="w-3 h-3" />, color: 'success' as const },
      { type: 'service' as const, label: 'Transport included', icon: <Car className="w-3 h-3" />, color: 'primary' as const }
    ],
    recentlyAdded: false
  },
  {
    id: "4",
    name: "Panama Properties Plus",
    category: "Real Estate Agent",
    rating: 4.9,
    reviewCount: 123,
    city: "David",
    whatsapp: "50765551237",
    verified: true,
    referrers: ["Mike", "Roberto", "Lisa"],
    serviceTags: [
      { type: 'language' as const, label: 'English-speaking', icon: <Globe className="w-3 h-3" />, color: 'success' as const },
      { type: 'identity' as const, label: 'Senior-friendly', icon: <Shield className="w-3 h-3" />, color: 'accent' as const },
      { type: 'payment' as const, label: 'USD accepted', icon: <CreditCard className="w-3 h-3" />, color: 'primary' as const }
    ],
    identityReviews: {
      count: 45,
      identity: "retirees"
    },
    recentlyAdded: false
  },
  {
    id: "5",
    name: "Elite Dental Clinic",
    category: "Dentist",
    rating: 4.6,
    reviewCount: 78,
    city: "Panama City",
    whatsapp: "50765551238",
    verified: true,
    referrers: ["Mike"],
    serviceTags: [
      { type: 'language' as const, label: 'English-speaking', icon: <Globe className="w-3 h-3" />, color: 'success' as const },
      { type: 'service' as const, label: 'Emergency hours', icon: <Shield className="w-3 h-3" />, color: 'primary' as const }
    ],
    recentlyAdded: true
  },
  {
    id: "6",
    name: "Ramirez Accounting Services",
    category: "Accountant",
    rating: 4.8,
    reviewCount: 56,
    city: "Panama City",
    whatsapp: "50765551239",
    verified: true,
    referrers: ["Mike", "Sofia"],
    serviceTags: [
      { type: 'language' as const, label: 'English-speaking', icon: <Globe className="w-3 h-3" />, color: 'success' as const },
      { type: 'service' as const, label: 'Tax expertise', icon: <Shield className="w-3 h-3" />, color: 'primary' as const },
      { type: 'service' as const, label: 'Digital meetings', icon: <Car className="w-3 h-3" />, color: 'secondary' as const }
    ],
    identityReviews: {
      count: 28,
      identity: "small business owners"
    },
    recentlyAdded: false
  }
];

export const BusinessList = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedBusinesses = showAll ? mockBusinesses : mockBusinesses.slice(0, 4);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">
          Trusted Service Providers
        </h2>
        <div className="text-muted-foreground">
          {mockBusinesses.length} businesses found
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayedBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>

      {mockBusinesses.length > 4 && (
        <Card className="p-6 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="gap-2"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show {mockBusinesses.length - 4} More Businesses
              </>
            )}
          </Button>
        </Card>
      )}
    </div>
  );
};