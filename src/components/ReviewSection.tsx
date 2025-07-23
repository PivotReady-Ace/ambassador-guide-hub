import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MessageSquare, AlertTriangle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const identityOptions = [
  "LGBTQI+ expat",
  "Black family",
  "Asian expat", 
  "Retiree",
  "Young professional",
  "Family with children",
  "Small business owner",
  "Remote worker",
  "Student",
  "Other"
];

const mockReviews = [
  {
    id: "1",
    rating: 5,
    text: "Rodriguez Immigration Law helped my family navigate the residency process smoothly. Very professional and understanding of our specific needs.",
    identity: "Black family",
    date: "2 weeks ago",
    helpful: 12
  },
  {
    id: "2", 
    rating: 4,
    text: "Dr. Santos is wonderful! She speaks English well and really takes time to understand your concerns. Highly recommend for families.",
    identity: "Family with children", 
    date: "1 month ago",
    helpful: 8
  },
  {
    id: "3",
    rating: 5,
    text: "Carlos made our Boquete tour amazing. He knows all the best spots and is very patient with questions about living here permanently.",
    identity: "Retiree",
    date: "3 weeks ago", 
    helpful: 15
  }
];

export const ReviewSection = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [selectedIdentity, setSelectedIdentity] = useState("");
  const [showProblemForm, setShowProblemForm] = useState(false);
  const [problemText, setProblemText] = useState("");
  const { toast } = useToast();

  const handleSubmitReview = () => {
    if (rating === 0 || !reviewText.trim() || !selectedIdentity) {
      toast({
        title: "Missing Information",
        description: "Please provide a rating, review text, and identity tag.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback! Your review helps other expats find trusted services.",
    });

    setRating(0);
    setReviewText("");
    setSelectedIdentity("");
    setShowReviewForm(false);
  };

  const handleSubmitProblem = () => {
    if (!problemText.trim()) {
      toast({
        title: "Missing Information", 
        description: "Please describe the problem you'd like to report.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Problem Reported",
      description: "Thank you for the feedback. Mike and the service provider have been notified.",
    });

    setProblemText("");
    setShowProblemForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Community Reviews</h2>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setShowProblemForm(!showProblemForm)}
            className="gap-2"
          >
            <AlertTriangle className="w-4 h-4" />
            Report Problem
          </Button>
          <Button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Leave Review
          </Button>
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-4">Share Your Experience</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 cursor-pointer transition-colors ${
                      star <= rating
                        ? "fill-accent text-accent"
                        : "text-muted-foreground hover:text-accent"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Identity Tag (optional)</label>
              <Select value={selectedIdentity} onValueChange={setSelectedIdentity}>
                <SelectTrigger>
                  <SelectValue placeholder="How do you identify? (helps others like you)" />
                </SelectTrigger>
                <SelectContent>
                  {identityOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <Textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience to help other expats..."
                rows={4}
              />
            </div>

            <div className="flex gap-3">
              <Button onClick={handleSubmitReview} className="gap-2">
                <Send className="w-4 h-4" />
                Submit Review
              </Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Problem Report Form */}
      {showProblemForm && (
        <Card className="p-6 border-l-4 border-l-warning">
          <h3 className="text-lg font-semibold mb-4">Report a Problem</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Describe the Issue</label>
              <Textarea
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                placeholder="Please describe the problem you experienced..."
                rows={4}
              />
              <p className="text-sm text-muted-foreground mt-2">
                This will be sent to both Mike and the service provider for review.
              </p>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleSubmitProblem} variant="destructive" className="gap-2">
                <Send className="w-4 h-4" />
                Submit Report
              </Button>
              <Button variant="outline" onClick={() => setShowProblemForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <Badge variant="secondary">{review.identity}</Badge>
              </div>
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>
            <p className="text-foreground mb-3">{review.text}</p>
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{review.helpful} people found this helpful</span>
              <Button variant="ghost" size="sm">
                Helpful
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};