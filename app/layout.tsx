import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dota 2 Trivia",
  description: "A 10-question multiple-choice quiz about Dota 2.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-fx" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
