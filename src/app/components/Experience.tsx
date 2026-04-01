import { experience } from "@/data/data";

export default function Experience() {
  return (
    <section className="mt-14" id="experience">
      <h2 className="text-xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-10">
        {experience.map((role, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-gray-200">
            <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-gray-900" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{role.title}</h3>
                <p className="text-sm text-gray-500">
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 decoration-gray-300 hover:decoration-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-0.5"
                  >
                    {role.company}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                  </a>
                  {" "}&middot; {role.location}
                </p>
              </div>
              <time className="text-sm text-gray-500 mt-1 sm:mt-0 shrink-0">
                {role.date}
              </time>
            </div>
            <ul className="mt-3 space-y-1.5">
              {role.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-400"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
