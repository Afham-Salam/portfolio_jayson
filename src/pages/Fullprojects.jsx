import React from "react";
import { project } from "../utils/data";
import BackButton from "../components/BackButton";

export default function FullProjects() {
  return (
    <>
      <div className="w-full p-4 lg:p-8">
      <BackButton />
        {/* Projects Grid */}
        <div className="flex flex-wrap gap-10 justify-items-center mt-6">
          {project.map((item) => (
            <div
              key={item.title}
              className="text-white mt-5 flex flex-col bg-gray-800 w-[320px] h-[580px] rounded-lg p-4 hover:shadow-xl transition-shadow"
            >
              <img
                className="rounded-lg w-full h-[230px] "
                src={item.image}
                alt={item.title}
              />
              <p className="lg:text-lg md:text-sm font-semibold mt-4 mb-2">
                {item.title}
              </p>
              <p className="text-sm text-gray-300 flex-1 overflow-y-auto text-justify mb-4">
                {item.details}
              </p>
              <div className="bg-gray-700 w-full py-2 px-3 rounded-lg mt-auto">
                <a
                  href={item.link}
                  className="flex justify-between items-center"
                >
                  <small className="text-[#df4b22]">Available on ⇒</small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03
                    1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
