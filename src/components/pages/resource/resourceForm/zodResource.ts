import z from "zod";

export const zodResource = z.object({
  id: z.string(),
  title: z.string().min(1, "Le titre est requis"),
  description: z.string().min(1, "La description est requise"),
  type: z.enum(["EVENT", "ROOM", "OPENSPACE", "OFFICE"]),
  capacity: z.number().min(1, "Capacité minimale = 1"),
  availability: z.boolean(),
  date: z.string().min(1, "La date est requise"),
});