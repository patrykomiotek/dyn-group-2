export default function LazyProfile({ userId }: { userId: number }) {
  return (
    <div className="p-4 border rounded-md">
      <div className="font-medium">Lazy Profile</div>
      <div className="text-sm text-gray-600">User ID: {userId}</div>
      <p className="text-sm text-gray-500 mt-1">
        This component was code-split with React.lazy and loaded inside a
        Suspense boundary.
      </p>
    </div>
  );
}
