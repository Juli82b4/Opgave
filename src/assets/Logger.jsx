import React, { useEffect } from "react";

const Logger = () => {
  useEffect(() => {
    console.log("Component has rendered");
  });

  return <p className="render-text">Check the console for a long message</p>

};

export default Logger;
