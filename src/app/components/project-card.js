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
      className={`group rounded-2xl p-4 overflow-hidden relative block w-64 h-64 transform hover:scale-105 shadow-lg hover:shadow-2xl fade-up ${
        isVisible ? "visible" : ""
      }`}
      href={link}
    >
      <Image
        src={imageSrc}
        alt={`${title} Image`}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center py-24 transition-opacity duration-300 ease-in-out "></div>
      <div className="absolute bottom-0 left-0 p-3 h-24 w-full bg-bg-90 dark:bg-gray-800/90">
        <h4 className="font-bold dark:text-white dark:text-shadow">{title}</h4>
        <div className="flex flex-wrap gap-1 mt-1">
          {description.split(", ").map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-full bg-accent-70 text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
