import { Geist } from "next/font/google";
import ProNav from "./ProNav";
import WorkGrid from "./WorkGrid";

const geist = Geist({
  subsets: ["latin"],
});

const contactEmail = "isrib135@gmail.com";
const instagramUrl = "https://www.instagram.com/siab.__/";

const services = [
  {
    title: "Videography",
    text: "Event coverage, promo shoots, gym content, food content, and brand-focused visuals.",
  },
  {
    title: "Editing",
    text: "Short-form reels, social clips, highlight edits, and clean storytelling with strong pacing.",
  },
  {
    title: "Creative Direction",
    text: "Shaping the feel, style, and presentation of content so it stands out online.",
  },
];

const facts = [
  { value: "2+", label: "Years shooting & editing" },
  { value: "5+", label: "Industries covered" },
  { value: "UW", label: "Statistics, University of Waterloo" },
];

export default function HomePage() {
  return (
    <div className={`proSite ${geist.className}`}>
      <ProNav email={contactEmail} />

      <main>
        <section className="proHero" id="top">
          <div className="proContainer">
            <p className="proEyebrow">Videographer & Editor · Waterloo, ON</p>
            <h1 className="proHeroTitle">
              Video content that grabs attention and tells the story.
            </h1>
            <p className="proHeroText">
              I’m Israfil. I shoot and edit for events, brands, sports, and
              social media — from fight-night promos to restaurant reels.
            </p>
            <div className="proHeroActions">
              <a href="#work" className="proBtn proBtnPrimary">
                View my work
              </a>
              <a href="#contact" className="proBtn proBtnGhost">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section className="proSection" id="work">
          <div className="proContainer">
            <div className="proSectionHead">
              <p className="proEyebrow">Selected Work</p>
              <h2>Recent projects</h2>
              <p className="proMuted">Click any project to watch it with sound.</p>
            </div>
            <WorkGrid />
            <div className="proMoreWork">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proLink"
              >
                See more work on Instagram →
              </a>
            </div>
          </div>
        </section>

        <section className="proSection proSectionAlt" id="about">
          <div className="proContainer proAbout">
            <div>
              <p className="proEyebrow">About</p>
              <h2>Two years of making content people actually watch.</h2>
            </div>
            <div>
              <p>
                I’m a University of Waterloo student studying Statistics, and
                I’ve been working in videography and editing for the past two
                years. My experience ranges from restaurant content and real
                estate social media to podcast clips, boxing gym content, and
                serving as marketing lead for a fight show.
              </p>
              <p>
                I enjoy making content that feels polished, energetic, and
                intentional — whether that means building hype for an event or
                helping a brand look more professional online.
              </p>
              <dl className="proFacts">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.value}</dt>
                    <dd>{f.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="proSection" id="services">
          <div className="proContainer">
            <div className="proSectionHead">
              <p className="proEyebrow">Services</p>
              <h2>What I can do for you</h2>
            </div>
            <ol className="proServices">
              {services.map((s, i) => (
                <li key={s.title}>
                  <span className="proServiceNum">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="proSection proContact" id="contact">
          <div className="proContainer">
            <p className="proEyebrow">Contact</p>
            <h2>Have a project in mind?</h2>
            <p className="proMuted">
              Promotional videos, event content, reels, or an editor for your
              brand — let’s talk.
            </p>
            <div className="proHeroActions">
              <a href={`mailto:${contactEmail}`} className="proBtn proBtnPrimary">
                Email me
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proBtn proBtnGhost"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="proFooter">
        <div className="proContainer proFooterInner">
          <span>© 2026 Israfil Bhagwandass</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
