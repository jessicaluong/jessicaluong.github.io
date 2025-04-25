"use client";

import ProjectCard from "./project-card";
import useFadeIn from "../hooks/fade-in";

export default function Projects() {
  const isVisible = useFadeIn();

  return (
    <div>
      <h1
        className={`text-xl sm:text-2xl font-bold mb-4 fade-up ${
          isVisible ? "visible" : ""
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          index={0}
          title="Grocery Price Tracker"
          imageSrc="./grocery-price-tracker.png"
          link="https://github.com/jessicaluong/grocery-price-tracker"
          description="Next.js, TypeScript, PostgreSQL, Prisma ORM"
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
  );
}
