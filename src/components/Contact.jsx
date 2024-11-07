import React, { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_mw6ep97';
    const templateId = 'template_tto7phd';
    const publicKey = 'RjLKX1Ry4losnnJ6M';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Jayson Das K',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFeedback('Message sent successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error sending email", error);
        setFeedback('Failed to send message. Please try again.');
      });
  };

  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div id="contact" className="flex justify-center items-center bg-[#333647] w-full lg:h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-36 gap-10 p-6 pt-20 md:p-10">
        
        {/* Left Section */}
        <div className="flex flex-col text-white lg:gap-14" data-aos="fade-up">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Talk</h2>
            <p className="text-lg mb-6">Feel free to reach out with any questions or project inquiries. I'm here to help and discuss your ideas.</p>
          </div>
          <div>
            <a href="mailto:jaysondas007@gmail.com">
              <p className="text-lg md:text-xl text-[#df4b22] font-semibold">jaysondas007@gmail.com</p>
            </a>
            <a href="https://api.whatsapp.com/send?phone=918593834678" target="_blank" rel="noopener noreferrer">
              <p className="text-sm md:text-base mt-2">WhatsApp &emsp;: &emsp; +91 85938 34678</p>
            </a>

            <div className="flex gap-3 items-center mt-2">
              <a href="https://github.com/jaysonjyo">
                {/* GitHub SVG Icon */}
              </a>
              <a href="https://www.linkedin.com/in/jayson-das-k/">
                {/* LinkedIn SVG Icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-white">Let Me know here</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Enter your full name"
              className="w-full p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              value={email}
              placeholder="Enter email address"
              className="w-full p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <textarea
              value={message}
              placeholder="Write message"
              className="w-full h-32 p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
              onChange={(e) => setMessage(e.target.value)} 
              required
            ></textarea>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="flex items-center text-orange-500 hover:text-orange-600"
              >
                Send <span className="ml-2"> ⇒ </span>
              </button>
            </div>
          </form>
          {feedback && <p className="text-white mt-4">{feedback}</p>} {/* Feedback Message */}
        </div>
      </div>
    </div>
  );
}
