import { fetchStudentData } from "@/lib/api";
import { IMAGE_BASE_URL } from "@/lib/constants";
import { groupStudentsBy } from "@/lib/utils";
import Image from "next/image";

/**
 * @param metricHeight Metric height in centimeters, ending in "cm". E.g. "180cm".
 * @returns Imperial height in feet and inches. E.g. "5'11". If the input parameter cannot be parsed correctly, it will be returned as is.
 */
const metricHeightToImperial = (metricHeight: string): string => {
  const match = metricHeight.match(/^(\d+)cm$/);
  if (!match) {
    return metricHeight;
  }
  const cm = Number(metricHeight.slice(0, -2));
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  return `${feet}'${inches}`;
};

export default async function Page() {
  const data = await fetchStudentData();

  if (!data) {
    return <div>Failed to fetch data...</div>;
  }

  const studentsByHeight = groupStudentsBy(data, "CharHeightMetric");
  const heights = Object.keys(studentsByHeight);
  heights.sort().reverse();
  const sortedStudentsByHeight = heights.map(
    (height) => [height, studentsByHeight[height]] as const,
  );

  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-4 text-3xl font-bold">By Height</h1>
      <div className="flex flex-col gap-2">
        {sortedStudentsByHeight.map(([height, students]) => (
          <div key={height} className="flex">
            <div className="w-32 shrink-0 self-center">
              {`${height} (${metricHeightToImperial(height)})`}
            </div>
            <div className="flex flex-wrap gap-1">
              {students
                ?.sort((a, b) => a.PersonalName.localeCompare(b.PersonalName))
                .map((student) => (
                  <Image
                    key={student.Id}
                    src={`${IMAGE_BASE_URL}/student/collection/${student.Id}.webp`}
                    alt={student.PersonalName}
                    width={200}
                    height={226}
                    className="w-20 rounded-full"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
