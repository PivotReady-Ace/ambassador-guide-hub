import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, MessageCircle, CheckCircle, Users, Eye, Globe, Heart, Shield, Baby, Car, CreditCard } from "lucide-react";

interface ServiceTag {
  type: 'language' | 'identity' | 'service' | 'payment';
  label: string;
  icon: React.ReactNode;
  color: 'success' | 'primary' | 'accent' | 'secondary';
}

interface BusinessCardProps {
  business: {
    id: string;
    name: string;
    category: string;
    rating: number;
    reviewCount: number;
    city: string;
    whatsapp: string;
    verified: boolean;
    referrers: string[];
    serviceTags?: ServiceTag[];
    identityReviews?: {
      count: number;
      identity: string;
    };
    recentlyAdded?: boolean;
  };
}

export const BusinessCard = ({ business }: BusinessCardProps) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${business.whatsapp}`, '_blank');
  };

  const handleLocationClick = () => {
    window.open(`https://maps.google.com?q=${encodeURIComponent(business.name + ' ' + business.city)}`, '_blank');
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary/20 hover:border-l-primary">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold text-foreground">{business.name}</h3>
              {business.verified && (
                <CheckCircle className="w-5 h-5 text-success" />
              )}
              {business.recentlyAdded && (
                <Badge variant="secondary" className="text-xs">
                  New
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground font-medium">{business.category}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= business.rating
                    ? "fill-accent text-accent"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="font-semibold">{business.rating}</span>
          <span className="text-muted-foreground">({business.reviewCount} reviews)</span>
        </div>

        {/* Service Tags */}
        {business.serviceTags && business.serviceTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {business.serviceTags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className={`gap-1 text-xs ${
                  tag.color === 'success' ? 'border-success/30 text-success bg-success/10' :
                  tag.color === 'primary' ? 'border-primary/30 text-primary bg-primary/10' :
                  tag.color === 'accent' ? 'border-accent/30 text-accent bg-accent/10' :
                  'border-secondary/30 text-secondary-foreground bg-secondary/20'
                }`}
              >
                {tag.icon}
                {tag.label}
              </Badge>
            ))}
          </div>
        )}

        {/* Referrer Info */}
        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">
            Referred by <span className="font-semibold text-foreground">Mike</span>
            {business.referrers.length > 1 && (
              <span> + {business.referrers.length - 1} others</span>
            )}
          </span>
        </div>

        {/* Identity Reviews */}
        {business.identityReviews && (
          <div className="bg-secondary/50 p-3 rounded-lg">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-left p-0 h-auto font-normal"
            >
              <Eye className="w-4 h-4 mr-2 text-primary" />
              <span>
                <span className="font-semibold">{business.identityReviews.count} reviews</span>
                {" "}by {business.identityReviews.identity}
              </span>
            </Button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact via WhatsApp
          </Button>
          <Button
            variant="outline"
            onClick={handleLocationClick}
            className="flex-1"
          >
            <MapPin className="w-4 h-4 mr-2" />
            View Location
          </Button>
        </div>

        {/* City Badge */}
        <div className="flex justify-between items-center pt-2 border-t border-border">
          <Badge variant="outline" className="gap-1">
            <MapPin className="w-3 h-3" />
            {business.city}
          </Badge>
        </div>
      </div>
    </Card>
  );
};