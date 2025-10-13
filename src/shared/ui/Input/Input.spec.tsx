import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import { Input } from "./Input";

describe("Input component", () => {
  it("should be accessible", async () => {
    const { container } = render(<Input label="Name" />);

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
