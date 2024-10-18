import { useState } from 'react';
import profile from '../assets/hero-img.png';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="About" className="pt-28 lg:px-44 px-[20px] custom_yellow">
      <h2 className="text-5xl font-bold mb-28 text-center">About Me</h2>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-15">
        <img
          className="h-[16rem] lg:w-[50%] lg:mx-10 rounded-xl mb-9"
          src={profile}
          alt="profile"
        />
        <div className="flex lg:justify-start justify-center gap-[5px]">
          <div className="bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center">
            <p
              className={`text-lg custom_yellow transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-full' : 'max-h-[16rem] overflow-hidden'
              }`}
            >
              I’m Dhruv Sharma, currently in my third year of BTech at{' '}
              <a
                className="font-bold underline"
                href="https://jklu.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JK Lakshmipat University
              </a>
              , with a focus on IoT, AI, and embedded systems. I have a strong
              passion for using technology to solve complex, real-world
              problems, and my academic journey has allowed me to explore
              innovative solutions that blend hardware and software seamlessly.
              <br />
              With a keen interest in embedded systems and machine learning,
              I’ve developed hands-on experience working with microcontrollers,
              sensors, and cloud platforms. My technical toolkit includes
              Python, C, and client-server computing, and I’m always eager to
              expand my knowledge. I enjoy the challenge of pushing the
              boundaries of what’s possible, whether it’s through exploring new
              technologies or working on projects that drive efficiency and
              innovation.
              <br />
              Outside of academics, I thrive in collaborative environments,
              constantly seeking opportunities to learn, grow, and make
              meaningful contributions to the tech world. I believe that
              technology holds the key to creating a more connected and
              efficient future, and I’m excited to be part of that journey.
            </p>
            <button
              className="mt-4 text-red-500 font-bold hover:underline"
              onClick={toggleReadMore}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
