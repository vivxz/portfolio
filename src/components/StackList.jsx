import React from "react";

const StackList = (props) => {
  return (
    <span>
      {!(props.index === props.last) ? <span><span className="techstack-name">{props.stack.name}</span> | </span> : <span className="techstack-name">{props.stack.name}</span>}
    </span>
  )
}

export default StackList;
