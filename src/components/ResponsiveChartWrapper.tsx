"use client";

import React, { useState, useEffect, useRef } from "react";
import { Maximize2, X, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from "lucide-react";

interface ResponsiveChartWrapperProps {
  children: React.ReactNode;
  title?: string;
}

export function ResponsiveChartWrapper({ children, title }: ResponsiveChartWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // 當彈窗開啟時防止背景捲動，並支援 Esc 鍵關閉
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleOpenModal = () => {
    setScale(1);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleZoomOut = () => setScale((s) => Math.max(0.7, Number((s - 0.15).toFixed(2))));
  const handleZoomIn = () => setScale((s) => Math.min(1.6, Number((s + 0.15).toFixed(2))));
  const handleResetZoom = () => setScale(1);

  const handleOpenNewWindow = () => {
    if (!containerRef.current) return;
    const chartContent = containerRef.current.querySelector("[data-chart-content]");
    if (!chartContent) return;

    const isDark = document.documentElement.classList.contains("dark");
    const bgColor = isDark ? "#090d16" : "#fbfbf9";
    const fgColor = isDark ? "#f1f5f9" : "#1c1917";
    const chartTitle = title || "釋經語篇結構圖解";

    // 複製當前頁面的樣式表（Tailwind CSS），確保開新分頁完整呈現 HTML/Tailwind 圖表與深色模式
    const styleNodes = Array.from(
      document.querySelectorAll('link[rel="stylesheet"], style')
    )
      .map((node) => node.outerHTML)
      .join("\n");

    const newWin = window.open("", "_blank");
    if (newWin) {
      newWin.document.write(`
        <!DOCTYPE html>
        <html lang="zh-TW" class="${isDark ? "dark" : ""}">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${chartTitle} - 靈修推基古</title>
            ${styleNodes}
            <style>
              body {
                margin: 0;
                padding: 24px 16px;
                background-color: ${bgColor};
                color: ${fgColor};
                min-height: 100vh;
                box-sizing: border-box;
              }
              .standalone-shell {
                max-width: 1040px;
                width: 100%;
                margin: 0 auto;
              }
              .standalone-header {
                margin-bottom: 16px;
                padding-bottom: 12px;
                border-bottom: 1px solid ${isDark ? "#334155" : "#e2e8f0"};
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                gap: 8px;
              }
            </style>
          </head>
          <body>
            <div class="standalone-shell">
              <div class="standalone-header">
                <div style="font-size:16px;font-weight:700;">${chartTitle}</div>
                <div style="font-size:12px;color:${isDark ? "#94a3b8" : "#64748b"};">釋經語篇結構圖解・響應式排版</div>
              </div>
              <div>
                ${chartContent.innerHTML}
              </div>
            </div>
          </body>
        </html>
      `);
      newWin.document.close();
    }
  };

  return (
    <>
      <div className="chart-wrapper relative group/chart w-full min-w-0 mt-8 mb-8" ref={containerRef}>
        {/* 獨立控制列置於圖表上方 */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-400">
            <span>互動結構圖解（支援全螢幕放大）</span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={handleOpenModal}
              className="flex items-center gap-1.5 px-3.5 py-2 sm:py-1.5 min-h-[40px] sm:min-h-[34px] rounded-full text-xs font-semibold bg-purple-700 hover:bg-purple-800 text-white shadow-sm transition active:scale-95 cursor-pointer"
              title="點擊全螢幕放大檢視"
            >
              <Maximize2 className="w-3.5 h-3.5 shrink-0" />
              <span>放大檢視</span>
            </button>
            <button
              type="button"
              onClick={handleOpenNewWindow}
              className="flex items-center gap-1.5 px-3.5 py-2 sm:py-1.5 min-h-[40px] sm:min-h-[34px] rounded-full text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 shadow-sm transition active:scale-95 cursor-pointer"
              title="開新視窗獨立瀏覽"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>開新分頁</span>
            </button>
          </div>
        </div>

        {/* 圖表內容（HTML + Tailwind 響應式結構卡片） */}
        <div data-chart-content="true" className="w-full min-w-0">
          {children}
        </div>
      </div>

      {/* 全螢幕燈箱彈窗 (Lightbox Modal) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col w-screen max-w-[100vw] h-[100dvh] overflow-hidden bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          {/* Modal Header */}
          <div
            className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-900/95 border-b border-stone-800 text-white shrink-0 w-full max-w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 min-w-0 flex-1 pr-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-700 text-white shrink-0">
                釋經結構圖
              </span>
              <span className="text-sm font-semibold truncate text-stone-200 min-w-0">
                {title || "語篇結構圖解"}
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* 桌面版縮放控制器 */}
              <div className="hidden sm:flex items-center gap-1 bg-stone-800 rounded-lg p-1 mr-1">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 rounded text-stone-300 hover:text-white hover:bg-stone-700 transition cursor-pointer"
                  title="縮小"
                  aria-label="縮小圖表"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-1.5 text-stone-300 min-w-[44px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 rounded text-stone-300 hover:text-white hover:bg-stone-700 transition cursor-pointer"
                  title="放大"
                  aria-label="放大圖表"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded text-stone-300 hover:text-white hover:bg-stone-700 transition cursor-pointer"
                  title="重設大小"
                  aria-label="重設縮放"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleOpenNewWindow}
                className="flex items-center gap-1.5 px-3 py-2 sm:py-1.5 min-h-[40px] sm:min-h-[34px] rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition cursor-pointer"
                title="開新分頁瀏覽"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">開新分頁</span>
              </button>

              <button
                type="button"
                onClick={handleCloseModal}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition cursor-pointer shrink-0"
                title="關閉 (Esc)"
                aria-label="關閉燈箱"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div
            data-chart-modal="true"
            className="flex-1 w-full overflow-auto p-3 sm:p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="mx-auto my-auto w-full max-w-5xl bg-white dark:bg-stone-900 rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl border border-stone-200 dark:border-stone-800 transition-transform duration-150 origin-top"
              style={{
                transform: scale === 1 ? undefined : `scale(${scale})`,
              }}
            >
              {children}
            </div>
          </div>

          {/* Modal Footer */}
          <div
            className="px-3 py-2.5 bg-stone-900/95 border-t border-stone-800 shrink-0 flex flex-wrap items-center justify-center sm:justify-between gap-2 text-xs text-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex sm:hidden items-center gap-1.5 bg-stone-800 rounded-xl p-1">
              <button
                type="button"
                onClick={handleZoomOut}
                className="min-w-[40px] min-h-[36px] flex items-center justify-center rounded-lg text-stone-200 hover:bg-stone-700 active:bg-stone-600 transition cursor-pointer"
                aria-label="縮小圖表"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-stone-200 min-w-[48px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                className="min-w-[40px] min-h-[36px] flex items-center justify-center rounded-lg text-stone-200 hover:bg-stone-700 active:bg-stone-600 transition cursor-pointer"
                aria-label="放大圖表"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="min-w-[40px] min-h-[36px] flex items-center justify-center rounded-lg text-stone-200 hover:bg-stone-700 active:bg-stone-600 transition cursor-pointer"
                aria-label="重設縮放"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <span className="text-center text-xs text-stone-400 w-full sm:w-auto">
              <span className="sm:hidden">點擊右上「×」關閉・支援開新分頁瀏覽</span>
              <span className="hidden sm:inline">點擊背景或按 Esc 關閉・支援開新分頁獨立檢視</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
