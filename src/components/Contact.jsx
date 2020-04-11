import React from 'react';
import { Dialog } from "@reach/dialog";

const Contact = ({ navContact, showDialog, close }) => {
  return (
    <>
      {navContact ? (
        <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
          <button className="close-button" onClick={close}>
            CLOSE
          </button>
          <div className="contact-container" id="contact">
            <div className="contact-card">
              <div className="contact-form">
                <form className="form" action="https://formspree.io/mlewdvkk" method="POST">
                  <h1>Contact me</h1>
                  <div className="form-item">
                    <label>
                      Name:
                <input type="text" name="name" className="name" required />
                    </label>
                  </div>
                  <div className="form-item">
                    <label>
                      Email:
              <input type="text" name="_replyto" id="email" required />
                    </label>
                  </div>
                  <div className="form-item">
                    <label>
                      Subject:
              <input type="text" name="subject" id="subject" required />
                    </label>
                  </div>
                  <div className="form-item">
                    <label>
                      Message:
              <textarea name="message" id="message" required />
                    </label>
                  </div>
                  <input type="submit" value="SEND" />
                </form>
              </div>
              <div className="contact-info">
                <h1>Let's get in touch</h1>
                <div className="form-item">
                  <p>Email</p>
                  <p>viviannquan@gmail.com</p>
                </div>
                <div className="form-item">
                  <p>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/vivian-quan/" target="_blank">vivian-quan</a>
                </div>
                <div className="form-item">
                  <p>Github</p>
                  <a href="https://github.com/vivxz" target="_blank">vivxz</a>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      ) : null
      }
    </>
  );
}

export default Contact;