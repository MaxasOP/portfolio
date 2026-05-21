# TODO - Mobile seamlessness & design/animation consistency

## Step 1 — Fix invalid CSS syntax (critical)
- [x] Convert SCSS-like nesting in `webapp/src/App.css` into valid plain CSS.
- [x] Ensure hover/focus and pseudo-elements selectors render correctly.


## Step 2 — Add/normalize global animation baseline
- [x] Add `.reveal` / `.visible` styles (opacity/transform) to a global stylesheet (likely `webapp/src/index.css`), with `prefers-reduced-motion` support.


## Step 3 — Mobile overflow safety
- [x] Update `webapp/src/index.css` to prevent horizontal overflow (e.g. `overflow-x:hidden`) and ensure `#root` is fully responsive.


## Step 4 — Mobile-safe interaction logic
- [x] Update `webapp/src/lib/super-maxas.js` to disable mousemove tilt effects on touch/coarse pointer devices.



## Step 5 — Minimal mobile nav styling (if needed)
- [ ] If nav open/close styling is missing, add the required CSS for `#navLinks.open` / mobile layout.

## Step 6 — Verification
- [x] Run `cd webapp && npm run build` to catch CSS parse errors.
- [ ] Manually verify in dev server: iPhone/Android widths, nav menu, reveal visibility, no tilt jank.


