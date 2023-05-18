import { useSyncExternalStore } from 'react';

export default function useViewportWidth() {
  // the 3rd parameter is optional and only needed for server side rendering
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  return window.innerWidth;
}

function getServerSnapshot() {
  return 0;
}
