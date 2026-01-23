import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Background from './components/Background'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import AllMembersPage from './pages/AllMembersPage'
import MemberProfilePage from './pages/MemberProfilePage'
import TinaAdminPage from './pages/TinaAdminPage'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full">
        <Background />
        <div className="" style={{ zIndex: 10 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
            <Route path="/members" element={<AllMembersPage />} />
            <Route path="/member/:memberId" element={<MemberProfilePageWrapper />} />
            <Route path="/admin/*" element={<TinaAdminPage />} />
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

