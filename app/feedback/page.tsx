"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, MessageSquare } from "lucide-react";

export default function FeedbackPage() {
  const [userType, setUserType] = useState<"developer" | "streamer">(
    "developer"
  );
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    collaboration: "",
    results: "",
    audienceMatch: "",
    additionalFeedback: "",
  });

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", { userType, rating, ...formData });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-black text-black mb-4">
              POST-COLLABORATION FEEDBACK
            </h1>
            <p className="text-lg sm:text-xl font-bold text-black">
              Help us improve StreamSync by sharing your collaboration
              experience
            </p>
          </div>

          <Card className="border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-yellow-300 border-b-4 border-black">
              <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-black text-2xl sm:text-3xl font-black">
                <div className="bg-black p-2 border-2 border-black">
                  <MessageSquare className="h-5 w-5 text-yellow-300" />
                </div>
                SHARE YOUR EXPERIENCE
              </CardTitle>
              <CardDescription className="text-black font-bold text-base sm:text-lg">
                Your feedback helps us match developers and streamers more
                effectively
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* User Type Selection */}
                <div>
                  <Label className="text-lg font-black text-black mb-2 block">
                    I AM A:
                  </Label>
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <Button
                      type="button"
                      variant={userType === "developer" ? "default" : "outline"}
                      onClick={() => setUserType("developer")}
                      className={`border-4 border-black font-black text-lg px-6 py-4 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                        userType === "developer"
                          ? "bg-purple-600 text-white hover:bg-purple-700"
                          : "bg-white text-black hover:bg-purple-600 hover:text-white"
                      }`}
                    >
                      DEVELOPER
                    </Button>
                    <Button
                      type="button"
                      variant={userType === "streamer" ? "default" : "outline"}
                      onClick={() => setUserType("streamer")}
                      className={`border-4 border-black font-black text-lg px-6 py-4 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                        userType === "streamer"
                          ? "bg-green-400 text-black hover:bg-green-500"
                          : "bg-white text-black hover:bg-green-400"
                      }`}
                    >
                      STREAMER
                    </Button>
                  </div>
                </div>

                {/* Overall Rating */}
                <div>
                  <Label className="text-lg font-black text-black mb-2 block">
                    OVERALL EXPERIENCE
                  </Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        className="p-2 border-2 border-black hover:bg-yellow-300 transition-colors"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Collaboration Details */}
                <div>
                  <Label
                    htmlFor="collaboration"
                    className="text-lg font-black text-black mb-2 block"
                  >
                    WHICH COLLABORATION WAS THIS FOR?
                  </Label>
                  <Input
                    id="collaboration"
                    value={formData.collaboration}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        collaboration: e.target.value,
                      }))
                    }
                    placeholder="e.g., Mystic Realms with GamerGirl101"
                    className="border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    required
                  />
                </div>

                {/* Developer-specific questions */}
                {userType === "developer" && (
                  <div>
                    <Label
                      htmlFor="results"
                      className="text-lg font-black text-black mb-2 block"
                    >
                      HOW MANY WISHLISTS/SALES RESULTED FROM THIS COLLABORATION?
                    </Label>
                    <Select
                      value={formData.results}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, results: value }))
                      }
                    >
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        <SelectItem value="0-10" className="font-bold">
                          0-10
                        </SelectItem>
                        <SelectItem value="11-50" className="font-bold">
                          11-50
                        </SelectItem>
                        <SelectItem value="51-100" className="font-bold">
                          51-100
                        </SelectItem>
                        <SelectItem value="101-500" className="font-bold">
                          101-500
                        </SelectItem>
                        <SelectItem value="500+" className="font-bold">
                          500+
                        </SelectItem>
                        <SelectItem value="unknown" className="font-bold">
                          Too early to tell
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Streamer-specific questions */}
                {userType === "streamer" && (
                  <div>
                    <Label
                      htmlFor="audienceMatch"
                      className="text-lg font-black text-black mb-2 block"
                    >
                      HOW WELL DID THE GAME MATCH YOUR AUDIENCE?
                    </Label>
                    <Select
                      value={formData.audienceMatch}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          audienceMatch: value,
                        }))
                      }
                    >
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        <SelectItem value="perfect" className="font-bold">
                          Perfect match - audience loved it
                        </SelectItem>
                        <SelectItem value="good" className="font-bold">
                          Good match - mostly positive response
                        </SelectItem>
                        <SelectItem value="okay" className="font-bold">
                          Okay match - mixed response
                        </SelectItem>
                        <SelectItem value="poor" className="font-bold">
                          Poor match - audience wasn't interested
                        </SelectItem>
                        <SelectItem value="terrible" className="font-bold">
                          Terrible match - completely wrong audience
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Additional Feedback */}
                <div>
                  <Label
                    htmlFor="additionalFeedback"
                    className="text-lg font-black text-black mb-2 block"
                  >
                    ADDITIONAL FEEDBACK
                  </Label>
                  <Textarea
                    id="additionalFeedback"
                    value={formData.additionalFeedback}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        additionalFeedback: e.target.value,
                      }))
                    }
                    placeholder="Any other thoughts or suggestions for improving StreamSync?"
                    rows={4}
                    className="border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="bg-purple-600 text-white border-4 border-black font-black text-lg px-8 py-4 hover:bg-green-400 hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    SUBMIT FEEDBACK
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-4 border-black bg-white text-black font-bold text-lg px-8 py-4 hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    SKIP FOR NOW
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
