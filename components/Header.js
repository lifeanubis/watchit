import React from "react";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  LightningBoltIcon,
  CollectionIcon,
  UserIcon,
  SearchIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="flex flex-col  items-center  sm:flex-row m-5  justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title={"Home"} Icon={HomeIcon} />
        <HeaderItem title={"Trending"} Icon={LightningBoltIcon} />
        <HeaderItem title={"Verified"} Icon={BadgeCheckIcon} />
        <HeaderItem title={"Collections"} Icon={CollectionIcon} />
        <HeaderItem title={"Search"} Icon={SearchIcon} />
        <HeaderItem title={"Account"} Icon={UserIcon} />
      </div>
      <h1
        className="text-4xl bg-gradient-to-r
         from-emerald-900 to-orange-400 bg-clip-text 
          text-transparent h-full tracking-widest 
            hover:bg-gradient-to-l duration-1000 hover:transition-all
           
         
           "
      >
        wATcHIt
      </h1>
    </header>
  );
};

export default Header;
