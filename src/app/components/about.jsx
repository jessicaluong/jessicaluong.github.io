"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import useFadeIn from "../hooks/fade-in";

export default function About() {
  const isVisible = useFadeIn();

  return (
    <div className="flex flex-col gap-5 md:gap-10 md:pt-20 md:flex-row max-w-[700px] text-center md:text-left">
      <div className="md:w-1/3 my-auto">
        <div
          className={`rounded-full overflow-hidden w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mx-auto fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <img
            className="rounded-lg shadow-md"
            src="/portrait.png"
            alt="Me"
            width={192}
            height={192}
            loading="eager"
            style={{
              transform: "scale(1.6) translateY(-5px) translateX(3px)",
            }}
          />
        </div>
      </div>
      <div className="md:w-2/3 max-w-xs sm:max-w-sm md:max-w-md">
        <h1
          className={`text-xl sm:text-2xl font-bold fade-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "50ms" }}
        >
          <p>
            Hi, I'm <span className="italic">Jessica Luong</span>,
          </p>
          <p>
            a <span className="text-accent">software engineer</span>.
          </p>
        </h1>
        <div
          className={`inline-flex items-center bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-xs mt-4 fade-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "60ms" }}
        >
          <span className="mr-1">📍</span> Vancouver, BC, Canada
        </div>

        <p
          className={`text-sm sm:text-base mt-4 fade-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          Computer Science graduate with internship experience in backend
          development.
        </p>
        <p
          className={`text-sm sm:text-base mt-4 fade-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          For the past year, I've been building full-stack applications to
          deliver complete software solutions.
        </p>
        <div
          className={`text-3xl sm:text-4xl flex gap-5 py-3 text-accent justify-center md:justify-start transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "240ms" }}
        >
          <a
            href="https://github.com/jessicaluong"
            className="hover:scale-110 transition-transform duration-200 hover:text-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jessica-luong/"
            className="hover:scale-110 transition-transform duration-200 hover:text-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
