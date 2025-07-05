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
import { Separator } from "@/components/ui/separator";
import { Zap, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-black p-3 border-4 border-black">
              <Zap className="h-8 w-8 text-yellow-300" />
            </div>
            <h1 className="text-4xl font-black text-black ml-4">StreamSync</h1>
          </div>
          <p className="text-xl font-bold text-black">
            SIGN IN TO YOUR ACCOUNT
          </p>
        </div>

        <Card className="border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="bg-yellow-300 border-b-4 border-black">
            <CardTitle className="text-2xl font-black text-black">
              WELCOME BACK
            </CardTitle>
            <CardDescription className="font-bold text-black">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="email"
                  className="text-lg font-black text-black mb-2 block"
                >
                  EMAIL
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-4 bg-black p-1 border-2 border-black">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="Enter your email"
                    className="pl-12 border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    required
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="password"
                  className="text-lg font-black text-black mb-2 block"
                >
                  PASSWORD
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-4 bg-black p-1 border-2 border-black">
                    <Lock className="h-4 w-4 text-white" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    placeholder="Enter your password"
                    className="pl-12 border-4 border-black bg-white text-black font-bold text-lg p-4 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 text-white border-4 border-black font-black text-xl py-6 hover:bg-green-400 hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                SIGN IN
              </Button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="border-2 border-black" />
                </div>
                <div className="relative flex justify-center text-lg">
                  <span className="px-4 bg-white text-black font-bold">
                    NEW TO STREAMSYNC?
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/role-selection">
                  <Button
                    variant="outline"
                    className="border-4 border-black bg-white text-black font-black text-lg px-8 py-4 hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    CREATE AN ACCOUNT
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
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
