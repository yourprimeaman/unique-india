import React from 'react'
import './Services.css'

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Digital Marketing</h3>
          <p>
            We offer comprehensive digital marketing solutions, including SEO,
            social media marketing, and content creation to boost your online
            visibility and engagement.
          </p>
        </div>
        <div className="service">
          <h3>Branding Strategy</h3>
          <p>
            Our branding experts will help you create a compelling brand
            identity that resonates with your target audience and sets you apart
            from the competition.
          </p>
        </div>
        <div className="service">
          <h3>Web Design</h3>
          <p>
            Our skilled designers will craft a modern and user-friendly website
            that represents your brand and converts visitors into loyal
            customers.
          </p>
        </div>
        {/* Add more services here */}
      </div>
    </section>
  )
}
