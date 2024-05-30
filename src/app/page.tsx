import { fetchStudentData } from "@/lib/api";
import { StudentAvatar } from "@/components/student-avatar";

export default async function HomePage() {
  const data = await fetchStudentData();

  if (!data) {
    return <div>Failed to fetch data...</div>;
  }

  const someData = data.slice(0, 8);

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <h1 className="max-w-prose text-4xl font-bold">
        this is a placeholder page.
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {someData.map((student) => (
          <StudentAvatar key={student.Id} student={student} />
        ))}
      </div>
    </main>
  );
}
