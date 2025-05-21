import React, { useState } from 'react';
import profile from '../assets/me.jpeg';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      id="About"
      className="card w-full max-w-7xl min-h-[400px] mx-auto mt-10 text-center"
    >
      <h2 className="text-3xl mb-4 text-yellow-400">About Me</h2>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-15">
        <img
          className="w-[16rem] h-[16rem] object-cover lg:w-[50%] lg:h-[16rem] lg:mx-10 rounded-xl mb-9"
          src={profile}
          alt="profile"
        />
        <div className="flex lg:justify-start justify-center gap-[5px]">
          <div className="bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center">
            <p
              className={`text-2xl custom_yellow transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-full' : 'max-h-[16rem] overflow-hidden'
              }`}
            >
              Hi! I'm{' '}
              <span className="font-bold text-yellow-400">Dhruv Sharma</span>, a
              passionate software engineer with a love for building impactful
              digital experiences. I enjoy working with modern web technologies
              and am always eager to learn and grow. My interests include AI,
              blockchain, and full-stack development. Let's connect and create
              something amazing together!
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
    </section>
  );
};

export default About;
