import { render, screen } from "@testing-library/react";
import TitleLogin from "../components/pages/login/formElement/TitleLogin";
import SwitchLogin from "../components/pages/login/formElement/SwitchLogin";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Test LoginPage", () => {
  let isRegister = false;
  const setIsRegister = vi.fn();

  // Title test
  test("Toggle title > connection", () => {
    render(<TitleLogin isRegister={isRegister} />);
    const loginTitleElement = screen.getByRole("heading", { level: 1 });
    expect(loginTitleElement).toHaveTextContent("Se connecter");
  });
  test("Toggle title > inscription", () => {
    isRegister = true;
    render(<TitleLogin isRegister={isRegister} />);
    const loginTitleElement = screen.getByRole("heading", { level: 1 });
    expect(loginTitleElement).toHaveTextContent("S'inscrire");
  });

  //Switch test
  test("Toggle switch > connection", () => {
    isRegister = false;
    render(
      <SwitchLogin isRegister={isRegister} setIsRegister={setIsRegister} />
    );
    const switchElement = screen.getByText(/Pas encore de compte ?/i);
    expect(switchElement).toBeInTheDocument();
  });
  test("Toggle switch > Click > inscription", async () => {
    render(
      <SwitchLogin isRegister={isRegister} setIsRegister={setIsRegister} />
    );
    const spanElement = screen.getByText(/S'inscrire/i);
    expect(spanElement).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(spanElement);

    expect(setIsRegister).toHaveBeenCalledWith(true);
  });
});


