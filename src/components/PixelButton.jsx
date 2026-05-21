import React from 'react'
import '../styles/pixel-button.css'

export default function PixelButton({ title = 'Enter the stages' }) {
  return (
    <div className="pixel-button" role="button" aria-label={title} tabIndex={0}>
      <div className="pixel-ring">
        <svg viewBox="0 0 32 32" className="pixel-head" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          {/* Simplified pixel face using rects for crisp pixel-art */}
          <rect x={10} y={3} width={1} height={1} fill="#000" />
          <rect x={11} y={3} width={1} height={1} fill="#000" />
          <rect x={12} y={3} width={1} height={1} fill="#f6213f" />
          <rect x={13} y={3} width={1} height={1} fill="#fff" />
          <rect x={14} y={3} width={1} height={1} fill="#fff" />
          <rect x={15} y={3} width={1} height={1} fill="#fff" />
          <rect x={16} y={3} width={1} height={1} fill="#fff" />
          <rect x={17} y={3} width={1} height={1} fill="#f6213f" />
          <rect x={18} y={3} width={1} height={1} fill="#000" />

          <rect x={9} y={4} width={1} height={1} fill="#000" />
          <rect x={10} y={4} width={1} height={1} fill="#e1133a" />
          <rect x={11} y={4} width={1} height={1} fill="#f6213f" />
          <rect x={12} y={4} width={1} height={1} fill="#fff" />
          <rect x={13} y={4} width={1} height={1} fill="#f6213f" />
          <rect x={14} y={4} width={1} height={1} fill="#fffcf9" />
          <rect x={15} y={4} width={1} height={1} fill="#fffdfe" />
          <rect x={16} y={4} width={1} height={1} fill="#f6213f" />
          <rect x={17} y={4} width={1} height={1} fill="#fff" />
          <rect x={18} y={4} width={1} height={1} fill="#f4223f" />

          <rect x={8} y={5} width={1} height={1} fill="#000" />
          <rect x={9} y={5} width={1} height={1} fill="#e1133a" />
          <rect x={10} y={5} width={1} height={1} fill="#f42340" />
          <rect x={11} y={5} width={1} height={1} fill="#f6213f" />
          <rect x={12} y={5} width={1} height={1} fill="#fff" />
          <rect x={13} y={5} width={1} height={1} fill="#f6213f" />
          <rect x={14} y={5} width={1} height={1} fill="#fff" />
          <rect x={15} y={5} width={1} height={1} fill="#ef233e" />
          <rect x={16} y={5} width={1} height={1} fill="#f0243f" />
          <rect x={17} y={5} width={1} height={1} fill="#fff" />
          <rect x={18} y={5} width={1} height={1} fill="#f6213f" />
        </svg>
      </div>
      <div className="pixel-label">{title}</div>
    </div>
  )
}
