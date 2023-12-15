import React from "react";
import Button from "react-bootstrap/Button";

const Companyname = () => {
  return (
    <div style={{ background: "#000" }} className="mx-4 my-5  ">
      <div className="p-5 d-flex  justify-content-between  align-items-center">
        <div>
          <span className="bg-black text-white fw-bold fs-5">
            Training 2 or more people?
          </span>
          <span className="bg-black text-white fs-5">
            {" "}
            Get your team access to Udemy's top 25,000+ courses
          </span>
        </div>

        <div>
          <Button variant="light" className="bg-white p-3 fw-bold rounded-0">Get Udemy Business</Button>{" "} {" "}
          <Button variant="outline-light " className="p-3 fw-bold rounded-0">Dismiss</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Companyname;
