import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marque = () => {
  return (
    <div className="flex gap-4 bg-gray-100 mt-4">
        <button className="bg-[#D72050] px-8 text-white font-semibold justify-center items-center py-2" >Latest</button>
      <div>
      <Marquee pauseOnHover='true' speed={70} className="flex gap-24 my-2 ">
      <Link>  I can be a React component, multiple React components, or just some text.
      </Link>
      <Link>  I can be a React component, multiple React components, or just some text.
      </Link>
      <Link>  I can be a React component, multiple React components, or just some text.
      </Link>
      <Link>  I can be a React component, multiple React components, or just some text.
      </Link>
      </Marquee>
      </div>
    </div>
  );
};

export default Marque;
