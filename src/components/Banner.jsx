import {FiGithub} from 'react-icons/fi'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi';
import {LuMouse} from 'react-icons/lu'
import heroimg from "../assets/hero-img.png"
import resume from "../assets/Dhruv_resume.pdf"

const Banner = () => {
    return (
      <div  className="text-center pt-10 lg:w-[100%] ">
        <h2 className="text-2xl">Hello, My name is </h2>
        <h2 className="text-7xl my-2 font-bold ">Dhruv Sharma</h2>
        <p className='text-3xl' >I am a Softwre Engineer......</p>
        <div className="flex gap-2 justify-center ">
            <a href={resume} download>
            <button className="px-[20px] py-[5px] rounded mt-6 border border-red-500 transition-all duration-100 ease-in-out hover:bg-red-500" >Resume Download</button>
            </a>
        </div>    
        <div className='text-white flex lg:flex-row flex-col lg:justify-around items-center custom_yellow'>
            <div className='flex gap-2 lg:flex-col  justify-center mt-10'>
                <a href="https://github.com/dhruv14122004" target='_blank'>
                    <FiGithub className="bg-gray-900 p-[6px] text-3xl rounded transition-transform duration-500 hover:scale-150"/>
                </a>
                <a href="https://www.linkedin.com/in/dhruv-sharma-142932252" target='_blank'>
                    <FaLinkedinIn className="bg-gray-900 p-[6px] text-3xl rounded transition-transform duration-500 hover:scale-150"/>
                </a>
                <a href="https://www.youtube.com/watch?v=T4EAjfDcYtA" target='_blank'>
                    <FaFacebookF className="bg-gray-900 p-[6px] text-3xl rounded transition-transform duration-500 hover:scale-150"/>
                </a>
                <a href="">
                    <FiInstagram className="bg-gray-900 p-[6px] text-3xl rounded transition-transform duration-500 hover:scale-150"/>
                </a>
                
            </div>
            <img className = ' lg:h-96 mt-10'src={heroimg} alt="Profile Image" />
            <div className='hidden lg:flex flex-col justify-center'>
                <LuMouse className='text-xl animate-bounce mb-4'/>
                <p className='[writing-mode:vertical-rl]'>
                    {new Date().toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        weekday: 'long'
                    })}
                </p>
            </div>
        </div>
    </div>
    );
  };
  
  export default Banner;