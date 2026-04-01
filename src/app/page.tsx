import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TechLists from "./components/TechLists";
import { Gallery6 } from "@/components/ui/gallery6";
import { galleryItems, about } from "@/data/data";

export default function Home() {
  return (
    <main className="pt-8">
      <Profile />
      <About />
      <div className="overflow-hidden">
        <Gallery6
          heading="Work"
          demoUrl={`mailto:${about.email}`}
          items={galleryItems}
        />
      </div>
      <Experience />
      <Education />
      <TechLists />
    </main>
  );
}
