// app/layout.tsx
import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { localization } from "./langs";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
};
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body
          className={`${inter.className} ${rubik.className} w-screen  flex flex-col items-center justify-center antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
