export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl bg-white p-5 shadow-soft">
      <div className="h-40 rounded-lg bg-gray-200" />
      <div className="mt-4 h-3 w-1/2 rounded bg-gray-200" />
      <div className="mt-2 h-4 w-3/4 rounded bg-gray-200" />
      <div className="mt-3 h-3 w-full rounded bg-gray-200" />
    </div>
  );
}
