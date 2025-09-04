import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import CardResource from "../components/pages/resource/card/CardResource";
import { mockResources } from "./mockResource";

vi.mock("../api/resource", () => ({
  findAllResource: vi.fn((setResource) => {
    setTimeout(() => {
      setResource(mockResources);
    }, 500);
  }),
}));

describe("New test for CardResource", () => {
  test("EmptyResource render the good text ", () => {
    render(<CardResource />);
    const EmptyTextElement = screen.getByText("Aucune ressource actuellement");
    expect(EmptyTextElement).toBeInTheDocument();
  });

  test("affiche les ressources après l'appel API ", async () => {
    render(<CardResource />);

    await waitFor(() => {
      expect(screen.getByText("Salle de conférence")).toBeInTheDocument();
      expect(screen.getByText("Event")).toBeInTheDocument();
    });
  });
});
