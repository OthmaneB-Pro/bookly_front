import styled from "styled-components";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../reusable-ui/FormInput";
import Button from "../../../reusable-ui/Button";
import { registerSchema } from "./zodSchema";
import type { RegisterType } from "../../../../types/user";
import { inputConfigs } from "./inputValues";

export default function RegisterForm() {
  const navigate = useNavigate();

  const form = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    console.log("Register:", data);
    navigate(`/home/${data.username}`);
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      {inputConfigs
        .filter((input) => input.showOn.includes("register"))
        .map((input) => (
          <FormInput
            key={input.name}
            type={input.type}
            placeholder={input.placeholder}
            registration={form.register(input.name as keyof RegisterType)}
            error={form.formState.errors[input.name as keyof RegisterType]}
          />
        ))}

      <Button label="S'inscrire" disabled={form.formState.isSubmitting} />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
