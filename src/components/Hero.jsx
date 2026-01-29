import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h2 className="text-5xl font-extrabold text-white">
          Hi, I'm <span className="text-indigo-400">Deepak</span> 👋
        </h2>
        <p className="mt-4 text-gray-400">
          A CS graduate learning Java, Web Development and Data Analytics.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-64 h-64 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-6xl">
          👨‍💻
        </div>
      </div>
    </motion.section>
  );
}
