import React from "react";
import { project } from "../utils/data";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <>
      <div
        id="projects"
        className="bg-gray-900 lg:h-screen w-full flex flex-col gap-16 justify-center items-center"
      >
        {/* Header Section */}
        <div className="p-6 gap-3 text-white lg:pl-20 flex flex-col md:flex-row md:justify-around md:gap-96 md:items-center pt-20">
          <p className="text-2xl md:text-5xl font-bold mb-4" data-aos="fade-up">
            Projects
          </p>
          <div data-aos="fade-up">
            <p className="text-2xl font-bold">
              All Creative Works - Selected Projects.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-items-center">
          {project.slice(0,3).map((item) => (
            <div
              key={item.title} // Unique key for each item
              className="text-white flex flex-col text-justify  bg-gray-800 w-[320px] h-full gap-5 items-center justify-center rounded-lg p-4"
            >
              <img
                className="rounded-lg w-[230px]"
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <p className="lg:text-lg md:text-sm font-semibold">
                {item.title}
              </p>
              <p className="text-sm p-2 text-gray-300">{item.details}</p>
              <div className="bg-gray-700 w-full py-2 px-3 rounded-lg">
                <a href={item.link} className="flex justify-between">
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

      {/* Show More Button */}
      <div className="flex justify-center w-full bg-gray-900 py-10 mt-6">
        <Link
          to="/fullprojects"
          className="text-white bg-[#df4b22] hover:bg-[#d85430db] rounded-md py-2 px-3"
        >
          Show More
        </Link>
      </div>
    </>
  );
}
