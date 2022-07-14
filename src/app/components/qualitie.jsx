import React from "react";

const Qualities = ({ color, name, _id }) => {
  return (
    <>
      <span className={"badge m-1 bg-" + color} key={_id}>
        {name}
      </span>
    </>
  );
};

export default Qualities;
