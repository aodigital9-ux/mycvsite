import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Joual Otmane - Portfolio 2026",
  description: "Otmane Joual: DIGITAL STRATEGIES · AQUACULTURE PRODUCTION · SYSTEM DESIGN.",
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
