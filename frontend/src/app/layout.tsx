// app/layout.tsx
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
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InnerHeal",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body
          className={`${inter.className} ${rubik.className} w-screen flex flex-col items-center justify-center antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
