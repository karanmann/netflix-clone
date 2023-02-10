import React, { useState, useRef } from "react";

import Thumbnail from "./Thumbnail";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Movie } from "../typings";

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false)

  const handleChevronClick = (direction: string) => {
    setIsMoved(true)

    if(rowRef.current) {
      const {scrollLeft, clientWidth} = rowRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="relative group md:-ml-2">
        {/* <ChevronLeftIcon
          className={`chevronButton left-2 ${!isMoved && "hidden"}`}
          onClick={() => handleChevronClick("left")}
        /> */}
        <ChevronLeftIcon
          className={`chevronButton left-2`}
          onClick={() => handleChevronClick("left")}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="chevronButton right-2"
          onClick={() => handleChevronClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;
