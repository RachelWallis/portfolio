// lib/gtag.js
export const GA_TRACKING_ID = 'G-J0H200T7Y3';

// Log pageviews
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};