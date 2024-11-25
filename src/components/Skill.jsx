import React, { useState, useEffect, useRef } from "react";
import { skill,progress } from "../utils/data";
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

      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10 md:gap-64 ">
        {/* left section  */ }
  <div className="md:flex flex-col hidden gap-28 text-2xl md:text-3xl font-bold pl-7 " data-aos="fade-up" >
    {skill.map((item, index) => (
      <p key={index}>{item.title}</p>
    ))}
  </div>

  {/* right-section-progress bar */}

  <div className="flex flex-col gap-8 pb-4"  ref={progressRef} data-aos="fade-up">
    {progress.map((item, index) => (
      <div key={index}>
        <div className="flex justify-between  pb-4">
          <span>{item.title}</span>
          <span className="pr-4">{isVisible ? `${item.percentage}` : 0}%</span>
        </div>

        <Progress
          motionDurationSlow="2s"
          motionEaseOutQuint="cubic-bezier(0.5, 0, 0.5, 1)"
          strokeColor="#df4b22"
          strokeLinecap="square"
          trailColor="#fff"
          type="line"
          percent={isVisible ? item.percentage : 0} // Pass numeric value directly
          className="lg:w-[500px] w-[320px]"
          status="active"
          format={(percent) => (
            <span style={{ color: "#333647" }}>{percent}%</span>
          )}
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
