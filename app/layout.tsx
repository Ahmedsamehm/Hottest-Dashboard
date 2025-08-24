import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./components/shared/ui/sidebar";
import SideBar from "./components/SideBar";
import QueryProvider from "./components/QueryProvider";
import { DashBoardProvider } from "./context/dashBoardContext";
import { Toaster } from "./components/shared/ui/sonner";
import { ThemeProvider } from "./components/ThemeProvider";
import ProtectedRoutes from "./components/protectedRoutes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <ProtectedRoutes>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
              <SidebarProvider>
                <aside>
                  <SideBar />
                </aside>
                <main className="flex-1 overflow-hidden">
                  <DashBoardProvider>{children}</DashBoardProvider>
                </main>
                <Toaster />
              </SidebarProvider>
            </ThemeProvider>
          </ProtectedRoutes>
        </QueryProvider>
      </body>
    </html>
  );
}
