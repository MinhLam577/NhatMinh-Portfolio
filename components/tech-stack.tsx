"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const techLogos = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Git", color: "#F05032" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "GraphQL", color: "#E10098" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function TechStack() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Cards Video Background - Centered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[130%] h-[130%] object-cover object-center"
            style={{ opacity: 0.2 }}
          >
            <source 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cards-video-3AEvR4mDxq2569Ij8VSce7d8ui7wt9.webm" 
              type="video/webm" 
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Think better with Next.js</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Making apps with{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              modern technologies
            </span>
          </h2>
          <p className="text-muted-foreground italic text-lg">
            Never miss a task, deadline or idea
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="group flex flex-col items-center gap-2"
            >
              <motion.div 
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
                whileHover={{
                  boxShadow: `0 0 20px ${tech.color}40`,
                }}
              >
                <span 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: tech.color }}
                >
                  {tech.name.charAt(0)}
                </span>
              </motion.div>
              <span className="text-xs text-muted-foreground group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Different arrangement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 mt-6"
        >
          {[...techLogos].reverse().slice(0, 8).map((tech, index) => (
            <motion.div
              key={`${tech.name}-2`}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="group flex flex-col items-center gap-2"
            >
              <motion.div 
                className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                whileHover={{
                  boxShadow: `0 0 20px ${tech.color}40`,
                }}
              >
                <span 
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: tech.color }}
                >
                  {tech.name.substring(0, 2)}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
