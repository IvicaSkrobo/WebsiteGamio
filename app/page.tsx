"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type NavItem = {
  id: string;
  label: string;
};

type ProductCard = {
  name: string;
  description: string;
  art: string;
  accent: string;
  metric: string;
};

type CapabilityCard = {
  title: string;
  description: string;
  symbolAsset: string;
  innerCircleAsset?: string;
};

type MarketCard = {
  label: string;
  value: string;
  description: string;
};

const navLogoAsset = "/images/site/gamio-logo.svg";
const hogambaLogoAsset = "/images/hogamba/live-logo.png";
const hogambaGamePanelAsset = "/images/hogamba/game-panel.png";
const hogambaControlsAsset = "/images/hogamba/controls.png";
const hogambaMascotAsset = "/images/hogamba/mascot.png";
const hogambaLiveRocketAsset = "/images/hogamba/rocket.png";
const hogambaParachuteAsset = "/images/hogamba/parachute_hogamba 1.png";
const hogambaChipsAsset = "/images/hogamba/Chips hogamba.png";
const hogambaSkinTorsoAsset = "/images/hogamba/common_japan_torso.png";
const hogambaDeathHeadAsset = "/images/hogamba/death_head.png";
const hogambaDesktopViewportAsset = "/images/hogamba/pchogamba.png";
const hogambaMobileViewportAsset = "/images/hogamba/mobilepnghogamba.png";
const hogambaRocketSvgAsset = "/images/hogamba/Hogamba Rocket 1.svg";
const predictionStreamerAsset =
  "/images/prediction-arena/streamer.png";
const predictionChatAsset =
  "/images/prediction-arena/chat.png";
const predictionTabletAsset =
  "/images/prediction-arena/tablet.png";
const predictionCoinAsset =
  "/images/prediction-arena/coin.png";
const chatArenaGroupedAsset =
  "/images/prediction-arena/ChatArenaGrouped.svg";
const predictionBombAsset =
  "/images/prediction-arena/tnt.png";
const predictionGunAsset =
  "/images/prediction-arena/gun.png";
const predictionSkullCoinAsset =
  "/images/prediction-arena/skull-coin.png";
const originalsPlinkoThumbnailAsset =
  "/images/originals/plinko-thumbnail.png";
const originalsMinesThumbnailAsset =
  "/images/originals/mines-thumbnail.png";
const originalsChickenThumbnailAsset =
  "/images/originals/chicken-thumbnail.png";
const originalsDiceThumbnailAsset =
  "/images/originals/dice-thumbnail.png";
const originalsFeaturedGameAsset =
  "/images/originals/OriginalsChickenFullGame Graphic.svg";
const originalsBadgeAsset = "/images/site/originals-badge.svg";
const capabilityF2PAsset = "/images/site/capability-f2p.svg";
const capabilityRngTopAsset = "/images/site/capability-rng-top.svg";
const capabilityAffiliateAsset = "/images/site/capability-affiliate.svg";
const capabilityAnalyticsAsset = "/images/site/capability-analytics.svg";
const capabilityStreamingAsset = "/images/site/capability-streaming.svg";
const capabilityWhitelabelAsset = "/images/site/capability-whitelabel.svg";

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "markets", label: "Markets" },
  { id: "originals", label: "Originals" },
  { id: "hogamba", label: "Hogamba" },
  { id: "prediction-arena", label: "Prediction arena" },
  { id: "capabilities", label: "Capabilities" },
];

const productCards: ProductCard[] = [
  {
    name: "PLINKO",
    description: "High-energy drops, sharp risk ladders, and immediate visual payoff.",
    art: originalsPlinkoThumbnailAsset,
    accent: "#00d0ff",
    metric: "Drop mechanics",
  },
  {
    name: "MINES",
    description: "Tense reveal loops built for repeat sessions and streamer drama.",
    art: originalsMinesThumbnailAsset,
    accent: "#ff376a",
    metric: "Risk reveal",
  },
  {
    name: "CHICKEN",
    description: "Chaos-forward pacing with bright reward cues and simple rounds.",
    art: originalsChickenThumbnailAsset,
    accent: "#ffc44d",
    metric: "Arcade rounds",
  },
  {
    name: "DICE",
    description: "Fast, configurable risk gameplay with simple rules and instant feedback.",
    art: originalsDiceThumbnailAsset,
    accent: "#d1006f",
    metric: "Instant play",
  },
];

const marketCards: MarketCard[] = [
  {
    label: "Where we show up",
    value: "6",
    description: "Belgium, Poland, Romania, Greece, Turkey and Brazil.",
  },
  {
    label: "Studio model",
    value: "Games",
    description: "We build playable products, not just pitch decks or prototypes.",
  },
  {
    label: "Product stance",
    value: "Player-first",
    description: "Readable mechanics, character, tension and reasons to come back.",
  },
];

const hogambaFeatureCards = [
  {
    title: "Skins system",
    description: "Personalized cosmetic loops that give players a reason to keep returning.",
  },
  {
    title: "Influencer access",
    description: "Creator-led skins and promotions that turn audience attention into game engagement.",
  },
  {
    title: "Progress milestones",
    description: "Visible goals, rewards and achievement cues that make sessions feel earned.",
  },
  {
    title: "Brand worlds",
    description: "Custom visual surfaces that make Hogamba feel like a complete game universe.",
  },
];

const capabilityCards: CapabilityCard[] = [
  {
    title: "F2P engagement",
    description:
      "Free-to-play games, missions and progression loops that give players reasons to return.",
    symbolAsset: capabilityF2PAsset,
  },
  {
    title: "Scalable RNG systems",
    description:
      "Modular, certified RNG services designed for instant games and crash-style mechanics.",
    symbolAsset: capabilityRngTopAsset,
  },
  {
    title: "Affiliate & referral systems",
    description:
      "Referral and creator loops that help communities gather around games.",
    symbolAsset: capabilityAffiliateAsset,
  },
  {
    title: "Data & analytics",
    description:
      "Game-level telemetry, cohort analysis and experimentation to tune products over time.",
    symbolAsset: capabilityAnalyticsAsset,
  },
  {
    title: "Streaming-ready software",
    description:
      "UX and tooling built so creators can stream, clip and share our products easily.",
    symbolAsset: capabilityStreamingAsset,
  },
  {
    title: "Whitelabel solutions",
    description:
      "Product worlds and reusable systems that can carry different brands, themes and audiences.",
    symbolAsset: capabilityWhitelabelAsset,
  },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatPlayers(value: number) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

function formatTransactions(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value).replace("€", "€ ");
}

function AssetImage({
  src,
  alt,
  wrapperClassName,
  imgClassName,
  fallback,
}: {
  src: string;
  alt: string;
  wrapperClassName?: string;
  imgClassName?: string;
  fallback?: ReactNode;
}) {
  const [status, setStatus] = useState<"loaded" | "error">("loaded");

  return (
    <div className={cn("relative", wrapperClassName)}>
      {status === "error" ? fallback ?? null : null}
      {status !== "error" ? (
        <img
          src={src}
          alt={alt}
          className={imgClassName}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      ) : null}
    </div>
  );
}

function NavLogoFallback() {
  return (
    <div className="flex h-full w-full items-center justify-start">
      <span className="font-display text-[31px] leading-none font-bold tracking-[-0.08em] text-white">
        Gamio
      </span>
    </div>
  );
}

function OriginalsBadgeFallback() {
  return (
    <div className="inline-flex h-[40px] items-center rounded-full border border-[rgba(255,169,119,0.35)] bg-[linear-gradient(180deg,rgba(255,125,78,0.18),rgba(255,125,78,0.06))] px-5 text-[11px] font-bold tracking-[0.38em] text-[#ffb188] uppercase">
      Originals
    </div>
  );
}

function HogambaGameFallback() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[rgba(100,200,255,0.15)] bg-[linear-gradient(180deg,#0e1a2a,#070e18)] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-1.5">
          {[
            "bg-[rgba(255,107,53,0.9)]",
            "bg-[rgba(255,200,80,0.8)]",
            "bg-[rgba(100,220,100,0.8)]",
          ].map((color, index) => (
            <div
              key={`avatar-${index}`}
              className={`h-6 w-6 rounded-full border border-white/20 ${color}`}
            />
          ))}
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="h-1 w-1 rounded-full bg-white/40" />
          ))}
        </div>
      </div>

      {/* Game area */}
      <div className="relative mt-2 overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,#0b1828,#050c18)] p-5">
        {/* Win toast */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full border border-[rgba(93,222,42,0.3)] bg-[rgba(93,222,42,0.12)] px-4 py-1.5 text-[11px] font-bold text-[#8fffaa]">
          You won at 9.85x · €63.00 EUR
        </div>

        {/* Multiplier + rocket */}
        <div className="flex items-end justify-between pt-10 pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">Live round</p>
            <p className="font-display mt-1 text-[3.2rem] font-bold leading-none tracking-[-0.06em]">
              <span className="text-[#5dde2a]">10</span>
              <span className="text-white">.01x</span>
            </p>
          </div>
          {/* Rocket shape */}
          <div className="relative flex h-[80px] w-[40px] flex-col items-center">
            <div className="h-[42px] w-[28px] rounded-t-full bg-[linear-gradient(180deg,#e8f0ff,#8aaad4)]" />
            <div className="h-[24px] w-[28px] bg-[linear-gradient(180deg,#6a8fbf,#3a5a8a)]" />
            <div className="absolute bottom-0 flex gap-1">
              <div className="h-[16px] w-[10px] rounded-br-full bg-[rgba(255,140,60,0.7)] blur-[1px]" />
              <div className="h-[16px] w-[10px] rounded-bl-full bg-[rgba(255,140,60,0.7)] blur-[1px]" />
            </div>
          </div>
        </div>

        {/* Balance */}
        <div className="mt-2 border-t border-white/8 pt-3 text-[12px] text-white/50">
          EUR 468.17
        </div>
      </div>

      {/* Bet row */}
      <div className="mt-2 rounded-[16px] bg-[rgba(255,255,255,0.03)] p-3">
        <div className="flex items-center gap-2">
          {/* Minus/plus input */}
          <div className="flex flex-1 items-center justify-between rounded-[12px] border border-white/10 bg-black/30 px-3 py-2 text-sm font-semibold text-white/80">
            <span className="text-white/50">−</span>
            <span>.00</span>
            <span className="text-white/50">+</span>
          </div>
          <div className="flex flex-1 items-center justify-between rounded-[12px] border border-white/10 bg-black/30 px-3 py-2 text-sm font-semibold text-white/80">
            <span className="text-white/50">−</span>
            <span>1.00</span>
            <span className="text-white/50">+</span>
          </div>
        </div>
        {/* Number grid */}
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="rounded-[10px] border border-white/8 bg-white/[0.05] py-2 text-center text-sm font-bold text-white/70"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HogambaMascotFallback() {
  return (
    <div className="flex flex-col items-center">
      {/* Dome / hot-air balloon */}
      <div className="relative h-[220px] w-[220px] overflow-hidden rounded-t-full border border-[rgba(200,240,255,0.2)] bg-[linear-gradient(180deg,#d8eeff,#b0cfee)]">
        {/* Vertical stripes */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`stripe-${index}`}
            className="absolute top-0 h-full w-[2px] bg-black/30"
            style={{ left: `${12 + index * 12}%` }}
          />
        ))}
        {/* Inner glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.4),rgba(255,255,255,0)_60%)]" />
      </div>
      {/* Creature body */}
      <div className="relative -mt-2 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[rgba(100,220,200,0.3)] bg-[linear-gradient(180deg,#1a3a3a,#0d2020)]">
        {/* Eyes */}
        <div className="flex gap-4">
          {[0, 1].map((eye) => (
            <div
              key={eye}
              className="h-3 w-3 rounded-full bg-[#00e5c8] shadow-[0_0_8px_rgba(0,229,200,0.8)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HogambaControlsFallback() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <button
          type="button"
          className="w-full rounded-[14px] bg-[linear-gradient(135deg,#5dde2a,#3aaa10)] py-4 text-center text-[15px] font-bold tracking-[0.12em] text-[#081109] shadow-[0_10px_30px_rgba(93,222,42,0.22)]"
        >
          PLACE BET
        </button>
        <div className="mt-2 flex items-center gap-2 px-1">
          <span className="h-3.5 w-3.5 rounded-full border border-white/30 bg-transparent" />
          <span className="text-[12px] text-white/50">Auto bet</span>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="w-full rounded-[14px] bg-[linear-gradient(135deg,#ff8c42,#cc5500)] py-4 text-center text-[15px] font-bold tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(255,107,53,0.22)]"
        >
          <span className="block">CASHOUT</span>
          <span className="block text-[13px] font-normal tracking-normal text-white/80">
            23.80 🔒
          </span>
        </button>
        <div className="mt-2 flex items-center gap-2 px-1">
          <span className="h-3.5 w-3.5 rounded-full border border-white/30 bg-transparent" />
          <span className="text-[12px] text-white/50">Auto cashout</span>
        </div>
      </div>
    </div>
  );
}

function HogambaLogoFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full border border-[rgba(196,255,123,0.16)] bg-[linear-gradient(180deg,rgba(113,255,71,0.08),rgba(113,255,71,0.01))] px-5">
      <span className="font-display text-[1.15rem] leading-none font-bold tracking-[0.34em] text-[#cbff89] uppercase">
        Hogamba
      </span>
    </div>
  );
}

function AboutPanelFallback() {
  return (
    <div className="absolute inset-0 bg-[#121212]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.06),rgba(255,255,255,0)_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
    </div>
  );
}

function MarketsVisualFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#080510,#05060b_52%,#09040d)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(181,93,255,0.22),rgba(181,93,255,0)_28%),radial-gradient(circle_at_30%_72%,rgba(255,93,45,0.18),rgba(255,93,45,0)_28%),radial-gradient(circle_at_52%_48%,rgba(255,31,128,0.12),rgba(255,31,128,0)_34%)]" />
      <div className="absolute left-[49%] top-[56%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,33,110,0.18),rgba(255,33,110,0)_68%)] blur-[70px]" />
      {[
        { left: "18%", top: "8%", width: 590, height: 250, rotate: -12, color: "rgba(87,77,255,0.34)" },
        { left: "24%", top: "10%", width: 540, height: 240, rotate: -3, color: "rgba(255,65,140,0.54)" },
        { left: "22%", top: "16%", width: 560, height: 250, rotate: 7, color: "rgba(255,65,140,0.64)" },
        { left: "18%", top: "22%", width: 600, height: 255, rotate: 15, color: "rgba(255,83,147,0.46)" },
        { left: "22%", top: "28%", width: 560, height: 230, rotate: 24, color: "rgba(255,91,61,0.34)" },
        { left: "12%", top: "22%", width: 640, height: 290, rotate: -24, color: "rgba(189,62,255,0.28)" },
        { left: "16%", top: "30%", width: 620, height: 300, rotate: -38, color: "rgba(255,60,132,0.34)" },
        { left: "30%", top: "20%", width: 460, height: 230, rotate: 38, color: "rgba(255,95,155,0.3)" },
      ].map((loop, index) => (
        <div
          key={`loop-${index}`}
          className="absolute rounded-[50%] border-[2px] blur-[0.4px]"
          style={{
            left: loop.left,
            top: loop.top,
            width: `${loop.width}px`,
            height: `${loop.height}px`,
            transform: `rotate(${loop.rotate}deg)`,
            borderColor: loop.color,
            boxShadow: `0 0 18px ${loop.color}`,
          }}
        />
      ))}
      <div className="absolute left-[16%] top-[22%] h-[290px] w-[660px] rotate-[8deg] rounded-[50%] border border-[rgba(255,115,84,0.16)] blur-[1px]" />
      <div className="absolute left-[42%] top-[2%] h-[280px] w-[2px] rotate-[7deg] bg-[linear-gradient(180deg,rgba(255,126,184,0),rgba(255,126,184,0.55),rgba(255,126,184,0))] blur-[1px]" />
      <div className="absolute left-[48%] top-[2%] h-[280px] w-[2px] rotate-[3deg] bg-[linear-gradient(180deg,rgba(255,126,184,0),rgba(255,126,184,0.65),rgba(255,126,184,0))] blur-[1px]" />
      <div className="absolute left-[54%] top-[4%] h-[270px] w-[2px] rotate-[-4deg] bg-[linear-gradient(180deg,rgba(255,126,184,0),rgba(255,126,184,0.45),rgba(255,126,184,0))] blur-[1px]" />
      <div className="absolute inset-x-0 bottom-0 h-[26%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.35)_48%,rgba(0,0,0,0.72))]" />
    </div>
  );
}

function ProductArtFallback({ name }: { name: ProductCard["name"] }) {
  if (name === "PLINKO") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(255,214,236,0.48),rgba(255,214,236,0)_30%),linear-gradient(180deg,#89124e,#430525)]">
        <div className="absolute inset-x-[18%] top-[18%] grid grid-cols-5 gap-3 opacity-60">
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={`plinko-${index}`}
              className="h-2.5 w-2.5 rounded-full bg-white/60"
            />
          ))}
        </div>
        <div className="absolute left-1/2 top-[38%] h-[110px] w-[110px] -translate-x-1/2 rounded-full border border-white/30 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.95),rgba(255,220,240,0.9)_18%,rgba(255,124,172,0.95)_56%,rgba(143,18,73,1)_100%)] shadow-[0_28px_70px_rgba(255,108,164,0.34)]" />
      </div>
    );
  }

  if (name === "MINES") {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,199,224,0.28),rgba(255,199,224,0)_28%),linear-gradient(180deg,#60112f,#22040f)] p-8">
        <div className="grid h-full grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={`mines-${index}`}
              className={cn(
                "rounded-[18px] border border-white/12",
                index === 4
                  ? "bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.95),rgba(255,181,210,0.9)_20%,rgba(255,76,131,0.92)_58%,rgba(123,12,55,0.96)_100%)] shadow-[0_20px_50px_rgba(255,82,138,0.24)]"
                  : "bg-white/[0.06]",
              )}
            />
          ))}
        </div>
      </div>
    );
  }

  if (name === "CHICKEN") {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,227,145,0.26),rgba(255,227,145,0)_30%),linear-gradient(180deg,#783d06,#341605)]">
        <div className="absolute inset-x-[14%] bottom-0 top-[20%] rounded-t-[40px] bg-[linear-gradient(180deg,rgba(255,219,104,0.18),rgba(255,138,66,0.05))]" />
        <div className="absolute left-1/2 top-[34%] flex h-[150px] w-[150px] -translate-x-1/2 items-center justify-center rounded-full border border-white/24 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.96),rgba(255,236,188,0.94)_20%,rgba(255,193,78,0.94)_58%,rgba(169,88,8,0.98)_100%)] text-[2.3rem] font-bold text-[#55260a] shadow-[0_28px_70px_rgba(255,193,78,0.28)]">
          CH
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(226,222,255,0.28),rgba(226,222,255,0)_32%),linear-gradient(180deg,#4a3b88,#19152d)]">
      <div className="absolute left-1/2 top-[31%] h-[146px] w-[146px] -translate-x-1/2 rotate-[18deg] rounded-[28px] border border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(198,190,255,0.92)_20%,rgba(120,103,255,0.92)_72%,rgba(49,37,124,0.98))] shadow-[0_28px_70px_rgba(120,103,255,0.3)]">
        <span className="absolute left-[20%] top-[20%] h-4 w-4 rounded-full bg-white/92" />
        <span className="absolute right-[20%] top-[20%] h-4 w-4 rounded-full bg-white/92" />
        <span className="absolute left-[20%] bottom-[20%] h-4 w-4 rounded-full bg-white/92" />
        <span className="absolute right-[20%] bottom-[20%] h-4 w-4 rounded-full bg-white/92" />
      </div>
    </div>
  );
}

function PredictionAssetFallback({
  kind,
}: {
  kind:
    | "coin"
    | "tablet"
    | "bomb"
    | "potion"
    | "badge"
    | "chat"
    | "gun"
    | "streamer"
    | "skullCoin";
}) {
  if (kind === "tablet") {
    return (
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,#23324f,#101827)] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
        <div className="h-full rounded-[1.7rem] border border-white/8 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.14),rgba(255,255,255,0)_35%),linear-gradient(180deg,#141f34,#0b0f17)] p-5">
          <div className="grid h-full grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`tablet-${index}`}
                className={cn(
                  "rounded-[1rem] border border-white/8",
                  index === 2 ? "bg-[rgba(255,108,61,0.32)]" : "bg-white/[0.05]",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === "chat") {
    return (
      <div className="absolute inset-0 rotate-[-4deg] rounded-[1.8rem] border border-[rgba(255,255,255,0.14)] bg-[linear-gradient(180deg,#1b1f2f,#11151f)] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
        <div className="space-y-3">
          {["Arena locked in", "Odds are moving", "Next round in 08s"].map((line, index) => (
            <div
              key={line}
              className={cn(
                "max-w-[84%] rounded-[1rem] border px-4 py-3 text-sm text-white/82",
                index === 1
                  ? "ml-auto border-[rgba(255,107,53,0.26)] bg-[rgba(255,107,53,0.14)]"
                  : "border-white/8 bg-white/[0.04]",
              )}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "streamer") {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-[10px] border-2 border-[rgba(255,167,124,0.16)] bg-[linear-gradient(180deg,#25101f,#140912)]">
        <div className="absolute left-4 top-4 rounded-full bg-[rgba(255,84,84,0.18)] px-3 py-1 text-[10px] font-bold tracking-[0.24em] text-[#ff9c90] uppercase">
          Live
        </div>
        <div className="absolute inset-x-8 bottom-8 top-14 rounded-[1.4rem] bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.18),rgba(255,255,255,0)_35%),linear-gradient(180deg,#4a1736,#140b17)]" />
      </div>
    );
  }

  if (kind === "badge") {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full border border-[rgba(255,178,136,0.32)] bg-[linear-gradient(180deg,rgba(255,107,53,0.18),rgba(255,107,53,0.06))] text-[12px] font-bold tracking-[0.28em] text-[#ffb188] uppercase">
        Arena
      </div>
    );
  }

  if (kind === "potion") {
    return (
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.82),rgba(255,255,255,0.1)_24%,rgba(124,96,255,0.94)_56%,rgba(39,22,96,0.98)_100%)] shadow-[0_20px_60px_rgba(124,96,255,0.28)]" />
    );
  }

  if (kind === "gun") {
    return (
      <div className="absolute inset-y-[26%] left-0 right-0 rounded-full border border-white/10 bg-[linear-gradient(90deg,#3f1625,#140912)] shadow-[0_14px_40px_rgba(0,0,0,0.34)]">
        <div className="absolute right-[8%] top-1/2 h-[46%] w-[26%] -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,#ff8b64,#c33b22)]" />
      </div>
    );
  }

  if (kind === "skullCoin") {
    return (
      <div className="absolute inset-0 rounded-full border border-white/12 bg-[radial-gradient(circle_at_34%_28%,rgba(255,255,255,0.94),rgba(255,220,245,0.9)_18%,rgba(214,120,255,0.92)_54%,rgba(60,18,93,0.98)_100%)] shadow-[0_20px_60px_rgba(214,120,255,0.28)]">
        <div className="absolute inset-[26%] flex items-center justify-center rounded-full bg-black/18 text-[1.8rem] text-white/94">
          X
        </div>
      </div>
    );
  }

  return <HeroFallbackIcon type={kind === "bomb" ? "bomb" : "coin"} />;
}

function CapabilityIcon({ card }: { card: CapabilityCard }) {
  const config: Record<string, { bg: string; border: string; glow: string; icon: React.ReactNode }> = {
    "F2P engagement": {
      bg: "bg-[rgba(255,130,80,0.10)]", border: "border-[rgba(255,130,80,0.30)]",
      glow: "bg-[radial-gradient(circle_at_40%_30%,rgba(255,130,80,0.45),transparent_70%)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4"/>
          <path d="M6 21v-1a6 6 0 0 1 6-6"/>
          <path d="M17 17l-2.5 2.5L16 21l4-4-3-3-1.5 1.5z" fill="white" stroke="none"/>
          <path d="M20 14l-3 3" />
        </svg>
      ),
    },
    "Scalable RNG systems": {
      bg: "bg-[rgba(112,255,71,0.08)]", border: "border-[rgba(112,255,71,0.28)]",
      glow: "bg-[radial-gradient(circle_at_40%_30%,rgba(112,255,71,0.42),transparent_70%)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="4"/>
          <circle cx="8" cy="8" r="1.2" fill="white" stroke="none"/>
          <circle cx="16" cy="8" r="1.2" fill="white" stroke="none"/>
          <circle cx="8" cy="16" r="1.2" fill="white" stroke="none"/>
          <circle cx="16" cy="16" r="1.2" fill="white" stroke="none"/>
          <circle cx="12" cy="12" r="1.2" fill="white" stroke="none"/>
        </svg>
      ),
    },
    "Affiliate & referral systems": {
      bg: "bg-[rgba(255,86,163,0.09)]", border: "border-[rgba(255,86,163,0.28)]",
      glow: "bg-[radial-gradient(circle_at_40%_30%,rgba(255,86,163,0.42),transparent_70%)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="3"/>
          <path d="M3 21v-1a6 6 0 0 1 9.17-5.08"/>
          <circle cx="18" cy="9" r="2.5"/>
          <path d="M14.5 21v-.5a3.5 3.5 0 0 1 7 0v.5"/>
        </svg>
      ),
    },
    "Data & analytics": {
      bg: "bg-[rgba(100,150,255,0.09)]", border: "border-[rgba(100,150,255,0.28)]",
      glow: "bg-[radial-gradient(circle_at_40%_30%,rgba(100,150,255,0.42),transparent_70%)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
          <line x1="3" y1="20" x2="21" y2="20"/>
        </svg>
      ),
    },
    "Streaming-ready software": {
      bg: "bg-[rgba(255,188,92,0.09)]", border: "border-[rgba(255,188,92,0.28)]",
      glow: "bg-[radial-gradient(circle_at_40%_30%,rgba(255,188,92,0.42),transparent_70%)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <polygon points="10,8 10,13 15,10.5" fill="white" stroke="none"/>
        </svg>
      ),
    },
    "Whitelabel solutions": {
      bg: "bg-[rgba(198,136,255,0.09)]", border: "border-[rgba(198,136,255,0.28)]",
      glow: "bg-[radial-gradient(circle_at_40%_30%,rgba(198,136,255,0.42),transparent_70%)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  };

  const c = config[card.title] ?? { bg: "bg-white/5", border: "border-white/12", glow: "", icon: null };

  return (
    <div className={cn("relative h-[54px] w-[54px] shrink-0 overflow-hidden rounded-[12px] border", c.bg, c.border)}>
      <div className={cn("absolute inset-0", c.glow)} />
      <div className="absolute inset-[11px]">{c.icon}</div>
    </div>
  );
}

function HeroFallbackIcon({
  type,
}: {
  type: "heart" | "star" | "coin" | "bomb" | "dice";
}) {
  if (type === "heart") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-[8%] rounded-[34px] bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),rgba(255,214,232,0.9)_28%,rgba(255,135,177,0.96)_62%,rgba(207,48,104,1)_100%)] shadow-[0_18px_35px_rgba(255,91,146,0.34)]" />
        <div className="absolute inset-x-[24%] bottom-[20%] top-[20%] flex items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.05))] text-[2.4rem] text-white/95">
          ♥
        </div>
      </div>
    );
  }

  if (type === "coin") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),rgba(255,243,182,0.96)_26%,rgba(255,192,66,1)_62%,rgba(194,114,6,1)_100%)] shadow-[0_18px_35px_rgba(255,191,69,0.28)]" />
        <div className="absolute inset-[24%] flex items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.03))] text-[1.65rem] font-bold text-white/98">
          G
        </div>
      </div>
    );
  }

  if (type === "bomb") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute bottom-[10%] left-[8%] right-[8%] top-[20%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.28),rgba(57,57,57,0.95)_32%,rgba(18,18,18,1)_80%)] shadow-[0_18px_35px_rgba(0,0,0,0.34)]" />
        <div className="absolute right-[18%] top-[8%] h-[24%] w-[12%] rounded-full bg-[linear-gradient(180deg,#ffb36e,#ff6b35)]" />
      </div>
    );
  }

  if (type === "dice") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-[10%] rounded-[26px] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(232,236,255,0.94)_24%,rgba(144,166,255,0.9)_72%,rgba(65,78,154,0.98))] shadow-[0_18px_35px_rgba(124,144,255,0.28)]" />
        {[
          "left-[26%] top-[26%]",
          "right-[26%] top-[26%]",
          "left-1/2 top-1/2",
          "left-[26%] bottom-[26%]",
          "right-[26%] bottom-[26%]",
        ].map((position) => (
          <span
            key={position}
            className={cn(
              "absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#31406f]",
              position,
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),rgba(255,245,196,0.96)_26%,rgba(255,185,44,1)_62%,rgba(205,110,0,1)_100%)] shadow-[0_18px_35px_rgba(255,191,69,0.28)]" />
      <div className="absolute inset-[24%] flex items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.03))] text-[2.25rem] text-white/98">
        ★
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [activeOriginalIndex, setActiveOriginalIndex] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hoveredBuildCategory, setHoveredBuildCategory] = useState<string | null>(null);
  const [autoBuildCategory, setAutoBuildCategory] = useState("Prediction arenas");
  const activeOriginal = productCards[activeOriginalIndex] ?? productCards[0];

  const rootRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const statsBarRef = useRef<HTMLDivElement | null>(null);
  const playerCountRef = useRef<HTMLParagraphElement | null>(null);
  const transactionCountRef = useRef<HTMLParagraphElement | null>(null);
  const floatingOuterRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Auto-rotate "What We Build" categories every 5s when not hovering
  useEffect(() => {
    if (hoveredBuildCategory !== null) return;
    const order = ["Prediction arenas", "Instant games", "Multiplayer chaos"];
    const id = setInterval(() => {
      setAutoBuildCategory((prev) => {
        const i = order.indexOf(prev);
        return order[(i + 1) % order.length];
      });
    }, 5000);
    return () => clearInterval(id);
  }, [hoveredBuildCategory]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (!isMobileNavOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      if (prefersReducedMotion) {
        gsap.set(revealElements, { autoAlpha: 1, y: 0 });
        if (playerCountRef.current) {
          playerCountRef.current.textContent = formatPlayers(1879);
        }
        if (transactionCountRef.current) {
          transactionCountRef.current.textContent = formatTransactions(303980.99);
        }
        return;
      }

      gsap.set(revealElements, { autoAlpha: 0, y: 36 });

      const motionSections = gsap.utils.toArray<HTMLElement>("[data-motion-section]");
      motionSections.forEach((section) => {
        const sectionReveals = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-reveal]"),
        );

        if (!sectionReveals.length) {
          return;
        }

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true,
          },
        }).to(sectionReveals, {
          autoAlpha: 1,
          y: 0,
          duration: 0.78,
          ease: "power3.out",
          stagger: {
            each: 0.055,
            from: "start",
          },
        });
      });

      revealElements
        .filter((element) => !element.closest("[data-motion-section]"))
        .forEach((element) => {
          gsap.to(element, {
            autoAlpha: 1,
            y: 0,
            duration: 0.78,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          });
        });

      if (
        statsBarRef.current &&
        playerCountRef.current &&
        transactionCountRef.current
      ) {
        const counts = { players: 0, transactions: 0 };

        ScrollTrigger.create({
          trigger: statsBarRef.current,
          start: "top 82%",
          once: true,
          onEnter: () => {
            gsap.to(counts, {
              players: 1879,
              transactions: 303980.99,
              duration: 2.2,
              ease: "power2.out",
              onUpdate: () => {
                if (playerCountRef.current) {
                  playerCountRef.current.textContent = formatPlayers(counts.players);
                }
                if (transactionCountRef.current) {
                  transactionCountRef.current.textContent = formatTransactions(
                    counts.transactions,
                  );
                }
              },
            });
          },
        });
      }

      const hero = heroRef.current;
      if (hero) {
        const handleMove = (event: MouseEvent) => {
          const bounds = hero.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;

          floatingOuterRefs.current.forEach((icon, index) => {
            if (!icon) {
              return;
            }

            const depth = 20 + index * 8;
            gsap.to(icon, {
              x: x * depth,
              y: y * depth,
              duration: 0.6,
              ease: "power3.out",
            });
          });
        };

        const handleLeave = () => {
          floatingOuterRefs.current.forEach((icon) => {
            if (!icon) {
              return;
            }

            gsap.to(icon, {
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            });
          });
        };

        hero.addEventListener("mousemove", handleMove);
        hero.addEventListener("mouseleave", handleLeave);

        return () => {
          hero.removeEventListener("mousemove", handleMove);
          hero.removeEventListener("mouseleave", handleLeave);
        };
      }
    }, rootRef);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.utils.toArray<HTMLElement>("[data-motion-section]").forEach((section) => {
        const floaters = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-motion-float]"),
        );

        floaters.forEach((floater, index) => {
          gsap.to(floater, {
            y: index % 2 === 0 ? -22 : 18,
            rotation: index % 2 === 0 ? 1.8 : -1.4,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });
      });

    });

    return () => {
      ctx.revert();
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={rootRef} className="relative overflow-x-clip bg-gamio-bg text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,107,53,0.18),rgba(8,8,8,0.96)_46%,rgba(8,8,8,0)_82%)]" />

      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 lg:px-5 lg:pt-[14px]">
        <div className="flex h-20 w-full max-w-[1440px] items-center justify-center">
          <a
            href="#about"
            className="hidden"
          >
            Gamio
          </a>

          <div className="hidden h-[68px] w-full max-w-[1008px] items-center rounded-[18px] border border-[rgba(255,206,182,0.16)] bg-[radial-gradient(circle_at_50%_50%,rgba(108,57,28,0.42)_0%,rgba(68,38,25,0.88)_45%,rgba(34,28,25,0.95)_100%)] px-[14px] shadow-[0_14px_42px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-[18px] lg:grid lg:grid-cols-[134px_713px_133px]">
            <a href="#about" className="flex h-[44px] items-center justify-start overflow-visible">
              <AssetImage
                src={navLogoAsset}
                alt="Gamio"
                wrapperClassName="h-[32px] w-[112px] translate-x-[18px]"
                imgClassName="block h-full w-full object-contain transition-opacity duration-200"
                fallback={<NavLogoFallback />}
              />
            </a>

            <div className="flex h-[44px] items-center justify-between whitespace-nowrap px-[18px]">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "text-[16px] leading-5 tracking-[-0.01em] text-white/92 transition-colors duration-200",
                    activeSection === item.id && "text-white",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex h-[44px] items-center justify-end">
              <a
                href="mailto:socials@gamio.gg"
                className="font-display flex h-[44px] w-[133px] translate-x-[10px] items-center justify-center rounded-[8px] bg-[#ff5e39] px-5 text-[16px] leading-5 font-bold text-white shadow-[0_10px_24px_rgba(255,94,57,0.22)] transition-transform duration-200 hover:scale-[1.02]"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex h-[62px] w-full items-center justify-between rounded-[8px] border border-[rgba(255,206,182,0.16)] bg-[rgba(20,16,14,0.86)] px-3 shadow-[0_14px_42px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-[18px] lg:hidden">
            <a
              href="#about"
              className="flex h-10 items-center"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <AssetImage
                src={navLogoAsset}
                alt="Gamio"
                wrapperClassName="h-[28px] w-[98px]"
                imgClassName="block h-full w-full object-contain transition-opacity duration-200"
                fallback={<NavLogoFallback />}
              />
            </a>

            <button
              type="button"
              aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.055] text-white transition duration-200 hover:bg-white/[0.09]"
            >
              <span className="relative h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
                    isMobileNavOpen && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
                    isMobileNavOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
                    isMobileNavOpen && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-x-4 top-[84px] overflow-hidden rounded-[8px] border border-white/10 bg-[#15110f]/95 shadow-[0_28px_80px_rgba(0,0,0,0.48)] backdrop-blur-[20px] transition duration-200 lg:hidden",
            isMobileNavOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <div className="grid gap-1 p-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileNavOpen(false)}
                className={cn(
                  "rounded-[8px] px-4 py-3 text-[15px] font-semibold text-white/72 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white",
                  activeSection === item.id && "bg-white/[0.075] text-white",
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:socials@gamio.gg"
              onClick={() => setIsMobileNavOpen(false)}
              className="mt-2 rounded-[8px] bg-[#ff5e39] px-4 py-3 text-center text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(255,94,57,0.22)]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <section
        id="about"
        ref={heroRef}
        className="relative isolate mx-auto min-h-[760px] w-full max-w-[1560px] overflow-visible px-6 pb-12 pt-28 lg:min-h-[860px] lg:px-12 lg:pb-20 lg:pt-0"
      >
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(180deg,rgba(8,8,8,0.44),rgba(8,8,8,0.94)_78%)]" />
        <div className="pointer-events-none absolute inset-x-8 top-24 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] lg:block" />
        <div className="pointer-events-none absolute left-1/2 top-[6rem] hidden h-[24rem] w-[24rem] -translate-x-1/2 lg:top-[140px] lg:h-[1006.761px] lg:w-[1006.761px]">
          <div className="absolute inset-[13.4%] rounded-full bg-[radial-gradient(circle,rgba(255,48,0,1)_0%,rgba(255,60,14,1)_15%,rgba(255,71,29,1)_30%,rgba(255,94,57,1)_60%,rgba(255,127,83,1)_80%,rgba(255,159,108,1)_100%)] blur-[90px] lg:blur-[120px]" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_50%_42%,rgba(255,107,53,0.08),rgba(0,0,0,0)_36%,rgba(0,0,0,0.56)_100%)]" />

        <div
          ref={(node) => {
            floatingOuterRefs.current[0] = node;
          }}
          className="pointer-events-none absolute right-[-2%] top-[28rem] z-0 hidden w-[520px] lg:block"
        >
          <AssetImage
            src={predictionTabletAsset}
            alt=""
            wrapperClassName="w-full rotate-[-4deg] opacity-80"
            imgClassName="h-auto w-full object-contain drop-shadow-[0_38px_90px_rgba(0,0,0,0.56)]"
            fallback={<PredictionAssetFallback kind="tablet" />}
          />
        </div>

        <div
          ref={(node) => {
            floatingOuterRefs.current[1] = node;
          }}
          className="pointer-events-none absolute right-[6%] top-[16rem] z-10 hidden w-[260px] lg:block"
        >
          <AssetImage
            src={hogambaMascotAsset}
            alt=""
            wrapperClassName="w-full"
            imgClassName="h-auto w-full object-contain drop-shadow-[0_34px_74px_rgba(0,0,0,0.48)]"
            fallback={<HogambaMascotFallback />}
          />
        </div>

        <div
          ref={(node) => {
            floatingOuterRefs.current[2] = node;
          }}
          className="pointer-events-none absolute bottom-[86px] left-[5.5%] z-0 hidden w-[430px] grid-cols-4 gap-4 opacity-95 lg:grid"
        >
          {productCards.map((card) => (
            <AssetImage
              key={card.name}
              src={card.art}
              alt=""
              wrapperClassName="aspect-[280/350] overflow-hidden rounded-[8px] shadow-[0_18px_44px_rgba(0,0,0,0.38)]"
              imgClassName="h-full w-full object-cover"
              fallback={<ProductArtFallback name={card.name} />}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col items-center justify-center text-center lg:absolute lg:left-1/2 lg:top-[166px] lg:w-[760px] lg:-translate-x-1/2">
          <p data-reveal className="gamio-section-label mb-5 max-w-[28ch] whitespace-normal text-center text-[0.62rem] leading-[1.45] tracking-[0.14em] sm:max-w-none sm:text-[0.72rem] sm:tracking-[0.18em]">
            Games, products and player moments
          </p>
          <h1
            data-reveal
            className="font-display mx-auto w-full overflow-visible whitespace-nowrap bg-[linear-gradient(180deg,#ffffff_8%,rgba(255,255,255,0.82)_44%,rgba(255,255,255,0.18)_92%)] bg-clip-text text-center text-[4.65rem] leading-[0.9] font-bold tracking-[0] text-transparent sm:text-[6rem] lg:text-[166px] lg:leading-[150px]"
          >
            Gamio
          </h1>
          <p
            data-reveal
            className="font-display mx-auto -mt-1 w-full text-center text-[1.6rem] leading-none font-bold tracking-[0] text-white sm:text-[2.15rem] lg:-mt-3 lg:text-[34px] lg:leading-[42px]"
          >
            Game & Gain
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-12 h-[258px] w-full max-w-[560px] lg:hidden sm:mt-8 sm:h-[342px]">
          <div className="absolute inset-x-4 bottom-3 h-28 rounded-[50%] bg-[radial-gradient(circle,rgba(255,107,53,0.18),rgba(255,107,53,0)_68%)] blur-[34px]" />
          <AssetImage
            src={productCards[0].art}
            alt=""
            wrapperClassName="absolute bottom-[18%] left-0 z-10 aspect-square w-[34%] overflow-hidden rounded-[8px] shadow-[0_18px_48px_rgba(0,0,0,0.42)] sm:bottom-0 sm:aspect-[280/350] sm:w-[38%]"
            imgClassName="h-full w-full object-cover"
            fallback={<ProductArtFallback name="PLINKO" />}
          />
          <AssetImage
            src={predictionTabletAsset}
            alt=""
            wrapperClassName="absolute bottom-3 right-0 z-0 w-[64%] overflow-hidden rounded-[8px] border border-white/10 bg-black/20 shadow-[0_22px_54px_rgba(0,0,0,0.48)]"
            imgClassName="h-auto w-full object-contain"
            fallback={<PredictionAssetFallback kind="tablet" />}
          />
          <AssetImage
            src={hogambaMascotAsset}
            alt=""
            wrapperClassName="absolute left-[37%] top-2 z-20 w-[30%] -translate-x-1/2 sm:top-0 sm:w-[37%]"
            imgClassName="h-auto w-full object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.62)]"
            fallback={<HogambaMascotFallback />}
          />
        </div>

        <div
          ref={statsBarRef}
          data-reveal
          className="relative z-10 mx-auto mt-8 grid w-full max-w-[560px] gap-3 text-center whitespace-nowrap sm:grid-cols-2 lg:absolute lg:bottom-[68px] lg:left-1/2 lg:mt-0 lg:w-[560px] lg:-translate-x-1/2"
        >
          <div className="gamio-hud flex min-h-[88px] flex-col items-center justify-center rounded-[8px] px-5 py-4 text-center text-white">
            <p className="font-body text-[12px] leading-[16px] font-bold tracking-[0.08em] text-white/62 uppercase">
              Live number of players
            </p>
            <p
              ref={playerCountRef}
              className="font-display mt-1 text-[2.35rem] leading-none font-bold tracking-[0] text-white sm:text-[2.55rem] lg:text-[31px]"
            >
              1,879
            </p>
          </div>
          <div className="gamio-hud flex min-h-[88px] flex-col items-center justify-center rounded-[8px] px-5 py-4 text-center text-white">
            <p className="font-body text-[12px] leading-[16px] font-bold tracking-[0.08em] text-white/62 uppercase">
              Total transactions
            </p>
            <p
              ref={transactionCountRef}
              className="font-display mt-1 text-[2.35rem] leading-none font-bold tracking-[0] text-[#ffd7a8] sm:text-[2.55rem] lg:text-[31px]"
            >
              € 303,980.99
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-20 lg:px-12 lg:py-28">
        <div className="gamio-product-rail absolute inset-x-6 top-0 h-px lg:inset-x-12" />
        <div className="relative mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Ambient glow — inside content wrapper so overflow-hidden on section doesn't clip */}
          {[
            { label: "Prediction arenas", color: "rgba(255,107,53,0.12)" },
            { label: "Instant games",      color: "rgba(209,0,111,0.12)" },
            { label: "Multiplayer chaos",  color: "rgba(79,140,255,0.12)" },
          ].map(({ label, color }) => (
            <div
              key={label}
              className="pointer-events-none absolute right-0 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full blur-[90px]"
              style={{
                background: `radial-gradient(circle, ${color}, transparent 70%)`,
                opacity: (hoveredBuildCategory ?? autoBuildCategory) === label ? 1 : 0,
                transition: "opacity 0.6s ease",
              }}
            />
          ))}
          <div data-reveal>
            <p className="gamio-section-label">What we build</p>
            <h2 className="font-display mt-5 max-w-[760px] text-[2.15rem] leading-[1.08] font-bold tracking-[0] text-white sm:text-[3rem] lg:text-[56px] lg:leading-[64px]">
              We make things you actually want to play{" "}
              <span className="text-[var(--gamio-orange)]">&mdash;</span> and yes, sometimes there&apos;s money involved.
            </h2>
            <div className="mt-8 flex items-center gap-0">
              <div className="h-px w-10 bg-[var(--gamio-orange)]" style={{ opacity: 0.7 }} />
              <div className="h-px w-16 bg-gradient-to-r from-[var(--gamio-orange)] to-transparent" style={{ opacity: 0.3 }} />
            </div>
          </div>
          {(() => {
            const activeCategory = hoveredBuildCategory ?? autoBuildCategory;
            const categoryColor: Record<string, string> = {
              "Prediction arenas": "#ff6b35",
              "Instant games": "#d1006f",
              "Multiplayer chaos": "#4f8cff",
            };
            const activeColor = categoryColor[activeCategory] ?? "#ff6b35";
            return (
          <div
            data-reveal
            className="gamio-about-card relative overflow-visible rounded-[12px] p-5 lg:p-7"
            style={{
              borderColor: `${activeColor}40`,
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 60px ${activeColor}14, 0 24px 70px rgba(0,0,0,0.36)`,
              background: `linear-gradient(160deg, ${activeColor}0d 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.02) 100%), rgba(8,8,8,0.64)`,
              transition: "border-color 0.5s ease, box-shadow 0.5s ease, background 0.5s ease",
            }}
          >
            {[
              { label: "Prediction arenas", image: "/images/prediction-arena/coin.png",  color: "#ff6b35", pos: "absolute -top-10 -right-6 z-20 h-[84px] w-[84px]" },
              { label: "Instant games",      image: "/images/originals/chicken.png",       color: "#d1006f", pos: "absolute top-[34%] -right-10 z-20 h-[124px] w-[124px] -translate-y-1/2" },
              { label: "Multiplayer chaos",  image: "/images/hogamba/mascot.png",          color: "#4f8cff", pos: "absolute -bottom-14 -right-10 z-20 h-[132px] w-[132px]" },
            ].map(({ label, image, color, pos }) => {
              const isActive = (hoveredBuildCategory ?? autoBuildCategory) === label;
              return (
                <img
                  key={label}
                  src={image}
                  alt=""
                  className={`pointer-events-none object-contain ${pos}`}
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(0.7)",
                    transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                    filter: `drop-shadow(0 10px 24px rgba(0,0,0,0.7)) drop-shadow(0 0 12px ${color}55)`,
                  }}
                />
              );
            })}

            <p className="font-body pr-20 text-[1rem] leading-[1.6] text-white/72 lg:pr-24 lg:text-[16px]">
              From prediction arenas to instant games and multiplayer chaos, we build
              interactive stuff people come back to.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {[
                { label: "Prediction arenas", color: "#ff6b35", tagline: "Real-time skill meets live outcomes" },
                { label: "Instant games",      color: "#d1006f", tagline: "One mechanic. Infinite replayability." },
                { label: "Multiplayer chaos",  color: "#4f8cff", tagline: "Social pressure, shared stakes" },
              ].map(({ label, color, tagline }) => {
                const isActive = (hoveredBuildCategory ?? autoBuildCategory) === label;
                return (
                  <div
                    key={label}
                    className="flex cursor-default items-center gap-3 rounded-[8px] border px-4 py-3 transition-all duration-300"
                    style={{
                      borderColor: isActive ? `${color}44` : "rgba(255,255,255,0.08)",
                      background: isActive ? `${color}0d` : "rgba(255,255,255,0.03)",
                    }}
                    onMouseEnter={() => setHoveredBuildCategory(label)}
                    onMouseLeave={() => setHoveredBuildCategory(null)}
                  >
                    <div
                      className="h-2 w-2 flex-shrink-0 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: color,
                        boxShadow: isActive ? `0 0 10px 4px ${color}66` : `0 0 5px 1px ${color}33`,
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-body text-[12px] font-bold uppercase leading-none tracking-[0.14em] text-white/88">{label}</p>
                      <p className="font-body mt-1 text-[11px] leading-none text-white/42">{tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          );
          })()}
        </div>
      </section>

      <section
        id="markets"
        data-motion-section
        className="relative mx-auto w-full max-w-[1440px] scroll-mt-28 overflow-hidden px-6 py-10 lg:scroll-mt-32 lg:px-12 lg:py-14"
      >
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute right-[-16rem] top-[-4rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.14),rgba(255,107,53,0)_68%)] blur-[120px]" />
        <div className="pointer-events-none absolute left-[30%] top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(140,255,56,0.04),transparent_70%)] blur-[80px]" />

        <div className="relative mx-auto max-w-[1180px] space-y-6">
          {/* Header */}
          <div data-reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="gamio-section-label">Where our work travels</p>
              <h2 className="font-display mt-3 text-[1.75rem] leading-tight font-bold tracking-[0] text-white sm:text-[2.25rem] lg:text-[32px]">
                Where do people meet our games?
              </h2>
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8cff38] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8cff38]" />
              </span>
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">6 active markets</span>
            </div>
          </div>

          <div data-reveal data-motion-visual className="grid gap-3 lg:grid-cols-[220px_1fr]">
            {/* Stat pills — vertical stack */}
            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { label: "Markets live", value: "6" },
                { label: "Studio model", value: "Games" },
                { label: "Approach", value: "Player-first" },
              ].map((card) => (
                <div
                  key={card.label}
                  data-motion-card
                  className="group relative overflow-hidden rounded-[10px] border border-white/[0.08] bg-[rgba(255,255,255,0.03)] px-4 py-4 transition-colors duration-300 hover:border-[rgba(255,107,53,0.2)] hover:bg-[rgba(255,107,53,0.04)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 0% 100%, rgba(255,107,53,0.07), transparent 60%)" }} />
                  <p className="font-body text-[9px] font-bold uppercase tracking-[0.22em] text-[rgba(255,107,53,0.6)]">
                    {card.label}
                  </p>
                  <p className="font-display mt-2 text-[1.3rem] leading-none font-bold text-white lg:text-[18px]">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Country cards grid */}
            <div className="overflow-hidden rounded-[10px] border border-white/[0.08] bg-[linear-gradient(160deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.24em] text-white/30">Deployed markets</span>
              </div>

              {/* Flag cards grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.06] sm:grid-cols-3">
                {[
                  { flag: "🇧🇪", country: "Belgium",  region: "W. Europe",   products: ["Prediction", "Instant"] },
                  { flag: "🇵🇱", country: "Poland",   region: "C. Europe",   products: ["Instant", "Arena"] },
                  { flag: "🇷🇴", country: "Romania",  region: "S.E. Europe", products: ["Prediction"] },
                  { flag: "🇬🇷", country: "Greece",   region: "S. Europe",   products: ["Instant", "Arena"] },
                  { flag: "🇹🇷", country: "Turkey",   region: "MENA",        products: ["Prediction", "Instant"] },
                  { flag: "🇧🇷", country: "Brazil",   region: "S. America",  products: ["Arena", "Instant"] },
                ].map(({ flag, country, region, products }) => (
                  <div
                    key={country}
                    className="group relative flex flex-col gap-2.5 p-4 transition-colors duration-200 hover:bg-[rgba(255,107,53,0.03)]"
                  >
                    {/* Live chip */}
                    <div className="absolute right-3 top-3">
                      <span className="font-body rounded-full border border-[rgba(140,255,56,0.3)] bg-[rgba(140,255,56,0.08)] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[rgba(140,255,56,0.8)]">
                        Live
                      </span>
                    </div>

                    {/* Flag + name */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-[2rem] leading-none">{flag}</span>
                      <div>
                        <p className="font-display text-[13px] font-bold leading-none text-white">{country}</p>
                        <p className="font-body mt-1 text-[10px] uppercase tracking-[0.14em] text-white/30">{region}</p>
                      </div>
                    </div>

                    {/* Product tags */}
                    <div className="flex flex-wrap gap-1">
                      {products.map((p) => (
                        <span key={p} className="font-body rounded-[4px] bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white/40">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="originals"
        data-motion-section
        className="relative mx-auto w-full max-w-[1440px] scroll-mt-24 overflow-hidden px-6 py-20 lg:scroll-mt-24 lg:px-12 lg:py-34"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute left-[-22rem] top-16 h-[41rem] w-[41rem] rounded-full bg-[radial-gradient(circle,rgba(255,0,132,0.34),rgba(255,0,132,0)_68%)] blur-[110px]" />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2
                data-reveal
                className="font-display text-[2.75rem] leading-[1.02] font-bold tracking-[0] text-white sm:text-[3.6rem] lg:text-[82px] lg:leading-[96px]"
              >
                Our Products
              </h2>
              <div data-reveal className="mt-5">
                <AssetImage
                  src={originalsBadgeAsset}
                  alt="Originals"
                  wrapperClassName="h-[40px] w-[178px]"
                  imgClassName="h-full w-full object-contain transition-opacity duration-200"
                  fallback={<OriginalsBadgeFallback />}
                />
              </div>
            </div>
            <p
              data-reveal
              className="font-body max-w-[510px] text-[1rem] leading-[1.55] text-white/72 lg:justify-self-end lg:text-[17px]"
            >
              Instant games built around readable tension: one core mechanic, sharp
              feedback, and enough visual identity for every round to feel ownable.
            </p>
          </div>

          <div className="relative z-10 mt-12 grid gap-5 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div
              data-reveal
              data-motion-visual
              className="gamio-product-frame overflow-hidden rounded-[8px] p-3 sm:p-4"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 34px 110px rgba(209,0,111,0.14)",
              }}
            >
              <AssetImage
                src={originalsFeaturedGameAsset}
                alt={`${activeOriginal.name} featured game art`}
                wrapperClassName="aspect-[16/10] w-full overflow-hidden rounded-[6px] bg-[radial-gradient(circle_at_50%_52%,rgba(209,0,111,0.16),rgba(209,0,111,0)_58%),linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.008))]"
                imgClassName="h-full w-full object-contain p-2 transition-opacity duration-200 sm:p-3"
                fallback={<ProductArtFallback name={activeOriginal.name} />}
              />
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                    Featured original
                  </p>
                  <h3 className="font-display mt-2 text-[2rem] leading-none font-bold text-white">
                    {activeOriginal.name}
                  </h3>
                </div>
                <p className="font-body max-w-[360px] text-[14px] leading-[1.45] text-white/68">
                  {activeOriginal.description}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {productCards.map((card, index) => (
                <button
                  key={card.name}
                  type="button"
                  data-reveal
                  data-motion-card
                  onClick={() => setActiveOriginalIndex(index)}
                  className={cn(
                    "group grid grid-cols-[86px_1fr] gap-4 rounded-[8px] border p-3 text-left transition duration-300",
                    index === activeOriginalIndex
                      ? "border-white/24 bg-white/[0.09]"
                      : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.065]",
                  )}
                >
                  <AssetImage
                    src={card.art}
                    alt=""
                    wrapperClassName="aspect-square overflow-hidden rounded-[6px] bg-[rgba(255,255,255,0.03)]"
                    imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    fallback={<ProductArtFallback name={card.name} />}
                  />
                  <span className="min-w-0 self-center">
                    <span className="font-body block text-[11px] font-bold uppercase tracking-[0.16em] text-white/42">
                      {card.metric}
                    </span>
                    <span className="font-display mt-2 block text-[20px] leading-none font-bold text-white">
                      {card.name}
                    </span>
                    <span className="mt-2 block h-1 w-14 rounded-full" style={{ backgroundColor: card.accent }} />
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section
        id="hogamba"
        data-motion-section
        className="relative mx-auto w-full max-w-[1440px] scroll-mt-20 overflow-hidden px-6 py-16 lg:scroll-mt-20 lg:px-12 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        {/* Green radial glow — left-center, cosmic feel */}
        <div className="pointer-events-none absolute left-[-8rem] top-[4rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(93,222,42,0.22),rgba(93,222,42,0)_68%)] blur-[110px]" />
        <div className="pointer-events-none absolute left-[2%] top-[14rem] h-[22rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(40,180,10,0.16),rgba(40,180,10,0)_75%)] blur-[90px]" />

        <div className="relative mx-auto max-w-[1180px]">
          <div className="mb-8 grid gap-6 lg:mb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div data-reveal>
              <p className="gamio-section-label text-[var(--gamio-hogamba)]">Where Gaming Meets iGaming</p>
              <div className="mt-4">
                <AssetImage
                  src={hogambaLogoAsset}
                  alt="Hogamba"
                  wrapperClassName="h-10 min-w-[220px]"
                  imgClassName="h-full w-full object-contain transition-opacity duration-200"
                  fallback={<HogambaLogoFallback />}
                />
              </div>
            </div>
            <div data-reveal className="grid gap-3 sm:grid-cols-4">
              {["Skins", "Influencers", "Milestones", "Branding"].map((label) => (
                <div
                  key={label}
                  data-motion-card
                  className="rounded-[8px] border border-[rgba(140,255,56,0.18)] bg-[rgba(140,255,56,0.045)] px-4 py-3 text-[12px] font-bold uppercase tracking-[0.13em] text-white/68"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* PC image with mobile overlay escaping the frame */}
            <div className="relative pb-10 pr-6">
              <div data-reveal data-motion-visual className="gamio-product-frame relative overflow-hidden rounded-[8px] p-3">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_78%,rgba(124,255,63,0.15),rgba(124,255,63,0)_26%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.07),rgba(255,255,255,0)_24%)]" />
                <div className="relative overflow-hidden rounded-[6px]">
                  <AssetImage
                    src={hogambaDesktopViewportAsset}
                    alt="Hogamba desktop viewport"
                    wrapperClassName="w-full"
                    imgClassName="h-auto w-full object-contain"
                    fallback={<HogambaGameFallback />}
                  />
                </div>
              </div>
              {/* Mobile breaks out of the frame */}
              <div className="pointer-events-none absolute bottom-0 right-0 w-[32%] drop-shadow-[0_20px_56px_rgba(0,0,0,0.8)]">
                <AssetImage
                  src={hogambaMobileViewportAsset}
                  alt="Hogamba mobile viewport"
                  wrapperClassName="w-full rounded-[10px] overflow-hidden border border-white/12 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                  imgClassName="h-auto w-full object-contain"
                  fallback={null}
                />
              </div>
            </div>

            <div className="relative grid gap-3">
              {/* Lootbox — floats above top card, clear of text */}
              <div className="pointer-events-none absolute -top-14 -right-10 z-20 w-[110px]">
                <img
                  src="/images/hogamba/Lootbox Epic Closed.png"
                  alt=""
                  className="h-auto w-full drop-shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Progression header card */}
              <div data-reveal data-motion-card className="gamio-surface rounded-[8px] p-5 lg:p-6">
                <p className="font-display text-[1.4rem] leading-tight font-bold text-white lg:text-[1.5rem]">
                  Progression, loot moments and a strong visual identity — all in one world.
                </p>
                <p className="font-body mt-3 text-[13px] leading-[1.55] text-white/60">
                  The round, the surface, the progression layer, the lootbox logic
                  and the branded world all belong together.
                </p>
              </div>

              {/* All 4 feature cards in 2×2 grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                {/* Skins — with rarity showcase */}
                <article data-reveal data-motion-card className="rounded-[8px] border border-[rgba(140,255,56,0.14)] bg-[rgba(140,255,56,0.035)] p-4">
                  <h3 className="font-display text-[15px] leading-tight font-bold text-white">
                    {hogambaFeatureCards[0].title}
                  </h3>
                  <p className="font-body mt-2 text-[12px] leading-[1.4] text-white/55">
                    {hogambaFeatureCards[0].description}
                  </p>
                  <div className="mt-4 flex items-end gap-2">
                    {/* COMMON — blue */}
                    <div className="relative flex-shrink-0">
                      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border-2 border-[#3b9eff] bg-[rgba(59,158,255,0.08)]" style={{ boxShadow: "0 0 12px rgba(59,158,255,0.3), inset 0 0 8px rgba(59,158,255,0.06)" }}>
                        <img src="/images/hogamba/christmas_hat_3 1.png" alt="" className="h-9 w-9 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
                      </div>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#3b9eff] px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.08em] text-white">Common</span>
                    </div>
                    {/* EPIC — purple */}
                    <div className="relative flex-shrink-0">
                      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border-2 border-[#a855f7] bg-[rgba(168,85,247,0.08)]" style={{ boxShadow: "0 0 12px rgba(168,85,247,0.3), inset 0 0 8px rgba(168,85,247,0.06)" }}>
                        <img src="/images/hogamba/parachute_hogamba 1.png" alt="" className="h-9 w-9 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
                      </div>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#a855f7] px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.08em] text-white">Epic</span>
                    </div>
                    {/* LEGENDARY — gold */}
                    <div className="relative flex-shrink-0">
                      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border-2 border-[#f59e0b] bg-[rgba(245,158,11,0.08)]" style={{ boxShadow: "0 0 14px rgba(245,158,11,0.38), inset 0 0 8px rgba(245,158,11,0.07)" }}>
                        <img src="/images/hogamba/death_head.png" alt="" className="h-9 w-9 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
                      </div>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#f59e0b] px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.08em] text-black">Legend</span>
                    </div>
                    <span className="font-body mb-1 ml-auto text-[10px] font-bold text-white/35">+200<br/>items</span>
                  </div>
                </article>

                {/* Influencer */}
                <article data-reveal data-motion-card className="rounded-[8px] border border-[rgba(140,255,56,0.14)] bg-[rgba(140,255,56,0.035)] p-4">
                  <h3 className="font-display text-[15px] leading-tight font-bold text-white">
                    {hogambaFeatureCards[1].title}
                  </h3>
                  <p className="font-body mt-2 text-[12px] leading-[1.45] text-white/62">
                    {hogambaFeatureCards[1].description}
                  </p>
                </article>

                {/* Progress milestones */}
                <article data-reveal data-motion-card className="rounded-[8px] border border-[rgba(140,255,56,0.14)] bg-[rgba(140,255,56,0.035)] p-4">
                  <h3 className="font-display text-[15px] leading-tight font-bold text-white">
                    {hogambaFeatureCards[2].title}
                  </h3>
                  <p className="font-body mt-2 text-[12px] leading-[1.45] text-white/62">
                    {hogambaFeatureCards[2].description}
                  </p>
                </article>

                {/* Brand worlds */}
                <article data-reveal data-motion-card className="rounded-[8px] border border-[rgba(140,255,56,0.14)] bg-[rgba(140,255,56,0.035)] p-4">
                  <h3 className="font-display text-[15px] leading-tight font-bold text-white">
                    {hogambaFeatureCards[3].title}
                  </h3>
                  <p className="font-body mt-2 text-[12px] leading-[1.45] text-white/62">
                    {hogambaFeatureCards[3].description}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="prediction-arena"
        data-motion-section
        className="relative mx-auto w-full max-w-[1440px] scroll-mt-20 overflow-hidden px-6 py-12 lg:scroll-mt-20 lg:px-12 lg:pt-[60px] lg:pb-[48px]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute left-[-26rem] top-[18rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,97,59,0.14),rgba(255,97,59,0)_68%)] blur-[130px]" />

        <div className="mx-auto max-w-[1180px]">
          <div data-reveal className="mx-auto max-w-[760px] text-center">
            <p className="gamio-section-label text-[var(--gamio-arena)]">Live participation</p>
            <h2 className="font-display mt-5 text-[2.6rem] leading-[1.08] font-bold tracking-[0] text-white sm:text-[3rem] lg:text-[49px] lg:leading-[58px]">
              Gamio Prediction Arena
            </h2>
            <p className="font-body mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.55] text-white/68">
              Prediction Arena should feel like one live product surface: clear entry,
              visible odds movement, chat energy and enough visual drama that the next
              round feels close.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                "Live event framing that reads instantly.",
                "Chat, odds and motion cues kept in the same surface.",
                "Collectibles and tokens used as accents, not scattered clutter.",
              ].map((line) => (
                <div
                  key={line}
                  data-motion-card
                  className="rounded-[8px] border border-[rgba(79,140,255,0.16)] bg-[rgba(79,140,255,0.045)] px-4 py-3 text-[14px] leading-[1.45] text-white/72"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div data-reveal data-motion-visual className="relative mt-8 lg:mt-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_16%,rgba(79,140,255,0.14),rgba(79,140,255,0)_28%),radial-gradient(circle_at_22%_82%,rgba(255,79,59,0.08),rgba(255,79,59,0)_24%)]" />
            {/* Main ChatArena image */}
            <img
              src={chatArenaGroupedAsset}
              alt="Prediction Arena interface"
              className="relative z-10 mx-auto h-auto w-full max-w-[840px] object-contain drop-shadow-[0_30px_90px_rgba(0,0,0,0.44)]"
            />
            {/* Strong bottom fade — hides sharp image cut */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-[#080808] via-[rgba(8,8,8,0.9)] to-transparent" />
            {/* Prediction bar — overlaid over the bottom of the ChatArena image */}
            <div className="absolute top-[68%] left-1/2 z-30 w-[44%] -translate-x-1/2 rounded-[10px] border border-[#f9bcae] bg-[rgba(38,12,7,0.88)] px-4 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.48)] backdrop-blur-[12px] sm:w-[32%] lg:w-[22%]">
              <p className="font-display text-center text-[15px] leading-none font-bold text-white">
                Prediction
              </p>
              <div className="mt-4 flex overflow-hidden rounded-full">
                <div className="h-2.5 w-[64%] bg-[linear-gradient(90deg,#0056c6,#507fff)]" />
                <div className="h-2.5 w-[36%] bg-[linear-gradient(90deg,#ff364f,#ee001e)]" />
              </div>
              <div className="mt-2 flex justify-between text-[9px] leading-none text-white/70">
                <span>COMPLETE</span>
                <span>FAIL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        data-motion-section
        className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-20 lg:px-12 lg:py-[140px]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute right-[-18rem] top-[12rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(69,224,208,0.12),rgba(69,224,208,0)_68%)] blur-[130px]" />
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div data-reveal className="lg:sticky lg:top-28">
            <p className="gamio-section-label text-[var(--gamio-cyan)]">How we build</p>
            <h2 className="font-display mt-5 max-w-[12ch] text-[3rem] leading-[1.08] font-bold tracking-[0] text-white lg:text-[49px] lg:leading-[58px]">
              Capabilities & supporting systems
            </h2>
            <p className="font-body mt-6 max-w-[390px] text-[15px] leading-[1.55] text-white/65">
              The visible game layer sits on top of the systems that make our
              products feel alive: progression, data, RNG, streaming moments and
              reusable brand worlds.
            </p>
          </div>

          <div data-motion-visual className="grid gap-3 md:grid-cols-2">
              {capabilityCards.map((card) => (
                <article
                  key={card.title}
                  data-reveal
                  data-motion-card
                  className="group relative overflow-hidden rounded-[10px] border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/16 hover:bg-white/[0.055]"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_10%,rgba(255,255,255,0.14)_50%,transparent_90%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center gap-4">
                    <CapabilityIcon card={card} />
                    <div className="min-w-0">
                      <h3 className="font-display text-[14px] leading-[1.2] font-bold tracking-[0] text-white">
                        {card.title}
                      </h3>
                      <p className="font-body mt-2 text-[12.5px] leading-[1.45] text-white/62">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <footer className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 pb-16 pt-24 lg:px-12">
        <div className="absolute inset-x-0 bottom-0 top-10 border border-white/8 bg-gamio-bg-secondary lg:rounded-t-[28px]" />
        <div className="pointer-events-none absolute bottom-6 left-6 text-[7rem] font-bold tracking-[-0.08em] text-white/5 lg:left-12 lg:text-[13rem]">
          GAMIO
        </div>

        <div className="relative z-10 grid gap-10 px-2 pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
          <div>
            <p
              data-reveal
              className="text-sm font-bold uppercase tracking-[0.3em] text-gamio-orange"
            >
              Contact
            </p>
            <h2
              data-reveal
              className="mt-6 max-w-[14ch] text-4xl leading-tight font-bold tracking-[-0.03em] text-white lg:text-[3.2rem]"
            >
              Let&apos;s build something players remember.
            </h2>
            <a
              data-reveal
              href="mailto:socials@gamio.gg"
              className="mt-8 inline-block text-lg text-white/72 transition-colors duration-300 hover:text-gamio-orange"
            >
              socials@gamio.gg
            </a>
          </div>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <a
              data-reveal
              href="mailto:socials@gamio.gg"
              className="rounded-[8px] bg-[linear-gradient(135deg,#FF6B35,#CC4400)] px-8 py-4 text-sm font-bold tracking-[0.14em] text-white shadow-[0_0_40px_rgba(255,107,53,0.3)] transition-transform duration-300 hover:scale-[1.02]"
            >
              GET IN TOUCH
            </a>
            <div data-reveal className="grid w-full gap-4 text-sm tracking-[0.08em] text-white/75 lg:max-w-[18rem]">
              <div className="rounded-[8px] border border-white/8 bg-white/4 px-5 py-4">
                Zagreb
              </div>
              <div className="rounded-[8px] border border-white/8 bg-white/4 px-5 py-4">
                Nicosia
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16 border-t border-white/8 px-2 pt-6 text-sm text-white/55 lg:px-6">
          Gamio. All Rights reserved.
        </div>
      </footer>
    </main>
  );
}
