import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [bounce, setBounce] = useState(false)

  // Mouse follow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Entrance animation
  useEffect(() => {
    setIsVisible(true)

    // Bounce animation every 3 seconds
    const bounceInterval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 1000)
    }, 3000)

    return () => clearInterval(bounceInterval)
  }, [])

  return (
    <div className="not-found-container min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden">
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
          }}
        />
      ))}

      {/* Mouse follower */}
      <div
        className="mouse-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <div className="container text-center">
        <div className={`row ${isVisible ? "fade-in" : ""}`}>
          <div className="col-12">
            <h1 className={`error-code display-1 fw-bold ${bounce ? "bounce" : ""}`}>
              4<span className="text-primary rotating">0</span>4
            </h1>

            <div className="error-message mb-4">
              <h2 className="slide-in-right">Página não encontrada</h2>
              <p className="slide-in-left text-muted">Ops! Parece que você se perdeu no caminho.</p>
            </div>

            <div className="error-icons mb-5 d-flex justify-content-center">
              <i className="bi bi-emoji-dizzy-fill text-warning mx-2 icon-pulse"></i>
              <i className="bi bi-question-circle-fill text-info mx-2 icon-shake"></i>
              <i className="bi bi-exclamation-triangle-fill text-danger mx-2 icon-bounce"></i>
            </div>

            <Link to="/" className="btn btn-primary btn-lg pulsate">
              <i className="bi bi-house-door-fill me-2"></i>
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound