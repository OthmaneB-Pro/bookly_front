import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { loginSchema, registerSchema } from "./zodSchema";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={isRegister ? registerForm.handleSubmit(onRegisterSubmit) : loginForm.handleSubmit(onLoginSubmit)}>
      <h1>{isRegister ? "S'inscrire" : "Se connecter"}</h1>

      {isRegister && (
        <>
          <input
            type="text"
            placeholder="Prénom"
            {...registerForm.register("username")}
          />
          <p>{registerForm.formState.errors.username?.message}</p>
        </>
      )}

      <input
        type="email"
        placeholder="Email"
        {...(isRegister ? registerForm.register("email") : loginForm.register("email"))}
      />
      <p>{(isRegister ? registerForm.formState.errors.email : loginForm.formState.errors.email)?.message}</p>

      <input
        type="password"
        placeholder="Mot de passe"
        {...(isRegister ? registerForm.register("password") : loginForm.register("password"))}
      />
      <p>{(isRegister ? registerForm.formState.errors.password : loginForm.formState.errors.password)?.message}</p>

      {isRegister && (
        <>
          <input
            type="password"
            placeholder="Confirmer votre mot de passe"
            {...registerForm.register("confirmPassword")}
          />
          <p>{registerForm.formState.errors.confirmPassword?.message}</p>
        </>
      )}

      <button disabled={isRegister ? registerForm.formState.isSubmitting : loginForm.formState.isSubmitting}>
        Valider
      </button>

      <div>
        {isRegister ? "Déjà un compte ?" : "Pas encore de compte ?"}{" "}
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "se connecter" : "s'inscrire"}
        </span>
      </div>
    </form>
  );
}
