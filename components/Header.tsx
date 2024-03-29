import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // It is important to remove the eventlistner to clean up the code
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="images/logo/Netflix_2015_logo.svg"
          width={100}
          height={100}
          alt="netflix"
          className="object-contain cursor-pointer"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden w-6 h-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />
        {/* <Link href="/account"> */}
          <img
            src="images/logo/avatar.png"
            alt="user"
            className="rounded cursor-pointer"
            onClick={logout}
          />
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
