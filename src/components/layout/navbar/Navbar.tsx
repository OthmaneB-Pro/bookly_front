import styled from "styled-components";
import Logo from "./Logo";
import Links from "./Links";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo />
      <Links />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  width: 600px;
  max-width: 900px;
  margin: 20px auto;
  background: #6c63ff;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #fff;
  border-radius: 30px;
`;
