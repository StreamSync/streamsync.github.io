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
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const genres = [
  "Action",
  "Adventure",
  "RPG",
  "Strategy",
  "Puzzle",
  "Simulation",
  "Sports",
  "Racing",
  "Fighting",
  "Platformer",
  "Shooter",
  "Horror",
];

const platforms = [
  "PC (Steam)",
  "PC (Epic Games)",
  "PlayStation",
  "Xbox",
  "Nintendo Switch",
  "Mobile",
];

const audienceTags = [
  "Roguelike fans",
  "Co-op gamers",
  "Speedrunners",
  "Casual players",
  "Competitive players",
  "Story lovers",
  "Indie game fans",
  "Retro gamers",
];

export default function DeveloperProfilePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    gameName: "",
    genre: "",
    platform: "",
    trailerUrl: "",
    description: "",
    tags: [] as string[],
  });

  const addTag = (tag: string) => {
    if (!formData.tags.includes(tag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Developer Profile:", formData);
    router.push("/dashboard/developer");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto sm:max-w-xl px-2">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-black text-black mb-4">
              CREATE YOUR DEVELOPER PROFILE
            </h1>
            <p className="text-xl font-bold text-purple-600">
              Tell us about your game to find the perfect streamers
            </p>
          </div>

          <Card className="border-4 border-black bg-purple-600 text-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-black border-b-4 border-black">
              <CardTitle className="text-3xl font-black text-purple-600">
                GAME INFORMATION
              </CardTitle>
              <CardDescription className="text-purple-200 text-lg font-bold">
                Provide details about your game to help streamers understand if
                it's a good fit
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="gameName"
                      className="text-lg font-black text-white mb-2 block"
                    >
                      GAME NAME *
                    </Label>
                    <Input
                      id="gameName"
                      value={formData.gameName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          gameName: e.target.value,
                        }))
                      }
                      placeholder="Enter your game's name"
                      className="border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="genre"
                      className="text-lg font-black text-white mb-2 block"
                    >
                      GENRE *
                    </Label>
                    <Select
                      value={formData.genre}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, genre: value }))
                      }
                    >
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        {genres.map((genre) => (
                          <SelectItem
                            key={genre}
                            value={genre}
                            className="font-bold text-lg"
                          >
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="platform"
                    className="text-lg font-black text-white mb-2 block"
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

                <div>
                  <Label
                    htmlFor="trailerUrl"
                    className="text-lg font-black text-white mb-2 block"
                  >
                    TRAILER URL
                  </Label>
                  <Input
                    id="trailerUrl"
                    value={formData.trailerUrl}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        trailerUrl: e.target.value,
                      }))
                    }
                    placeholder="https://youtube.com/watch?v=..."
                    type="url"
                    className="border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="description"
                    className="text-lg font-black text-white mb-2 block"
                  >
                    GAME DESCRIPTION
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Describe your game, its unique features, and what makes it special..."
                    rows={4}
                    className="border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                <div>
                  <Label className="text-lg font-black text-white mb-2 block">
                    TARGET AUDIENCE TAGS
                  </Label>
                  <p className="text-purple-200 font-bold mb-4">
                    Select tags that describe your target audience
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {audienceTags.map((tag) => (
                      <Button
                        key={tag}
                        type="button"
                        variant={
                          formData.tags.includes(tag) ? "default" : "outline"
                        }
                        onClick={() => addTag(tag)}
                        className={`border-4 border-black font-bold text-sm p-3 transition-colors ${
                          formData.tags.includes(tag)
                            ? "bg-green-400 text-black hover:bg-green-300"
                            : "bg-white text-black hover:bg-green-400"
                        }`}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>

                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {formData.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-green-400 text-black border-2 border-black font-bold text-sm p-2 flex items-center gap-2"
                        >
                          {tag}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeTag(tag)}
                            className="h-4 w-4 p-0 hover:bg-black hover:text-green-400"
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
                    className="w-full sm:w-auto bg-green-400 text-black border-4 border-black font-black text-lg px-8 py-4 hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    CREATE PROFILE & CONTINUE
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    className="w-full sm:w-auto border-4 border-black bg-white text-black font-bold text-lg px-8 py-4 hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
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
