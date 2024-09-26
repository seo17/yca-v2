import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import AdSense from "@/components/AdSense/Adsense";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YCA | Youtube Comment Analyser",
  description: "Gain Insights with YCA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <AdSense pId={process.env.NEXT_PUBLIC_PID!} />
        </head>
        <body className={`${poppins.className} bg-foreground`}>
          <main>
            <div className="bg-foreground  w-full flex flex-col items-center">
              {children}
              <Toaster />
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
