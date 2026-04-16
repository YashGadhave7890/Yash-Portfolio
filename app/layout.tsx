import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Register service worker
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  });
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yash Gadhave | IT Engineering Student Portfolio",
    template: "%s | Yash Gadhave Portfolio"
  },
  description: "IT Engineering student specializing in React, Node.js, AI, and IoT technologies. Building innovative solutions with 8.66 CGPA and 6+ full-stack projects. Seeking software development opportunities.",
  keywords: [
    "Yash Gadhave",
    "IT Engineering Student",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "AI Developer",
    "IoT Developer",
    "Python Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Software Engineer",
    "Computer Vision",
    "Machine Learning",
    "Portfolio Website",
    "CGPA 8.66",
    "Kopargaon",
    "Maharashtra",
    "Engineering Student",
    "Tech Enthusiast",
    "Problem Solver"
  ],
  authors: [{ name: "Yash Gadhave", url: "https://github.com/YashGadhave7890" }],
  creator: "Yash Gadhave",
  publisher: "Yash Gadhave",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yashgadhave.vercel.app"),
  alternates: {
    canonical: "https://yashgadhave.vercel.app",
    languages: {
      "en-US": "https://yashgadhave.vercel.app/en",
    },
  },
  openGraph: {
    title: "Yash Gadhave | IT Engineering Student Portfolio",
    description: "IT Engineering student specializing in React, Node.js, AI, and IoT technologies. Building innovative solutions with 8.66 CGPA and 6+ full-stack projects.",
    type: "website",
    locale: "en_US",
    url: "https://yashgadhave.vercel.app",
    siteName: "Yash Gadhave Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Gadhave - IT Engineering Student Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Gadhave | IT Engineering Student Portfolio",
    description: "IT Engineering student specializing in React, Node.js, AI, and IoT technologies. Building innovative solutions with 8.66 CGPA and 6+ full-stack projects.",
    creator: "@YashGadhave7890",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#22d3ee" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Yash Portfolio" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
