import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Radilson Gomes - Portfolio 2023",
  description: "Radilson Gomes: Brazilian Product Designer creating 0→1 experiences with meticulous detail. Explore my UI/UX portfolio, featuring Starbucks and the Basis Theory platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
