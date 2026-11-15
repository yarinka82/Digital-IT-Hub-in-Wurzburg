"use client";

import { useEffect } from "react";

export default function ContentError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => console.error(error), [error]);
  return (
    <div>
      <p>Beim Laden dieser Inhalte ist ein Fehler aufgetreten.</p>
      <button onClick={() => retry()}>Erneut versuchen</button>
    </div>
  );
}
