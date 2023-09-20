import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().refine(value => value.trim() !== "", {
    message: "Title is required",
  }),
  descripcion: z.string().refine(value => value.trim() !== "", {
    message: "Description must be a non-empty string",
  }),
  date: z.string().optional().refine(value => {
    if (value) {
      const date = new Date(value);
      return !isNaN(date.getTime()); // Check if it's a valid date
    }
    return true; // Allow empty date
  }, {
    message: "Invalid date format",
  }),
});
