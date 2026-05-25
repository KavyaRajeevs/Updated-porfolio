import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
