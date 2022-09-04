import React from "react";

import Video from "../../assets/Roots.mp4";
import "./Body.css";

function homeBody() {
  return (
    <div>
      <video autoPlay muted preload="auto" playsInline loop className="video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default homeBody;
