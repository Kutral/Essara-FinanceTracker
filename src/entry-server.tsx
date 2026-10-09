import { renderToString } from 'react-dom/server';
import App from './App';

// Used at build time by scripts/build-static-seo.mjs to prerender the home page
// so crawlers and AI agents that do not run JavaScript still see the content.
export function render() {
  return renderToString(<App />);
}
