import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import Background from './components/Background'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AllMembersPage from './pages/AllMembersPage'
import MemberProfilePage from './pages/MemberProfilePage'

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full">
        <Background />
        <div className="relative" style={{ zIndex: 10 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/members" element={<AllMembersPage />} />
            <Route path="/member/:memberId" element={<MemberProfilePageWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

function MemberProfilePageWrapper() {
  const { memberId } = useParams()
  return <MemberProfilePage memberId={memberId} />
}

