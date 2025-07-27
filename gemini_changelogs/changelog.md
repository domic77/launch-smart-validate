### 2025-07-26
- Replaced `<a>` tags with `Link` components in `src/components/Footer.tsx` to ensure proper client-side routing for internal links.
- Updated favicon path in `index.html` from `./src/assets/ivalidate-logos/ivalidate-favicon.ico` to `/ivalidate-favicon.ico` for better deployment compatibility.
- Added `import { Link } from "react-router-dom";` to `src/components/Footer.tsx` to resolve `Link` not defined error.
- Changed 'Features' link in `src/components/Footer.tsx` to an anchor link `/#features`.
### 2025-07-27
- Centered the wrench icon in `src/pages/MaintenancePage.tsx` by wrapping it in a div with `flex items-center justify-center` classes.
- Updated the Twitter link in `src/components/Footer.tsx` to `https://twitter.com/AskiValidate`.