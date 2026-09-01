import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Arsalan Aslam — Lead Product Designer",
  description: "Lead Product Designer with 14+ years building systems used by 20M+ people. Based in Lahore, Pakistan.",
  openGraph: {
    title: "Arsalan Aslam — Lead Product Designer",
    description: "Lead Product Designer with 14+ years building systems used by 20M+ people.",
    url: "https://uxbyarsalan.com",
    siteName: "Arsalan Aslam",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
