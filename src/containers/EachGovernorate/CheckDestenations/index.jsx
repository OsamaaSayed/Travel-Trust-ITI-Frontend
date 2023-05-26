import React from "react";
import { Link } from "react-router-dom";

import CheckDestCard from "../../../components/CheckDestCard";

import Image1 from "../../../assets/images/CheckDestinations/Aswan.png";
import Image2 from "../../../assets/images/CheckDestinations/Luxor.png";
import Image3 from "../../../assets/images/CheckDestinations/Nouba.png";
import Image4 from "../../../assets/images/CheckDestinations/Alex.png";

const CheckDestenations = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="flex 2xs:flex-col 2xs:items-start xs:flex-row xs:items-center justify-between ">
          <h3 className="2xs:text-lg xs:text-xl lg:text-2xl 2xl:text-3xl xs:mb-4">
            Check out other destinations
          </h3>
          <Link to="" className="2xs:mb-2 xs:mb-4 md:text-lg 2xl:text-xl text-primary-green hover:underline">
            View all destinations
          </Link>
        </div>

        <div className="container grid gap-2 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CheckDestCard city="Aswan" url={Image1} />
          <CheckDestCard city="Luxor" url={Image2} />
          <CheckDestCard city="Nouba" url={Image3} />
          <CheckDestCard city="Alex" url={Image4} />
        </div>
      </div>
    </section>
  );
};

export default CheckDestenations;
