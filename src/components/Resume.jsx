import React from 'react';
import { Dialog } from "@reach/dialog";

const Resume = ({ showDialog, navResume, close }) => {

  const roger = () => navigate('/dist')

  return (
    <>
      {navResume ? (
        <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
          <button className="close-button" onClick={close}>
            CLOSE
          </button>
          <div className="resume-container">
            <object width="100%" height="450px" data="https://vivs-portfolio.s3-us-west-1.amazonaws.com/resume.pdf" type="application/pdf" />
          </div>
        </Dialog>
      ) : null
      }
    </>
  )
}

export default Resume;