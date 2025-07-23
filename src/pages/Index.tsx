import { useState } from "react";
import { AmbassadorProfile } from "@/components/AmbassadorProfile";
import { FilterSection } from "@/components/FilterSection";
import { BusinessList } from "@/components/BusinessList";
import { ReviewSection } from "@/components/ReviewSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Ambassador Profile */}
        <AmbassadorProfile />

        {/* Filters */}
        <FilterSection onFilterChange={handleFilterChange} />

        {/* Business Directory */}
        <BusinessList />

        {/* Reviews Section */}
        <div className="mt-16">
          <ReviewSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
