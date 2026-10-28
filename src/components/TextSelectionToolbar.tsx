"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Copy, Check, Share2, X } from "lucide-react";

interface TextSelectionToolbarProps {
  versionLabel?: string;
  scriptureRef?: string;
  dayTitle?: string;
}

export function TextSelectionToolbar({
  versionLabel = "靈修推基古",
  scriptureRef = "",
  dayTitle = "",
}: TextSelectionToolbarProps) {
  const [selectedText, setSelectedText] = useState<string>("");
  const [toolbarPosition, setToolbarPosition] = useState<{ x: number; y: number } | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [showShareMenu, setShowShareMenu] = useState<boolean>(false);
  const toolbarRef = useRef<HTMLDivElement>(null);

  // Format shareable quote text with source attribution and current page URL
  const formatShareContent = useCallback(
    (text: string, includeUrl: boolean = true) => {
      const cleanText = text.trim();
      const currentUrl = typeof window !== "undefined" ? window.location.href : "";
      const sourceLine = [versionLabel, scriptureRef, dayTitle].filter(Boolean).join("・");

      if (includeUrl && currentUrl) {
        return `「${cleanText}」\n\n—— ${sourceLine}\n閱讀全文：${currentUrl}`;
      }
      return `「${cleanText}」\n\n—— ${sourceLine}`;
    },
    [versionLabel, scriptureRef, dayTitle]
  );

  const handleSelectionChange = useCallback(() => {
    if (typeof window === "undefined") return;

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      if (!showShareMenu) {
        setToolbarPosition(null);
        setSelectedText("");
      }
      return;
    }

    const text = selection.toString().trim();
    // Only trigger for selections of 3 or more characters
    if (text.length < 3) {
      if (!showShareMenu) {
        setToolbarPosition(null);
        setSelectedText("");
      }
      return;
    }

    try {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Ensure valid dimensions
      if (rect.width === 0 && rect.height === 0) return;

      // Position toolbar above the selection center
      const x = rect.left + rect.width / 2;
      const y = rect.top - 10; // 10px above the selection

      setSelectedText(text);
      setToolbarPosition({
        x: Math.max(120, Math.min(window.innerWidth - 120, x)),
        y: Math.max(60, y),
      });
      setCopied(false);
    } catch {
      // ignore
    }
  }, [showShareMenu]);

  useEffect(() => {
    const handleMouseUp = () => {
      // Delay slightly so selection is fully registered
      setTimeout(handleSelectionChange, 10);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setToolbarPosition(null);
        setSelectedText("");
        setShowShareMenu(false);
        return;
      }
      setTimeout(handleSelectionChange, 10);
    };

    const handleTouchEnd = () => {
      setTimeout(handleSelectionChange, 50);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleSelectionChange]);

  // Close toolbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
          setToolbarPosition(null);
          setSelectedText("");
          setShowShareMenu(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = async () => {
    if (!selectedText) return;
    try {
      const contentToCopy = formatShareContent(selectedText, true);
      await navigator.clipboard.writeText(contentToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = formatShareContent(selectedText, true);
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareLine = () => {
    const shareText = formatShareContent(selectedText, true);
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(shareText)}`;
    window.open(lineUrl, "_blank", "noopener,noreferrer");
    setShowShareMenu(false);
  };

  const handleShareThreads = () => {
    const shareText = formatShareContent(selectedText, true);
    const threadsUrl = `https://www.threads.net/intent/post?text=${encodeURIComponent(shareText)}`;
    window.open(threadsUrl, "_blank", "noopener,noreferrer");
    setShowShareMenu(false);
  };

  const handleShareFacebook = () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(`「${selectedText.trim()}」`)}`;
    window.open(fbUrl, "_blank", "noopener,noreferrer,width=600,height=500");
    setShowShareMenu(false);
  };

  if (!toolbarPosition || !selectedText) return null;

  return (
    <div
      ref={toolbarRef}
      style={{
        top: `${toolbarPosition.y}px`,
        left: `${toolbarPosition.x}px`,
        transform: "translate(-50%, -100%)",
      }}
      className="fixed z-50 flex flex-col items-center select-none animate-in fade-in zoom-in-95 duration-150"
    >
      <div className="flex items-center gap-1 p-1 bg-stone-900/95 dark:bg-stone-800/95 backdrop-blur-md text-stone-100 rounded-full border border-stone-700/80 shadow-2xl text-xs font-medium">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition cursor-pointer ${
            copied
              ? "bg-emerald-600 text-white font-semibold"
              : "hover:bg-stone-800 dark:hover:bg-stone-700 text-stone-200"
          }`}
          title="複製所選文字及出處連結"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-white animate-scale" />
              <span>已複製！</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-stone-300" />
              <span>複製</span>
            </>
          )}
        </button>

        <span className="w-px h-3.5 bg-stone-700 dark:bg-stone-600 my-auto" />

        {/* Share Button / Dropdown Trigger */}
        <button
          onClick={() => setShowShareMenu((prev) => !prev)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition cursor-pointer ${
            showShareMenu
              ? "bg-amber-500 text-stone-950 font-bold"
              : "hover:bg-stone-800 dark:hover:bg-stone-700 text-stone-200"
          }`}
          title="分享至 Facebook、Threads、Line"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>分享</span>
        </button>
      </div>

      {/* Share Submenu Card */}
      {showShareMenu && (
        <div className="mt-2 p-2 bg-stone-900/95 dark:bg-stone-800/95 backdrop-blur-md rounded-2xl border border-stone-700/80 shadow-2xl text-stone-200 flex flex-col gap-1 min-w-[170px] animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between px-2 py-1 text-[11px] font-semibold text-stone-400 border-b border-stone-800 dark:border-stone-700/70 mb-1">
            <span>分享這段文字至</span>
            <button
              onClick={() => setShowShareMenu(false)}
              className="text-stone-400 hover:text-stone-200 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* Line */}
          <button
            onClick={handleShareLine}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold hover:bg-emerald-500/20 hover:text-emerald-300 text-stone-200 transition text-left cursor-pointer"
          >
            <span className="w-4 h-4 rounded-full bg-[#00c300] text-white flex items-center justify-center text-[10px] font-black shrink-0">
              L
            </span>
            <span>分享到 Line</span>
          </button>

          {/* Threads */}
          <button
            onClick={handleShareThreads}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold hover:bg-purple-500/20 hover:text-purple-300 text-stone-200 transition text-left cursor-pointer"
          >
            <span className="w-4 h-4 rounded-full bg-stone-100 text-stone-950 flex items-center justify-center text-[10px] font-black shrink-0">
              @
            </span>
            <span>分享到 Threads</span>
          </button>

          {/* Facebook */}
          <button
            onClick={handleShareFacebook}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold hover:bg-blue-500/20 hover:text-blue-300 text-stone-200 transition text-left cursor-pointer"
          >
            <span className="w-4 h-4 rounded-full bg-[#1877f2] text-white flex items-center justify-center text-[10px] font-black shrink-0">
              f
            </span>
            <span>分享到 Facebook</span>
          </button>

          <div className="px-2 pt-1 text-[10px] text-stone-400 text-center border-t border-stone-800 dark:border-stone-700/70 mt-1">
            將自動附上原經卷連結
          </div>
        </div>
      )}

      {/* Downward pointing arrow */}
      <div className="w-2.5 h-2.5 bg-stone-900/95 dark:bg-stone-800/95 border-r border-b border-stone-700/80 rotate-45 -mt-1.5 pointer-events-none" />
    </div>
  );
}
