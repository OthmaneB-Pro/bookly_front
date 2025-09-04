import styled from "styled-components";

export default function EmptyResource() {
  return <EmptyMessage>Aucune ressource actuellement</EmptyMessage>;
}

const EmptyMessage = styled.p`
  text-align: center;
  color: #777;
  font-size: 16px;
  margin-top: 40px;
`;
