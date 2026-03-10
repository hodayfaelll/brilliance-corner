---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain-skipped', 'step-06-innovation-skipped', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
inputDocuments: []
briefCount: 0
researchCount: 0
brainstormingCount: 0
projectDocsCount: 0
workflowType: 'prd'
classification:
  projectType: 'Static Marketing Website'
  domain: 'General (Digital Marketing Agency)'
  complexity: 'low'
  projectContext: 'greenfield'
---

# Product Requirements Document — The Brilliance Corner

**Author:** Hodayfa | **Date:** 2026-03-07 | **Type:** Static Marketing Website | **Deployment:** Vercel (free tier) | **Budget:** Zero

---

## Executive Summary

**The Brilliance Corner** is a premium digital marketing agency offering Copywriting, Social Media Management, and SEO/Backlinks services. This project delivers the agency's public-facing marketing website — a static, content-driven site built for maximum performance, elite visual design, and aggressive organic search growth.

The site is the agency's primary lead-generation and authority-building asset. It communicates premium positioning, showcases the service offering, publishes SEO-optimised blog content via a built-in MDX system, and converts high-value prospects through a direct contact flow.

**Target audience:** High-ticket local businesses, SaaS startups, and e-commerce brands that have outgrown mediocre agencies and demand measurable, premium-quality growth.

**Core problem:** The market is saturated with agencies producing generic, low-performing content with no measurable ROI and no search visibility. The Brilliance Corner's clients demand both — a brand image they are proud of *and* results they can report.

**Core differentiator:** Most agencies offer aesthetics *or* performance. The Brilliance Corner delivers both without compromise: world-class visual execution fused with ruthlessly effective copy and SEO. The site itself is proof of this claim — it must be the most polished, fastest, and highest-ranking agency website a prospective client has seen. Premium aesthetic is not at odds with performance — it is the vehicle for it.

**Brand promise:** *"We transform your digital presence into a premium, high-converting authority — one that dominates search rankings and turns every visitor into a loyal client."*

**Tone:** Luxurious. Minimal. Sharp. Uncompromisingly confident and results-driven.

---

## Success Criteria

### User Success

- A first-time visitor understands within **5 seconds** what The Brilliance Corner does, who it serves, and why it is the premium choice
- A prospective client navigates from landing to contact form submission in **3 clicks or fewer**
- Blog articles load fully, read cleanly, and maintain visual parity with the main site
- The mobile experience is indistinguishable in quality from desktop — no sacrifices
- Contact form submission produces an immediate confirmation with zero ambiguity

### Business Success

- Site indexed on Google within **2 weeks** of launch (Search Console verified)
- Lighthouse score of **90+** on all four metrics — the site is proof of the agency's SEO capability
- Ranked for **5+ target keywords** within 6 months of consistent blog publishing
- **20+ qualified inbound contact form submissions** within the first 6 months
- Blog content drives measurable organic traffic growth month-over-month via Google Analytics

### Technical Success

- LCP **< 2.5s** on mobile | CLS **< 0.1** | INP **< 200ms**
- Zero broken links or console errors at launch
- Sitemap, robots.txt, canonical tags, OpenGraph, JSON-LD all correctly implemented
- Google Analytics 4 and Search Console verified and collecting data from day one
- New blog articles publishable by dropping a single `.mdx` file — no code changes required

### Measurable Outcomes

| Metric | Target | Timeline |
|---|---|---|
| Lighthouse score (all metrics) | 90+ | Launch day |
| Google indexing confirmed | Yes | Week 2 |
| Blog articles published | 10+ | Month 3 |
| Target keywords ranked | 5+ | Month 6 |
| Qualified contact form leads | 20+ | Month 6 |
| Organic sessions/month | 500+ | Month 6 |

---

## Product Scope

### MVP Strategy

**Approach:** Experience MVP. The site's primary value is the impression it makes. A flawless, fast, visually elite site with working contact and SEO infrastructure is a fully viable launch. Nothing is missing if those goals are met.

**Resources:** Single developer (Hodayfa). Zero budget. All tooling on free tiers. Estimated build: 2–4 weeks.

### Phase 1 — MVP (Launch)

**Core journeys supported:** All four (Karim, Nadia, Hodayfa, Tariq — see User Journeys).

| Capability | Justification |
|---|---|
| Homepage — hero, services overview, CTA | Core identity and conversion entry point |
| Services page — Copywriting, Social Media, SEO/Backlinks | Visitors cannot understand the offering without it |
| Blog — MDX list page + individual post pages | Required for SEO traffic strategy from day one |
| Contact page — Web3Forms + confirmation state | Without a working form, zero leads are captured |
| Global SEO infrastructure — sitemap, robots.txt, OG, JSON-LD, GA4 | Without this, the site cannot rank or be measured |
| Framer Motion animations — scroll-triggered + entrance | Premium aesthetic is the differentiator; non-negotiable |
| Responsive mobile-first design | Majority of agency discovery happens on mobile |
| Navigation + Footer | Structural requirement for all user journeys |

**Excluded from MVP:** Portfolio/Case Studies (no client work at launch), Testimonials (none available), Newsletter signup, FAQ page.

### Phase 2 — Growth (1–3 months post-launch)

- Testimonials / social proof section on homepage
- Portfolio / Case Studies page (once client results exist)
- FAQ page (targets long-tail SEO keywords)
- Newsletter signup via Brevo free tier
- Author bio page for blog credibility and E-E-A-T signals

### Phase 3 — Expansion (3–12 months post-launch)

- Geo-targeted service landing pages (e.g. "Copywriting Agency Dubai")
- Interactive ROI/audit calculator as lead magnet
- Multi-language support (Arabic + English)
- Team / About page
- WhatsApp or live chat integration

### Risk Mitigation

**Technical:**
- *MDX pipeline:* Low risk. Use `next-mdx-remote` — simpler and well-documented.
- *Framer Motion on mobile:* Moderate risk. Mitigated by `useReducedMotion`, limiting animations to `opacity` + `translateY`, avoiding stagger chains on mobile.
- *Web3Forms limits:* Negligible — free tier allows 1,000 submissions/month.

**Market:**
- *SEO takes time:* Strong technical SEO from day one ensures every published article has maximum ranking potential.
- *Copy quality:* Hodayfa writes the copy — this is the agency's own core service.

**Resource:**
- *Single developer:* Next.js + Tailwind + Vercel is optimised for solo development with minimal ops overhead.
- *Zero budget:* Vercel free tier (100GB bandwidth/month), Web3Forms free tier, Next.js has no licensing cost.

---

## User Journeys

### Journey 1: The Overwhelmed SaaS Founder — Primary User, Success Path

**Persona:** Karim, 34, co-founder of a B2B SaaS tool for logistics teams. Solid product, growing team, but digital presence is an afterthought — template website, zero blog, LinkedIn posts with no engagement. A competitor with a weaker product just landed major press. He Googles "premium copywriting agency for SaaS" at 11pm on a Tuesday.

**Opening:** The hero loads instantly. The headline hits before he scrolls: *"We transform your digital presence into a premium, high-converting authority."* The animation is surgical — nothing bounces, nothing screams. He scrolls with intent.

**Rising Action:** He reads the services section. Copywriting — he thinks about his lifeless homepage copy. Social Media — zero engagement. SEO/Backlinks — the competitor that just outranked him. Each service section answers the question forming in his mind before he asks it.

**Climax:** He clicks "Contact Us." The form is clean — name, email, company, message. No 15-field nightmare. He types his situation in two sentences and hits Submit. Confirmation appears: *"We'll be in touch within 24 hours."*

**Resolution:** Karim becomes a high-value retainer client. The site converted him through earned authority and frictionless experience.

**Capabilities revealed:** FR1, FR5–8, FR15–17, FR29–30, NFR1–3.

---

### Journey 2: The Skeptical E-Commerce Owner — Primary User, Research Path

**Persona:** Nadia, runs a premium skincare brand. Burned by two agencies — both promised results, neither delivered. Not ready to contact anyone. Searching: "how to choose an SEO agency" and "what makes copywriting convert."

**Opening:** A blog post from The Brilliance Corner appears on page one. She clicks. The article loads fast, formatted beautifully — sharp typography, specific credible advice, no filler. The tone matches the brand.

**Rising Action:** She reads the whole article. Related posts appear. She clicks one. Then another. Twenty minutes later she has learned more than she did from her last agency's onboarding call.

**Climax:** She navigates to the homepage. Brand cohesion is immediate — blog and main site are one entity. The services page positioning matches what the articles promised.

**Resolution:** She bookmarks the site. Three weeks later she returns and submits the contact form. Already sold before typing a word.

**Capabilities revealed:** FR9–14, FR19–21, FR25, FR28, NFR2–4.

---

### Journey 3: The Agency Owner Publishing a Blog Post — Content Author Path

**Persona:** Hodayfa, agency owner and sole content author. New article ready: *"Why Most Agency SEO Fails in 90 Days (And How We Don't)."*

**Opening:** Opens VS Code, navigates to `content/blog/`. Creates `why-most-agency-seo-fails.mdx`. Adds frontmatter — title, date, description, tags, slug, cover image path.

**Rising Action:** Writes the article in Markdown. Drops an optimised image into `/public/blog/`. No database login, no CMS interface. Saves. Pushes to GitHub.

**Climax:** Vercel detects the push and builds automatically. Two minutes later the article is live, in the sitemap, and fully styled with the same premium layout as every other post.

**Resolution:** The post accumulates impressions in Search Console within days. Publishing workflow is exactly as fast as the writing.

**Capabilities revealed:** FR37–41, NFR19.

---

### Journey 4: The Local Business Owner — Mobile Discovery Path

**Persona:** Tariq, owns three high-end barbershops in Dubai. Competitors getting Instagram features and ranking on Google. On his phone, in the car, Googling "social media management agency Dubai."

**Opening:** The Brilliance Corner result appears. He taps. The site loads in under two seconds. No broken columns, no microscopic text, no pinch-to-zoom.

**Rising Action:** He scrolls on his phone. Animations feel native. He taps "Services." The Social Media section speaks directly to his situation: brand visibility, content consistency, audience growth.

**Climax:** He taps "Contact." Touch-friendly form — large inputs, clear labels. He types his inquiry and submits in under a minute.

**Resolution:** A qualified lead from mobile search, converted in under three minutes.

**Capabilities revealed:** FR15–17, FR32, NFR1–5, NFR11–12.

---

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---|---|
| Karim (SaaS Founder) | Fast hero, benefit-driven service copy, frictionless contact form, instant confirmation |
| Nadia (E-Commerce Skeptic) | SEO blog, related posts, brand-consistent design, article-to-homepage flow |
| Hodayfa (Content Author) | MDX file-based publishing, auto-sitemap, Vercel CI/CD, frontmatter-driven SEO |
| Tariq (Mobile Local Business) | Mobile-first layout, touch-optimised UI, fast mobile load, smooth animations |

---

## Technical Architecture

### Stack Overview

| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSG, file-based routing, `generateMetadata`, `generateStaticParams` |
| Styling | Tailwind CSS | Utility-first, zero unused CSS in production |
| Animations | Framer Motion | Declarative scroll/entrance variants with `useReducedMotion` support |
| Content | MDX via `next-mdx-remote` | Frontmatter-driven metadata, JSX components in Markdown |
| Forms | Web3Forms (free tier) | No backend, no serverless functions required |
| Fonts | `next/font` | Zero CLS, self-hosted from Google Fonts |
| Images | `next/image` | WebP auto-conversion, responsive `sizes`, CLS prevention |
| Deployment | Vercel free tier | Auto-build on push, global CDN, automatic HTTPS |

**Constraints:**
- No database — zero runtime dependencies, zero cold starts, zero ongoing cost
- No authentication — fully public site
- No serverless functions — Web3Forms handles form submission externally
- Single environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY` (set in Vercel dashboard)
- Estimated build time: < 30s

### Rendering Model

All pages use Static Site Generation (SSG). Blog routes are generated at build time via `generateStaticParams`. Adding a new post triggers a full rebuild via `git push` → Vercel CI/CD.

### Browser Support

| Browser | Version | Priority |
|---|---|---|
| Chrome | Last 2 | Primary |
| Safari (iOS + macOS) | Last 2 | Primary |
| Firefox | Last 2 | Secondary |
| Edge | Last 2 | Secondary |
| Internet Explorer | Not supported | — |

### Responsive Design

- **Breakpoints:** Mobile (< 640px) · Tablet (640–1024px) · Desktop (> 1024px)
- **Approach:** Mobile-first — base styles target mobile, progressively enhanced upward
- **Touch targets:** Minimum 44×44px on all interactive elements
- **Typography:** Fluid via `clamp()` — headings scale smoothly across breakpoints

### SEO Implementation

**Per-page (every page):**
- Unique `<title>` and `<meta name="description">` via `generateMetadata`
- Canonical URL tag
- OpenGraph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

**Global:**
- `robots.txt` — allow all, points to sitemap
- `sitemap.xml` — auto-generated, includes all static pages + all blog posts
- Google Analytics 4 — `next/script` with `strategy="afterInteractive"`
- Search Console — verification meta tag in `<head>`

**Per blog post:**
- `generateMetadata` from MDX frontmatter (`title`, `description`, `publishedAt`, `tags`)
- `og:type = "article"` with `article:published_time` and `article:author`

**JSON-LD structured data:**
- Homepage: `Organization` + `WebSite` + `LocalBusiness` schemas
- Blog posts: `Article` schema

### Performance Implementation Rules

- GA4 loaded with `strategy="afterInteractive"` — never blocks render
- `next/font` for all fonts — zero layout shift
- `next/image` with explicit `width` + `height` on every image — prevents CLS
- No third-party scripts beyond GA4 and Web3Forms

---

## Functional Requirements

### Site Navigation & Structure

- **FR1:** Visitors can navigate to any primary page (Home, Services, Blog, Contact) from any page via the global navigation
- **FR2:** Visitors can access social media profiles and contact information via the site footer
- **FR3:** Visitors can return to the homepage from any page via the site logo/brand mark
- **FR4:** Visitors can identify which page they are currently on via active navigation state

### Service Presentation

- **FR5:** Visitors can view a summary of all three services (Copywriting, Social Media Management, SEO/Backlinks) on the homepage
- **FR6:** Visitors can access a dedicated services page with benefit-driven descriptions for each service
- **FR7:** Visitors can initiate contact directly from the services page via a call-to-action
- **FR8:** Visitors can understand the specific outcome each service delivers before contacting the agency

### Blog Content System

- **FR9:** Visitors can browse a list of all published blog articles
- **FR10:** Visitors can read individual blog articles on dedicated pages
- **FR11:** Visitors can see related or recent articles at the end of each blog post
- **FR12:** Visitors can see article metadata (title, publication date, estimated reading time, category/tags) on article list cards
- **FR13:** Visitors can navigate from a blog article back to the full blog list
- **FR14:** The system generates an individual page route for each MDX blog file at build time

### Lead Capture & Contact

- **FR15:** Visitors can submit a contact inquiry via a form containing name, email, and message fields
- **FR16:** Visitors receive an immediate on-page confirmation state after successful form submission
- **FR17:** The contact form validates required fields and displays inline error messages before allowing submission
- **FR18:** Visitors can find the agency's contact information in the site footer

### SEO & Discoverability

- **FR19:** The system generates a unique page title and meta description for every page
- **FR20:** The system generates a canonical URL tag for every page
- **FR21:** The system generates OpenGraph and Twitter Card metadata for every page
- **FR22:** The system generates a `sitemap.xml` listing all pages and all published blog posts
- **FR23:** The system serves a `robots.txt` file directing search crawlers to the sitemap
- **FR24:** The homepage includes JSON-LD structured data for Organization, WebSite, and LocalBusiness schemas
- **FR25:** Each blog post page includes JSON-LD structured data for the Article schema
- **FR26:** Google Analytics 4 tracks page views across the entire site
- **FR27:** Google Search Console ownership can be verified via a meta tag in the document head
- **FR28:** Blog post pages expose article-specific metadata (published date, author, tags) derived from MDX frontmatter for search engines

### Visual Design & Animation

- **FR29:** Visitors experience entrance animations on page load for hero sections and key content blocks
- **FR30:** Visitors experience scroll-triggered reveal animations as they scroll down each page
- **FR31:** Visitors who have enabled a reduced-motion OS preference receive a static, non-animated experience
- **FR32:** The site renders correctly at full visual quality across all supported browsers and device sizes
- **FR33:** All interactive elements (buttons, links, form fields) display visible hover and focus states

### Accessibility

- **FR34:** All images include descriptive alternative text; decorative images use empty alt attributes
- **FR35:** The site is fully navigable using only a keyboard in a logical, predictable tab order
- **FR36:** Colour contrast ratios meet WCAG 2.1 Level AA standards across all text and interactive elements

### Content Authoring

- **FR37:** The content author can publish a new blog post by creating a single MDX file with frontmatter in the content directory
- **FR38:** The content author can set per-post SEO metadata (title, description, OG image, tags, published date) via MDX frontmatter fields
- **FR39:** The content author can use custom MDX components (callouts, code blocks, image captions) within blog post content
- **FR40:** New blog posts are automatically included in the sitemap and blog list after the next build and deployment
- **FR41:** The site can be rebuilt and redeployed by pushing a commit to the main git branch

---

## Non-Functional Requirements

### Performance

- **NFR1:** All pages score **90 or above** on Lighthouse Performance (simulated mobile device)
- **NFR2:** All pages score **100** on Lighthouse SEO
- **NFR3:** LCP is **< 2.5s** on a 4G mobile connection
- **NFR4:** CLS is **< 0.1** on all pages
- **NFR5:** INP is **< 200ms** for all interactive elements
- **NFR6:** Homepage total uncompressed asset weight does not exceed **500KB**
- **NFR7:** No render-blocking scripts delay the initial page paint

### Security

- **NFR8:** All visitor–server data transmission is encrypted via HTTPS (enforced by Vercel)
- **NFR9:** No PII is stored in the application or on Vercel servers — contact form data handled exclusively by Web3Forms
- **NFR10:** No third-party scripts loaded beyond Google Analytics 4 and Web3Forms

### Reliability

- **NFR11:** The site maintains **99.9% uptime** via Vercel's global CDN
- **NFR12:** The contact form returns a success or error response **within 5 seconds** of submission

### Accessibility

- **NFR13:** All pages score **95 or above** on Lighthouse Accessibility
- **NFR14:** The site conforms to **WCAG 2.1 Level AA**
- **NFR15:** All Framer Motion animations are suppressed when `prefers-reduced-motion` is active

### Integration

- **NFR16:** GA4 tracking loads after initial page render — zero impact on LCP or FID
- **NFR17:** Web3Forms operates without any serverless function or backend infrastructure on Vercel
- **NFR18:** If Web3Forms is unavailable, the contact form displays a clear error message and does not silently fail

### Maintainability

- **NFR19:** A new blog post is live within **5 minutes** of pushing the MDX file to the main git branch
- **NFR20:** The codebase follows consistent component naming and file structure conventions enabling any Next.js developer to extend it without project-specific onboarding
