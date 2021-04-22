export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0));
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];
    window.setTimeout(() => window.scrollTo(...savedPosition));
  }
  return false;
};
