# Mechanical Engineering Portfolio - Design Guidelines

## Design Approach
**Primary Reference**: Apple HIG minimalism with technical precision
**Core Principles**: 
- Generous whitespace amplifies engineering precision
- Vibrant accent colors highlight key interactions and projects
- Clean typography hierarchy creates professional authority
- Asymmetric layouts break portfolio monotony while maintaining balance

## Typography
**Font Stack**: Inter (via Google Fonts CDN)
- Hero/Display: 600 weight, 4xl-6xl sizes (48-72px)
- Section Headers: 600 weight, 3xl-4xl (36-48px)
- Body: 400 weight, lg-xl (18-20px) for readability
- Technical Specs: 500 weight, sm-base (14-16px) monospace for data
- Captions: 400 weight, sm (14px)

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24, 32 for consistency
**Grid**: max-w-7xl container with responsive breakpoints
**Section Padding**: py-24 desktop, py-16 mobile

## Page Structure

### Hero Section (Full viewport - 90vh)
Large-scale engineering photography: complex machinery, precision tools, or technical environments with shallow depth of field. Image spans full width with subtle gradient overlay (dark at bottom). Centered title overlaying bottom third with frosted glass button (backdrop-blur-xl, semi-transparent white background with vibrant accent border).

### Projects Showcase
Masonry-style grid (2 cols mobile, 3 cols desktop) featuring project cards with:
- High-quality technical photography (CAD renders, prototypes, testing setups)
- Project title in 2xl weight-600
- Brief description in lg weight-400
- Technical tags with vibrant accent backgrounds (rounded-full, px-4 py-1.5)
- Cards have subtle hover elevation (shadow transitions)

### Technical Capabilities
Horizontal scrolling carousel (no arrows, natural swipe) showcasing:
- Engineering software proficiency with icons
- Manufacturing processes with detail images
- Testing/analysis capabilities
- Each card: 320px fixed width, glass morphism effect, vibrant accent top border

### Featured Work Deep Dive
Full-bleed image sections alternating left/right with text overlays:
- Large format: 60% image, 40% content on desktop
- Technical specifications in monospace font
- Process documentation with numbered steps
- Results/outcomes with data visualization hooks

### Contact Section (Redesigned - Centered Symmetrical)
**Layout**: Single centered column, max-w-2xl
**Structure**:
- Large centered heading (3xl-4xl weight-600)
- Subheading paragraph (xl weight-400, text-center)
- Symmetrical 2-column grid below:
  - Left: Email with vibrant envelope icon, clickable link
  - Right: LinkedIn with vibrant icon, clickable link
- Below: Physical location with map pin icon (centered)
- All elements use vibrant accent colors for icons
- Generous spacing (space-y-8 between elements)
- Light background card with rounded-2xl, subtle shadow

## Component Library

**Navigation**: Sticky top, glass morphism (backdrop-blur-lg), logo left, links right, vibrant underline hover state

**Project Cards**: White background, rounded-xl, overflow-hidden, image aspect-ratio-16/9, content p-6

**Icon Integration**: Heroicons via CDN for UI elements, vibrant fills matching accent palette

**CTA Buttons**: 
- Primary: Vibrant gradient backgrounds (blue→teal, purple→pink), white text, rounded-lg, px-8 py-3
- On images: backdrop-blur-xl, white/10 bg, white text, vibrant border-2

**Footer**: Minimal centered design, social links with vibrant hover states, copyright small text

## Images Required

1. **Hero**: Wide-angle engineering workshop or precision machinery close-up (1920x1080)
2. **Project Cards**: 6-8 high-res photos of completed projects, prototypes, CAD models
3. **Technical Process**: Detail shots of manufacturing, testing, assembly phases
4. **Feature Images**: 3-4 full-bleed lifestyle shots showing engineering context

## Color Application Strategy
Use vibrant accents strategically:
- Buttons and CTAs: gradients
- Icons and highlights: solid accent colors
- Hover states: accent color transitions
- Tags/labels: accent backgrounds with white text
- Keep 80% neutral (whites, grays) for Apple-inspired restraint