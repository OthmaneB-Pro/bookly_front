import styled from "styled-components";
import Navbar from "../../layout/navbar/Navbar";
import CardResource from "./card/CardResource";
import FormResource from "./resourceForm/FormResource";

export default function ResourcePage() {
  return (
    <PageWrapper>
      <Navbar />
      <FormResource />
      <CardResource />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  padding: 30px 0;
`;
