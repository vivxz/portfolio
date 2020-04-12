import React from 'react';
import { Dialog } from "@reach/dialog";
import { MdMailOutline, MdKeyboardArrowLeft } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const Contact = ({ navContact, showDialog, close }) => {
  return (
    <>
      {navContact ? (
        <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="contact" className="contacts">
          <MdKeyboardArrowLeft onClick={close} className="close-btn"/>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-form">
                <form className="form" action="https://formspree.io/mlewdvkk" method="POST">
                  <div className="form-header">Contact me</div>
                  <div className="form-item">
                    <label className="form-labels">
                      Name:
                    </label>
                    <input type="text" name="name" id="name" required />
                  </div>
                  <div className="form-item">
                    <label className="form-labels">
                      Email:
                    </label>
                    <input type="text" name="_replyto" id="email" required />
                  </div>
                  <div className="form-item">
                    <label className="form-labels">
                      Subject:
                    </label>
                    <input type="text" name="subject" id="subject" required />
                  </div>
                  <div className="form-item">
                    <label className="form-labels">
                      Message:
                    </label>
                    <textarea name="message" id="message" required />
                  </div>
                  <input type="submit" className="send-btn" value="SEND" />
                </form>
              </div>
              <div className="split"></div>
              <div className="reach-me">
                <div className="form-header">Get in touch</div>
                <div className="reach-item">
                  <MdMailOutline className="devicons" />
                  <span className="reach-info">viviannquan@gmail.com </span>
                </div>
                <div className="reach-item">
                  <FaLinkedinIn className="devicons" />
                  <a href="https://www.linkedin.com/in/vivian-quan/" className="reach-info" target="_blank">vivian-quan</a>
                </div>
                <div className="reach-item">
                  <GoMarkGithub className="devicons" />
                  <a href="https://github.com/vivxz" className="reach-info" target="_blank">vivxz</a>
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