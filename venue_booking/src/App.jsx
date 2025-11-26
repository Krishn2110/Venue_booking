import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import LoginPage from './components/Login.jsx'
import SignupPage from './components/Signup.jsx'
import AboutPage from './components/About.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
