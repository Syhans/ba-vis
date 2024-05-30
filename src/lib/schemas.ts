import { z } from "zod";

export const studentSchema = z.object({
  Id: z.number(),
  PathName: z.string(),
  FamilyName: z.string(),
  PersonalName: z.string(),
  CharHeightMetric: z.string(),
});
export const studentArraySchema = z.array(studentSchema);
