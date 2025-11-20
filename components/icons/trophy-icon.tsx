"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function TrophyIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M6 9C6 9 4 9 4 7C4 5 6 5 6 5M18 9C18 9 20 9 20 7C20 5 18 5 18 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 5V4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 5V11C6 14.3137 8.68629 17 12 17C15.3137 17 18 14.3137 18 11V5H6Z"
        fill="currentColor"
      />
      <path
        d="M12 17V19M12 19H9M12 19H15M8 21H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}
