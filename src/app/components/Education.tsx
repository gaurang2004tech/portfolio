import { education } from "@/data/data";

export default function Education() {
  return (
    <section className="mt-14" id="education">
      <h2 className="text-xl font-semibold">Education</h2>
      <div className="mt-4 pl-6 border-l-2 border-gray-200 relative">
        <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-gray-900" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">{education.institution}</h3>
            <p className="text-sm text-gray-600">
              {education.degree} &middot; GPA: {education.gpa}
            </p>
          </div>
          <time className="text-sm text-gray-500 mt-1 sm:mt-0 shrink-0">
            {education.date}
          </time>
        </div>
      </div>
    </section>
  );
}
