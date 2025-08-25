import styled from "styled-components";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../reusable-ui/FormInput";
import Button from "../../../reusable-ui/Button";
import { loginSchema } from "./zodSchema";
import type { LoginType } from "../../../../types/user";
import { inputConfigs } from "./inputValues";
import { loginUser } from "../../../../api/auth";

export default function LoginForm() {
  const navigate = useNavigate();

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    console.log("Login :", data);
    try {
      await loginUser(data);
      navigate(`/home`);
    } catch (err) {
      console.log("Connexion interompue ", err);
      alert("Mauvais identifiant !");
    }
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      {inputConfigs
        .filter((input) => input.showOn.includes("login"))
        .map((input) => (
          <FormInput
            key={input.name}
            type={input.type}
            placeholder={input.placeholder}
            registration={form.register(input.name as keyof LoginType)}
            error={form.formState.errors[input.name as keyof LoginType]}
          />
        ))}

      <Button label="Se connecter" disabled={form.formState.isSubmitting} />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
