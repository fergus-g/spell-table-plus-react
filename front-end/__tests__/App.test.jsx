import React from "react";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    expect(screen.findByText(/Spell-Table-Plus/i)).toBeDefined();
  });
});
