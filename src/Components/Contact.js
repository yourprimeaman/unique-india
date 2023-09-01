import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact-us-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Have a question or need assistance? Feel free to reach out to us.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    </section>
  )
}
