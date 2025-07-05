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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Gamepad2,
  Calendar,
  Filter,
  Check,
  X,
  Clock,
  Star,
} from "lucide-react";

// Mock data for games
const mockGames = [
  {
    id: 1,
    name: "Mystic Realms",
    developer: "Indie Studios",
    genre: "Adventure",
    platform: "PC (Steam)",
    isNew: true,
    description:
      "A beautiful fantasy adventure with stunning visuals and engaging story.",
    tags: ["Story lovers", "Casual players"],
    trailer: "https://example.com/trailer1",
    releaseDate: "2024-02-15",
  },
  {
    id: 2,
    name: "Speed Challenger",
    developer: "Fast Games Inc",
    genre: "Platformer",
    platform: "PC (Steam)",
    isNew: false,
    description:
      "Perfect for speedrunners with tight controls and competitive leaderboards.",
    tags: ["Speedrunners", "Competitive players"],
    trailer: "https://example.com/trailer2",
    releaseDate: "2024-01-20",
  },
  {
    id: 3,
    name: "Cozy Farm Life",
    developer: "Peaceful Games",
    genre: "Simulation",
    platform: "PC (Steam)",
    isNew: true,
    description:
      "A relaxing farming simulation perfect for chill gameplay sessions.",
    tags: ["Casual players", "Indie game fans"],
    trailer: "https://example.com/trailer3",
    releaseDate: "2024-02-10",
  },
];

// Mock data for requests
const mockRequests = [
  {
    id: 1,
    game: "Mystic Realms",
    developer: "Indie Studios",
    message:
      "Hi! I think Mystic Realms would be perfect for your adventure gaming content. It has a great story and beautiful visuals that your audience would love.",
    gameKey: "MYSTIC-REALM-KEY-123",
    receivedAt: "2024-01-16",
    status: "pending",
  },
  {
    id: 2,
    game: "Speed Challenger",
    developer: "Fast Games Inc",
    message:
      "Would you be interested in speedrunning our new platformer? It's designed specifically for speedrunners with tight controls and competitive features.",
    gameKey: "SPEED-CHAL-KEY-456",
    receivedAt: "2024-01-14",
    status: "pending",
  },
];

export default function StreamerDashboard() {
  const [genreFilter, setGenreFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [showNewOnly, setShowNewOnly] = useState(false);

  const filteredGames = mockGames.filter((game) => {
    if (genreFilter !== "all" && game.genre !== genreFilter) return false;
    if (platformFilter !== "all" && game.platform !== platformFilter)
      return false;
    if (showNewOnly && !game.isNew) return false;
    return true;
  });

  const handleRequestResponse = (
    requestId: number,
    response: "accept" | "decline"
  ) => {
    console.log(`Request ${requestId} ${response}ed`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-5xl font-black text-black mb-4">
            STREAMER DASHBOARD
          </h1>
          <p className="text-xl font-bold text-green-400">
            Discover new games and manage collaboration requests
          </p>
        </div>

        <Tabs defaultValue="discover" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-green-400 border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <TabsTrigger
              value="discover"
              className="font-black text-sm sm:text-lg bg-neutral-200 border-black border-1 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 "
            >
              DISCOVER GAMES
            </TabsTrigger>
            <TabsTrigger
              value="requests"
              className="font-black text-sm sm:text-lg bg-neutral-200 border-black border-1 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2  relative"
            >
              COLLABORATION REQUESTS
              {mockRequests.filter((r) => r.status === "pending").length >
                0 && (
                <Badge className="ml-2 bg-red-400 text-black border-2 border-black font-bold absolute -top-3 -right-2">
                  {mockRequests.filter((r) => r.status === "pending").length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-8">
            {/* Filters */}
            <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader className="bg-green-400 border-b-4 border-black">
                <CardTitle className="flex items-center gap-2 text-black text-2xl font-black">
                  <div className="bg-black p-2 border-2 border-black">
                    <Filter className="h-5 w-5 text-green-400" />
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
                        <SelectItem value="all" className="font-bold">
                          All Genres
                        </SelectItem>
                        <SelectItem value="Adventure" className="font-bold">
                          Adventure
                        </SelectItem>
                        <SelectItem value="Platformer" className="font-bold">
                          Platformer
                        </SelectItem>
                        <SelectItem value="Simulation" className="font-bold">
                          Simulation
                        </SelectItem>
                        <SelectItem value="Action" className="font-bold">
                          Action
                        </SelectItem>
                        <SelectItem value="Puzzle" className="font-bold">
                          Puzzle
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select
                      value={platformFilter}
                      onValueChange={setPlatformFilter}
                    >
                      <SelectTrigger className="border-4 border-black bg-white text-black font-bold text-lg p-4">
                        <SelectValue placeholder="Filter by platform" />
                      </SelectTrigger>
                      <SelectContent className="border-4 border-black bg-white">
                        <SelectItem value="all" className="font-bold">
                          All Platforms
                        </SelectItem>
                        <SelectItem value="PC (Steam)" className="font-bold">
                          PC (Steam)
                        </SelectItem>
                        <SelectItem
                          value="PC (Epic Games)"
                          className="font-bold"
                        >
                          PC (Epic Games)
                        </SelectItem>
                        <SelectItem value="PlayStation" className="font-bold">
                          PlayStation
                        </SelectItem>
                        <SelectItem value="Xbox" className="font-bold">
                          Xbox
                        </SelectItem>
                        <SelectItem
                          value="Nintendo Switch"
                          className="font-bold"
                        >
                          Nintendo Switch
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Button
                      variant={showNewOnly ? "default" : "outline"}
                      onClick={() => setShowNewOnly(!showNewOnly)}
                      className={`w-full border-4 border-black font-black text-lg py-4 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                        showNewOnly
                          ? "bg-purple-600 text-white hover:bg-purple-700"
                          : "bg-white text-black hover:bg-purple-600 hover:text-white"
                      }`}
                    >
                      {showNewOnly
                        ? "SHOWING NEW GAMES"
                        : "SHOW NEW GAMES ONLY"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => (
                <Card
                  key={game.id}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                >
                  <CardHeader className="bg-purple-600 border-b-4 border-black">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-black text-xl text-white">
                            {game.name}
                          </h3>
                          {game.isNew && (
                            <Badge className="bg-green-400 text-black border-2 border-black font-bold">
                              NEW
                            </Badge>
                          )}
                        </div>
                        <p className="text-purple-200 font-bold">
                          {game.developer}
                        </p>
                      </div>
                      <div className="bg-black p-2 border-2 border-black">
                        <Gamepad2 className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Badge className="bg-green-400 text-black border-2 border-black font-bold">
                          {game.genre}
                        </Badge>
                        <span className="text-black font-bold">
                          {game.platform}
                        </span>
                      </div>

                      <p className="text-black font-bold">{game.description}</p>

                      <div className="flex items-center gap-2">
                        <div className="bg-black p-1 border-2 border-black">
                          <Calendar className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold">
                          Release: {game.releaseDate}
                        </span>
                      </div>

                      <div>
                        <p className="font-black mb-2">TARGET AUDIENCE:</p>
                        <div className="flex flex-wrap gap-2">
                          {game.tags.map((tag) => (
                            <Badge
                              key={tag}
                              className="bg-yellow-300 text-black border-2 border-black font-bold"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button className="flex-1 bg-green-400 text-black border-4 border-black font-bold hover:bg-green-500 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          VIEW DETAILS
                        </Button>
                        <Button
                          variant="outline"
                          className="border-4 border-black bg-white text-black font-bold hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                          WATCH TRAILER
                        </Button>
                      </div>
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
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-l-8 border-l-green-400"
                >
                  <CardHeader className="bg-green-400 border-b-4 border-black">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                      <div>
                        <CardTitle className="text-xl sm:text-2xl font-black text-black">
                          {request.game}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 text-green-800 font-bold">
                          <div className="bg-black p-1 border-2 border-black">
                            <Clock className="h-4 w-4 text-green-400" />
                          </div>
                          Received on {request.receivedAt} • From{" "}
                          {request.developer}
                        </CardDescription>
                      </div>
                      <Badge className="bg-yellow-300 text-black border-2 border-black font-black text-lg px-4 py-2 mt-2 sm:mt-0">
                        PENDING
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <p className="text-black font-bold text-lg">
                        {request.message}
                      </p>

                      <div className="bg-gray-100 p-4 border-4 border-black">
                        <p className="font-black mb-2">GAME KEY INCLUDED:</p>
                        <code className="bg-white px-3 py-2 border-2 border-black font-bold text-lg">
                          {request.gameKey}
                        </code>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={() =>
                            handleRequestResponse(request.id, "accept")
                          }
                          className="bg-green-400 text-black border-4 border-black font-black text-lg px-6 py-3 hover:bg-green-500 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <Check className="h-5 w-5 mr-2" />
                          ACCEPT & GET CONTACT INFO
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() =>
                            handleRequestResponse(request.id, "decline")
                          }
                          className="border-4 border-black bg-white text-black font-black text-lg px-6 py-3 hover:bg-red-400 hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <X className="h-5 w-5 mr-2" />
                          NOT INTERESTED
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {mockRequests.length === 0 && (
              <Card className="text-center py-16 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <CardContent>
                  <div className="bg-black p-6 border-4 border-black inline-block mb-6">
                    <Star className="h-16 w-16 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-4">NO REQUESTS YET</h3>
                  <p className="text-black font-bold text-lg">
                    Complete your profile to start receiving collaboration
                    requests from developers
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
