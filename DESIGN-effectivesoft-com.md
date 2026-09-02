---
name: EffectiveSoft
url: https://www.effectivesoft.com/
colors:
  primary: '#2258e7'
  primary-hover: '#183c9e'
  primary-light: '#e9eefd'
  background: '#ffffff'
  background-tint: '#f5f7fc'
  background-dark: '#001334'
  background-dark-alt: '#15171b'
  text-primary: '#121212'
  text-secondary: '#666e85'
  text-muted: '#475067'
  text-dark-on-light: '#3d4c65'
  text-inverse: '#ffffff'
  text-inverse-muted: '#e4e4e7'
  border: '#d0d3dd'
  border-active: '#2258e7'
  border-input: '#e4e4e7'
  link-hover: '#2258e7'
  dark-surface: '#0a1d3d'
  dark-text: '#ffffff'
  dark-text-muted: '#d0d3dd'
  dark-border: '#293956'
typography:
  display:
    family: 'Inter'
    size: 80px
    weight: 600
    line-height: 1.2
  heading:
    family: 'Inter'
    size: 36px
    weight: 600
    line-height: 1.2
  body:
    family: 'Inter'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Inter'
    size: 14px
    weight: 400
    line-height: 1.5
  button:
    family: 'Inter'
    size: 16px
    weight: 600
    line-height: 1.2
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
radius:
  sm: 0px
  md: 30px
  lg: 50px
  full: 100px
elevation:
  card: 'rgba(16, 24, 40, 0.05) 0px 1px 2px 0px'
  button-primary: 'rgb(34, 88, 231) 0px 2px 0px -1px'
  modal: 'rgba(0, 0, 0, 0.1) 0px 4px 30px 0px'
motion:
  duration-base: '0.3s'
  easing-standard: 'ease'
  easing-linear: 'linear'
layout:
  max-width: 1216px
  section-padding-x: 32px
  section-padding-y: 64px
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.sm}'
    padding: '12px 24px'
  card:
    bg: '{colors.background}'
    radius: '{radius.sm}'
    shadow: '{elevation.card}'
---

# Design System Inspired by EffectiveSoft

## 1. Visual Theme & Atmosphere

EffectiveSoft presents a professional and tech-forward aesthetic, primarily built upon a deep blue brand color (`#2258e7`) contrasted with clean white (`#ffffff`) and subtle light gray (`#f5f7fc`) backgrounds. The visual theme emphasizes clarity and robust engineering, using the sans-serif Inter font family throughout for strong hierarchy and readability. Darker sections, such as the hero and case study areas, leverage a rich `#001334` background with white text, creating a sense of depth and sophistication. The layout employs generous whitespace, particularly 64px vertical section padding, to ensure content breathability and focus.

The brand incorporates dynamic elements such as an autoplay video hero and subtle CSS keyframe animations, including `animated-cards` and `fadeAndShiftIn` effects, adding a modern and engaging layer to the user experience. Interactive elements like buttons and links utilize a `0.3s` transition duration for color and transform changes, providing smooth feedback on user interaction. Imagery consists of abstract blue digital landscapes and product screenshots, reinforcing the AI-enabled product engineering narrative.

Key Characteristics:
- Primary brand color: `#2258e7` for CTAs and highlights.
- Dominant typeface: Inter, with weights from 300 to 700.
- Clean backgrounds: `#ffffff` and `#f5f7fc` for main content.
- Dark theme sections: `#001334` with white text (`#ffffff`).
- Generous spacing: 64px vertical padding between sections.
- Subtle shadows: `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px` for cards.
- Interactive animations: `0.3s` transitions for hover states.
- Autoplay video: Engaging hero section with dynamic content.

## 2. Color Palette & Roles

-   **Primary**:
    -   `primary` (`#2258e7`) — The core brand blue, used for primary call-to-action buttons, interactive elements, and key brand accents.
    -   `primary-hover` (`#183c9e`) — A darker shade of blue, used for the hover state of primary interactive elements, providing clear feedback.
    -   `primary-light` (`#e9eefd`) — A very light blue, used for subtle backgrounds or active states in components like the uploader.

-   **Neutral Scale**:
    -   `background` (`#ffffff`) — The main page background color, providing a clean canvas for content.
    -   `background-tint` (`#f5f7fc`) — A very light gray-blue, used for subtle section backgrounds and secondary containers.
    -   `background-dark` (`#001334`) — A deep dark blue, used for hero sections, case study backgrounds, and other prominent dark areas.
    -   `background-dark-alt` (`#15171b`) — An alternative dark background, seen in the footer and for tooltips (`--tippy-bg-color`).
    -   `text-primary` (`#121212`) — The darkest text color, used for main headings and critical body content on light backgrounds.
    -   `text-secondary` (`#666e85`) — A medium gray, used for general body text and secondary information on light backgrounds.
    -   `text-muted` (`#475067`) — A slightly darker gray than `text-secondary`, used for less prominent text, captions, and default icons.
    -   `text-dark-on-light` (`#3d4c65`) — A dark gray, used for specific text elements on light backgrounds, offering good contrast.
    -   `text-inverse` (`#ffffff`) — White text, used on primary blue or dark backgrounds for maximum contrast.
    -   `text-inverse-muted` (`#e4e4e7`) — A very light gray, used for subtle text or borders on dark backgrounds.

-   **Surface & Borders**:
    -   `border` (`#d0d3dd`) — A light gray, used for subtle dividers and borders between elements.
    -   `border-active` (`#2258e7`) — The primary blue, used for active states of borders, such as focused input fields or active tags.
    -   `border-input` (`#e4e4e7`) — A very light gray, specifically used for input field borders.

-   **Interactive**:
    -   `link-hover` (`#2258e7`) — The primary blue, used for text link hover states.

-   **Dark Mode Pairing**:
    -   `dark-surface` (`#0a1d3d`) — A dark blue-gray, used as a background for cards or containers in dark themes.
    -   `dark-text` (`#ffffff`) — White text, used for primary text content on dark theme surfaces.
    -   `dark-text-muted` (`#d0d3dd`) — A light gray, used for muted text or secondary information on dark theme surfaces.
    -   `dark-border` (`#293956`) — A dark blue-gray, used for borders in dark theme contexts.

## 3. Typography Rules

-   **Font Family**: 'Inter', sans-serif, with a robust system fallback stack: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`. For code blocks, `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace` should be used.
-   **Hierarchy**:
    -   **Display**: `Inter` `80px` `600` · line-height `1.2` · tracking `none` · Used for the main hero headline, capturing immediate attention.
    -   **H1**: `Inter` `36px` `600` · line-height `1.2` · tracking `none` · Primary section titles, establishing key content areas.
    -   **H2**: `Inter` `30px` `600` · line-height `1.2` · tracking `none` · Secondary section titles, for sub-sections or feature headings.
    -   **H3**: `Inter` `24px` `600` · line-height `1.2` · tracking `none` · Used for smaller headings or prominent sub-points. (inferred from screenshot)
    -   **H4**: `Inter` `18px` `500` · line-height `1.5` · tracking `none` · Used for card titles or important labels. (inferred from screenshot)
    -   **Body**: `Inter` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text, ensuring readability across the site.
    -   **Caption**: `Inter` `14px` `400` · line-height `1.5` · tracking `none` · Used for meta-information, small text, or form hints.
    -   **Code/Mono**: `SFMono-Regular` `14px` `400` · line-height `1.6` · tracking `none` · For displaying code snippets or technical terms. (inferred)
-   **Principles**:
    -   Maintain a clear visual hierarchy by consistently applying `Inter` font weights 600 for headings and 400 for body text.
    -   Utilize the `80px` display size for hero sections to create a strong visual impact, paired with `text-inverse` (`#ffffff`).
    -   Ensure body text (`16px` `400`) has a `1.5` line height for optimal readability on both light and dark backgrounds.
    -   Use `text-secondary` (`#666e85`) for most body text on `background` (`#ffffff`) to provide a soft, approachable feel while maintaining AAA contrast.
    -   Apply `text-muted` (`#475067`) for supplementary information or captions to subtly de-emphasize content.

## 4. Component Stylings

### Buttons

EffectiveSoft buttons feature clear states for interaction, using the brand blue for primary actions and subtle styling for secondary and ghost variants. All buttons include a `0.3s ease` transition for smooth visual feedback.

#### Primary Button

A prominent blue button for key calls-to-action, featuring white text and a subtle shadow on its base state.

```css
.button-primary {
  background-color: var(--color-primary, #2258e7);
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-button-family, 'Inter');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 600);
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-sm, 0px);
  box-shadow: var(--elevation-button-primary, rgb(34, 88, 231) 0px 2px 0px -1px);
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease),
              box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #183c9e);
  box-shadow: none; /* inferred from screenshot */
  cursor: pointer;
}

.button-primary:active {
  background-color: var(--color-primary-hover, #183c9e); /* inferred from screenshot */
  box-shadow: none;
}

.button-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}
```

#### Secondary Button

A button with a transparent background and a primary blue border, used for secondary actions.

```css
.button-secondary {
  background-color: transparent;
  color: var(--color-primary, #2258e7);
  font-family: var(--typography-button-family, 'Inter');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 600);
  padding: 12px 24px;
  border: 1px solid var(--color-primary, #2258e7);
  border-radius: var(--radius-sm, 0px);
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease),
              color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.button-secondary:hover {
  background-color: var(--color-primary, #2258e7);
  color: var(--color-text-inverse, #ffffff);
  cursor: pointer;
}

.button-secondary:active {
  background-color: var(--color-primary-hover, #183c9e); /* inferred from screenshot */
  color: var(--color-text-inverse, #ffffff);
}

.button-secondary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  border-color: var(--color-border, #d0d3dd); /* inferred from screenshot */
  color: var(--color-text-secondary, #666e85); /* inferred from screenshot */
}
```

#### Ghost Button

A text-only button, often used within navigation or for less prominent actions, with a subtle hover effect.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-inverse, #ffffff); /* Used in header nav */
  font-family: var(--typography-button-family, 'Inter');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 400); /* Inferred from nav buttons */
  padding: 8px 6px; /* From extracted buttons */
  border: none;
  border-radius: var(--radius-sm, 0px);
  transition: color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease),
              opacity var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.button-ghost:hover {
  color: var(--color-primary, #2258e7); /* Inferred, based on general link hover */
  opacity: 0.8; /* From .wcc-btn:hover */
  cursor: pointer;
}

.button-ghost:active {
  color: var(--color-primary-hover, #183c9e); /* Inferred */
}

.button-ghost:disabled {
  color: var(--color-text-inverse-muted, #e4e4e7); /* From .btn-text:disabled */
  opacity: 0.4;
  cursor: not-allowed;
}
```

### Cards & Containers

Cards are used to display testimonials and feature highlights, characterized by a clean white background and a subtle shadow.

#### Standard Card

A basic card container with a light background and a soft shadow for subtle elevation.

```css
.card {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-secondary, #666e85);
  padding: 24px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #d0d3dd); /* inferred from screenshot */
  border-radius: var(--radius-sm, 0px);
  box-shadow: var(--elevation-card, rgba(16, 24, 40, 0.05) 0px 1px 2px 0px);
  transition: box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease),
              border-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.card:hover {
  box-shadow: var(--elevation-modal, rgba(0, 0, 0, 0.1) 0px 4px 30px 0px); /* inferred from screenshot, more pronounced hover */
  border-color: var(--color-primary, #2258e7); /* inferred from screenshot */
  transform: translateY(-2px); /* inferred from screenshot */
}
```

### Inputs & Forms

Form elements are designed for clarity and ease of use, with simple borders and clear focus states.

#### Text Input

Standard text input field with a light border, clear text, and a distinct focus ring.

```css
.input-text {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #121212);
  font-family: var(--typography-body-family, 'Inter');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-border-input, #e4e4e7);
  border-radius: var(--radius-sm, 0px);
  transition: border-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease),
              box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.input-text::placeholder {
  color: var(--color-text-muted, #475067);
}

.input-text:focus {
  border-color: var(--color-primary, #2258e7);
  outline: 2px solid var(--color-primary, #2258e7); /* inferred from screenshot */
  outline-offset: 2px; /* inferred from screenshot */
  box-shadow: 0 0 0 1px var(--color-primary, #2258e7); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--color-background-tint, #f5f7fc); /* inferred from screenshot */
  color: var(--color-text-muted, #475067);
  border-color: var(--color-border, #d0d3dd);
  cursor: not-allowed;
}
```

#### Form Label

Labels are typically dark and positioned above their respective input fields.

```css
.form-label {
  color: var(--color-text-primary, #121212);
  font-family: var(--typography-body-family, 'Inter');
  font-size: var(--typography-caption-size, 14px); /* inferred from screenshot */
  font-weight: var(--typography-body-weight, 400);
  margin-bottom: 8px; /* inferred from screenshot */
  display: block;
}
```

#### Checkbox/Radio

Custom styled checkboxes and radios for consistent appearance.

```css
.checkbox-container {
  display: inline-flex;
  align-items: center;
  gap: 8px; /* inferred from screenshot */
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.checkbox-input {
  appearance: none;
  -webkit-appearance: none;
  width: 18px; /* inferred from screenshot */
  height: 18px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #d0d3dd);
  border-radius: 2px; /* inferred from screenshot */
  background-color: var(--color-background, #ffffff);
  display: grid;
  place-content: center;
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease),
              border-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.checkbox-input::before {
  content: "";
  width: 10px; /* inferred from screenshot */
  height: 10px; /* inferred from screenshot */
  transform: scale(0);
  transition: transform var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
  box-shadow: inset 1em 1em var(--color-text-inverse, #ffffff);
  background-color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%); /* inferred from screenshot */
}

.checkbox-input:checked {
  background-color: rgb(24, 99, 220); /* from .wcc-switch input[type="checkbox"]:checked */
  border-color: rgb(24, 99, 220);
}

.checkbox-input:checked::before {
  transform: scale(1);
}

.checkbox-input:focus-visible {
  outline: 2px solid var(--color-primary, #2258e7); /* inferred from screenshot */
  outline-offset: 2px; /* inferred from screenshot */
}
```

### Navigation

The top navigation bar provides clear links and a call-to-action, with smooth hover effects.

#### Top Navigation Bar

The main header navigation, featuring the logo, primary links, and a call-to-action button.

```css
.navigation-bar {
  background-color: var(--color-background-dark, #001334); /* inferred from screenshot */
  color: var(--color-text-inverse, #ffffff);
  padding: 16px var(--layout-section-padding-x, 32px); /* inferred from screenshot */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9; /* From elevation.zIndexValues */
}
```

#### Navigation Link

Individual links within the navigation bar, with a subtle hover effect and an active state.

```css
.navigation-link {
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Inter');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 8px 12px; /* inferred from screenshot */
  text-decoration: none;
  transition: color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.navigation-link:hover {
  color: var(--color-link-hover, #2258e7); /* From link-hover-color */
  text-decoration: none; /* inferred from screenshot */
}

.navigation-link:active,
.navigation-link[aria-current="page"] {
  color: var(--color-primary, #2258e7); /* inferred from screenshot */
  font-weight: var(--typography-body-weight, 500); /* inferred from screenshot */
}

.navigation-link:visited {
  color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
}
```

#### Dropdown Menu

Dropdown menus appear on hover for navigation items, providing additional links.

```css
.dropdown-menu {
  background-color: var(--color-background-dark, #001334); /* inferred from screenshot */
  color: var(--color-text-inverse, #ffffff);
  border-radius: var(--radius-sm, 0px); /* inferred from screenshot */
  box-shadow: var(--elevation-modal, rgba(0, 0, 0, 0.1) 0px 4px 30px 0px); /* inferred from screenshot */
  padding: 16px 0; /* inferred from screenshot */
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px; /* inferred from screenshot */
  display: none; /* Hidden by default */
  opacity: 0;
  transform: translateY(10px);
  transition: opacity var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease),
              transform var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
  z-index: 10; /* inferred from screenshot */
}

.navigation-item:hover > .dropdown-menu {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.dropdown-menu-item {
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Inter');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 10px 20px; /* inferred from screenshot */
  display: block;
  text-decoration: none;
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease),
              color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.dropdown-menu-item:hover {
  background-color: var(--dark-surface, #0a1d3d); /* inferred from screenshot */
  color: var(--color-primary, #2258e7); /* inferred from screenshot */
}
```

### Links

Standard text links are underlined and change color on hover, while secondary links may have a different styling.

#### Standard Link

Default text links, typically within body copy, that change color on hover.

```css
.link-standard {
  color: var(--color-primary, #2258e7); /* From a:hover color */
  text-decoration: underline;
  font-family: var(--typography-body-family, 'Inter');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  transition: color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.link-standard:hover {
  color: var(--color-primary-hover, #183c9e); /* inferred from screenshot */
  text-decoration: none; /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--color-primary, #2258e7); /* inferred from screenshot */
}
```

#### Secondary Link

Links used for less prominent actions or within dark sections, often without an underline.

```css
.link-secondary {
  color: var(--color-text-secondary, #666e85);
  text-decoration: none;
  font-family: var(--typography-body-family, 'Inter');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  transition: color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.link-secondary:hover {
  color: var(--color-link-hover, #2258e7); /* From link-hover-color */
  text-decoration: underline; /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--color-text-secondary, #666e85); /* inferred from screenshot */
}
```

### Badges

(none observed in source)

## 5. Layout Principles

-   **Spacing System**: The EffectiveSoft design system uses a `4px` base unit, creating a consistent rhythm across the interface.
    -   Scale: `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]`
    -   Usage Context:
        -   `4px`: Micro-spacing, e.g., between icons and text.
        -   `8px`: Small element spacing, e.g., between form labels and inputs, list items.
        -   `12px`: Padding within smaller components, e.g., button horizontal padding.
        -   `16px`: Standard paragraph margins, padding for small cards, vertical spacing in lists.
        -   `20px`: Moderate spacing, e.g., between distinct form groups.
        -   `24px`: Component padding, e.g., inside cards, vertical spacing between content blocks.
        -   `32px`: Section horizontal padding (`--section-left`), spacing between major content elements.
        -   `40px`: Larger component separation.
        -   `48px`: Significant vertical spacing.
        -   `64px`: Large section vertical padding (`--section-bottom`), major content block separation.
-   **Grid & Container** *(Suggested — not measured)*: _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max width: `1216px` (derived from `--s-max-inner-width: 76rem`).
    -   Columns: 12-column flexible grid (inferred from common practice).
    -   Gutter: `24px` (inferred from visual spacing).
    -   Section padding: `64px` vertical, `32px` horizontal.
-   **Whitespace Philosophy**: EffectiveSoft leverages ample whitespace to create a clean, organized, and breathable layout. Significant padding and margins around elements, particularly the `64px` vertical section padding, prevent visual clutter and guide the user's eye through content. This approach emphasizes key information and interactive elements, contributing to a professional and focused user experience.
-   **Border Radius Scale**:
    -   `sm` (`0px`): Used for buttons, input fields, and standard cards, emphasizing a crisp, modern, and precise aesthetic.
    -   `md` (`30px`): Used for tags or specific UI elements where a slightly softer edge is desired.
    -   `lg` (`50px`): Observed on some larger interactive elements or containers, providing a more rounded, distinct shape.
    -   `full` (`100px`): Used for highly rounded elements, such as pills or circular avatars (not explicitly seen but a logical extension of the scale).

## 6. Depth & Elevation

EffectiveSoft uses shadows sparingly to provide subtle depth and indicate interactivity, maintaining a generally flat design aesthetic.

-   **Flat (z-0)**: `none` — Used for most static background elements and default states of inputs.
-   **Card (z-1)**: `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px` — Used for standard cards and subtle UI elements to provide a slight lift from the background.
-   **Button Primary (z-4)**: `rgb(34, 88, 231) 0px 2px 0px -1px` — A distinct shadow for primary buttons, creating a pressed effect.
-   **Hover (z-5)**: `rgba(0, 0, 0, 0.1) 0px 4px 30px 0px` — A more pronounced shadow for interactive elements like cards on hover, indicating elevated focus.
-   **Navigation (z-9)**: `none` — The fixed header navigation bar has a high z-index to stay above content, but does not cast a shadow itself.
-   **Modal (z-10)**: `rgba(0, 0, 0, 0.1) 0px 4px 30px 0px` — Used for modals or dropdowns to ensure they appear above all other content. (inferred, shares shadow with hover)

Shadow Philosophy: Shadows are primarily functional, used to denote interactive states or to subtly separate content blocks. The system avoids heavy, multi-layered shadows, opting instead for single, soft shadows to maintain a clean and modern interface. The distinct `button-primary` shadow provides tactile feedback for key actions.

## 7. Do's and Don'ts

### Do's

-   **Do** use `primary` (`#2258e7`) for all main calls-to-action, such as the "Send request" button.
-   **Do** ensure body text on light backgrounds uses `text-secondary` (`#666e85`) on `background` (`#ffffff`), which has a 7.5:1 ratio (AAA).
-   **Do** maintain `0px` border-radius for buttons and input fields to align with the sharp, modern aesthetic.
-   **Do** use `Inter` font family with `600` weight for all headings to establish clear hierarchy.
-   **Do** apply `64px` vertical spacing between major content sections to provide sufficient breathing room.
-   **Do** use `text-inverse` (`#ffffff`) for all text elements on `background-dark` (`#001334`) to ensure a 17:1 contrast ratio (AAA).
-   **Do** implement `0.3s ease` transitions for all interactive elements like links and buttons for smooth feedback.
-   **Do** ensure that `text-primary` (`#121212`) on `background` (`#ffffff`) maintains its 18.73:1 contrast ratio (AAA).
-   **Do** use `background-tint` (`#f5f7fc`) for subtle background differentiation, ensuring `text-muted` (`#475067`) on it passes AAA (7.5:1).

### Don'ts

-   **Don't** use `text-muted` (`#475067`) on `background-tint` (`#f5f7fc`) for critical information, as it provides a minimal 7.5:1 contrast ratio.
-   **Don't** introduce custom spacing values; adhere strictly to the `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]` spacing scale.
-   **Don't** use any font other than `Inter` for primary content or headings.
-   **Don't** apply rounded corners greater than `0px` to primary buttons, as they are designed with `radius.sm`.
-   **Don't** use `background-dark-alt` (`#15171b`) as a primary background; it's reserved for specific dark contexts like tooltips.
-   **Don't** omit the `0.3s` transition duration on hover states for interactive elements.
-   **Don't** use `text-secondary` (`#666e85`) on `background-tint` (`#f5f7fc`) as it could approach insufficient contrast for smaller text.
-   **Don't** use a shadow other than `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px` for standard cards.

## 8. Responsive Behavior *(Suggested — not measured)*

_Note: breakpoints below are industry-standard recommendations, not measurements from the source. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~352px): Adjust typography, stack elements vertically, hide secondary navigation.
    -   **Mobile Large** (~425px): Optimize card layouts, simplify form inputs.
    -   **Tablet** (~576px): Adjust grid columns, enable horizontal scrolling for complex tables.
    -   **Tablet Landscape** (~767px): Refine navigation for larger touch targets, expand content areas.
    -   **Desktop** (~1000px): Full desktop layout, multi-column grids.
    -   **Desktop Large** (~1200px): Maximize content width, fine-tune whitespace.
-   **Touch Targets**:
    -   Ensure all interactive elements, especially buttons and links, have a minimum touch target size of `44px` by `44px` (inferred).
    -   Maintain at least `8px` of clear space between touch targets to prevent accidental taps (inferred).
-   **Collapsing Strategy**:
    -   Navigation: Collapse `header-nav` links into a hamburger menu on screens smaller than `768px`.
    -   Cards: Stack cards vertically on mobile, transitioning from multi-column layouts.
    -   Typography: Scale down display and heading font sizes (e.g., `80px` to `48px`, `36px` to `28px`) on smaller viewports.
    -   Padding: Reduce horizontal section padding from `32px` to `16px` on mobile.
    -   Forms: Stack form labels above inputs and expand inputs to full width on mobile.
    -   Spacing: Condense larger spacing values (e.g., `64px` to `32px`) on mobile to optimize screen real estate.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   `primary`: `#2258e7`
    -   `primary-hover`: `#183c9e`
    -   `primary-light`: `#e9eefd`
    -   `background`: `#ffffff`
    -   `background-tint`: `#f5f7fc`
    -   `background-dark`: `#001334`
    -   `background-dark-alt`: `#15171b`
    -   `text-primary`: `#121212`
    -   `text-secondary`: `#666e85`
    -   `text-muted`: `#475067`
    -   `text-dark-on-light`: `#3d4c65`
    -   `text-inverse`: `#ffffff`
    -   `text-inverse-muted`: `#e4e4e7`
    -   `border`: `#d0d3dd`
    -   `border-active`: `#2258e7`
    -   `border-input`: `#e4e4e7`
    -   `link-hover`: `#2258e7`
    -   `dark-surface`: `#0a1d3d`
    -   `dark-text`: `#ffffff`
    -   `dark-text-muted`: `#d0d3dd`
    -   `dark-border`: `#293956`
-   **Iteration Guide**:
    1.  Always use `primary` (`#2258e7`) for main CTA buttons and interactive elements.
    2.  Ensure all text uses the `Inter` font family.
    3.  Set base body text to `16px` `400` with `1.5` line height.
    4.  Apply `0px` border-radius to all buttons and input fields.
    5.  Use spacing values from the `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]` scale for all layout and component spacing.
    6.  Implement `0.3s ease` transitions for all color, background, and transform changes on interactive elements.
    7.  Standard cards should have `background` (`#ffffff`), `0px` border-radius, and `elevation.card` shadow.
    8.  Ensure input fields have a `1px` `border-input` (`#e4e4e7`) border and a `2px` `primary` (`#2258e7`) outline on `:focus`.
    9.  Navigation links should be `text-inverse` (`#ffffff`) on dark backgrounds and `link-hover` (`#2258e7`) on hover.
    10. Maintain a minimum contrast ratio of 7.5:1 (AAA) for `text-secondary` (`#666e85`) on `background` (`#ffffff`).
    11. Implement responsive adjustments at `767px` for navigation and `576px` for card layouts.
    12. Use `background-dark` (`#001334`) with `text-inverse` (`#ffffff`) for hero sections and prominent dark content areas.