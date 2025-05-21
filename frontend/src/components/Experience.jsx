import React from "react";

const Experience = () => {
  return (
    <section id="Experience" className="card w-full max-w-7xl min-h-[400px] mx-auto mt-10 text-center">
      <h2 className="text-3xl mb-4 text-yellow-400">Experience</h2>
      <div className="bg-gray-900 rounded-xl p-6 shadow border border-yellow-400 flex flex-col items-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">Software Engineer Intern</h3>
        <span className="text-yellow-400 font-semibold mb-1">Anwesha Knowledge Technologies (May 2024 - July 2024)</span>
        <p className="text-2xl text-gray-300 text-base mt-2">
          Worked as a Software Engineer Intern at Anwesha Knowledge Technologies, contributing to real-world projects and enhancing my skills in software development.
        </p>
        <div className="mt-6 w-full">
          <h4 className="text-2xl font-semibold text-yellow-400 mb-2">Tech Stack Used</h4>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <span className="bg-gray-800 text-yellow-400 px-6 py-2 rounded-full shadow-lg border border-yellow-400 text-base font-semibold tracking-wide uppercase">Java</span>
            <span className="bg-gray-800 text-yellow-400 px-6 py-2 rounded-full shadow-lg border border-yellow-400 text-base font-semibold tracking-wide uppercase">Lucene</span>
            <span className="bg-gray-800 text-yellow-400 px-6 py-2 rounded-full shadow-lg border border-yellow-400 text-base font-semibold tracking-wide uppercase">Apache</span>
            <span className="bg-gray-800 text-yellow-400 px-6 py-2 rounded-full shadow-lg border border-yellow-400 text-base font-semibold tracking-wide uppercase">OCR</span>
            <span className="bg-gray-800 text-yellow-400 px-6 py-2 rounded-full shadow-lg border border-yellow-400 text-base font-semibold tracking-wide uppercase">Java Swing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
