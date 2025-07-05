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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const platforms = ["Twitch", "YouTube", "Kick", "All"];

const viewerRanges = ["0-100", "101-500", "501-1000", "1001-5000", "5000+"];

const contentStyles = [
  "Chill plays",
  "Speedruns",
  "Beginner-friendly",
  "Expert gameplay",
  "Commentary heavy",
  "Educational",
  "Variety gaming",
  "Horror specialist",
  "Competitive",
  "Co-op focused",
  "Indie showcase",
  "Retro gaming",
];

export default function StreamerProfilePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    channelName: "",
    platform: "",
    avgViewers: "",
    streamSchedule: "",
    contentTags: [] as string[],
  });

  const addTag = (tag: string) => {
    if (!formData.contentTags.includes(tag)) {
      setFormData((prev) => ({
        ...prev,
        contentTags: [...prev.contentTags, tag],
      }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      contentTags: prev.contentTags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Streamer Profile:", formData);
    router.push("/dashboard/streamer");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-black text-black mb-4">
              CREATE YOUR STREAMER PROFILE
            </h1>
            <p className="text-xl font-bold text-green-400">
              Tell us about your content to find games that match your style
            </p>
          </div>

          <Card className="border-4 border-black bg-green-400 text-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-black border-b-4 border-black">
              <CardTitle className="text-3xl font-black text-green-400">
                CHANNEL INFORMATION
              </CardTitle>
              <CardDescription className="text-green-200 text-lg font-bold">
                Help developers understand your content style and audience
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="channelName"
                      className="text-lg font-black text-black mb-2 block"
                    >
                      CHANNEL NAME *
                    </Label>
                    <Input
                      id="channelName"
                      value={formData.channelName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          channelName: e.target.value,
                        }))
                      }
                      placeholder="Your channel/username"
                      className="border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="platform"
                      className="text-lg font-black text-black mb-2 block"
                    >
                      PLATFORM *
                    </Label>
                    <Select
                      value={formData.platform}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, platform: value }))
                      }
                    >
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        {platforms.map((platform) => (
                          <SelectItem
                            key={platform}
                            value={platform}
                            className="font-bold text-lg"
                          >
                            {platform}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="avgViewers"
                      className="text-lg font-black text-black mb-2 block"
                    >
                      AVERAGE VIEWERS *
                    </Label>
                    <Select
                      value={formData.avgViewers}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, avgViewers: value }))
                      }
                    >
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        {viewerRanges.map((range) => (
                          <SelectItem
                            key={range}
                            value={range}
                            className="font-bold text-lg"
                          >
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="streamSchedule"
                      className="text-lg font-black text-black mb-2 block"
                    >
                      STREAM SCHEDULE
                    </Label>
                    <Input
                      id="streamSchedule"
                      value={formData.streamSchedule}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          streamSchedule: e.target.value,
                        }))
                      }
                      placeholder="e.g., Mon-Fri 7-10 PM EST"
                      className="border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-black text-black mb-2 block">
                    CONTENT STYLE TAGS
                  </Label>
                  <p className="text-green-800 font-bold mb-4">
                    Select tags that describe your content style
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {contentStyles.map((style) => (
                      <Button
                        key={style}
                        type="button"
                        variant={
                          formData.contentTags.includes(style)
                            ? "default"
                            : "outline"
                        }
                        onClick={() => addTag(style)}
                        className={`border-4 border-black font-bold text-sm p-3 transition-colors ${
                          formData.contentTags.includes(style)
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-white text-black hover:bg-purple-600 hover:text-white"
                        }`}
                      >
                        {style}
                      </Button>
                    ))}
                  </div>

                  {formData.contentTags.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {formData.contentTags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-purple-600 text-white border-2 border-black font-bold text-sm p-2 flex items-center gap-2"
                        >
                          {tag}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeTag(tag)}
                            className="h-4 w-4 p-0 hover:bg-black hover:text-purple-600"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="bg-purple-600 text-white border-4 border-black font-black text-lg px-8 py-4 hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    CREATE PROFILE & CONTINUE
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    className="border-4 border-black bg-white text-black font-bold text-lg px-8 py-4 hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    BACK
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
