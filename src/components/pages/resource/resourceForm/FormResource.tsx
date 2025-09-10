import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import type { ResourceType } from "../../../../types/resource";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { zodResource } from "./zodResource";
import FormInput from "../../../reusable-ui/FormInput";
import Button from "../../../reusable-ui/Button";

export default function FormResource() {
  const [isForm, setIsForm] = useState(false);
  const form = useForm<ResourceType>({
    resolver: zodResolver(zodResource),
  });

  const onSubmit = (data: ResourceType) => {
    console.log(data);
  };

  return (
    <FormResourceStyled>
      <button onClick={() => setIsForm(true)}>
        <IoAddCircleOutline />
      </button>

      {isForm && (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            placeholder="titre"
            error={form.formState.errors.title}
            registration={form.register("title")}
          />
          <Button label="Valider" disabled={form.formState.isSubmitting} />
        </form>
      )}
    </FormResourceStyled>
  );
}

const FormResourceStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 50px;
    height: 50px;

    svg {
      width: 50px;
      height: 50px;
      cursor: pointer;
      background-color: grey;
    }
  }
`;
