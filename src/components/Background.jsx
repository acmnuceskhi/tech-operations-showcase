import React, { useEffect, useRef } from 'react'
import {
  NUM_CIRCLES,
  generateRandomCircles,
  updateAllCircles
} from '../utils/circleAnimation'
import { calculateLines, LINE_DISTANCE_THRESHOLD } from '../utils/lineAnimation'

export default function Background() {
  const canvasRef = useRef(null)
  const circlesRef = useRef([])
  const animationFrameRef = useRef(null)

  // Retro effect: lower values = more pixelated (e.g., 0.25 = 25% resolution)
  const RESOLUTION_SCALE = 0.2

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', {
      alpha: false,
      willReadFrequently: false
    })

    // Disable all anti-aliasing for hard-edged pixel art
    ctx.imageSmoothingEnabled = false

    // Initialize canvas size
    function resizeCanvas() {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = Math.round(width * RESOLUTION_SCALE)
      canvas.height = Math.round(height * RESOLUTION_SCALE)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(RESOLUTION_SCALE, 0, 0, RESOLUTION_SCALE, 0, 0)

      // Re-disable anti-aliasing after resize
      ctx.imageSmoothingEnabled = false
    }

    resizeCanvas()

    // Throttle resize handler for better performance
    let resizeTicking = false
    const throttledResize = () => {
      if (!resizeTicking) {
        window.requestAnimationFrame(() => {
          resizeCanvas()
          resizeTicking = false
        })
        resizeTicking = true
      }
    }

    window.addEventListener('resize', throttledResize)

    // Initialize circles
    circlesRef.current = generateRandomCircles(NUM_CIRCLES)

    function animate() {
      // Update positions
      circlesRef.current = updateAllCircles(circlesRef.current)
      const lines = calculateLines(circlesRef.current)

      // Clear canvas (use scaled dimensions)
      const width = window.innerWidth
      const height = window.innerHeight
      ctx.clearRect(0, 0, width, height)

      // Track distances for each circle
      const connectionDistances = new Map()

      circlesRef.current.forEach(circle => {
        connectionDistances.set(circle.id, [])
      })

      lines.forEach(line => {
        connectionDistances.get(line.from.id).push(line.distance)
        connectionDistances.get(line.to.id).push(line.distance)
      })

      // Draw lines
      ctx.strokeStyle = 'white'
      ctx.lineCap = 'round'

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]

        // Variable line width based on distance
        const minWidth = 1
        const maxWidth = 20
        const normalizedDistance = line.distance / LINE_DISTANCE_THRESHOLD
        const dynamicWidth = maxWidth - (normalizedDistance * (maxWidth - minWidth))

        ctx.lineWidth = dynamicWidth
        ctx.beginPath()
        ctx.moveTo(line.from.x, line.from.y)
        ctx.lineTo(line.to.x, line.to.y)
        ctx.stroke()
      }

      // Draw circles with radius based on sum of closeness values
      ctx.fillStyle = 'white'

      for (let i = 0; i < circlesRef.current.length; i++) {
        const circle = circlesRef.current[i]
        const distances = connectionDistances.get(circle.id)

        // Calculate sum of closeness values (not average) for smooth transitions
        let closenessSum = 0
        if (distances.length > 0) {
          distances.forEach(dist => {
            // Closeness = 1 - (distance / threshold), clamped to [0, 1]
            const closeness = Math.max(0, Math.min(1, 1 - (dist / LINE_DISTANCE_THRESHOLD)))
            closenessSum += closeness
          })
        }

        // Scale radius based on sum of closeness
        // Base radius + bonus from connections
        const radiusBonus = closenessSum * 10 // Adjust multiplier to control size growth
        const effectiveRadius = Math.max(1, circle.radius + radiusBonus)

        ctx.beginPath()
        ctx.arc(circle.x, circle.y, effectiveRadius, 0, Math.PI * 2)
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', throttledResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden bg-black"
      style={{ zIndex: 0 }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          display: 'block',
          imageRendering: 'pixelated',
          opacity: 0.85 // soften harsh whites
        }}
      />

      {/* Blur + Dark Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(15,23,42,0.35) 0%, rgba(2,6,23,0.75) 70%)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />

      {/* Subtle Noise / Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  )

}
