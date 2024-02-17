import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import MyprofilePic from "./components/MyprofilePic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabah's Blog",
  description: "Created by Sabah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className='dark:bg-slate-800 bg-slate-800 '>
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-strong:{h1} mx-auto">
        <MyprofilePic/>
          {children}
        </main>
        
        </body>

    </html>
  );
}
