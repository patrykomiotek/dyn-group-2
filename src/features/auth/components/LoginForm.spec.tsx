import { render, screen } from "@testing-library/react";
import { vi } from "vitest"; // jest
import { MemoryRouter } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
  it("should validate inputs", async () => {
    const mockedOnSubmit = vi.fn();
    render(
      <MemoryRouter>
        <LoginForm onSubmit={mockedOnSubmit} />
      </MemoryRouter>
    );

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText("E-mail"), "test@example.com");
    await userEvent.click(screen.getByRole("button"));

    // expect(screen.getByText(/invalid email address/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/invalid email address/i)
    ).not.toBeInTheDocument();
  });
});
