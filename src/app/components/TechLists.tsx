import { skills } from "@/data/data";

export default function TechLists() {
  return (
    <section className="mt-14">
      <h2 className="text-xl font-semibold">Tech Stack</h2>
      <div className="flex flex-wrap gap-2.5 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm font-medium text-gray-800 bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
