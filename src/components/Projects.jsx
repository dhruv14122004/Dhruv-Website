import { motion } from 'framer-motion';
import sports from '../assets/sport.png'
import event from '../assets/event.png'


const projectData = [
  { id: 1, title: 'Tennis Ball Detection System', description: 'Our project focuses on developing a robust Tennis Ball Detection System using YOLOv8 for real-time object detection. We converted videos into frames for analysis and trained models for ball detection, player identification, and court detection under various conditions. This project highlights our collaborative effort in applying cutting-edge machine learning techniques to enhance sports analytics.', img:sports },
  { id: 2, title: 'Event Management System', description: 'The system allows clubs to input event and workshop details, streamlining resource allocation for smoother event planning. Automation ensures efficient resource utilization, benefiting both organizers and participants. Collaboration between clubs is enhanced, optimizing resource allocation for better efficiency.', img:event},
  { id: 3, title: 'Hotel Management System', description: 'The system integrates both a standard calculator and  a price calculator, boosting its functionality. It also features a dynamic billing system, automating price calculations and ensuring precise invoicing for enhanced efficiency.', img:sports },
  { id: 4, title: 'Forest Fire Detector', description: 'Developed a comprehensive forest fire detection system using Arduino, aimed at early identification and prevention of potential wildfires. The project involved the integration of varioussensors and communication modules to ensure real-time monitoring and timely response.', img:sports }
];

const Projects = () => {
  return (
    <div id="Projects" className="md-12 lg:px-44  px-[20px] custom_yellow pt-28">
      <h2 className="text-5xl font-bold mb-28 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectData.map(project => (
          <div
            key={project.id}
            className="p-6 border border-red-500 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col items-center"
          >
            <img src={project.img} alt="img" className='h-80 w-80 justify-center'/>
            <h3 className="text-2xl font-semibold text-center">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
