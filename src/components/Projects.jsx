// Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Deepfake Detection", desc: "Mini project about detecting AI videos", link: "#" },
    { title: "Portfolio Website", desc: "My personal portfolio", link: "#" },
    { title: "Data Dashboard", desc: "Power BI dashboard project", link: "#" },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h3 className="text-3xl font-bold text-white mb-8">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-400 hover:bg-slate-800 transition cursor-pointer group"
          >
            <h4 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition">{p.title}</h4>
            <p className="text-gray-400 mt-2 text-sm">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
