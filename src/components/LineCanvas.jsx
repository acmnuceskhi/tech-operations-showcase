import React, { useRef, useEffect } from 'react'
import { LINE_DISTANCE_THRESHOLD } from '../utils/lineAnimation'

// Renders connecting lines between circles on full-viewport canvas
export default function LineCanvas({ lines = [], color = 'white', lineWidth = 2 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const width = window.innerWidth
    const height = window.innerHeight

    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    ctx.clearRect(0, 0, width, height)

    if (lines.length === 0) return

    ctx.strokeStyle = color
    ctx.lineCap = 'round'

    // Draw each line with variable width based on distance
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      // Formula: maxWidth - (distance / threshold) * (maxWidth - minWidth)
      // changes width according to the distance
      const minWidth = 1
      const maxWidth = 3
      const normalizedDistance = line.distance / LINE_DISTANCE_THRESHOLD
      const dynamicWidth = maxWidth - (normalizedDistance * (maxWidth - minWidth))

      ctx.lineWidth = dynamicWidth

      ctx.beginPath()
      ctx.moveTo(line.from.x, line.from.y)
      ctx.lineTo(line.to.x, line.to.y)
      ctx.stroke()
    }

  }, [lines, color, lineWidth])

  return (
    <canvas
      ref={canvasRef}
      aria-label="connection-lines-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
