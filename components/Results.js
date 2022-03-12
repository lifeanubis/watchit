import React from "react";
import requests from "../utils/requests";
import Thumbnail from "./Thumbnail";

const Results = ({ result }) => {
  return (
    <div className="overflow-x-hidden">
      {result.map((item) => (
        <Thumbnail key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default Results;
