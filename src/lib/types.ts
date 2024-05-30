import type { studentArraySchema, studentSchema } from "@/lib/schemas";
import type { z } from "zod";

export type Student = z.infer<typeof studentSchema>;
export type StudentArray = z.infer<typeof studentArraySchema>;
