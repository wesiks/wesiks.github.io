# DESIGN.md — wesiks portfolio

## World: «тихая меланхолия» (quiet melancholy)

Dark, spacious, film-grained, editorial. Nothing shouts. The page breathes — sections drift apart, text is fog-gray on near-black, one faded accent. The mood the owner asked for: «депрессивное, больше воздуха».

## Tokens

```css
--bg: #0E0F12;          /* near-black, blue-gray tint */
--surface: #14161B;     /* cards, raised blocks */
--text: #A6A9B0;        /* fog — primary text */
--muted: #5E626B;       /* labels, meta, whispers */
--accent: #94A3BD;      /* faded blue — links, active states */
--line: rgba(166,169,176,.14);  /* hairlines */
--serif: 'Instrument Serif', Georgia, serif;   /* italic accents, display */
--sans:  'Inter', system-ui, sans-serif;       /* body, 300/400 */
```

## Typography
- Display (name, section quotes): Instrument Serif **italic**, large
- Body: Inter Light 300 / Regular 400, relaxed line-height (1.75)
- Labels/meta: Inter, 11–12px, uppercase, letter-spacing 0.18em, color `--muted`
- Type scale via clamp(); body 15–17px, display clamp(56px, 12vw, 128px)

## Space
- Content column: 680px, centered
- Section spacing: ≥ 80vh of quiet between blocks
- Vertical rhythm inside sections: 96–160px
- Hairline separators, index numbers (01–04), corner marks — journal feel

## Color rules
- No saturated colors. Ever. Accent used only for links, focus, active lang
- **Project accents (user request, 2026-10-01):** each work in the projects list carries its own muted hue `--pa` — voice `#8FB3D9` (dusty blue), caser `#AB9BCB` (smoky violet), battle `#85B3A2` (sage), musor `#C79C8C` (warm rust). Visible at rest on the project link and meta line; on hover the project name, hairline, and a faint radial wash join. Chosen to stay inside the fog world while giving each row an identity
- Text on bg contrast ≥ 4.5:1 (fog on near-black passes; all four project hues pass)
- Gradients banned except the hover wash (functional, per-project identity) and the hero mist

## Motion
- Appearances: opacity 0→1 + blur(10px)→0, 1.1s ease-out, staggered 90ms
- Trigger: IntersectionObserver, once
- Hover: hairline brightens, title shifts 2px, link underline draws slowly — nothing bouncy
- `prefers-reduced-motion: reduce` → all transitions off, content visible

## Texture
- Film grain: SVG feTurbulence, fixed overlay, opacity 0.03, pointer-events none

## Language toggle
- Top-right, minimal: `RU / EN` — active language in `--text`, inactive in `--muted`
- Swap without reload; RU is the no-JS truth in markup

## Bans
- No emoji, no gradients, no glassmorphism, no glow, no big rounded corners (radius ≤ 4px), no carousels, no scroll-jacking, no autoplay
