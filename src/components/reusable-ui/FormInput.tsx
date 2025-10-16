import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

export type FormInputType = {
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

export default function FormInput({ type = "text", placeholder, registration, error }: FormInputType) {
  return (
    <FormInputStyled>
      <input type={type} placeholder={placeholder} {...registration} />
      {error?.message && <p>{error.message}</p>}
    </FormInputStyled>
  );
}

const FormInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border 0.2s ease;

    &:focus {
      border-color: #c5a880;
    }
  }

  p {
    font-size: 0.85rem;
    color: #c0392b;
    margin: 0;
  }
`;
