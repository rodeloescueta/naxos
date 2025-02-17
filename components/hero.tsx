"use client"
import { Dancing_Script } from 'next/font/google'
import { motion } from 'framer-motion'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export function Hero() {
  return (
    <div className="relative h-[40vh] flex items-center justify-center bg-zinc-900">
      <div 
        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-50"
      />
      <motion.h1 
        className={`relative text-8xl font-bold text-white ${dancingScript.className}`}
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotateX: [0, 10, 0],
          textShadow: "0 0 8px rgb(255,255,255)",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // repeat: Infinity
        }}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        naxos
      </motion.h1>
    </div>
  )
} 