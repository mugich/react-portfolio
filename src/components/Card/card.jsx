import React from "react";
import "./style.css"

const Card = () => {
  return (
    
    <div className="row valign-wrapper row login-box">
      <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
        <div className="card ">
          <div className="card-image">
            <img src="images/sample-1.jpg" />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
