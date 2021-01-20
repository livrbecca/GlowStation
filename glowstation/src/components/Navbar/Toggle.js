import React from "react";

const Toggle = (props) => {
  return (
    <>
      <button id="toggle" onClick={props.click}>
        &#8801; menu
      </button>
    </>
  );
};

export default Toggle;
