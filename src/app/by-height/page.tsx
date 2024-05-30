import { StudentAvatar } from "@/components/student-avatar";
import { fetchStudentData } from "@/lib/api";
import { groupStudentsBy } from "@/lib/utils";

/**
 * @param metricHeight Metric height in centimeters, ending in "cm". E.g. "180cm".
 * @returns Imperial height in feet and inches. E.g. "5'11". If the input parameter cannot be parsed correctly, it will be returned as is.
 */
const metricHeightToImperial = (metricHeight: string): string => {
  if (!metricHeight.match(/^(\d+)cm$/)) {
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
    <main className="container mx-auto">
      <h1 className="mb-4 text-3xl font-bold">By Height</h1>

      <table className="table-auto">
        <tbody>
          {sortedStudentsByHeight.map(([height, students]) => (
            <tr key={height}>
              <td className="max-w-32">{`${height} (${metricHeightToImperial(height)})`}</td>
              <td>
                <div className="flex flex-wrap gap-1">
                  {students
                    ?.sort((a, b) =>
                      a.PersonalName.localeCompare(b.PersonalName),
                    )
                    .map((student) => (
                      <StudentAvatar
                        key={student.Id}
                        student={student}
                        className="w-20"
                      />
                    ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
