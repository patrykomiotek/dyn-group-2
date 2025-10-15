import { useLayoutEffect, useRef, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
  x: number;
  y: number;
}

export function ResponsiveDashboard() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // TODO: Implement useLayoutEffect for measuring container
  // Hint: Measure the container on mount and window resize

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Responsive Dashboard</h2>

      {/* TODO: Display current dimensions */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Container Dimensions</h3>
        {/* Add dimension display here */}
      </div>

      {/* TODO: Create resizable container */}
      <div
        ref={containerRef}
        className="bg-blue-100 border-2 border-blue-300 p-6 rounded-lg"
        style={{
          resize: "both",
          overflow: "auto",
          minWidth: "200px",
          minHeight: "100px",
        }}
      >
        <h3 className="text-lg font-semibold mb-2">Resizable Container</h3>
        <p className="text-gray-700">
          Resize this container to see the dimensions update!
        </p>
      </div>
    </div>
  );
}
