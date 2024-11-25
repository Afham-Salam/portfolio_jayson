import React, { useState, useEffect, useRef } from "react";
import { skill ,progress} from "../utils/data";
import { Progress } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Skill() {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200, easing: "ease-in-out", once: false });
  }, []);
  
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after becoming visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className="bg-[#333647] lg:h-screen w-full text-white  flex flex-col items-center justify-center overflow-hidden ">
      <div className="p-6 gap-3 md:pl-20 flex flex-col md:flex-row md:justify-center md:gap-56  md:items-center  ">
        <p className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-up">
          Why hire me for<br></br> your project&nbsp;?
        </p>
        <div className="lg:w-[500px]  " data-aos="fade-up">
          <p>
          You should hire me for your project because I am a professional Flutter developer with six month internships of experience. I am committed to delivering high-quality, responsive applications
           on time, ensuring client satisfaction and a seamless user experience.
            I am eager to contribute to the success of your project.
          </p>
        </div>
      </div>
      <hr className="my-10 border-t-2  border-[#df4b22] border-dashed  mx-auto w-2/3" />


  {/* skill-section */}

  <div className="flex gap-6  flex-wrap justify-center items-center lg:px-20 pb-3 ">
  {progress.map((skill) => (
    <div
      key={skill.key}
      className="flex flex-col bg-gray-900 items-center justify-center h-40 w-48  rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl "
    >
      <img
        src={skill.img}
        alt={skill.title}
        className="w-10 h-40 md:h-40 object-contain"
      />
      <p className="mt-2 text-white text-lg font-semibold pb-4">{skill.title}</p>
    </div>
  ))}
</div>


    </div>
  );
}
