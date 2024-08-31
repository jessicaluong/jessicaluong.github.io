import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <main className="container mx-auto px-10 py-5 md:p-24 flex flex-col gap-3 md:gap-10 items-center">
      {/* About section */}
      <div className="flex flex-col gap-5 md:gap-10 md:pt-20 md:flex-row max-w-[700px]">
        <div className="md:w-1/3 my-auto">
          <div className="rounded-full overflow-hidden w-40 h-40 mx-auto">
            <Image
              className="rounded-lg shadow-md"
              src="/photo.png"
              alt="Me"
              width={160}
              height={160}
              priority
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
          <a
            className="group border rounded-lg p-4 overflow-hidden relative block w-64 h-64"
            href="https://github.com/jessicaluong/fitness-calendar"
          >
            <Image
              src="/fitness_calendar.png"
              alt="Fitness Calendar Image"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
                View Code
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
              <h4 className="font-bold text-white">Fitness Calendar</h4>
              <p className="text-gray-300">React, TypeScript, Tailwind CSS</p>
            </div>
          </a>
          <a
            className="group border rounded-lg p-4 overflow-hidden relative block w-64 h-64"
            href="https://github.com/jessicaluong/pacman-js"
          >
            <Image
              src="/pacman.png"
              alt="Pac-Man Game Image"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
                View Code
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
              <h4 className="font-bold text-white">Pac-Man</h4>
              <p className="text-gray-300">JavaScript</p>
            </div>
          </a>
          <a
            className="group border rounded-lg p-4 overflow-hidden relative block w-64 h-64"
            href="https://github.com/jessicaluong/Chess"
          >
            <Image
              src="/chess.png"
              alt="Chess Image"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
                View Code
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
              <h4 className="font-bold text-white">Chess</h4>
              <p className="text-gray-300">Java</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
