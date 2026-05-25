"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:alex@example.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">NM</span>
              </div>
              <span className="font-semibold text-lg">
                Nhat<span className="text-violet-400">Minh</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer passionate about building beautiful, 
              performant web applications.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Social Media</h4>
            <div className="space-y-2">
              {socialLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold">About Me</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Become Fullstack Developer</p>
              <p>Expand your network of relationships</p>
              <a
                href="mailto:alex@example.com"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                alex@example.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Thanks for visiting my portfolio website!{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
