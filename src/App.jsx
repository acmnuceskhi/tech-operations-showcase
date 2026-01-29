import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Background from './components/Background'
import Overlay from './components/Overlay'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import AllMembersPage from './pages/AllMembersPage'
import MemberProfilePage from './pages/MemberProfilePage'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full relative">
        <Background />
        {/* <Overlay /> */}
        {/* <div className="relative" style={{ zIndex: 10 }}> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
            <Route path="/members" element={<AllMembersPage />} />
            <Route path="/member/:memberId" element={<MemberProfilePageWrapper />} />
          </Routes>
        </div>

      {/* </div> */}
    </Router>
  )
}

function MemberProfilePageWrapper() {
  const { memberId } = useParams()
  return <MemberProfilePage memberId={memberId} />
}
