import type { Metadata } from "next";
import { HomeContainer } from "@/components/HomeContainer";

export const metadata: Metadata = {
  title: "靈修推基古 (QT with Tychicus)",
  description: "專為青年、家庭與樂齡基督徒打造的每日深度研經靈修平台。提供「青年版」、「家庭版」與「樂齡版」三軌教材，根據〈板新信友堂〉經課進度，拆毀自我焦慮，重建信任與日新又新的同行恩典。",
  openGraph: {
    title: "靈修推基古 (QT with Tychicus)",
    description: "專為青年、家庭與樂齡基督徒打造的每日深度研經靈修平台。提供「青年版」、「家庭版」與「樂齡版」三軌教材，根據〈板新信友堂〉經課進度，拆毀自我焦慮，重建信任與日新又新的同行恩典。",
    url: "https://qt-with-tychicus.vercel.app",
    siteName: "靈修推基古 (QT with Tychicus)",
  },
};

export default function HomePage() {
  return <HomeContainer />;
}
