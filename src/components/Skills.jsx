import React, { useState } from "react";

const Skills = (props) => {
  const [hovered, setHovered] = useState(false);
  const [firstLetter] = useState('d')

  const handleMouseHover = () => toggle();
  const toggle = () => setHovered(!hovered);

  const renderDevIcon = () => {
    if (hovered) {
      return <i onMouseEnter={handleMouseHover} className={props.stack.color} />
    } else {
      return <i onMouseEnter={handleMouseHover} className={props.stack.bw} />
    }
  }
  const renderSVGIcon = () => {
    if (hovered) {
      return <img className="svg-icon" onMouseEnter={handleMouseHover} src={props.stack.color} />
    } else {
      return <img className="svg-icon" onMouseEnter={handleMouseHover} src={props.stack.bw} />
    }
  }

  return (
    <p className='stack'>
      {firstLetter === props.stack.color[0] ? renderDevIcon() : renderSVGIcon()}
    </p>
  )
}

export default Skills;