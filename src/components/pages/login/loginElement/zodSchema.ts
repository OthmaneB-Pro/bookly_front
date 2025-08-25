import * as z from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(1, "Veuillez entrer un nom valide"),
    email: z.email("Veuillez entrer un email valide"),
    password: z
      .string()
      .min(7, "Le mot de passe doit contenir au moins 7 caractères")
      .regex(
        /[A-Z]/,
        "Le mot de passe doit contenir au moins une lettre majuscule"
      )
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe doivent correspondre",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.email("Veuillez entrer un email valide"),
  password: z
    .string()
    .min(7, "Le mot de passe doit contenir au moins 7 caractères")
    .regex(
      /[A-Z]/,
      "Le mot de passe doit contenir au moins une lettre majuscule"
    )
    .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
});
