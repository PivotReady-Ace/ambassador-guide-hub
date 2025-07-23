import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Filter, MapPin, Star, Clock, TrendingUp } from "lucide-react";

interface FilterSectionProps {
  onFilterChange: (filters: any) => void;
}

export const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("rating");

  const categories = [
    "Immigration Lawyer",
    "Real Estate Agent", 
    "Doctor",
    "Dentist",
    "Private Driver",
    "Tour Guide",
    "Accountant",
    "Banking",
    "Property Manager",
    "Restaurant"
  ];

  const cities = ["Panama City", "David", "Boquete"];
  const ratings = ["4.5+", "4.0+", "3.5+"];

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedCity("");
    setSelectedRating("");
    setSortBy("rating");
    onFilterChange({});
  };

  const hasActiveFilters = selectedCategory || selectedCity || selectedRating;

  return (
    <div className="bg-card p-6 rounded-lg border mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Find Services</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="ml-auto text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger>
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                <MapPin className="w-4 h-4 mr-2" />
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedRating} onValueChange={setSelectedRating}>
          <SelectTrigger>
            <SelectValue placeholder="Min Rating" />
          </SelectTrigger>
          <SelectContent>
            {ratings.map((rating) => (
              <SelectItem key={rating} value={rating}>
                <Star className="w-4 h-4 mr-2" />
                {rating}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">
              <Star className="w-4 h-4 mr-2" />
              Highest Rated
            </SelectItem>
            <SelectItem value="recent">
              <Clock className="w-4 h-4 mr-2" />
              Recently Added
            </SelectItem>
            <SelectItem value="popular">
              <TrendingUp className="w-4 h-4 mr-2" />
              Most Contacted
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedCategory && (
            <Badge variant="secondary" className="gap-1">
              {selectedCategory}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => setSelectedCategory("")}
              />
            </Badge>
          )}
          {selectedCity && (
            <Badge variant="secondary" className="gap-1">
              <MapPin className="w-3 h-3" />
              {selectedCity}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => setSelectedCity("")}
              />
            </Badge>
          )}
          {selectedRating && (
            <Badge variant="secondary" className="gap-1">
              <Star className="w-3 h-3" />
              {selectedRating}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => setSelectedRating("")}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};