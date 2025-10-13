import { useRef, useState } from "react";
import { renderAction } from "@/stories/utils";
import { Text, Button } from "@/ui";

export default {
  title: "Rendering/LostUpdate",
};

const countAction = renderAction("count");

export const ReactRefLostUpdate = () => {
  const [countA, setCountA] = useState(0);
  const countB = useRef(0);

  return (
    <>
      <Text>
        values: A={countA}, B={countB.current}
      </Text>
      <div className="flex">
        <Button
          onClick={() => {
            setCountA((a) => a + 1);
            renderAction("a");
          }}
        >
          increment A
        </Button>
        <Button
          onClick={() => {
            countB.current += 1;
            renderAction("b");
          }}
          className="ml-6"
        >
          increment B
        </Button>
      </div>
    </>
  );
};
