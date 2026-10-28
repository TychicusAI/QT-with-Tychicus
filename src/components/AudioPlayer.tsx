"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Headphones,
  X,
  Volume2,
  ChevronDown,
  ChevronUp,
  Quote
} from "lucide-react";
import { DevotionalVersion } from "@/types/devotional";

interface AudioPlayerProps {
  audioUrl?: string;
  hasAudio?: boolean;
  version: DevotionalVersion;
  dayTitle: string;
  dayLabel: string;
}

const SPEED_OPTIONS = [0.8, 1.0, 1.25, 1.5];

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function AudioPlayer({
  audioUrl,
  hasAudio = true,
  version,
  dayTitle,
  dayLabel,
}: AudioPlayerProps) {
  const isFamily = version === "family";
  const isEncore = version === "encore";
  const isMission = version === "mission";
  const isExegesis = version === "exegesis";
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);

  // States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isAvailable, setIsAvailable] = useState(hasAudio);

  const voiceName = isExegesis
    ? "釋經版伴讀（深沉學術聲）"
    : isMission
    ? "宣教版伴讀（溫厚男聲）"
    : isEncore
    ? "樂齡版伴讀（溫厚男聲）"
    : isFamily
    ? "家庭版伴讀（溫和女聲）"
    : "青年版伴讀（溫和女聲）";
  const versionTitle = isExegesis
    ? "釋經版靈修深研伴讀"
    : isMission
    ? "宣教版靈修伴讀"
    : isEncore
    ? "樂齡版靈修伴讀"
    : isFamily
    ? "家庭版靈修伴讀"
    : "青年版靈修伴讀";

  // IntersectionObserver to detect when the main player header scrolls out of view
  useEffect(() => {
    if (!headerContainerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When header is not intersecting, and audio is playing or was opened
        setIsStickyVisible(!entry.isIntersecting && isPlaying);
      },
      { threshold: 0.1 }
    );

    observer.observe(headerContainerRef.current);
    return () => observer.disconnect();
  }, [isPlaying]);

  // Audio Event Handlers
  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsAvailable(true);
    }
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  const handleError = useCallback(() => {
    setIsAvailable(false);
    setIsPlaying(false);
  }, []);

  // Controls
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [isPlaying]);

  const handleSkip = useCallback((seconds: number) => {
    if (!audioRef.current) return;
    const target = Math.min(Math.max(0, audioRef.current.currentTime + seconds), audioRef.current.duration || 0);
    audioRef.current.currentTime = target;
    setCurrentTime(target);
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = target;
      setCurrentTime(target);
    }
  };

  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  // Setup MediaSession for lockscreen / mobile notification controls
  useEffect(() => {
    if ("mediaSession" in navigator && isPlaying) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${dayLabel} ${dayTitle}`,
        artist: "靈修推基古",
        album: versionTitle,
      });

      navigator.mediaSession.setActionHandler("play", () => {
        audioRef.current?.play();
        setIsPlaying(true);
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        audioRef.current?.pause();
        setIsPlaying(false);
      });
      navigator.mediaSession.setActionHandler("seekbackward", () => handleSkip(-10));
      navigator.mediaSession.setActionHandler("seekforward", () => handleSkip(10));
    }
  }, [dayLabel, dayTitle, versionTitle, isPlaying, handleSkip]);

  // If audio is explicitly unavailable and not found, don't show player
  if (!isAvailable && !hasAudio) {
    return (
      <div className="flex items-center gap-2">
        <Quote
          className={`w-5 h-5 rotate-180 shrink-0 ${
            isExegesis
              ? "text-purple-600 dark:text-purple-400"
              : isMission
              ? "text-indigo-600 dark:text-indigo-400"
              : isEncore
              ? "text-rose-600 dark:text-rose-400"
              : isFamily
              ? "text-teal-600 dark:text-teal-400"
              : "text-amber-600 dark:text-amber-400"
          }`}
        />
        <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">今日信息</h3>
      </div>
    );
  }

  // Accent styles according to version
  const theme = isExegesis
    ? {
        badgeBg: "bg-purple-500/10 text-purple-800 dark:text-purple-200 border-purple-300/40 dark:border-purple-700/40",
        pillActive: "bg-purple-700 text-white shadow-sm dark:bg-purple-600",
        pillIdle: "bg-purple-500/10 text-purple-800 dark:text-purple-200 hover:bg-purple-500/20 border border-purple-300/50 dark:border-purple-700/50",
        cardBg: "bg-purple-500/5 dark:bg-purple-950/20 border-purple-300/50 dark:border-purple-700/40",
        accentColor: "accent-purple-700 dark:accent-purple-400",
        progressColor: "bg-purple-700 dark:bg-purple-400",
        buttonHover: "hover:bg-purple-500/10 text-purple-700 dark:text-purple-300",
        speedActive: "bg-purple-700 text-white dark:bg-purple-600",
        playBtn: "bg-purple-700 hover:bg-purple-800 text-white dark:bg-purple-600 dark:hover:bg-purple-700 shadow-md",
      }
    : isMission
    ? {
        badgeBg: "bg-indigo-500/10 text-indigo-800 dark:text-indigo-200 border-indigo-300/40 dark:border-indigo-700/40",
        pillActive: "bg-indigo-700 text-white shadow-sm dark:bg-indigo-600",
        pillIdle: "bg-indigo-500/10 text-indigo-800 dark:text-indigo-200 hover:bg-indigo-500/20 border border-indigo-300/50 dark:border-indigo-700/50",
        cardBg: "bg-indigo-500/5 dark:bg-indigo-950/20 border-indigo-300/50 dark:border-indigo-700/40",
        accentColor: "accent-indigo-700 dark:accent-indigo-400",
        progressColor: "bg-indigo-700 dark:bg-indigo-400",
        buttonHover: "hover:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
        speedActive: "bg-indigo-700 text-white dark:bg-indigo-600",
        playBtn: "bg-indigo-700 hover:bg-indigo-800 text-white dark:bg-indigo-600 dark:hover:bg-indigo-700 shadow-md",
      }
    : isEncore
    ? {
        badgeBg: "bg-rose-500/10 text-rose-800 dark:text-rose-200 border-rose-300/40 dark:border-rose-700/40",
        pillActive: "bg-rose-700 text-white shadow-sm dark:bg-rose-600",
        pillIdle: "bg-rose-500/10 text-rose-800 dark:text-rose-200 hover:bg-rose-500/20 border border-rose-300/50 dark:border-rose-700/50",
        cardBg: "bg-rose-500/5 dark:bg-rose-950/20 border-rose-300/50 dark:border-rose-700/40",
        accentColor: "accent-rose-700 dark:accent-rose-400",
        progressColor: "bg-rose-700 dark:bg-rose-400",
        buttonHover: "hover:bg-rose-500/10 text-rose-700 dark:text-rose-300",
        speedActive: "bg-rose-700 text-white dark:bg-rose-600",
        playBtn: "bg-rose-700 hover:bg-rose-800 text-white dark:bg-rose-600 dark:hover:bg-rose-700 shadow-md",
      }
    : isFamily
    ? {
        badgeBg: "bg-teal-500/10 text-teal-800 dark:text-teal-200 border-teal-300/40 dark:border-teal-700/40",
        pillActive: "bg-teal-600 text-white shadow-sm dark:bg-teal-500",
        pillIdle: "bg-teal-500/10 text-teal-800 dark:text-teal-200 hover:bg-teal-500/20 border border-teal-300/50 dark:border-teal-700/50",
        cardBg: "bg-teal-500/5 dark:bg-teal-950/20 border-teal-300/50 dark:border-teal-700/40",
        accentColor: "accent-teal-600 dark:accent-teal-400",
        progressColor: "bg-teal-600 dark:bg-teal-400",
        buttonHover: "hover:bg-teal-500/10 text-teal-700 dark:text-teal-300",
        speedActive: "bg-teal-600 text-white dark:bg-teal-500",
        playBtn: "bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-600 shadow-md",
      }
    : {
        badgeBg: "bg-amber-500/10 text-amber-800 dark:text-amber-200 border-amber-300/40 dark:border-amber-700/40",
        pillActive: "bg-amber-600 text-white shadow-sm dark:bg-amber-500",
        pillIdle: "bg-amber-500/10 text-amber-800 dark:text-amber-200 hover:bg-amber-500/20 border border-amber-300/50 dark:border-amber-700/50",
        cardBg: "bg-amber-500/5 dark:bg-amber-950/20 border-amber-300/50 dark:border-amber-700/40",
        accentColor: "accent-amber-600 dark:accent-amber-400",
        progressColor: "bg-amber-600 dark:bg-amber-400",
        buttonHover: "hover:bg-amber-500/10 text-amber-700 dark:text-amber-300",
        speedActive: "bg-amber-600 text-white dark:bg-amber-500",
        playBtn: "bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-600 shadow-md",
      };

  return (
    <div className="space-y-4" ref={headerContainerRef}>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={handleError}
      />

      {/* Header Row: Title on Left, Capsule Pill Button on Right */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <Quote
            className={`w-5 h-5 rotate-180 shrink-0 ${
              isMission
                ? "text-indigo-600 dark:text-indigo-400"
                : isEncore
                ? "text-rose-600 dark:text-rose-400"
                : isFamily
                ? "text-teal-600 dark:text-teal-400"
                : "text-amber-600 dark:text-amber-400"
            }`}
          />
          <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">今日信息</h3>
        </div>

        {/* Capsule Pill Button */}
        <button
          type="button"
          onClick={() => {
            if (!isExpanded) {
              setIsExpanded(true);
              if (!isPlaying) togglePlay();
            } else {
              setIsExpanded(false);
            }
          }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
            isPlaying ? theme.pillActive : theme.pillIdle
          }`}
          title={isExpanded ? "收合播放器" : "展開語音伴讀"}
        >
          <Headphones className={`w-3.5 h-3.5 ${isPlaying ? "animate-pulse" : ""}`} />
          {isPlaying ? (
            <span className="flex items-center gap-1.5">
              <span>{formatTime(currentTime)}</span>
              <span className="opacity-70">/</span>
              <span>{formatTime(duration)}</span>
            </span>
          ) : (
            <span>聆聽信息 {duration > 0 && `(${formatTime(duration)})`}</span>
          )}
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 ml-0.5 opacity-80" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-80" />
          )}
        </button>
      </div>

      {/* Expanded Player Card */}
      {isExpanded && (
        <div
          className={`rounded-2xl p-4 sm:p-5 border transition-all duration-300 shadow-xs ${theme.cardBg}`}
        >
          {/* Card Top: Voice Badge & Close button */}
          <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 text-xs">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md font-medium border ${theme.badgeBg}`}>
                🎙️ {voiceName}
              </span>
              <span className="text-stone-500 dark:text-stone-400 hidden sm:inline">
                以安靜心聆聽神的話語
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-md text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors"
              title="收合播放器"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Card Middle: Controls & Progress */}
          <div className="space-y-3">
            {/* Scrubber Progress Bar */}
            <div className="space-y-1">
              <div className="relative flex items-center">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.5}
                  value={currentTime}
                  onChange={handleSeek}
                  className={`w-full h-1.5 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer ${theme.accentColor}`}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400 px-0.5">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Main Buttons Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pt-1">
              {/* Left Speed Selector */}
              <div className="flex items-center gap-1">
                <span className="text-[11px] text-stone-500 dark:text-stone-400 mr-1 hidden sm:inline">
                  倍速:
                </span>
                {SPEED_OPTIONS.map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => handleRateChange(rate)}
                    className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                      playbackRate === rate
                        ? theme.speedActive
                        : "text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60"
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>

              {/* Center Playback Controls */}
              <div className="flex items-center gap-2.5 sm:gap-4">
                <button
                  type="button"
                  onClick={() => handleSkip(-10)}
                  className={`p-2 rounded-full transition-colors ${theme.buttonHover}`}
                  title="後退 10 秒"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform active:scale-95 cursor-pointer ${theme.playBtn}`}
                  title={isPlaying ? "暫停" : "播放"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleSkip(10)}
                  className={`p-2 rounded-full transition-colors ${theme.buttonHover}`}
                  title="快進 10 秒"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>

              {/* Right Spacer / Volume icon */}
              <div className="hidden sm:flex items-center text-xs text-stone-400 justify-end sm:w-[80px]">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Sticky Mini-Player (Shows when scrolled past header while playing) */}
      {isStickyVisible && isPlaying && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="bg-stone-900/90 dark:bg-stone-900/95 backdrop-blur-md text-stone-100 rounded-full px-4 py-2.5 shadow-2xl border border-stone-700/60 flex items-center justify-between gap-3">
            {/* Play/Pause */}
            <button
              type="button"
              onClick={togglePlay}
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                isExegesis
                  ? "bg-purple-500 text-stone-950"
                  : isMission
                  ? "bg-indigo-500 text-stone-950"
                  : isEncore
                  ? "bg-rose-500 text-stone-950"
                  : isFamily
                  ? "bg-teal-500 text-stone-950"
                  : "bg-amber-500 text-stone-950"
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            {/* Info */}
            <div className="min-w-0 flex-1 cursor-pointer" onClick={() => setIsExpanded(true)}>
              <div className="text-xs font-semibold truncate">
                {dayLabel} {dayTitle}
              </div>
              <div className="text-[10px] text-stone-400 font-mono flex items-center gap-1.5">
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
                <span className="opacity-60">•</span>
                <span>{playbackRate}x</span>
              </div>
            </div>

            {/* Skip +10s */}
            <button
              type="button"
              onClick={() => handleSkip(10)}
              className="p-1.5 text-stone-300 hover:text-white transition-colors"
              title="快進 10 秒"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Expand or Close button */}
            <button
              type="button"
              onClick={() => {
                headerContainerRef.current?.scrollIntoView({ behavior: "smooth" });
                setIsExpanded(true);
              }}
              className="p-1.5 text-stone-400 hover:text-stone-200 text-xs px-2 rounded-md hover:bg-stone-800 transition-colors"
              title="展開詳細控制"
            >
              展開
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
