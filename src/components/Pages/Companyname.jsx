import React from "react";
import att from "../../assets/imgs/att.svg";
import cisco from "../../assets/imgs/cisco.svg";
import samsung from "../../assets/imgs/samsung.svg";
import ericsson from "../../assets/imgs/ericsson.svg";
import vols from "../../assets/imgs/volkswagen.svg";
import citi from "../../assets/imgs/citi.svg";
import PG from "../../assets/imgs/procter_gamble.svg";
import havlett from "../../assets/imgs/hewlett_packard_enterprise.svg";
const Companyname = () => {
  const images = [vols, samsung, cisco, att, PG, havlett, citi, ericsson];

  return (
    <div style={{ background: "#f2f2f2" }} className="mt-5 container-fluid mb-5">
      <div className="p-5 d-flex justify-content-center">
        <div>
          <h5 className="text-secondary p-4 fs-4 ">
            Trusted by over 15,000 companies and millions of learners around the
            world
          </h5>
          <div className="  d-flex justify-content-center grid gap-0 column-gap-3 ">
            {images.map((img) => (
              <img
                src={img}
                alt="logo of companies"
                width="100"
                height="60"
                className=" g-col-6 d-flex justify-content-center "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companyname;
