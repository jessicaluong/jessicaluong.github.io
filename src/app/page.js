import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Home() {
  return (
    <main className="container mx-auto p-24 flex flex-col gap-10 items-center">

      {/* About section */}
      <div className="flex flex-col gap-10 md:flex-row md:py-20 max-w-[700px]">
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
        <div className="md:w-2/3 my-auto">
          <h1 className="text-xl sm:text-2xl font-bold dark:text-gray-200">
            <p>Hi I'm <span className="italic">Jessica Luong</span>, </p>
            <p>a <span className="text-cyan-700">software developer</span>.</p>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-4 dark:text-gray-300">
            I am passionate about solving complex challenges and committed to delivering 
            impactful software solutions.
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-4 dark:text-gray-300">
            Transitioning from nutritional science to computer science has enhanced my analytical 
            skills and adaptability in dynamic tech environments. This journey highlights my 
            commitment to continuous learning and my dedication to developing technologies that improve 
            our daily lives.
          </p>
          <div className="text-3xl md:text-4xl flex gap-5 py-3 text-cyan-700">
            <a href="https://github.com/jessicaluong"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/jessica-luong/"><AiFillLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div>
        <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Projects</h1>
        <div className="grid md:grid-cols-2 gap-5">
          <a className="group border rounded-lg p-4 overflow-hidden relative block w-64 h-64" href="https://github.com/jessicaluong/CMPT419-Project">
            <Image
              src="/gesture_genius.png"
              alt="Gesture Genius Image"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">View Code</span>
            </div>
            <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
              <h4 className="font-bold text-white">GestureGenius</h4>
              <p className="text-gray-300">Python, Unity, AI</p>
            </div>
          </a>
          <a className="group border rounded-lg p-4 overflow-hidden relative block w-64 h-64" href="https://github.com/jessicaluong/Chess">
            <Image
              src="/chess.png"
              alt="Chess Image"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">View Code</span>
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