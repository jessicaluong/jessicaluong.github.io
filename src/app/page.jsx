import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="container mx-auto px-10 py-5 md:p-24 flex flex-col gap-3 md:gap-10 items-center">
      <About />
      <Projects />
    </main>
  );
}
