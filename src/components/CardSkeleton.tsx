export default function CardSkeleton() {
  return (
    <div role="status" aria-label="Loading gallery" aria-busy="true">
      <div
        aria-hidden="true"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div className="h-80 w-full rounded-lg bg-gray-200" />
        <div className="mt-6 h-8 w-1/2 rounded bg-gray-200" />
        <div className="mt-4 h-4 w-full rounded bg-gray-200" />
        <div className="mt-2 h-4 w-full rounded bg-gray-200" />
        <div className="mt-2 h-4 w-3/5 rounded bg-gray-200" />
      </div>
    </div>
  );
}
