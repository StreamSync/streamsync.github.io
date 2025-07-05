"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Clock, Filter, Send } from "lucide-react";

// Mock data for streamers
const mockStreamers = [
  {
    id: 1,
    name: "GamerGirl101",
    platform: "Twitch",
    avgViewers: "501-1000",
    genres: ["Action", "Adventure"],
    contentStyle: ["Chill plays", "Beginner-friendly"],
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    followers: "15K",
  },
  {
    id: 2,
    name: "SpeedRunMaster",
    platform: "YouTube",
    avgViewers: "1001-5000",
    genres: ["Platformer", "Action"],
    contentStyle: ["Speedruns", "Expert gameplay"],
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
    followers: "45K",
  },
  {
    id: 3,
    name: "CozyGaming",
    platform: "Twitch",
    avgViewers: "101-500",
    genres: ["Simulation", "Puzzle"],
    contentStyle: ["Chill plays", "Educational"],
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    followers: "8K",
  },
];

// Mock data for requests
const mockRequests = [
  {
    id: 1,
    streamer: "GamerGirl101",
    status: "pending",
    sentAt: "2024-01-15",
    message:
      "Hey! I think my indie adventure game would be perfect for your channel...",
  },
  {
    id: 2,
    streamer: "SpeedRunMaster",
    status: "accepted",
    sentAt: "2024-01-10",
    message: "Would love to see you speedrun my platformer!",
  },
  {
    id: 3,
    streamer: "CozyGaming",
    status: "declined",
    sentAt: "2024-01-08",
    message: "This cozy puzzle game seems perfect for your audience.",
  },
];

export default function DeveloperDashboard() {
  const [genreFilter, setGenreFilter] = useState("All Genres");
  const [viewerFilter, setViewerFilter] = useState("All Ranges");
  const [styleFilter, setStyleFilter] = useState("All Styles");

  const filteredStreamers = mockStreamers.filter((streamer) => {
    if (genreFilter !== "All Genres" && !streamer.genres.includes(genreFilter))
      return false;
    if (viewerFilter !== "All Ranges" && streamer.avgViewers !== viewerFilter)
      return false;
    if (
      styleFilter !== "All Styles" &&
      !streamer.contentStyle.includes(styleFilter)
    )
      return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-300 text-black border-2 border-black";
      case "accepted":
        return "bg-green-400 text-black border-2 border-black";
      case "declined":
        return "bg-red-400 text-black border-2 border-black";
      default:
        return "bg-gray-200 text-black border-2 border-black";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-5xl font-black text-black mb-4">
            DEVELOPER DASHBOARD
          </h1>
          <p className="text-xl font-bold text-purple-600">
            Find streamers and manage your collaboration requests
          </p>
        </div>

        <Tabs defaultValue="discover" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-purple-600 border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <TabsTrigger
              value="discover"
              className="font-black text-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black"
            >
              DISCOVER STREAMERS
            </TabsTrigger>
            <TabsTrigger
              value="requests"
              className="font-black text-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black"
            >
              MY REQUESTS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-8">
            {/* Filters */}
            <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader className="bg-purple-600 border-b-4 border-black">
                <CardTitle className="flex items-center gap-2 text-white text-2xl font-black">
                  <div className="bg-black p-2 border-2 border-black">
                    <Filter className="h-5 w-5 text-purple-600" />
                  </div>
                  FILTERS
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Select value={genreFilter} onValueChange={setGenreFilter}>
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Filter by genre" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        <SelectItem value="All Genres" className="font-bold">
                          All Genres
                        </SelectItem>
                        <SelectItem value="Action" className="font-bold">
                          Action
                        </SelectItem>
                        <SelectItem value="Adventure" className="font-bold">
                          Adventure
                        </SelectItem>
                        <SelectItem value="Simulation" className="font-bold">
                          Simulation
                        </SelectItem>
                        <SelectItem value="Puzzle" className="font-bold">
                          Puzzle
                        </SelectItem>
                        <SelectItem value="Platformer" className="font-bold">
                          Platformer
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select
                      value={viewerFilter}
                      onValueChange={setViewerFilter}
                    >
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Filter by viewers" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        <SelectItem value="All Ranges" className="font-bold">
                          All Ranges
                        </SelectItem>
                        <SelectItem value="0-100" className="font-bold">
                          0-100
                        </SelectItem>
                        <SelectItem value="101-500" className="font-bold">
                          101-500
                        </SelectItem>
                        <SelectItem value="501-1000" className="font-bold">
                          501-1000
                        </SelectItem>
                        <SelectItem value="1001-5000" className="font-bold">
                          1001-5000
                        </SelectItem>
                        <SelectItem value="5000+" className="font-bold">
                          5000+
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select value={styleFilter} onValueChange={setStyleFilter}>
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Filter by style" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        <SelectItem value="All Styles" className="font-bold">
                          All Styles
                        </SelectItem>
                        <SelectItem value="Chill plays" className="font-bold">
                          Chill plays
                        </SelectItem>
                        <SelectItem value="Speedruns" className="font-bold">
                          Speedruns
                        </SelectItem>
                        <SelectItem
                          value="Beginner-friendly"
                          className="font-bold"
                        >
                          Beginner-friendly
                        </SelectItem>
                        <SelectItem
                          value="Expert gameplay"
                          className="font-bold"
                        >
                          Expert gameplay
                        </SelectItem>
                        <SelectItem value="Educational" className="font-bold">
                          Educational
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Streamers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStreamers.map((streamer) => (
                <Card
                  key={streamer.id}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                >
                  <CardHeader className="bg-green-400 border-b-4 border-black">
                    <div className="flex items-center gap-3">
                      <Avatar className="border-2 border-black">
                        <AvatarImage
                          src={streamer.avatar || "/placeholder.svg"}
                          alt={streamer.name}
                        />
                        <AvatarFallback className="bg-white text-black font-bold">
                          {streamer.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-black text-lg text-black">
                            {streamer.name}
                          </h3>
                          {streamer.isOnline && (
                            <div className="w-3 h-3 bg-green-600 rounded-full border border-black"></div>
                          )}
                        </div>
                        <p className="text-sm font-bold text-black">
                          {streamer.platform} • {streamer.followers} followers
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-black p-1 border-2 border-black">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold">
                          {streamer.avgViewers} avg viewers
                        </span>
                      </div>

                      <div>
                        <p className="font-black mb-2">GENRES:</p>
                        <div className="flex flex-wrap gap-2">
                          {streamer.genres.map((genre) => (
                            <Badge
                              key={genre}
                              className="bg-purple-600 text-white border-2 border-black font-bold"
                            >
                              {genre}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-black mb-2">CONTENT STYLE:</p>
                        <div className="flex flex-wrap gap-2">
                          {streamer.contentStyle.map((style) => (
                            <Badge
                              key={style}
                              className="bg-yellow-300 text-black border-2 border-black font-bold"
                            >
                              {style}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-green-400 text-black border-4 border-black font-black text-lg py-3 hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Send className="h-5 w-5 mr-2" />
                        REQUEST COLLABORATION
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <div className="space-y-6">
              {mockRequests.map((request) => (
                <Card
                  key={request.id}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  <CardHeader className="bg-purple-600 border-b-4 border-black">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                      <div>
                        <CardTitle className="text-xl sm:text-2xl font-black text-white">
                          {request.streamer}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 text-purple-200 font-bold">
                          <div className="bg-black p-1 border-2 border-black">
                            <Clock className="h-4 w-4 text-purple-600" />
                          </div>
                          Sent on {request.sentAt}
                        </CardDescription>
                      </div>
                      <Badge
                        className={`${getStatusColor(
                          request.status
                        )} font-black text-lg px-4 py-2`}
                      >
                        {request.status.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-black font-bold text-lg mb-6">
                      {request.message}
                    </p>
                    {request.status === "pending" && (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="outline"
                          className="border-4 border-black bg-white text-black font-bold hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                          EDIT REQUEST
                        </Button>
                        <Button className="bg-red-400 text-black border-4 border-black font-bold hover:bg-red-500 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          CANCEL REQUEST
                        </Button>
                      </div>
                    )}
                    {request.status === "accepted" && (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-green-400 text-black border-4 border-black font-bold hover:bg-green-500 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          VIEW CONTACT INFO
                        </Button>
                        <Button
                          variant="outline"
                          className="border-4 border-black bg-white text-black font-bold hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                          SEND FOLLOW-UP
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
