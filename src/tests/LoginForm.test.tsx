import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../components/pages/login/loginElement/LoginForm";
import { loginUser } from "../api/auth";

vi.mock("../api/auth", () => ({
  loginUser: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe("LoginForm", () => {
  it("rend tous les champs du formulaire de connexion", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Se connecter/i })
    ).toBeInTheDocument();
  });

  it("affiche une erreur si les champs sont vides", async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /Se connecter/i });
    fireEvent.click(button);

    expect(
      await screen.findByText(/Veuillez entrer un email valide/i)
    ).toBeInTheDocument();
  });

  it("soumet correctement avec des données valides", async () => {
    (loginUser as jest.Mock).mockResolvedValueOnce({ success: true });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText(/Email/i), "test@test.com");
    await user.type(
      screen.getByPlaceholderText(/^Mot de passe$/i),
      "Password123"
    );

    await user.click(screen.getByRole("button", { name: /Se connecter/i }));

    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({
        email: "test@test.com",
        password: "Password123",
      });
    });
  });
});
