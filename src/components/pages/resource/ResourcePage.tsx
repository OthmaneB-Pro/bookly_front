import styled from "styled-components";
import Navbar from "../../layout/navbar/Navbar";
import CardResource from "./card/CardResource";
import FormResource from "./resourceForm/FormResource";
import { useState } from "react";
import type { ResourceType } from "../../../types/resource";

export default function ResourcePage() {
    const [resource, setResource] = useState<ResourceType[]>();
  
  return (
    <resourceContext>
    <PageWrapper>
      <Navbar />
      <FormResource />
      <CardResource />
    </PageWrapper>
    </resourceContext>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  padding: 30px 0;
`;
