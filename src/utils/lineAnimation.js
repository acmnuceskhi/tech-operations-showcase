// Line Animation Utilities

export const LINE_DISTANCE_THRESHOLD = 60  // distance ke line forms
export const LINE_WIDTH = 3
export const LINE_COLOR = 'white'

// Calculates Euclidean distance between two points
export function calculateDistance(x1, y1, x2, y2) {
  const dx = x2 - x1
  const dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}

// Builds 2D distance matrix using DP approach (symmetric matrix)
export function buildDistanceMatrix(circles) {
  const n = circles.length
  const dp = Array.from({ length: n }, () => new Array(n).fill(0))
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dist = calculateDistance(
        circles[i].x,
        circles[i].y,
        circles[j].x,
        circles[j].y
      )
      dp[i][j] = dist
      dp[j][i] = dist
    }
  }
  
  return dp
}

// Finds circle pairs within distance threshold
export function getConnectedPairs(circles, distanceMatrix, threshold = LINE_DISTANCE_THRESHOLD) {
  const connections = []
  const n = circles.length
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (distanceMatrix[i][j] <= threshold) {
        connections.push({
          from: circles[i],
          to: circles[j],
          distance: distanceMatrix[i][j]
        })
      }
    }
  }
  
  return connections
}

// Calculates all lines to draw between circles
export function calculateLines(circles) {
  const distanceMatrix = buildDistanceMatrix(circles)
  return getConnectedPairs(circles, distanceMatrix)
}
