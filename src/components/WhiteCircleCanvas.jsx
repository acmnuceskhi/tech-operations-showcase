import React, { useRef, useEffect } from 'react'

// Renders a white circle on transparent canvas with high-DPI support
export default function WhiteCircleCanvas({ 
  size = 30, 
  radius = 10, 
  color = 'white', 
  stroke = false, 
  strokeWidth = 2 
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    canvas.width = Math.round(size * dpr)
    canvas.height = Math.round(size * dpr)
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    ctx.clearRect(0, 0, size, size)

    const centerX = size / 2
    const centerY = size / 2

    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)

    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = color
      ctx.stroke()
    } else {
      ctx.fillStyle = color
      ctx.fill()
    }
  }, [size, radius, color, stroke, strokeWidth])

  return (
    <canvas
      ref={canvasRef}
      aria-label="circle-canvas"
      style={{ display: 'block', background: 'transparent' }}
    />
  )
}
