import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/animation/Navbar";
import { DropdownMenuNavbar } from "@/components/DropdownMenuNavbar";

export const metadata: Metadata = {
  title: "TitleHomepage",
  description: "Personal Project Website by Ahmad Sosse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="hide-scrollbar::-webkit-scrollbar hide-scrollbar"
    >
      <body className="bg-primary">
        <Navbar />
        <div className="fixed top-7 right-4 lg:hidden">
          <DropdownMenuNavbar />
        </div>
        {children}
      </body>
    </html>
  );
}
