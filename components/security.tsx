"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Server } from "lucide-react"

export function Security() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Encryption Video Background - Centered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[130%] h-[130%] object-cover object-center"
            style={{ opacity: 0.35 }}
          >
            <source 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/encryption-rR3DwRS83NgLth2d8VXjuRiMwSoILP.webm" 
              type="video/webm" 
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background)) 70%)"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-balance">
            Performance &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              Security
            </span>
          </h2>

          {/* Animated Lock Visual */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Lock Container */}
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                filter: [
                  "drop-shadow(0 0 40px rgba(139, 92, 246, 0.2))",
                  "drop-shadow(0 0 60px rgba(139, 92, 246, 0.4))",
                  "drop-shadow(0 0 40px rgba(139, 92, 246, 0.2))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-violet-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle Ring */}
              <motion.div
                className="absolute inset-4 border border-blue-500/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner Ring */}
              <motion.div
                className="absolute inset-8 border border-violet-500/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Center Lock Icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(139, 92, 246, 0.4)",
                    "0 0 60px rgba(139, 92, 246, 0.6)",
                    "0 0 30px rgba(139, 92, 246, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Lock Top (Shackle) */}
                <motion.div
                  className="absolute top-0 w-full flex justify-center"
                  animate={{
                    y: isHovered ? -8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-white rounded-t-full border-b-0" />
                </motion.div>
                
                {/* Lock Body */}
                <Lock className="w-10 h-10 md:w-12 md:h-12 text-white relative z-10 mt-2" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-5 h-5 text-violet-400" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Server className="w-5 h-5 text-blue-400" />
                </div>
              </motion.div>
            </motion.div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="text-sm text-muted-foreground">Encryption</span>
            </motion.div>
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-lg md:text-xl italic"
          >
            <span className="bg-gradient-to-r from-violet-400/80 via-purple-400/80 to-blue-400/80 bg-clip-text text-transparent">
              Secure your data with end-to-end encryption
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
