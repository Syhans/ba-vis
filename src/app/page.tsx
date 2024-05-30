import { fetchStudentData } from "@/lib/api";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/lib/constants";

export default async function HomePage() {
  const data = await fetchStudentData();

  if (!data) {
    return <div>Failed to fetch data...</div>;
  }

  console.log("data", data);

  const someData = data.slice(0, 16);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="grid grid-cols-4 gap-4">
        {someData.map((student) => (
          <Image
            key={student.Id}
            src={`${IMAGE_BASE_URL}/student/collection/${student.Id}.webp`}
            alt={student.PersonalName}
            width={200}
            height={226}
            className="rounded-full"
          />
        ))}
      </div>
    </main>
  );
}
