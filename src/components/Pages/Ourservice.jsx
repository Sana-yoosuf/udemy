import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";

const Ourservice = () => {
  return (
    <div className="mt-5 ">
      <hr />
      <div className="d-flex justify-content-around fw-bold fs-5  justify-content-center align-items-center">
        <div className="d-flex  align-items-center gap-3">
          <div
            style={{
              backgroundColor: "#e0ebeb",
              width: "50px",
              height: "50px",
            }}
            className="rounded-circle  d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="d-flex  align-items-center justify-content-center"><p>
            Learn in-demand skills with over
            <br /> 210,000 video courses
          </p></div>
          
        </div>
        <div className="d-flex  align-items-center gap-3">
          <div
            style={{
              backgroundColor: "#e0ebeb",
              width: "50px",
              height: "50px",
            }}
            className="rounded-circle  d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="d-flex  align-items-center justify-content-center"><p>
          Choose courses taught by real-world<br/> experts
          </p></div>
          
        </div>
        <div className="d-flex  align-items-center gap-3">
          <div
            style={{
              backgroundColor: "#e0ebeb",
              width: "50px",
              height: "50px",
            }}
            className="rounded-circle  d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon icon={faInfinity} />
          </div>
          <div className="d-flex  align-items-center justify-content-center"><p>
          Learn at your own pace, with lifetime<br/> access on mobile and desktop
          </p></div>
          
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Ourservice;
