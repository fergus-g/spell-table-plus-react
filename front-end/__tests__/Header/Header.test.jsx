import React from "react";
import { it, describe, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../../src/components/Header/Header";
import { MemoryRouter } from "react-router-dom";
import { UserProvider, useUser } from "../../src/context/UserContext";

const setCards = vi.fn();

const UserProviderWithUser = ({ children, user }) => {
  return (
    <UserProvider>
      <SetUserHelper user={user} />
      {children}
    </UserProvider>
  );
};

const SetUserHelper = ({ user }) => {
  const { setUser } = useUser();
  React.useEffect(() => {
    setUser(user);
  }, [user]);
  return null;
};

beforeEach(() => {
  cleanup(); // This ensures the previous component tree is unmounted
});

describe("Decklist", () => {
  it("renders the loading Header correctly with no user context", async () => {
    render(
      <MemoryRouter>
        <UserProviderWithUser user={null}>
          <Header setCards={setCards} />
        </UserProviderWithUser>
      </MemoryRouter>
    );

    expect(await screen.findByText(/Loading/i)).toBeDefined();
  });
  it("renders the Header correctly with user context", async () => {
    render(
      <MemoryRouter>
        <UserProviderWithUser user={{ username: "Alice" }}>
          <Header setCards={setCards} />
        </UserProviderWithUser>
      </MemoryRouter>
    );

    expect(await screen.findByText(/Alice/i)).toBeDefined();
  });
});
