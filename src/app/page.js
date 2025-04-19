"use client";

import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ProjectCard from "./components/project-card";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container mx-auto px-10 py-5 md:p-24 flex flex-col gap-3 md:gap-10 items-center">
      {/* About section */}
      <div className="flex flex-col gap-5 md:gap-10 md:pt-20 md:flex-row max-w-[700px] text-center md:text-left">
        <div className="md:w-1/3 my-auto">
          <div
            className={`rounded-full overflow-hidden w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mx-auto fade-up ${
              isVisible ? "visible" : ""
            }`}
          >
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
        <div className="md:w-2/3 max-w-xs sm:max-w-sm">
          <h1
            className={`text-xl sm:text-2xl font-bold fade-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "50ms" }}
          >
            <p>
              Hi I'm <span className="italic">Jessica Luong</span>,
            </p>
            <p>
              a <span className="text-accent">software engineer</span>.
            </p>
          </h1>
          <p
            className={`text-sm sm:text-base mt-4 fade-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            I am passionate about solving problems and building solutions.
          </p>
          <p
            className={`text-sm sm:text-base mt-4 fade-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            As a person, I value opportunities to learn and collaborate.
          </p>
          <div
            className={`text-3xl sm:text-4xl flex gap-5 py-3 text-accent justify-center md:justify-start transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="https://github.com/jessicaluong"
              className="hover:scale-110 transition-transform duration-200 hover:text-secondary"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jessica-luong/"
              className="hover:scale-110 transition-transform duration-200 hover:text-secondary"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div>
        <h1
          className={`text-xl sm:text-2xl font-bold mb-4 fade-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Projects
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            index={0}
            title="Grocery Price Tracker"
            imageSrc="./grocery-price-tracker.png"
            link="https://github.com/jessicaluong/grocery-price-tracker"
            description="Next.js, PostgreSQL, Prisma ORM, TypeScript"
          />
          <ProjectCard
            index={1}
            title="Virtual Agent"
            imageSrc="./virtual_agent.png"
            link="https://github.com/jessicaluong/virtual-agent"
            description="Python, Unity, C#, ML, WebSocket, TCP"
          />
          <ProjectCard
            index={2}
            title="Fitness Calendar"
            imageSrc="./fitness_calendar.png"
            link="https://github.com/jessicaluong/fitness-calendar"
            description="React, TypeScript, Tailwind CSS"
          />
          <ProjectCard
            index={3}
            title="Pac-Man"
            imageSrc="./pacman.png"
            link="https://github.com/jessicaluong/pacman-js"
            description="JavaScript, Node.js, Express, MongoDB, Jest"
          />
          <ProjectCard
            index={4}
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
