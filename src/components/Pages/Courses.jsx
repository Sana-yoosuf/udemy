import React from "react";

const Courses = () => {
  const course = [
    "Python",
    "Excel",
    " Web Development",
    " Javascript",
    "Data Science",
    "Drawing",
  ];
  return (
    <div className="mt-5">
      <div className="row m-3 d-flex">
        <h1 className="fw-bold fs-1 ">A broad selection of courses</h1>
        <h3 className="fs-3 text-body-secondary g-3">
          Choose from over 210,000 online video courses with new additions
          published every month
        </h3>
      </div>
      <div className="fw-bold fs-5 text-body-secondary">
       
         <div className="menu">
          {course.map((courses) => (
            <div className="d-inline p-4">
              {courses}
            </div>
          ))}
        </div>
      </div>

     
       
      
    </div>
  );
};

export default Courses;
