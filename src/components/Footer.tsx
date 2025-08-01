import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Plus } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Ambassador Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Mike's Panama Network</h3>
            <p className="text-muted-foreground mb-4">
              Connecting expats with trusted local services since 2021. 
              Every referral is personally vetted.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>📧 contact@mikespanamalist.com</p>
              <p>📱 +507 6555-1234</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <ExternalLink className="w-4 h-4" />
                Report a Problem
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <ExternalLink className="w-4 h-4" />
                Suggest a Business
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <ExternalLink className="w-4 h-4" />
                Join WhatsApp Group
              </Button>
            </div>
          </div>

          {/* Start Your Own */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Ambassadors</h3>
            <p className="text-muted-foreground mb-4">
              Help expats in your area find trusted services and build your community.
            </p>
            <Button className="w-full gap-2">
              <Plus className="w-4 h-4" />
              Start Your Own Comuniti
            </Button>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Mike's Panama Network. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Powered by</span>
            <Button variant="link" className="h-auto p-0 text-primary font-semibold">
              Comuniti
            </Button>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>
            This directory is maintained by an independent ambassador. 
            Comuniti provides the platform but does not endorse specific businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};