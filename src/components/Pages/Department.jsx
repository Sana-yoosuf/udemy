import React from "react";
import '../../App.css'

const Department = () => {
  const dept = [
    "Development",
    "Business",
    "Finance & Accounting",
    "IT and Software",
    "Office Productivity",
    "Personal development",
    "Design",
    "Health and Fitness",
    "Music",
  ];
  return (
    <div>
      <hr />
      <div className="m-4 ">
        <div className="d-flex justify-content-around department">
          {dept.map((depts) => (
            <div className="d-inline fs-6 fw-normal ">{depts}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Department;
