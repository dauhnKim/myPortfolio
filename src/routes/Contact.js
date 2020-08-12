import React from 'react';
import CopyMailTo from "react-copy-mailto";
import './Contact.css';

function Contact() {
    return(
      <main className="contact_main">
        <div className="contact_container">
            <h1>Contact</h1>
            <div>
              <div className="mail">
                <CopyMailTo email="dauhn357@gmail.com" />
              </div>
              <p><i>+82 10 7620 5173</i></p>
            </div>
        </div>
      </main>
    );
}


export default Contact;
