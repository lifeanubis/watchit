import React from "react";
import requests from "../utils/requests";
import Thumbnail from "./Thumbnail";
import { EmojiSadIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import { useState } from "react/cjs/react.development";
const Results = ({ result }) => {
  const [first, setFirst] = useState(0);

  const scrollHandler = () => {
    window.addEventListener("scroll", () => {
      setFirst(window.scrollY);
    });
  };

  return (
    <>
      {scrollHandler()}

      {typeof result == "object" ? (
        <div className="">
          <div
            className={first > 200 ? "  z-50 fixed  w-full mt-96 " : " hidden"}
          >
            <button
              className="   w-12  h-12 float-right  mx-10     bg-slate-100    "
              onClick={() => window.scrollTo(0, "100vh")}
            />
          </div>
          <div className="  px-10 py-10  sm:grid md:grid-cols-2 xl:grid-cols-3   ">
            {result.map((item) => (
              <Thumbnail key={item.id} movie={item} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className=" flex  justify-center items-center 
          my-40 overflow-hidden "
        >
          <EmojiSadIcon className="w-48 h-48 animate-spin  " />
          <h1> Error while loading data... </h1>
        </div>
      )}
    </>
  );
};

export default Results;
