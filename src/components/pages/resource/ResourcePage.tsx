import styled from "styled-components";
import Navbar from "../../layout/navbar/Navbar";
import CardResource from "./card/CardResource";
import FormResource from "./resourceForm/FormResource";
import { useState } from "react";
import type { ResourceType } from "../../../types/resource";
import { ResourceContext } from "../../../context/ResourceContext";

export default function ResourcePage() {
  const [resource, setResource] = useState<ResourceType[]>([]);

  const value = {
    resource,
    setResource,
  };

  return (
    <ResourceContext.Provider value={value}>
      <PageWrapper>
        <Navbar />
        <FormResource />
        <CardResource />
      </PageWrapper>
    </ResourceContext.Provider>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  padding: 30px 0;
`;
