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
  - `src/pages/Support.tsx`: Changed `to="#"` to `to="/maintenance"` for "Try Free Tools" button.
