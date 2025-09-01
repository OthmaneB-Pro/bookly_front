import { useEffect, useState } from "react";
import { findAllResource } from "../../../api/resource";
import type { ResourceType } from "../../../types/resource";
import { formatDate } from "../../../utils/formatDate";
import styled from "styled-components";

export default function ResourcePage() {
  const [resource, setResource] = useState<ResourceType[]>();

  useEffect(() => {
    findAllResource(setResource);
  }, []);

  return (
    <PageWrapper>
      <Navbar>
        <Logo>Bookly</Logo>
        <NavLinks>
          <a href="/home">Accueil</a>
          <a href="/reservation">Réservation</a>
          <a href="/">Déconnexion</a>
        </NavLinks>
      </Navbar>

      <div className="card">
        {resource && resource.length > 0 ? (
          resource.map((res) => (
            <CardStyled key={res.id}>
              <Image
                src="https://img.freepik.com/photos-premium/fleur-art-fleur-imagr-fond-naturel-vert_23455-3.jpg"
                alt={res.title}
              />
              <Content>
                <h2>{res.type}</h2>
                <h3>{res.title}</h3>
                <p>{res.description}</p>

                <Meta>
                  <p>Capacité : {res.capacity}</p>
                  <p>{formatDate(res.date)}</p>
                </Meta>
              </Content>
            </CardStyled>
          ))
        ) : (
          <EmptyMessage>Aucune ressource actuellement</EmptyMessage>
        )}
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  padding: 20px 0;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
`;

const Navbar = styled.nav`
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

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

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

const CardStyled = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  max-width: 900px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
  transform: scale(1.02);
}
`;

const Image = styled.img`
  width: 200px;
  height: 140px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  flex: 1;

  h2 {
    font-size: 14px;
    font-weight: 600;
    color: #6c63ff;
    margin: 0 0 4px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #222;
  }

  p {
    font-size: 14px;
    color: #555;
    margin: 4px 0;
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  p {
    font-size: 13px;
    color: #777;
    margin: 0;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #777;
  font-size: 16px;
  margin-top: 40px;
`;
