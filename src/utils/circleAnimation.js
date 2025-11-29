// Circle Animation Utilities

export const CIRCLE_SIZE_MIN = 15
export const CIRCLE_SIZE_MAX = 35
export const NUM_CIRCLES = 30
export const SPEED_MIN = 1
export const SPEED_MAX = 3

function getRandomSize(min, max) {
  return min + Math.random() * (max - min)
}

// generates random circles with positions, velocities, and sizes
export function generateRandomCircles(count) {
  return Array.from({ length: count }, (_, i) => {
    const size = getRandomSize(CIRCLE_SIZE_MIN, CIRCLE_SIZE_MAX)
    const radius = size / 2
    const margin = size / 2
    
    const maxPosX = window.innerWidth - margin
    const maxPosY = window.innerHeight - margin
    const minPos = margin
    
    const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN)
    const angle = Math.random() * Math.PI * 2
    
    return {
      id: i,
      x: minPos + Math.random() * (maxPosX - minPos),
      y: minPos + Math.random() * (maxPosY - minPos),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: size,
      radius: radius,
    }
  })
}

// updates circle position and handles edge bouncing
export function updateCirclePosition(circle) {
  const margin = circle.size / 2
  const maxX = window.innerWidth - margin
  const maxY = window.innerHeight - margin

  let { x, y, vx, vy } = circle

  x += vx
  y += vy

  if (x <= margin) {
    x = margin
    vx = Math.abs(vx)
  } else if (x >= maxX) {
    x = maxX
    vx = -Math.abs(vx)
  }

  if (y <= margin) {
    y = margin
    vy = Math.abs(vy)
  } else if (y >= maxY) {
    y = maxY
    vy = -Math.abs(vy)
  }

  return { ...circle, x, y, vx, vy }
}

// Updates all circles
export function updateAllCircles(circles) {
  return circles.map((circle) => updateCirclePosition(circle))
}
