import React from 'react';
import { Dialog } from "@reach/dialog";
import { MdKeyboardArrowLeft } from "react-icons/md";


const Resume = ({ showDialog, navResume, close }) => {
  return (
    <>
      {navResume ? (
        <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
          <MdKeyboardArrowLeft onClick={close} className="close-btn" />
          <div className="resume-container">
            <div className="resume-header">Resume</div>
            <iframe className="resume" src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/vqresume.pdf" />
          </div>
        </Dialog>
      ) : null
      }
    </>
  )
}

export default Resume;