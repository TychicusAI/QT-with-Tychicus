import type { Metadata } from "next";
import { ArchiveViewer } from "@/components/ArchiveViewer";

export const metadata: Metadata = {
  title: "歷週靈修進度存檔庫",
  description: "查閱靈修推基古青年版與家庭版歷週經課靈修進度存檔庫，隨時重溫昔日經課信息、金句反思與本機讀經打卡軌跡。",
  openGraph: {
    title: "歷週靈修進度存檔庫 | 靈修推基古 (QT with Tychicus)",
    description: "查閱靈修推基古青年版與家庭版歷週經課靈修進度存檔庫，隨時重溫昔日經課信息、金句反思與本機讀經打卡軌跡。",
    siteName: "靈修推基古 (QT with Tychicus)",
  },
};

export default function ArchivePage() {
  return <ArchiveViewer />;
}
