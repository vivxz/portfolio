import React, { useState } from "react";

const Skills = (props) => {
  const [hoovered, setHoovered] = useState(false);

  const handleMouseHover = () => toggle();
  const toggle = () => setHoovered(!hoovered);

  return (
    <p className='stack' onMouseEnter={handleMouseHover}>
      {hoovered ? <i className={props.stack.color} /> : <i className={props.stack.bw} />}
    </p>
  )
}

export default Skills;