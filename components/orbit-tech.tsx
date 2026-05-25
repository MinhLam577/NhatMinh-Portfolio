"use client"

import { motion } from "framer-motion"

const techIcons = [
  { name: "JS", color: "#F7DF1E", bg: "#323330" },
  { name: "TS", color: "#3178C6", bg: "#ffffff" },
  { name: "React", color: "#61DAFB", bg: "#20232A" },
  { name: "Next", color: "#ffffff", bg: "#000000" },
  { name: "Node", color: "#339933", bg: "#ffffff" },
  { name: "AWS", color: "#FF9900", bg: "#232F3E" },
  { name: "Docker", color: "#2496ED", bg: "#ffffff" },
  { name: "Git", color: "#F05032", bg: "#ffffff" },
]

export function OrbitTech() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
      {/* Center Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center animate-glow-pulse"
        animate={{
          boxShadow: [
            "0 0 30px rgba(139, 92, 246, 0.4)",
            "0 0 60px rgba(139, 92, 246, 0.6)",
            "0 0 30px rgba(139, 92, 246, 0.4)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-3xl md:text-4xl font-bold text-white">{"</>"}</span>
      </motion.div>

      {/* Orbit Ring 1 */}
      <div className="absolute inset-0 border border-white/10 rounded-full" />

      {/* Orbit Ring 2 */}
      <div className="absolute inset-8 border border-white/5 rounded-full" />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 animate-orbit">
        {techIcons.slice(0, 4).map((tech, i) => (
          <motion.div
            key={tech.name}
            className="absolute w-12 h-12 md:w-14 md:h-14"
            style={{
              top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 4)}%`,
              left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 4)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="w-full h-full rounded-xl flex items-center justify-center text-xs md:text-sm font-bold shadow-lg border border-white/20"
              style={{ backgroundColor: tech.bg, color: tech.color }}
            >
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Orbit Ring 2 Icons */}
      <div className="absolute inset-0 animate-orbit-reverse">
        {techIcons.slice(4, 8).map((tech, i) => (
          <motion.div
            key={tech.name}
            className="absolute w-10 h-10 md:w-12 md:h-12"
            style={{
              top: `${50 + 32 * Math.sin((i * Math.PI * 2) / 4 + Math.PI / 4)}%`,
              left: `${50 + 32 * Math.cos((i * Math.PI * 2) / 4 + Math.PI / 4)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="w-full h-full rounded-lg flex items-center justify-center text-[10px] md:text-xs font-bold shadow-lg border border-white/20"
              style={{ backgroundColor: tech.bg, color: tech.color }}
            >
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
