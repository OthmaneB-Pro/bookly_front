import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { loginSchema, registerSchema } from "./zodSchema";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type LoginType = {
  email: string;
  password: string;
};

type RegisterType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

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
          <>
            <Input
              type="text"
              placeholder="Prénom"
              {...registerForm.register("username")}
            />
            <Error>{registerForm.formState.errors.username?.message}</Error>
          </>
        )}

        <Input
          type="email"
          placeholder="Email"
          {...(isRegister
            ? registerForm.register("email")
            : loginForm.register("email"))}
        />
        <Error>
          {
            (isRegister
              ? registerForm.formState.errors.email
              : loginForm.formState.errors.email
            )?.message
          }
        </Error>

        <Input
          type="password"
          placeholder="Mot de passe"
          {...(isRegister
            ? registerForm.register("password")
            : loginForm.register("password"))}
        />
        <Error>
          {
            (isRegister
              ? registerForm.formState.errors.password
              : loginForm.formState.errors.password
            )?.message
          }
        </Error>

        {isRegister && (
          <>
            <Input
              type="password"
              placeholder="Confirmer votre mot de passe"
              {...registerForm.register("confirmPassword")}
            />
            <Error>
              {registerForm.formState.errors.confirmPassword?.message}
            </Error>
          </>
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

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s ease;

  &:focus {
    border-color: #c5a880;
  }
`;

const Error = styled.p`
  font-size: 0.85rem;
  color: #c0392b;
  margin: -8px 0 0 0;
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
