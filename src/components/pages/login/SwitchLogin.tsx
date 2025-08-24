import styled from "styled-components";

type SwitchLoginType = {
  isRegister: boolean;
  setIsRegister: (isRegister: boolean) => void;
};

export default function SwitchLogin({
  isRegister,
  setIsRegister,
}: SwitchLoginType) {
  return (
    <SwitchStyled>
      {isRegister ? "Déjà un compte ?" : "Pas encore de compte ?"}
      <span onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Se connecter" : "S'inscrire"}
      </span>
    </SwitchStyled>
  );
}

const SwitchStyled = styled.div`
  text-align: center;
  font-size: 0.95rem;
  color: #555;

  span {
    color: #ca903d;
    cursor: pointer;
    margin-left: 5px;
    font-weight: 500;
  }
`;
