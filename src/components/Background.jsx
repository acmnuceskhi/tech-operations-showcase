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
  const RESOLUTION_SCALE = 0.4

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
    window.addEventListener('resize', resizeCanvas)

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

      // Draw circles with variable stroke width based on closeness
      ctx.fillStyle = 'white'

      for (let i = 0; i < circlesRef.current.length; i++) {
        const circle = circlesRef.current[i]
        const distances = connectionDistances.get(circle.id)

        // Calculate stroke width based on average closeness of connections
        let strokeWidth = 1
        // initialize and clamp normalizedCloseness to avoid undefined/negative values
        let normalizedCloseness = 0
        if (distances.length > 0) {
          const avgDistance = distances.reduce((sum, d) => sum + d, 0) / distances.length
          normalizedCloseness = 1 - (avgDistance / LINE_DISTANCE_THRESHOLD)
          // clamp to [0, 1]
          normalizedCloseness = Math.min(1, Math.max(0, normalizedCloseness))
          const minStroke = 1
          const maxStroke = 4
          strokeWidth = minStroke + (normalizedCloseness * (maxStroke - minStroke))
        }

        ctx.lineWidth = strokeWidth
        ctx.beginPath()
        // ensure radius stays positive and scales with closeness
        const effectiveRadius = Math.max(1, circle.radius + Math.abs(circle.radius * normalizedCloseness) / 2)
        ctx.arc(circle.x, circle.y, effectiveRadius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black" style={{ zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          display: 'block',
          imageRendering: 'pixelated',
          // imageRendering: '-moz-crisp-edges',
          // imageRendering: 'crisp-edges'

        }}
      />
    </div>
  )
}
