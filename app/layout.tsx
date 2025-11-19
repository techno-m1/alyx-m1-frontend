// @ts-ignore: allow importing global CSS without type declarations
import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import Head from "next/head";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alyx M1 - Meet Your Smart Inbox",
  description: "AI-powered email and meeting assistant for professionals to manage inboxes and schedule meetings effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />\
      </Head> */}
      <body className={roboto.className}>
        <Header />
        <div className="min-h-screen p-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
