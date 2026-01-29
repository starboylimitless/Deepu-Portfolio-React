// Skills.jsx - Add animation
import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["Java", "HTML", "CSS", "JavaScript", "React", "SQL", "Power BI", "Git"];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="skills"
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <h3 className="text-3xl font-bold text-white mb-8">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-400 hover:bg-slate-800 transition text-white cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
