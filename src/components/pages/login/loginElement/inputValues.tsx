import type { LoginType, RegisterType } from "../../../../types/user";

type InputName = keyof LoginType | keyof RegisterType;

export type InputConfig = {
  name: InputName;
  type: string;
  placeholder: string;
  showOn: ("login" | "register")[];
};

export const inputConfigs: InputConfig[] = [
  {
    name: "username",
    type: "text",
    placeholder: "Prénom",
    showOn: ["register"],
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    showOn: ["login", "register"],
  },
  {
    name: "password",
    type: "password",
    placeholder: "Mot de passe",
    showOn: ["login", "register"],
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirmer le mot de passe",
    showOn: ["register"],
  },
];
