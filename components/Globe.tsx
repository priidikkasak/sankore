'use client'

import { useEffect, useRef } from 'react'

export default function Globe() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    let angle = 0
    let animId: number
    const N = 8
    const R = 90
    const baseAngles = Array.from({ length: N }, (_, i) => (i * 180) / N)

    const animate = () => {
      angle += 0.18
      const svg = svgRef.current
      if (!svg) return

      baseAngles.forEach((base, i) => {
        const a = ((base + angle) % 180) * (Math.PI / 180)
        const cosA = Math.cos(a)
        const rx = Math.abs(cosA) * R
        const el = svg.querySelector(`#mer-${i}`) as SVGEllipseElement | null
        if (el) {
          el.setAttribute('rx', String(rx))
          const front = cosA >= 0
          const op = front ? 0.55 : 0.12
          el.setAttribute('stroke', `rgba(201,168,76,${op})`)
          el.setAttribute('stroke-width', front ? '0.8' : '0.5')
        }
      })

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  const latitudes = [-72, -54, -36, -18, 0, 18, 36, 54, 72]
  const R = 90

  return (
    <svg ref={svgRef} viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
      <defs>
        <radialGradient id="gg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.06)" />
          <stop offset="70%" stopColor="rgba(201,168,76,0.02)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
        </radialGradient>
        <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="85%" stopColor="rgba(201,168,76,0)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0.08)" />
        </radialGradient>
        <clipPath id="gc">
          <circle cx="100" cy="100" r="89" />
        </clipPath>
      </defs>

      {/* Background glow */}
      <circle cx="100" cy="100" r="95" fill="url(#outerGlow)" />
      <circle cx="100" cy="100" r="90" fill="url(#gg)" />

      {/* Latitude lines */}
      <g clipPath="url(#gc)">
        {latitudes.map((lat) => {
          const latRad = (lat * Math.PI) / 180
          const cosLat = Math.cos(latRad)
          const sinLat = Math.sin(latRad)
          const rx = cosLat * R
          const ry = cosLat * R * 0.14
          const cy = 100 - sinLat * R
          if (rx < 1) return null
          return (
            <ellipse
              key={lat}
              cx="100"
              cy={cy}
              rx={rx}
              ry={ry}
              fill="none"
              stroke={lat === 0 ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.18)'}
              strokeWidth={lat === 0 ? '0.9' : '0.6'}
            />
          )
        })}
      </g>

      {/* Meridians (animated) */}
      <g clipPath="url(#gc)">
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse
            key={i}
            id={`mer-${i}`}
            cx="100"
            cy="100"
            rx="0"
            ry={R}
            fill="none"
            stroke="rgba(201,168,76,0.4)"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* Outer ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(201,168,76,0.45)" strokeWidth="1.2" />

      {/* Subtle pole dots */}
      <circle cx="100" cy="10" r="1.5" fill="rgba(201,168,76,0.3)" />
      <circle cx="100" cy="190" r="1.5" fill="rgba(201,168,76,0.3)" />
    </svg>
  )
}
