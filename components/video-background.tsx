"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface VideoBackgroundProps {
  src: string
  className?: string
  opacity?: number
  scale?: number
  position?: "top" | "center" | "bottom"
}

export function VideoBackground({
  src,
  className = "",
  opacity = 0.3,
  scale = 1.2,
  position = "center",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const positionClasses = {
    top: "-top-[10%]",
    center: "top-1/2 -translate-y-1/2",
    bottom: "-bottom-[10%]",
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0 flex justify-center items-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={cn(
            "absolute left-1/2 -translate-x-1/2 min-w-full min-h-full object-cover object-center",
            positionClasses[position]
          )}
          style={{ 
            opacity,
            width: `${scale * 100}%`,
            height: `${scale * 100}%`,
          }}
        >
          <source src={src} type="video/webm" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
    </div>
  )
}
