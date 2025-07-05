import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreamSync",
  description:
    "A platform to connect indie game developers with streamers via a frictionless matchmaking.",
  generator: "StreamSync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
