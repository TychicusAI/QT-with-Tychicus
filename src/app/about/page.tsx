import type { Metadata } from "next";
import { AboutViewer } from "@/components/AboutViewer";

export const metadata: Metadata = {
  title: "平台簡介・架構、優點與比較",
  description: "深入了解「靈修推基古 (QT with Tychicus)」的平台異象、六大核心架構柱石、五軌分流牧養矩陣、15部權威註釋書底層，以及與傳統靈修手冊和一般 AI 生成的三方橫向評比矩陣。",
  openGraph: {
    title: "平台簡介・架構、優點與比較 | 靈修推基古 (QT with Tychicus)",
    description: "深入了解「靈修推基古 (QT with Tychicus)」的平台異象、六大核心架構柱石、五軌分流牧養矩陣、15部權威註釋書底層，以及與傳統靈修手冊和一般 AI 生成的三方橫向評比矩陣。",
    siteName: "靈修推基古 (QT with Tychicus)",
  },
};

export default function AboutPage() {
  return <AboutViewer />;
}
