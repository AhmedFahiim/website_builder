import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alexandria.variable}>
        {children}

        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
