import React from "react";
import requests from "../utils/requests";
import Thumbnail from "./Thumbnail";
import { EmojiSadIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
const Results = ({ result }) => {
  return (
    <>
      {console.log(typeof result)}

      {typeof result === "object" ? (
        <div className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
          {result.map((item) => (
            <Thumbnail key={item.id} movie={item} />
          ))}
          {/* <div className=" flex overflow-hidden justify-center items-center  ">
   <EmojiSadIcon />
 </div> */}
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
