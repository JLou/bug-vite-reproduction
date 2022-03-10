import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("App renders", () => {
  render(<App />);

  userEvent.click(screen.getByRole("button"));
  userEvent.click(screen.getByRole("button"));
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveTextContent("count is: 3");
});
