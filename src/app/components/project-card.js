import Image from "next/image";

export default function ProjectCard({ title, imageSrc, link, description }) {
  return (
    <a
      className="group rounded-2xl p-4 overflow-hidden relative block w-64 h-64 transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
      href={link}
    >
      <Image
        src={imageSrc}
        alt={`${title} Image`}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
        <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
          View Code
        </span>
      </div>
      <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-gray-300 ">{description}</p>
      </div>
    </a>
  );
}
