import { useCallback, useSyncExternalStore } from "react";

const KEY = "read-activity-ids";
const EMPTY: string[] = [];

let cache: { raw: string | null; value: string[] } = {
  raw: null,
  value: EMPTY,
};
const listeners = new Set<() => void>();

function getSnapshot() {
  const raw = localStorage.getItem(KEY);
  if (raw !== cache.raw) {
    let value = EMPTY;
    try {
      value = raw ? JSON.parse(raw) : EMPTY;
    } catch {}
    cache = { raw, value };
  }
  return cache.value;
}

const getServerSnapshot = () => null;

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);

  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export function useReadIds() {
  const readIds = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const markRead = useCallback((ids: string[]) => {
    const current = getSnapshot() ?? EMPTY;
    const add = ids.filter((id) => !current.includes(id));

    if (add.length === 0) return;
    try {
      localStorage.setItem(KEY, JSON.stringify([...current, ...add]));
    } catch {}
    listeners.forEach((l) => l());
  }, []);

  return { readIds, markRead, isLoaded: readIds !== null };
}
