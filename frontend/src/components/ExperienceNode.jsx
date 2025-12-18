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
          relative p-5 rounded-xl
          bg-white dark:bg-gray-900
          border border-gray-100 dark:border-gray-800
          shadow-sm hover:shadow-lg
          transition-shadow duration-300
          ${isActive ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}
        `}
      >
        {/* Type Badge */}
        <span className={`
          inline-block text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full mb-3
          ${type === 'work' 
            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
            : type === 'internship'
            ? 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400'
            : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
          }
        `}>
          {type}
        </span>

        {/* Role */}
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
          {role}
        </h3>

        {/* Company */}
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          {company}
        </p>

        {/* Duration */}
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
          {duration}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 dark:group-hover:from-blue-500/10 dark:group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
      </motion.div>

      {/* Connection dot */}
      <div className={`
        absolute top-1/2 -translate-y-1/2
        ${isLeft ? '-right-3' : '-left-3'}
        w-3 h-3 rounded-full
        bg-gray-200 dark:bg-gray-700
        border-2 border-white dark:border-gray-900
        group-hover:bg-blue-500 dark:group-hover:bg-blue-400
        transition-colors duration-300
        z-10
      `} />
    </motion.div>
  );
};

export default ExperienceNode;
