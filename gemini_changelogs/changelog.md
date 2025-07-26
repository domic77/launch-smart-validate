### 2025-07-26
- Replaced `<a>` tags with `Link` components in `src/components/Footer.tsx` to ensure proper client-side routing for internal links.
- Updated favicon path in `index.html` from `./src/assets/ivalidate-logos/ivalidate-favicon.ico` to `/ivalidate-favicon.ico` for better deployment compatibility.
- Added `import { Link } from "react-router-dom";` to `src/components/Footer.tsx` to resolve `Link` not defined error.
- Changed 'Features' link in `src/components/Footer.tsx` to an anchor link `/#features`.