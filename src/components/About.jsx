import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200, easing: "ease-in-out", once: false });
  }, []);
  
  
  return (
    <div
      id="about"
      className="bg-gray-900 text-white lg:min-h-screen w-full flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-36 gap-10 p-6 md:p-10">
        {/* Left Section */}
        <div className="flex flex-col lg:gap-14" data-aos="fade-up"
          
          
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Any type of question & Discussion.
            </h2>
            <p className="text-lg mb-6">Let's Talk</p>
          </div>
          <div>
            <a href="mailto:jaysondas007@gmail.com">
              <p className="text-lg md:text-xl text-[#df4b22] font-semibold">
                jaysondas007@gmail.com
              </p>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=918593834678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm md:text-base mt-2">
                WhatsApp &emsp;: &emsp; +91 85938 34678
              </p>
            </a>

            <div className="flex gap-3 items-center mt-2">
              <a href="https://github.com/jaysonjyo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="white"
                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1
             77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3"
                  />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/jayson-das-k/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="white"
                    d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="flex flex-col gap-14 pt-4" data-aos="fade-up"
          
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg md:text-base">
              I am a professional Flutter developer with six internships under
              my belt, dedicated to delivering high-quality, responsive
              applications that exceed client expectations.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base">
                <strong>Name&emsp;&emsp; &emsp;: &emsp;&emsp;</strong> Jayson
                Das K
              </p>
              <p className="text-sm md:text-base">
                <strong>Email&emsp;&emsp;&nbsp; &emsp;: &emsp;&emsp;</strong>
                <a href="mailto:jaysondas007@gmail.com">
                  jaysondas007@gmail.com
                </a>
              </p>
            </div>
          </div>
          <a
  href="/JaysonDas.pdf"
  download
  className="bg-[#df4b22] hover:bg-[#d85430db] text-white font-semibold py-2 rounded w-[150px] text-center inline-block"
>
  Download CV
</a>
        </div>
      </div>
    </div>
  );
}
