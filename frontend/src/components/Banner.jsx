import {FiGithub} from 'react-icons/fi'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi';
import {LuMouse} from 'react-icons/lu'
import heroimg from "../assets/me.jpeg"
import resume from "../assets/Dhruv_Sharma_Resume.pdf"

const Banner = () => {
    return (
      <section className="text-center pt-16 pb-10 lg:w-full">
        <h2 className="text-2xl text-gray-300">Hello, my name is</h2>
        <h1 className="text-6xl md:text-7xl my-4 font-extrabold text-white drop-shadow-lg">Dhruv Sharma</h1>
        <p className="text-2xl md:text-3xl text-yellow-400 mb-6">I am a Software Engineer...</p>
        <div className="flex gap-4 justify-center mb-8">
            <a href={resume} download>
              <button className="btn px-8 py-2 mt-2 shadow-lg">Download Resume</button>
            </a>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around items-center custom_yellow">
            <div className="flex gap-4 lg:flex-col justify-center mt-8">
                <a href="https://github.com/dhruv14122004" target='_blank' rel="noopener noreferrer">
                    <FiGithub className="bg-gray-900 p-2 text-3xl rounded-full shadow-md transition-transform duration-300 hover:scale-125 hover:bg-yellow-400 hover:text-gray-900"/>
                </a>
                <a href="https://www.linkedin.com/in/dhruv-sharma-142932252" target='_blank' rel="noopener noreferrer">
                    <FaLinkedinIn className="bg-gray-900 p-2 text-3xl rounded-full shadow-md transition-transform duration-300 hover:scale-125 hover:bg-blue-400 hover:text-gray-900"/>
                </a>
                <a href="https://www.youtube.com/watch?v=T4EAjfDcYtA" target='_blank' rel="noopener noreferrer">
                    <FaFacebookF className="bg-gray-900 p-2 text-3xl rounded-full shadow-md transition-transform duration-300 hover:scale-125 hover:bg-red-400 hover:text-gray-900"/>
                </a>
                <a href="#" rel="noopener noreferrer">
                    <FiInstagram className="bg-gray-900 p-2 text-3xl rounded-full shadow-md transition-transform duration-300 hover:scale-125 hover:bg-pink-400 hover:text-gray-900"/>
                </a>
            </div>
            <img className='hidden lg:block lg:h-100 lg:w-auto max-w-[28rem] mt-10 rounded-2xl shadow-2xl border-4 border-yellow-400 object-cover' src={heroimg} alt="Profile" />
            <div className='hidden lg:flex flex-col justify-center items-center ml-8'>
                <LuMouse className='text-2xl animate-bounce mb-4 text-yellow-400'/>
                <p className='[writing-mode:vertical-rl] text-gray-400 text-sm'>
                    {new Date().toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        weekday: 'long'
                    })}
                </p>
            </div>
        </div>
      </section>
    );
  };

export default Banner;