"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectCard({
  title,
  imageSrc,
  link,
  description,
  index = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 350 + index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <a
      className={`group rounded-2xl p-4 overflow-hidden relative block w-64 h-64 transform transition-all duration-700 ease-out hover:scale-105 shadow-lg hover:shadow-2xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      href={link}
    >
      <Image
        src={imageSrc}
        alt={`${title} Image`}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
        <span className="text-white opacity-0 group-hover:opacity-100">
          View Code
        </span>
      </div>
      <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
        <h4 className="font-bold text-white text-shadow">{title}</h4>
        <div className="flex flex-wrap gap-1 mt-1">
          {description.split(", ").map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-full bg-accent-50 text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
