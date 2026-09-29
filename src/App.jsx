import { Routes, Route } from 'react-router-dom'
import PresentationNav from './components/PresentationNav'
import Home from './pages/Home'
import Syllabus from './pages/Syllabus'
import Topic1 from './pages/Topic1'
import Topic2 from './pages/Topic2'
import Topic3 from './pages/Topic3'

function App() {
  return (
    <>
      <PresentationNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/topic1" element={<Topic1 />} />
        <Route path="/topic2" element={<Topic2 />} />
        <Route path="/topic3" element={<Topic3 />} />
      </Routes>
    </>
  )
}

export default App
