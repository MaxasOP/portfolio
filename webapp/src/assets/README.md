Place pixel-art assets here for the Super Maxas theme.

Expected filenames (used at runtime):
- `clouds.png` — repeating cloud tile or large cloud artwork
- `flag.png` — level-end flag image (see provided attachment)
- `hero.png` — player/hero sprite (optional; used in scene preview)

Drop your PNGs (prefer power-of-two sizes or exact pixel sizes) into this folder.
Vite dev server will serve them at `/src/assets/<name>` so Scene loads them dynamically.

Guidance:
- Use small images (e.g., 128–512px) and enable nearest-neighbor scaling in CSS (`image-rendering: pixelated`).
- If you upload images here I will automatically wire them into the scene.
