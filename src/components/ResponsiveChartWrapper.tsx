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

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
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

  const handleOpenNewWindow = () => {
    if (!containerRef.current) return;
    const svgEl = containerRef.current.querySelector("svg");
    if (!svgEl) return;

    const svgClone = svgEl.cloneNode(true) as SVGElement;
    svgClone.setAttribute("width", "100%");
    svgClone.removeAttribute("height");
    svgClone.style.maxWidth = "1100px";
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
                justify-content: space-between;
                align-items: center;
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
              <div class="hint">雙指可縮放檢視</div>
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
      <div className="relative group/chart w-full" ref={containerRef}>
        {/* 手機版頂端提示與全螢幕按鈕 */}
        <div className="flex items-center justify-between sm:justify-end gap-2 mb-2 sm:mb-0 sm:absolute sm:top-2 sm:right-2 z-10">
          <button
            type="button"
            onClick={handleOpenModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-700 hover:bg-purple-800 text-white shadow-sm transition active:scale-95 cursor-pointer"
            title="點擊全螢幕放大檢視"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>放大檢視</span>
          </button>
          <button
            type="button"
            onClick={handleOpenNewWindow}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 shadow-sm transition active:scale-95 cursor-pointer"
            title="開新視窗獨立瀏覽"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">開新分頁</span>
          </button>
        </div>

        {/* 圖表本身（在手機版會完整自適應縮放，電腦版維持原始比例） */}
        <div className="w-full">{children}</div>
      </div>

      {/* 全螢幕燈箱彈窗 (Lightbox Modal) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          {/* Modal Header */}
          <div
            className="flex items-center justify-between px-4 py-3 bg-stone-900/90 border-b border-stone-800 text-white shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 truncate pr-4">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-700 text-white shrink-0">
                釋經結構圖
              </span>
              <span className="text-sm font-semibold truncate text-stone-200">
                {title || "語篇結構圖解"}
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* 縮放控制器 */}
              <div className="hidden sm:flex items-center gap-1 bg-stone-800 rounded-lg p-1 mr-2">
                <button
                  type="button"
                  onClick={() => setScale((s) => Math.max(0.6, s - 0.2))}
                  className="p-1 rounded text-stone-300 hover:text-white hover:bg-stone-700 transition"
                  title="縮小"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-1 text-stone-300">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setScale((s) => Math.min(2.5, s + 0.2))}
                  className="p-1 rounded text-stone-300 hover:text-white hover:bg-stone-700 transition"
                  title="放大"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setScale(1)}
                  className="p-1 rounded text-stone-300 hover:text-white hover:bg-stone-700 transition"
                  title="重設大小"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleOpenNewWindow}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition"
                title="開新分頁瀏覽"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">開新分頁</span>
              </button>

              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition cursor-pointer"
                title="關閉 (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body with Zoom / Scroll */}
          <div
            className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full max-w-5xl bg-white dark:bg-stone-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-stone-200 dark:border-stone-800 transition-transform duration-150 ease-out origin-center"
              style={{
                transform: `scale(${scale})`,
              }}
            >
              {children}
            </div>
          </div>

          {/* Modal Footer Hint */}
          <div
            className="py-2 text-center text-xs text-stone-400 bg-stone-900/90 border-t border-stone-800 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            點擊背景或按 Esc 關閉・支援開新分頁觀看高解析原圖
          </div>
        </div>
      )}
    </>
  );
}
