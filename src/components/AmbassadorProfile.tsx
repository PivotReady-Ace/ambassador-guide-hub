import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, CheckCircle, Award } from "lucide-react";
import ambassadorImage from "@/assets/ambassador-profile.jpg";

export const AmbassadorProfile = () => {
  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-r from-card to-secondary/30">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={ambassadorImage}
            alt="Ambassador Profile"
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-primary/20"
          />
          <div className="absolute -bottom-2 -right-2 bg-success rounded-full p-2">
            <CheckCircle className="w-6 h-6 text-success-foreground" />
          </div>
        </div>

        {/* Profile Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Mike's Panama Network
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              "Helping Black families relocate to Panama since 2021"
            </p>
            
            {/* Rating and Trust Score */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9</span>
                <span className="text-muted-foreground">(247 reviews)</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="default" className="bg-success text-success-foreground">
                <Award className="w-4 h-4 mr-1" />
                Verified Ambassador
              </Badge>
              <Badge variant="secondary">
                Community Favorite
              </Badge>
              <Badge variant="secondary">
                Panama Expert
              </Badge>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold text-lg">3 Cities</span>
              </div>
              <p className="text-muted-foreground">Panama City, David, Boquete</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold text-lg">127 Businesses</span>
              </div>
              <p className="text-muted-foreground">Trusted local providers</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="font-semibold text-lg">1,200+</span>
              </div>
              <p className="text-muted-foreground">Successful referrals</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};