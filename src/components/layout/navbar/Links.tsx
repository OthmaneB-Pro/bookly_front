import styled from "styled-components";

export default function Links() {
  return (
    <NavLinks>
      <a href="/home">Accueil</a>
      <a href="/reservation">Réservation</a>
      <a href="/">Déconnexion</a>
    </NavLinks>
  );
}

const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;
