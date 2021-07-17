import React from 'react'
import CopyMailTo from 'react-copy-mailto'
import './Contact.css'

function Contact() {
  return (
    <main className="contact_main">
      <div className="contact_container">
        <h1>Contact</h1>
        <div>
          <div className="mail">
            <CopyMailTo
              email="dauhn357@gmail.com"
              tooltipStyles={{
                bottom: '80px',
                boxShadow: 'none',
                borderRadius: 0,
              }}
            />
          </div>
          <p>
            <a href="https://linkedin.com/in/dauhn-kim" target="_blank">
              linkedin.com/in/dauhn-kim
            </a>
          </p>
          <p>+82 10 7620 5173</p>
        </div>
      </div>
    </main>
  )
}

export default Contact
