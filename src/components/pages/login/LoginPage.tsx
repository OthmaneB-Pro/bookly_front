import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { loginSchema, registerSchema } from "./zodSchema";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import type { LoginType, RegisterType } from "../../../types/user";
import FormInput from "../../reusable-ui/FormInput";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const loginForm = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const registerForm = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const onLoginSubmit: SubmitHandler<LoginType> = (data) => {
    console.log("Login:", data);
    navigate(`/home/${data.email}`);
  };

  const onRegisterSubmit: SubmitHandler<RegisterType> = (data) => {
    console.log("Register:", data);
    navigate(`/home/${data.username}`);
  };

  return (
    <Page>
      <Form
        onSubmit={
          isRegister
            ? registerForm.handleSubmit(onRegisterSubmit)
            : loginForm.handleSubmit(onLoginSubmit)
        }
      >
        <Title>{isRegister ? "S'inscrire" : "Se connecter"}</Title>

        {isRegister && (
          <FormInput
            placeholder="Prénom"
            registration={registerForm.register("username")}
            error={registerForm.formState.errors.username}
          />
        )}

        <FormInput
          type="email"
          placeholder="Email"
          registration={
            isRegister
              ? registerForm.register("email")
              : loginForm.register("email")
          }
          error={
            isRegister
              ? registerForm.formState.errors.email
              : loginForm.formState.errors.email
          }
        />

        <FormInput
          type="password"
          placeholder="Mot de passe"
          registration={
            isRegister
              ? registerForm.register("password")
              : loginForm.register("password")
          }
          error={
            isRegister
              ? registerForm.formState.errors.password
              : loginForm.formState.errors.password
          }
        />

        {isRegister && (
          <FormInput
            type="password"
            placeholder="Confirmer votre mot de passe"
            registration={registerForm.register("confirmPassword")}
            error={registerForm.formState.errors.confirmPassword}
          />
        )}

        <Button
          disabled={
            isRegister
              ? registerForm.formState.isSubmitting
              : loginForm.formState.isSubmitting
          }
        >
          Valider
        </Button>
        <Switch>
          {isRegister ? "Déjà un compte ?" : "Pas encore de compte ?"}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Se connecter" : "S'inscrire"}
          </span>
        </Switch>
      </Form>
    </Page>
  );
}
const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7fe;
`;

const Form = styled.form`
  width: 400px;
  padding: 32px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 8px;
`;


const Button = styled.button`
  padding: 12px;
  background: #222;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:disabled {
    background: #999;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #444;
  }
`;

const Switch = styled.div`
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
