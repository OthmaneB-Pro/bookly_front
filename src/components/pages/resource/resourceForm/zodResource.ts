import z from "zod";

export const zodResource = z.object({
  id: z.string(),
  type: z.enum(["EVENT", "ROOM", "OPENSPACE", "OFFICE"]),
  title: z.string(),
  description: z.string(),
  capacity: z.number().nonnegative(),
  date: z.string(),
  availability: z.boolean(),
});
