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
- `email`: your real email address
- `sheetEndpoint`: your Google Apps Script Web app URL, so enquiries land in a Google Sheet. Setup steps: `../google-sheets/SETUP.md`
- `calendlyUrl`: optional, adds a "Book a 15-min call" button

## Things to edit in `index.html`
- The stats strip (use real numbers only)
- Services cards (Brand Films, Commercials, Events) in the `#services` section; each "Inquire" button pre-selects that type in the form
- Type-specific form questions live in the `<fieldset class="type-fields">` blocks; date label wording is in `TYPES` in `main.js`
- Budget ranges in the form, plus the currency
- About text, the "[your area]" line in the FAQ, and your social handles

## Hosting (free)
Drag the folder into [Netlify Drop](https://app.netlify.com/drop), or push it to GitHub and connect it to Netlify, Vercel or Cloudflare Pages. Then point your domain at it.
