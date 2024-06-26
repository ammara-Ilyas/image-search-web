import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/contextApi/contextAPi";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Image Search App",
  description: "Generated by Image Search next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
