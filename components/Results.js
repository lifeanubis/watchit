import React from "react";
import requests from "../utils/requests";
import Thumbnail from "./Thumbnail";

const Results = ({ result }) => {
  return (
    <div className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 ">
      {result.map((item) => (
        <Thumbnail key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default Results;
