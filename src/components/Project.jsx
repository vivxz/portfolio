import React, { useState, useEffect } from 'react';
import { Dialog } from "@reach/dialog";
import FrontEnd from './Applications/FrontEnd';
import AllApps from './Applications/AllApps';
import BackEnd from './Applications/BackEnd';
import FullStack from './Applications/FullStack';
import { MdKeyboardArrowLeft } from "react-icons/md";

const Project = ({ navApps, showDialog, close }) => {
  const [allApps, setAllApps] = useState(true);
  const [frontEnd, setFrontEnd] = useState(false);
  const [backEnd, setBackEnd] = useState(false);
  const [fullStack, setFullStack] = useState(false);

  const all = () => {
    setFrontEnd(false);
    setBackEnd(false);
    setFullStack(false);
    setAllApps(true);
  };

  const front = () => {
    setAllApps(false);
    setBackEnd(false);
    setFullStack(false);
    setFrontEnd(true)
  };

  const back = () => {
    setAllApps(false)
    setFrontEnd(false);
    setFullStack(false);
    setBackEnd(true)
  };

  const full = () => {
    setAllApps(false);
    setFrontEnd(false);
    setBackEnd(false);
    setFullStack(true);
  }

  useEffect(() => {
    console.error;
  }, [allApps, frontEnd, backEnd, fullStack]);

  return (
    <div>
    {navApps ? (
    <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
    <MdKeyboardArrowLeft onClick={close} className="close-btn" />
    <div className="apps-container">
      <div className="apps-sections">
        <div className="apps-header">Applications</div>
      </div>
      <div className="app-btn-container">
        <button className="app-btn" onClick={all}>All</button>
        <button className="app-btn" onClick={front}>Front End</button>
        <button className="app-btn" onClick={back}>Back End</button>
        <button className="app-btn" onClick={full}>Full Stack</button>
      </div>
      <hr className="hr-spacing" />

      {allApps ? <AllApps />
      : frontEnd ? <FrontEnd /> 
      : backEnd ? <BackEnd /> 
      : fullStack ? <FullStack /> 
      : null}

    </div>
  </Dialog>
    ) : null}
  </div>
  )
}

export default Project;