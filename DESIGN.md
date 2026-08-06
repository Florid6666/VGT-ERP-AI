# VGT ERP AI — Design System & Style Specification
> **Specification Standard**: High-Impact Apple Display Typography & Eye-Catching Gallery Polish
> **Visual Direction**: Massive Keynote SF Display headlines, vibrant gradient clip highlights, generous spatial breathing room, and Apple Action Blue (`#0066CC`) interactive signals.

---

## 1. Eye-Catching Design Philosophy

1. **Gigantic SF Pro Display Scale**: Headlines rendered at massive Apple keynote sizes (`96px` hero titles, `64px` section headers) with tight negative letter-spacing (`tracking-tight` / `-0.04em`) to command immediate attention.
2. **Vibrant Apple Gradient Text Highlights**: Rich multi-tone text clips (`from-[#0066CC] via-[#5E5CE6] to-[#00C7BE]`) that highlight core enterprise value propositions.
3. **Pristine Canvas with Ambient Pastel Auras**: Clean white (`#FFFFFF`) and parchment (`#F5F5F7`) section canvases layered with soft, glowing ambient radial mesh spotlights (`blur-[140px]`).
4. **Giant Metric Telemetry Display**: Telemetry numbers displayed at `64px` - `72px` font size with real-time recalculation animations.
5. **Elevated Apple Glass & Store Cards**: 24px rounded utility cards (`rounded-3xl` / `rounded-[24px]`) featuring subtle spring physics hover lifts (`hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl`).

---

## 2. Giant Typography Scale & Rules

```css
/* Hero Display Headline (H1) */
.hero-display-text {
  font-family: 'SF Pro Display', 'Outfit', 'Inter', sans-serif;
  font-size: clamp(44px, 7.5vw, 96px);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: #1D1D1F;
}

/* Display Large Section Header (H2) */
.display-lg-text {
  font-family: 'SF Pro Display', 'Outfit', 'Inter', sans-serif;
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #1D1D1F;
}

/* Display Medium Sub-Header (H3) */
.display-md-text {
  font-family: 'SF Pro Text', 'Inter', sans-serif;
  font-size: clamp(24px, 3.5vw, 40px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

/* Lead Tagline Paragraph */
.lead-text {
  font-size: clamp(18px, 2.5vw, 28px);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0px;
  color: #515154;
}

/* Giant Metric Value */
.giant-metric {
  font-family: 'SF Mono', 'JetBrains Mono', monospace;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.04em;
}
```

---

## 3. High-Impact Canvas & Color Tokens

### A. Surface Palette
- `canvas-white`: `#FFFFFF`
- `canvas-parchment`: `#F5F5F7`
- `canvas-dark-tile`: `#1D1D1F`
- `canvas-dark-surface`: `#272729`

### B. Eye-Catchy Action Colors & Gradients
- `action-blue`: `#0066CC` (Apple Action Blue)
- `action-purple`: `#5E5CE6` (Apple Indigo Accent)
- `action-teal`: `#00C7BE` (Apple Hyper Cyan)
- `hero-gradient`: `bg-gradient-to-r from-[#0066CC] via-[#5E5CE6] to-[#00C7BE]`
- `dark-hero-gradient`: `bg-gradient-to-r from-[#2997FF] via-[#A259FF] to-[#00F0FF]`

---

## 4. Component Standards

### A. Giant Action Blue Pill Button
```html
<button class="inline-flex items-center justify-center px-9 py-4 text-lg font-semibold text-white bg-[#0066CC] hover:bg-[#0071E3] active:scale-[0.98] rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
  Start Free Trial
</button>
```

### B. Giant Store Utility Card
```html
<div class="bg-white rounded-[24px] border border-slate-200/90 p-8 sm:p-10 shadow-xs hover:shadow-2xl hover:border-[#0066CC]/40 hover:-translate-y-1 transition-all duration-300">
  <!-- Content -->
</div>
```
