import React from 'react';
import { AnimatePresence } from 'framer-motion';

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const TRANSITION_DELAY = 0;
  // if it's a "normal" route
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY);
  }
  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];
    window.setTimeout(
      () => window.scrollTo(...savedPosition),
      TRANSITION_DELAY
    );
  }
  return false;
};
