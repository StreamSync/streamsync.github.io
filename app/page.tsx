import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gamepad2, Play, Users, Zap, Target, HandHeart } from "lucide-react";
import Link from "next/link";
import NewsletterPage from "./newsletter/page";

export default function HomePage() {
  return (
    <NewsletterPage />
    // <div className="min-h-screen bg-background">
    //   {/* Header */}
    //   <header className="border-b-4 border-black bg-yellow-300">
    //     <div className="container mx-auto px-4 py-6">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center space-x-3">
    //           <div className="bg-black p-2 border-2 border-black">
    //             <Zap className="h-6 w-6 text-yellow-300" />
    //           </div>
    //           <h1 className="text-3xl font-black text-black">StreamSync</h1>
    //         </div>
    //         <nav className="flex space-x-4">
    //           <Link href="/login">
    //             <Button
    //               variant="outline"
    //               className="border-4 border-black bg-white text-black font-bold hover:bg-black hover:text-white transition-colors"
    //             >
    //               Login
    //             </Button>
    //           </Link>
    //         </nav>
    //       </div>
    //     </div>
    //   </header>

    //   {/* Hero Section */}
    //   <section className="bg-white border-b-4 border-black">
    //     <div className="container mx-auto px-4 py-16">
    //       <div className="max-w-4xl mx-auto text-center">
    //         <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-black mb-8 leading-tight">
    //           CONNECT GAMES
    //           <br />
    //           <span className="text-purple-600">WITH PERFECT</span>
    //           <br />
    //           <span className="text-green-400">STREAMERS</span>
    //         </h2>
    //         <p className="text-2xl font-bold text-black mb-12 max-w-2xl mx-auto">
    //           The ultimate matchmaking platform for game developers and content
    //           creators
    //         </p>
    //         <div className="flex flex-col sm:flex-row gap-6 justify-center">
    //           <Link href="/role-selection">
    //             <Button
    //               size="lg"
    //               className="bg-black text-white border-4 border-black font-bold text-xl px-8 py-6 hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    //             >
    //               GET STARTED
    //             </Button>
    //           </Link>
    //           <Button
    //             size="lg"
    //             variant="outline"
    //             className="border-4 border-black bg-white text-black font-bold text-xl px-8 py-6 hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    //           >
    //             LEARN MORE
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Role Cards */}
    //   <section className="bg-gray-100 border-b-4 border-black">
    //     <div className="container mx-auto px-4 py-16">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    //         {/* Developer Card */}
    //         <Card className="border-4 border-black bg-purple-600 text-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
    //           <CardHeader className="text-center pb-6">
    //             <div className="mx-auto mb-6">
    //               <div className="bg-black p-4 border-4 border-black inline-block">
    //                 <Gamepad2 className="h-16 w-16 text-purple-600" />
    //               </div>
    //             </div>
    //             <CardTitle className="text-4xl font-black">
    //               GAME DEVELOPER
    //             </CardTitle>
    //             <CardDescription className="text-purple-100 text-xl font-bold">
    //               Find streamers who match your game's genre and audience
    //             </CardDescription>
    //           </CardHeader>
    //           <CardContent>
    //             <ul className="space-y-4">
    //               <li className="flex items-start space-x-3">
    //                 <div className="bg-green-400 p-1 border-2 border-black">
    //                   <Target className="h-5 w-5 text-black" />
    //                 </div>
    //                 <span className="font-bold text-lg">
    //                   Target streamers by genre and audience
    //                 </span>
    //               </li>
    //               <li className="flex items-start space-x-3">
    //                 <div className="bg-green-400 p-1 border-2 border-black">
    //                   <HandHeart className="h-5 w-5 text-black" />
    //                 </div>
    //                 <span className="font-bold text-lg">
    //                   Send collaboration requests with game keys
    //                 </span>
    //               </li>
    //               <li className="flex items-start space-x-3">
    //                 <div className="bg-green-400 p-1 border-2 border-black">
    //                   <Users className="h-5 w-5 text-black" />
    //                 </div>
    //                 <span className="font-bold text-lg">
    //                   Track responses and manage partnerships
    //                 </span>
    //               </li>
    //             </ul>
    //           </CardContent>
    //         </Card>

    //         {/* Streamer Card */}
    //         <Card className="border-4 border-black bg-green-400 text-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
    //           <CardHeader className="text-center pb-6">
    //             <div className="mx-auto mb-6">
    //               <div className="bg-black p-4 border-4 border-black inline-block">
    //                 <Play className="h-16 w-16 text-green-400" />
    //               </div>
    //             </div>
    //             <CardTitle className="text-4xl font-black">STREAMER</CardTitle>
    //             <CardDescription className="text-green-800 text-xl font-bold">
    //               Discover new games that match your content style
    //             </CardDescription>
    //           </CardHeader>
    //           <CardContent>
    //             <ul className="space-y-4">
    //               <li className="flex items-start space-x-3">
    //                 <div className="bg-purple-600 p-1 border-2 border-black">
    //                   <Target className="h-5 w-5 text-white" />
    //                 </div>
    //                 <span className="font-bold text-lg">
    //                   Find games matching your content style
    //                 </span>
    //               </li>
    //               <li className="flex items-start space-x-3">
    //                 <div className="bg-purple-600 p-1 border-2 border-black">
    //                   <HandHeart className="h-5 w-5 text-white" />
    //                 </div>
    //                 <span className="font-bold text-lg">
    //                   Review requests with one-click responses
    //                 </span>
    //               </li>
    //               <li className="flex items-start space-x-3">
    //                 <div className="bg-purple-600 p-1 border-2 border-black">
    //                   <Users className="h-5 w-5 text-white" />
    //                 </div>
    //                 <span className="font-bold text-lg">
    //                   Connect with developers instantly
    //                 </span>
    //               </li>
    //             </ul>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Features */}
    //   <section className="bg-white border-b-4 border-black">
    //     <div className="container mx-auto px-4 py-16">
    //       <div className="text-center mb-16">
    //         <h3 className="text-5xl font-black text-black mb-6">
    //           EVERYTHING YOU NEED
    //         </h3>
    //         <p className="text-2xl font-bold text-black">
    //           Streamlined workflow from discovery to collaboration
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         <div className="text-center">
    //           <div className="bg-purple-600 border-4 border-black p-6 w-20 h-20 mx-auto mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    //             <Target className="h-8 w-8 text-white" />
    //           </div>
    //           <h4 className="text-2xl font-black mb-4">SMART MATCHING</h4>
    //           <p className="text-lg font-bold text-gray-700">
    //             Advanced filters by genre, audience, and content style
    //           </p>
    //         </div>

    //         <div className="text-center">
    //           <div className="bg-green-400 border-4 border-black p-6 w-20 h-20 mx-auto mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    //             <Zap className="h-8 w-8 text-black" />
    //           </div>
    //           <h4 className="text-2xl font-black mb-4">INSTANT CONNECTIONS</h4>
    //           <p className="text-lg font-bold text-gray-700">
    //             One-click requests and responses for faster partnerships
    //           </p>
    //         </div>

    //         <div className="text-center">
    //           <div className="bg-yellow-300 border-4 border-black p-6 w-20 h-20 mx-auto mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    //             <Users className="h-8 w-8 text-black" />
    //           </div>
    //           <h4 className="text-2xl font-black mb-4">TRACK SUCCESS</h4>
    //           <p className="text-lg font-bold text-gray-700">
    //             Monitor collaboration results and optimize your strategy
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* CTA Section */}
    //   <section className="bg-black text-white border-b-4 border-black">
    //     <div className="container mx-auto px-4 py-16 text-center">
    //       <h3 className="text-5xl font-black mb-6">
    //         READY TO FIND YOUR PERFECT MATCH?
    //       </h3>
    //       <p className="text-2xl font-bold mb-12 opacity-90">
    //         Join thousands of developers and streamers already using StreamSync
    //       </p>
    //       <Link href="/role-selection">
    //         <Button
    //           size="lg"
    //           className="bg-green-400 text-black border-4 border-white font-black text-2xl px-12 py-8 hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
    //         >
    //           START MATCHING TODAY
    //         </Button>
    //       </Link>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="bg-gray-900 text-white">
    //     <div className="container mx-auto px-4 py-8">
    //       <div className="flex flex-col md:flex-row justify-between items-center">
    //         <div className="flex items-center space-x-3 mb-4 md:mb-0">
    //           <div className="bg-yellow-300 p-2 border-2 border-white">
    //             <Zap className="h-6 w-6 text-black" />
    //           </div>
    //           <span className="text-2xl font-black">StreamSync</span>
    //         </div>
    //         <div className="flex space-x-8">
    //           <Link href="/privacy" className="hover:text-yellow-300 font-bold">
    //             Privacy
    //           </Link>
    //           <Link href="/terms" className="hover:text-yellow-300 font-bold">
    //             Terms
    //           </Link>
    //           <Link href="/contact" className="hover:text-yellow-300 font-bold">
    //             Contact
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="border-t-2 border-gray-700 mt-8 pt-8 text-center">
    //         <p className="font-bold">
    //           &copy; 2024 StreamSync. All rights reserved.
    //         </p>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}
