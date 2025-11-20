"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function BrainIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M9.5 2C7.01472 2 5 4.01472 5 6.5C5 7.42284 5.28885 8.27692 5.78199 8.97115C4.73007 9.47967 4 10.6063 4 11.9C4 13.7255 5.45507 15.2 7.25 15.2C7.46693 15.2 7.67893 15.1776 7.88199 15.1353C8.07397 17.1812 9.80736 18.8 11.9 18.8C14.1196 18.8 15.9 16.9647 15.9 14.6C15.9 14.3831 15.8776 14.1711 15.8353 13.968C17.8812 13.776 19.5 12.0426 19.5 9.95C19.5 7.73043 17.6647 5.95 15.445 5.95C15.2281 5.95 15.0161 5.97242 14.813 6.01472C14.621 4.11877 13.0074 2.6 11.05 2.6C10.5 2.6 10 2.75 9.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M12 10L12 20M9 13L15 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>
  )
}
