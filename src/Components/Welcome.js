import React from 'react'
import './Welcome.css'

export default function Welcome() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Digital Marketing</h1>
          <p>Your Success, Our Priority</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <i className="fas fa-chart-line"></i>
          <h2>Analytics</h2>
          <p>Track and analyze your marketing campaigns with powerful analytics tools.</p>
        </div>

        <div className="feature">
          <i className="fas fa-bullhorn"></i>
          <h2>Advertising</h2>
          <p>Maximize your reach through targeted online advertising campaigns.</p>
        </div>

        <div className="feature">
          <i className="fas fa-users"></i>
          <h2>Social Media</h2>
          <p>Engage with your audience and build brand awareness on social media platforms.</p>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-content">
          <h2>What Our Clients Say</h2>
          <p>"Digital Marketing has transformed our business. The results speak for themselves!"</p>
          <p className="client-name">UNIQUE INDIA</p>
        </div>
      </section>
    </div>
  )
}
