# Portfolio Design System

## Goal

Make the portfolio feel calm, editorial, trustworthy, and easy to maintain. The system should work in three modes:

1. Mock mode in Pencil for structure and direction.
2. Component mode in React for the live site.
3. Migration mode for a future full move from the current stack.

## Reusable Parts

### Core UI

- `SectionTitle`
- `ActionButton`
- `LabelChip`
- `Card`
- `QuoteCard`
- `MediaCard`
- `BookingCard`

### Icon Set

- `IconCalendar`
- `IconMic`
- `IconArticle`
- `IconChat`
- `IconPin`
- `IconPlay`
- `IconCard`
- `IconCheck`
- `PortfolioMark`
- `DividerWave`
- `PodcastWaveform`

### Content Patterns

- Hero with title, short descriptor, and one primary CTA.
- Services with `30分無料体験` and `60分商品` emphasized.
- Works with problem / action / result phrasing.
- Media with latest first, then guest episodes, then broad updates.
- Contact with calendar, payment, and messaging options in one place.

## Motion Spec

Keep motion subtle and useful.

- `Fade up` on section entry.
- `Tiny scale` on hover for cards and buttons.
- `Soft underline` or `bar fill` on active nav items.
- `Wave / divider` as a static brand detail, not a moving gimmick.
- `Podcast waveform` can pulse slowly only on featured episodes.

Recommended timings:

- Hover: 180ms to 220ms.
- Section reveal: 400ms to 600ms.
- Stagger between cards: 80ms to 120ms.

## Full Migration Plan

If the site is moved later, keep the current stack until the content model is ready.

### Step 1

- Keep the current site live.
- Add the new design system components.
- Use the icon set and card patterns in the current pages first.

### Step 2

- Move content into a stable CMS structure.
- Suggested content types:
  - `pages`
  - `works`
  - `media`
  - `radio_episodes`
  - `blog_posts`
  - `activities`
  - `faqs`

### Step 3

- Replace mock assets with real images.
- Keep layout and components unchanged.
- Only swap content, not the structure.

### Step 4

- If a future migration is needed, export the same components to the new site.
- Reuse the same icon set and motion spec.
- Keep the same naming for sections so content mapping stays simple.

## Use Rules

- Use the accent color only for action and emphasis.
- Use the same chip style everywhere.
- Keep cards mostly flat.
- Avoid overusing shadows.
- Prefer real content hierarchy over decorative effects.

