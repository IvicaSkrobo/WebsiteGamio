"use client";

import { useEffect, useRef, useState } from "react";
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
    className: "left-[12.5%] top-[11.8rem] h-[86px] w-[97px]",
  },
  {
    fallback: "star" as const,
    className: "left-[11.5%] top-[21.8rem] h-[88px] w-[88px]",
  },
  { asset: heroBombAsset, className: "right-[23.55%] top-[11.4rem] h-[98px] w-[77px]" },
  { asset: heroDiceAsset, className: "right-[17.25%] top-[18.95rem] h-[95px] w-[86px]" },
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
  }).format(value);
}

function CapabilityIcon({
  card,
}: {
  card: CapabilityCard;
}) {
  if (card.title === "Scalable RNG systems") {
    return (
      <div className="relative h-[130px] w-[130px] shrink-0">
        <img
          src={capabilityGlowAsset}
          alt=""
          className="absolute left-[21px] top-[21px] h-[88px] w-[88px] scale-[1.46] mix-blend-plus-lighter"
        />
        <img
          src={capabilityRingAsset}
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
        />
        <img
          src={capabilityInnerCircleAsset}
          alt=""
          className="absolute left-[29px] top-[29px] h-[72px] w-[72px] object-contain"
        />
        <img
          src={capabilityRngTopAsset}
          alt=""
          className="absolute left-[44px] top-[43px] h-[17px] w-[16px] object-contain"
        />
        <img
          src={capabilityRngBottomAsset}
          alt=""
          className="absolute left-[39px] top-[45px] h-[34px] w-[52px] object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative h-[130px] w-[130px] shrink-0">
      <img
        src={capabilityGlowAsset}
        alt=""
        className="absolute left-[21px] top-[21px] h-[88px] w-[88px] scale-[1.46] mix-blend-plus-lighter"
      />
      <img
        src={capabilityRingAsset}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <img
        src={card.innerCircleAsset ?? capabilityInnerCircleAsset}
        alt=""
        className="absolute left-[29px] top-[29px] h-[72px] w-[72px] object-contain"
      />
      <img
        src={card.symbolAsset}
        alt=""
        className="absolute left-1/2 top-1/2 w-[49px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

function HeroFallbackIcon({ type }: { type: "heart" | "star" }) {
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(204,68,0,0.38),rgba(10,10,10,0.96)_58%)]" />
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
            <a href="#about" className="flex h-[44px] items-center justify-start">
              <img
                src={navLogoAsset}
                alt="Gamio"
                className="h-[30px] w-[110px] translate-x-[18px] object-contain"
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
                className="flex h-[44px] w-[133px] translate-x-[10px] items-center justify-center rounded-[8px] bg-[#ff5e39] px-5 text-[16px] leading-5 font-bold text-white shadow-[0_10px_24px_rgba(255,94,57,0.22)] transition-transform duration-200 hover:scale-[1.02]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div aria-hidden="true" className="h-[5.75rem] lg:h-[6.25rem]" />

      <section
        id="about"
        ref={heroRef}
        className="relative isolate mx-auto flex min-h-[calc(100vh-6.25rem)] w-full max-w-[1440px] flex-col items-center justify-center px-6 pb-24 pt-16 lg:px-12 lg:pb-28 lg:pt-20"
      >
        {floatingIcons.map((item, index) => (
          <div
            key={`${item.className}-${index}`}
            ref={(node) => {
              floatingOuterRefs.current[index] = node;
            }}
            className={cn(
              "pointer-events-none absolute hidden lg:flex",
              item.className,
            )}
          >
            <div
              ref={(node) => {
                floatingInnerRefs.current[index] = node;
              }}
              className="relative h-full w-full"
            >
              {"asset" in item ? (
                <img src={item.asset} alt="" className="h-full w-full object-contain" />
              ) : null}
              {"fallback" in item && item.fallback ? (
                <div className="absolute inset-0">
                  <HeroFallbackIcon type={item.fallback} />
                </div>
              ) : null}
            </div>
          </div>
        ))}

        <div className="relative z-10 mx-auto flex w-full max-w-[529px] flex-col items-center justify-center text-center">
          <h1
            data-reveal
            className="mx-auto w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_13%,rgba(255,255,255,0.18)_88%,rgba(255,255,255,0)_100%)] bg-clip-text text-center text-[5.25rem] leading-none font-bold tracking-[-0.04em] text-transparent sm:text-[6.5rem] lg:text-[8.8rem]"
          >
            Gamio
          </h1>
          <p
            data-reveal
            className="-mt-1 mx-auto w-full text-center text-[2.35rem] font-bold tracking-[-0.03em] text-white"
          >
            Game & Gain
          </p>
        </div>

        <div
          ref={statsBarRef}
          data-reveal
          className="relative z-10 mx-auto mt-12 grid w-full max-w-[540px] place-content-center gap-5 text-center lg:grid-cols-2"
        >
          <div className="flex min-h-[103px] flex-col items-center justify-center rounded-[10px] bg-white/16 px-6 py-4 text-center text-white">
            <p className="text-[1.25rem] leading-[1.3] text-white">
              Live number of players
            </p>
            <p
              ref={playerCountRef}
              className="mt-1 text-[2.6rem] font-bold tracking-[-0.04em] text-white"
            >
              1,879
            </p>
          </div>
          <div className="flex min-h-[103px] flex-col items-center justify-center rounded-[10px] border-4 border-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.28)] px-6 py-4 text-center text-[#fff5c9]">
            <p className="text-[1.25rem] leading-[1.3] text-[#fff5c9]">
              Total transactions
            </p>
            <p
              ref={transactionCountRef}
              className="mt-1 text-[2.6rem] font-bold tracking-[-0.04em] text-[#fff5c9]"
            >
              € 303,980.99
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-36 bg-[radial-gradient(125%_110%_at_50%_120%,transparent_60%,#0f0f10_61%)]" />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 lg:px-12">
        <div
          data-reveal
          className="mx-auto max-w-[795px] text-center text-[2.3rem] leading-[1.12] font-bold tracking-[-0.04em] text-white lg:text-[3.25rem]"
        >
          We make things you actually want to play and yes, sometimes there&apos;s
          money involved.
        </div>
      </section>

      <section
        id="markets"
        className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24"
      >
        <div
          data-reveal
          className="mx-auto max-w-[900px] text-center"
        >
          <h2 className="text-4xl leading-tight font-bold tracking-[-0.04em] text-white lg:text-[4.25rem]">
            Where do we operate?
          </h2>
          <p className="mx-auto mt-9 max-w-[795px] text-[1.1rem] leading-[1.25] text-white/88 lg:text-[1.85rem]">
            We focus on regulated and fast-growing markets such as Belgium, Poland,
            Romania, Greece, Türkiye and Brazil.
          </p>
          <p className="mx-auto mt-9 max-w-[795px] text-[1rem] leading-[1.28] text-white/84 lg:text-[1.8rem]">
            Our products and platforms are built to be market-agnostic, so we can
            adapt features, UX and compliance to new regions as we expand. Local
            rules differ, but our tech and content stack is built to plug into
            different regulatory and cultural contexts with minimal friction.
          </p>
        </div>

        <div data-reveal className="mx-auto mt-14 max-w-[900px] overflow-hidden rounded-[30px]">
          <img
            src={marketsVisualAsset}
            alt="Abstract neon markets visual"
            className="w-full rounded-[30px] object-cover"
          />
        </div>
      </section>

      <section
        id="originals"
        className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-20 lg:px-12 lg:py-34"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute left-[-22rem] top-16 h-[41rem] w-[41rem] rounded-full bg-[radial-gradient(circle,rgba(255,0,132,0.34),rgba(255,0,132,0)_68%)] blur-[110px]" />
        <div className="relative">
          <div className="relative z-10 mx-auto max-w-[809px] text-center">
            <h2
              data-reveal
              className="text-[2.35rem] leading-tight font-bold tracking-[-0.04em] text-white lg:text-[3.25rem]"
            >
              Our Products
            </h2>
            <div data-reveal className="mt-5 flex justify-center">
              <span className="inline-flex rounded-full border border-white/25 bg-[rgba(255,255,255,0.08)] px-4 py-1.5 text-[13px] font-bold tracking-[0.08em] text-white shadow-[0_0_22px_rgba(255,164,211,0.35)]">
                ORIGINALS
              </span>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-14 grid max-w-[1180px] gap-5 lg:grid-cols-4">
            {productCards.map((card) => (
              <article
                key={card.name}
                data-reveal
                className="overflow-hidden rounded-[12px] border border-[rgba(255,162,222,0.16)] bg-[linear-gradient(180deg,#7b0c4a,#37031f)] transition-transform duration-300 hover:scale-[1.015]"
              >
                <div className="relative h-[350px] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,192,230,0.55),rgba(255,255,255,0)_48%)] opacity-80" />
                  {card.name === "CHICKEN" ? (
                    <img
                      src={card.art}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={card.art} alt="" className={card.artClassName} />
                    </div>
                  )}
                  {card.name === "PLINKO" && (
                    <img
                      src={originalsPlinkoBallAsset}
                      alt=""
                      className="absolute right-4 top-9 h-12 w-12 object-contain opacity-90"
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
            <img
              src={originalsCashoutAsset}
              alt="Originals game preview"
              className="w-full rounded-[10px] object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-6 py-12 lg:px-12">
        <img
          src={hogambaLogoAsset}
          alt="Hogamba"
          className="h-6 w-auto"
        />
      </div>

      <section
        id="hogamba"
        ref={magarbaSectionRef}
        className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 py-16 lg:px-12 lg:py-24"
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
        className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-12 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div ref={arenaCopyRef} className="lg:pr-6">
            <p
              data-reveal
              className="text-sm font-bold uppercase tracking-[0.3em] text-gamio-orange"
            >
              Prediction arena
            </p>
            <h2
              data-reveal
              className="mt-6 text-4xl leading-tight font-bold tracking-[-0.03em] text-white lg:text-[3.5rem]"
            >
              Gamio Prediction Arena
            </h2>
            <p
              data-reveal
              className="mt-6 max-w-[30rem] text-lg leading-8 text-white/72"
            >
              This section now supports the same desktop scroll-capture pattern,
              so the arena sequence can move through its story frames while the
              page itself stays pinned.
            </p>
            <div data-reveal className="mt-8">
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
          </div>

          <div
            data-reveal
            className="overflow-hidden rounded-[32px] bg-transparent p-0 shadow-none"
          >
            <div
              ref={arenaTrackRef}
              className="flex w-[300%] gap-0"
            >
              {arenaSlides.map((slide, slideIndex) => (
                <article
                  key={slide.label}
                  className="relative min-h-[42rem] w-full overflow-hidden rounded-[28px]"
                >
                  <div className="absolute inset-0">
                    {slideIndex === 0 && (
                      <>
                        <img
                          src={predictionCoinAsset}
                          alt=""
                          className="absolute left-[12%] top-[15%] h-[125px] w-[125px] rotate-[18deg] object-contain"
                        />
                        <img
                          src={predictionTabletAsset}
                          alt=""
                          className="absolute left-[17%] top-[30%] w-[430px] -rotate-[0.8deg] object-contain"
                        />
                        <img
                          src={predictionBombAsset}
                          alt=""
                          className="absolute left-[8%] top-[63%] w-[150px] -rotate-[24deg] object-contain blur-[3px]"
                        />
                        <img
                          src={predictionPotionAsset}
                          alt=""
                          className="absolute left-[54%] top-[54%] w-[138px] -rotate-[14deg] object-contain"
                        />
                        <img
                          src={predictionGameBadgeAsset}
                          alt=""
                          className="absolute left-[73%] top-[25%] w-[132px] rotate-[22deg] object-contain"
                        />
                      </>
                    )}

                    {slideIndex === 1 && (
                      <>
                        <img
                          src={predictionChatAsset}
                          alt=""
                          className="absolute left-[16%] top-[12%] w-[340px] rotate-[-4deg] object-contain"
                        />
                        <div className="absolute left-[63%] top-[45%] rounded-[10px] border-2 border-[#f9bcae] bg-[rgba(146,28,0,0.16)] px-4 py-3 backdrop-blur-[4px]">
                          <p className="text-center text-base font-bold text-white">
                            Prediction
                          </p>
                          <div className="mt-5 flex w-40 overflow-hidden rounded-full">
                            <div className="h-3 w-[64%] bg-[linear-gradient(90deg,#0056c6,#507fff)]" />
                            <div className="h-3 w-[36%] bg-[linear-gradient(90deg,#ff364f,#ee001e)]" />
                          </div>
                          <div className="mt-3 flex justify-between text-[10px] text-white">
                            <span>COMPLETE</span>
                            <span>FAIL</span>
                          </div>
                        </div>
                        <img
                          src={predictionCoinAsset}
                          alt=""
                          className="absolute right-[16%] top-[18%] w-[118px] rotate-[18deg] object-contain"
                        />
                      </>
                    )}

                    {slideIndex === 2 && (
                      <>
                        <img
                          src={predictionGunAsset}
                          alt=""
                          className="absolute left-[12%] top-[46%] w-[180px] rotate-[163deg] object-contain"
                        />
                        <img
                          src={predictionStreamerAsset}
                          alt=""
                          className="absolute left-[30%] top-[25%] w-[430px] rounded-[10px] border-2 border-[rgba(255,167,124,0.16)] object-cover"
                        />
                        <img
                          src={predictionSkullCoinAsset}
                          alt=""
                          className="absolute right-[12%] top-[16%] w-[190px] rotate-[15deg] object-contain blur-[3px]"
                        />
                        <img
                          src={predictionCoinAsset}
                          alt=""
                          className="absolute right-[13%] top-[70%] w-[120px] rotate-[18deg] object-contain"
                        />
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-12 lg:py-34"
      >
        <div className="mx-auto max-w-[794px] text-center">
          <h2
            data-reveal
            className="mx-auto max-w-[12ch] text-[3rem] leading-[1.08] font-bold tracking-[-0.05em] text-white lg:text-[4.25rem]"
          >
            Capabilities & supporting systems
          </h2>
        </div>

        <div className="mx-auto mt-11 grid max-w-[794px] gap-x-5 gap-y-20 lg:grid-cols-2">
          {capabilityCards.map((card) => (
            <article
              key={card.title}
              data-reveal
              className="mx-auto max-w-[387px] text-center"
            >
              <div className="mx-auto">
                <CapabilityIcon card={card} />
              </div>
              <h3 className="mt-1 text-[2rem] leading-tight font-bold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-1 text-[1.05rem] leading-[1.38] text-white/88">
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
