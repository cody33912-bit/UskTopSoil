// Vercel Speed Insights initialization for static HTML site
// This script imports and initializes @vercel/speed-insights

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false, // Set to true in development to see console logs
});
