import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Quiz from './pages/Quiz'
import PasswordChecker from './pages/PasswordChecker'
import News from './pages/News'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<News />} />

        {/* Feature Routes */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/password" element={<PasswordChecker />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App