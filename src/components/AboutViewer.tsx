"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  Layers,
  Users,
  Library,
  Calendar,
  ScrollText,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Home,
  Headphones,
  FileText,
  Scale,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { usePreferredVersion } from "@/lib/storage";

export function AboutViewer() {
  const [version, setVersion] = usePreferredVersion();

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] dark:bg-[#090d16] text-stone-900 dark:text-stone-100 selection:bg-purple-500/20 overflow-x-hidden w-full">
      <Navbar currentVersion={version} onVersionChange={setVersion} />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-12 sm:space-y-16">
        {/* Header Breadcrumb & Tag */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <Link
              href="/"
              className="hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1 font-medium transition"
            >
              <Home className="w-3.5 h-3.5" />
              <span>首頁</span>
            </Link>
            <span>/</span>
            <span className="font-semibold text-stone-800 dark:text-stone-200">
              平台簡介
            </span>
          </div>

          <div className="space-y-3 pb-6 border-b border-stone-200 dark:border-stone-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border border-purple-300/60 dark:border-purple-700/50">
              <Sparkles className="w-3.5 h-3.5" />
              <span>以嚴謹釋經為根基・五軌分流深度牧養</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
              關於「靈修推基古」
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed">
              深研真道・分流牧養・以經解經 —— 在碎片化與心靈速食氾濫的世代，忠心傳遞神話語的微觀肌理與生命力量。
            </p>
          </div>
        </div>

        {/* 1. Biblical Origin & Vision */}
        <section className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-100 border border-stone-800 shadow-xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl bg-purple-500/15 pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>推基古是誰？（Tychicus）</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              「所親愛的兄弟、忠心的執事、同作主的僕人」
            </h2>

            <div className="text-sm sm:text-base text-stone-300 leading-relaxed space-y-3">
              <p>
                在新約聖經中，推基古（Tychicus，徒 20:4；弗 6:21-22；西 4:7-8；多 3:12；提後 4:12）是使徒保羅在羅馬監獄中極為倚重的同工。保羅差派推基古帶著以弗所書與歌羅西書，跨越愛琴海前往各教會。
              </p>
              <p>
                推基古的職分並非在眾人面前發表個人高見，而是<strong>「忠心傳遞使徒的信息」</strong>，並<strong>「叫你們知道我們的情況，又安慰你們的心」</strong>。他是一位忠心守護教義、不打折扣傳遞真理，同時深具牧養同理心的神僕。
              </p>
              <p className="text-purple-200">
                本平台定名<strong>「靈修推基古 (QT with Tychicus)」</strong>，願在今日作教會忠實的推基古：拒絕斷章取義的情緒雞湯，堅持扎根於新舊約救贖歷史與學術釋經，將有骨有肉、刺入剖開靈與魂的每日真道，精準遞送到每一位門徒手中。
              </p>
            </div>
          </div>
        </section>

        {/* 2. Core Architecture */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              <Layers className="w-4 h-4" />
              <span>系統架構設計</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
              六大核心架構柱石
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
              「靈修推基古」並非隨機對話式的提示詞工程，而是一套具有嚴謹軟體工程規格與釋經學標準的內容生成與分流系統。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 flex items-center justify-center font-black">
                01
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                單一真實來源
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                全站所有規範受限於專案核心工作流程規格。無論是文風字數、解經架構或註釋規範，皆有不可逾越的標準，杜絕隨機漂移與風格混亂。
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-black">
                02
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                雙基石研經工程
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                每週先產出萬字級<strong>學術微觀釋經筆記 (study.md)</strong> 與<strong>真實具名當代見證庫 (illustrations.md)</strong>。在學術地基與真實生活未奠定前，絕不盲目產出每日靈修。
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 flex items-center justify-center font-black">
                03
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                文本微觀解經工具箱
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                貫徹文體結構、關鍵字彙場、舊約回響、文法修辭張力、歷史文化論辯背景、神學綜合與福音指向等 6 大微觀解經維度，層層剖析經文肌理。
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 flex items-center justify-center font-black">
                04
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                逐日深耕模式
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                拒絕粗糙的大綱式一次性生成。Day 1 到 Day 6 每日獨立深入打磨，維持嚴密的起承轉合，讓屬靈痛覺與神學張力在篇章間深刻共鳴。
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 flex items-center justify-center font-black">
                05
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                五軌分流牧養矩陣
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                同一段經文，藉由靈活的神學轉譯，精準分流為青年、家庭、樂齡、宣教與釋經五大軌道，對焦特定群體的心靈掙扎與生命處境。
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 flex items-center justify-center font-black">
                06
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                經文快取全覆蓋與離線打卡
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                建置 300+ 條目聖經快取，經文點擊即閱且百分之百正確；使用本機儲存技術，閱讀進度與筆記安全保留於用戶裝置，保護私密靈修隱私。
              </p>
            </div>
          </div>
        </section>

        {/* 3. Five Dedicated Tracks */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              <Users className="w-4 h-4" />
              <span>精準牧養視角</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
              五大版本定位矩陣
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
              同一聖經文本，因著生命階段與呼召維度的不同，能在真理光照下綻放出多元而深刻的牧養對話。
            </p>
          </div>

          <div className="grid gap-4">
            {/* Youth Track */}
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/50 dark:bg-stone-900/60 border border-amber-200/80 dark:border-amber-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-500 text-white">
                    青年版 Youth
                  </span>
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-semibold">
                    拆毀世俗焦慮・重建門徒身份
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  直面青年世代在職場內耗、成功學焦慮、外貌人設與社交孤島中的屬靈困境。以十架真理擊碎廉價自我肯定，在神面前找回無可撼動的尊貴兒女身分。
                </p>
              </div>
              <Link
                href="/devotional/youth/2026-10-26/mon"
                className="shrink-0 text-xs font-bold px-3.5 py-2 rounded-xl bg-amber-500 text-white hover:bg-amber-600 transition shadow-xs flex items-center gap-1"
              >
                <span>閱讀青年版</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Family Track */}
            <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/50 dark:bg-stone-900/60 border border-teal-200/80 dark:border-teal-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-700 text-white">
                    家庭版 Family
                  </span>
                  <span className="text-xs text-teal-800 dark:text-teal-300 font-semibold">
                    餐桌旁的真實・化解防衛與代溝
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  聚焦夫妻溝通、兩代張力、親子教養與家庭暗流。放下指責的手套與虛偽的面具，以純全良心在餐桌前彼此認罪、彼此接納，讓家成為十字架的避風港。
                </p>
              </div>
              <Link
                href="/devotional/family/2026-10-26/mon"
                className="shrink-0 text-xs font-bold px-3.5 py-2 rounded-xl bg-teal-700 text-white hover:bg-teal-800 transition shadow-xs flex items-center gap-1"
              >
                <span>閱讀家庭版</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Encore Track */}
            <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/50 dark:bg-stone-900/60 border border-rose-200/80 dark:border-rose-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-rose-700 text-white">
                    樂齡版 Encore
                  </span>
                  <span className="text-xs text-rose-800 dark:text-rose-300 font-semibold">
                    歲月淬煉安可曲・外體漸衰內心日新
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  關照熟齡與長者面對體力退化、空巢失落、疾病隱憂與死亡課題。引導信徒卸下半生包袱、學習放手交託，在基督永恆榮耀的晨曦中，演奏出自由喜樂的安可樂章。
                </p>
              </div>
              <Link
                href="/devotional/encore/2026-10-26/mon"
                className="shrink-0 text-xs font-bold px-3.5 py-2 rounded-xl bg-rose-700 text-white hover:bg-rose-800 transition shadow-xs flex items-center gap-1"
              >
                <span>閱讀樂齡版</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mission Track */}
            <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/50 dark:bg-stone-900/60 border border-indigo-200/80 dark:border-indigo-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-700 text-white">
                    宣教版 Mission
                  </span>
                  <span className="text-xs text-indigo-800 dark:text-indigo-300 font-semibold">
                    跨文化瓦器前線・日常邊界見證
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  連線跨文化工場前線同工與本地日常守望者。在語言隔閡、文化孤寂與宣教艱難中，見證神和好的職分；打破堂會內捲心態，迎向萬民萬邦的宏大敬拜。
                </p>
              </div>
              <Link
                href="/devotional/mission/2026-10-26/mon"
                className="shrink-0 text-xs font-bold px-3.5 py-2 rounded-xl bg-indigo-700 text-white hover:bg-indigo-800 transition shadow-xs flex items-center gap-1"
              >
                <span>閱讀宣教版</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Exegesis Track */}
            <div className="p-5 sm:p-6 rounded-2xl bg-purple-50/50 dark:bg-stone-900/60 border border-purple-200/80 dark:border-purple-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-700 text-white">
                    釋經版 Exegesis
                  </span>
                  <span className="text-xs text-purple-800 dark:text-purple-300 font-semibold">
                    純粹文本解構・無比喻純文字思辨論述
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  專為講道教導者、神學生與研經愛好者打造。全篇嚴禁比喻故事與日常插圖，每日 5,000 字級純文字深度釋經論述，徹底解剖希臘文原文字義、論辯歷史與神學反諷。
                </p>
              </div>
              <Link
                href="/devotional/exegesis/2026-10-26/mon"
                className="shrink-0 text-xs font-bold px-3.5 py-2 rounded-xl bg-purple-700 text-white hover:bg-purple-800 transition shadow-xs flex items-center gap-1"
              >
                <span>閱讀釋經版</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Core Strengths & Tech Highlights */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              <ShieldCheck className="w-4 h-4" />
              <span>獨特優勢與工程品味</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
              為什麼選擇靈修推基古？
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 space-y-3">
              <div className="flex items-center gap-2.5 text-stone-900 dark:text-stone-100 font-bold text-base">
                <Library className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>權威頂尖註釋書學術底層</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                絕非憑空杜撰或網路拼湊。全面吸納包括 <em>Baker Exegetical (BECNT)</em>、<em>New International Greek Testament (NIGTC)</em>、<em>NICNT</em>、<em>NIVAC</em> 等當代頂尖學術巨著的考證成果，對文法結構與歷史論辯有極高還原度。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 space-y-3">
              <div className="flex items-center gap-2.5 text-stone-900 dark:text-stone-100 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>零幻覺保證與經文快取全覆蓋</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                傳統大型語言模型最常見的毛病是捏造經文或張冠李戴。推基古建立高達 307 條目聖經快取，經文範圍全數核實對照，提供百分之百精準的經文參照與彈出檢視。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 space-y-3">
              <div className="flex items-center gap-2.5 text-stone-900 dark:text-stone-100 font-bold text-base">
                <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>20~35 字短句文學呼吸感</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                徹底摒棄 AI 泛濫的「首先、其次、總之」說教腔調與假大空口號。全站文本嚴格遵守緊湊短句節奏，如外科手術刀般刺入當代人的偽善防衛，直擊靈魂痛點。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 space-y-3">
              <div className="flex items-center gap-2.5 text-stone-900 dark:text-stone-100 font-bold text-base">
                <Headphones className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>原生語音聆聽系統</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                針對各版本群體特質，整合前沿自然語音合成技術，提供溫暖、沉穩、清晰的真人級語音導讀。即便在晨間通勤、散步或睡前默想，神的話語皆能伴隨身旁。
              </p>
            </div>
          </div>
        </section>

        {/* 5. Comprehensive Comparison Matrix */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              <Scale className="w-4 h-4" />
              <span>三方橫向對照</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
              三方橫向評比矩陣
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
              客觀評比「傳統市售靈修手冊」、「一般通用 AI 對話生成」與「靈修推基古」在深度、可靠度與牧養力上的核心差異。
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/50">
                  <th className="py-3.5 px-4 font-bold text-stone-500 dark:text-stone-400 w-1/4">
                    評比維度
                  </th>
                  <th className="py-3.5 px-4 font-bold text-stone-700 dark:text-stone-300 w-1/4">
                    傳統市售靈修手冊
                  </th>
                  <th className="py-3.5 px-4 font-bold text-stone-700 dark:text-stone-300 w-1/4">
                    一般通用 AI 對話生成
                  </th>
                  <th className="py-3.5 px-4 font-extrabold text-purple-700 dark:text-purple-300 bg-purple-50/70 dark:bg-purple-950/40 w-1/4">
                    靈修推基古 (QT with Tychicus)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800/60">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-stone-800 dark:text-stone-200">
                    釋經深度與文法考究
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    篇幅有限（約300字），多偏向金句發揮與感性安慰，極少涉及原文文法。
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    泛泛空談，充斥表面詞意解釋，缺乏註釋書學術考據。
                  </td>
                  <td className="py-3.5 px-4 bg-purple-50/40 dark:bg-purple-950/20 font-semibold text-purple-900 dark:text-purple-200">
                    奠基權威註釋書與 6 大微觀解經工具，深度解析歷史反諷與救贖脈絡。
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-bold text-stone-800 dark:text-stone-200">
                    牧養分流精準度
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    單一受眾定位，無法同時滿足青少年、家庭父母、長者或講道者的痛點。
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    需要使用者自行編寫複雜提示詞，若無專業神學背景往往得到模板化回答。
                  </td>
                  <td className="py-3.5 px-4 bg-purple-50/40 dark:bg-purple-950/20 font-semibold text-purple-900 dark:text-purple-200">
                    一源五軌原生矩陣（青年、家庭、樂齡、宣教、釋經），一鍵切換精準對話。
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-bold text-stone-800 dark:text-stone-200">
                    聖經引用與幻覺控制
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    無幻覺問題，但受限於印刷版面，難以完整查閱多處跨卷引文。
                  </td>
                  <td className="py-3.5 px-4 text-rose-600 dark:text-rose-400">
                    高幻覺風險！經常憑空捏造章節、混淆先知名字或張冠李戴經文。
                  </td>
                  <td className="py-3.5 px-4 bg-purple-50/40 dark:bg-purple-950/20 font-semibold text-purple-900 dark:text-purple-200">
                    零幻覺保證！300+ 條目聖經快取，100% 本地精準比對與點擊即閱。
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-bold text-stone-800 dark:text-stone-200">
                    文字質感與語氣節奏
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    傳統教會文風，語言相對溫和平穩，偶有年代隔閡感。
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    標準 AI 機械腔調，多用「首先/其次/總之」，說教感重且空洞。
                  </td>
                  <td className="py-3.5 px-4 bg-purple-50/40 dark:bg-purple-950/20 font-semibold text-purple-900 dark:text-purple-200">
                    純熟現代文學短句（20~35字），刺入當代痛點，具備強烈屬靈共鳴與呼吸感。
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-bold text-stone-800 dark:text-stone-200">
                    架構一致性與深耕進度
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    按月出版，進度固定但無法自訂或數位搜尋過往筆記。
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    單次零散對話，前後文容易遺忘，缺乏循序漸進的週次主題演進。
                  </td>
                  <td className="py-3.5 px-4 bg-purple-50/40 dark:bg-purple-950/20 font-semibold text-purple-900 dark:text-purple-200">
                    SSOT 嚴格規範，Day 1~6 循序演進，具備完整的起承轉合與歷週存檔庫。
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-bold text-stone-800 dark:text-stone-200">
                    數位體驗與語音支援
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    紙本為主，無互動式經文彈窗、打卡追蹤或語音朗讀。
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 dark:text-stone-400">
                    純文字對話窗口，需自行外接語音或筆記工具。
                  </td>
                  <td className="py-3.5 px-4 bg-purple-50/40 dark:bg-purple-950/20 font-semibold text-purple-900 dark:text-purple-200">
                    原生響應式網頁、深色模式、連續打卡進度追蹤、F5-TTS 語音無縫伴讀。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Call to Actions */}
        <section className="p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
              今日就展開扎根神話語的靈修之旅
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
              無論您身處哪一個生命階段，神的話語都將如明光照亮您的腳前步履。
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm transition shadow-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>進入最新當週靈修</span>
            </Link>

            <Link
              href="/devotional/exegesis/2026-10-26/mon"
              className="px-5 py-2.5 rounded-xl bg-violet-100 hover:bg-violet-200 dark:bg-violet-950 dark:hover:bg-violet-900 text-violet-800 dark:text-violet-300 font-bold text-xs sm:text-sm transition flex items-center gap-1.5"
            >
              <ScrollText className="w-4 h-4" />
              <span>探索釋經版</span>
            </Link>

            <Link
              href="/books/2-corinthians"
              className="px-5 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 dark:bg-amber-950 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-300 font-bold text-xs sm:text-sm transition flex items-center gap-1.5"
            >
              <Library className="w-4 h-4" />
              <span>權威註釋書評介</span>
            </Link>

            <Link
              href="/archive"
              className="px-5 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-bold text-xs sm:text-sm transition flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>查閱歷週存檔</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-950/50 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-stone-800 dark:text-stone-200">
              靈修推基古 (QT with Tychicus)
            </span>
            <span>•</span>
            <span>平台架構與特色導覽</span>
          </div>

          <div className="text-center sm:text-right">
            <Link href="/" className="hover:underline font-semibold mr-3">
              返回靈修首頁
            </Link>
            <span>
              由{" "}
              <a
                href="https://web.ntnu.edu.tw/~hslee/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 underline decoration-stone-300 dark:decoration-stone-700 underline-offset-2 transition"
              >
                李鴻欣 (Hung-Shin Lee)
              </a>{" "}
              使用{" "}
              <a
                href="https://gemini.google.com/app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 underline decoration-stone-300 dark:decoration-stone-700 underline-offset-2 transition"
              >
                Gemini
              </a>{" "}
              製作
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
