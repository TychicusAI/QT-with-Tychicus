import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qt-with-tychicus.vercel.app"),
  title: {
    default: "靈修推基古 (QT with Tychicus)",
    template: "%s | 靈修推基古 (QT with Tychicus)",
  },
  description: "專為青年與家庭基督徒打造的每日深度研經靈修平台。提供「青年版」與「家庭版」雙軌教材，根據〈板新信友堂〉經課進度，拆毀自我焦慮，重建信任與同行恩典。",
  applicationName: "靈修推基古 (QT with Tychicus)",
  openGraph: {
    title: "靈修推基古 (QT with Tychicus)",
    description: "專為青年與家庭基督徒打造的每日深度研經靈修平台。提供「青年版」與「家庭版」雙軌教材，根據〈板新信友堂〉經課進度，拆毀自我焦慮，重建信任與同行恩典。",
    url: "https://qt-with-tychicus.vercel.app",
    siteName: "靈修推基古 (QT with Tychicus)",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "靈修推基古 (QT with Tychicus)",
    description: "專為青年與家庭基督徒打造的每日深度研經靈修平台。提供「青年版」與「家庭版」雙軌教材，根據〈板新信友堂〉經課進度，拆毀自我焦慮，重建信任與同行恩典。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("qtyouth_theme")||localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;if(t==="dark"||(!t&&d)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})();`
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
