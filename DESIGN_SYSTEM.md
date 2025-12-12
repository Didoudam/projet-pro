# Design System - Teenage Engineering Inspired

## 🎨 Inspiration
- **Sony Mavica** - Vintage digital camera aesthetic (beige, technical patterns)
- **Sony Discman** - Professional audio equipment UI (dark mode, orange accents)
- **Discord Checkpoint** - Modern wireframe 3D (neon pink, pixelated numbers)
- **Teenage Engineering** - Minimalist brutalism meets playful design

---

## 🎯 Design Principles

### 1. **Technical Brutalism**
- Sharp edges, no rounded corners (border-radius: 0)
- Visible borders (2px solid)
- Grid and barcode patterns
- Blueprint/circuit board aesthetic

### 2. **Monospace Typography**
- Use `font-mono` for stats, numbers, labels
- Uppercase text with wide tracking (tracking-wider)
- Tabular numbers for alignment

### 3. **Bold Shadows**
- Offset shadows (4px/4px) instead of blur
- Interactive elements "pop" with shadow reduction on hover
- LCD-style inset highlights

### 4. **Vibrant Accents**
- Primary: Orange (#ff6b00 / #ff7a1a dark)
- Secondary: Blue LCD (#0066ff / #3388ff dark)
- Accent: Neon Pink (#ff1493)
- Success: Bright Green (#00ff88)

---

## 🎨 Color Palette

### Light Mode (Sony Mavica inspired)
```css
Background:    #f5f1e8  /* Beige crème */
Foreground:    #0a0a0a  /* Noir profond */
Card:          #ffffff  /* Blanc */
Border:        #2a2826  /* Brun foncé */
Muted:         #d4cfc4  /* Beige gris */
```

### Dark Mode (Sony Discman inspired)
```css
Background:    #0a0a0a  /* Noir profond */
Foreground:    #f5f1e8  /* Beige clair */
Card:          #141414  /* Gris très foncé */
Border:        #2a2826  /* Brun foncé */
Muted:         #1a1a1a  /* Gris foncé */
```

### Accents (Both modes)
```css
Primary:       #ff6b00 (light) / #ff7a1a (dark)  /* Orange vif */
Secondary:     #0066ff (light) / #3388ff (dark)  /* Bleu LCD */
Accent:        #ff1493                            /* Rose néon */
Success:       #00ff88                            /* Vert néon */
Warning:       #ffcc00                            /* Jaune */
Error:         #ff3366                            /* Rouge */
```

---

## 🧩 Components

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";

<Card variant="technical">
  <CardHeader pattern="barcode">
    <CardTitle mono>TITLE</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Variants:**
- `default` - Simple border + shadow
- `technical` - Double border with grid overlay
- `lcd` - Blue accent with LCD shadow

**Header Patterns:**
- `none` - No pattern
- `grid` - Technical grid (20x20px)
- `dots` - Dot matrix (4x4px)
- `barcode` - Barcode lines

### Badge & StatBadge
```tsx
import { Badge, StatBadge } from "@/components/ui";

<Badge variant="primary" size="md" mono>LABEL</Badge>
<StatBadge value={42} variant="success" />
```

**Variants:** `primary`, `secondary`, `accent`, `success`, `warning`, `error`, `muted`

### Button
```tsx
import { Button } from "@/components/ui";

<Button variant="primary" size="md" mono>
  CLICK ME
</Button>
```

**Features:**
- Offset shadow that reduces on hover (3D effect)
- Slight translation on hover/active
- Uppercase text by default

### ThemeToggle
```tsx
import { ThemeToggle } from "@/components/ui";

<ThemeToggle />
```

---

## 🎭 Utility Classes

### Patterns
```tsx
className="pattern-grid"     // Technical grid background
className="pattern-dots"     // Dot matrix background
className="pattern-barcode"  // Barcode lines
```

### Borders
```tsx
className="border-technical"  // Double border effect
```

### Shadows
```tsx
className="shadow-lcd"        // LCD-style inset + drop shadow
```

### Animations
```tsx
className="animate-flicker"   // Quick opacity flicker (LCD effect)
className="animate-slide-in"  // Slide from right
```

---

## 📐 Spacing & Layout

### Grid System
- Use `gap-{n}` for spacing between elements
- Prefer `space-y-{n}` for vertical stacks
- Use `divide-y-2` with `divide-border` for separators

### Padding
- Cards: `px-6 py-4` (default content padding)
- Buttons: `px-4 py-2` (md), `px-3 py-1.5` (sm), `px-6 py-3` (lg)

---

## 🔤 Typography

### Font Stacks
- **Sans:** Geist Sans (default for body text)
- **Mono:** Geist Mono (for technical labels, stats, code)

### Usage Guide
```tsx
// Regular text
<p className="font-sans">Body text</p>

// Technical labels
<span className="font-mono uppercase tracking-wider text-xs">
  LABEL
</span>

// Numbers/Stats
<span className="font-mono tabular-nums text-2xl">
  1,234.56
</span>
```

### Scale
- `text-xs` - Labels, metadata (11-12px)
- `text-sm` - Body text, descriptions (14px)
- `text-base` - Default (16px)
- `text-lg` - Card titles (18px)
- `text-xl` - Section headers (20px)
- `text-2xl` - Large stats (24px)

---

## ✨ Best Practices

### DO ✅
- Use monospace fonts for numbers and technical labels
- Add uppercase + tracking-wider for labels
- Use tabular-nums for aligned number columns
- Leverage patterns (grid, dots, barcode) sparingly for visual interest
- Keep borders sharp (no border-radius)
- Use vibrant accent colors on dark backgrounds

### DON'T ❌
- Don't use rounded corners (breaks the aesthetic)
- Don't use blur shadows (use offset shadows instead)
- Don't mix too many accent colors in one view
- Don't use cursive or decorative fonts
- Don't apply patterns to large areas (performance + readability)

---

## 🎬 Animation Guidelines

- **Hover states:** Subtle translation (0.5-1px) + shadow reduction
- **Active states:** Larger translation (1px) + no shadow
- **Transitions:** Fast (150-300ms) with ease-out
- **Flicker:** Use sparingly for LCD/screen effects

---

## 📱 Responsive Behavior

### Breakpoints (Tailwind defaults)
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

### Mobile Considerations
- Hide technical patterns on small screens if needed
- Stack cards vertically
- Reduce padding/spacing
- Show abbreviated labels

---

## 🌗 Dark Mode

Toggle between themes:
```tsx
import { ThemeToggle } from "@/components/ui";

<ThemeToggle />
```

CSS variables automatically update. Use semantic color names:
```tsx
// ✅ Good - adapts to theme
className="bg-card text-foreground border-border"

// ❌ Bad - hardcoded colors
className="bg-white text-black border-gray-300"
```

---

## 🔗 Examples

### Example 1: Stats Card
```tsx
<Card variant="lcd">
  <CardHeader pattern="grid">
    <CardTitle mono>SYSTEM STATUS</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex gap-4">
      <StatBadge value="98%" label="uptime" variant="success" />
      <StatBadge value="42" label="users" variant="primary" />
    </div>
  </CardContent>
</Card>
```

### Example 2: Post List Item
```tsx
<Link
  href="/post/123"
  className="block border-l-4 border-primary hover:border-accent px-6 py-4 hover:bg-muted/30 transition-all"
>
  <p className="text-foreground mb-3">Post content here...</p>
  <div className="flex items-center gap-3 text-xs font-mono uppercase">
    <span className="text-muted-foreground">2 hours ago</span>
    <span className="h-3 w-px bg-border" />
    <StatBadge value={42} variant="success" />
  </div>
</Link>
```

---

Made with ❤️ inspired by Sony & Teenage Engineering
