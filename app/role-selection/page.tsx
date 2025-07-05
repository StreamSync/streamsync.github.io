import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gamepad2, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RoleSelectionPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-black text-black mb-6">
            CHOOSE YOUR ROLE
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-black">
            Select how you'd like to use StreamSync
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Developer Card */}
          <Card className="border-4 border-black bg-purple-600 text-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-shadow">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6">
                <div className="bg-black p-6 border-4 border-black inline-block">
                  <Gamepad2 className="h-16 w-16 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-3xl sm:text-4xl font-black">
                GAME DEVELOPER
              </CardTitle>
              <CardDescription className="text-purple-100 text-lg sm:text-xl font-bold">
                I have a game and want to find streamers to showcase it
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-400 p-1 border-2 border-black">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                  <span className="font-bold text-lg">
                    Find streamers by genre and audience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-400 p-1 border-2 border-black">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                  <span className="font-bold text-lg">
                    Send collaboration requests with game keys
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-400 p-1 border-2 border-black">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                  <span className="font-bold text-lg">
                    Track responses and manage partnerships
                  </span>
                </div>
              </div>
              <Link href="/profile/developer">
                <Button className="w-full bg-black text-purple-600 border-4 border-black font-black text-xl py-4 sm:py-6 hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  CONTINUE AS DEVELOPER
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Streamer Card */}
          <Card className="border-4 border-black bg-green-400 text-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-shadow">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6">
                <div className="bg-black p-6 border-4 border-black inline-block">
                  <Play className="h-16 w-16 text-green-400" />
                </div>
              </div>
              <CardTitle className="text-3xl sm:text-4xl font-black">
                STREAMER
              </CardTitle>
              <CardDescription className="text-green-800 text-lg sm:text-xl font-bold">
                I create content and want to discover new games to play
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 p-1 border-2 border-black">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg">
                    Discover games matching your content style
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 p-1 border-2 border-black">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg">
                    Review requests with one-click responses
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 p-1 border-2 border-black">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg">
                    Connect with developers instantly
                  </span>
                </div>
              </div>
              <Link href="/profile/streamer">
                <Button className="w-full bg-black text-green-400 border-4 border-black font-black text-xl py-4 sm:py-6 hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  CONTINUE AS STREAMER
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-black hover:text-purple-600 font-bold text-lg"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
