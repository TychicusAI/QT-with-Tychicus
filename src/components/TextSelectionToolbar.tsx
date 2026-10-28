"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Copy, Check, Share2 } from "lucide-react";

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
      const appName = "靈修推基古";
      const parts = [appName];
      if (versionLabel && versionLabel !== appName) parts.push(versionLabel);
      if (scriptureRef) parts.push(scriptureRef);
      if (dayTitle) parts.push(dayTitle);
      const sourceLine = parts.join("・");

      if (includeUrl && currentUrl) {
        return `「${cleanText}」\n\n—— ${sourceLine}\n${currentUrl}`;
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
    const fbQuote = formatShareContent(selectedText, false);
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(fbQuote)}`;
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

      {/* Share Submenu - only 3 icons, zero text */}
      {showShareMenu && (
        <div className="mt-1.5 p-1 bg-stone-900/95 dark:bg-stone-800/95 backdrop-blur-md rounded-full border border-stone-700/80 shadow-2xl flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-150">
          {/* Line */}
          <button
            onClick={handleShareLine}
            className="w-7 h-7 rounded-full bg-[#00c300] hover:scale-110 active:scale-95 text-white flex items-center justify-center text-xs font-black transition cursor-pointer shadow-xs"
            title="分享至 Line"
            aria-label="Line"
          >
            L
          </button>

          {/* Threads */}
          <button
            onClick={handleShareThreads}
            className="w-7 h-7 rounded-full bg-stone-100 hover:scale-110 active:scale-95 text-stone-950 flex items-center justify-center text-xs font-black transition cursor-pointer shadow-xs"
            title="分享至 Threads"
            aria-label="Threads"
          >
            @
          </button>

          {/* Facebook */}
          <button
            onClick={handleShareFacebook}
            className="w-7 h-7 rounded-full bg-[#1877f2] hover:scale-110 active:scale-95 text-white flex items-center justify-center text-xs font-black transition cursor-pointer shadow-xs"
            title="分享至 Facebook"
            aria-label="Facebook"
          >
            f
          </button>
        </div>
      )}

      {/* Downward pointing arrow */}
      <div className="w-2.5 h-2.5 bg-stone-900/95 dark:bg-stone-800/95 border-r border-b border-stone-700/80 rotate-45 -mt-1.5 pointer-events-none" />
    </div>
  );
}
