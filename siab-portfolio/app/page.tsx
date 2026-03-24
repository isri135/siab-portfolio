const videoProjects = [
  {
    title: "Fight Show Promo",
    category: "Event Videography",
    description:
      "Promotional content created to build hype and drive attention for a live boxing event.",
    src: "/videos/fight-show-promo.mp4",
    poster: "/thumbnails/fight-show-promo.jpg",
    instagramUrl: "https://www.instagram.com/reel/DP2OUsYDY29/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    colorClass: "previewCard1",
    orientation: "vertical",
  },
  {
    title: "Restaurant Reel",
    category: "Food / Social Media",
    description:
      "Short-form visual content designed for social media marketing and brand presence.",
    src: "/videos/restaurant-reel.mp4",
    poster: "/thumbnails/restaurant-reel.jpg",
    instagramUrl: "https://www.instagram.com/reel/DWMO61LAM3I/?utm_source=ig_web_copy_link",
    colorClass: "previewCard2",
    orientation: "horizontal",
  },
  {
    title: "Podcast Clip",
    category: "Editing / Reels",
    description:
      "Edited short-form clips built for engagement, retention, and shareable storytelling.",
    src: "/videos/podcast-clip.mp4",
    poster: "/thumbnails/podcast-clip.jpg",
    instagramUrl: "https://www.instagram.com/reel/DMoD38xuHY-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    colorClass: "previewCard3",
    orientation: "vertical",
  },
];

// const instagramPosts = [
//   {
//     title: "Fight Show Content",
//     link: "https://www.instagram.com/reel/DP2OUsYDY29/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
//   },
//   {
//     title: "Restaurant Reel",
//     link: "https://www.instagram.com/reel/DWMO61LAM3I/?utm_source=ig_web_copy_link",
//   },
//   {
//     title: "Podcast Clip",
//     link: "https://www.instagram.com/reel/DMoD38xuHY-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
//   },
// ];

export default function HomePage() {
  return (
    <main className="landing">
      <section className="heroSection">
        <div className="heroDecor heroDecorLeft">✦</div>
        <div className="heroDecor heroDecorRight">✦</div>

        <p className="heroKicker">Videographer / Editor</p>

        <h1 className="heroTitle">
          Hi. I’m Israfil.
          <br />I Create Videos.
        </h1>

        <p className="heroSubtitle">
          I create engaging visual content for events, brands, sports, and
          social media — with a focus on storytelling, clean editing, and
          content that actually grabs attention.
        </p>

        <div className="heroActions">
          <a href="#work" className="btnPrimary">
            See Some Of My Work
          </a>
          <a href="#instagram" className="btnSecondary">
            Instagram (For More Work)
          </a>
        </div>
      </section>

      <section className="videoShowcase" id="work">
        {videoProjects.map((item) => (
          <article key={item.title} className={`videoCard ${item.colorClass}`}>
            <div className="videoFrame">
              <video
                className={`portfolioVideo ${
                  item.orientation === "horizontal"
                    ? "horizontalVideo"
                    : "verticalVideo"
                }`}
                controls
                preload="metadata"
                playsInline
                poster={item.poster}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="videoCardContent">
              <p className="cardEyebrow">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="videoLinks">
                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btnPrimary"
                >
                  View on Instagram
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="contentSection" id="about">
        <div className="sectionIntro">
          <p className="sectionLabel">About</p>
          <h2>Who I Am</h2>
        </div>

        <div className="softPanel">
          <p>
            I’m a University of Waterloo student studying Statistics, and I’ve
            been working in videography and editing for the past two years. My
            experience has ranged from restaurant content and real estate social
            media to podcast clips, boxing gym content, and being the marketing
            lead for a fight show.
          </p>
          <p>
            I enjoy making content that feels polished, energetic, and
            intentional — whether that means building hype for an event or
            helping a brand look more professional online.
          </p>
        </div>
      </section>

      <section className="contentSection" id="play">
        <div className="sectionIntro">
          <p className="sectionLabel">Services</p>
          <h2>What I Do</h2>
        </div>

        <div className="threeColGrid">
          <div className="softPanel smallPanel">
            <h3>Videography</h3>
            <p>
              Event coverage, promo shoots, gym content, food content, and
              brand-focused visuals.
            </p>
          </div>

          <div className="softPanel smallPanel">
            <h3>Editing</h3>
            <p>
              Short-form reels, social clips, highlight edits, and clean
              storytelling with strong pacing.
            </p>
          </div>

          <div className="softPanel smallPanel">
            <h3>Creative Direction</h3>
            <p>
              Helping shape the feel, style, and presentation of content so it
              stands out online.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="contentSection" id="instagram">
        <div className="sectionIntro">
          <p className="sectionLabel">Instagram</p>
          <h2>More Work Lives Here</h2>
        </div>

        <div className="instagramIntro softPanel">
          <p>
            Most of my latest videography work, reels, event coverage, and
            editing projects are shared on Instagram. Visit my page to see more
            of my recent content and exact featured videos.
          </p>
          <a
            href="https://www.instagram.com/siab.__/"
            target="_blank"
            rel="noopener noreferrer"
            className="btnPrimary"
          >
            Visit My Instagram
          </a>
        </div>

        <div className="instagramGrid">
          {instagramPosts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="instagramCard"
            >
              <div className="instagramThumb">IG</div>
              <h3>{post.title}</h3>
              <p>Open this exact post on Instagram</p>
            </a>
          ))}
        </div>
      </section> */}

      <section className="contentSection" id="contact">
        <div className="sectionIntro">
          <p className="sectionLabel">Contact</p>
          <h2>Let’s Work Together</h2>
        </div>

        <div className="softPanel contactPanel">
          <p>
            Need promotional videos, event content, reels, or an editor for
            your brand?
          </p>
          <a href="mailto:your@email.com" className="btnPrimary">
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}