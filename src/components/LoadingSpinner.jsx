import React from 'react'

/**
 * LoadingSpinner Component
 *
 * Displays a loading indicator while data is being fetched.
 * Used by pages that load data from Tina CMS.
 */
export default function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p className="mt-4 text-white text-lg">{message}</p>
      </div>
    </div>
  )
}
