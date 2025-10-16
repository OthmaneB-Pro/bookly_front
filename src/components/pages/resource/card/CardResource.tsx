import { useContext, useEffect, useState } from "react";
import { findAllResource } from "../../../../api/resource";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import EmptyResource from "./EmptyResource";
import { ResourceContext } from "../../../../context/ResourceContext";

export default function CardResource() {
  const { resource, setResource } = useContext(ResourceContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      findAllResource(setResource);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [setResource]);

  return (
    <CardResourceStyled>
      {isLoading ? (
        "Chargement en cours..."
      ) : resource && resource.length > 0 ? (
        resource.map((res) => (
          <Card
            key={res.id}
            src="https://img.freepik.com/photos-premium/fleur-art-fleur-imagr-fond-naturel-vert_23455-3.jpg"
            alt={res.title}
            title={res.title}
            type={res.type}
            description={res.description}
            capacity={res.capacity}
            date={res.date}
          />
        ))
      ) : (
        <EmptyResource />
      )}
    </CardResourceStyled>
  );
}

const CardResourceStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
