export function LoadingFallback() {
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded">
      <div className="flex items-center gap-2 text-blue-700">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700" />
        <span>Loading…</span>
      </div>
    </div>
  );
}
