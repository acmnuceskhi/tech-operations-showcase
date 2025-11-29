import React, { useState, useEffect, useRef } from 'react'
import WhiteCircleCanvas from './WhiteCircleCanvas'
import LineCanvas from './LineCanvas'
import { 
  NUM_CIRCLES,
  generateRandomCircles,
  updateAllCircles 
} from '../utils/circleAnimation'
import { calculateLines, LINE_WIDTH, LINE_COLOR } from '../utils/lineAnimation'

export default function Background() {
  const [circles, setCircles] = useState([])
  const [lines, setLines] = useState([])
  const circlesRef = useRef([])
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const initialCircles = generateRandomCircles(NUM_CIRCLES)
    setCircles(initialCircles)
    circlesRef.current = initialCircles

    function animate() {
      circlesRef.current = updateAllCircles(circlesRef.current)
      const currentLines = calculateLines(circlesRef.current)
      
      setCircles([...circlesRef.current])
      setLines(currentLines)
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black" style={{ zIndex: 0 }}>
      <LineCanvas lines={lines} color={LINE_COLOR} lineWidth={LINE_WIDTH} />
      
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${circle.x}px`,
            top: `${circle.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <div 
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              filter: 'blur(20px) brightness(1.5)',
              opacity: 1,
              transform: 'translate(-50%, -50%)',
              mixBlendMode: 'screen',
              zIndex: 1,
            }}
          >
            <WhiteCircleCanvas size={circle.size} radius={circle.radius} />
          </div>
          <div 
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}
          >
            <WhiteCircleCanvas size={circle.size} radius={circle.radius} />
          </div>
        </div>
      ))}
    </div>
  )
}
