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
  artClassName?: string;
};

type CapabilityCard = {
  title: string;
  description: string;
  symbolAsset: string;
  innerCircleAsset?: string;
};

type ShowcaseSlide = {
  label: string;
  title: string;
  body: string;
};

const heroHeartAsset =
  "https://www.figma.com/api/mcp/asset/26062869-ab7f-4927-af3c-d4524ffb4363";
const heroStarAsset =
  "https://www.figma.com/api/mcp/asset/e36ce489-54c9-4a7d-bf01-0e6a4d40dfb8";
const heroBombAsset =
  "https://www.figma.com/api/mcp/asset/2b43b9ff-e369-4878-b022-b51872c79c47";
const heroDiceAsset =
  "https://www.figma.com/api/mcp/asset/a3c12707-50e5-4672-8fc5-c3f3bc7669f7";
const navLogoAsset =
  "https://www.figma.com/api/mcp/asset/a0b3b725-c38f-4623-815a-c48307def09f";
const hogambaLogoAsset =
  "https://www.figma.com/api/mcp/asset/7c5f33f0-63a4-4970-9bdf-423a360b6c6f";
const predictionStreamerAsset =
  "https://www.figma.com/api/mcp/asset/cf919977-5af0-4048-914c-88fe94334802";
const predictionChatAsset =
  "https://www.figma.com/api/mcp/asset/05ed8aa1-56d8-4c5d-be03-b95bb20d86d4";
const predictionTabletAsset =
  "https://www.figma.com/api/mcp/asset/286b77a9-cf85-47f6-be06-c3b092ea2668";
const predictionPotionAsset =
  "https://www.figma.com/api/mcp/asset/b96056eb-e20e-407a-b2f4-ddd286a65102";
const predictionGameBadgeAsset =
  "https://www.figma.com/api/mcp/asset/2a42a602-f2fe-44fb-868d-7f14e2f98d48";
const predictionCoinAsset =
  "https://www.figma.com/api/mcp/asset/4320e570-bfee-4b05-8dc3-539fedf7afa8";
const predictionBombAsset =
  "https://www.figma.com/api/mcp/asset/5b8ba966-e4e6-4c53-b112-333116805915";
const predictionGunAsset =
  "https://www.figma.com/api/mcp/asset/a43acb56-fbda-4495-838b-5605f5449922";
const predictionSkullCoinAsset =
  "https://www.figma.com/api/mcp/asset/78ef9ebe-15f9-45d9-87df-06731f733b5c";
const originalsPlinkoBallAsset =
  "https://www.figma.com/api/mcp/asset/6dc5b3ac-d31b-4521-925a-6f0f7df17a77";
const originalsMinesAsset =
  "https://www.figma.com/api/mcp/asset/8012c92f-4a9d-4f5f-9311-e34e31e5753b";
const originalsChickenAsset =
  "https://www.figma.com/api/mcp/asset/7d9cd9c1-2d16-4327-8842-306002705ec3";
const originalsDiceAsset =
  "https://www.figma.com/api/mcp/asset/6c76508b-6328-49ee-aba7-939029646604";
const originalsCashoutAsset =
  "https://www.figma.com/api/mcp/asset/474529f6-1b4b-4ed9-a559-9023571feedc";
const originalsBadgeAsset =
  "https://www.figma.com/api/mcp/asset/1402779d-2350-4299-8b95-fbc0726e7a5d";
const aboutUsPanelAsset =
  "https://www.figma.com/api/mcp/asset/208b2f34-cbcf-4f23-847d-0d820c4af45d";
const marketsVisualAsset =
  "https://www.figma.com/api/mcp/asset/30c91480-1867-45c0-98f1-fb0cb5297e4d";
const capabilityGlowAsset =
  "https://www.figma.com/api/mcp/asset/3ae48aa8-6c49-4780-8d25-0971c66ffdd0";
const capabilityRingAsset =
  "https://www.figma.com/api/mcp/asset/0e59212d-cad4-43c5-9e1d-fe4b641a9b78";
const capabilityInnerCircleAsset =
  "https://www.figma.com/api/mcp/asset/e6bf41ef-699e-408d-b3bd-5ed0b24878f0";
const capabilityInnerCircleAltAsset =
  "https://www.figma.com/api/mcp/asset/2a5953bf-471f-463b-99bd-3dd2ad5533f0";
const capabilityF2PAsset =
  "https://www.figma.com/api/mcp/asset/6ce9903b-a926-49ce-884e-54c449b5591f";
const capabilityRngTopAsset =
  "https://www.figma.com/api/mcp/asset/025d7357-eccd-4aba-99bd-d8e883c6b628";
const capabilityRngBottomAsset =
  "https://www.figma.com/api/mcp/asset/5adf6808-26d5-4e53-b726-77b0d960dcff";
const capabilityAffiliateAsset =
  "https://www.figma.com/api/mcp/asset/0fcb3d53-b936-405d-bbdd-05a347997da3";
const capabilityAnalyticsAsset =
  "https://www.figma.com/api/mcp/asset/1e8e7f37-0a4c-49fe-84d7-38d9bab87c38";
const capabilityStreamingAsset =
  "https://www.figma.com/api/mcp/asset/520e3f2c-fa22-4a3f-be66-68c93b2af955";
const capabilityWhitelabelAsset =
  "https://www.figma.com/api/mcp/asset/d5c3a2d3-443c-42d5-ac13-eb7384927a2d";

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "markets", label: "Markets" },
  { id: "originals", label: "Originals" },
  { id: "hogamba", label: "Hogamba" },
  { id: "prediction-arena", label: "Prediction arena" },
  { id: "capabilities", label: "Capabilities" },
];

const floatingIcons = [
  {
    fallback: "heart" as const,
    className: "left-[12.4%] top-[11.2rem] h-[94px] w-[106px]",
  },
  {
    fallback: "star" as const,
    className: "left-[10.9%] top-[22.3rem] h-[94px] w-[94px]",
  },
  {
    asset: predictionCoinAsset,
    fallback: "coin" as const,
    className: "left-[20.3%] top-[16.2rem] h-[82px] w-[82px]",
  },
  {
    asset: heroBombAsset,
    fallback: "bomb" as const,
    className: "right-[23.2%] top-[10.8rem] h-[106px] w-[84px]",
  },
  {
    asset: heroDiceAsset,
    fallback: "dice" as const,
    className: "right-[16.8%] top-[18.6rem] h-[104px] w-[94px]",
  },
];

const productCards: ProductCard[] = [
  {
    name: "PLINKO",
    description: "High-energy drops, sharp risk ladders, and immediate visual payoff.",
    art: originalsPlinkoBallAsset,
    artClassName:
      "h-[8.8rem] w-[8.8rem] object-contain drop-shadow-[0_0_30px_rgba(255,207,236,0.35)]",
  },
  {
    name: "MINES",
    description: "Tense reveal loops built for repeat sessions and streamer drama.",
    art: originalsMinesAsset,
    artClassName:
      "h-[10.5rem] w-[10.5rem] object-contain drop-shadow-[0_0_30px_rgba(255,188,211,0.28)]",
  },
  {
    name: "CHICKEN",
    description: "Chaos-forward pacing with bright reward cues and simple rounds.",
    art: originalsChickenAsset,
    artClassName: "h-full w-full object-cover",
  },
  {
    name: "DICE",
    description: "Fast, configurable risk gameplay for broad operator audiences.",
    art: originalsDiceAsset,
    artClassName: "h-[11rem] w-[11rem] scale-[1.5] object-contain",
  },
];

const capabilityCards: CapabilityCard[] = [
  {
    title: "F2P engagement",
    description:
      "Free-to-play games, missions and progression loops that plug into loyalty and CRM.",
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
      "Tracking, rewarding and surfacing high-value traffic with simple, transparent mechanics.",
    symbolAsset: capabilityAffiliateAsset,
  },
  {
    title: "Data & analytics",
    description:
      "Game-level telemetry, cohort analysis and experimentation to tune products over time.",
    symbolAsset: capabilityAnalyticsAsset,
    innerCircleAsset: capabilityInnerCircleAltAsset,
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
      "Select products and platforms that can be adapted and branded for new partners under a common tech core.",
    symbolAsset: capabilityWhitelabelAsset,
  },
];

const magarbaSlides: ShowcaseSlide[] = [
  {
    label: "01",
    title: "Live board reveal",
    body: "A bright, outcome-first product moment that makes the multiplier feel immediate before the user even reads the controls.",
  },
  {
    label: "02",
    title: "Betting control pass",
    body: "The interface tightens around confident actions with fast presets, clear stakes, and a visual hierarchy built for repeat decisions.",
  },
  {
    label: "03",
    title: "Retention loop",
    body: "Reward pacing, risk contrast, and simple repeat actions make this section ideal for a pinned desktop storytelling moment.",
  },
];

const arenaSlides: ShowcaseSlide[] = [
  {
    label: "01",
    title: "Join the arena",
    body: "Users land in a clean entry state with obvious participation cues and a live event frame that reads instantly.",
  },
  {
    label: "02",
    title: "Track the swing",
    body: "Predictions stay legible through the tension arc, with score movement and probability cues carrying the drama.",
  },
  {
    label: "03",
    title: "Resolve and return",
    body: "The finish is built to hand players into the next round naturally, which is exactly why the section works as a scrubbed sequence.",
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
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div className={cn("relative", wrapperClassName)}>
      {status !== "loaded" ? fallback ?? null : null}
      {status !== "error" ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            imgClassName,
            status === "loaded" ? "opacity-100" : "opacity-0",
          )}
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

function OriginalsPreviewFallback() {
  return (
    <div className="absolute inset-0 rounded-[10px] bg-[linear-gradient(180deg,#2b0920,#15040e)] p-4 lg:p-7">
      <div className="rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#180c24,#09080f)] p-4 lg:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.26em] text-white/38">Live round</p>
            <p className="mt-3 font-display text-[2.4rem] leading-none font-bold tracking-[-0.06em] text-white lg:text-[4.7rem]">
              10.01x
            </p>
          </div>
          <div className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-[11px] font-bold tracking-[0.24em] text-[#ffb18b] uppercase">
            Cashout
          </div>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[18px] border border-white/8 bg-[radial-gradient(circle_at_50%_24%,rgba(255,125,78,0.2),rgba(255,125,78,0)_38%),rgba(255,255,255,0.03)] p-5">
            <div className="flex items-end justify-between">
              {["1.3x", "2.1x", "3.8x", "6.5x", "9.8x"].map((value, index) => (
                <div
                  key={value}
                  className="w-8 rounded-t-full bg-[linear-gradient(180deg,#ff8f64,#ff5a36)]"
                  style={{ height: `${(index + 2) * 14}px` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/36">Bet controls</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {["€ 2", "€ 5", "€ 10", "AUTO"].map((value) => (
                <div
                  key={value}
                  className="rounded-xl border border-white/8 bg-white/[0.04] px-3 py-3 text-center text-sm font-semibold text-white/82"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
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

function CapabilityIcon({
  card,
}: {
  card: CapabilityCard;
}) {
  const symbolMap: Record<string, string> = {
    "F2P engagement": "F2P",
    "Scalable RNG systems": "RNG",
    "Affiliate & referral systems": "AFF",
    "Data & analytics": "DATA",
    "Streaming-ready software": "LIVE",
    "Whitelabel solutions": "WL",
  };

  const glowMap: Record<string, string> = {
    "F2P engagement":
      "bg-[radial-gradient(circle,rgba(255,154,107,0.42),rgba(255,154,107,0)_70%)]",
    "Scalable RNG systems":
      "bg-[radial-gradient(circle,rgba(112,255,71,0.38),rgba(112,255,71,0)_72%)]",
    "Affiliate & referral systems":
      "bg-[radial-gradient(circle,rgba(255,86,163,0.34),rgba(255,86,163,0)_72%)]",
    "Data & analytics":
      "bg-[radial-gradient(circle,rgba(121,160,255,0.34),rgba(121,160,255,0)_72%)]",
    "Streaming-ready software":
      "bg-[radial-gradient(circle,rgba(255,188,92,0.34),rgba(255,188,92,0)_72%)]",
    "Whitelabel solutions":
      "bg-[radial-gradient(circle,rgba(198,136,255,0.34),rgba(198,136,255,0)_72%)]",
  };

  return (
    <div className="relative h-[130px] w-[130px] shrink-0">
      <div className={cn("absolute left-[18px] top-[18px] h-[94px] w-[94px] scale-[1.25]", glowMap[card.title])} />
      <div className="absolute inset-0 rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
      <div className="absolute left-[29px] top-[29px] flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/12 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.22),rgba(255,255,255,0.06)_55%,rgba(255,255,255,0.02)_100%)]">
        <span className="text-[14px] font-bold tracking-[0.18em] text-white/90">
          {symbolMap[card.title]}
        </span>
      </div>
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

  const rootRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const statsBarRef = useRef<HTMLDivElement | null>(null);
  const playerCountRef = useRef<HTMLParagraphElement | null>(null);
  const transactionCountRef = useRef<HTMLParagraphElement | null>(null);
  const magarbaSectionRef = useRef<HTMLElement | null>(null);
  const magarbaCopyRef = useRef<HTMLDivElement | null>(null);
  const magarbaTrackRef = useRef<HTMLDivElement | null>(null);
  const magarbaProgressRef = useRef<HTMLDivElement | null>(null);
  const arenaSectionRef = useRef<HTMLElement | null>(null);
  const arenaCopyRef = useRef<HTMLDivElement | null>(null);
  const arenaTrackRef = useRef<HTMLDivElement | null>(null);
  const arenaProgressRef = useRef<HTMLDivElement | null>(null);

  const floatingOuterRefs = useRef<Array<HTMLDivElement | null>>([]);
  const floatingInnerRefs = useRef<Array<HTMLDivElement | null>>([]);

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

      gsap.set(revealElements, { autoAlpha: 0, y: 48 });
      revealElements.forEach((element, index) => {
        gsap.to(element, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: (index % 3) * 0.04,
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

      floatingInnerRefs.current.forEach((icon, index) => {
        if (!icon) {
          return;
        }

        gsap.to(icon, {
          y: index % 2 === 0 ? -18 : 18,
          rotation: index % 2 === 0 ? 6 : -6,
          duration: 2.8 + index * 0.35,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

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
      if (
        magarbaSectionRef.current &&
        magarbaTrackRef.current &&
        magarbaCopyRef.current &&
        magarbaProgressRef.current
      ) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: magarbaSectionRef.current,
              start: "top top+=64",
              end: "+=220%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          })
          .to(
            magarbaTrackRef.current,
            {
              xPercent: -66.666,
              ease: "none",
            },
            0,
          )
          .to(
            magarbaCopyRef.current,
            {
              yPercent: -10,
              autoAlpha: 0.35,
              ease: "none",
            },
            0,
          )
          .fromTo(
            magarbaProgressRef.current,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              ease: "none",
            },
            0,
          );
      }

      if (
        arenaSectionRef.current &&
        arenaTrackRef.current &&
        arenaCopyRef.current &&
        arenaProgressRef.current
      ) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: arenaSectionRef.current,
              start: "top top+=64",
              end: "+=220%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          })
          .to(
            arenaTrackRef.current,
            {
              xPercent: -66.666,
              ease: "none",
            },
            0,
          )
          .to(
            arenaCopyRef.current,
            {
              yPercent: -10,
              autoAlpha: 0.35,
              ease: "none",
            },
            0,
          )
          .fromTo(
            arenaProgressRef.current,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              ease: "none",
            },
            0,
          );
      }
    });

    return () => {
      ctx.revert();
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={rootRef} className="relative overflow-x-clip bg-gamio-bg text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_50%_10rem,rgba(204,68,0,0.12),rgba(10,10,10,0.98)_40%)]" />
      <div className="pointer-events-none absolute left-[-10rem] top-[38rem] h-[28rem] w-[28rem] rounded-full bg-[rgba(255,107,53,0.09)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-[95rem] h-[34rem] w-[34rem] rounded-full bg-[rgba(127,47,255,0.14)] blur-3xl" />

      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 pt-3 lg:px-5 lg:pt-[14px]">
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
                href="mailto:hello@gamio.io"
                className="font-display flex h-[44px] w-[133px] translate-x-[10px] items-center justify-center rounded-[8px] bg-[#ff5e39] px-5 text-[16px] leading-5 font-bold text-white shadow-[0_10px_24px_rgba(255,94,57,0.22)] transition-transform duration-200 hover:scale-[1.02]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="about"
        ref={heroRef}
        className="relative isolate mx-auto min-h-[38rem] w-full max-w-[1440px] overflow-hidden px-6 pb-20 pt-28 lg:h-[650px] lg:min-h-0 lg:px-0 lg:pb-0 lg:pt-0"
      >
        <div className="pointer-events-none absolute inset-0 bg-[#101010]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,108,61,0.08),transparent_46%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[6rem] h-[24rem] w-[24rem] -translate-x-1/2 lg:top-[140px] lg:h-[1006.761px] lg:w-[1006.761px]">
          <div className="absolute inset-[13.4%] rounded-full bg-[radial-gradient(circle,rgba(255,48,0,1)_0%,rgba(255,60,14,1)_15%,rgba(255,71,29,1)_30%,rgba(255,94,57,1)_60%,rgba(255,127,83,1)_80%,rgba(255,159,108,1)_100%)] blur-[90px] lg:blur-[120px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.04)_40%,rgba(0,0,0,0.34)_72%,rgba(0,0,0,0.72)_100%)]" />
        {/* Dark curved mask — lives inside hero so overflow-hidden clips its bottom half, keeping it below stats bar (z-10) */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[204px] w-[1820px] -translate-x-1/2 translate-y-1/2 rounded-[50%] bg-[#121212] lg:block" />

        <div className="relative z-10 mx-auto flex w-full max-w-[560px] flex-col items-center justify-center text-center lg:absolute lg:left-1/2 lg:top-[161px] lg:h-[183px] lg:w-[529px] lg:-translate-x-1/2">
          <h1
            data-reveal
            className="font-display mx-auto w-full overflow-visible whitespace-nowrap bg-[linear-gradient(180deg,rgba(255,255,255,1)_13.312%,rgba(255,255,255,0)_88.636%)] bg-clip-text text-center text-[5.1rem] leading-[0.94] font-bold tracking-[-0.038em] text-transparent sm:text-[6rem] lg:absolute lg:left-1/2 lg:top-0 lg:min-w-[529px] lg:w-auto lg:-translate-x-1/2 lg:px-[14px] lg:pt-[10px] lg:text-[166px] lg:leading-[152px]"
          >
            Gamio
          </h1>
          <p
            data-reveal
            className="font-display mx-auto -mt-1 w-full text-center text-[1.85rem] leading-none font-bold tracking-[-0.03em] text-white sm:text-[2.15rem] lg:absolute lg:left-0 lg:right-0 lg:top-[142px] lg:mt-0 lg:text-[31px] lg:leading-[41px]"
          >
            Game & Gain
          </p>
        </div>

        <div
          ref={statsBarRef}
          data-reveal
          className="relative z-10 mx-auto mt-10 grid w-full max-w-[540px] gap-5 text-center whitespace-nowrap lg:absolute lg:left-1/2 lg:top-[386px] lg:mt-0 lg:w-[540px] lg:-translate-x-1/2 lg:grid-cols-2"
        >
          <div className="flex min-h-[103px] flex-col items-center justify-center rounded-[10px] bg-white/16 px-6 py-4 text-center text-white">
            <p className="font-display text-[18px] leading-[24px] font-normal text-white sm:text-[20px] sm:leading-[26px]">
              Live number of players
            </p>
            <p
              ref={playerCountRef}
              className="font-display mt-1 text-[2.35rem] font-bold tracking-[-0.04em] text-white sm:text-[2.55rem] sm:leading-[41px] lg:text-[31px]"
            >
              1,879
            </p>
          </div>
          <div className="flex min-h-[103px] flex-col items-center justify-center rounded-[10px] border-4 border-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.28)] px-6 py-4 text-center text-[#fff5c9]">
            <p className="font-display text-[18px] leading-[24px] font-normal text-[#fff5c9] sm:text-[20px] sm:leading-[26px]">
              Total transactions
            </p>
            <p
              ref={transactionCountRef}
              className="font-display mt-1 text-[2.35rem] font-bold tracking-[-0.04em] text-[#fff5c9] sm:text-[2.55rem] sm:leading-[41px] lg:text-[31px]"
            >
              € 303,980.99
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-20 lg:-mt-[91px] lg:h-[454px] lg:overflow-visible lg:px-0 lg:py-0">
        <AssetImage
          src={aboutUsPanelAsset}
          alt=""
          wrapperClassName="pointer-events-none absolute inset-0"
          imgClassName="h-full w-full object-cover transition-opacity duration-200"
          fallback={<AboutPanelFallback />}
        />
        <div className="absolute inset-0 bg-[#121212]/94 lg:bg-transparent" />
        <div
          data-reveal
          className="font-display relative mx-auto max-w-[795px] text-center text-[2rem] leading-[1.22] font-bold tracking-[0] text-white sm:text-[2.35rem] lg:absolute lg:left-1/2 lg:top-[176px] lg:w-[795px] lg:-translate-x-1/2 lg:text-[31px] lg:leading-[41px]"
        >
          We make things you actually want to play &mdash; and yes, sometimes there&apos;s
          money involved.
        </div>
      </section>

      <section
        id="markets"
        className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-0 lg:pt-[40px] lg:pb-[140px]"
      >
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center">
          <div
            data-reveal
            className="font-display mx-auto max-w-[795px] text-center text-[1.6rem] leading-[1.28] font-bold tracking-[0] text-white sm:text-[1.95rem] lg:w-[795px] lg:text-[25px] lg:leading-[32px]"
          >
            From prediction arenas to instant games and multiplayer chaos, we build
            interactive stuff people come back to.
          </div>

          <div
            data-reveal
            className="mx-auto mt-10 aspect-[900/473] w-full max-w-[900px] overflow-hidden rounded-[20px] lg:mt-[28px]"
          >
            <AssetImage
              src={marketsVisualAsset}
              alt="3D network visualization"
              wrapperClassName="h-full w-full rounded-[20px]"
              imgClassName="h-full w-full rounded-[20px] object-cover object-center transition-opacity duration-200"
              fallback={<MarketsVisualFallback />}
            />
          </div>
        </div>

        <div
          data-reveal
          className="mx-auto mt-20 max-w-[795px] text-center lg:mt-[112px] lg:w-[795px]"
        >
          <h2 className="font-display text-[2.75rem] leading-[1.08] font-bold tracking-[0] text-white sm:text-[3.35rem] lg:text-[49px] lg:leading-[68px]">
            Where do we operate?
          </h2>
          <p className="font-body mx-auto mt-9 max-w-[720px] text-[1rem] leading-[1.4] tracking-[0] text-white/88 lg:text-[16px] lg:leading-[20px]">
            Regulated markets: Belgium, Poland, Romania, Greece, Turkey, Brazil.
          </p>
          <p className="font-body mx-auto mt-6 max-w-[690px] text-[1rem] leading-[1.45] tracking-[0] text-white/72 lg:text-[16px] lg:leading-[22px]">
            Our products stay market-agnostic, so compliance, UX and feature depth
            can flex quickly as we expand into new regions.
          </p>
        </div>
      </section>

      <section
        id="originals"
        className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-20 lg:px-0 lg:py-34"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute left-[-22rem] top-16 h-[41rem] w-[41rem] rounded-full bg-[radial-gradient(circle,rgba(255,0,132,0.34),rgba(255,0,132,0)_68%)] blur-[110px]" />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="relative z-10 mx-auto max-w-[809px] text-center">
            <h2
              data-reveal
              className="font-display text-[2.75rem] leading-[1.02] font-bold tracking-[0] text-white sm:text-[3.6rem] lg:text-[95px] lg:leading-[137px]"
            >
              Our Products
            </h2>
            <div data-reveal className="mt-5 flex justify-center">
              <AssetImage
                src={originalsBadgeAsset}
                alt="Originals"
                wrapperClassName="h-[40px] w-[178px]"
                imgClassName="h-full w-full object-contain transition-opacity duration-200"
                fallback={<OriginalsBadgeFallback />}
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-12 grid max-w-[1180px] gap-5 lg:mt-[56px] lg:grid-cols-4">
            {productCards.map((card) => (
              <article
                key={card.name}
                data-reveal
                className="overflow-hidden rounded-[12px] border border-[rgba(255,162,222,0.16)] bg-[linear-gradient(180deg,#7b0c4a,#37031f)] transition-transform duration-300 hover:scale-[1.015]"
              >
                <div className="relative h-[350px] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,192,230,0.55),rgba(255,255,255,0)_48%)] opacity-80" />
                  {card.name === "CHICKEN" ? (
                    <AssetImage
                      src={card.art}
                      alt=""
                      wrapperClassName="absolute inset-0"
                      imgClassName="h-full w-full object-cover transition-opacity duration-200"
                      fallback={<ProductArtFallback name={card.name} />}
                    />
                  ) : (
                    <AssetImage
                      src={card.art}
                      alt=""
                      wrapperClassName="absolute inset-0 flex items-center justify-center"
                      imgClassName={cn(card.artClassName, "transition-opacity duration-200")}
                      fallback={<ProductArtFallback name={card.name} />}
                    />
                  )}
                  {card.name === "PLINKO" && (
                    <AssetImage
                      src={originalsPlinkoBallAsset}
                      alt=""
                      wrapperClassName="absolute right-4 top-9 h-12 w-12"
                      imgClassName="h-full w-full object-contain opacity-90 transition-opacity duration-200"
                      fallback={<HeroFallbackIcon type="coin" />}
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-[170px] bg-[linear-gradient(180deg,rgba(24,16,32,0),rgba(24,16,32,0.85)_58%,rgba(24,16,32,0.98))]" />
                </div>
                <div className="relative -mt-[84px] px-4 pb-5 pt-0 text-white">
                  <p className="text-[11px] font-bold tracking-[0.08em] text-white/92">
                    SUPERBET
                  </p>
                  <p className="mt-1 text-[2.15rem] leading-none font-bold tracking-[-0.05em]">
                    {card.name}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div
            data-reveal
            className="relative z-10 mx-auto mt-14 max-w-[1180px] overflow-hidden rounded-[16px] border border-[rgba(255,162,222,0.16)] bg-[#180515] p-2"
          >
            <AssetImage
              src={originalsCashoutAsset}
              alt="Originals game preview"
              wrapperClassName="aspect-[1180/612] w-full rounded-[10px]"
              imgClassName="h-full w-full rounded-[10px] object-cover transition-opacity duration-200"
              fallback={<OriginalsPreviewFallback />}
            />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 lg:px-0">
        <div className="mx-auto flex max-w-[1180px] justify-center">
          <AssetImage
            src={hogambaLogoAsset}
            alt="Hogamba"
            wrapperClassName="h-8 min-w-[180px]"
            imgClassName="h-full w-full object-contain transition-opacity duration-200"
            fallback={<HogambaLogoFallback />}
          />
        </div>
      </div>

      <section
        id="hogamba"
        ref={magarbaSectionRef}
        className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-16 lg:px-0 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute left-[-18rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(125,255,0,0.38),rgba(125,255,0,0)_68%)] blur-[120px]" />
        <div className="pointer-events-none absolute left-[7%] top-[20rem] h-[20rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(78,157,15,0.28),rgba(78,157,15,0)_75%)] blur-[90px]" />

        <div className="relative mx-auto max-w-[1180px]">
          <div
            data-reveal
            className="relative overflow-hidden"
          >
            <div
              ref={magarbaTrackRef}
              className="flex w-[300%] gap-0"
            >
              {magarbaSlides.map((slide, slideIndex) => (
                <article
                  key={slide.label}
                  className="relative min-h-[44rem] w-full overflow-hidden rounded-[28px]"
                >
                  <div className="absolute inset-0">
                    <div className="absolute left-[3%] top-[18%] h-[22rem] w-[30rem] rounded-[40px] bg-[rgba(94,206,0,0.12)] blur-[80px]" />

                    <div className="absolute left-[3%] top-[16%] w-[29rem] rounded-[20px] border border-[rgba(133,255,84,0.2)] bg-[linear-gradient(180deg,#10261a,#08120b)] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                      <div className="overflow-hidden rounded-[16px] border border-[rgba(182,255,143,0.18)] bg-[linear-gradient(180deg,#173223,#0b1510)] p-4">
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/55">
                          <span>Hogamba</span>
                          <span>Live round</span>
                        </div>
                        <div className="mt-4 grid grid-cols-[1.25fr_0.9fr] gap-4">
                          <div className="rounded-[16px] border border-white/8 bg-[rgba(255,255,255,0.04)] p-4">
                            <div className="grid grid-cols-5 gap-2">
                              {Array.from({ length: 20 }).map((_, index) => (
                                <div
                                  key={`${slide.label}-left-${index}`}
                                  className={cn(
                                    "aspect-square rounded-[10px] border border-white/6",
                                    (index + slideIndex) % 6 === 0
                                      ? "bg-[rgba(90,255,106,0.38)]"
                                      : (index + slideIndex) % 4 === 0
                                        ? "bg-[rgba(255,185,76,0.25)]"
                                        : "bg-[rgba(255,255,255,0.05)]",
                                  )}
                                />
                              ))}
                            </div>
                            <div className="mt-4 rounded-[14px] border border-[rgba(166,255,119,0.18)] bg-[rgba(130,255,76,0.08)] px-4 py-3">
                              <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                                Live multiplier
                              </p>
                              <p className="mt-1 text-[2.5rem] font-bold tracking-[-0.05em] text-white">
                                {slideIndex === 0 ? "10.01x" : slideIndex === 1 ? "14.58x" : "21.32x"}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3 rounded-[16px] border border-white/8 bg-[rgba(0,0,0,0.22)] p-4">
                            <div className="rounded-[14px] border border-white/8 bg-white/5 px-4 py-3">
                              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                                Bet amount
                              </p>
                              <p className="mt-1 text-2xl font-bold text-white">
                                {slideIndex === 2 ? "€32.00" : "€20.00"}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {["Auto", "Safe", "Turbo", "Max"].map((label) => (
                                <div
                                  key={`${slide.label}-chip-${label}`}
                                  className="rounded-[12px] border border-white/8 bg-black/20 px-3 py-2 text-center text-xs text-white/75"
                                >
                                  {label}
                                </div>
                              ))}
                            </div>
                            <div className="rounded-[14px] bg-[linear-gradient(135deg,#70ff47,#2fb400)] px-4 py-3 text-center text-sm font-bold tracking-[0.12em] text-[#081109]">
                              PLACE BET
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-[34%] top-[30%] z-10 w-[11rem] rounded-[20px] border border-[rgba(255,255,255,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                      <div className="rounded-[16px] bg-[linear-gradient(180deg,#121827,#090d14)] p-3">
                        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/45">
                          <span>Cashout</span>
                          <span>Now</span>
                        </div>
                        <p className="mt-5 text-center text-[2rem] font-bold tracking-[-0.06em] text-white">
                          {slideIndex === 0 ? "10.01x" : slideIndex === 1 ? "12.84x" : "21.32x"}
                        </p>
                        <div className="mt-4 rounded-[12px] bg-[linear-gradient(135deg,#6bff46,#3ac500)] px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-[#091208]">
                          Cash out
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-[43%] top-[23%] z-20 flex h-[22rem] w-[12rem] items-end justify-center rounded-[2.4rem] border border-[rgba(255,255,255,0.14)] bg-[linear-gradient(180deg,#152034,#0b0f18)] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                      <div className="w-full rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,#203252,#111827)] px-4 pb-6 pt-5">
                        <div className="mx-auto h-1.5 w-16 rounded-full bg-white/15" />
                        <div className="mt-6 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.2),rgba(255,255,255,0)_60%),linear-gradient(180deg,#15243c,#0d1525)] px-4 py-6 text-center">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                            Live
                          </p>
                          <p className="mt-3 text-[2.7rem] font-bold tracking-[-0.06em] text-white">
                            {slideIndex === 0 ? "10.01x" : slideIndex === 1 ? "16.48x" : "21.32x"}
                          </p>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {Array.from({ length: 6 }).map((_, index) => (
                            <div
                              key={`${slide.label}-phone-${index}`}
                              className={cn(
                                "aspect-square rounded-xl border border-white/8",
                                index === slideIndex + 1
                                  ? "bg-[rgba(104,255,67,0.34)]"
                                  : "bg-[rgba(255,255,255,0.06)]",
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="absolute right-[9%] top-[20%] h-[14rem] w-[14rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(255,255,255,0)_70%)] blur-[4px]" />
                    <div className="absolute right-[10.5%] top-[22%] flex h-[13rem] w-[13rem] items-center justify-center rounded-full border border-white/14 bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.94),rgba(143,185,255,0.82)_48%,rgba(61,84,124,0.95)_78%)] shadow-[0_28px_70px_rgba(0,0,0,0.38)]">
                      <div className="h-[4.8rem] w-[4.8rem] rounded-full border border-white/45 bg-[radial-gradient(circle_at_35%_35%,#ffffff,#d7e6ff_58%,#93aacd_100%)]" />
                    </div>
                    <div className="absolute right-[4%] top-[47%] text-right">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/32">
                        Hogamba 0{slideIndex + 1}
                      </p>
                      <p className="mt-2 max-w-[11rem] text-sm leading-5 text-white/52">
                        {slide.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div ref={magarbaCopyRef} className="mx-auto mt-8 max-w-[460px]" data-reveal>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                ref={magarbaProgressRef}
                className="h-full w-full rounded-full bg-[linear-gradient(90deg,#70ff47,#2fb400)]"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/42">
              {magarbaSlides.map((slide) => (
                <span key={slide.label}>{slide.label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="prediction-arena"
        ref={arenaSectionRef}
        className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-20 lg:px-0 lg:pt-[140px] lg:pb-[140px]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute left-[-26rem] top-[18rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,97,59,0.14),rgba(255,97,59,0)_68%)] blur-[130px]" />

        <div data-reveal className="mx-auto max-w-[809px] text-center">
          <h2 className="font-display text-[2.6rem] leading-[1.08] font-bold tracking-[0] text-white sm:text-[3rem] lg:text-[49px] lg:leading-[68px]">
            Gamio Prediction Arena
          </h2>
        </div>

        <div
          data-reveal
          className="mx-auto mt-12 w-full max-w-[1344px] overflow-hidden lg:mt-[60px]"
        >
          <div
            ref={arenaTrackRef}
            className="flex w-[300%] gap-0"
          >
            {arenaSlides.map((slide, slideIndex) => (
              <article
                key={slide.label}
                className="relative h-[33rem] w-full overflow-hidden lg:h-[800px]"
              >
                <div className="absolute inset-0">
                  {slideIndex === 0 && (
                    <>
                      <AssetImage
                        src={predictionCoinAsset}
                        alt=""
                        wrapperClassName="absolute left-[18%] top-[29%] h-[125px] w-[125px] rotate-[18deg]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="coin" />}
                      />
                      <AssetImage
                        src={predictionTabletAsset}
                        alt=""
                        wrapperClassName="absolute left-[19.5%] top-[38%] h-[270px] w-[419px]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="tablet" />}
                      />
                      <AssetImage
                        src={predictionBombAsset}
                        alt=""
                        wrapperClassName="absolute left-[14.7%] top-[59.5%] h-[150px] w-[150px] blur-[3px]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="bomb" />}
                      />
                      <AssetImage
                        src={predictionPotionAsset}
                        alt=""
                        wrapperClassName="absolute left-[44.5%] top-[55.8%] h-[138px] w-[138px] -rotate-[14deg]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="potion" />}
                      />
                      <AssetImage
                        src={predictionGameBadgeAsset}
                        alt=""
                        wrapperClassName="absolute left-[69.6%] top-[23.6%] h-[44px] w-[132px] rotate-[22deg]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="badge" />}
                      />
                    </>
                  )}

                  {slideIndex === 1 && (
                    <>
                      <AssetImage
                        src={predictionChatAsset}
                        alt=""
                        wrapperClassName="absolute left-[11.5%] top-[16.7%] h-[459px] w-[815px]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="chat" />}
                      />
                      <AssetImage
                        src={predictionCoinAsset}
                        alt=""
                        wrapperClassName="absolute right-[16%] top-[23.5%] h-[118px] w-[118px] rotate-[18deg]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="coin" />}
                      />
                      <div className="absolute left-1/2 top-[47.5%] w-[336px] -translate-x-1/2 text-center">
                        <p className="font-body text-[16px] leading-[20px] text-white/70">
                          Track predictions, follow the odds, and watch outcomes unfold in real time.
                        </p>
                      </div>
                    </>
                  )}

                  {slideIndex === 2 && (
                    <>
                      <AssetImage
                        src={predictionGunAsset}
                        alt=""
                        wrapperClassName="absolute left-[15.7%] top-[52%] h-[95px] w-[230px] rotate-[163deg]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="gun" />}
                      />
                      <AssetImage
                        src={predictionStreamerAsset}
                        alt=""
                        wrapperClassName="absolute left-[54.3%] top-[21.9%] h-[450px] w-[806px]"
                        imgClassName="h-full w-full rounded-[10px] border-2 border-[rgba(255,167,124,0.16)] object-cover transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="streamer" />}
                      />
                      <AssetImage
                        src={predictionSkullCoinAsset}
                        alt=""
                        wrapperClassName="absolute right-[11.1%] top-[11.4%] h-[202px] w-[202px] rotate-[15deg] blur-[3px]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="skullCoin" />}
                      />
                      <AssetImage
                        src={predictionCoinAsset}
                        alt=""
                        wrapperClassName="absolute right-[12.3%] top-[65.5%] h-[125px] w-[125px] rotate-[18deg]"
                        imgClassName="h-full w-full object-contain transition-opacity duration-200"
                        fallback={<PredictionAssetFallback kind="coin" />}
                      />
                      <div className="absolute left-[44%] top-[74.6%] rounded-[10px] border-2 border-[#f9bcae] bg-[rgba(146,28,0,0.16)] px-4 py-3 backdrop-blur-[4px]">
                        <p className="font-display text-center text-[16px] leading-[20px] font-bold text-white">
                          Prediction
                        </p>
                        <div className="mt-[34px] flex w-40 overflow-hidden rounded-full">
                          <div className="h-3 w-[64%] bg-[linear-gradient(90deg,#0056c6,#507fff)]" />
                          <div className="h-3 w-[36%] bg-[linear-gradient(90deg,#ff364f,#ee001e)]" />
                        </div>
                        <div className="mt-3 flex justify-between text-[10px] leading-[13px] text-white">
                          <span>COMPLETE</span>
                          <span>FAIL</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          ref={arenaCopyRef}
          data-reveal
          className="mx-auto mt-10 max-w-[460px]"
        >
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              ref={arenaProgressRef}
              className="h-full w-full rounded-full bg-[linear-gradient(90deg,#FF6B35,#CC4400)]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/45">
            {arenaSlides.map((slide) => (
              <span key={slide.label}>{slide.label}</span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-0 lg:py-[140px]"
      >
        <div className="mx-auto max-w-[794px] text-center">
          <h2
            data-reveal
            className="font-display mx-auto max-w-[12ch] text-[3rem] leading-[1.08] font-bold tracking-[0] text-white lg:text-[49px] lg:leading-[68px]"
          >
            Capabilities & supporting systems
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1180px] gap-x-5 gap-y-14 lg:mt-[40px] lg:grid-cols-3">
          {capabilityCards.map((card) => (
            <article
              key={card.title}
              data-reveal
              className="mx-auto flex max-w-[380px] flex-col items-center gap-3 text-center"
            >
              <div className="mx-auto">
                <CapabilityIcon card={card} />
              </div>
              <h3 className="font-display text-[16px] leading-[20px] font-bold tracking-[0] text-white">
                {card.title}
              </h3>
              <p className="font-body max-w-[340px] text-[13px] leading-[18px] text-white/70">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 pb-16 pt-24 lg:px-12">
        <div className="absolute inset-x-0 bottom-0 top-10 rounded-t-[36px] border border-white/8 bg-gamio-bg-secondary" />
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
              href="mailto:hello@gamio.io"
              className="mt-8 inline-block text-lg text-white/72 transition-colors duration-300 hover:text-gamio-orange"
            >
              hello@gamio.io
            </a>
          </div>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <a
              data-reveal
              href="mailto:hello@gamio.io"
              className="rounded-full bg-[linear-gradient(135deg,#FF6B35,#CC4400)] px-8 py-4 text-sm font-bold tracking-[0.14em] text-white shadow-[0_0_40px_rgba(255,107,53,0.3)] transition-transform duration-300 hover:scale-[1.02]"
            >
              → GET IN TOUCH
            </a>
            <div data-reveal className="grid w-full gap-4 text-sm tracking-[0.08em] text-white/75 lg:max-w-[18rem]">
              <div className="rounded-2xl border border-white/8 bg-white/4 px-5 py-4">
                Zagreb
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/4 px-5 py-4">
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
