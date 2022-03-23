import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ key, movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      className="p-2 group cursor-pointer transition-all scroll-smooth
        duration-300  ease-in-out  transform sm:hover:scale-105 hover:z-10 "
    >
      <Image
        height={1080}
        width={1920}
        layout="responsive"
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
      />
      <div className="p-2">
        <p className="truncate max-w-md"> {movie.overview} </p>
        <h2
          className="mt-1 text-2xl text-white
        transition-all duration-100 ease-in-out group-hover:font-bold"
        >
          {movie.original_name || movie.title}
        </h2>{" "}
        <p
          className="flex cursor-pointer items-center
         opacity-0 group-hover:opacity-100 "
        >
          {movie.media_type && `${movie.media_type}`}
          {movie.first_air_date || movie.release_date}
          <ThumbUpIcon className="h-5 mx-2 " /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
