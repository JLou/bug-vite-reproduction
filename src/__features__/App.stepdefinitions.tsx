import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { defineSteps } from "specflow-emulator";
import App from "../App";

export const stepDefinitions = defineSteps(
  [{ feature: "Je clique sur le bouton et le compteur augmente" }],
  ({ Given, When, Then }) => {
    Given(/je suis sur l'application/, (scenarioContext) => () => {
      render(<App />);
    });
    When(/j'augmente le compteur/, (scenarioContext) => () => {
      userEvent.click(screen.getByRole("button"));
    });
    Then(/le compteur indique "(.*)"/, () => (expectedText) => {
      expect(screen.getByRole("button")).toHaveTextContent(expectedText);
    });
  }
);
