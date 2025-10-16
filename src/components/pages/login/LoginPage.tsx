import styled from "styled-components";
import TitleLogin from "./formElement/TitleLogin";
import { useState } from "react";
import SwitchLogin from "./formElement/SwitchLogin";
import LoginForm from "./loginElement/LoginForm";
import RegisterForm from "./loginElement/RegisterForm";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <LoginPageStyled>
      <div className="form">
        <TitleLogin isRegister={isRegister} />
        {isRegister ? <RegisterForm /> : <LoginForm />}
        <SwitchLogin isRegister={isRegister} setIsRegister={setIsRegister} />
      </div>
    </LoginPageStyled>
  );
}
const LoginPageStyled = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7fe;

  .form {
    width: 400px;
    padding: 32px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
