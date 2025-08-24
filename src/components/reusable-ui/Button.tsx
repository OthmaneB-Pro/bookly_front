import styled from "styled-components";

type ButtonType = {
    disabled : boolean;
    label : string;
}

export default function Button({disabled, label} : ButtonType) {
  return <ButtonStyled disabled={disabled}>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button`
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
