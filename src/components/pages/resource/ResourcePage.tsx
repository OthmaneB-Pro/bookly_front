import styled from "styled-components";
import Navbar from "../../layout/navbar/Navbar";
import CardResource from "./CardResource";

export default function ResourcePage() {
  return (
    <PageWrapper>
      <Navbar />
      <CardResource />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  padding: 30px 0;
`;
