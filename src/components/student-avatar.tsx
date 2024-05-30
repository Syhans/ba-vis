import { IMAGE_BASE_URL } from "@/lib/constants";
import type { Student } from "@/lib/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function StudentAvatar({
  student,
  className,
}: {
  student: Student;
  className?: string;
}) {
  return (
    <a
      key={student.Id}
      href={`https://schale.gg/?chara=${student.PathName}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image
        src={`${IMAGE_BASE_URL}/student/collection/${student.Id}.webp`}
        alt={student.PersonalName}
        width={200}
        height={226}
        className={cn("overflow-hidden rounded-full", className)}
      />
    </a>
  );
}
