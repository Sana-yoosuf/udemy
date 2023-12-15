import React from "react";
import Button from "react-bootstrap/Button";

const Courses = () => {
  return (
    <div className="mt-5">
      <div className="row m-3 d-flex">
        <h1 className="fw-bold fs-1 ">What to learn next</h1>
        <p className="fw-bold fs-3  g-3">
          Popular for Front End Web Developers
          <a className="link-opacity-100 fs-6 p-4 " href="#">
            Edit Occupation
          </a>
        </p>

        <div className="fw-bold fs-5 text-body-secondary">
          <Button variant="info" className="rounded-0 bg-primary-subtle fw-bold">New</Button>{" "}
          <span className="text-secondary fs-6 fw-light ">Inspired by your selection</span>
        </div>
      </div>
    </div>
  );
};

export default Courses;
