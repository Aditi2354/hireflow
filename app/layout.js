export const metadata = {
  title: "HireFlow Pro",
  description: "Growthly-inspired stylish career assistant.",
};

import "./globals.css";
import Providers from "@/components/providers/Providers";
import ThemeFX from "@/components/ThemeFX";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-page text-page antialiased min-h-screen">
        <ThemeFX />            {/* 👈 animated background */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

