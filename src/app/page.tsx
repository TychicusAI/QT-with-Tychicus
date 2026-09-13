import type { Metadata } from "next";
import { HomeContainer } from "@/components/HomeContainer";

export const metadata: Metadata = {
  title: "靈修推基古 (QT with Tychicus) | 青年與家庭每日研經靈修",
  description: "專為青年與家庭基督徒打造的每日深度研經靈修平台。提供「青年版」與「家庭版」雙軌教材，拆毀自我焦慮，重建信任與同行恩典。",
};

export default function HomePage() {
  return <HomeContainer />;
}
