# SIABfilms website

A static site with no build step. Open `index.html` in a browser to preview it.

## Adding your videos
1. Put video files in `videos/` and thumbnails in `assets/thumbs/`.
2. Open `main.js` and edit the `WORK` list at the top. For each project you can either:
   - set `src` to a local file such as `"videos/fight-night.mp4"`, which also plays on hover, or
   - set `embed` to a YouTube or Vimeo link, which is better for long or heavy files.
3. Set `format` to `"vertical"` for reels or `"wide"` for 16:9 films.
4. When the kitchen gimbal, dolly zoom and vlog pieces are ready, remove `soon: true` from them.

## What's already in (from Desktop\Portolio)
- **Videos** (`videos/`), compressed to web H.264, 14–17MB each:
  - Fitz Ward 5 documentary
  - Sevon Shores café ad
  - Fight Show teaser
  - Podcast fight promo
  - 2 boxing edits
  - Pancakes
- **Hero loops**: `hero-loop.mp4` (16:9, desktop) and `hero-loop-vertical.mp4` (9:16, phones). Both are muted montages cut from the videos above. Replace them with a real showreel when you have one.
- **Posters** (`assets/thumbs/`): frames picked from each video.
- **Stills** (`assets/photos/`): food, automotive and street photos, resized to 1800px. Edit the `PHOTOS` list in `main.js` to add or remove photos.
- Your original files were not changed.

## Files to add
| File | What it is |
|---|---|
| `videos/showreel.mp4` | Muted hero background loop. Aim for 20–40s and under 8MB. |
| `assets/hero-poster.jpg` | Frame shown before the hero video loads |
| `assets/reel-poster.jpg` | Thumbnail for the showreel |
| `assets/campaign-poster.jpg` | Thumbnail for the case study |
| `assets/portrait.jpg` | Your photo for the About section |
| `assets/og.jpg` | 1200×630 image used for link previews |

## Things to set in `main.js` → `SETTINGS`
- `email`: shown on the site, and used if the form can't send
- `sheetEndpoint`: your Google Apps Script Web app URL, so enquiries land in a Google Sheet. Setup steps: `../google-sheets/SETUP.md`
- `calendlyUrl`: optional, adds a "Book a 15-min call" button

## How the page is laid out
Hero → client names → Work → case study → Stills → About → Contact. The site does two jobs: show the work and make it easy to get in touch.

- Work items with `soon: true` are hidden until you give them a video.
- Add `assets/portrait.jpg` and the About section will show it. Without a photo, the About text spans the full width.
- Contact links (email, Instagram, X) are in the `#contact` section of `index.html`.

## Hosting (free)
Drag the folder into [Netlify Drop](https://app.netlify.com/drop), or push it to GitHub and connect it to Netlify, Vercel or Cloudflare Pages. Then point your domain at it.
