### 2025-07-19

- Reverted changes to `src/pages/Index.tsx`.
- Removed `EarlyAdopterSection` component.
- Added `TestimonialSection` component (`src/components/TestimonialSection.tsx`).
- Integrated `TestimonialSection` into `src/pages/Index.tsx`, placing it below `FeaturesSection` and above `FAQSection`.
- Modified `TestimonialSection` to reflect early access feedback from real startup users, including new heading, subtext, and testimonial content.
- Switched the order of the title and top subtext in `TestimonialSection.tsx`.
- Updated `TestimonialCard` styling in `src/components/TestimonialSection.tsx` to match other card designs (border, no shadow, consistent background/text colors).
- Implemented a carousel for the testimonial section using `embla-carousel-react`, including navigation buttons and a profile icon for each testimonial.
- Updated `TestimonialSection` content: new title "iValidate Through the Eyes of Early Testers", updated top subtext, and added new bottom subtext.
- Corrected the blue-teal text gradient for "iValidate" in the title of `TestimonialSection.tsx` to use the project's defined `text-gradient-blue-teal` utility class for consistency.
- Updated FAQ content in `src/components/FAQSection.tsx`.
- Modified `AccordionTrigger` in `src/components/ui/accordion.tsx` to remove underline on hover and apply `text-gradient-blue-teal` for hover effect.
- Removed `hover:text-primary` from `AccordionTrigger` in `src/components/FAQSection.tsx` to ensure the blue-teal gradient hover effect is applied.

### 2025-07-22

- Refactored `src/components/Footer.tsx` to a modern three-column layout.
- Added iValidate logo and tagline to the left column.
- Integrated Facebook, Instagram, Twitter, and LinkedIn social media icons using `lucide-react`.
- Created three vertical link columns (Product, Resources, Info) with relevant links.
- Ensured mobile responsiveness and consistent spacing/font sizes.
- Added a centered copyright notice at the bottom.
- Adjusted spacing in `src/components/Footer.tsx` to increase the gap between the iValidate column and the link columns, and decrease the gap between the Product, Resources, and Info columns.
- Further refined spacing in `src/components/Footer.tsx` by increasing the gap between the iValidate column and the link columns, and further decreasing the gap between the Product, Resources, and Info columns.
- Added `id="faq"` to the `<section>` tag in `src/components/FAQSection.tsx` to correctly link the FAQ section from the footer.
- Replaced "FAQ" with "Pricing" in the Product column of `src/components/Footer.tsx` and updated the link to `#pricing`.
- Updated "Pricing" link in `src/components/Footer.tsx` to `href="/pricing"` to match navigation bar linking convention.
- Replaced "About" with "Contact Us" in the Info column of `src/components/Footer.tsx`.
- Replaced "Privacy Center" with "Privacy Policy" in the Info column of `src/components/Footer.tsx`.
- Changed the global background color to a blue tint by modifying the `--background` variable in `src/index.css`.
- Reverted the global background color in `src/index.css` back to white.