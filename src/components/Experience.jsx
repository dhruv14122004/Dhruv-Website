import aunwesha from '../assets/aunwesha_logo.jpg';
import lucene from '../assets/lucene1.png';
import java from '../assets/java.png'
import gd from '../assets/groupdocs.png'
import auto from '../assets/autocad1.jpg'


import { TbSquareRoundedNumber1 } from "react-icons/tb";
const Experience = () => {
  return (
    <div id="Experience" className="pt-28 lg:px-44 px-[20px] custom_yellow">
      <h2 className="text-5xl font-bold mb-28 text-center">Experience</h2>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-15">
      <div className="flex items-center">
          <TbSquareRoundedNumber1 className="text-[40px] text-red-500 transition-transform duration-300 hover:scale-150" />
        </div>
        <img
          className="h-[10rem] lg:w-[50%] lg:mx-10 mb-9"
          src={aunwesha}
          alt="Aunwesha Icon"
        />
        <div className="flex lg:justify-start justify-center gap-[5px]">
          <div className="bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center">
            <p className="text-md text-red-500 mt-2 mb-2 font-bold text-xl">May,2024 - July,2024</p>
            <p className="text-lg custom_yellow">
              During my internship at <a href="https://www.aunwesha.com/index.html" target='_blank' className='font-extrabold underline'>Aunwesha Knowledge Technologies</a>, 
              I focused on developing software solutions for extracting 
              and managing data from AutoCAD files in .dwg and .pdf formats. I 
              worked with tools like Cloud OCR, Aspose.CAD, and Apache Lucene to 
               address challenges such as handling large files and extracting 
               complex data. One key project involved building a document lookup system 
               using Apache Lucene, enabling efficient text indexing and search. I also 
               developed a user-friendly GUI for data extraction, allowing users to browse, 
               analyze, and save information. This internship strengthened my software development 
               skills and enhanced the company’s data handling efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className='pt-10 '>
        <h2 className='text-3xl font-bold text-center pb-10'>Tech-Stack Used</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img 
            className="h-[7rem] w-[7rem] border-4 border-red-500 rounded-full transition-transform duration-300 hover:scale-150" 
            src={java} 
            alt="java Logo" 
          />
          <img 
            className="h-[7rem] w-[7rem] border-4 border-red-500 rounded-full transition-transform duration-300 hover:scale-150" 
            src={lucene} 
            alt="lucene Logo" 
          />
          <img 
            className="h-[7rem] w-[7rem] border-4 border-red-500 rounded-full transition-transform duration-300 hover:scale-150" 
            src={gd} 
            alt="groupdocs Logo" 
          />
          <img 
            className="h-[7rem] w-[7rem] border-4 border-red-500 rounded-full transition-transform duration-300 hover:scale-150" 
            src={auto} 
            alt="AutoCad Logo" 
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
