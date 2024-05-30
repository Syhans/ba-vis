import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Student } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupStudentsBy(
  students: Student[],
  key: keyof Student,
): Record<string, Student[]> {
  return students.reduce(
    (acc, student) => {
      const group = student[key];
      if (!acc[group]) {
        acc[group] = [];
      }
      // @ts-expect-error Object being possibly undefined seems like a false positive
      acc[group].push(student);
      return acc;
    },
    {} as Record<string, Student[]>,
  );
}
