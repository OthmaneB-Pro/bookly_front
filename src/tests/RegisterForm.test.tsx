import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import RegisterForm from "../components/pages/login/loginElement/RegisterForm";
import { registerUser } from "../api/auth";

vi.mock("../api/auth", () => ({
  registerUser: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe("RegisterForm", () => {
  it("rend tous les champs du formulaire d'inscription", () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/Prénom/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /S'inscrire/i })
    ).toBeInTheDocument();
  });

  it("affiche une erreur si les champs sont vides", async () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /S'inscrire/i });
    fireEvent.click(button);

    expect(
      await screen.findByText(/Veuillez entrer un nom valide/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Veuillez entrer un email valide/i)
    ).toBeInTheDocument();
  });

  it("soumet correctement avec des données valides", async () => {
    (registerUser as jest.Mock).mockResolvedValueOnce({ success: true });

    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText(/Prénom/i), "Othmane");
    await user.type(screen.getByPlaceholderText(/Email/i), "test@test.com");
    await user.type(
      screen.getByPlaceholderText(/^Mot de passe$/i),
      "Password123"
    );
    await user.type(
      screen.getByPlaceholderText(/Confirmer le mot de passe/i),
      "Password123"
    );

    await user.click(screen.getByRole("button", { name: /S'inscrire/i }));

    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith({
        username: "Othmane",
        email: "test@test.com",
        password: "Password123",
        confirmPassword: "Password123",
      });
    });
  });
});
