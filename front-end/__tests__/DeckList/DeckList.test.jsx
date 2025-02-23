import React from "react";
import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeckList from "/src/components/DeckList/DeckList.jsx";

const cards = {
  data: [
    { name: "Accursed Marauder", type_line: "Creature" },
    { name: "Smothering Tithe", type_line: "Enchantment" },
    { name: "Sol Ring", type_line: "Artifact" },
    { name: "Island", type_line: "Land" },
  ],
};

const graveyard = [{}];
const exile = [{}];
const setCreatures = vi.fn();
const setEnchantments = vi.fn();
const setArtifacts = vi.fn();
const setLands = vi.fn();

describe("Decklist", () => {
  it("renders the decklist correctly", async () => {
    render(
      <DeckList
        cards={{ ...cards }}
        graveyard={graveyard}
        exile={exile}
        setCreatures={setCreatures}
        setArtifacts={setArtifacts}
        setEnchantments={setEnchantments}
        setLands={setLands}
      />
    );

    expect(await screen.findByText(/Island/i)).toBeDefined();
  });

  it("sortCards is called when Island button is clicked", async () => {
    render(
      <DeckList
        cards={{ ...cards }}
        graveyard={[]}
        exile={[]}
        setCreatures={setCreatures}
        setArtifacts={setArtifacts}
        setEnchantments={setEnchantments}
        setLands={setLands}
      />
    );

    const button = screen.getByRole("button", { name: /Island/i });
    console.log(button);
    await userEvent.click(button);

    expect(setLands).toHaveBeenCalledWith(expect.any(Function));
  });
  it("sortCards is called when Accursed Maurader button is clicked", async () => {
    render(
      <DeckList
        cards={{ ...cards }}
        graveyard={[]}
        exile={[]}
        setCreatures={setCreatures}
        setArtifacts={setArtifacts}
        setEnchantments={setEnchantments}
        setLands={setLands}
      />
    );

    const button = screen.getByRole("button", { name: /Accursed Marauder/i });
    console.log(button);
    await userEvent.click(button);

    expect(setCreatures).toHaveBeenCalledWith(expect.any(Function));
  });
  it("sortCards is called when Smothering Tithe button is clicked", async () => {
    render(
      <DeckList
        cards={{ ...cards }}
        graveyard={[]}
        exile={[]}
        setCreatures={setCreatures}
        setArtifacts={setArtifacts}
        setEnchantments={setEnchantments}
        setLands={setLands}
      />
    );

    const button = screen.getByRole("button", { name: /Smothering Tithe/i });
    console.log(button);
    await userEvent.click(button);

    expect(setEnchantments).toHaveBeenCalledWith(expect.any(Function));
  });
  it("sortCards is called when Sol Ring button is clicked", async () => {
    render(
      <DeckList
        cards={{ ...cards }}
        graveyard={[]}
        exile={[]}
        setCreatures={setCreatures}
        setArtifacts={setArtifacts}
        setEnchantments={setEnchantments}
        setLands={setLands}
      />
    );

    const button = screen.getByRole("button", { name: /Sol Ring/i });
    console.log(button);
    await userEvent.click(button);

    expect(setArtifacts).toHaveBeenCalledWith(expect.any(Function));
  });
});
