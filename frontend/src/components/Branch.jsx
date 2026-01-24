import { motion } from 'framer-motion';

const Branch = ({ isLeft, index, isActive }) => {
  // SVG path for curved branch
  const pathD = isLeft
    ? "M 60 25 Q 30 25 10 25" // curves left
    : "M 0 25 Q 30 25 50 25"; // curves right

  return (
    <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}>
      <svg
        width="60"
        height="50"
        viewBox={isLeft ? "0 0 60 50" : "0 0 60 50"}
        className="overflow-visible"
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`
            text-retro-border
            ${isActive ? 'text-retro-accent' : ''}
          `}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        />
      </svg>
    </div>
  );
};

export default Branch;
