import { SiPython, SiMongodb, SiGit, SiFlutter, SiFirebase, SiUnrealengine, SiFigma, SiC, SiCplusplus } from 'react-icons/si'

const About = () => {
  const skills = [
    { name: 'Flutter', icon: SiFlutter, level: 'Advanced', color: '#02569B', description: 'Cross-platform mobile app development' },
    { name: 'Firebase', icon: SiFirebase, level: 'Advanced', color: '#FFCA28', description: 'Backend services & real-time database' },
    { name: 'Python', icon: SiPython, level: 'Advanced', color: '#3776AB', description: 'AI/ML development & data processing' },
    { name: 'Unreal Engine', icon: SiUnrealengine, level: 'Intermediate', color: '#313131', description: 'Game development & 3D environments' },
    { name: 'Figma', icon: SiFigma, level: 'Advanced', color: '#F24E1E', description: 'UI/UX design & prototyping' },
    { name: 'C++', icon: SiCplusplus, level: 'Intermediate', color: '#00599C', description: 'System programming & algorithms' },
    { name: 'C', icon: SiC, level: 'Intermediate', color: '#A8B9CC', description: 'System programming & embedded systems' },
    { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', color: '#47A248', description: 'NoSQL database design' },
    { name: 'Git', icon: SiGit, level: 'Advanced', color: '#F05032', description: 'Version control & collaboration' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate mobile app and game developer with expertise in Flutter development, 
            AI/ML applications, and game creation. I love building innovative mobile solutions and immersive gaming experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                As a Mobile App Developer specializing in Flutter, I create cross-platform 
                applications with seamless user experiences. Currently pursuing my Bachelor's in Computer Science 
                at JK Lakshmipat University with a focus on mobile development and AI/ML.
              </p>
              <p>
                I'm passionate about combining mobile development with cutting-edge technologies like 
                Machine Learning and Computer Vision. My experience includes building fintech apps, 
                AI-powered classification models, and immersive game experiences.
              </p>
              <p>
                When I'm not coding mobile apps, I enjoy creating games with Unreal Engine, 
                designing UI/UX with Figma, and exploring the latest trends in mobile technology and AI.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon 
                    className="text-3xl group-hover:scale-110 transition-transform duration-300" 
                    style={{ color: skill.color }}
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                    <span className="text-sm text-blue-400 font-medium">{skill.level}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About