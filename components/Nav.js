import { useRouter } from "next/router";
import React from "react";
import { useState } from "react/cjs/react.development";
import requests from "../utils/requests";
const Nav = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const handleClick = (key, index) => {
    setActive(index);

    return router.push(`/?genre=${key}`);
  };

  return (
    <nav className="relative">
      <div className="flex  px-10 whitespace-nowrap space-x-8 sm:px-20 text-2xl overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, item], index) => (
          <h2
            className=" cursor-pointer hover:text-white active:text-red-700 
             hover:scale-75 transition duration-100 transform "
            onClick={() => handleClick(key, index)}
            key={key}
          >
            <span
              className={
                active === index &&
                "bg-gray-700 transition-colors duration-300 ease-in-out p-2"
              }
            >
              {item.title}
            </span>
          </h2>
        ))}
      </div>
      <div className=" absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12 "></div>
    </nav>
  );
};

export default Nav;
