import { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { localization } from "./langs";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <head>
          <link rel="icon" href="/browser.png" sizes="any" />
          <link rel="icon" type="image/png" href="/browser.png" />
          <link rel="icon" type="image/svg+xml" href="/browser.png" />
        </head>
        <body
          className={`${inter.className} ${rubik.className} flex flex-col antialiased`}
        >
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
