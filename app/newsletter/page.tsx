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
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Users,
  Gamepad2,
  Play,
  Mail,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

// Mock current signup data - in real app this would come from API
const currentSignups = {
  developers: 23,
  streamers: 31,
  total: 54,
};

const goals = {
  developers: 50,
  streamers: 50,
  total: 100,
};

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<
    "developer" | "streamer" | ""
  >("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selectedRole) {
      console.log("Newsletter signup:", { email, role: selectedRole });
      setIsSubmitted(true);
    }
  };

  const developerProgress =
    (currentSignups.developers / goals.developers) * 100;
  const streamerProgress = (currentSignups.streamers / goals.streamers) * 100;
  const totalProgress = (currentSignups.total / goals.total) * 100;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full">
          <CardHeader className="bg-green-400 border-b-4 border-black text-center">
            <div className="mx-auto mb-4">
              <div className="bg-black p-4 border-4 border-black inline-block">
                <Zap className="h-12 w-12 text-green-400" />
              </div>
            </div>
            <CardTitle className="text-4xl font-black text-black">
              YOU'RE IN!
            </CardTitle>
            <CardDescription className="text-lg font-bold text-black">
              Welcome to the StreamSync early community!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <p className="text-xl font-bold text-black mb-8">
              You'll be the first to know when we launch and get exclusive early
              access to find your perfect matches.
            </p>
            <div className="space-y-4">
              <Link href="/">
                <Button className="bg-purple-600 text-white border-4 border-black font-black text-lg px-8 py-4 hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  BACK TO HOME
                </Button>
              </Link>
              <p className="text-sm font-bold text-gray-600">
                Share with your network to help us reach our goal faster!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-black bg-yellow-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-black p-2 border-2 border-black">
                <Zap className="h-6 w-6 text-yellow-300" />
              </div>
              <h1 className="text-3xl font-black text-black">StreamSync</h1>
            </Link>
            <Badge className="bg-black text-yellow-300 border-2 border-black font-black text-lg px-4 py-2">
              EARLY ACCESS
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black mb-8 leading-tight">
            JOIN THE
            <br />
            <span className="text-purple-600">STREAMSYNC</span>
            <br />
            <span className="text-green-400">REVOLUTION</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-black mb-8 max-w-3xl mx-auto">
            Be among the first to shape the future of game developer and
            streamer collaborations
          </p>
        </div>

        {/* <div className="max-w-6xl mx-auto mb-16">
          <Card className="border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] bg-neutral-800">
            <CardHeader className="bg-yellow-300 border-b-4 border-black">
              <CardTitle className="flex items-center justify-center gap-3 text-3xl font-black text-black">
                <div className="bg-black p-2 border-2 border-black">
                  <Target className="h-8 w-8 text-yellow-300" />
                </div>
                LAUNCH COUNTDOWN
              </CardTitle>
              <CardDescription className="text-center text-lg font-bold text-black">
                We're building something amazing. Help us reach our goal!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-black text-white">
                    TOTAL SIGNUPS
                  </h3>
                  <div className="text-4xl font-black text-green-400">
                    {currentSignups.total}/{goals.total}
                  </div>
                </div>
                <Progress
                  value={totalProgress}
                  className="h-8 border-4 border-black bg-gray-800"
                />
                <div className="mt-4 text-center">
                  <span className="text-xl font-bold text-white">
                    {Math.round(totalProgress)}% TO LAUNCH! 🚀
                  </span>
                </div>
              </div>

             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
                <div className="bg-purple-600 p-6 border-4 border-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-black p-2 border-2 border-white">
                        <Gamepad2 className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="text-xl font-black text-white">
                        DEVELOPERS
                      </h4>
                    </div>
                    <div className="text-3xl font-black text-white">
                      {currentSignups.developers}/{goals.developers}
                    </div>
                  </div>
                  <Progress
                    value={developerProgress}
                    className="h-6 border-2 border-white bg-purple-800"
                  />
                  <p className="text-sm font-bold text-purple-200 mt-2">
                    {goals.developers - currentSignups.developers} more needed
                  </p>
                </div>

              
                <div className="bg-green-400 p-6 border-4 border-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-black p-2 border-2 border-white">
                        <Play className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="text-xl font-black text-black">
                        STREAMERS
                      </h4>
                    </div>
                    <div className="text-3xl font-black text-black">
                      {currentSignups.streamers}/{goals.streamers}
                    </div>
                  </div>
                  <Progress
                    value={streamerProgress}
                    className="h-6 border-2 border-black bg-green-600"
                  />
                  <p className="text-sm font-bold text-green-800 mt-2">
                    {goals.streamers - currentSignups.streamers} more needed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}

        <div className="max-w-2xl mx-auto">
          <Card className="border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-black border-b-4 border-black">
              <CardTitle className="flex items-center justify-center gap-3 text-3xl font-black text-white">
                <div className="bg-yellow-300 p-2 border-2 border-white">
                  <Mail className="h-8 w-8 text-black" />
                </div>
                GET EARLY ACCESS
              </CardTitle>
              <CardDescription className="text-center text-lg font-bold text-gray-300">
                Join our newsletter and be the first to connect when we launch
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {/* <form onSubmit={handleSubmit} className="space-y-8">
               
                <div>
                  <Label className="text-lg font-black text-black mb-4 block">
                    CHOOSE YOUR ROLE:
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant={
                        selectedRole === "developer" ? "default" : "outline"
                      }
                      onClick={() => setSelectedRole("developer")}
                      className={`border-4 border-black font-black text-lg p-6 h-auto transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                        selectedRole === "developer"
                          ? "bg-purple-600 text-white hover:bg-purple-700"
                          : "bg-white text-black hover:bg-purple-600 hover:text-white"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Gamepad2 className="h-8 w-8" />
                        <span>GAME DEVELOPER</span>
                      </div>
                    </Button>
                    <Button
                      type="button"
                      variant={
                        selectedRole === "streamer" ? "default" : "outline"
                      }
                      onClick={() => setSelectedRole("streamer")}
                      className={`border-4 border-black font-black text-lg p-6 h-auto transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                        selectedRole === "streamer"
                          ? "bg-green-400 text-black hover:bg-green-500"
                          : "bg-white text-black hover:bg-green-400"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Play className="h-8 w-8" />
                        <span>STREAMER</span>
                      </div>
                    </Button>
                  </div>
                </div>

               
                <div>
                  <Label
                    htmlFor="email"
                    className="text-lg font-black text-black mb-2 block"
                  >
                    EMAIL ADDRESS:
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    required
                  />
                </div>

              

                <Button
                  type="submit"
                  disabled={!email || !selectedRole}
                  className="w-full bg-yellow-300 text-black border-4 border-black font-black text-xl py-6 hover:bg-black hover:text-yellow-300 transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  JOIN THE EARLY ACCESS LIST
                </Button>
              </form> */}
              <div className="bg-gray-100 p-6 border-4 border-black">
                <h3 className="text-lg font-black text-black mb-4">
                  WHAT YOU'LL GET:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="bg-green-400 p-1 border-2 border-black">
                      <TrendingUp className="h-4 w-4 text-black" />
                    </div>
                    <span className="font-bold text-black">
                      Early access to the platform
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-400 p-1 border-2 border-black">
                      <Users className="h-4 w-4 text-black" />
                    </div>
                    <span className="font-bold text-black">
                      Priority matching with perfect partners
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-400 p-1 border-2 border-black">
                      <Zap className="h-4 w-4 text-black" />
                    </div>
                    <span className="font-bold text-black">
                      Exclusive launch updates and tips
                    </span>
                  </li>
                </ul>
              </div>
              <Script
                async
                src="https://subscribe-forms.beehiiv.com/embed.js"
              ></Script>

              <iframe
                src="https://subscribe-forms.beehiiv.com/36094414-069f-4510-b17a-e8c84e791362"
                className="beehiiv-embed flex justify-center items-center w-full"
                data-test-id="beehiiv-embed"
                scrolling="no"
                style={{
                  margin: 0,
                  borderRadius: "0px 0px 0px 0px",
                  backgroundColor: "transparent",
                  boxShadow: "0 0 #0000",
                }}
              ></iframe>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-lg font-bold text-black mb-4">
            Join indie developers and streamers who are already waiting for
            launch
          </p>
          {/* <div className="flex justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-purple-600">
                {currentSignups.developers}
              </div>
              <div className="text-sm font-bold text-black">DEVELOPERS</div>
            </div>
            <div className="text-4xl font-black text-black">+</div>
            <div className="text-center">
              <div className="text-3xl font-black text-green-400">
                {currentSignups.streamers}
              </div>
              <div className="text-sm font-bold text-black">STREAMERS</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
