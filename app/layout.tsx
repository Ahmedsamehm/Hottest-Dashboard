import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./components/shared/ui/sidebar";
import SideBar from "./components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hottest Dashboard",
  description: "Dashboard for  Hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <SidebarProvider>
          <aside>
            <SideBar />
          </aside>
          <main className="flex-1 overflow-auto">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
