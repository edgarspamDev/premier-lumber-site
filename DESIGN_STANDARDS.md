# Premier Lumber Design Standards (UI/UX Pro Max)

> **Philosophy**: Mobile-first, Utilitarian, Trust-Building. No generic templates. Every pixel justifies its existence.

## 1. Mobile Design Commitment (Protocol)

**Project**: Premier Lumber (Service/Utility)
**Context**: Industrial/Local Service. Users are often on-site, outdoors, or in a hurry.

- **Primary Anti-Pattern**: NO generic hero carousels. NO hidden "hamburger-only" navigation for critical actions.
- **Context Focus**: Thumb-accessible "Call Now" and "Get Directions" buttons are the priority actions.
- **Platform Difference**: iOS uses system fonts/behaviors; Android uses Material-aligned spacing where appropriate (implemented via utility classes).
- **Performance**: Zero layout shift (CLS 0). Critical images (Hero) priority loaded.

## 2. Visual Theme & Atmosphere

- **Atmosphere**: Grounded, Industrial, Reliable. "Work-site clean."
- **Density**: High-utility. Large touch targets, concise text. Not "airy" for the sake of art, but spacious for readability.
- **Shadows**: `shadow-sm` ("Subtle lift") for cards; `shadow-lg` ("distinct elevation") only for sticky headers/modals.

## 3. Color Palette (Semantic)

- **Primary Action (Orange)**: `#EA580C` (orange-600) -> Used for "Get Quote", "Call Now". High urgency.
- **Brand Identity (Brown/Wood)**: `#78350F` (amber-900) -> Used for "Premier Lumber" branding, borders.
- **Neutral Surface (White/Stone)**: `#FAFAF9` (stone-50) -> Backgrounds. Warm grey, not sterile blue-white.
- **Text (Charcoal)**: `#1C1917` (stone-900) -> Primary text. Maximum readability.
- **Muted Text (Earth Grey)**: `#57534E` (stone-600) -> Secondary info (hours, addresses).

## 4. Component Rules (Strict)

### Buttons & Touch Targets

- **Minimum Size**: 44x44px physical touch area for ALL interactive elements.
- **Thumb Zone**: Primary CTAs (Quote, Call) must be reachable in the lower 2/3rds of the viewport on mobile.
- **Feedback**: Active states (`active:scale-95`) mandatory for touch responsiveness feel.

### Cards (Product/Service)

- **Structure**: Image top, Title heavy, Action bottom.
- **Safety**: No "hover-to-reveal". Information must be visible by default on touch screens.
- **Containers**: `rounded-xl` ("Friendly industrial"). `border border-stone-200`.

### Typography

- **Headings**: `font-extrabold` (Inter/System). Tight line-height (`leading-tight`).
- **Body**: `tex-base` (16px) minimum for mobile readability. No 14px text for critical info.

## 5. Anti-Memorization (Forbidden Patterns)

- 🚫 **Scroll Jacking**: Never hijack native scroll.
- 🚫 **Tiny Close Buttons**: Modals must have large, easily tappable close areas.
- 🚫 **Mystery Meat Navigation**: Icons without labels (except universally known ones like 'Menu' or 'Search').
- 🚫 **Text Over Images**: Must use overlay protection (`bg-black/50`) or sufficient contrast check.

---

_Verified against Deep Mobile Thinking Protocol & Stitch Semantic Design System_
