import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import {
  loginSchema,
  registerSchema,
} from "../components/pages/login/loginElement/zodSchema";
import type { LoginType, RegisterType } from "../types/user";

type Mode = "login" | "register";

export function useAuthForms(mode: Mode) {
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

  const form = mode === "login" ? loginForm : registerForm;
  const onSubmit =
    mode === "login"
      ? loginForm.handleSubmit(onLoginSubmit)
      : registerForm.handleSubmit(onRegisterSubmit);

  return { form, onSubmit };
}
