import { render, screen } from "@testing-library/react";
import FormResource from "../components/pages/resource/resourceForm/FormResource";
import { ResourceContext } from "../context/ResourceContext";
import userEvent from "@testing-library/user-event";

test("Test formulaire -> création d'une ressource ", async () => {
  const mockSetResource = jest.fn();

  render(
    <ResourceContext.Provider
      value={{ setResource: mockSetResource, resource: [] }}
    >
      <FormResource />
    </ResourceContext.Provider>
  );
  const user = userEvent.setup();
  await user.click(screen.getByRole("button"));
 
  const ButtonForm = screen.getByLabelText(/Valider/i);
  expect(ButtonForm).toBeInTheDocument(); 
});
