import { about } from "@/data/data";

export default function About() {
  return (
    <section className="mt-10" id="about">
      <h2 className="text-xl font-semibold">About</h2>
      <p className="text-base text-gray-600 mt-3 leading-relaxed">
        {about.about}
      </p>
    </section>
  );
}
