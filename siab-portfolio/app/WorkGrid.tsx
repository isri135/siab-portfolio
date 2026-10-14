"use client";

import { useEffect, useRef, useState } from "react";

const videoProjects = [
  {
    title: "Restaurant Reel",
    category: "Food / Social Media",
    role: "Shot & edited",
    description:
      "Short-form visual content designed for social media marketing and brand presence.",
    src: "/videos/restaurant-reel.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DWMO61LAM3I/?utm_source=ig_web_copy_link",
    orientation: "horizontal",
  },
  {
    title: "Fight Show Promo",
    category: "Event Videography",
    role: "Marketing lead · Shot & edited",
    description:
      "Promotional content created to build hype and drive attention for a live boxing event.",
    src: "/videos/fight-show-promo.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DP2OUsYDY29/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    orientation: "vertical",
  },
  {
    title: "Podcast Clip",
    category: "Editing / Reels",
    role: "Edited",
    description:
      "Edited short-form clips built for engagement, retention, and shareable storytelling.",
    src: "/videos/podcast-clip.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DMoD38xuHY-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    orientation: "vertical",
  },
];

type Project = (typeof videoProjects)[number];

export default function WorkGrid() {
  const [active, setActive] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <>
      <div className="proWorkGrid">
        {videoProjects.map((item) => (
          <button
            key={item.title}
            type="button"
            className={`proWorkCard ${
              item.orientation === "horizontal" ? "isWide" : "isTall"
            }`}
            onClick={() => setActive(item)}
            onMouseEnter={(e) => e.currentTarget.querySelector("video")?.play()}
            onMouseLeave={(e) => {
              const v = e.currentTarget.querySelector("video");
              if (v) {
                v.pause();
                v.currentTime = 0.5;
              }
            }}
          >
            <div className="proWorkMedia">
              <video
                src={`${item.src}#t=0.5`}
                muted
                loop
                playsInline
                preload="metadata"
                tabIndex={-1}
              />
              <span className="proPlayBadge" aria-hidden="true">
                ▶
              </span>
            </div>
            <div className="proWorkInfo">
              <p className="proWorkCategory">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="proWorkRole">{item.role}</p>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="proLightbox"
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
      >
        {active && (
          <div
            className={`proLightboxInner ${
              active.orientation === "horizontal" ? "isWide" : "isTall"
            }`}
          >
            <button
              type="button"
              className="proLightboxClose"
              aria-label="Close video"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <video src={active.src} controls autoPlay playsInline />
            <div className="proLightboxInfo">
              <div>
                <p className="proWorkCategory">{active.category}</p>
                <h3>{active.title}</h3>
                <p className="proMuted">{active.description}</p>
              </div>
              <a
                href={active.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proLink"
              >
                View on Instagram →
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
