import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button, Text } from "../ui";

export function Generator() {
  const [id, setId] = useState(uuidv4()); // 0 - current state value, 1 - callback to change the state

  const handleIdChange = () => {
    setId(uuidv4());
  };

  return (
    <div>
      <Text>{id}</Text>
      <Button onClick={handleIdChange}>Regenerate</Button>
    </div>
  );
}
