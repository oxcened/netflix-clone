import { useSyncExternalStore } from 'react';

export default function useScrolled() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback: () => void) {
  window.addEventListener('scroll', callback);
  return () => window.removeEventListener('scroll', callback);
}

function getSnapshot() {
  return !!document.documentElement.scrollTop;
}

function getServerSnapshot() {
  return false;
}
