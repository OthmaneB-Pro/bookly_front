import styled from "styled-components";

type TitleLoginType = {
  isRegister: boolean;
};

export default function TitleLogin({ isRegister }: TitleLoginType) {
  return <TitleStyled>{isRegister ? "S'inscrire" : "Se connecter"}</TitleStyled>;
}

const TitleStyled = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 8px;
`;
