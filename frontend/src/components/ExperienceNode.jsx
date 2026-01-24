import { motion } from 'framer-motion';

const ExperienceNode = ({ experience, index, isLeft, isActive, onClick }) => {
  const { role, company, description, duration, type } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`relative cursor-pointer group ${isLeft ? 'text-right' : 'text-left'}`}
    >
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative p-5
          bg-retro-surface
          border-2 border-retro-border
          shadow-retro
          transition-all duration-300
          hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
          ${isActive ? 'border-retro-accent' : ''}
        `}
      >
        {/* Type Badge */}
        <span className={`
          inline-block text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 border border-retro-border mb-3 font-mono text-retro-bg
          ${type === 'work'
            ? 'bg-retro-accent'
            : type === 'internship'
              ? 'bg-purple-600'
              : 'bg-green-600'
          }
        `}>
          {type}
        </span>

        {/* Role */}
        <h3 className="text-base font-bold text-retro-text mb-1 font-heading uppercase">
          {role}
        </h3>

        {/* Company */}
        <p className="text-sm font-medium text-retro-text-secondary mb-2 font-mono">
          {company}
        </p>

        {/* Duration */}
        <p className="text-xs text-retro-text-secondary mb-3 font-mono opacity-80">
          {duration}
        </p>

        {/* Description */}
        <p className="text-sm text-retro-text font-mono leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {experience.tech && (
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.tech.map((tech, i) => (
              <span key={i} className="text-[10px] font-mono text-retro-accent border border-retro-border px-1.5 py-0.5">
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Connection dot */}
      <div className={`
        absolute top-1/2 -translate-y-1/2
        ${isLeft ? '-right-3' : '-left-3'}
        w-3 h-3
        bg-retro-bg
        border-2 border-retro-text
        group-hover:bg-retro-accent
        transition-colors duration-300
        z-10
      `} />
    </motion.div>
  );
};

export default ExperienceNode;
