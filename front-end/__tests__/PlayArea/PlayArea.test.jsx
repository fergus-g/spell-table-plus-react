import React from "react";
import { it, describe, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import PlayArea from "../../src/components/PlayArea/PlayArea";

const defaultProps = {
  creatures: [{ name: "Accursed Marauder", type_line: "Creature" }],
  enchantments: [{ name: "Smothering Tithe", type_line: "Enchantment" }],
  artifacts: [{ name: "Sol Ring", type_line: "Artifact" }],
  lands: [{ name: "Island", type_line: "Land" }],
  graveyard: [{}],
  exile: [{}],
  setCreatures: vi.fn(),
  setEnchantments: vi.fn(),
  setArtifacts: vi.fn(),
  setLands: vi.fn(),
};

beforeEach(() => {
  cleanup();
});

describe("Decklist", () => {
  it("renders the loading Header correctly with no user context", async () => {
    render(<PlayArea {...defaultProps} />);

    expect(await screen.findByText(/Artifacts/i)).toBeDefined();
  });
});
