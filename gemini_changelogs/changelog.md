## Changelog

### 2025-07-10

- Reordered sections in `src/pages/Index.tsx`:
  - Moved `HowItWorksSection` to be before `FeaturesSection`.
- Remodeled the `HowItWorksSection` component:
  - Changed the layout to a two-column grid with a sticky header.
  - Implemented a scrolling, stacking card effect for the steps.
  - Matched the card size and structure to the 'Benefits' section from the reference site.
  - Updated the header content to match the requested text and styling (final correction).
  - Ensured the blank space in the left column is empty.
  - Re-applied content for all four steps (titles and descriptions) and the main introductory paragraph (final attempt).
  - Modified the hover effect on step numbers to use `text-gradient-blue-teal`.
  - UNDID: Changed the color of the icons in the cards to `text-gradient-blue-teal`.
  - Added top padding to `HowItWorksSection` to create space between it and the `PlatformsBanner`.
