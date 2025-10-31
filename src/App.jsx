import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={viteLogo} className="h-24 p-4" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110 animate-spin-slow">
            <img src={reactLogo} className="h-24 p-4" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tech Operations Showcase
        </h1>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          React + Vite + Tailwind CSS
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-6">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Edit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
