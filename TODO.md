# Website Improvement Plan for SAYA

## Overview
This TODO tracks the steps to improve the SAYA website (src/saya-website.html) based on the approved plan. Focus: Fix issues, enhance content, optimize performance/accessibility, and test. Steps are sequential; update status as completed.

## Steps

### 1. [x] Content Improvements and Fixes
   - Standardize naming (e.g., "Hapitech" consistently).
   - Fix typos: "commited" → "committed", "enviroment" → "environment", "maximising" → "maximize".
   - Repair broken HTML in Hapitech features section (fix malformed <p> tags in "Sustainable Farming Practices").
   - Fill placeholders in "About Hapitech": Set founding year to 2020, projects to 25 across 12 communities.
   - Enhance content: Expand descriptions for engagement (e.g., add details to About SAYA, Projects, Achievements; make language more professional and compelling).
   - Update Partnership section with more detailed collaboration benefits.

### 2. [ ] SEO and Head Enhancements
   - Add meta description: "Empowering youth in sustainable agriculture in Zambia through innovative programs and technology partnerships."
   - Add keywords meta: "sustainable agriculture, youth alliance, Zambia farming, SAYA, Hapitech".
   - Add Open Graph tags: og:title, og:description, og:image (use logo path), og:url.

### 3. [ ] Accessibility Improvements
   - Add descriptive alt texts to gallery images (e.g., "SAYA youth training workshop" for relevant ones; keep generic where unspecified).
   - Add ARIA roles: e.g., role="main" to section containers, aria-label to buttons/forms.

### 4. [ ] Performance Optimizations
   - Add loading="lazy" to all <img> tags in the gallery section.

### 5. [ ] Responsiveness Adjustments
   - Update CSS: Add media query for .gallery-grid on mobile (e.g., minmax(150px, 1fr) for better stacking).

### 6. [ ] UI/UX Enhancements
   - Improve CTA buttons: Enhance hover effects in CSS (e.g., scale and shadow).
   - Ensure smooth scrolling: Update JS for navigation to include behavior: 'smooth' if needed (already partial).

### 7. [ ] Testing
   - Launch browser and navigate sections: Verify fixes in Hapitech, content flow, gallery loading.
   - Check responsiveness: Test on simulated mobile (scroll, resize).
   - Validate: No JS errors, images lazy-load, accessibility (e.g., screen reader friendly).
   - If issues: Iterate with additional edits.

### 8. [ ] Completion
   - Update this TODO with all [x] marks.
   - Attempt completion with summary and demo command.
