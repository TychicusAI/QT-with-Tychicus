"use client";

import React, { useState, useEffect, useRef } from "react";
import { Maximize2, X, ZoomIn, ZoomOut, RotateCcw, ExternalLink, MoveHorizontal } from "lucide-react";

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

  const handleZoomOut = () => setScale((s) => Math.max(0.6, Number((s - 0.2).toFixed(1))));
  const handleZoomIn = () => setScale((s) => Math.min(2.4, Number((s + 0.2).toFixed(1))));
  const handleResetZoom = () => setScale(1);

  const handleOpenNewWindow = () => {
    if (!containerRef.current) return;
    const svgEl = containerRef.current.querySelector("svg");
    if (!svgEl) return;

    const svgClone = svgEl.cloneNode(true) as SVGElement;
    svgClone.setAttribute("width", "100%");
    svgClone.removeAttribute("height");
    svgClone.style.maxWidth = "1100px";
    svgClone.style.minWidth = "720px";
    svgClone.style.margin = "0 auto";
    svgClone.style.display = "block";

    const isDark = document.documentElement.classList.contains("dark");
    const bgColor = isDark ? "#090d16" : "#fbfbf9";
    const fgColor = isDark ? "#f1f5f9" : "#1c1917";
    const chartTitle = title || "釋經語篇結構圖解";

    const newWin = window.open("", "_blank");
    if (newWin) {
      newWin.document.write(`
        <!DOCTYPE html>
        <html lang="zh-TW" class="${isDark ? "dark" : ""}">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${chartTitle} - 靈修推基古</title>
            <style>
              body {
                margin: 0;
                padding: 24px 16px;
                background-color: ${bgColor};
                color: ${fgColor};
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 100vh;
                box-sizing: border-box;
              }
              .header {
                max-width: 1100px;
                width: 100%;
                margin-bottom: 20px;
                padding-bottom: 12px;
                border-bottom: 1px solid ${isDark ? "#334155" : "#e2e8f0"};
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                gap: 8px;
              }
              .title {
                font-size: 16px;
                font-weight: 700;
              }
              .hint {
                font-size: 12px;
                color: ${isDark ? "#94a3b8" : "#64748b"};
              }
              .svg-container {
                max-width: 1100px;
                width: 100%;
                background-color: ${isDark ? "#111827" : "#ffffff"};
                border: 1px solid ${isDark ? "#374151" : "#e5e7eb"};
                border-radius: 20px;
                padding: 16px;
                box-sizing: border-box;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                overflow-x: auto;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="title">${chartTitle}</div>
              <div class="hint">可雙指縮放或左右滑動檢視</div>
            </div>
            <div class="svg-container">
              ${svgClone.outerHTML}
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
        {/* 獨立控制列置於圖表上方，避免桌面版壓到圖表標題膠囊 */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/50 border border-purple-200/70 dark:border-purple-800/50 px-2.5 py-1 rounded-full">
            <MoveHorizontal className="w-3.5 h-3.5 shrink-0" />
            <span>可左右滑動看全圖</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-400">
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

        {/* 圖表本身（手機版保留 min-w-[720px] 於 overflow-x-auto 容器內平滑橫滑，維持字體清晰） */}
        <div className="w-full min-w-0">{children}</div>
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

          {/* Modal Body with Smooth Pan & Vector Scaling */}
          <div
            data-chart-modal="true"
            className="flex-1 w-full overflow-auto p-3 sm:p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="mx-auto my-auto bg-white dark:bg-stone-900 rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl border border-stone-200 dark:border-stone-800 transition-all duration-150"
              style={{
                width: `max(${Math.round(780 * scale)}px, ${Math.round(scale * 100)}%)`,
                maxWidth: scale <= 1 ? "1024px" : "none",
              }}
            >
              {children}
            </div>
          </div>

          {/* Modal Footer: 手機版專屬縮放列 + 提示 */}
          <div
            className="px-3 py-2.5 bg-stone-900/95 border-t border-stone-800 shrink-0 flex flex-wrap items-center justify-center sm:justify-between gap-2 text-xs text-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 手機版縮放控制列 */}
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
              <span className="sm:hidden">可上下左右滑動查看原圖・點擊右上「×」關閉</span>
              <span className="hidden sm:inline">點擊背景或按 Esc 關閉・支援開新分頁觀看高解析原圖</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
