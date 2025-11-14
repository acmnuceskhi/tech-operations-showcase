import React from 'react'
import './App.css'
import Background from './components/Background'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className="relative min-h-screen w-full">
      <Background />
      <div className="relative" style={{ zIndex: 10 }}>
        <HomePage />
      </div>
    </div>
  )
}

