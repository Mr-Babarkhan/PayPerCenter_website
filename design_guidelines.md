# BrokerCalls Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Professional B2B SaaS marketing aesthetic, drawing from companies like Intercom, HubSpot, and modern lead generation platforms. Clean, conversion-focused design with friendly illustrations.

## Typography System

**Font Families** (via Google Fonts CDN):
- Primary: 'Inter' - Body text, UI elements, descriptions (weights: 400, 500, 600, 700)
- Headings: 'Inter' - All headings (weights: 600, 700, 800)

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl, font-bold (800)
- Hero Subheading: text-xl md:text-2xl, font-normal (400)
- Section Headings: text-3xl md:text-4xl, font-bold (700)
- Card Titles: text-xl md:text-2xl, font-semibold (600)
- Body Text: text-base md:text-lg, font-normal (400)
- Small Text/Captions: text-sm, font-medium (500)

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24
- Element gaps: gap-4, gap-6, gap-8, gap-12

**Container Widths**:
- Full-width sections: w-full with max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Narrow content (text-heavy): max-w-4xl

**Grid Patterns**:
- Service categories: Horizontal scroll on mobile, grid-cols-4 lg:grid-cols-7 on desktop
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Event cards: grid-cols-1 md:grid-cols-3
- Blog cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

## Component Library

### Navigation Header
- Sticky header with logo left, nav center, CTA buttons right
- Dropdown menus for main categories (About Us, Insurance, Finance, Home Services, Legal)
- Primary CTA buttons in header with distinct treatment
- Height: h-20, backdrop blur on scroll

### Hero Section
- Large isometric illustration on left side (custom SVG placeholder)
- Headline + subheading on right
- Two prominent CTA buttons (Buy Calls, Sell Calls) with blurred backdrop backgrounds
- Height: min-h-[600px] md:min-h-[700px]
- Split layout: 50/50 on desktop, stacked on mobile

### Service Category Bar
- Horizontal scrolling carousel with snap-scroll behavior
- Icon + label cards, uniform sizing
- Duplicate items for infinite scroll effect
- Card size: w-32 h-32, rounded-xl
- Icons: Heroicons via CDN (health, car, document, home, etc.)

### Feature Cards Section
- Grid of 4 cards with icon, heading, description
- Icons: Custom illustrations or Heroicons (trending-up, users, phone, chart-bar)
- Card style: Subtle border, rounded-2xl, p-8, hover lift effect
- Icon size: w-16 h-16, displayed above text

### Events Section
- 3-column grid of event cards
- Each card: Featured image, event logo, title, date
- Card style: Rounded-xl overflow-hidden, shadow on hover
- Image aspect: aspect-video
- "View All Events" link below grid

### Team Carousel
- Infinite auto-scrolling horizontal carousel
- Circular headshot images (rounded-full, w-24 h-24 md:w-32 md:h-32)
- Duplicate sets for seamless loop
- "Meet the Team" CTA link below

### Blog Section  
- Grid of 4 recent post cards
- Each card: Thumbnail image, date, title, "Read Post" link
- Image aspect: aspect-[3/2]
- Card style: Border, rounded-xl, hover shadow
- "Read Blog" CTA button below grid

### CTA Sections
- Full-width section with background image overlay
- Centered headline + subheading + CTA button
- Button with blurred backdrop background (backdrop-blur-md)
- Padding: py-20 md:py-24
- Two variations: Mid-page and bottom

### Footer
- Multi-column layout with service links
- Organized by category: Insurance, Finance, Home Services, Legal
- Grid: grid-cols-2 md:grid-cols-4 lg:grid-cols-5
- Compact spacing: py-12

## Images

**Hero Illustration**: 
- Large isometric/3D illustration showing call center scenarios (3 people making calls)
- Placement: Left 50% of hero section on desktop, above headline on mobile
- Style: Modern, friendly, semi-flat design with depth
- Use SVG placeholder comment

**Service Category Icons**:
- Simple line icons representing each service (health cross, car, calculator, house, plane, etc.)
- Size: w-12 h-12
- Use Heroicons library

**Event Images**:
- Conference logos/banners for each event
- Aspect ratio: 16:9
- Real images from event websites or placeholders

**Team Headshots**:
- Professional circular headshots
- Consistent framing and background treatment
- Size: 150x150px minimum

**Blog Thumbnails**:
- Featured images for each blog post
- Aspect ratio: 3:2
- Related to blog topic

**CTA Background Images**:
- Person on phone/professional setting
- Subtle overlay for text readability
- Full-width background-cover treatment

## Interaction Patterns

**Horizontal Scroll Behavior**:
- Service categories: Smooth scroll with snap points
- Team carousel: Auto-scroll animation (translate-x with animation)

**Card Hover States**:
- Subtle lift: hover:-translate-y-1
- Shadow increase: hover:shadow-xl
- Smooth transition: transition-all duration-300

**Navigation**:
- Dropdown menus with fade-in animation
- Mobile: Hamburger menu with slide-in drawer

**CTAs**:
- Primary buttons: Rounded-lg, px-8 py-3, font-semibold
- Secondary buttons/links: Underline on hover
- Buttons on images: backdrop-blur-md background

## Accessibility
- Semantic HTML throughout (header, nav, main, section, article, footer)
- ARIA labels for icon-only buttons
- Focus states with visible outline
- Alt text for all images
- Keyboard navigation for carousels and dropdowns