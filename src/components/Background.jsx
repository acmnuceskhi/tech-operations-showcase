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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    // Initialize canvas size
    function resizeCanvas() {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize circles
    circlesRef.current = generateRandomCircles(NUM_CIRCLES)

    function animate() {
      // Update positions
      circlesRef.current = updateAllCircles(circlesRef.current)
      const lines = calculateLines(circlesRef.current)

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

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
        const maxWidth = 5
        const normalizedDistance = line.distance / LINE_DISTANCE_THRESHOLD
        const dynamicWidth = maxWidth - (normalizedDistance * (maxWidth - minWidth))

        ctx.lineWidth = dynamicWidth
        ctx.beginPath()
        ctx.moveTo(line.from.x, line.from.y)
        ctx.lineTo(line.to.x, line.to.y)
        ctx.stroke()
      }

      // Draw circles with variable stroke width based on closeness
      ctx.fillStyle = 'black'
      ctx.strokeStyle = 'white'

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
        ctx.fill()
        ctx.stroke()
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
        style={{ display: 'block' }}
      />
    </div>
  )
}
