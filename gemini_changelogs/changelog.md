# Changelog

## 2025-07-25

- **Moved "Back to Support" link to bottom and centered in support pages:**
  - `src/pages/support/ai-powered-validation.tsx`
  - `src/pages/support/billing.tsx`
  - `src/pages/support/common-errors.tsx`
  - `src/pages/support/connect-workspace.tsx`
  - `src/pages/support/getting-started.tsx`
  - `src/pages/support/managing-workflows.tsx`
  - `src/pages/support/validation-reports.tsx`
  - `src/pages/support/validation-score.tsx`

- **Completed content for support articles:**
  - `src/pages/support/ai-powered-validation.tsx`: Added details on AI analysis, running validation, and interpreting reports.
  - `src/pages/support/billing.tsx`: Added details on updating payment methods, canceling subscriptions, and viewing billing history.
  - `src/pages/support/common-errors.tsx`: Expanded on common errors and added general troubleshooting tips.
  - `src/pages/support/connect-workspace.tsx`: Provided more details on supported integrations, connecting, and managing them.
  - `src/pages/support/getting-started.tsx`: Elaborated on creating projects, connecting workspaces, and running validations.
  - `src/pages/support/managing-workflows.tsx`: Added details on creating, customizing, running, and monitoring workflows.
  - `src/pages/support/validation-reports.tsx`: Expanded on key sections of the report and how to interpret them for actionable insights, and downloading/sharing reports.
  - `src/pages/support/validation-score.tsx`: Provided a more detailed explanation of what the score means and how to improve it.

- **Created Maintenance Page and Linked from Support:**
  - `src/pages/MaintenancePage.tsx`: Created a new maintenance page with specified content, using `lucide-react` for the icon and styled text for the iValidate logo.
  - `src/App.tsx`: Updated routing to include the `/maintenance` page.
  - `src/pages/Support.tsx`: Linked the "Status Page" card to the `/maintenance` route.

- **Reduced card size on Maintenance Page:**
  - `src/pages/MaintenancePage.tsx`: Changed `max-w-4xl` to `max-w-2xl` for the main card.
  - `src/pages/MaintenancePage.tsx`: Reduced padding from `p-6 sm:p-8` to `p-4 sm:p-6` for the main card.

- **Refined Maintenance Page Layout and Button Styling:**
  - `src/pages/MaintenancePage.tsx`: Updated "Refresh Page" button styling to match "Send Message" button in Contact Us page.
  - `src/pages/MaintenancePage.tsx`: Removed `py-12` and `pt-28` from the outermost div to address scrollability.

- **Formatted "What We're Working On" section on Maintenance Page:**
  - `src/pages/MaintenancePage.tsx`: Changed bullet points to display in two columns.

- **Redirected placeholder links to Maintenance Page:**
  - `src/components/Footer.tsx`: Changed `href="#"` to `href="/maintenance"` for social media links and "Free AI Tool" link.
  - `src/pages/Support.tsx`: Changed `to="#"` to `to="/maintenance"` for "Live Chat" and "Try Free Tools" links.

- **Navbar Enhancements:**
  - `src/components/Navigation.tsx`: Set navbar border width to `1.5px` when scrolled.
  - `src/components/Navigation.tsx`: Changed mobile "Start for Free" CTA to a standard `Button` with `ghost` variant.
  - `src/components/Navigation.tsx`: Changed scrolled navbar border color to `border-blue-500/30`.
  - `src/components/Navigation.tsx`: Reverted desktop "Start for Free" CTA text color to `text-foreground`.
  - `src/components/Navigation.tsx`: Applied `bg-white`, `h-10`, `px-4`, `border-[1.5px]`, `border-blue-500/30`, and `hover:bg-gray-100` to desktop and mobile "Sign In" buttons.
  - `src/components/Navigation.tsx`: Applied `bg-white` and `border-[1.5px] border-blue-500/30` to desktop "Validate Now" CTA.

- **Global Styling:**
  - `src/index.css`: Changed `--background` variable to `0 0% 98%` (equivalent to `#fafafa`).

- **Moving Border Button Styling:**
  - `src/components/ui/moving-border.tsx`: Applied `1.5px` width and `border-blue-500/30` to the inner border.
  - `src/components/ui/moving-border.tsx`: Changed inner background to `bg-white`.

- **Button Component Styling Fix:**
  - `src/components/ui/button.tsx`: Modified `cn` call to ensure `className` prop takes precedence for overriding default styles like `border-radius`.

- **Resolved Nested Anchor Tags:**
  - `src/components/HeroSection.tsx`: Removed redundant outer `Link` wrapping the `Button`.
  - `src/components/Navigation.tsx`: Removed `asChild` from desktop and mobile "Sign In" buttons.
  - `src/components/PricingSection.tsx`: Removed `asChild` from CTA buttons.
  - `src/components/ClosingCTA.tsx`: Removed `asChild` from CTA buttons.
  - `src/pages/Support.tsx`: Removed `asChild` from CTA buttons.