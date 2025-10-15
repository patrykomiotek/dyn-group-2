import { useCallback, useLayoutEffect, useRef, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
  x: number;
  y: number;
}

interface ContainerDimensions extends Dimensions {
  id: string;
  aspectRatio: number;
}

export function ResponsiveDashboard() {
  const [dimensions, setDimensions] = useState<ContainerDimensions[]>([]);
  const [isResizing, setIsResizing] = useState(false);

  const containerRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);

  // useCallback
  const updateDimensions = useCallback(() => {
    console.log("inside updateDimensions");
    const newDimensions: ContainerDimensions[] = containerRefs.current.map(
      (ref, index) => {
        console.log("ref: ", { ref });
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const width = Math.round(rect.width);
          const height = Math.round(rect.height);
          return {
            id: `container-${index + 1}`,
            width,
            height,
            x: Math.round(rect.x),
            y: Math.round(rect.y),
            aspectRatio: width / height,
          };
        }
        return {
          id: `container-${index + 1}`,
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          aspectRatio: 0,
        };
      }
    );

    setDimensions(newDimensions);
  }, []);

  const handleResize = () => {
    setIsResizing(true);

    updateDimensions();
  };

  // TODO: Implement useLayoutEffect for measuring container
  // Hint: Measure the container on mount and window resize
  useLayoutEffect(() => {
    updateDimensions();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // window.addEventListener('resize')
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Responsive Dashboard</h2>

      {/* TODO: Display current dimensions */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Container Dimensions</h3>
        {/* Add dimension display here */}
        {isResizing && (
          <div className="mb-6 text-blue-600 text-sm">Measuring...</div>
        )}
      </div>

      {/* TODO: Create resizable container */}
      {containerRefs.current.map((_, index) => (
        <div
          key={index}
          ref={(elem) => {
            containerRefs.current[index] = elem;
          }}
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
          <div>
            Current size: {dimensions[index]?.width || 0} x{" "}
            {dimensions[index]?.height || 0}
          </div>
          <div>
            Aspect ratio: {dimensions[index]?.aspectRatio.toFixed(2) || 0}
          </div>
          {/* <div></div> */}
        </div>
      ))}
    </div>
  );
}

// 1) Cycle: Mounting
// 2) dimensions = []
// 3) DOM calculation (refs)
// 4) DOM is completed
// 5) layoutEffect -> reading information from DOM -> update state
// 7) updated DOM
// 8) can display values o the screen
// 9) browser paints result on the screen
