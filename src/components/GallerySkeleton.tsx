export default function GallerySkeleton() {
  const placeholders = Array.from({ length: 6 });

  return (
    <div role="status" aria-label="Loading gallery" aria-busy="true">
      <div
        aria-hidden="true"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {placeholders.map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-44 w-full rounded-lg bg-gray-200" />
            <div className="mt-3 h-5 w-3/4 rounded bg-gray-200" />
            <div className="mt-2 h-3.5 w-full rounded bg-gray-200" />
            <div className="mt-2 h-3.5 w-5/6 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
