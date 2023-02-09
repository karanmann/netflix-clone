import React, { useState, useEffect} from "react";
import { FaPlay } from 'react-icons/fa'

import Image from 'next/image'
import { Movie } from "../typings";
import { BASE_URL } from "../constants/movie";
import { InformationCircleIcon } from "@heroicons/react/solid";
interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({netflixOriginals}: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(()=> {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  },[netflixOriginals])

  return (
    <div className="flex flex-col py-16 space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        {movie?.poster_path && (
          <Image
            src={`${BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
            className="object-cover"
            alt="movie banner"
            sizes="100vh"
            priority
            fill
          />
        )}
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="text-black bg-white bannerButton">
          <FaPlay className="w-4 h-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          <InformationCircleIcon className="w-5 h-5 md:h-8 md:w-8" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
