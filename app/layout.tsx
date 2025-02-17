import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naxos Restaurant",
  description: "Delicious food menu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
