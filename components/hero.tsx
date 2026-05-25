"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Rocket } from "lucide-react"
import { OrbitTech } from "./orbit-tech"
import { useRef, useEffect } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Blackhole Cinematic Background - positioned at top, scrolls with content */}
      <div className="absolute inset-x-0 top-0 h-[400px] overflow-hidden pointer-events-none">
        {/* Video Container - Horizontally centered, showing lower glow portion */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 -translate-x-1/2 top-[-60%] w-[180%] min-w-[1200px] h-[300%] object-cover object-center"
          style={{ opacity: 0.5 }}
        >
          <source 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blackhole-MRJ6wdiFz09C5jB9Vj5jKGUgFimluS.webm" 
            type="video/webm" 
          />
        </video>
        
        {/* Gradient overlays for cinematic blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none" />
      </div>

      {/* Gradient Overlays for content readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 w-fit backdrop-blur-sm"
            >
              <Rocket className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">Full Stack Developer Portfolio</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight text-balance"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Lam Nhat Minh
              </span>{" "}
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block origin-bottom-right"
              >
                🚀
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              I&apos;m a Full Stack Software Engineer with 1 year of experience in 
              Website, Mobile, and Software development. Check out my projects and skills.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                My CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Orbit Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <OrbitTech />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
