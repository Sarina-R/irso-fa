"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function GearIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <path
        d="M12 2L13.09 6.26L14.18 6.63L16.89 4.5L19.5 7.11L17.37 9.82L17.74 10.91L22 12L22 14L17.74 15.09L17.37 16.18L19.5 18.89L16.89 21.5L14.18 19.37L13.09 19.74L12 24L10 24L8.91 19.74L7.82 19.37L5.11 21.5L2.5 18.89L4.63 16.18L4.26 15.09L0 14L0 12L4.26 10.91L4.63 9.82L2.5 7.11L5.11 4.5L7.82 6.63L8.91 6.26L10 2L12 2Z"
        fill="currentColor"
      />
      <circle cx="12" cy="13" r="3" fill="var(--background)" />
    </motion.svg>
  )
}
