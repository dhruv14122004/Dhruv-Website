import react_icon from '../assets/atom.png'
import blockchain from '../assets/blockchain.png'
import ai from '../assets/ai.png'
import dsa from '../assets/datastructure.png'
import coding from '../assets/coding.png'
import cn from '../assets/computer_networks.png'
import ml from '../assets/deep-learning.png'
import db from '../assets/database-file.png'

const Skills = () => {
    return (
      <div id= "Skills" className="md-12 lg:px-44  px-[20px] custom_yellow pt-28">
        <h2 className='text-5xl font-bold text-center '>Skills</h2>
        <div className='flex lg:flex-row flex-col lg:items-start items-center justify-center gap-15 pt-28'>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            <div className="bg-gray-600 backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-6 transition-transform duration-100 hover:-translate-y-2">
                <img src={react_icon} alt="React Icon" className="w-30 h-30 mx-auto mb-4"/>
                <h2 className="text-center text-2xl">React</h2>
            </div>
            <div className="bg-gray-600 backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-6 transition-transform duration-100 hover:-translate-y-2">
                <img src={blockchain} alt="BlockChain Icon" className="w-25 h-25 mx-auto mb-4"/>
                <h2 className="text-center text-2xl">Block-Chain</h2>
            </div>
            <div className="bg-gray-600 backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-6 transition-transform duration-100 hover:-translate-y-2">
                <img src={ai} alt="Ai Icon" className="w-30 h-30 mx-auto mb-4"/>
                <h2 className="text-center text-2xl">Artificial Intelligence</h2>
            </div>
            <div className="bg-gray-600 backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-6 transition-transform duration-100 hover:-translate-y-2">
                <img src={dsa} alt="Dsa Icon" className="w-30 h-30 mx-auto mb-4"/>
                <h2 className="text-center text-2xl">Data Structure and Algorithms</h2>
            </div>
            <div className="bg-gray-600 backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-6 transition-transform duration-100 hover:-translate-y-2">
                <img src={coding} alt="Coding Icon" className="w-30 h-30 mx-auto mb-4"/>
                <h2 className="text-center text-2xl">Competitive Programming</h2>
            </div>
            <div className="bg-gray-600 backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-6 transition-transform duration-100 hover:-translate-y-2">
                <img src={cn} alt="CN Icon" className="w-30 h-30 mx-auto mb-4"/>
                <h2 className="text-center text-2xl">Computer Networks</h2>
            </div>
            <div className="bg-gray-600 backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-6 transition-transform duration-100 hover:-translate-y-2">
                <img src={ml} alt="ML Icon" className="w-30 h-30 mx-auto mb-4"/>
                <h2 className="text-center text-2xl">Machine Learning</h2>
            </div>
            <div className="bg-gray-600 backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-6 transition-transform duration-100 hover:-translate-y-2">
                <img src={db} alt="Db Icon" className="w-30 h-30 mx-auto mb-4"/>
                <h2 className="text-center text-2xl">Database Management</h2>
            </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Skills;