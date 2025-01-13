import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ProjectCard from "./components/project-card";

export default function Home() {
  return (
    <main className="container mx-auto px-10 py-5 md:p-24 flex flex-col gap-3 md:gap-10 items-center">
      {/* About section */}
      <div className="flex flex-col gap-5 md:gap-10 md:pt-20 md:flex-row max-w-[700px]">
        <div className="md:w-1/3 my-auto">
          <div className="rounded-full overflow-hidden w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mx-auto">
            <Image
              className="rounded-lg shadow-md"
              src="/portrait.png"
              alt="Me"
              width={192}
              height={192}
              priority
              style={{
                transform: "scale(1.6) translateY(-5px) translateX(3px)",
              }}
            />
          </div>
        </div>
        <div className="md:w-2/3 my-auto ">
          <h1 className="text-xl sm:text-2xl font-bold dark:text-gray-200">
            <p>
              Hi I'm <span className="italic">Jessica Luong</span>,
            </p>
            <p>
              a <span className="text-cyan-700">software developer</span>.
            </p>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-4 dark:text-gray-300">
            I am passionate about solving problems and delivering impactful
            software solutions.
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-4 dark:text-gray-300">
            As a person, I value adaptability and opportunities to learn.
          </p>
          <div className="text-3xl md:text-4xl flex gap-5 py-3 text-cyan-700">
            <a href="https://github.com/jessicaluong">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/jessica-luong/">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div>
        <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Projects
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            title="Virtual Agent"
            imageSrc="./virtual_agent.png"
            link="https://github.com/jessicaluong/virtual-agent"
            description="Python, Unity, C#, ML, WebSocket, TCP"
          />
          <ProjectCard
            title="Fitness Calendar"
            imageSrc="./fitness_calendar.png"
            link="https://github.com/jessicaluong/fitness-calendar"
            description="React, TypeScript, Tailwind CSS"
          />
          <ProjectCard
            title="Pac-Man"
            imageSrc="./pacman.png"
            link="https://github.com/jessicaluong/pacman-js"
            description="JavaScript, Node.js, Express, MongoDB, Jest"
          />
          <ProjectCard
            title="Chess"
            imageSrc="./chess.png"
            link="https://github.com/jessicaluong/Chess"
            description="Java, JUnit"
          />
        </div>
      </div>
    </main>
  );
}
