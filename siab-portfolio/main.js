/* =========================================================
   SIABfilms — EDIT YOUR CONTENT HERE
   ========================================================= */

const SETTINGS = {
  email: "hello@siabfilms.com",          // where enquiries go
  // Free form backend: create a form at https://formspree.io and paste the URL,
  // e.g. "https://formspree.io/f/abcdwxyz". Leave "" to open the visitor's email app instead.
  formEndpoint: "",
  calendlyUrl: "",                        // e.g. "https://calendly.com/siabfilms/15min"
  // Showreel button. Swap to your proper cut with music when ready (file or YouTube/Vimeo embed).
  showreel: { src: "videos/hero-loop.mp4", poster: "assets/thumbs/hero-poster.jpg", embed: "" },
  // Muted background loops: wide for desktop, vertical for phones
  hero: { wide: "videos/hero-loop.mp4", tall: "videos/hero-loop-vertical.mp4" }
};

/* Filter categories shown above the work grid */
const CATEGORIES = [
  { key: "all",         label: "All" },
  { key: "fight",       label: "Fight Show Promos" },
  { key: "boxing",      label: "Boxing" },
  { key: "documentary", label: "Documentary & Campaign" },
  { key: "brand",       label: "Brand & Food" },
  { key: "interview",   label: "Interview" },
  { key: "cinematic",   label: "Cinematic / Gimbal & Dolly" },
  { key: "vlog",        label: "Vlog" }
];

/* YOUR WORK
   - format: "vertical" (9:16 reel) or "wide" (16:9 film)
   - src:    a local file, e.g. "videos/fight-night.mp4"   (also plays on hover)
   - embed:  OR a YouTube / Vimeo / Instagram-hosted URL
   - poster: a thumbnail image, e.g. "assets/thumbs/fight-night.jpg"
   - soon:   true shows a "Coming soon" badge
   Order matters: put your strongest work first. */
const WORK = [
  { id: "campaign-doc", title: "Fitz for Ward 5", client: "Political campaign", category: "documentary", format: "wide",
    desc: "A mixed-media short documentary on former world champion Fitz Vanderpool. Archive fight footage, collage animation and the community he's running to serve.",
    src: "videos/fitz-campaign-documentary.mp4", poster: "assets/thumbs/fitz-campaign.jpg" },
  { id: "fight-teaser", title: "One Night", client: "WHIP Boxing Academy & Gym", category: "fight", format: "vertical",
    desc: "Teaser for a fight show, cut to build anticipation and sell tickets.",
    src: "videos/fight-show-teaser.mp4", poster: "assets/thumbs/fight-show-teaser.jpg" },
  { id: "podcast-promo", title: "Fight Show Podcast Promo", client: "Fight show", category: "fight", format: "vertical",
    desc: "A podcast-style promo mixing interview soundbites with event footage, with captions designed for sound-off viewing.",
    src: "videos/podcast-fight-promo.mp4", poster: "assets/thumbs/podcast-fight-promo.jpg" },
  { id: "sevon-shores", title: "Sevon Shores", client: "Café brand ad", category: "brand", format: "wide",
    desc: "A brand ad for a café, moving from aerial and illustrated shots to latte art and the people behind the counter.",
    src: "videos/sevon-shores-cafe.mp4", poster: "assets/thumbs/sevon-shores.jpg" },
  { id: "boxing-1", title: "Bag Work", client: "Boxing edit", category: "boxing", format: "vertical",
    desc: "Shot in the gym in 4K and cut fast for Reels and TikTok.",
    src: "videos/boxing-edit.mp4", poster: "assets/thumbs/boxing-edit.jpg" },
  { id: "boxing-2", title: "Fight Camp", client: "Boxing edit", category: "boxing", format: "vertical",
    desc: "Training-camp edit built around a strong hook and rhythm.",
    src: "videos/boxing-edit-2.mp4", poster: "assets/thumbs/boxing-edit-2.jpg" },
  { id: "pancakes", title: "Pancakes", client: "Food reel", category: "brand", format: "vertical",
    desc: "A macro food reel, from batter to the finished stack.",
    src: "videos/pancakes.mp4", poster: "assets/thumbs/pancakes.jpg" },
  { id: "kitchen", title: "Kitchen in Motion", client: "Gimbal work", category: "cinematic", format: "wide", soon: true,
    desc: "Smooth gimbal work in a high-end kitchen.", src: "", embed: "", poster: "" },
  { id: "dolly", title: "Dolly Zoom Study", client: "Camera work", category: "cinematic", format: "vertical", soon: true,
    desc: "A set of dolly zoom shots.", src: "", embed: "", poster: "" },
  { id: "vlog", title: "Trinidad Vlog", client: "Travel vlog", category: "vlog", format: "wide",
    desc: "A fast-paced travel vlog from Trinidad: coastline, beaches and city nights, cut to keep viewers watching.",
    src: "videos/vlog-1.mp4", poster: "assets/thumbs/vlog-1.jpg" }
];

/* TESTIMONIALS: the section stays hidden until you add at least one real quote.
   { quote: "...", name: "Name", role: "Promoter, XYZ Fight Night" } */
const TESTIMONIALS = [];

/* STILLS: photos shown in the Stills section. Use "tall", "wide" or "square" to match each photo's shape. */
const PHOTOS = [
  { src: "assets/photos/classic-cars.jpg", alt: "Classic red and green race cars under spotlight", shape: "tall", tag: "Automotive" },
  { src: "assets/photos/icecream-1.jpg", alt: "Ice cream sundae on a teal backdrop", shape: "square", tag: "Food & Product" },
  { src: "assets/photos/supercars.jpg", alt: "Porsche supercar at a night car show", shape: "tall", tag: "Automotive" },
  { src: "assets/photos/icecream-6.jpg", alt: "Ice cream with sprinkles and candy, top-down", shape: "square", tag: "Food & Product" },
  { src: "assets/photos/niagara-clock.jpg", alt: "Black and white clock tower at Niagara Falls", shape: "tall", tag: "Street & Travel" },
  { src: "assets/photos/ferrari.jpg", alt: "White and red Ferraris", shape: "tall", tag: "Automotive" },
  { src: "assets/photos/icecream-3.jpg", alt: "Ice cream bowl with chocolate sauce and sprinkles", shape: "wide", tag: "Food & Product" },
  { src: "assets/photos/cn-tower.jpg", alt: "CN Tower against a clear sky", shape: "wide", tag: "Street & Travel" },
  { src: "assets/photos/icecream-4.jpg", alt: "Sundae with sprinkles, top-down", shape: "square", tag: "Food & Product" },
  { src: "assets/photos/niagara-lightpost.jpg", alt: "Black and white lamppost and visitors at Niagara Falls", shape: "tall", tag: "Street & Travel" }
];

/* =========================================================
   Site logic — no need to edit below
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

document.getElementById("year").textContent = new Date().getFullYear();

/* Nav */
const nav = $(".nav"), navLinks = $("#navLinks"), toggle = $("#navToggle"), mobileCta = $(".mobile-cta");
const onScroll = () => {
  nav.classList.toggle("scrolled", scrollY > 40);
  const contactTop = $("#contact").getBoundingClientRect().top;
  mobileCta.classList.toggle("show", scrollY > innerHeight * 0.8 && contactTop > innerHeight);
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();
toggle.addEventListener("click", () => { navLinks.classList.toggle("open"); nav.classList.toggle("menu-open"); });
$$("#navLinks a").forEach(a => a.addEventListener("click", () => { navLinks.classList.remove("open"); nav.classList.remove("menu-open"); }));

/* Hero video: vertical loop on portrait screens, wide loop otherwise. Hide if missing so the gradient shows. */
const heroVid = $(".hero-video");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) heroVid.removeAttribute("autoplay");
heroVid.addEventListener("error", () => heroVid.remove());
heroVid.src = matchMedia("(orientation: portrait)").matches ? SETTINGS.hero.tall : SETTINGS.hero.wide;

/* Work grid */
const filmGrid = $("#filmGrid"), reelGrid = $("#reelGrid"), filters = $("#filters");
const syncGroups = () => [["#filmGroup", filmGrid], ["#reelGroup", reelGrid]].forEach(([g, grid]) => {
  $(g).hidden = !$$(".card:not(.hide)", grid).length;
});
const gradients = ["linear-gradient(140deg,#2a0f0c,#101012 70%)", "linear-gradient(140deg,#231a0a,#0f0f11 70%)", "linear-gradient(140deg,#18181c,#2b0d0a)", "linear-gradient(200deg,#1d1508,#0d0d0f 65%)"];

CATEGORIES.forEach((c, i) => {
  if (c.key !== "all" && !WORK.some(w => w.category === c.key)) return;
  const b = document.createElement("button");
  b.className = "filter" + (i === 0 ? " active" : "");
  b.textContent = c.label; b.dataset.key = c.key; b.setAttribute("role", "tab");
  b.onclick = () => {
    $$(".filter").forEach(f => f.classList.toggle("active", f === b));
    $$(".card").forEach(card => card.classList.toggle("hide", c.key !== "all" && card.dataset.cat !== c.key));
    syncGroups();
  };
  filters.appendChild(b);
});

const catLabel = k => (CATEGORIES.find(c => c.key === k) || {}).label || k;
WORK.forEach((w, i) => {
  const card = document.createElement("button");
  card.className = `card ${w.format === "vertical" ? "tall" : "wide"}`;
  card.dataset.cat = w.category;
  card.innerHTML = `
    <div class="ph" data-initial="${w.title[0]}" style="--ph:${gradients[i % gradients.length]}"></div>
    ${w.poster ? `<img class="thumb" src="${w.poster}" alt="" loading="lazy" onerror="this.remove()">` : ""}
    ${w.src ? `<video muted loop playsinline preload="none" ${w.poster ? `poster="${w.poster}"` : ""}><source src="${w.src}"></video>` : ""}
    ${w.soon ? `<span class="soon">Coming soon</span>` : ""}
    <span class="format">${w.format === "vertical" ? "9:16" : "16:9"}</span>
    <div class="meta"><div class="cat">${catLabel(w.category)}</div><div class="title">${w.title}</div></div>`;
  const v = $("video", card);
  if (v) {
    card.addEventListener("mouseenter", () => v.play().catch(() => {}));
    card.addEventListener("mouseleave", () => { v.pause(); });
  }
  card.addEventListener("click", () => openLightbox(w));
  (w.format === "vertical" ? reelGrid : filmGrid).appendChild(card);
});
syncGroups();

/* Lightbox */
const lb = $("#lightbox"), stage = $("#lbStage"), info = $("#lbInfo");
function embedUrl(url) {
  let m;
  if ((m = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/))) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`;
  if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return `https://player.vimeo.com/video/${m[1]}?autoplay=1`;
  return url;
}
function openLightbox(w) {
  stage.className = "lb-stage" + (w.format === "vertical" ? " vertical" : "");
  if (w.image) stage.innerHTML = `<img src="${w.image}" alt="${w.alt || ""}" class="lb-img">`;
  else if (w.embed) stage.innerHTML = `<iframe src="${embedUrl(w.embed)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  else if (w.src) stage.innerHTML = `<video src="${w.src}" ${w.poster ? `poster="${w.poster}"` : ""} controls autoplay playsinline></video>`;
  else stage.innerHTML = `<div class="lb-empty"><h3>${w.soon ? "Coming soon" : "Video coming soon"}</h3><p>Want something like this? <a href="#contact" class="link-arrow" data-close>Get in touch →</a></p></div>`;
  info.innerHTML = (w.title === "SIABfilms Showreel" || w.image) ? "" :`<div class="cat">${catLabel(w.category)}${w.client ? " · " + w.client : ""}</div><h3>${w.title}</h3><p>${w.desc || ""}</p>`;
  lb.hidden = false; document.body.style.overflow = "hidden";
  $("[data-close]", stage)?.addEventListener("click", closeLightbox);
}
function closeLightbox() { lb.hidden = true; stage.innerHTML = ""; document.body.style.overflow = ""; }
$("#lbClose").onclick = closeLightbox;
lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeLightbox(); });

$("[data-open-reel]").onclick = () => openLightbox({ title: "SIABfilms Showreel", format: "wide", ...SETTINGS.showreel });
$$("[data-work-id]").forEach(el => el.onclick = () => openLightbox(WORK.find(w => w.id === el.dataset.workId)));

/* Stills gallery */
const stillsGrid = $("#stillsGrid");
if (stillsGrid) PHOTOS.forEach(p => {
  const b = document.createElement("button");
  b.className = `still ${p.shape || "square"}`;
  b.innerHTML = `<img src="${p.src}" alt="${p.alt}" loading="lazy"><span>${p.tag || ""}</span>`;
  b.onclick = () => openLightbox({ image: p.src, alt: p.alt, format: p.shape === "tall" ? "vertical" : "wide" });
  stillsGrid.appendChild(b);
});

/* Testimonials */
if (TESTIMONIALS.length) {
  $("#testimonials").hidden = false;
  $("#quoteGrid").innerHTML = TESTIMONIALS.map(t => `<figure class="quote"><p>“${t.quote}”</p><cite>${t.name}${t.role ? " · " + t.role : ""}</cite></figure>`).join("");
}

/* Contact */
if (SETTINGS.calendlyUrl) { const c = $("#calendlyBtn"); c.href = SETTINGS.calendlyUrl; c.hidden = false; }
$("#emailLink").href = "mailto:" + SETTINGS.email; $("#emailLink").textContent = SETTINGS.email;

const form = $("#enquiryForm"), note = $("#formNote");

// Project types: the date field's wording changes with the type
const TYPES = {
  brand:      { value: "Brand Film",     dateLabel: "Shoot date / deadline", datePh: "e.g. Launching 14 March" },
  commercial: { value: "Commercial",     dateLabel: "When should it go live?", datePh: "e.g. Campaign starts 1 April" },
  event:      { value: "Event",          dateLabel: "Event date",            datePh: "e.g. Fight night 14 March" },
  other:      { value: "Something else", dateLabel: "Shoot date / deadline", datePh: "e.g. End of March" }
};

// Show only the questions for the chosen type. Hidden groups are disabled so they aren't sent.
function syncTypeFields() {
  const type = $('input[name="type"]:checked', form).value;
  $$(".type-fields", form).forEach(fs => { const on = fs.dataset.for === type; fs.hidden = !on; fs.disabled = !on; });
  const t = Object.values(TYPES).find(t => t.value === type) || TYPES.other;
  $("#dateLabel").textContent = t.dateLabel; $("#dateInput").placeholder = t.datePh;
}
$$('input[name="type"]', form).forEach(r => r.addEventListener("change", syncTypeFields));
syncTypeFields();

// "Inquire" buttons pre-select the project type
$$("[data-type]").forEach(a => a.addEventListener("click", () => {
  const t = TYPES[a.dataset.type]; if (!t) return;
  const radio = $(`input[name="type"][value="${t.value}"]`, form); if (radio) { radio.checked = true; syncTypeFields(); }
}));

form.addEventListener("submit", async e => {
  e.preventDefault();
  let ok = true;
  $$("[required]", form).forEach(f => { const bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value)); f.classList.toggle("invalid", bad); if (bad) ok = false; });
  if (!ok) { note.textContent = "Please fill in your name, a valid email and a few words about the project."; return; }
  const fd = new FormData(form), data = {};
  for (const [k, v] of fd) if (v) data[k] = data[k] ? `${data[k]}, ${v}` : v;  // joins ticked checkboxes
  if (SETTINGS.formEndpoint) {
    note.textContent = "Sending…";
    try {
      const r = await fetch(SETTINGS.formEndpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw 0;
      form.reset(); syncTypeFields(); note.textContent = "Thanks! Your enquiry has been sent. We'll reply within 24 hours.";
    } catch { note.textContent = `Something went wrong. Please email ${SETTINGS.email} directly.`; }
  } else {
    const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
    location.href = `mailto:${SETTINGS.email}?subject=${encodeURIComponent(`New enquiry: ${data.type} (${data.name})`)}&body=${encodeURIComponent(body)}`;
    note.textContent = "Opening your email app…";
  }
});

/* Count-up stats */
const counters = $$("[data-count]");
const countIO = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  const el = en.target, end = +el.dataset.count, t0 = performance.now();
  const step = t => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step); countIO.unobserve(el);
}), { threshold: .5 });
counters.forEach(c => countIO.observe(c));

/* Reveal on scroll */
const revealIO = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); } }), { threshold: .12 });
$$(".section-head, .door, .card, .still, .svc, .bento-card, .steps li, .case-media, .case-body, .about-photo, .about-body, .faq-list, .form, .contact-intro, .reel-frame")
  .forEach(el => { el.classList.add("reveal"); revealIO.observe(el); });
