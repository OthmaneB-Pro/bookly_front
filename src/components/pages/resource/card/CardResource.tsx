import { useEffect, useState } from "react";
import type { ResourceType } from "../../../../types/resource";
import { findAllResource } from "../../../../api/resource";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import EmptyResource from "./EmptyResource";

export default function CardResource() {
  const [resource, setResource] = useState<ResourceType[]>();

  useEffect(() => {
    findAllResource(setResource);
  }, []);

  return (
    <CardResourceStyled>
      {resource && resource.length > 0 ? (
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
