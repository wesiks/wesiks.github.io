# PRODUCT.md — wesiks portfolio

## What this is
Personal one-page portfolio site for **wesiks**, a developer of small desktop utilities (Python, C#). Static site: `index.html` + `styles.css` + `main.js`. No build step, no dependencies. Hosted on GitHub Pages later.

## Audience
Recruiters, other developers, the developer himself. Russian-speaking by default, English available via toggle.

## Surfaces
- Single page: `index.html`
  - Mode: **Experience** — the work leads, the interface recedes
  - Sections: hero → 4 projects → about/stack → contacts

## Languages & i18n
- RU is the default and the no-JS fallback (RU text lives directly in the HTML)
- EN via `data-en` attributes swapped by JS
- Language choice persisted in `localStorage('lang')`, `<html lang>` kept in sync

## Content truth (source: GitHub API, 2026-10-01)
- Bio: "4myself"
- Repos:
  1. **VoiceTyping** (Python, 2026) — голосовой ввод для Windows с живой пунктуацией и плавающим HUD — github.com/wesiks/VoiceTyping
  2. **Caser.One Helper** (C#, 2026) — десктопный монитор и скоринг дропов caser.one — github.com/wesiks/caser-one-helper
  3. **Case Battle Helper** (C#, 2026) — мониторинг и скоринг дропов case-battle.ac — github.com/wesiks/case-battle-helper
  4. **Musor Drop Helper** (C#, 2026) — тихий помощник для охоты за дропами — github.com/wesiks/musor-drop-helper
- Contacts: GitHub only for now (email/Telegram to be added by user later)

## Non-goals
Blog, CMS, analytics, contact forms, web fonts beyond two families, JS frameworks.
