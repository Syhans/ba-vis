"use server";

import { studentArraySchema } from "@/lib/schemas";

export async function fetchStudentData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/SchaleDB/SchaleDB/main/data/en/students.min.json",
    {
      next: { revalidate: 3600 * 24 }, // revalidate every 24 hours
    },
  );
  //   console.log("response", response);
  if (!response.ok) {
    throw new Error("Failed to fetch student data");
  }
  const data = (await response.json()) as unknown;
  let parsedData;
  try {
    parsedData = studentArraySchema.parse(data);
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to parse student data");
  }
  return parsedData;
}

export async function fetchTime() {
  const response = await fetch("https://worldtimeapi.org/api/ip", {
    next: { revalidate: 5 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch time");
  }
  return response.json();
}
