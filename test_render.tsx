import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './src/App';

try {
  const html = renderToString(React.createElement(App));
  console.log("RENDER SUCCESS", html.substring(0, 100));
} catch (e) {
  console.error("RENDER ERROR:", e);
}
