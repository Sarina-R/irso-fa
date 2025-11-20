'use client'

import * as React from 'react'

export function RobotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none'>
      <rect
        x='6'
        y='8'
        width='12'
        height='10'
        rx='2'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      <rect x='8' y='11' width='2' height='2' rx='1' fill='currentColor' />
      <rect x='14' y='11' width='2' height='2' rx='1' fill='currentColor' />
      <path
        d='M9 15h6'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M12 8V6M12 6L10 4M12 6L14 4'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 12H4M18 12H20'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M8 18V20M16 18V20'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}
